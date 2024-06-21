import React from "react";
import { Alert, Flex, Spin } from "antd";

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
type Props = {}
const content = <div style={contentStyle} />;

const Loading = (props: Props) => (
  <div
    className="text-[#50d71e] flex justify-center items-center text-white font-bold"
  >
    <Flex gap="small" vertical>
      <Flex gap="small">
        <Spin tip="Loading" size="large" fullscreen />
      </Flex>
    </Flex>
  </div>
);

export default Loading;
