"use client";

import {
  Button, Card, Form, Input,
} from "antd";
import React from "react";

function AdminPage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card title="Login SmartQuickly" style={{ width: "50%" }}>
        <Form name="basic">
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
