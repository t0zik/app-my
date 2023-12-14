import Image from 'next/image'
import header_img from '@/../public/images/projects/header_img.svg'
export default function Header() {
  return (
    <header>
            <Image className=" w-full" 
            src={header_img}
            alt="header image" 
            />
    </header>
  )
}
