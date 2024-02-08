
import React from 'react';
import {ServiceInfo} from '@/constants/index';
import Image from 'next/image';
import './ServiceCard.css'

const ServiceCard: React.FC<{ serviceInfo: ServiceInfo}> = ({ serviceInfo}) => {
  return (
    <div className="service-card">
      <div className="icon-container">
        <Image src={serviceInfo.icon} width={100} height={100} className='service-image' alt={serviceInfo.name} />
      </div>
      <div className=".text-container">
        <h3 className='.service-title '>{serviceInfo.name}</h3>
        <p className='.service-description'>{serviceInfo.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
