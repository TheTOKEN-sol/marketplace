import type { Chain } from "thirdweb";
import { abstract } from "./chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

/**
 * By default you create listings with the payment currency in the native token of the network (eth, avax, matic etc.)
 *
 * If you want to allow users to transact using different ERC20 tokens, you can add them to the config below
 * Keep in mind this is for front-end usage. Make sure your marketplace v3 contracts accept the ERC20s
 * check that in https://thirdweb.com/<chain-id>/<marketplace-v3-address>/permissions -> Asset
 * By default the Marketplace V3 contract supports any asset (token)
 */
export const SUPPORTED_TOKENS: SupportedTokens[] = [
  {
    chain: abstract,
    tokens: [
      {
        tokenAddress: "0x9eBe3A824Ca958e4b3Da772D2065518F009CBa62",
        symbol: "PENGU",
        icon: "/erc20-icons/pengu.png",
      },

      // Add more ERC20 here...
    ],
  },

];

export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {
  1: "/native-token-icons/eth.png",
  [abstract.id]: "/native-token-icons/eth.png",

};
