'use client'
import React from 'react';
import TitleSection from './TitleSection';
import GradientBackground from './GradientBackround';
import HeroImage from './HeroImage';

const Hero: React.FC = () => {
  return (
    <div className="relative flex items-center justify-end md:px-10">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-55 md:bg-opacity-0 md:bg-gradient-to-r md:from-white md:via-white md:to-transparent w-full h-full -translate-y-1/2 text-white flex items-center px-10">
      <TitleSection
        title="TECH SERVICES"
        subtitle="TechSynergy: Innovate, Create, Elevate"
        tagline="Unlocking Possibilities, One Code at a Time"
        buttonText="See Projects"
        buttonType="primary"
      />
    </div>
    <HeroImage src="/hero.png" alt="Hero Image" width={900} height={752} />
  </div>
  
  
  
  );
};

export default Hero;
