import React from 'react';
import { TechExpertiseInfo } from '@/constants';

const TechExpertiseCard: React.FC<{techExpertiseInfo: TechExpertiseInfo}> = ({ techExpertiseInfo }) => {
  const textColor = techExpertiseInfo.gradientColors ? 'text-white' : 'text-black';

  return (
    <div className={`md:h-[229px] md:w-[389px] w-[299px] h-[168px] rounded-[35.39px] shadow-xl px-6 py-3 flex items-center justify-center flex-col gap-2 ${techExpertiseInfo.gradientColors || ''} backdrop-blur-xl relative flex-shrink-0`}>
      {techExpertiseInfo.gradientColors && <div className='absolute inset-0 bg-blur'></div>}
      <h1 className={`md:text-[24px] text-[17.61px] leading-[23.48px] md:leading-[32px] ${textColor} ${techExpertiseInfo.title}`} >{techExpertiseInfo.title}</h1>
      <p className={`text-[#525252] md:text-[16px] text-[11.74px] leading-[17.61px] md:leading-[24px] ${textColor} ${techExpertiseInfo.description}`}>{techExpertiseInfo.description}</p>
    </div>
  );
};

export default TechExpertiseCard;
