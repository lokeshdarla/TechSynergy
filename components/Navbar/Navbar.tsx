'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

import logo from '@/public/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-5">
      <nav className={`flex justify-between items-center ${isMenuOpen ? 'relative z-10' : 'md:sticky md:top-0 z-20'}`}>
        <div className='px-10'>
          <Image height={50} src={logo} alt="" />
        </div>
        <div
          className={`duration-1000 md:static absolute bg-white min-h-full md:min-h-fit right-0 ${isMenuOpen ? 'top-[100%]' : 'top-[-100%]'}
          md:w-auto flex items-start m-0 py-5 md:px-5 z-5 w-full md:top-[0%] transition-top ease-in-out`}
        >
          <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 md:bg-[#F7F7FD] md:px-20 md:py-3 md:rounded-full md:text-[16px] text-[18px] w-full items-center">
            <Link href="/" className='text-[#3056D3]'>Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact-us">Contact Us</Link>
            {isMenuOpen &&<Button text='Schedule a Call' type='primary' isHiddenOnMobile={false}/>}
          </div>
        </div>
        <div className="flex items-center gap-6 px-10">
          <select className='gap-2'>
            <option value="English">EN</option>
            <option value="French">FR</option>
          </select>
          <Button text='Schedule a Call' type='primary' isHiddenOnMobile={true}/>
          <button
            onClick={toggleMenu}
            className="text-3xl cursor-pointer md:hidden min-w-[30px]"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
