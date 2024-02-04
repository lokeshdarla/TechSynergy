import React from 'react'
import team from '@/public/Image/team.png'
import Image from 'next/image'
import Button from '../ui/Button'

function Transform() {
  return (
    <div className='min-h-[964px] relative '>
     <div className='relative md:min-h-[632px] md:min-w-[1344px] h-[560px] md:mx-10 mx-5 my-[125px] rounded-[35.39px] bg-gradient-to-tr to-[#3171DE] from-[#4AC0F2] backdrop-blur-xl bg-opacity-50 flex'>
      <div className='flex items-center justify-center md:justify-normal flex-col gap-[33px] md:px-52 px-1 md:mt-24'>
      <h1 className='font-secondary md:leading-[68px] md:text-[48px] text-[32px] leading-[48px]  text-[#FFFFFF] text-center'>
        Ready to Transform Your Vision into Reality? Let's Get Started!
      </h1>
      <Button text='Schedule a Call' type='secondary' />
      </div>
    </div>
    <div className='absolute md:left-[23%] md:top-[38%] top-[50%] left-[5%]'>
      <Image src={team} alt=""  className='md:w-[770.53px] md:h-[409px] w-[350.56px] h-auto' />
      </div>
    </div>
   
  )
}

export default Transform
