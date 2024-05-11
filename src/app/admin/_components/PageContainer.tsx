import { Card } from "antd";
import React from "react";

function PageContainer({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <Card title={title}>{children}</Card>
  );
}

export default PageContainer;
