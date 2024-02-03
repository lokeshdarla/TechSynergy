
import React from 'react';
import TeamInfo from '@/constants/index';
import Image from 'next/image';

const ServiceCard: React.FC<{ teamCategoryInfo: TeamInfo }> = ({ teamCategoryInfo }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-[35px] w-[385px] h-[321px] rounded-[35.39px] shadow-lg p-10 bg-white">
      <div className="icon-container">
        <Image src={teamCategoryInfo.icon} width={50} height={50} alt={teamCategoryInfo.name} />
      </div>
      <div className="text-xl gap-5 flex flex-col">
        <h3 className='text-[28px] leading-[40px]'>{teamCategoryInfo.name}</h3>
        <p className='text-lg leading-[24px] font-[400] text-[#525252]'>{teamCategoryInfo.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
