import React from "react";
import {
  Input, Button, Form, Modal,
} from "antd";
import styles from "../../../styles/detail.module.scss";
import "../../../styles/detail.css";

interface InvermentProps {
  title: string;
  scheduleDescription:string
}

const Inverment: React.FC<InvermentProps> = ({ title, scheduleDescription }) => {
  const { confirm } = Modal;
  const [formData] = Form.useForm();
  formData.setFieldsValue({ scheduleDescription });
  const agreeCB = () => {
    confirm({
      title: "Examine",
      content: "Are you agree Project progress increased from 30% to 50%",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const showConfirm = () => {
    formData
      .validateFields()
      .then((values) => {
        console.log(values, "values");
        const { amount } = values;
        confirm({
          title: "Investment information",
          content: `Are you sure you want to invest in ${amount} ETH?`,
          onOk() {
            console.log("OK");
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const onFinish = (values: any) => {
    const formattedValues = {
      ...values,
      projectDeadline: values.projectDeadline
        ? values.projectDeadline.format("YYYY-MM-DD")
        : null,
    };
    console.log("Form data:", formattedValues);
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className={styles.title}>{title}</div>
      <Form
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
          label="schedule Description"
          name="scheduleDescription"

        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Input.TextArea rows={4} disabled />
          </div>
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          <Button
            type="primary"
            onClick={agreeCB}
            style={{ backgroundColor: "#97D44A" }}
          >
            agree
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Inverment;
