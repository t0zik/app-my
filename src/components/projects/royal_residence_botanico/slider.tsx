'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
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


export default function Slider() {
  return (
    <div>
      <Swiper
      slidesPerView={2.5}
      pagination={{ clickable: true }}
      freeMode= {true}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction:true
      }}  
      className='w-full h-[330px]'
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
      <SwiperSlide>
      <Image
      src={slider_image_2}
      alt='slider'
      width={500}
      height={330}
      className='object-cover '
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
  )
}
