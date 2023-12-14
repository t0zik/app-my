'use client'
import '@/app/(web)/style.css'
import Image from 'next/image'
import { Circle } from 'rc-progress';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import header_img from '@/../public/images/projects/luxury_villas/header_img.png'
import arrow from '@/../public/images/main_page/arrow.svg'  


export default function Project_details() {

const percent = 100;

  return (
    <div className='w-[80%] m-auto mb-20'>
        <div className="flex flex-row gap-44  items-center ml-20">
        <div className=''>
        <h2 className='font-semibold text-[32px]'>Project details</h2>
        <p><span className='font-semibold mr-1'>Phone:</span> +995 555 22 11 88</p>
        {/* <ul className='text-[22px]'>
          <li><span className='font-semibold mr-1'>Adress:</span>Batumi, 12 Zgvyspyris Street</li>
          <li><span className='font-semibold mr-1'>Completed on:</span>December 2022</li>
          <li><span className='font-semibold mr-1'>Payment options:</span>installment plan, mortgage</li>
          <li><span className='font-semibold mr-1'>Down payment:</span>30%</li>
        </ul> */}
        <div className='flex items-center text-[22px] mt-5 mb-5 relative'>
          <span className='font-semibold mr-3'>Progress:</span><Circle percent={percent} strokeWidth={6} trailWidth={6} strokeColor="#144e5e" className='w-[70px]'/>
          <p className='absolute left-[114px]'>{percent}%</p>
        </div>
           
        <button className=' bg-[#f2c231] rounded-md w-80 h-14  absolute font-semibold hover:shadow-2xl hover:shadow-black duration-200 ease-out  flex flex-row items-center justify-center gap-2' >Have a question?<Image src={arrow} alt='arrow' width={30} height={15}/> </button>

        </div>
        <Image src={header_img} alt='header img' className='w-[700px] h-auto'/>
    </div>

  </div>
  )
}
