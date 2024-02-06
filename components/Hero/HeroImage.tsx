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
    <div className="rounded-2xl md:overflow-auto">
      <Image src={hero} alt={alt} width={width} height={height} />
    </div>
  );
};

export default HeroImage;
