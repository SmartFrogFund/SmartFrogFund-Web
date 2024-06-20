"use client";

import React, { useState, useEffect } from "react";
import { BaseError, useAccount } from "wagmi";
import { useSearchParams } from "next/navigation";
import { formatEther, parseEther } from "viem";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import Link from "next/link";
import { useTheGraph } from "@/hooks/useGraph";
import { useWriteNewProject } from "@/hooks/useContract";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Progress,
  Popover,
  message,
} from "antd";
import StepModal from "./_components/stepModal";
import Inverment from "./_components/inverment";
import Examine from "./_components/examine";

import styles from "../../styles/detail.module.scss";
import "../../styles/detail.css";

dayjs.extend(utc);

interface ProjectCreated {
  projectId: string;
  _description:string;
  _link:string;
  deadline:string;
  goalAmount:string;
  creator:string;
  // other fields...
}

interface progressUpdated {
  projectId:string;
  progress:number;
  details:string;
  // other fields...
}

interface DetailData {
  projectCreateds?: ProjectCreated[];
  progressUpdateds?:progressUpdated[];
  // progressRevieweds?:progressReviewed[];
  // fundsDistributeds?:fundsDistributed[];
  // other fields...
}

const graphApiUrl = process.env.NEXT_PUBLIC_GRAPH_API_URL;
console.log(graphApiUrl, "graphApiUrl");
const DetailPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData] = Form.useForm();
  const { address } = useAccount();
  const [percent, setPercent] = useState(0);
  const [processForm, setProcessForm] = useState({
    Step1: "",
    Step2: "",
    Step3: "",
    Step4: "",
  });
  const percentEnum = {
    0: 0,
    1: 30,
    2: 50,
    3: 70,
    4: 100,
  };
  // 编辑
  const [isEditing, setIsEditing] = useState(false);
  // 非创建人(投资人->已投资或潜在投资)
  const [isInvestors, setIsInvestors] = useState(false);
  // 时间格式处理
  const disabledDate = (current:any) => current && current < dayjs().endOf("day");
  const query = Object.fromEntries(useSearchParams().entries());
  const {
    projectId, hasInvest, allowExamine,
  } = query;

  const handleOk = (newData: any) => {
    setIsModalOpen(false);
    console.log("Updated data:", newData);
    const strNewData = JSON.stringify(newData);
    console.log(strNewData, "strNewData");
    console.log(JSON.parse(strNewData));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onStep = () => {
    // 申请进行下一步
  };
  // const {
  //   data,
  //   isError,
  //   isSuccess,
  // } = useWriteNewProject([
  //   '测试Title',
  //   '测试desc',
  //   'https:111',
  //   23,
  //   3453454
  // ]);
    // 获取详情信息
  const {
    data: detailsRes,
    loading,
    error,
  } = useTheGraph({
    url: graphApiUrl || "",
    // query: `{
    //   projectCreateds(projectId: ${projectId}) {    id    projectId    creator    goalAmount    deadline    _description    _link    blockTimestamp  }
    //   fundsDistributeds(projectId: ${projectId}) {   id  projectId    amount  blockTimestamp  }
    //   progressUpdateds (projectId: ${projectId}){   id   projectId   progress    details    blockTimestamp  }
    //   progressRevieweds(projectId: ${projectId}) {    id    projectId       blockTimestamp  }
    //   }`,
    query: `{
      projectCreateds {    id    projectId    creator    goalAmount    deadline    _description    _link    blockTimestamp  }
      fundsDistributeds {   id  projectId    amount  blockTimestamp  }
      progressUpdateds {   id   projectId   progress    details    blockTimestamp  }
      progressRevieweds {    id    projectId       blockTimestamp  }
      }`,
  });

  const {
    creatProject, data, isError, isSuccess, isPending, error: creatProError, failureReason,
  } = useWriteNewProject();

  // loading及异常
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    console.log(isPending);
    if (isPending) {
      messageApi.open({
        type: "loading",
        content: "Action in progress..",
        duration: 0,
      });
    } else {
      // Dismiss manually and asynchronously
      setTimeout(messageApi.destroy, 1500);
    }
    if (isError) {
      console.log(isError, creatProError, failureReason, "isError");
      console.log((creatProError as BaseError)?.shortMessage, "@@@@");
      const content = (creatProError as BaseError)?.shortMessage;
      if (isError) {
        messageApi.open({
          type: "error",
          content,
        });
      }
    }
    if (isSuccess) {
      console.log(isSuccess, "isSuccess");
    }
  }, [isPending, isError, isSuccess]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // 信息表单
  const onFinish = (values: any) => {
    const {
      projectName, projectLink, projectNeedETH, projectDescription, projectDeadline,
    } = values;
    // 转化为UTC时间戳
    const projectDeadlineUTC = projectDeadline ? dayjs(projectDeadline).utc().valueOf() : null;

    const projectNeedETHForWei = parseEther(String(projectNeedETH));
    const args = [
      projectName,
      projectDescription,
      projectLink,
      projectNeedETHForWei,
      projectDeadlineUTC,
    ];
    console.log(args, "args");
    creatProject(args, "createProject");
  };

  const comTitle = () => {
    let title;
    let title2 = "";
    if (projectId) {
      if (isInvestors) {
        title = "Project info";
        if (hasInvest) {
          // 审核组件
          title2 = "Project progress increased from 30% to 50%";
        } else {
          // 投资组件
          title2 = "Investment information";
        }
      } else {
        title = "Project Update";
      }
    } else {
      title = "Project Registration";
    }

    return {
      title,
      title2,
    };
  };

  useEffect(() => {
    if (projectId && detailsRes) {
      console.log(detailsRes, "detailsRes");
      setIsEditing(true);
      // Fetch the project data by ID and populate the form (mocked here)
      const { data: detailData } = detailsRes as {data: DetailData};
      const formInfo = detailData.projectCreateds && detailData.projectCreateds.find((item) => item.projectId === projectId);
      if (formInfo) { // 表单数据
        const bigIntValue = BigInt(formInfo.goalAmount);
        const ethValue = formatEther(bigIntValue);
        const projectNeedETH = Number(ethValue);
        const projectDeadlineNum = formInfo.deadline ? Number(formInfo.deadline) : null;
        const projectDeadline = projectDeadlineNum !== null ? dayjs.unix(projectDeadlineNum).utc() : null;
        console.log("address", address);
        // const creatorAddress = formInfo.creator;
        const creatorAddress = "0x90F79bf6EB2c4f870365E785982E1f101E93b906";
        if (address === creatorAddress) setIsInvestors(false);
        console.log(isInvestors, "isInvestors");
        const fetchedData = {
          projectName: "Existing Project",
          projectDescription: formInfo._description,
          projectNeedETH,
          projectLink: formInfo._link,
          projectDeadline,
        };
        formData.setFieldsValue(fetchedData);
        console.log(formData, "formData");
      }
      const ProcessInfo = detailData.progressUpdateds && detailData.progressUpdateds.find((item) => item.projectId === projectId);
      // if (ProcessInfo) {
      // const processPercent = ProcessInfo.progress || 0;
      const processPercent = 10;
      setPercent(processPercent);
      // eslint-disable-next-line quotes
      const text = '{"Step1":"1.我测试一下\\n2.测试测试","Step2":"1.我测试一下\\n2.测试测试","Step3":"1.我测试一下\\n2.测试测试\\n3.测试一下嘛"}';
      console.log(JSON.parse(text), "text");
      const newProcessFor = JSON.parse(text);
      setProcessForm(newProcessFor);
    }
  }, [projectId, detailsRes]);

  return (
    <div className={`${styles.container} mt-10 `}>
      <div className={styles.title}>{comTitle().title}</div>
      {contextHolder}
      <Form
        disabled={!!isInvestors}
        className={`${styles.formBox} detailFrom ${
          isInvestors ? `${styles.isInvestors}` : ""
        }`}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        form={formData}
        size="large"
        style={{ width: 640 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Project Name"
          name="projectName"
          rules={[
            { required: true, message: "Please input the project name!" },
          ]}
        >
          <Input disabled={isEditing} />
        </Form.Item>
        <Form.Item
          label="Project Description"
          name="projectDescription"
          rules={[
            {
              required: true,
              message: "Please input the project description!",
            },
          ]}
        >
          <Input.TextArea rows={4} disabled={isEditing} />
        </Form.Item>

        <Form.Item
          label="Project Link"
          name="projectLink"
          rules={[
            { required: true, message: "Please input the project link!" },
          ]}
        >
          <Input addonBefore="https://" disabled={isEditing} />
        </Form.Item>
        <Form.Item
          label="Project Need ETH"
          name="projectNeedETH"
          rules={[
            {
              required: true,
              message: "Please input the amount of ETH needed!",
            },
          ]}
        >
          <InputNumber disabled={isEditing} style={{ width: 200 }} />
        </Form.Item>
        <Form.Item
          label="Project Deadline"
          name="projectDeadline"
          rules={[
            { required: true, message: "Please input the project deadline!" },
          ]}
        >
          <DatePicker
            format="YYYY-MM-DD"
            style={{ width: 200 }}
            disabled={isEditing}
            disabledDate={disabledDate}
          />
        </Form.Item>
        {!isInvestors && !isEditing ? (
          <Form.Item style={{ textAlign: "right" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#97D44A" }}
            >
              Submit
            </Button>
          </Form.Item>
        ) : (
          ""
        )}

        {
        !isInvestors && isEditing ? (
          <Form.Item label="Project progress" name="projectProcessDetail">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Progress
                percent={percent}
                steps={4}
                strokeColor="#97D44A"
                trailColor="#B5C5A4"
                size={40}
                className={styles.progress}
              />
              <Button
                ghost
                className={styles.processBtn}
                onClick={showModal}
                disabled={false}
              >
                Details
              </Button>

              {isEditing && !isInvestors ? (
                <Popover
                  placement="rightTop"
                  overlayStyle={{ width: "200px" }}
                  title="notice:"
                  content="It needs to be approved before it can proceed to the next step"
                >
                  <Button
                    ghost
                    className="stepBtn"
                    disabled={isEditing}
                    onClick={onStep}
                  >
                    Next Step
                  </Button>
                </Popover>
              ) : (
                <Button
                  ghost
                  className="stepBtn"
                  disabled={isEditing}
                  onClick={onStep}
                >
                  Next Step
                </Button>
              )}
            </div>
          </Form.Item>
        ) : ""
      }
      </Form>

      <StepModal
        isInvestors={!!isInvestors}
        isModalOpen={isModalOpen}
        initialData={processForm}
        onOk={handleOk}
        onCancel={handleCancel}
      />

      {!!isInvestors && !hasInvest ? (
        <Inverment title={comTitle().title2} />
      ) : (
        ""
      )}

      {!!isInvestors && !!hasInvest && !!allowExamine ? (
        <Examine title={comTitle().title2} />
      ) : (
        ""
      )}
    </div>
  );
};
export default DetailPage;
