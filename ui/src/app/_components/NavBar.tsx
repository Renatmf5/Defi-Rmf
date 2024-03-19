'use client';

import Link from 'next/link';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Balance } from '@/components/web3-eth/Balance';
import { useDeployedContractInfo } from '@/hooks/web3-eth';
import { useAccount } from 'wagmi';


function Navbar() {
  const { data: deployedContractData } = useDeployedContractInfo('USDT');
  const { address } = useAccount();

  if (!deployedContractData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of "DAI'" on chain "!`}
      </p>
    );
  }

  console.log("abress:", deployedContractData.address);
  console.log("abi:", deployedContractData.abi);
  console.log("msg.sender", address);
  return (

    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300'>
      <Link
        href='/'
        className='uppercase font-bold text-md h-12 flex items-center'
      >
        Defi Rmf
      </Link>
      <div className='flex items-center gap-8'>
        <div>
          <Balance address={deployedContractData.address} abi={deployedContractData.abi} account={address} />
          <ConnectButton showBalance={true} chainStatus="name" accountStatus="address" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;