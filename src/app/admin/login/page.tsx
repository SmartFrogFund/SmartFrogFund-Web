"use client";

import {
  Button, Card, Form, Input, message,
} from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useApi from "../../../services/api"; // 引入 useApi hook
import { useFetch } from "../../../hooks/useFetch";

function LoginPage() {
  const nav = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const {
    login, signUp, LoadingSpinner, loading,
  } = useApi();
  // 通过 useEffect 来监控 loading 状态的变化

  const onFinish = async (values: any) => {
    try {
      let res;
      if (isSignUp) {
        res = await signUp(values);
      } else {
        res = await login(values);
      }

      if (!isSignUp && res.success) {
        window.location.href = "/admin/dashboard";
      }
    } catch (error) {
      // Error handling is already done in the hook
    }
  };

  return (
    <div className="w-full h-[50%] flex justify-center items-center mt-[10%]">
      {contextHolder}
      <Card title="Login SmartQuickly" style={{ width: "50%" }}>
        <Form
          name="basic"
          onFinish={onFinish}
          labelCol={{ span: 3 }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
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
      <LoadingSpinner />
    </div>
  );
}

export default LoginPage;
