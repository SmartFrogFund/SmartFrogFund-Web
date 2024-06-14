import { defineChain } from "viem/utils";

export const localChain = /* #__PURE__ */ defineChain({
  id: 31337,
  name: "hardhatTest",
  nativeCurrency: { name: "GO", symbol: "GO", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://42.192.203.239/hardhat"],
    },
  },

  testnet: true,
});
