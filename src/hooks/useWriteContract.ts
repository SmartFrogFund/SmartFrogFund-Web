import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { Address, formatEther, formatUnits } from "viem";
import {
  useReadContract, useWriteContract, useReadContracts, useWatchContractEvent,
} from "wagmi";
import { Fund } from "@/abi";

const useReadAuctionTemplate = () => {
  const {
    data, error, writeContract, isError, isPending, isSuccess, failureReason,
  } = useWriteContract();
  const approveNft2 = (address:any, args:Array<any>) => {
    writeContract({
      abi: Fund,
      address,
      functionName: "approve",
      args,
    });
  };

  return {
    approveNft2, data, error, isError, isPending, isSuccess, failureReason,
  };
};
export { useReadAuctionTemplate };
