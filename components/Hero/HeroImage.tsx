import React from 'react';
import Image from 'next/image';
import hero from '@/public/Image/hero.png'

interface HeroImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, width, height }) => {
  return (
    <div className="rounded-2xl flex md:h-[600px] h-[400px] overflow-hidden md:w-1/2">
    <Image src={hero} alt={alt} width={width} height={height} className='w-full object-cover h-full' />
  </div>
  
  );
};

export default HeroImage;
