// Assuming this file is named Teams.tsx
import React from 'react';
import TeamCategoryCard from '@/components/Card/TeamCard';

function Teams() {
  const frontendInfo = {
    icon: '/frontend_icon.png', // Update with the correct relative path from the public directory
    name: 'Front-end',
    description: 'Our frontend developers understand the delicate balance between aesthetics and functionality.',
  };

  const backendInfo = {
    icon: '/backend_icon.png', // Update with the correct relative path from the public directory
    name: 'Back-end',
    description: 'Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.',
  };

  const dataAnalystsInfo = {
    icon: '/data_icon.png', // Update with the correct relative path from the public directory
    name: 'Data Analysts',
    description: 'Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.',
  };

  return (
    <div>
      <h3 className='text-center text-[34px] mt-14'>We have multidisciplinary teams to meet any <span className='text-[#3171DE]'>challenge.</span></h3>
      <div className='flex items-center justify-between m-10 px-14 py-10 rounded-[35.39px] shadow-xl gap-[105px]'>
        <TeamCategoryCard teamCategoryInfo={frontendInfo} />
        <TeamCategoryCard teamCategoryInfo={backendInfo} />
        <TeamCategoryCard teamCategoryInfo={dataAnalystsInfo} />
      </div>
    </div>
  );
}

export default Teams;
