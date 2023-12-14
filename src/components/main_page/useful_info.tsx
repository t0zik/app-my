'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import {Autoplay} from 'swiper/modules'
import Image from 'next/image'
import { Pagination, Grid } from 'swiper/modules';


import slider_image1 from '@/../public/images/main_page/second_swiper1.png'
import slider_image2 from '@/../public/images/main_page/second_swiper2.png'
export default function Useful_info() {
  SwiperCore.use([Autoplay])
  return (
    <div className='m-auto items-center'>
        <h1 className='text-center text-[44px] font-semibold  mt-10 mb-10  ' >Useful informathion</h1>

        <Swiper
      slidesPerView={2}
      pagination={{
        type: 'fraction',
      }}
      modules={[Pagination,Grid]}
      autoplay={{
        delay: 2000,
      }}
      slidesPerGroupSkip={1}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        769: {
          slidesPerView: 1,
          slidesPerGroup: 2,
        },}}
      className=' lg:w-[540px] lg:h-[1080px] xl:w-[1080px] xl:h-[540px]'
    >
      <SwiperSlide  >
        <div className='w-[540px] h-[540px] float-left relative'>
            <p className='absolute top-0 left-0 font-medium text-lg'>What`s new?</p>
            <h1 className='font-bold mt-32 text-[40px] mb-10'>Income from real estate
                Batumi investment
            </h1>
            <p className='font-medium text-lg'>When choosing profitable real estate in Batumi, it is necessary to evaluate its investment attractiveness. How quickly will you pay back your investment in an apartment or townhouse in Batumi? What will be the income? We are confident in the profitability of our facilities and that's why.</p>
        </div>
        <Image 
      src={slider_image1}
      alt='slider'
      width={500}
      height={500}
      className='object-cover'
      />

      </SwiperSlide>

      <SwiperSlide>
      <div className='w-[540px] h-[540px] float-left relative'>
            <p className='absolute top-0 left-0 font-medium text-lg'>What`s new?</p>
            <h1 className='font-bold mt-32 text-[40px] mb-10'>10 reasons to invest in
            Geogria: in real estate 
            </h1>
            <p className='font-medium text-lg'>Foreign investments in Georgia in 2022 increased by almost 80%. Investors from Europe, USA, Turkey, Great Britain, and China are investing in the energy, financial, transport, and of course, real estate in Georgia. </p>
        </div>
      <Image
      src={slider_image2}
      alt='slider'
      width={500}
      height={500}
      className='object-cover'
      />
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
