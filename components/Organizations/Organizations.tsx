import React from 'react'
import Image from 'next/image'
import vector2 from '@/public/vectors/vector2.png'
import { FaFacebook, FaAirbnb, FaApple, FaSass, FaQuora} from "react-icons/fa";
import { TbBrandDisney } from "react-icons/tb";
import { SiSamsung } from "react-icons/si";
import Button from '../ui/Button';

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
    <div className='relative md:min-w-[1344px] w-auto md:min-h-[475px] min-h-[547px] rounded-[35.39px] bg-[#F7F7FD] md:m-12 m-5'>
      <div className='absolute md:top-[37.03px] top-[30px] left-[20px] md:left-[44px] z-0'>
        <Image src={vector2} alt="Vector 2" className='md:w-[90.84px] md:h-[80.88px] w-[36.23px] h-[32.25px]'/>
      </div>
      <div className='flex flex-col items-center justify-center md:min-h-[475px] min-h-[547px]' >
        <div className='flex flex-col items-center justify-center gap-[21px]'>
          <h2 className='md:text-[40px] text-[26px] font-secondary px-[100px] md:px-0 text-center'>Trusted by Leading Organizations</h2>
          <p className='md:text-[20px] text-[12px] md:px-0 px-[100px] md:leading-[25px] leading-[15px] text-[#525252] w-[500px] text-center tracking-wide '>Our 4,000+ team has expertise in almost everyprogramming language.</p>
        </div>
        <div className="slider md:m-20 my-10  gap-10 flex flex-col">
      <ul className="slider-track flex gap-10 ">
        {logos.map((logo, index) => (
           <li className="flex gap-2 text-4xl text-[#A9A9B9] items-center" key={index}>{logo.icon} {logo.name}</li>
        ))}
      </ul>
      <ul className="md:hidden slider-track flex gap-10 ">
        {logos.map((logo, index) => (
           <li className="flex gap-2 text-4xl text-[#A9A9B9] items-center" key={index}>{logo.icon} {logo.name}</li>
        ))}
      </ul>
    </div>
    <Button text='Our full repertories' type='primary'/>
      </div>
    </div>
  )
}

export default Organisations

