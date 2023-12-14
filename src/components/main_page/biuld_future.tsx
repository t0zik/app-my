import React from 'react'
import Image from 'next/image'
import header_image from '@/../public/images/main_page/header_image.jpg'

export  function Build_future() {
  return (
    <div className='relative'>
      <figure className="relative ">
      <Image className='w-screen' 
          src={header_image}
          alt="header_image" 
    />

  <figcaption className='absolute text-[24px] whitespace-normal text-white top-20 left-16 font-medium leading-10 max-w-lg
   xl:text-[32px] xl:max-2xl'> 
      <p>Batumi Investment is one of the largest developers
         in Georgia. More than 10 years in the real estate
          market.</p>
  </figcaption>
</figure>
    </div>
  )
}
