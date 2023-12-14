'use client'
import Link from 'next/link'
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
import slider_image_1 from '@/../public/images/useful_info/img1.jpg'
import slider_image_2 from '@/../public/images/useful_info/img2.jpg'
import slider_image_3 from '@/../public/images/useful_info/img3.jpg'


export default function Video_links() {
  return (
    <div className=''>
        <h2 className='text-center text-[44px] font-medium'>YouTube Shorts </h2>
        <Swiper
      slidesPerView={1}
      breakpoints={{
        640:{
            slidesPerView:3
        }
      }}
      pagination={{ clickable: true }}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 2000,
      }}
      className=' lg:w-[900px] h-[600px] mb-10'
    >
      <SwiperSlide className=''>
        <div className='h-[100px] w-[290px] flex items-center'>
      <p className=' text-center font-medium'> Director about the Royal Residence Botanico project</p>

        </div>
      <Link  href={'https://youtube.com/shorts/o-qKwWMmUrA?si=9MmIcDDEVRLVQw_W'}>
        <Image 
      src={slider_image_1}
      alt='slider'
      width={290}
      height={500}
      className='object-cover'
      />
      </Link>
      

      </SwiperSlide>
      <SwiperSlide >
      <div className='h-[100px] w-[290px] flex items-center'>
      <p className=' text-center font-medium'>Townhouses and apartments in the Royal Residence Botanico complex</p>
      
        </div>
        <Link href={'#'}>
      <Image
      src={slider_image_2}
      alt='slider'
      width={290}
      height={500}
      className='object-cover '
      />
      </Link>
      </SwiperSlide>
 
      <SwiperSlide>
      <div className='h-[100px] w-[290px] flex items-center'>
      <p className=' text-center font-medium'> Why is it worth subscribing to our telegram channel?</p>
      </div>
        <Link href={'#'}>
      <Image
      src={slider_image_3}
      alt='slider'
      width={290}
      height={500}
      className='object-cover'
      />
      </Link>
      </SwiperSlide>
      
    </Swiper>
    </div>
  )
}

