import Image from 'next/image'


import boss1 from '@/../public/images/about_us/boss1.png'
import boss2 from '@/../public/images/about_us/boss2.png'
import sales_manager1 from '@/../public/images/about_us/sales_manager1.png'
import sales_manager2 from '@/../public/images/about_us/sales_manager2.png'
import sales_manager3 from '@/../public/images/about_us/sales_manager3.png'
import vahtank from '@/../public/images/about_us/vahtank.png'

export default function Key_people() {
  return (
    <div className='mb-40' >
                <div className='bg-[#AFBFC0] text-center py-2 my-10'>
            <h2 className='text-[50px] font-medium text-[#0C323D]'>KEY PEOPLE</h2>
            <p className='text-[#1D1D1D] text-[18px]'>Our strong team full of courage and power</p>
        </div>
        <div className='w-[90%] mx-auto'>   
        <div className="sm:px-[10%]">
            <div className='flex flex-col lg:flex-row lg:gap-40 mb-10'>
                <div className='mx-auto text-center'>
                    <Image src={boss1} alt='' />
                    <h4 className='text[#1D1D1D] text-[20px] font-semibold mt-2'>Jano Bochorishvili</h4>
                    <p className='text-[#B1B1B1] text-[18px] font-semibold mb-10'>CEO and Founder</p>
                    {/* <button className='border-[#B1B1B1] border-2 px-7 py-1 rounded-xl mb-10 lg:mb-0'>Read More</button> */}
                </div>
                <div className='mx-auto text-center'>
                    <Image src={boss2} alt='' />
                    <h4 className='text[#1D1D1D] text-[20px] font-semibold mt-2'>Edvard Khimshiashvili</h4>
                    <p className='text-[#B1B1B1] text-[18px] font-semibold mb-10'>Founder</p>
                    {/* <button className='border-[#B1B1B1] border-2 px-7 py-1 rounded-xl'>Read More</button> */}
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center gap-16 '>
                <div className='flex gap-16'>
                <div >
                    <Image src={sales_manager1} alt=''/>
                    <h4 className='text[#1D1D1D] text-[20px] font-semibold mt-2'>Shorena Kontselidze</h4>
                    <p>Sales manager</p>
                </div>
                <div>
                        <Image src={vahtank} alt=''/>
                        <h4 className='text[#1D1D1D] text-[20px] font-semibold mt-2'>Vakhtang Kakaladze</h4>
                        <p>Sales manager</p>
                    </div>
                    </div>
                    <div className='flex gap-16 '>
                    <div>
                    
                    <Image src={sales_manager2} alt=''/>
                    <h4 className='text[#1D1D1D] text-[20px] font-semibold mt-2'>Nik Kakabadze</h4>
                    <p>Slaes manager</p>
                </div>
                    <div>
                        <Image src={sales_manager3} alt=''/>
                        <h4 className='text[#1D1D1D] text-[20px] font-semibold mt-2'>Maria Gabelia</h4>
                        <p>Smm manager</p>
                    </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
  )
}
