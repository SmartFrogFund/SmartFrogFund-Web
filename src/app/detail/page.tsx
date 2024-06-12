"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import dayjs from "dayjs";
import Link from "next/link";

import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Progress,
} from "antd";
import styles from "../../styles/detail.module.scss";
import "../../styles/detail.css";

const App: React.FC = () => {
  const onFinish = (values: any) => {
    const formattedValues = {
      ...values,
      projectDeadline: values.projectDeadline ? values.projectDeadline.format("YYYY-MM-DD") : null,
    };
    console.log("Form data:", formattedValues);
  };
  const [formData] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const query = Object.fromEntries(useSearchParams().entries());
  const { projectId, isInvestors } = query;
  useEffect(() => {
    if (projectId) {
      console.log("进来了");
      setIsEditing(true);
      // Fetch the project data by ID and populate the form (mocked here)
      const fetchedData = {
        projectName: "Existing Project",
        projectDescription: "This is an existing project description",
        projectNeedETH: 10,
        projectLink: "http://example.com",
        projectCreator: "John Doe",
        projectDeadline: "2023-12-31",
      };
      fetchedData.projectDeadline = dayjs(fetchedData.projectDeadline, "YYYY-MM-DD");
      formData.setFieldsValue(fetchedData);

      console.log(formData, "formData");
    }
  }, [projectId]);

  return (
    <div className={`${styles.container}`}>
      <Link href="/" className={styles.rightBtn}>Exit</Link>
      <div className={styles.title}>Project Registration</div>
      <Form
        disabled={!!isInvestors}
        className={`${styles.formBox} detailFrom`}
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
          rules={[{ required: true, message: "Please input the project name!" }]}
        >
          <Input disabled={isEditing} />
        </Form.Item>
        <Form.Item
          label="Project Description"
          name="projectDescription"
          rules={[{ required: true, message: "Please input the project description!" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Project progress"
          name="projectLink"
          rules={[{ required: true, message: "Please input the project link!" }]}
        >
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
          >
            <Progress percent={75} steps={4} strokeColor="#97D44A" trailColor="#B5C5A4" size={40} className={styles.progress} />
            <Button ghost className={styles.processBtn}>
              Next progress
            </Button>
          </div>

        </Form.Item>

        <Form.Item
          label="Project Link"
          name="projectLink"
          rules={[{ required: true, message: "Please input the project link!" }]}
        >
          <Input addonBefore="https://" />
        </Form.Item>
        <Form.Item
          label="Project Creator"
          name="projectCreator"
          rules={[{ required: true, message: "Please input the project creator!" }]}
        >
          <Input disabled={isEditing} />
        </Form.Item>
        <Form.Item
          label="Project Need ETH"
          name="projectNeedETH"
          rules={[{ required: true, message: "Please input the amount of ETH needed!" }]}
        >
          <InputNumber
            disabled={isEditing}
            style={{ width: 200 }}
          />
        </Form.Item>
        <Form.Item
          label="Project Deadline"
          name="projectDeadline"
          rules={[{ required: true, message: "Please input the project deadline!" }]}
        >
          <DatePicker style={{ width: 200 }} format="YYYY-MM-DD" disabled={isEditing} />
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: "#97D44A" }}>
            {isEditing ? "Update" : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
