import Image from 'next/image';
import vector1 from '@/public/vector1.png';
import vector2 from '@/public/vector2.png';
import crew_1 from '@/public/Image/crew_1.png';
import crew_2 from '@/public/Image/crew_2.png';
import crew_3 from '@/public/Image/crew_3.png';
import crew_4 from '@/public/Image/crew_4.png';
import crew_5 from '@/public/Image/crew_5.png';

function Crew() {
  return (
    <div className="relative h-[650px] w-[1400px] left-1/2 transform -translate-x-1/2 flex items-end justify-center my-10">
      <div className="absolute top-[36%] left-[11%]">
        <Image src={vector2} alt="" width={150} height={150} />
      </div>
      <div className="absolute top-[20%] left-[15%]">
        <Image src={crew_1} alt="" width={250} height={250} />
      </div>
      <div className="absolute top-[20%] left-[28%]">
        <Image src={crew_2} alt="" width={250} height={250} />
      </div>
      <div className="absolute top-[20%] left-[41%]">
        <Image src={crew_3} alt="" width={250} height={250} />
      </div>
      <div className="absolute top-[20%] left-[54%]">
        <Image src={crew_4} alt="" width={250} height={250} />
      </div>
      <div className="absolute top-[20%] left-[67%] z-10">
        <Image src={crew_5} alt="" width={250} height={250} />
      </div>
      <div className="absolute top-[20%] left-[78%]">
        <Image src={vector1} alt="" width={150} height={150} />
      </div>
      <div className='flex items-center justify-center flex-col gap-14'>
        <h2 className='text-[40px]'>Let's Form Your Crew.</h2>
        <button className='bg-[#3171DE] px-6 py-3 rounded-full text-[#FFFFFF]'>Schedule a Call</button>
      </div>
    </div>
  );
}

export default Crew;
