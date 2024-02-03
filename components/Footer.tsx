import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaAirbnb, FaApple, FaSass, FaQuora } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


import logo from '@/public/logo.png';

function Footer() {
  return (
    <div className='flex items-center justify-center flex-col gap-[40px] min-w-[1174px] my-5 font-secondary'>
      <div className='flex items-start justify-between w-[1174px]'>
        <div className='text-gray-400 flex flex-col gap-[10px] font-secondary leading-[28px]'>
          <h3 className='text-[#0A142F]'>Product</h3>
          <p>Employee database</p>
          <p>Payroll</p>
          <p>Absences</p>
          <p>Time tracking</p>
          <p>Shift planner</p>
          <p>Recruiting</p>
        </div>
        <div className='text-gray-400 flex flex-col gap-[10px] font-secondary leading-[28px]'>
          <h3 className='text-[#0A142F]'>Information</h3>
          <p>FAQ</p>
          <p>Blog</p>
          <p>Support</p>
        </div>
        <div className='text-gray-400 flex flex-col gap-[10px] font-secondary leading-[28px]'>
          <h3 className='text-[#0A142F]'>Company</h3>
          <p>About us</p>
          <p>Careers</p>
          <p>Contact us</p>
          <p>Lift Media</p>
        </div>
        <div className='max-w-[369.47px] min-h-[261.15px] rounded-[30px] bg-[#203C860D] flex flex-col items-start justify-evenly'>
          <h2 className='text-[16px] text-left px-[43px]'>Subscribe</h2>
          <div className='relative px-[43px]'>
          <input type="text" placeholder='Email address' className='w-[271.09px] px-6 py-4 text-[14px] rounded-full' />
          <div className='absolute top-1 right-[10%]'>
            <button><FaArrowAltCircleRight size={50} color='#3171DE'/></button>
          </div>
          </div>
          <p className='text-[13px] text-gray-400 leading-[20.4px] px-[43px]'>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
        </div>
      </div>
      <hr className='border border-gray-200 w-[1174px]' />
      <div className='flex items-center justify-between w-[1174px]'>
        <div className='min-w-[236.11px]'>
        <Image height={50} src={logo} alt="" />
        </div>
        <div className='flex items-center justify-center gap-[40px] text-[14px] text-[#0A142F] w-[236.11px]'>
          <Link href="/">Terms</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Cookies</Link>
        </div>
        <div className='flex items-center justify-center gap-[30px] w-[236.11px]'>
          <a href=""><FaApple size={30} /></a>
          <a href=""><FaFacebook size={30} /></a>
          <a href=""><FaQuora size={30} /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
