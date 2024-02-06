import React from 'react';
import Image from 'next/image';
import vector1 from '@/public/vectors/vector1.png';
import vector2 from '@/public/vectors/vector2.png';
import ServiceCard from '@/components/Card/ServiceCard';
import { servicesInfo } from './ServiceCardData';

function Services() {
  return (
    <>
      <div className='relative flex items-center justify-center mt-20 flex-col'>
        <div className='flex items-start md:items-center w-[350px] font-secondary md:justify-center justify-start gap-[18px] md:w-[841px] pt-20 '>
          <Image src={vector1} alt="Vector 1" width={100} height={100} className='h-[60px] md:h-[80.88px]' />
          <h1 className='md:text-[40px] text-[25px]'>Empowering Your Digital Vision: Our Comprehensive Tech Services.</h1>
        </div>
        <div className='relative flex flex-col m-10 gap-10 '>
          <div className='absolute top-[37%] left-[62%] z-0 hidden md:block'>
            <Image src={vector2} alt="Vector 2" width={175} height={175} />
          </div>
          <div className='absolute top-1/2 left-[20%] transform translate-x-1/2 translate-y-1/2 z-0 hidden md:block'>
            <Image src={vector1} alt="Vector 1" width={175} height={175} />
          </div>
          <div className='z-10 flex flex-row items-center md:grid md:grid-cols-3 md:w-full justify-start md:gap-2 w-[400px] min:h-[400px] hide-scrollbar md:px-5 overflow-x-scroll md:mx-0 hide-scrollbar'>
            {servicesInfo.map((service) => (
              <ServiceCard serviceInfo={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
