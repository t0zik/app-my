'use client'
import '@/app/(web)/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import {Autoplay} from 'swiper/modules'
import Image from 'next/image'
import { Circle } from 'rc-progress';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slider_image_1 from '@/../public/images/main_page/solid_slider_image3.jpg'
import slider_image_2 from '@/../public/images/main_page/solid_slider_image2.jpg'
import slider_image_3 from '@/../public/images/main_page/solid_slider_image1.jpg'
import slider_image_4 from '@/../public/images/main_page/solid_slider_image4.jpg'
import arrow from '@/../public/images/main_page/arrow.svg'  


export default function Project_details() {
  SwiperCore.use([Autoplay])
const percent = 90;
  return (
    <div className='w-[80%] m-auto'>
        <div className="  grid max-w-2xl grid-cols-1 items-center gap-x-6 gap-y-16 px-4 py-24 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className='-mt-14'>
        <h2 className='font-semibold text-[32px]'>Project details</h2>
        <ul className='text-[22px]'>
          <li><span className='font-semibold mr-1'>Adress:</span>Batumi, Absaros First Lane, 5</li>
          <li><span className='font-semibold mr-1'>Completed on:</span>December 2023</li>
          <li><span className='font-semibold mr-1'>Payment options:</span>installment plan, mortgage</li>
          <li><span className='font-semibold mr-1'>Down payment:</span>30%</li>
        </ul>
        <div className='flex items-center text-[22px] mt-5 mb-5 relative'>
          <span className='font-semibold mr-3'>Progress:</span><Circle percent={percent} strokeWidth={6} trailWidth={6} strokeColor="#144e5e" className='w-[60px]'/>
          <p className='absolute left-[114px]'>{percent}%</p>
        </div>
           
        <button className=' bg-[#f2c231] rounded-md w-80 h-14  absolute font-semibold hover:shadow-2xl hover:shadow-black duration-200 ease-out  flex flex-row items-center justify-center gap-2' >Have a question?<Image src={arrow} alt='arrow' width={30} height={15}/> </button>

        </div>
        
        <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
      }}
      className='w-[500px] h-[330px]'
    >
      <SwiperSlide>
        <Image 
      src={slider_image_1}
      alt='slider'
      width={500}
      height={330}
      className='object-cover'
      />
      </SwiperSlide>
      <SwiperSlide className='bg-blue-300'>
      <Image
      src={slider_image_2}
      alt='slider'
      width={500}
      height={330}
      className='object-cover w-full'
      />
      </SwiperSlide>
      <SwiperSlide>
      <Image
      src={slider_image_3}
      alt='slider'
      width={500}
      height={330}
      className='object-cover'
      />
      </SwiperSlide>
      <SwiperSlide>
      <Image
      src={slider_image_4}
      alt='slider'
      width={500}
      height={330}
      className='object-cover'
      />
      </SwiperSlide>
    </Swiper>
    </div>
  </div>
  )
}