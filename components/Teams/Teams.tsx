// Assuming this file is named Teams.tsx
import React from 'react';
import TeamCategoryCard from '@/components/Card/TeamCard';

function Teams() {
  const frontendInfo = {
    icon: '/teams/frontend_icon.png',
    name: 'Front-end',
    description: 'Our frontend developers understand the delicate balance between aesthetics and functionality.',
  };

  const backendInfo = {
    icon: '/teams/backend_icon.png', 
    name: 'Back-end',
    description: 'Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.',
  };

  const dataAnalystsInfo = {
    icon: '/teams/data_icon.png',
    name: 'Data Analysts',
    description: 'Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.',
  };

  return (
    <div>
      <h3 className='md:text-center text-left text-[24px] px-10 md:text-[34px] mt-14'>We have multidisciplinary teams to meet any <span className='text-[#704AF2]'>challenge.</span></h3>
      <div className='flex items-center justify-between md:m-10 mx-5 md:px-14 px-10 py-10 rounded-[35.39px] shadow-xl md:gap-[105px] gap-[70px] md:flex-row flex-col'>
        <TeamCategoryCard teamCategoryInfo={frontendInfo} />
        <TeamCategoryCard teamCategoryInfo={backendInfo} />
        <TeamCategoryCard teamCategoryInfo={dataAnalystsInfo} />
      </div>
    </div>
  );
}

export default Teams;
