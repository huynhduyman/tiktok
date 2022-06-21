import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from './tiktok_nft.json';

export const CLUSTER =
  process.env.REACT_APP_CLUSTER === "mainnet"
    ? "mainnet"
    : process.env.REACT_APP_CLUSTER === "testnet"
      ? "testnet"
      : process.env.REACT_APP_CLUSTER === "devnet"
        ? "devnet"
        : "localnet";

export const SOLANA_HOST = process.env.REACT_APP_SOLANA_API_URL
  ? process.env.REACT_APP_SOLANA_API_URL
  : CLUSTER === "mainnet"
    ? clusterApiUrl("mainnet-beta")
    : CLUSTER === "testnet"
      ? clusterApiUrl("testnet")
      : CLUSTER === "devnet"
        ? clusterApiUrl("devnet")
        : "http://localhost:8899";

export const TIKTOK_PROGRAM_ID = new PublicKey(
  CLUSTER === 'localnet' 
  ? 'CNk5L3fPNpKMWBaUVxhCezoU97gjLhdQuj3mLPTcBGcY' 
  : CLUSTER === 'testnet' 
  ? 'CNk5L3fPNpKMWBaUVxhCezoU97gjLhdQuj3mLPTcBGcY'
  : CLUSTER === 'devnet'
        ? 'CNk5L3fPNpKMWBaUVxhCezoU97gjLhdQuj3mLPTcBGcY'
  : ''
);

export const TIKTOK_IDL = tiktok;