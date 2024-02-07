'use client'
import React from 'react';
import Image from 'next/image';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import TechExpertiseCard from '../Card/TechExpertiseCard';
import expertiseCardsInfo from './TechExpertiseInfo';

import vector2 from '@/public/vectors/vector2.png';
import vector1 from '@/public/vectors/vector1.png';

function WhyUs() {
  const myRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (scrollAmount: number) => {
    const container = myRef.current;

    if (container) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className='relative md:min-w-[1344px] w-[90%] py-16 rounded-[35.39px] bg-[#F7F7FD] md:m-12 mx-[5%] flex flex-col items-center justify-center md:gap-[40px]'>
      <div className=' hidden md:block absolute top-[13%] left-[82%] z-0'>
        <Image src={vector2} alt='Vector 2' width={90.84} height={80.88} />
      </div>
      <div className='hidden md:block absolute top-[80%] left-[10%] z-0'>
        <Image src={vector1} alt='Vector 1' width={90.84} height={80.88} />
      </div>
      <div className=' relative z-10 flex flex-col items-center justify-center'>
        <h2 className='md:text-[40px] text-[30px] leading-[62px] font-secondary text-center md:px-[90px] px-[40px]'>
          Choose Us: Your Path to Innovation and
          <span className='text-[#3171DE]'> Success</span>
        </h2>
      </div>

      <div className='flex items-center justify-start gap-10 overflow-x-scroll md:w-[1344px] w-[99%] h-[300px] hide-scrollbar pl-10' ref={myRef}>
      {expertiseCardsInfo.map((card, index) => (
        <TechExpertiseCard
          key={index}
          techExpertiseInfo={card}
          cardType={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary'}
        />
      ))}
    </div>


      <div className='flex items-center justify-center gap-5'>
        <button className='p-2 rounded-full bg-[#ffff] font-thin text-[#292D32]' onClick={()=>{handleScroll(-400)}}>
          <MdNavigateBefore size={40} />
        </button>
        <button className='p-2 rounded-full bg-[#ffff] font-thin text-[#292D32]' onClick={()=>{handleScroll(400)}}>
          <MdNavigateNext size={40} />
        </button>
      </div>
    </div>
  );
}

export default WhyUs;
