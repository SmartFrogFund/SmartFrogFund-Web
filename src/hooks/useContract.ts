import { useEffect, useMemo, useState } from "react";
import { Address, formatEther, formatUnits } from "viem";
import {
  useReadContract,
  useWriteContract,
  useReadContracts,
  useWatchContractEvent,
  // ReadContractReturnType,
  UseReadContractReturnType,
} from "wagmi";
import {
  ERC20Abi, Erc20Address, FundAbi, FundAddress,
} from "@/abi";

interface IUseContractProps {
  address: Address;
  abi: any;
  functionName: string;
  args?: any[];
}
interface IuseReadCROAKBalanceOfProps {
  data: bigint | undefined;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

interface userProjectsProps {
  data: Array<any>;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

const useReadCROAKBalanceOf = (args?: any[]): IuseReadCROAKBalanceOfProps => {
  const {
    data, isError, isLoading, isSuccess,
  } = useReadContract({
    abi: ERC20Abi,
    address: Erc20Address,
    functionName: "balanceOf",
    args,
  });

  return {
    data: data as bigint | undefined,
    isError,
    isLoading,
    isSuccess,
  };
};

const useGetProject = (args?: any[]):userProjectsProps => {
  // const {
  //   data, isError, isLoading, isSuccess,
  // } = useReadContract();

  const {
    data, isError, isLoading, isSuccess,
  } = useReadContract({
    abi: FundAbi,
    address: FundAddress,
    functionName: "projects",
    args,
  });

  return {
    data: data as any[],
    isError,
    isLoading,
    isSuccess,
  };
};

const useWriteNewProject = () => {
  const {
    writeContract, data, isError, isSuccess, isPending, error, failureReason,
  } = useWriteContract();

  const postCB = (args: Array<any>, functionName:string, value:bigint|undefined) => {
    writeContract({
      abi: FundAbi,
      address: FundAddress,
      functionName,
      value,
      args,
    });
  };

  // 返回状态
  return {
    postCB,
    data,
    isError,
    isSuccess,
    isPending,
    error,
    failureReason,
  };
};

export { useReadCROAKBalanceOf, useWriteNewProject, useGetProject };
