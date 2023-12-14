'use client'
import Image from 'next/image'
import construction_plan from '@/../public/images/projects/lemon_gardens/construction_plan.svg'
import interactive_img from '@/../public/images/projects/batumi_garden_inn/interactive.jpg'

import plan1 from '@/../public/images/projects/batumi_garden_inn/plan1.jpg'
import plan2 from '@/../public/images/projects/batumi_garden_inn/plan2.jpg'
import plan3 from '@/../public/images/projects/batumi_garden_inn/plan3.jpg'
import terrace from '@/../public/images/projects/batumi_garden_inn/plan4.jpg'
import { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useEffect, useRef, useState } from 'react';
export default function Select_your_dream_house() {

  // const [planCounter, setPlanCounter] = useState(1);
  // const [planImg, setPlanImg] = useState(null);

  // useEffect(() => {
  //     import(`@/../public/images/projects/batumi_garden_inn/plan${planCounter}.jpg`)
  //         .then(pdfModule => setPlanImg(pdfModule.default));
  // }, [planCounter]);

  const imgArr =
  [
    {id:1,href:plan1},
    {id:2,href:plan2},
    {id:3,href:plan3},
    {id:4,href:terrace}
  ]

  const [currentPage,setCurrentPage] = useState(1)
  const imgPerPage = 1
  const lastIndex = currentPage * imgPerPage
  const firstIndex = lastIndex - imgPerPage  
  const images = imgArr.slice(firstIndex,lastIndex)
  const npage = Math.ceil(imgArr.length/ imgPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1) 

  function prevPage()
  {
    if(currentPage !== 1)
    setCurrentPage(currentPage - 1)
  }
  
  function nextPage()
  {
    if(currentPage !== npage)
    setCurrentPage(currentPage + 1)
  }
  function changeCPage(id:number)
  {
    setCurrentPage(id)
  }
  



  return (
    <div className="text-center mt-10 w-[80%] m-auto relative flex flex-col">
      <h1 className="text-[48px] font-semibold">Select your dream house</h1>
      <div className='flex flex-row items-center mt-5'>
        <div className='flex flex-row gap-5'>
          {
            numbers.map((n,i) =>(
          <button onClick={()=> changeCPage(n)} key={i} className='bg-[#144e5e] px-[40px] py-[20px] rounded-md font-medium text-[18px] text-white hover:shadow-2xl hover:shadow-black duration-300 ease-out'>{n === 4 ? 'terrace' : `floor ${n}`}</button>
            
            ))
          }
        </div>
        <div className='flex flex-row items-center absolute right-0'>
        <p className="text-[#144e5e] text-[22px] font-medium mr-3 ">Download</p>
        <button className=' bg-[#f2c231] rounded-md px-[40px] py-[20px] text-[18px]  font-semibold hover:shadow-2xl duration-200 ease-out flex flex-row items-center justify-center ' ><Image src={construction_plan} alt='construction plan' className='mr-5'/>constuction-plan.pdf</button>
        </div>
      </div>
      <Image 
      src={interactive_img}
      alt='interactive img'
      width={640}
      height={416}
      className='mt-10 self-center'
      />
      <div className=''>
      {images.map((item,i)=>  
        { 
          return(
            <div key={i} className='flex flex-row items-center justify-center'>
            <button><IoIosArrowBack onClick={prevPage} /></button>
            <Image
            src={item.href}
            alt='image'
            className='w-[300px] h-auto'
            />
            <button><IoIosArrowForward onClick={nextPage}/></button>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
