import React from 'react';
import { TechExpertiseInfo } from '@/constants';
import './TechExpertiseCard.css'

type CardType = 'primary' | 'secondary' | 'tertiary';

const getGradientColors = (type: CardType): string => {
  switch (type) {
    case 'primary':
      return 'TechExpertiseCardContainerPrimary';
    case 'secondary':
      return 'TechExpertiseCardContainerSecondary';
    case 'tertiary':
      return '';
    default:
      return '';
  }
};

const TechExpertiseCard: React.FC<{ techExpertiseInfo: TechExpertiseInfo; cardType: CardType }> = ({ techExpertiseInfo, cardType }) => {
  const gradientColors = getGradientColors(cardType);
  const textColor = gradientColors ? 'TechExpertiseTitlePrimary' : '';

  return (
    <div
      data-testid={`tech-expertise-card`}
      className={`TechExpertiseCardContainer ${gradientColors} relative flex-shrink-0`}
    >
      {gradientColors && <div className='absolute inset-0 bg-blur'></div>}
      <h1 className={`TechExpertiseTitle ${textColor} ${techExpertiseInfo.title}`}>{techExpertiseInfo.title}</h1>
      <p className={`TechExpertiseDescription ${textColor} ${techExpertiseInfo.description}`}>{techExpertiseInfo.description}</p>
    </div>
  );
};

export default TechExpertiseCard;
