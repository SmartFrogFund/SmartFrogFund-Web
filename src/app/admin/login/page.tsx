"use client";

import {
  Button, Card, Form, Input, message,
} from "antd";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";

function AdminPage() {
  const nav = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onFinish = async (values:any) => {
    let url = "";
    if (isSignUp) {
      url = "http://localhost:3000/api/users";
    } else {
      url = "http://localhost:3000/api/admin/login";
    }

    const resData = await fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
    }).then((res) => {
      debugger;
      res.json();
    });
    message.info(resData.message);
    if (!isSignUp) {
      // 如果是登录操作，跳转到 dashboard 页面
      window.location.href = "/admin/dashboard";
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center mt-[10%]">
      {contextHolder}
      <Card title="Login SmartQuickly" style={{ width: "50%" }}>

        <Form
          name="basic"
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 6 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="mr-10"
              onClick={() => setIsSignUp(false)}
            >
              Sign in
            </Button>
            <Button htmlType="submit" onClick={() => setIsSignUp(true)}>
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Card>

    </div>
  );
}

export default AdminPage;
