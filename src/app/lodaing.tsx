import React from "react";
import { Alert, Flex, Spin } from "antd";

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
type Props = {}

const Loading = (props: Props) => (
  <div
    className="h-full bg-[#0F030F] flex justify-center items-center text-white font-bold"
  >
    <Flex gap="small" vertical>
      <Flex gap="small">
        <Spin tip="Loading" size="large" />
      </Flex>
    </Flex>
  </div>
);

export default Loading;
