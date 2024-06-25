export interface IFrogItem {
  _title: string;
  _description: string;
  _link: string;
  goalAmount: string | number;
  deadline: string | number;
  id: string;
  blockNumber: string;
  blockTimestamp: string | number;
  creator: string;
  projectId: string;
  transactionHash: string;
}

export interface IFundedItem {
  amount: string | number;
  blockNumber: string | number;
  blockTimestamp: string | number;
  isEth: boolean;
  projectId: string;
  supporter: string;
  transactionHash: string;
  id: string
}

export type ITabs = "ALL" | "MY_PROJECT" | "MY_FUND"
