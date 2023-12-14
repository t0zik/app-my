import Image from 'next/image'

import our_team_img from '@/../public/images/about_us/our_team.png'


export default function Our_team() {
  return (
    <div className=" w-full bg-[#0C323D] px-5 py-5 lg:px-20 lg:py-10">
        <div className='flex flex-col-reverse gap-3  items-center lg:flex-row lg:gap-[10%]'>
            <div className='lg:w-[480px] text-center text-white mt-[10%]'>
                <p className='mb-5'>The Batumi Investment team are highly qualified specialists, behind whom participation in the construction of many well-known objects in Batumi, as well as private investors. All of us united into a single team more than 10 years ago to create truly unique projects that the city is proud of.</p>
                <p className='mb-5'>We don't know anyone in Batumi who would also carefully consider the infrastructure of facilities and constantly improved projects.</p>
                <p className='mb-5'>There is not a single long-term plan behind us. </p>
                <p className='mb-5'>We use European materials in construction, without increasing the cost square meter </p>
                <p>Our main priorities are the quality of work and openness to our clients.</p>
            </div>
            <div className='text-right'>
                <h2 className=' font-semibold text-white text-[30px]  md:text-[50px] '>OUR <span className='text-[#E4B932]'>TEAM</span></h2>
                <p className='text-white text-[10px] md:text-[18px]'>Committed quality management</p>
                <Image src={our_team_img} alt='our team image' className='[90%]'/>
            </div>
        </div>
    </div>
  )
}
