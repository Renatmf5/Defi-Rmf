'use client';

import { useTargetNetwork } from '@/hooks/web3-eth/useTargetNetwork';
import { useState } from "react";
import { Address } from "viem";
import { useAccountBalance } from '@/hooks/web3-eth';
import { Abi } from "abitype";


type BalanceProps = {
  address?: Address;
  abi?: Abi;
  account?: string;
  className?: string;
  usdMode?: boolean;
};

/**
 * Display (ETH & USD) balance of an ETH address.
 */

export const Balance = ({ address, abi, account, className = "", usdMode }: BalanceProps) => {
  const { targetNetwork } = useTargetNetwork();
  const { balance, price } = useAccountBalance(address, abi, account);
  const [displayUsdMode, setDisplayUsdMode] = useState(price > 0 ? Boolean(usdMode) : false);

  const toggleBalanceMode = () => {
    if (price > 0) {
      setDisplayUsdMode(prevMode => !prevMode);
    }
  };
  console.log(address, balance);
  if (!address || balance === null) {
    return (
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-md bg-slate-300 h-6 w-6"></div>
        <div className="flex items-center space-y-6">
          <div className="h-2 w-28 bg-slate-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (!balance) {
    return (
      <div className={`border-2 border-gray-400 rounded-md px-2 flex flex-col items-center max-w-fit cursor-pointer`}>
        <div className="text-warning">Error</div>
      </div>
    );
  }

  return (
    <button
      className={`btn btn-sm btn-ghost flex flex-col font-normal items-center hover:bg-transparent ${className}`}
      onClick={toggleBalanceMode}
    >
      <div className="w-full flex items-center justify-center">
        {displayUsdMode ? (
          <>
            <span className="text-[0.8em] font-bold mr-1">$</span>
            <span>{(balance * price).toFixed(2)}</span>
          </>
        ) : (
          <>
            <span>{balance?.toFixed(4)}</span>
            <span className="text-[0.8em] font-bold ml-1">{targetNetwork.nativeCurrency.symbol}</span>
          </>
        )}
      </div>
    </button>
  );
};
