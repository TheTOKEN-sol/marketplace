import type { Chain } from "thirdweb";
import { abstract } from "./chains";


export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};


export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0xb47a26df28923bc826100256e7d5fa01cd0817a7",
    chain: abstract,
    title: "derplets",
    thumbnailUrl: "/derplets.webp",  // Corrected path for public folder usage
    type: "ERC721",
  },

];
