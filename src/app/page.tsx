"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button, Flex } from "antd";
import { observer } from "mobx-react";
import mainStore from "../stores/main.store";

const Page = observer(() => {
  const handleChangeName = () => {
    mainStore.changeName("gony");
  };

  return (
    <div
      className="h-full"
      style={{
        background: " linear-gradient(155deg, #ffffff 0%, #4788d8 100%)",
      }}
    >
      <div
        className="absolute right-4 top-1"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <ConnectButton />
      </div>

      <div className="">{mainStore.hello}</div>
      <Flex gap="small" wrap="wrap">
        <Button type="primary" onClick={handleChangeName}>
          Primary Button
        </Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </div>
  );
});
export default Page;
