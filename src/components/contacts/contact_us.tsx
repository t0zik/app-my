'use client'
import { useState } from 'react';

import Image from 'next/image'
import img from '@/../public/images/main_page/solid_slider_image1.jpg'
import img2 from '@/../public/images/contacts/img.jpg'

export default function Contact_us() {


  const [name, setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      name: String(e.target.name.value), 
      phone: String(e.target.phone.value),
      email: String(e.target.email.value),
      message: String(e.target.message.value)
    };
    console.log(data);
  };

  return (
    <div className='w-[80%] mx-auto mt-10'>
        <div className='flex gap-40 items-center '>
        <form onSubmit={handleSubmit} className='mt-10 flex flex-col '  >
            <p className='text-[18px]'>Are you ready?</p>
            <h2 className='text-[44px] font-semibold '>Let's build <br /> your perfect place</h2>
          <input
            id="name"
            type="text"
            min={3}
            max={20}
            placeholder='First name'
            onChange={e => setName(e.target.value)}
            className='w-[400px] h-[50px] border border-b-[#144e5e] border-x-transparent border-t-transparent mb-5 rounded-sm text-white pl-2
            focus:bg-[#144e5e] focus:placeholder:text-white focus:ring-transparent focus:outline-none'
          />
          <input
            id="phone"
            type="text"
            min={9}
            placeholder='Phone'
            onChange={e => setPhone(e.target.value)}
            className='w-[400px] h-[50px] border border-b-[#144e5e] border-x-transparent border-t-transparent mb-5 rounded-sm text-white pl-2
            focus:bg-[#144e5e] focus:placeholder:text-white focus:ring-transparent focus:outline-none'
          />
          <input
            id="email"
            type="email"
            min={3}
            max={40}
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
            className='w-[400px] h-[50px] border border-b-[#144e5e] border-x-transparent border-t-transparent mb-5 rounded-sm text-white pl-2
            focus:bg-[#144e5e] focus:placeholder:text-white focus:ring-transparent focus:outline-none'
          />
          <input
            id="message"
            type='text'
            min={10}
            max={150}
            placeholder='Message'
            onChange={e => setMessage(e.target.value)}
            className='w-[400px] h-[50px] border border-b-[#144e5e] border-x-transparent border-t-transparent mb-5 rounded-sm text-white pl-2
             focus:bg-[#144e5e] focus:placeholder:text-white focus:ring-transparent focus:outline-none '
          />
          <button type="submit" className='w-[400px] h-[50px] bg-[#f2c231] mb-10  font-medium text-[18px] rounded-sm'>Contact us</button>
        </form>
        <Image src={img2} alt='' className='w-[550px] h-[500px]'/>
        </div>
    </div>
  )
}
