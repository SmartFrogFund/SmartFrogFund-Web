import React, { Children, Suspense } from "react";
import Header from "../home/_components/header";

const layout = ({ children }: { children: React.ReactNode }) => (
  <div className=" h-full bg-[#0F030F]">
    <Header />
    <Suspense fallback={<div>loading...</div>}>
    {children}
    </Suspense>
  </div>
);

export default layout;
