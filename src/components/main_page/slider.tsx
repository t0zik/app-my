'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import {Autoplay} from 'swiper/modules'
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//images
import slider_image_1 from '@/../public/images/main_page/solid_slider_image3.jpg'
import slider_image_2 from '@/../public/images/main_page/solid_slider_image2.jpg'
import slider_image_3 from '@/../public/images/main_page/solid_slider_image1.jpg'
import slider_image_4 from '@/../public/images/main_page/solid_slider_image4.jpg'
import arrow from '@/../public/images/main_page/arrow.svg'

export default function Slider() {
  SwiperCore.use([Autoplay])
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-6 gap-y-16 px-4 py-24 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <p className=''>About us</p>
          <h2 className="text-3xl mb-20 font-bold tracking-tight text-gray-900 sm:text-4xl ">Who are we?</h2>
          <p className="mt-4 mb-10">
          We are highly qualified specialists, behind whom participation in the construction of many well-known objects in Batumi, as well as private investors. All of us united into a single team more than 10 years ago to create truly unique projects that the city is proud of.
          </p>
          <div className='flex items-center text-[#144e5e] hover:text-[#f2c231] easy-in duration-300 w-[120px]'>
            <p className='mr-3  font-[600]'>Lern more</p>
           <Image src={arrow} alt='arrow' width={30} height={15}/>
           </div>
          
        </div>
        <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
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