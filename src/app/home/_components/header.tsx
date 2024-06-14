import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useReadCROAKBalanceOf } from "@/hooks/useContract";
import {
  useAccount,
} from "wagmi";
import { formatEther, format } from "viem";
import { abbreviateNumber } from "@/utils/formatAmount";
import meme from "@/public/images/tokenomics.png";

function Header() {
  const { address } = useAccount();
  const {
    data: CROAK, isLoading, isError, isSuccess,
  } = useReadCROAKBalanceOf([address]);
  const [curCROAK, setCurCROAK] = useState(0);
  useEffect(() => {
    if (CROAK) {
      setCurCROAK(Number(formatEther(CROAK)));
    }
  }, [CROAK]);
  return (
    <div className="sticky top-0 z-40 w-full bg-[#0F030F] h-[65px]">
      <div className="h-full max-w-screen-md m-auto flex flex-row items-center justify-center justify-between">
        <Link href="/home" className="font-bold text-3xl">
          FrogFund
        </Link>
        <p className="font-bold text-[100%] flex justify-center items-center">
          My $CROAK Rewards:
          <span className="text-[#4caf50] mr-1">
            {abbreviateNumber(curCROAK) || 0}
          </span>
          {"  "}
          <img src={meme.src} alt="meme" className="w-4 h-4 inline-block" />
        </p>
        <div>

          <ConnectButton chainStatus="icon" accountStatus="avatar" showBalance={false} />
        </div>
      </div>
    </div>
  );
}

export default Header;
