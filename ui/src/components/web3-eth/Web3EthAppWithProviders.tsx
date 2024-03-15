'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { wagmiConfig } from '@/services/web3/wagmiConfig';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import { WagmiProvider } from 'wagmi';
const queryClient = new QueryClient();


export const Web3EthAppWithProviders = ({ children }: { children: React.ReactNode }) => {

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};