
import React from 'react';
import { TestimonalInfo } from '@/constants';
import Image from 'next/image';

const TestimonalCard: React.FC<{ testimonalInfo: TestimonalInfo }> = ({ testimonalInfo }) => {
  return (
    <div role="div" aria-label="testimonial-card" className="relative flex flex-col items-start justify-between  max-w-[389px] md:h-[528px] h-[346.66px] rounded-[35.39px] shadow-md md:px-10 bg-white md:py-15 p-[30px] md:ml-0 ml-10">
      <div className="icon-container">
       <p className='md:text-[25.99px] text-[17.09px]'>{testimonalInfo.stars}</p>
      </div>
      <div className="text-xl gap-5 flex flex-col ">
        <h3 className='md:text-[26px] text-[20px] md:leading-[40px] leading-[25px]  font-bold'>{testimonalInfo.review}</h3>
        <p className='md:text-[16.32px] text-[12px] font-[400] text-[#6E6C83] md:leading-[30.32px] text-justify leading-[19.94px]'>{testimonalInfo.description}</p>
      </div>
      <hr className='border-t-2 border-[#DEDEE9] md:w-[326.05px] w-[250px]' />
      <div className='flex items-center justify-center gap-[20px]'>
      <Image src={testimonalInfo.company} width={33} height={33} alt="Company Logo" className=' h-[21.71px] w-auto'/>
      <div>
        <h3 className='text-[13.29px] font-bold md:text-[20.21px]'>{testimonalInfo.name}</h3>
        <p className='text-[13.29px] md:text-[14.44px]'>{testimonalInfo.role}</p>
      </div>
      </div>
    </div>
  );
}

export default TestimonalCard;
