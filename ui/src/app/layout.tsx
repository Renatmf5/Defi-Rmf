'use client'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  hardhat, sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ThemeProvider } from "./_components/theme-provider";
import NavBar from "./_components/NavBar";

const WALLET_CONNECT = process.env.NEXT_PUBLIC_WALLET_CONNECT || "3a8170812b534d0ff9d794f19a901d64";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: WALLET_CONNECT,
  chains: [hardhat, sepolia],
  ssr: true,
})

const queryClient = new QueryClient();


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
        fontHeading.variable
      )}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                <NavBar />
                <main className='h-screen p-16'>{children}</main>
              </ThemeProvider>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
