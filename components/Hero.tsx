// Assuming this file is named Hero.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import hero from '@/public/hero.webp';

const Hero: React.FC = () => {
  return (
    <div className='flex items-center justify-center w-full my-5 rounded-lg'>
      <div className='flex flex-col items-start justify-start m-10 gap-[20px]'>
        <h2 className='text-[#F3BC4C] text-[20px]'>TECH SERVICES </h2>
        <h1  className='font-medium text-[64px] leading-[80px] w-[490px]'>TechSynergy: Innovate, Create, Elevate</h1>
        <p>Unlocking Possibilities, One Code at a Time</p>
        <button className='px-7 py-2 bg-[#66B066] text-[#ffffff] text-[20px] rounded-full'>See Projects</button>
      </div>
      <Image src={hero} alt="Hero Image" width={800} height={400}/>
    </div>
  );
}

export default Hero;
