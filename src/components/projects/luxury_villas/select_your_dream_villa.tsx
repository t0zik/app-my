'use client'
import Image from 'next/image'
import Link from 'next/link'
import construction_plan from '@/../public/images/projects/lemon_gardens/construction_plan.svg'
import interactive_img from '@/../public/images/projects/luxury_villas/interactive_img.jpg'

import plan1 from '@/../public/images/projects/luxury_villas/plan1.jpg'
import plan2 from '@/../public/images/projects/luxury_villas/plan2.jpg'
import plan3 from '@/../public/images/projects/luxury_villas/plan3.jpg'
import { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Select_your_dream_villa(this: any) {

  const imgArr =
  [
    {id:1,href:plan1},
    {id:2,href:plan2},
    {id:3,href:plan3},
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
    else
    setCurrentPage(npage)
  }
  
  function nextPage()
  {
    if(currentPage !== npage)
    setCurrentPage(currentPage + 1)
    else
    setCurrentPage(1)
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
        <button className=' bg-[#f2c231] rounded-md px-[40px] py-[20px] text-[18px]  font-semibold hover:shadow-2xl duration-200 ease-out flex flex-row items-center justify-center ' ><Image src={construction_plan} alt='construction plan' className='mr-5'/>constuction-plan{currentPage}.pdf</button>
        </div>
      </div>
      <div className='flex flex-row items-center mt-5'>



<Image src={interactive_img} alt='interactive img' useMap="#image-map" className='text-blue-700'/>

<map name="image-map" className='z-2'>
  <area className=''   target="" id='area1'  alt="" title="1"  coords="144,114,142,127,144,139,140,169,170,249,263,234,240,97,182,93,179,108" shape="poly"/>
    <area className='bg-red-700 z-2'  target="" alt="" title="2"  coords="310,215,290,87,324,84,325,71,374,71,384,92,390,126,392,203" shape="poly"/>
    <area target="" alt="" title="3"  coords="464,123,457,165,450,229,473,233,500,241,524,243,541,131,532,128,518,117,502,129" shape="poly"/>
    <area target="" alt="" title="4"  coords="443,425,448,367,460,300,480,303,482,292,513,296,529,295,543,304,553,304,550,337,540,355,542,415,531,445" shape="poly"/>
    <area target="" alt="" title="5"  coords="280,271,283,331,296,403,393,391,390,343,381,300,374,266,313,259" shape="poly"/>
    <area target="" alt="" data-mapster-key='6' title="6"  coords="120,279,111,320,116,346,132,413,237,401,229,332,220,276,156,268" shape="poly"/>
</map>
      <div className=''>
      {images.map((item,i)=>  
        { 
          return(
            <div key={i}  className='flex flex-row items-center justify-center'>
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
    </div>
  )
}