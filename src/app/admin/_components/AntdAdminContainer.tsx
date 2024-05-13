"use client";

import React from "react";
import {
  UploadOutlined, UserOutlined, VideoCameraOutlined, DashboardFilled,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";

const {
  Header, Content, Footer, Sider,
} = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//   (icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
//   }),
// );
const items = [
  {
    key: "/admin/dashboard",
    icon: <DashboardFilled />,
    label: "Kanban",
  },
  {
    key: "/admin/dashboard/users",
    icon: <UserOutlined />,
    label: "UserInfo",
  },

];
function AntdAdminContainer({ children }:any) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();
  return (
    <Layout className="h-full">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
          onClick={({ key }) => {
            router.push(key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }} className="h-full">
          <div
            className="h-[99%]"
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>

      </Layout>
    </Layout>
  );
}

export default AntdAdminContainer;
