'use client'
import React from 'react';
import TitleSection from './TitleSection';
import GradientBackground from './GradientBackround';
import HeroImage from './HeroImage';

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-end w-full mt-[200px] md:mt-[20px] md:flex-row flex-col px-10">
      <GradientBackground>
        <TitleSection
          title="TECH SERVICES"
          subtitle="TechSynergy: Innovate, Create, Elevate"
          tagline="Unlocking Possibilities, One Code at a Time"
          buttonText='See Projects'
          buttonType='primary'
        />
      </GradientBackground>
      <HeroImage src="/hero.png" alt="Hero Image" width={900} height={752} />
    </div>
  );
};

export default Hero;
