import React, { useEffect } from "react";
import {
  Modal, Form, Input, Button,
} from "antd";
import styles from "../../../styles/detail.module.scss";
import "../../../styles/detail.css";

interface StepModalProps {
  percent:number;
  isInvestors:boolean;
  isModalOpen: boolean;
  initialData: any;
  loading:boolean;
  onOk: (data: any) => void;
  onCancel: () => void;
}
const placeholder = "1.what to do\n2.\n3.\n..."; // 使用换行符

const StepModal: React.FC<StepModalProps> = ({
  isModalOpen, initialData, onOk, onCancel, isInvestors, percent, loading,
}) => {
  const [modalForm] = Form.useForm();

  useEffect(() => {
    if (initialData && modalForm) {
      modalForm.setFieldsValue(initialData);
    }
  }, [initialData, modalForm]);

  const onFinish = () => {
    modalForm.validateFields().then((values) => {
      onOk(values);
    }).catch((info) => {
      console.log("Validate Failed:", info);
    });
  };

  return (
    <Modal
      title="Project Steps"
      className={`${styles.container} stepModal`}
      open={isModalOpen}
      width={600}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={modalForm}
        className={`${styles.formBox} detailFrom`}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        size="large"
        disabled={isInvestors}
        style={{ width: 500 }}
        onFinish={onFinish}
      >
        <Form.Item label="Step1(30%):" name="Step1">
          <Input.TextArea rows={4} placeholder={placeholder} disabled={(percent >= 30) || isInvestors} />
        </Form.Item>
        <Form.Item label="Step2(50%):" name="Step2">
          <Input.TextArea rows={4} placeholder={placeholder} disabled={(percent >= 50 || percent < 30) || isInvestors} />
        </Form.Item>
        <Form.Item label="Step3(70%):" name="Step3">
          <Input.TextArea rows={4} placeholder={placeholder} disabled={(percent >= 70 || percent < 50) || isInvestors} />
        </Form.Item>
        <Form.Item label="Step4(100%):" name="Step4">
          <Input.TextArea rows={4} placeholder={placeholder} disabled={(percent >= 100 || percent < 70) || isInvestors} />
        </Form.Item>
        {!isInvestors ? (
          <Form.Item style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit" loading={loading} size="large" style={{ backgroundColor: "#97D44A" }}>
              submit
            </Button>
          </Form.Item>
        ) : ""}
      </Form>
    </Modal>
  );
};

export default StepModal;
