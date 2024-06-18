"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import dayjs from "dayjs";
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
} from "antd";
import StepModal from "./_components/stepModal";
import Inverment from "./_components/inverment";
import Examine from "./_components/examine";

import styles from "../../styles/detail.module.scss";
import "../../styles/detail.css";

const DetailPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const query = Object.fromEntries(useSearchParams().entries());
  const {
    projectId, isInvestors, hasInvest, allowExamine,
  } = query;
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (newData: any) => {
    setIsModalOpen(false);
    formData.setFieldsValue({ projectProcessDetail: newData });
    console.log("Updated data:", newData);
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

  const {
    creatProject, data, isError, isSuccess, isPending, error: creatProError,
  } = useWriteNewProject();
  // 信息表单
  const onFinish = (values: any) => {
    creatProject(["测试Title", "测试desc", "https:111", 23, 1719523518]);
  };
  useEffect(() => {
    console.log(data, isSuccess, isError, creatProError, formData);
  }, [data, isSuccess, isPending, isError, creatProError]);
  // 获取详情信息
  const {
    data: detailInfo,
    loading,
    error,
  } = useTheGraph({
    url: "https://api.studio.thegraph.com/query/76625/frogfund/version/latest",
    query: `{
    projectCreateds(projectId: ${projectId}) {    id    projectId    creator    goalAmount    deadline    _description    _link    blockTimestamp  }
    fundsDistributeds(projectId: ${projectId}) {   id  projectId    amount  blockTimestamp  }
    progressUpdateds (projectId: ${projectId}){   id   projectId   progress    details    blockTimestamp  }
    progressRevieweds(projectId: ${projectId}) {    id    projectId       blockTimestamp  }
    }`,
  });

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
      console.log(detailInfo, "detailInfo");
      setIsEditing(true);

      // Fetch the project data by ID and populate the form (mocked here)
      const fetchedData = {
        projectName: "Existing Project",
        projectDescription: "This is an existing project description",
        projectNeedETH: 10,
        projectLink: "http://example.com",
        projectProcessDetail: {
          Step1: "Initial value for Step1",
          Step2: "Initial value for Step2",
          Step3: "Initial value for Step3",
          Step4: "Initial value for Step4",
        },
        projectDeadline: "2023-12-31",
      };
      // fetchedData.projectDeadline = dayjs(
      //   fetchedData.projectDeadline,
      //   "YYYY-MM-DD",
      // );
      formData.setFieldsValue(fetchedData);
      console.log(formData, "formData");
    }
  }, [projectId, detailInfo]);

  return (
    <div className={`${styles.container} mt-10 `}>
      <div className={styles.title}>{comTitle().title}</div>
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
              percent={75}
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
            showTime={{ format: "HH:mm" }}
            style={{ width: 200 }}
            disabled={isEditing}
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
      </Form>

      <StepModal
        isInvestors={!!isInvestors}
        isModalOpen={isModalOpen}
        initialData={formData.getFieldValue("projectProcessDetail")}
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
