import React from 'react'
import Image from 'next/image'
import vector2 from '@/public/vector2.png'
import { FaFacebook, FaAirbnb, FaApple, FaSass, FaQuora} from "react-icons/fa";
import { TbBrandDisney } from "react-icons/tb";
import { SiSamsung } from "react-icons/si";

function Organisations() {

  const logos = [
    { name: 'Facebook', icon: <FaFacebook size={40} /> },
    { name: 'Disney', icon: <TbBrandDisney size={40} /> },
    { name: 'Airbnb', icon: <FaAirbnb size={40} /> },
    { name: 'Apple', icon: <FaApple size={40} /> },
    { name: 'Samsung', icon: <SiSamsung size={40} /> },
    { name: 'Quora', icon: <FaQuora size={40} /> },
    { name: 'Sass', icon: <FaSass size={40} /> },
    { name: 'Facebook', icon: <FaFacebook size={40} /> },
    { name: 'Disney', icon: <TbBrandDisney size={40} /> },
    { name: 'Airbnb', icon: <FaAirbnb size={40} /> },
    { name: 'Apple', icon: <FaApple size={40} /> },
    { name: 'Samsung', icon: <SiSamsung size={40} /> },
    { name: 'Quora', icon: <FaQuora size={40} /> },
    { name: 'Sass', icon: <FaSass size={40} /> },
  ];

  return (
    <div className='relative min-w-[1344px] min-h-[475px] rounded-[35.39px] bg-[#F7F7FD] m-12'>
      <div className='absolute top-[37.03px] left-[44px] z-0'>
        <Image src={vector2} alt="Vector 2" width={90.84} height={80.88}/>
      </div>
      <div className='flex flex-col items-center justify-center min-h-[475px]' >
        <div className='flex flex-col items-center justify-center gap-[21px]'>
          <h2 className='text-[40px] font-secondary'>Trusted by Leading Organizations</h2>
          <p className='text-[20px] leading-[25px] text-[#525252] w-[500px] text-center tracking-wide '>Our 4,000+ team has expertise in almost everyprogramming language.</p>
        </div>
        <div className="slider m-20 ">
      <ul className="slider-track flex gap-10 ">
        {logos.map((logo, index) => (
           <li className="flex gap-2 text-4xl text-[#A9A9B9] items-center" key={index}>{logo.icon} {logo.name}</li>
        ))}
      </ul>
    </div>
    <button className='bg-[#3171DE] py-[18px] px-[34px] rounded-[50px] text-white'>Our full repertories</button>
      </div>
    </div>
  )
}

export default Organisations

