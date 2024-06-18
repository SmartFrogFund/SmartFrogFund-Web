"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button, Flex } from "antd";
import { observer } from "mobx-react";
import Link from "next/link";
import { mainStore, subStore } from "../stores/main.store";
import WelcomePage from "./welcome/page";

const Page = observer(() => {
  const handleChangeName = () => {
    mainStore.changeName("gony");
  };
  const handleChangeName2 = () => {
    subStore.changeName("ethan");
  };

  return (
    <div
      className="h-full"
      style={{
        background: " linear-gradient(155deg, #ffffff 0%, #4788d8 100%)",
      }}
    >
      {/* <div
        className="absolute right-4 top-1"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <ConnectButton />
      </div>

      <div className="">
        {mainStore.hello}
        @@@@@
        {subStore.hello}
      </div>
      <Flex gap="small" wrap="wrap">
        <Button type="primary" onClick={handleChangeName}>
          Primary Button
        </Button>
        <Button onClick={handleChangeName2}>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="link">
          <Link href="/detail">Details</Link>
        </Button>
      </Flex> */}
      <WelcomePage />
    </div>
  );
});
export default Page;
