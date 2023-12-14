import Image from 'next/image'

import arrow from '@/../public/images/main_page/arrow.svg'  

export default function Lets_build() {
  return (
    <div className='mt-20 ml-40 mb-20'>
        <p className='text-[18px]'>Are u ready?</p>
        <h2 className='text-[44px] font-medium mb-10'>Let’s build <br/>
        your perfect place</h2>

        <button className=' bg-[#f2c231] rounded-md w-80 h-14   font-semibold hover:shadow-2xl hover:shadow-black duration-500 ease-out  flex flex-row items-center justify-center gap-2' >Contact us<Image src={arrow} alt='arrow' width={30} height={15}/> </button>

    </div>
  )
}
