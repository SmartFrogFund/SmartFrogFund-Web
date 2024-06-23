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
  targetAmount:bigint|undefined
  projectAmount:bigint|undefined
}

const formatToTwoDecimalPlaces = (value: number): string => value.toFixed(2);
const calculateRatio = (amountETH: bigint, targetAmountETH: bigint): string => {
  const amount = Number(amountETH);
  const targetAmount = Number(targetAmountETH);
  const ratio = amount / targetAmount;
  return formatToTwoDecimalPlaces(ratio);
};

const Inverment: React.FC<InvermentProps> = ({
  title, inveronOk, targetAmount, projectAmount,
}) => {
  const { confirm } = Modal;
  const [formData] = Form.useForm();
  const amountETH = projectAmount ? formatEther(projectAmount) : 0;
  const targetAmountETH = targetAmount ? formatEther(targetAmount) : 0;
  const percent = projectAmount && targetAmount ? Number(calculateRatio(projectAmount, targetAmount)) * 100 : 0;
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
            percent={percent}
            strokeColor="#97D44A"
            trailColor="white"
            size={80}
          />
          <span className="ml-2">
            {`${amountETH} / ${targetAmountETH}ETH`}
          </span>
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
