
import React from 'react';
import TeamInfo from '@/constants/index';
import Image from 'next/image';
import testimonal_1 from '@/public/testimonal_1.png'

const TestimonalCard: React.FC<{ teamCategoryInfo: TeamInfo }> = ({ teamCategoryInfo }) => {
  return (
    <div className="relative flex flex-col items-start justify-center md:gap-[29px] gap-[20px] max-w-[389px] md:h-[528px] h-[346.66px] rounded-[35.39px] shadow-md md:px-10 bg-white md:py-15 p-[30px] md:ml-0 ml-10">
      <div className="icon-container">
       <p className='md:text-[25.99px] text-[17.09px]'>⭐ ⭐️ ⭐️ ⭐️ ⭐️️</p>
      </div>
      <div className="text-xl gap-5 flex flex-col ">
        <h3 className='md:text-[28px] text-[20px] md:leading-[40px] leading-[25px]  font-bold'>"Exceptional Solutions, Exceeded Expectations!"</h3>
        <p className='md:text-[17.32px] text-[12px] font-[400] text-[#6E6C83] md:leading-[30.32px] text-justify leading-[19.94px]'>"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."</p>
      </div>
      <hr className='border-t-2 border-[#DEDEE9] md:w-[326.05px] w-[250px]' />
      <div className='flex items-center justify-center gap-[20px]'>
      <Image src={testimonal_1} alt="testimonal_1" className='md:w-[33px] md:h-[33px] h-[21.71px] w-auto'/>
      <div>
        <h3 className='text-[13.29px] font-bold md:text-[20.21px]'>Mary Johnson</h3>
        <p className='text-[13.29px] md:text-[14.44px]'>CEO of TechCraft Solutions</p>
      </div>
      </div>
    </div>
  );
}

export default TestimonalCard;
