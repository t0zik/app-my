import React from 'react'
import Image from 'next/image'
import plan from '@/../public/images/main_page/plan.jpg'


export default function Have_question() {
  return (
    <div className='relative h-[400px] flex items-center justify-center'>
      <Image 
      src={plan}
      alt='plan img'
      className='w-full h-auto absolute z-0' 
      />
        <button className=' bg-[#f2c231] rounded-md w-80 h-14  absolute font-semibold hover:shadow-2xl duration-200 ease-out' >Have a question?</button>
    </div>
  )
}
