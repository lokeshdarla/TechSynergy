
import React from 'react';
import {ServiceInfo} from '@/constants/index';
import Image from 'next/image';

const ServiceCard: React.FC<{ serviceInfo: ServiceInfo}> = ({ serviceInfo}) => {
  return (
    <div className="relative flex flex-col items-start justify-evenly gap-[35px] md:w-[385px] min-w-[250px] md:h-[321px] h-[285px] rounded-[35.39px] shadow-xl md:p-10 p-5 bg-white m-5">
      <div className="icon-container">
        <Image src={serviceInfo.icon} width={50} height={50} className='md:w-[50px] md:h-[50px] w-[36.48px] h-[36.48px]' alt={serviceInfo.name} />
      </div>
      <div className="text-xl gap-5 flex flex-col">
        <h3 className='md:text-[28px] text-[20.43px] md:leading-[40px] font-secondary leading-[29.18px]'>{serviceInfo.name}</h3>
        <p className='md:text-lg text-[11.67px] leading-[24px] font-[400] text-[#525252]'>{serviceInfo.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
