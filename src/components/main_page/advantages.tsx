import React from 'react'
import Image from 'next/image'
import advantages_img from '@/../public/images/main_page/1.png'
import main_img from '@/../public/images/main_page/main_img.jpg'
const advantages = [
  {
    number: '01',
    text: 'From townhouses to premium apartments'
  },
  {
    number: '02',
    text: 'The best locations in Batumi and the suburbs'
  },
  {
    number: '03',
    text: 'Ecological districts and European construction quality'
  }
]

export default function Advantages() {
  return (
    <div className=''>
      <div className=''>
        <div className='text-center'>
        <p className='text-lg'>Advanteges</p>
        <h1 className='text-5xl'>With our knowledge we guarantee success</h1>
        </div>
        <div className="flex flex-col items-center  m-auto  my-10 gap-y-10 lg:flex-col lg:w-[400px] xl:flex-row xl:w-[1200px] ">
        {advantages.map((item) => (
          <div key={1} className='flex items-center '>
            <Image
            src={advantages_img}
            alt = 'advatages image'
            width={150}
            height={150}
            className='mr-10'
            />
            <p className='text-[22px] w-52 '>{item.text}</p>
            <h1 className='absolute mr-1 text-8xl ml-14 text-[#144e5e] text-[96px] font-bold'>{item.number}</h1>

          </div>
          ))}
           </div>
      </div>
      <Image
          src={main_img}
          alt='main image'
          className='h-auto w-full'
          />
    </div>
  )
}
