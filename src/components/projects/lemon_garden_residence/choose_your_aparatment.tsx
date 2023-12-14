import construction_plan from '@/../public/images/projects/lemon_gardens/construction_plan.svg'
import Image from 'next/image'
export default function Choose_your_aparatment() {
  return (
    <div className="text-center mt-10">
        <h1 className="text-[48px] font-semibold">Choose your dream apartment</h1>
        <p className="text-[#144e5e] text-[22px] font-medium mb-3">Download</p>
        <button className=' bg-[#f2c231] rounded-md px-[40px] py-[20px] text-[18px]  font-semibold hover:shadow-2xl duration-200 ease-out flex flex-row items-center justify-center m-auto' ><Image src={construction_plan} alt='construction plan' className='mr-5'/>constuction-plan.pdf</button>
    </div>
  )
}
