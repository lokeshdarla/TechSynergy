
import React from 'react';
import TeamInfo from '@/constants/index';
import Image from 'next/image';
import testimonal_1 from '@/public/testimonal_1.png'

const TestimonalCard: React.FC<{ teamCategoryInfo: TeamInfo }> = ({ teamCategoryInfo }) => {
  return (
    <div className="relative flex flex-col items-start justify-center gap-[29px] w-[395.35px] h-[528px] rounded-[35.39px] shadow-lg px-10 bg-white py-15">
      <div className="icon-container">
       <p className='text-[25.99px]'>⭐ ⭐️ ⭐️ ⭐️ ⭐️️</p>
      </div>
      <div className="text-xl gap-5 flex flex-col">
        <h3 className='text-[28px] leading-[40px]'>"Exceptional Solutions, Exceeded Expectations!"</h3>
        <p className='text-[17.32px] font-[400] text-[#6E6C83] leading-[30.32px]'>"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."</p>
      </div>
      <hr className='border-t-2 border-[#DEDEE9] w-[326.05px]' />
      <div className='flex items-center justify-center gap-[20px]'>
      <Image src={testimonal_1} alt="testimonal_1" width={33} height={33}/>
      <div>
        <h3>Mary Johnson</h3>
        <p>CEO of TechCraft Solutions</p>
      </div>
      </div>
    </div>
  );
}

export default TestimonalCard;
