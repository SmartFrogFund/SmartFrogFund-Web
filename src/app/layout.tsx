import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/global.css";
import { Metadata } from "next";
import Providers from "./providers";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "FrogFund",
    description: "Leap to Your Dreams and Empower Your Journey to the Moon!",
    keywords: ["FrogFund", "seo", "metadata", "Leap to Your Dreams and Empower Your Journey to the Moon!"],
  };
}
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
