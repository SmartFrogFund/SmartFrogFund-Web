import React, { useEffect, useState } from "react";
import {
  Modal, TableColumnsType, Table,
} from "antd";
import { formatEther } from "viem";
import styles from "../../../styles/detail.module.scss";

interface InvermentModalType {
  projectFundeds:Array<any>;
  showModal:boolean;
  onCancel:()=>void;
}

interface DataType {
  key: React.Key;
  amount: string;
  amountETH:string;
  blockTimestamp: string;
  time:string;
  supporter:string;
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
const InvermentModal: React.FC<InvermentModalType> = ({
  projectFundeds, showModal, onCancel,
}) => {
  console.log(projectFundeds, "progressRevieweds");
  const newProjectFundeds = projectFundeds.map((item) => ({
    ...item,
    time: convertTimestampToLocalTime(item.blockTimestamp),
    amountETH: formatEther(BigInt(item.amount)),
    key: item.id,
  }));

  console.log(newProjectFundeds, "newProjectFundeds");

  const close = () => {
    onCancel();
  };
  const columns: TableColumnsType<DataType> = [
    {
      title: "supporter",
      dataIndex: "supporter",
      width: 250,
    },
    {
      title: "amount(ETH)",
      dataIndex: "amountETH",
      width: 250,
    },
    {
      title: "time",
      dataIndex: "time",
      width: 250,
    },
  ];

  const data: DataType[] = newProjectFundeds;
  return (
    <Modal
      title="Inverment information"
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

export default InvermentModal;
