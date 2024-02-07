import React from 'react';
import { TechExpertiseInfo } from '@/constants';

type CardType = 'primary' | 'secondary' | 'tertiary';

const getGradientColors = (type: CardType): string => {
  switch (type) {
    case 'primary':
      return 'bg-gradient-to-tr to-[#3171DE] from-[#4AC0F2]';
    case 'secondary':
      return 'bg-gradient-to-tr to-[#62AE6E] from-[#e1d43e]';
    case 'tertiary':
      return ''; 
    default:
      return '';
  }
};

const TechExpertiseCard: React.FC<{ techExpertiseInfo: TechExpertiseInfo; cardType: CardType }> = ({ techExpertiseInfo, cardType }) => {
  const gradientColors = getGradientColors(cardType);
  const textColor = gradientColors ? 'text-white' : 'text-black';

  return (
    <div 
    data-testid={`tech-expertise-card`}
    className={`md:h-[229px] md:w-[389px] w-[270px] h-[168px] rounded-[35.39px] shadow-xl px-6 py-3 flex items-center justify-center flex-col gap-2 ${gradientColors} backdrop-blur-xl relative flex-shrink-0`}>
      {gradientColors && <div className='absolute inset-0 bg-blur'></div>}
      <h1 className={`md:text-[24px] text-[17.61px] leading-[23.48px] md:leading-[32px] ${textColor} ${techExpertiseInfo.title}`} >{techExpertiseInfo.title}</h1>
      <p className={`text-[#525252] md:text-[16px] text-[11.74px] leading-[17.61px] md:leading-[24px] ${textColor} ${techExpertiseInfo.description}`}>{techExpertiseInfo.description}</p>
    </div>
  );
};

export default TechExpertiseCard;
