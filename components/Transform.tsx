import React from 'react'
import team from '@/public/Image/team.png'
import Image from 'next/image'
function Transform() {
  return (
    <div className='min-h-[964px] relative'>
     <div className='relative min-h-[632px] min-w-[1344px] mx-10 my-[125px] rounded-[35.39px] bg-gradient-to-tr to-[#3171DE] from-[#4AC0F2] backdrop-blur-xl bg-opacity-50 flex'>
      <div className='flex items-center flex-col gap-[33px] px-52 mt-24'>
      <h1 className='font-secondary leading-[68px] text-[48px] text-[#FFFFFF] text-center'>
        Ready to Transform Your Vision into Reality? Let's Get Started!
      </h1>
      <button className='bg-white px-6 py-3 rounded-full text-[#5E5DEF]'>Schedule a Call</button>
      </div>
    </div>
    <div className='absolute left-[23%] top-[38%]'>
      <Image src={team} alt="" width={770.53} height={409} />
      </div>
    </div>
   
  )
}

export default Transform
