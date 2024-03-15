import Link from 'next/link';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
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
          <ConnectButton showBalance={true} chainStatus="name" accountStatus="address" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;