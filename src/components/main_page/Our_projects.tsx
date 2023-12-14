"use client"
import Image from 'next/image'

import project1 from '@/../public/images/main_page/our_projects/project1.jpg'
import project2 from '@/../public/images/main_page/our_projects/project2.jpg'
import project3 from '@/../public/images/main_page/our_projects/project3.jpg'
import project4 from '@/../public/images/main_page/our_projects/project4.jpg'

export default function Our_projects() {
  return (
      <div className='mt-20'>
        {/* <div className='h-[700px] mt-10 flex flex-col'>
          <div className=' p-40 self-end text-center'>
            <h2 className='text-[40px] font-semibold text-[#0C323D] '>Botanical Garden Resort</h2>
            <p>Townhouses and apartment complex</p>
          </div>
          <div className=' relative h-[300px]  bg-[#1c323c]'>
          <Image src={project1} alt=''  className='  absolute bottom-0 left-[10 %] w-[540px]'/>
          <div>
            <p className='text-[25px] text-white'>Learn more detailed information about the project and choose the best option for you.</p>
            <button>Read more</button>
          </div>
          </div>
        </div> */}
        <div className='h-[700px]  bg-gradient-to-b from-[#fff] from-[50%] to-[50%] to-[#1c323c] flex  flex-row mb-40 '>
          <Image src={project1} alt='project image' className='justify-bottom mx-[10%]'/>
          <div>
            <div className=' p-[15%] text-center'>
            <h2 className='text-[40px] font-semibold text-[#0C323D] '>Botanical Garden Resort</h2>
            <p>Townhouses and apartment complex</p>
            </div>
              <div className='p-[15%] text-center  '>
            <p className='text-[25px] text-white mb-10'>Learn more detailed information about the project and choose the best option for you.</p>
            <button className='w-72 h-14 rounded-md bg-[#f2c231] font-semibold hover:shadow-2xl duration-200 ease-out'>Read more</button>
            </div>
          </div>
        </div>



        <div className='h-[700px]  bg-gradient-to-b from-[#fff] from-[50%] to-[50%] to-[#1c323c] flex flex-row-reverse mb-40 '>
          <Image src={project2} alt='project image' className='justify-bottom mx-[10%] '/>
          <div>
            <div className=' p-[15%] text-center'>
            <h2 className='text-[40px] font-semibold text-[#0C323D] '>Botanical Garden Resort</h2>
            <p>Townhouses and apartment complex</p>
            </div>
              <div className='p-[15%] text-center  '>
            <p className='text-[25px] text-white mb-10'>Learn more detailed information about the project and choose the best option for you.</p>
            <button className='w-72 h-14 rounded-md bg-[#f2c231] font-semibold hover:shadow-2xl duration-200 ease-out'>Read more</button>
            </div>
          </div>
        </div>

        <div className='h-[700px]  bg-gradient-to-b from-[#fff] from-[50%] to-[50%] to-[#1c323c] flex  flex-row mb-40 '>
          <Image src={project3} alt='project image' className='justify-bottom mx-[10%]'/>
          <div>
            <div className=' p-[15%] text-center'>
            <h2 className='text-[40px] font-semibold text-[#0C323D] '>Botanical Garden Resort</h2>
            <p>Townhouses and apartment complex</p>
            </div>
              <div className='p-[15%] text-center  '>
            <p className='text-[25px] text-white mb-10'>Learn more detailed information about the project and choose the best option for you.</p>
            <button className='w-72 h-14 rounded-md bg-[#f2c231] font-semibold hover:shadow-2xl duration-200 ease-out'>Read more</button>
            </div>
          </div>
        </div>

        <div className='h-[700px]  bg-gradient-to-b from-[#fff] from-[50%] to-[50%] to-[#1c323c] flex flex-row-reverse mb-40 '>
          <Image src={project4} alt='project image' className='justify-bottom mx-[10%]'/>
          <div>
            <div className=' p-[15%] text-center'>
            <h2 className='text-[40px] font-semibold text-[#0C323D] '>Botanical Garden Resort</h2>
            <p>Townhouses and apartment complex</p>
            </div>
              <div className='p-[15%] text-center  '>
            <p className='text-[25px] text-white mb-10'>Learn more detailed information about the project and choose the best option for you.</p>
            <button className='w-72 h-14 rounded-md bg-[#f2c231] font-semibold hover:shadow-2xl duration-200 ease-out'>Read more</button>
            </div>
          </div>
        </div>
        {/* background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 51%, rgba(233,252,240,1) 51%); */}
        {/* <div>
          <Image src={project1} alt=''/>
          <div></div>
        </div>
        <div>
          <Image src={project1} alt=''/>
          <div></div>
        </div>
        <div>
          <Image src={project1} alt=''/>
          <div></div>
        </div> */}
      </div>
  )
}
