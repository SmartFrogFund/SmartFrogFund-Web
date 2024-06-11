import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { Address, formatEther, formatUnits } from "viem";
import {
  useReadContract, useWriteContract, useReadContracts, useWatchContractEvent,
} from "wagmi";
import { FundAbi } from "@/abi";

const useReadAuctionTemplate = () => {
  const {
    data, error, writeContract, isError, isPending, isSuccess, failureReason,
  } = useWriteContract();
  const approveErc20 = (address:any, args:Array<any>) => {
    writeContract({
      abi: FundAbi,
      address,
      functionName: "approve",
      args,
    });
  };

  return {
    approveErc20, data, error, isError, isPending, isSuccess, failureReason,
  };
};
export { useReadAuctionTemplate };
