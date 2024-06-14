import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';
import styles from "../../../styles/detail.module.scss";

interface StepModalProps {
  isModalOpen: boolean;
  initialData: any;
  onOk: (data: any) => void;
  onCancel: () => void;
}
const placeholder = `1.what to do\n2.\n3.\n...`; // 使用换行符


const StepModal: React.FC<StepModalProps> = ({ isModalOpen, initialData, onOk, onCancel }) => {
  const [modalForm] = Form.useForm();

  useEffect(() => {
    if (initialData && modalForm) {
      modalForm.setFieldsValue(initialData);
    }
  }, [initialData, modalForm]);

  const handleOk = () => {
    modalForm.validateFields().then(values => {
      onOk(values);
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  return (
    <Modal
      title="Project Steps"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form
        form={modalForm}
        className={`${styles.formBox} detailFrom`}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        size="large"
        style={{ width: 640 }}
      >
        <Form.Item label="Step1(30%):" name="Step1" >
          <Input.TextArea rows={4} placeholder={placeholder}/>
        </Form.Item>
        <Form.Item label="Step2(50%):" name="Step2">
          <Input.TextArea rows={4} placeholder={placeholder}/>
        </Form.Item>
        <Form.Item label="Step3(70%):" name="Step3">
          <Input.TextArea rows={4} placeholder={placeholder}/>
        </Form.Item>
        <Form.Item label="Step4(100%):" name="Step4">
          <Input.TextArea rows={4} placeholder={placeholder}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default StepModal;
