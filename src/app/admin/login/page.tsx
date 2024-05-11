"use client";

import {
  Button, Card, Form, Input,
} from "antd";
import React from "react";
import { useRouter } from "next/navigation";

function AdminPage() {
  const nav = useRouter();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card title="Login SmartQuickly" style={{ width: "50%" }}>
        <Form
          name="basic"
          onFinish={async (values) => {
            const resData = await fetch("http://localhost:3000/api/login", {
              method: "POST",
              body: JSON.stringify(values),
            }).then((res) => res.json());
            console.log(resData);
            nav.push("/admin/dashboard");
          }}
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
            <Button type="primary" htmlType="submit" className="mr-10">
              Sign in
            </Button>
            <Button htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Card>

    </div>
  );
}

export default AdminPage;
