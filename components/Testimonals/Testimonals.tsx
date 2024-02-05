'use client'
import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import testimonal_main from '@/public/testimonals/testimonal_main.png';
import TestimonalCard from '../Card/TestimonalCard';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import testimonials from './testimonalData';

function Testimonals() {
  const myRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollAmount: number) => {
    const container = myRef.current;

    if (container) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <div className='relative flex flex-col items-center justify-end md:h-[1160px] py-5 gap-[38px] my-20'>
        <div className='md:absolute flex md:flex-row flex-col md:items-start items-center justify-center md:px-16 gap-10 md:top-[1%]'>
          <div>
            <Image src={testimonal_main} alt="testimonal" className='md:w-[708.93px] md:h-[675px] h-auto w-[372.32px]' />
          </div>
          <div className='flex flex-col gap-[38px] items-start justify-center'>
            <h2 className='md:text-[40px] text-[28px] font-secondary md:leading-[54px] leading-[40px] md:w-[500px] md:px-[20px] px-[60px] text-center md:text-start text-[#3D3D3D] font-medium'>We've stopped counting. Over 500 brands count on us.</h2>
            <p className='md:text-[20px] text-[14px] font-medium md:w-[400px] md:px-[20px] px-[40px] md:text-start text-center font-secondary'>Our 4,000+ team has expertise in almost every programming language.</p>
          </div>
        </div>

        <div className='flex md:gap-[38px] items-start justify-start hide-scrollbar overflow-x-scroll w-full md:h-[600px] h-[360.66px] md:ml-[100px]' ref={myRef}>
        {testimonials.map((testimonial, index) => (
          <TestimonalCard testimonalInfo={testimonial} key={testimonial.name}/>
        ))}
        </div>

        <div className='flex items-center justify-center gap-5'>
        <button className='p-2 rounded-full bg-[#F7F7FD] font-thin text-[#292D32]' onClick={() => handleScroll(-500)}>
          <MdNavigateBefore size={40} width={1} />
        </button>
        <button className='p-2 rounded-full bg-[#F7F7FD] font-thin text-[#292D32]' onClick={() => handleScroll(500)}>
        <MdNavigateNext size={40} />
      </button>
        </div>
      </div>
    </>
  );
}

export default Testimonals;
