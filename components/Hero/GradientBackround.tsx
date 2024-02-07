import React, { ReactNode } from 'react';

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div
      data-testid='gradient-background'
      className="absolute backdrop-blur-xl bg-black opacity-80 flex flex-col items-start justify-center md:m-10 gap-[20px] w-full md:w-[100%] px-10 min-h-[419px] md:min-h-[675px]"
      // style={{
      //   background: 'linear-gradient(90deg, rgba(255,255,255,1) 43%, rgba(255,255,255,0) 100%)',
      // }}
    >
      {children}
    </div>
  );
};

export default GradientBackground;
