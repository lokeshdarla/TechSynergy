import React from 'react';
import Button from '@/components/ui/Button'

interface TitleSectionProps {
  title: string;
  subtitle: string;
  tagline:string;
  buttonText:string;
  buttonType:string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle, tagline,buttonText }) => {
  return (
    <div
    data-testid='title-section'
     className=" md:ml-5 gap-[20px] flex flex-col  md:bg-gradient-to-r from-white to-[rgba(255,255,255,0)] via-[rgba(255,255,255,50)] ">
      <h2 className='text-[#F3BC4C] md:text-[20px] text-[12.02px]'>{title}</h2>
      <h1 className="font-medium md:text-[64px] md:leading-[80px] md:w-[490px] w-[297px] text-[40px] leading-[48.1px]">
        {subtitle}
      </h1>
      <p >{tagline}</p>
      <div>
        <Button text={buttonText} type="tertiary"  />
      </div>
    </div>
  );
};

export default TitleSection;
