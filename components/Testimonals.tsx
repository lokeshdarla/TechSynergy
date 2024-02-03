import React from 'react';
import Image from 'next/image';
import testimonal_main from '@/public/testimonal_main.png';
import TestimonalCard from './Card/TestimonalCard';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

function Testimonals() {
  const UX_serviceInfo = {
    icon: '/ux_ui_icon.png', // Update with the correct relative path from the public directory
    name: 'UX/UI Design',
    description: 'Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.',
  };

  return (
  
  <>
  <div className='relative flex flex-col items-center justify-end h-[1160px] py-5 gap-[38px] my-20'>
  <div className='absolute flex items-start justify-center px-16 gap-10 top-[1%]'>
    <div>
      <Image src={testimonal_main} alt="testimonal" width={708.93} height={675}/>
    </div>
    <div className='flex flex-col gap-[38px] items-start justify-center'>
      <h2 className='text-[40px] leading-[54px] w-[500px] text-[#3D3D3D] font-medium font-secondary'>We've stopped counting. Over 500 brands count on us.</h2>
      <p className='text-[20px] font-secondary font-medium w-[400px]'>Our 4,000+ team has expertise in almost every programming language.</p>
    </div>
  </div>

  <div className='flex gap-[38px] items-start justify-start hide-scrollbar overflow-x-scroll w-full mx-10 h-[600px]'>
    <TestimonalCard teamCategoryInfo={UX_serviceInfo} />
    <TestimonalCard teamCategoryInfo={UX_serviceInfo} />
    <TestimonalCard teamCategoryInfo={UX_serviceInfo} />
    <TestimonalCard teamCategoryInfo={UX_serviceInfo} />
  </div>

  <div className='flex items-center justify-center gap-5'>
    <button className='p-2 rounded-full bg-[#F7F7FD] font-thin text-[#292D32]'><MdNavigateBefore size={40} width={1}/></button>
    <button className='p-2 rounded-full bg-[#F7F7FD] font-thin text-[#292D32]'><MdNavigateNext size={40}/></button>
  </div>
</div>


  </>
  );
}

export default Testimonals;
