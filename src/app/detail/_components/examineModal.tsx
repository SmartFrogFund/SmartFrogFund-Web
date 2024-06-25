import React, { useEffect, useState } from "react";
import {
  Modal, TableColumnsType, Table, Tag,
} from "antd";
import styles from "../../../styles/detail.module.scss";

interface examineProps {
  progressRevieweds:Array<any>;
  showModal:boolean;
  onCancel:()=>void;
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
const ExamineModal: React.FC<examineProps> = ({
  progressRevieweds, showModal, onCancel,
}) => {
  console.log(progressRevieweds, "progressRevieweds");
  const newProgressRevieweds = progressRevieweds
    .filter((item) => item.currentProgress === String(30))
    .map((item) => ({
      ...item,
      time: convertTimestampToLocalTime(item.blockTimestamp),
      key: item.id,
    }));

  console.log(newProgressRevieweds, "newProgressReviewedsnewProgressRevieweds");

  console.log(convertTimestampToLocalTime("1719215421"), "convertTimestampToLocalTim");
  const close = () => {
    onCancel();
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
      width: 200,
    },
  ];

  const data: DataType[] = newProgressRevieweds;
  return (
    <Modal
      title="Audit information"
      className={`${styles.container} stepModal`}
      open={showModal}
      width={900}
      onCancel={close}
      footer={null}
    >
      <Table columns={columns} dataSource={data} scroll={{ y: 240 }} />
    </Modal>
  );
};

export default ExamineModal;
