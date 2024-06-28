import { defineChain } from "viem/utils";

export const localChain = /* #__PURE__ */ defineChain({
  id: 1337,
  name: "hardhatTest",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://42.192.203.239/testChain"],
    },
  },

  testnet: true,
});
