import React from "react";
import {
  InputNumber, Button, Form, Modal, Progress,
} from "antd";
import styles from "../../../styles/detail.module.scss";
import "../../../styles/detail.css";

interface InvermentProps {
  title: string;
}

const Inverment: React.FC<InvermentProps> = ({ title }) => {
  const { confirm } = Modal;
  const [formData] = Form.useForm();

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
      >
        <Form.Item label="Progress of crowdfunding" name="amount">
          <Progress
            type="circle"
            percent={30}
            strokeColor="#97D44A"
            trailColor="white"
            size={80}
          />
          <span className="ml-2">3/5ETH</span>
        </Form.Item>
        <Form.Item
          label="investment amount"
          name="amount"
          rules={[
            {
              required: true,
              message: "Please input the investment amount!",
            },
          ]}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <InputNumber style={{ width: 200 }} />
            <Button ghost className={styles.processBtn} onClick={showConfirm}>
              invest
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Inverment;
