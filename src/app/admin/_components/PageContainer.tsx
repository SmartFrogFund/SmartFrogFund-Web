import { Card } from "antd";
import React from "react";

function PageContainer({ children, title, ...rest }: { children: React.ReactNode; title: string, [key: string]: any}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...rest}>
      <Card title={title}>{children}</Card>
    </div>
  );
}

export default PageContainer;
