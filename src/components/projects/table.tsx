import table1 from '@/../public/images/projects/lemon_gardens/table_img1.svg'
import table2 from '@/../public/images/projects/lemon_gardens/table_img2.svg'
import table3 from '@/../public/images/projects/lemon_gardens/table_img3.svg'
import table4 from '@/../public/images/projects/lemon_gardens/table_img4.svg'
import table5 from '@/../public/images/projects/lemon_gardens/table_img5.svg'
import Image from 'next/image'
export default function Table() {
  return (
    <div className="w-[80%] m-auto mt-10">
        <div className="flex flex-row gap-16 text-center" >
            <div className="flex flex-col gap-10 ">
                <div className="font-semibold text-[28px]">Built-in infrastructure</div>
                <div className="relative w-[350px] h-[150px] shadow-[0_5px_15px_3px_rgba(0,0,0,.25)]  flex flex-row justify-center items-center  px-4 gap-4"><Image src={table1} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>SPA center, swimming pool, sauna</div></div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center px-4 gap-4"><Image src={table2} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>Gym</div></div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center  px-4 gap-4"><Image src={table3} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>Underground and surface parking</div></div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center  px-4 gap-4"><Image src={table4} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>Eucalyptus grove</div></div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center  px-4 gap-4"><Image src={table5} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>Playground</div></div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="font-semibold text-[28px]">Services</div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center  px-4 gap-4"><Image src={table5} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>24-hour apartment service</div></div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center  px-4 gap-4"><Image src={table5} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>Living all year long without additional agreements</div></div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center  px-4 gap-4"><Image src={table5} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>Closed guarded area, video surveillance</div></div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="font-semibold text-[28px]">Characteristics</div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center  px-4 gap-4"><Image src={table5} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>The house is fully gasified</div></div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center  px-4 gap-4"><Image src={table5} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>Rehau 70 shop windows</div></div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center  px-4 gap-4"><Image src={table5} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-48 text-[20px]'>Ventilated foundation, moisture-resistant and fire-resistant facade</div></div>
                <div className="relative w-[350px] h-[150px]  shadow-[0_5px_15px_3px_rgba(0,0,0,.25)] flex flex-row justify-center items-center  px-4 gap-4"><Image src={table5} width={90} alt='table image 1' className='absolute left-8'/><div className='absolute right-6 w-40 text-[20px]'>High seismic resistance</div></div>
            </div>
        </div>
    </div>
  )
}
