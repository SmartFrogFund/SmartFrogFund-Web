import React, { useState } from "react";
import {
  Input, Button, Form, Modal, Radio, TableColumnsType, Table, Tag,
} from "antd";
import styles from "../../../styles/detail.module.scss";

type examineDataType ={
  comment:string,
  approved:boolean
}
interface examineProps {
  title: string;
  percent:number;
  loading:boolean;
  examineOk:(data:examineDataType)=>void
}

interface DataType {
  key: React.Key;
  approved: boolean;
  comment: string;
  blockTimestamp: string;
  currentProgress:string;
  Investor:string;
}
const convertTimestampToLocalTime = (timestamp:string) => {
  // 将秒转换为毫秒
  const date = new Date(Number(timestamp) * 1000);

  // 使用本地时间
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从0开始，所以要加1
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
const Inverment: React.FC<examineProps> = ({
  title, examineOk, percent, loading,
}) => {
  const { confirm } = Modal;
  const [formData] = Form.useForm();
  console.log(percent, "percentpercent");
  const agreeCB = () => {
    confirm({
      title: "Examine",
      content: "Confirm submission",
      onOk() {
        formData.validateFields().then((values) => {
          console.log("OK", values);
          examineOk(values);
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const options = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];
  const initialValues = {
    approved: true,
    auditOpinion: "",
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className={styles.title} style={{ marginTop: 20, marginBottom: 0 }}>{title}</div>
      <Form
        className={`${styles.formBox} detailFrom`}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 24 }}
        initialValues={initialValues}
        layout="horizontal"
        form={formData}
        size="large"
        style={{ width: 640 }}
      >
        <Form.Item
          label="Be approved or not"
          name="approved"
        >
          <Radio.Group options={options} />

        </Form.Item>
        <Form.Item
          label="Audit opinion"
          name="comment"

        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Input.TextArea rows={4} />
          </div>
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          <Button
            type="primary"
            onClick={agreeCB}
            loading={loading}
            style={{ backgroundColor: "#97D44A" }}
          >
            submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Inverment;
