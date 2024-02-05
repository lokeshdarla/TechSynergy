import Image from 'next/image';
import vector1 from '@/public/vectors/vector1.png';
import vector2 from '@/public/vectors/vector2.png';
import crew_1 from '@/public/crew/crew_1.png';
import crew_2 from '@/public/crew/crew_2.png';
import crew_3 from '@/public/crew/crew_3.png';
import crew_4 from '@/public/crew/crew_4.png';
import crew_5 from '@/public/crew/crew_5.png';
import Button from '../ui/Button';

function Crew() {
  return (
    <div className="relative md:h-[650px] w-[1400px] left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center md:my-10 my-20 md:gap-[50px] gap-[25px]">
       <div className="md:absolute top-[26%] left-[15%] z-0 hidden md:block">
        <Image src={vector2} alt="" width={150} height={150} />
      </div>
      <div className="md:absolute top-[15%] left-[76%] hidden md:block">
        <Image src={vector1} alt="" width={150} height={150} />
      </div> 
    <div className='md:relative md:z-10 flex md:-space-x-[50px]  flex-wrap items-center justify-center w-[30%] md:w-full md:gap-0 gap-[10px]'>
      <div className='flex -space-x-[50px]'>
      <Image src={crew_1} alt="" className='md:w-[219px] md:h-auto w-[180.9px] h-auto' />
      <Image src={crew_2} alt="" className='md:w-[219px] md:h-auto w-[180.9px] h-auto' />
      </div>
      <div className='flex -space-x-[50px]'>
      <Image src={crew_3} alt="" className='md:w-[219px] md:h-auto w-[180.9px] h-auto' />
      <Image src={crew_4} alt="" className='md:w-[219px] md:h-auto w-[180.9px] h-auto' />
      </div>
     <div className='flex -space-x-[50px]'>
     <Image src={crew_5} alt="" className='md:w-[219px] md:h-auto w-[180.9px] h-auto' />
     </div>
    </div>

      <div className='flex items-center justify-center flex-col md:gap-14 gap-8'>
        <h2 className='md:text-[40px] md:leading-[62px] leading-[62px] text-[26px]'>Let's Form Your Crew.</h2>
        <Button text='Schedule a Call' type='primary'/>
      </div>
    </div>
  );
}

export default Crew;
