import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";
import {  TiSocialLinkedin ,TiSocialFacebook,TiSocialTwitter } from "react-icons/ti";

import logo from '@/public/logo.png';

function Footer() {

  const socialLinks=[
    {
      id:0,
      icon: <TiSocialLinkedin size={20}/>,
      url:"",
    },
    {
      id:1,
      icon: <TiSocialFacebook size={20}/>,
      url: ""
    },
    {
      id:2,
      icon: <TiSocialTwitter size={20}/>,
      url:""
    }
  ]

  return (
    <div className='flex items-center justify-center flex-col gap-[40px] md:min-w-[1174px] md:my-5 font-secondary'>
      <div className='flex flex-col md:flex-row items-start md:justify-between justify-center md:w-[1174px] w-full gap-[20px] '>
      <div className='flex md:flex-row flex-col items-start md:gap-[150px] gap-[50px] px-10 md:px-0'>
        <div className='text-gray-400 flex flex-col gap-[10px] font-secondary leading-[28px]'>
          <h3 className='text-[#0A142F]'>Information</h3>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
          <a href="#">Support</a>
        </div>
        <div className='text-gray-400 flex flex-col gap-[10px] font-secondary leading-[28px]'>
          <h3 className='text-[#0A142F]'>Company</h3>
          <a href="#">About us</a>
          <a href="#">Careers</a>
          <a href="#">Contact us</a>
          <a href="#">Lift Media</a>
        </div>
        <div className='text-gray-400 flex flex-col gap-[10px] font-secondary leading-[28px]'>
          <h3 className='text-[#0A142F]'>Product</h3>
          <a href="#">Employee database</a>
          <a href="#">Payroll</a>
          <a href="#">Absences</a>
          <a href="#">Time tracking</a>
          <a href="#">Shift planner</a>
          <a href="#">Recruiting</a>
        </div>
      </div>

        <div className='max-w-[369.47px] min-h-[261.15px] rounded-[30px] bg-[#203C860D] flex flex-col items-start justify-evenly px-10'>
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

      <div className='flex md:flex-row items-center md:justify-between md:w-[1174px] flex-col justify-center gap-[15px] mb-[10px]'>
        <div className=' md:min-w-[200px]'>
        <Image height={50} src={logo} alt="" />
        </div>
        <div className='flex items-center justify-center gap-[40px] text-[14px] text-[#0A142F] w-[236.11px]'>
          <Link href="/">Terms</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Cookies</Link>
        </div>

        <div className='flex items-center justify-center gap-[30px]'>
        {socialLinks.map((social) => (
          <a key={social.id} href={social.url} className='border border-black p-2 rounded-full hover:bg-black hover:text-white'>
            {social.icon}
          </a>
        ))}

        </div>
      </div>
    </div>
  );
}

export default Footer;
