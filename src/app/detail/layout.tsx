import React, { Children } from "react";
import Header from "../home/_components/header";

const layout = ({ children }: { children: React.ReactNode }) => (
  <div className=" h-full bg-[#0F030F]">
    <Header />
    {children}
  </div>
);

export default layout;
