import * as React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex w-full px-56 py-3 font-semibold sticky'>
      <Link href='/' className='w-2/12'>
        Home
      </Link>

      <div className='flex w-7/12 space-x-8'>
        <Link href='#'>Projects</Link>
        <Link href='#'>Technologies</Link>
        <Link href='#'>About</Link>
      </div>

      <div className='flex w-3/12 space-x-8'>
        <Link href='https://github.com/Kuroo-nekoo'>Github</Link>
        <Link href='https://www.facebook.com/phamtrihung123/'>Facebook</Link>
      </div>
    </nav>
  );
};

export default Navbar;
