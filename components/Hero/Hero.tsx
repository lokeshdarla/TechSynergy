'use client'
import React from 'react';
import Image from 'next/image';
import hero from '@/public/Image/hero.png';
import Button from '../ui/Button';


const Hero: React.FC = () => {
  return (
    <div className='flex items-center justify-end w-full mt-[200px] md:mt-[20px] md:flex-row flex-col px-10'>
      <div className='absolute left-[-2%] md:bg-gradient-to-r from-white to-[rgba(255,255,255,0)] via-[rgba(255,255,255,50)]  bg-gray-900 md:bg-white md:bg-opacity-40 flex flex-col items-start justify-center md:m-10 gap-[20px] w-full md:w-[100%] px-10 min-h-[419px] md:min-h-[675px]'
      style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 38%, rgba(255,255,255,0) 100%)' }}>
        <h2 className='text-[#F3BC4C] md:text-[20px] text-[12.02px]'>TECH SERVICES </h2>
        <h1 className='font-medium md:text-[64px] md:leading-[80px] md:w-[490px] w-[297px] text-[40px] leading-[48.1px]'>TechSynergy: Innovate, Create, Elevate</h1>
        <p>Unlocking Possibilities, One Code at a Time</p>
        <Button text="See Projects" type="tertiary"/>
      </div>
      <div className='rounded-2xl md:overflow-auto '>
      <Image src={hero} alt="Hero Image" width={900} height={752}/>
      </div>
     
    </div>
  );
}

export default Hero;