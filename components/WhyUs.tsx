import React from 'react';
import Image from 'next/image';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import vector2 from '@/public/vector2.png';
import vector1 from '@/public/vector1.png';

function WhyUs() {
  return (
    <div className='relative min-w-[1344px] py-16 rounded-[35.39px] bg-[#F7F7FD] m-12 flex flex-col items-center justify-center gap-[40px]'>
      <div className='absolute top-[13%] left-[82%]'>
        <Image src={vector2} alt='Vector 2' width={90.84} height={80.88} />
      </div>
      <div className='absolute top-[80%] left-[10%]'>
        <Image src={vector1} alt='Vector 1' width={90.84} height={80.88} />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-[40px] font-secondary text-center'>
          Choose Us: Your Path to Innovation and <br />
          <span className='text-[#3171DE]'>Success</span>
        </h2>
      </div>

      <div className='flex items-center justify-start gap-10 overflow-x-scroll w-[1344px] h-[300px] hide-scrollbar px-5'>
      <div className='h-[229px] w-[389px] rounded-[35.39px] shadow-xl px-6 py-3 flex items-center justify-center flex-col gap-2 bg-gradient-to-tr to-[#3171DE] from-[#4AC0F2] backdrop-blur-xl relative flex-shrink-0'>
          <div className='absolute inset-0 bg-blur'></div>
          <h1 className='text-[24px] text-[#ffff]'>Expertise Across the Tech Spectrum</h1>
          <p className='text-[#525252] text-[16px] text-[#ffff]'>
            Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.
          </p>
        </div>
        <div className='h-[229px] w-[389px] rounded-[35.39px] shadow-xl px-6 py-3 flex items-center justify-center flex-col gap-2 bg-gradient-to-tr to-[#62AE6E] from-[#e1d43e] backdrop-blur-xl relative flex-shrink-0'>
          <div className='absolute inset-0 bg-blur'></div>
          <h1 className='text-[24px] text-[#ffff]'>Expertise Across the Tech Spectrum</h1>
          <p className='text-[#525252] text-[16px] text-[#ffff]'>
            Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.
          </p>
        </div>

        {/* Card 3 */}
        <div className='h-[229px] w-[389px] rounded-[35.39px] shadow-xl px-6 py-3 flex items-center justify-center flex-col gap-2 bg-[#ffff] flex-shrink-0'>
          <h1 className='text-[24px]'>Expertise Across the Tech Spectrum</h1>
          <p className='text-[#525252] text-[16px]'>
            Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.
          </p>
        </div>

        {/* Card 4 */}
        <div className='h-[229px] w-[389px] rounded-[35.39px] shadow-xl px-6 py-3 flex items-center justify-center flex-col gap-2 bg-gradient-to-tr to-[#3171DE] from-[#4AC0F2] backdrop-blur-xl relative flex-shrink-0'>
          <div className='absolute inset-0 bg-blur'></div>
          <h1 className='text-[24px] text-[#ffff]'>Expertise Across the Tech Spectrum</h1>
          <p className='text-[#525252] text-[16px] text-[#ffff]'>
            Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-5'>
        <button className='p-2 rounded-full bg-[#ffff] font-thin text-[#292D32]'>
          <MdNavigateBefore size={40} />
        </button>
        <button className='p-2 rounded-full bg-[#ffff] font-thin text-[#292D32]'>
          <MdNavigateNext size={40} />
        </button>
      </div>
    </div>
  );
}

export default WhyUs;
