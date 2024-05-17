"use client";

import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { message } from "antd";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const checkMessage = async () => {
      const response = await fetch(pathname);
      const customMessage = response.headers.get("X-Custom-Message");
      debugger;
      if (customMessage) {
        message.warning(customMessage);
      }
    };
    checkMessage();
  }, [pathname]);
  return (
    <div className="h-full">{children}</div>
  );
}

export default AdminLayout;
