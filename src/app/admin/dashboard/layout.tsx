import React from "react";
import AntdAdminContainer from "../_components/AntdAdminContainer";

function DashboardLayout({ children }:{ children: React.ReactNode }) {
  return (
    <AntdAdminContainer>{children}</AntdAdminContainer>
  );
}

export default DashboardLayout;
