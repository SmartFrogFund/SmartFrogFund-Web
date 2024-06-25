import React from "react";
import { Flex, Spin } from "antd";

const Loading = () => (
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
