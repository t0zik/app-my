import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import whats_up_img from '@/../public/images/contacts/whats_up.svg'

export default function Whats_up() {
  return (
    <div>
        <Link href={'https://api.whatsapp.com/send/?phone=995555221188&text&type=phone_number&app_absent=0'}><Image src={whats_up_img} alt='what`s up image' className='w-14 fixed bottom-5 left-5'/></Link>
    </div>
  ) 
}
