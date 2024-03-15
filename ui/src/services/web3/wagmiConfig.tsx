import {
  hardhat, sepolia
} from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const WALLET_CONNECT = process.env.NEXT_PUBLIC_WALLET_CONNECT || "3a8170812b534d0ff9d794f19a901d64";

export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: WALLET_CONNECT,
  chains: [hardhat, sepolia],
  ssr: true,
})