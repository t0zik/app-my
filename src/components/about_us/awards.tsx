import Image from 'next/image'


import bg_img from '@/../public/images/about_us/bg2.png'
import award1 from '@/../public/images/about_us/awards1.png'
import award2 from '@/../public/images/about_us/awards2.png'

export default function Awards() {

  return (
    <div>
        <div className='flex justify-center '>
            <h2 className=' text-center font-medium text-[#0C323D] text-[40px] w-[350px] lg:text-[60px] lg:w-[470px] ml-[20%]'>OUR ACHIEVEMENTS</h2>
        </div>
        <div className='flex '>
        </div>
        <hr className=' border-[#F2C231] border-2 mb-10 '/>
        <div  className="bg-[url('../../../public/images/about_us/bg2.png')] bg-no-repeat w-full h-auto flex flex-col ">
        <div className='flex md:ml-20 flex-col   md:flex-col xl:flex-row  items-center gap-20  px-20 py-10 mb-5 self-end'>
          <p className='w-[470px] text-[25px] text-center'>Project of the Year - this award was received by the residential complex of apartments and townhouses Royal Residence Botanico at the international exhibition of foreign real estate in Baku United Property Expo.</p>
          <Image src={award1} alt='image award 1'/>
        </div>
        <div className='flex  flex-row-reverse md:flex-row-reverse  xl:flex-row items-center gap-20  px-20 py-10 self-end'>
          <p className='w-[470px] text-[22px] text-center'>The best investment project was awarded to Lemon Garden Residence & SPA, a premium-class apartment complex in Batumi.</p>
          <Image src={award2} alt='image award 2'/>
        </div>
      </div>
        <hr className=' border-[#F2C231] border-2 mt-10 '/>

    </div>
  )
}
