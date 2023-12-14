import Image from 'next/image'

import arrow from '@/../public/images/main_page/arrow.svg'  
import img from '@/../public/images/about_us/are_u_ready.png'
export default function Are_u_ready() {
  return (
    <div className='text-center mb-20 mt-20 '>
        <h1 className='text-center text-[60px] font-medium'>ARE YOU READY?</h1>
        <div className="relative flex justify-center">
            <Image src={img} alt='are u ready img' className='w-[100%]'/>
            <p className='absolute text-white top-[20%] text-[44px] font-semibold w-[400px]'>LET’S BUILD YOUR PERFECT PLACE</p>
            <button className=' bg-[#f2c231] rounded-md w-80 h-14  absolute bottom-[20%] font-semibold hover:shadow-2xl hover:shadow-black duration-200 ease-out  flex flex-row items-center justify-center gap-2' >Contact us<Image src={arrow} alt='arrow' width={30} height={15}/> </button>

        </div>
    </div>
  )
}


//bg-[url('../../../public/images/about_us/are_u_ready.png')] bg-no-repeat