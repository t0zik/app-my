import Image from 'next/image'
import Link from 'next/link'

import utube_img from '@/../public/images/projects/batumi_garden_inn/utube.jpg'
import utube_img_small from '@/../public/images/projects/lemon_gardens/utube_img_small.svg'
import play from '@/../public/images/projects/lemon_gardens/play.svg'

export default function Utube() {
  return (
    <div className='relative h-[400px] flex items-center justify-center mt-10'>
    <Image 
    src={utube_img}
    alt='plan img'
    className='w-full h-auto absolute z-0 ' 
    />
    <Link href={'https://www.youtube.com/watch?v=FSVwqwOcQ0Y'} className='absolute z-2 flex flex-row self-center text-white left-[15%]'><Image src={utube_img_small} alt='utube img' className='mr-5'/>Check our projects on Youtube</Link>
    <Image
    src={play}
    alt='play img'
    className='absolute right-[25%] hover:shadow-2xl hover:shadow-black duration-200 ease-out box-border'
    />
  </div>
  )
}
