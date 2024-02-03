'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/logo.png';

const Navbar: React.FC = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5'>
      <div className='min-w-[160px]'>
        <Image height={50} src={logo} alt="" />
      </div>
      <div className='flex items-center justify-center gap-12 px-20 py-3 bg-[#F7F7FD] rounded-full min-w-[633px]:'>
        <Link href="#Home" className='text-[#3056D3]'>Home</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Services</Link>
        <Link href="#">Contact Us</Link>
      </div>
      <div className='flex items-center justify-center gap-10 min-w-[300px]:'>
         {/* Dropdown for language selection */}
         <select className='gap-2'>
          <option value="English">en</option>
          <option value="French">fr</option>
          {/* Add more language options as needed */}
        </select>
        <button className='bg-[#3171DE] px-6 py-3 rounded-full text-[#FFFFFF]'>Schedule a Call</button>
      </div>
    </div>
  );
}

export default Navbar;
