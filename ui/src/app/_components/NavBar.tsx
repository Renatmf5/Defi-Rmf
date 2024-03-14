import Link from 'next/link';
import React from 'react';

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
          <button className='border rounded-md border-gray-400 px-3 py-2'>
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;