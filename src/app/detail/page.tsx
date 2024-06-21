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
import { usePercentInfo } from "@/hooks/uesPercentInfo";
import { toLowerCaseEthereumAddress } from "@/utils/util";

import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Progress,
  message,
} from "antd";
import { DetailData } from "@/app/detail/_interface/detail";
import StepModal from "./_components/stepModal";
import Inverment from "./_components/inverment";
import Examine from "./_components/examine";
import Loading from "../lodaing";

import styles from "../../styles/detail.module.scss";
import "../../styles/detail.css";

dayjs.extend(utc);

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
  const stepToPercent = new Map([
    [0, 0],
    [1, 30],
    [2, 50],
    [3, 70],
    [4, 100],
  ]);

  const percentToStep = new Map([
    [0, 0],
    [30, 1],
    [50, 2],
    [70, 3],
    [100, 4],
  ]);
  const percentToStepName = new Map([
    [30, "Step1"],
    [50, "Step2"],
    [70, "Step3"],
    [100, "Step4"],
  ]);
  const {
    postCB, data, isError, isSuccess, isPending, error: creatProError, failureReason,
  } = useWriteNewProject();
  const { getPercentInfo } = usePercentInfo();
  // loading及异常
  const [messageApi, contextHolder] = message.useMessage();
  // 编辑
  const [isEditing, setIsEditing] = useState(false);
  // 非创建人(投资人->已投资或潜在投资)
  const [isInvestors, setIsInvestors] = useState(false);
  // (当前项目已投资/潜在投资用户)
  const [hasInvest, setHasInvest] = useState(false);

  const [graphLoading, setGraphLoading] = useState(false);

  // 时间格式处理

  const disabledDate = (current: any) => {
    // 将 current 转换为 dayjs 对象，如果 current 为空，则返回 true，即禁用
    const currentDayjs = current ? dayjs(current) : null;

    // 获取当前时间的 dayjs 对象，并将精度缩小到分钟
    const now = dayjs().second(0).millisecond(0);

    // 如果 currentDayjs 存在且在当前时间之前，则禁用
    return !!(currentDayjs && currentDayjs.isBefore(now));
  };
  const query = Object.fromEntries(useSearchParams().entries());
  const {
    projectId,
  } = query;

  // 投资金额
  const inveronOk = (amount:any) => {
    console.log(amount, typeof amount, "amount");
  };

  // 更新进度
  const handleOk = (newData: any) => {
    console.log("Updated data:", newData);

    const updateStep = percentToStep.get(percent);

    // 百分比不符合规则
    if (updateStep === undefined) {
      messageApi.open({
        type: "error",
        content: "Percentages are not in accordance with the rules of the contract",
      });
      return;
    }
    const updatePercent = stepToPercent.get(updateStep + 1);

    if (updatePercent === undefined) return;

    const stepName = percentToStepName.get(updatePercent);

    if (stepName === undefined) return;
    const args = [
      Number(projectId),
      updatePercent,
      newData[stepName],
    ];
    console.log(args, "进度args");
    postCB(args, "updateProgress");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {
    data: detailsRes,
    loading,
    error,
  } = useTheGraph({
    url: graphApiUrl || "",
    // query:  `{
    //   projectCreateds(where:{projectId: ${projectId}}) {    id    projectId    creator    goalAmount  _title  deadline    _description    _link    blockTimestamp  }
    //   fundsDistributeds(where:{projectId: ${projectId}}) {   id  projectId    amount  blockTimestamp  }
    //   progressUpdateds (where:{projectId: ${projectId}}){   id   projectId   progress    details    blockTimestamp  }
    //   progressRevieweds(where:{projectId: ${projectId}}) {    id    projectId       blockTimestamp  }
    //   }`,
    query: `{
      projectCreateds {    id    projectId    creator    goalAmount    deadline _title   _description    _link    blockTimestamp  }
      fundsDistributeds {   id  projectId    amount  blockTimestamp  }
      progressUpdateds {   id   projectId   progress    details    blockTimestamp  }
      progressRevieweds {    id    projectId       blockTimestamp  }
      }`,
  });
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
      setTimeout(messageApi.destroy, 2500);
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
    postCB(args, "createProject");
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
    if (projectId) {
      setGraphLoading(true);
    }
    if (projectId && detailsRes) {
      setGraphLoading(false);
      console.log(detailsRes, "detailsRes");
      setIsEditing(true);
      // Fetch the project data by ID and populate the form (mocked here)
      const { data: detailData } = detailsRes as {data: DetailData};
      const formInfo = detailData.projectCreateds && detailData.projectCreateds.find((item) => item.projectId === projectId);
      if (formInfo) { // 表单数据
        const bigIntValue = BigInt(formInfo.goalAmount);
        const ethValue = formatEther(bigIntValue);
        const projectNeedETH = Number(ethValue);
        const projectName = formInfo._title;
        const projectDeadlineNum = formInfo.deadline ? parseInt(formInfo.deadline, 10) / 1000 : null;
        const offsetInMinutes = new Date().getTimezoneOffset();
        const offsetHours = offsetInMinutes / 60 > 0 ? -(offsetInMinutes / 60) : Math.abs(offsetInMinutes / 60);
        console.log(offsetHours, "offsetHours");
        const projectDeadline = projectDeadlineNum !== null ? dayjs.unix(projectDeadlineNum).utc().utcOffset(offsetHours) : null;
        const creatorAddress = formInfo.creator;
        console.log("creatorAddress", creatorAddress, typeof creatorAddress);
        console.log("address", address, typeof address);

        // const creatorAddress = "0x90F79bf6EB2c4f870365E785982E1f101E93b906";
        console.log(toLowerCaseEthereumAddress(address) !== creatorAddress, "address !== creatorAddress");
        if (toLowerCaseEthereumAddress(address) !== creatorAddress) setIsInvestors(true);
        console.log(isInvestors, "isInvestors");
        const fetchedData = {
          projectName,
          projectDescription: formInfo._description,
          projectNeedETH,
          projectLink: formInfo._link,
          projectDeadline,
        };
        formData.setFieldsValue(fetchedData);
        console.log(formData, "formData");
      }
      // 获取进度信息
      const { currentPercent, detailObj } = getPercentInfo(detailData);
      setPercent(currentPercent);
      setProcessForm(detailObj);

      // 判断当前用户是否已经投资过(潜在投资用户)
      const hasInvestResult = detailData.projectFundeds && detailData.projectFundeds.find((item) => item.supporter === toLowerCaseEthereumAddress(address));
      setHasInvest(!!hasInvestResult);
    }
  }, [projectId, detailsRes]);

  return (
    <div className={`${styles.container} mt-10 `}>
      {
      projectId && graphLoading
        ? (
          <Loading />
        ) : ""
    }
      <div className={styles.title}>{comTitle().title}</div>
      {contextHolder}
      <Form
        disabled={isInvestors}
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
          <InputNumber disabled={isEditing} style={{ width: 210 }} />
        </Form.Item>
        <Form.Item
          label="Project Deadline"
          name="projectDeadline"
          rules={[
            { required: true, message: "Please input the project deadline!" },
          ]}
        >
          <DatePicker
            showTime={{ format: "HH:mm" }}
            style={{ width: 210 }}
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
                {isInvestors ? "Detail" : "Next Step"}
              </Button>

              {/* {isEditing && !isInvestors ? (
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
              )} */}
            </div>
          </Form.Item>
        ) : ""
      }
      </Form>

      <StepModal
        percent={percent}
        isInvestors={isInvestors}
        isModalOpen={isModalOpen}
        initialData={processForm}
        onOk={handleOk}
        onCancel={handleCancel}
      />

      {
      // !!isInvestors && !hasInvest ?
      true
        ? (
          <Inverment
            title={comTitle().title2}
            inveronOk={inveronOk}
          />
        ) : (
          ""
        )
}

      {!!isInvestors && hasInvest ? (
        <Examine title={comTitle().title2} />
      ) : (
        ""
      )}
    </div>
  );
};
export default DetailPage;
