import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header() {
  return (
    <div className="sticky top-0 z-40 w-full bg-[#0F030F] h-[65px]">
      <div className="h-full max-w-screen-md m-auto flex flex-row items-center justify-between">
        <Link href="/home" className="font-bold text-3xl">
          FrogFund
        </Link>
        <div>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
