import React from 'react';
import Image from 'next/image';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import TechExpertiseCard from './Card/TechExpertiseCard';

import vector2 from '@/public/vector2.png';
import vector1 from '@/public/vector1.png';

function WhyUs() {
  const expertiseCardsInfo = [
    { gradientColors: 'bg-gradient-to-tr to-[#3171DE] from-[#4AC0F2]', title: 'Expertise Across the Tech Spectrum', description: 'Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.' },
    { gradientColors: 'bg-gradient-to-tr to-[#62AE6E] from-[#e1d43e]', title: 'Expertise Across the Tech Spectrum', description: 'Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.' },
    { title: 'Expertise Across the Tech Spectrum', description: 'Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.' },
    { gradientColors: 'bg-gradient-to-tr to-[#3171DE] from-[#4AC0F2]', title: 'Expertise Across the Tech Spectrum', description: 'Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.' },
  ];
  return (
    <div className='relative md:min-w-[1344px] w-[90%] py-16 rounded-[35.39px] bg-[#F7F7FD] md:m-12 mx-[5%] flex flex-col items-center justify-center md:gap-[40px]'>
      <div className=' hidden md:block absolute top-[13%] left-[82%] z-0'>
        <Image src={vector2} alt='Vector 2' width={90.84} height={80.88} />
      </div>
      <div className='hidden md:block absolute top-[80%] left-[10%] z-0'>
        <Image src={vector1} alt='Vector 1' width={90.84} height={80.88} />
      </div>
      <div className=' relative z-10 flex flex-col items-center justify-center'>
        <h2 className='md:text-[40px] text-[30px] leading-[62px] font-secondary text-center px-[90px]'>
          Choose Us: Your Path to Innovation and
          <span className='text-[#3171DE]'> Success</span>
        </h2>
      </div>

      <div className='flex items-center justify-start gap-10 overflow-x-scroll md:w-[1344px] w-[90%]  h-[300px] hide-scrollbar px-5'>
      {expertiseCardsInfo.map((card, index) => (
        <TechExpertiseCard key={index} techExpertiseInfo={card} />
      ))}
      </div>

      <div className='flex items-center justify-center gap-5'>
        <button className='p-2 rounded-full bg-[#ffff] font-thin text-[#292D32]'>
          <MdNavigateBefore size={40} />
        </button>
        <button className='p-2 rounded-full bg-[#ffff] font-thin text-[#292D32]'>
          <MdNavigateNext size={40} />
        </button>
      </div>
    </div>
  );
}

export default WhyUs;
