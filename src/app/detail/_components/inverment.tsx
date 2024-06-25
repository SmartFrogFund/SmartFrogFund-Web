import React from "react";
import { formatEther, parseEther } from "viem";
import {
  InputNumber, Button, Form, Modal, Progress,
} from "antd";
import styles from "../../../styles/detail.module.scss";
import "../../../styles/detail.css";

interface InvermentProps {
  title: string;
  inveronOk:(data: bigint) => void;
  loading:boolean;
}

const Inverment: React.FC<InvermentProps> = ({
  title, inveronOk, loading,
}) => {
  const { confirm } = Modal;
  const [formData] = Form.useForm();

  const showConfirm = () => {
    formData
      .validateFields()
      .then((values) => {
        console.log(values, "values");
        const { amount } = values;
        const weiAmount = parseEther(String(amount));
        confirm({
          title: "Investment information",
          content: `Are you sure you want to invest in ${amount} ETH?`,
          onOk() {
            inveronOk(weiAmount);
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
      <div className={styles.title} style={{ marginTop: 20, marginBottom: 0 }}>{title}</div>
      <Form
        className={`${styles.formBox} detailFrom`}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        form={formData}
        size="large"
        style={{ width: 640 }}
      >
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
            <Button ghost className={styles.processBtn} loading={loading} onClick={showConfirm}>
              invest
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Inverment;
