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
    address: "0x39af431902B46c33C3866dc7C5ac2fb29f606b73",
    chain: abstract,
    title: "Refreshmints Market Shares",
    thumbnailUrl: "/nftcollections/marketshares.png",  // Corrected path for public folder usage
    type: "ERC721",
  },
  {
    address: "0xb47a26df28923bc826100256e7d5fa01cd0817a7",
    chain: abstract,
    title: "Derplets",
    thumbnailUrl: "/nftcollections/derplets.webp",  // Corrected path for public folder usage
    type: "ERC721",
  },
  {
    address: "0xa6c46c07f7f1966d772e29049175ebba26262513",
    chain: abstract,
    title: "Pengztracted",
    thumbnailUrl: "/nftcollections/pengztracted.png",  // Corrected path for public folder usage
    type: "ERC721",
  },
  {
    address: "0x265f307c1bdbb6f5d4B174d47F363EF5837bE98b",
    chain: abstract,
    title: "Abstract HotDogs",
    thumbnailUrl: "/nftcollections/abstracthotdogs.png",  // Corrected path for public folder usage
    type: "ERC721",
  },
];
