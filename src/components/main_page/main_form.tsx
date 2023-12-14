'use client'
import { useState } from 'react';
export default function Main_form() {
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
    <div className='mt-10 w-[500px] m-auto items-center text-center'>
        <p className='font-medium text-[20px] mb-4'>How can we help you?</p>
        <h1 className='font-semibold text-[50px] mb-4'>Drop us a message</h1>
        <p className='font-medium text-[20px] mb-10'>Leave us a message and we`ll contact you!</p>
        <form onSubmit={handleSubmit} className='mt-10 '  >
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
          <button type="submit" className='w-[400px] h-[50px] bg-[#144e5e] mb-10 text-white font-medium text-[18px] rounded-sm'>Contact us</button>
        </form>
    </div>
  );
}       