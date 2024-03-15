import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, hardhat } from 'wagmi/chains'

const WALLET_CONNECT = process.env.NEXT_PUBLIC_WALLET_CONNECT || "3a8170812b534d0ff9d794f19a901d64";
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [ledgerWallet,
        metaMaskWallet,
        rainbowWallet,
        safeWallet,
        walletConnectWallet,],
    },
  ],
  {
    appName: 'My RainbowKit App',
    projectId: WALLET_CONNECT,
  }
);



export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, hardhat],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [hardhat.id]: http(),
  },
  connectors,
});