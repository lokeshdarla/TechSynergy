import React from 'react';
import Image from 'next/image';
import vector1 from '@/public/vector1.png';
import ServiceCard from './Card/ServiceCard';
import vector2 from '@/public/vector2.png'

function Services() {
  const UX_serviceInfo = {
    icon: '/ux_ui_icon.png', // Update with the correct relative path from the public directory
    name: 'UX/UI Design',
    description: 'Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.',
  };

  const mobile_serviceInfo = {
    icon: '/mobile_icon.png', // Update with the correct relative path from the public directory
    name: 'Mobile App Development',
    description: 'Build performant, scalable, and secure mobile applications for iOS and Android devices.',
  };

  const platform_serviceInfo = {
    icon: '/platform_icon.png', // Update with the correct relative path from the public directory
    name: 'Platform and Infrastructure',
    description: 'Build performant, scalable, and secure mobile applications for iOS and Android devices.',
  };
  const AIServiceInfo = {
    icon: '/ai_icon.png',
    name: 'AI and Data Science',
    description: 'Use leading AI, machine learning, and data engineering technologies to unlock business value.',
  };

  const QAtestingInfo = {
    icon: '/QA_icon.png',
    name: 'QA and Testing',
    description: 'Create custom software tailored for your unique needs, including front-end, and core back-end technology.',
  };
  const SoftwareInfo = {
    icon: '/software_icon.png',
    name: 'Custom SoftwareDevelopment',
    description: 'Create custom software tailored for your unique needs, including front-end, and core back-end technology.',
  };
  return (
    <div className='flex items-center justify-center mt-20 flex-col'>
      <div className='flex items-center justify-center gap-[18px] w-[841px] pt-20'>
        <Image src={vector1} alt="Vector 1" width={100} height={100} />
        <h1 className='text-[40px]'>Empowering Your Digital Vision: Our Comprehensive Tech Services.</h1>
      </div>
      <div className='relative flex flex-col m-10 gap-10'>
      <div className='absolute top-[37%] left-[62%] z-0'>
        <Image src={vector2} alt="Vector 2" width={175} height={175}/>
      </div>
      <div className='absolute top-1/2 left-[20%] transform translate-x-1/2 translate-y-1/2 z-10'>
        <Image src={vector1} alt="Vector 1" width={175} height={175} />
      </div>
      <div className='z-10 flex items-center justify-center flex-wrap gap-[52px]'>
        <ServiceCard teamCategoryInfo={SoftwareInfo} />
        <ServiceCard teamCategoryInfo={QAtestingInfo} />
        <ServiceCard teamCategoryInfo={AIServiceInfo} />
      </div>
      <div className='z-10 flex items-center justify-center flex-wrap gap-[52px]'>
      <ServiceCard teamCategoryInfo={UX_serviceInfo} />
        <ServiceCard teamCategoryInfo={mobile_serviceInfo} />
        <ServiceCard teamCategoryInfo={platform_serviceInfo} />
      </div>
    </div>
     
    </div>
  );
}

export default Services;
