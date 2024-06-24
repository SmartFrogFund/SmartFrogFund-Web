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
  progressRevieweds:Array<any>;
  percent:number;
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
  title, progressRevieweds, examineOk, percent,
}) => {
  const { confirm } = Modal;
  console.log(progressRevieweds, "progressRevieweds");
  const newProgressRevieweds = progressRevieweds
    .filter((item) => item.currentProgress === String(30))
    .map((item) => ({
      ...item,
      time: convertTimestampToLocalTime(item.blockTimestamp),
      key: item.id,
    }));

  console.log(newProgressRevieweds, "newProgressReviewedsnewProgressRevieweds");
  const [formData] = Form.useForm();
  const [modal, setModal] = useState(false);

  console.log(convertTimestampToLocalTime("1719215421"), "convertTimestampToLocalTim");

  console.log(percent, "percentpercent");
  const agreeCB = () => {
    confirm({
      title: "Examine",
      content: "AConfirm submission",
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

  const showModal = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const options = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];
  const initialValues = {
    approved: true,
    auditOpinion: "",
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Investor",
      dataIndex: "Investor",
      width: 250,
    },
    {
      title: "comment",
      dataIndex: "comment",
      width: 250,
    },
    {
      title: "approved",
      dataIndex: "approved",
      width: 150,
      render: (_, { approved }) => (
        <Tag color={approved ? "green" : "volcano"}>
          {approved ? "Approved" : "Not Approved"}
        </Tag>
      ),
    },
    {
      title: "time",
      dataIndex: "time",
      width: 150,
    },
  ];

  const data: DataType[] = newProgressRevieweds;
  return (
    <div className="flex justify-center items-center flex-col">
      <div className={styles.title}>{title}</div>
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
          label="Audit information"
          style={{ textAlign: "right" }}
        >
          <Button
            ghost
            className={styles.processBtn}
            onClick={showModal}
          >
            Detail
          </Button>
        </Form.Item>
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
            style={{ backgroundColor: "#97D44A" }}
          >
            submit
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Audit information"
        className={`${styles.container} stepModal`}
        open={modal}
        width={800}
        onCancel={onCancel}
        footer={null}
      >
        <Table columns={columns} dataSource={data} scroll={{ y: 240 }} />
      </Modal>
    </div>
  );
};

export default Inverment;
