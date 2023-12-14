import Our_projects from '@/components/main_page/Our_projects'
import Advantages from '@/components/main_page/advantages'
import { Build_future } from '@/components/main_page/biuld_future'
import Have_question from '@/components/main_page/have_question'
import Main_form from '@/components/main_page/main_form'
import Slider from '@/components/main_page/slider'
import Useful_info from '@/components/main_page/useful_info'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
            <Build_future/>
            <Our_projects/>
            <Advantages/>
            <Slider/>
            <Have_question/>
            <Useful_info/>
            <Main_form/>
      <Link href={'https://api.whatsapp.com/send/?phone=995555221188&text&type=phone_number&app_absent=0'} className='fixed bottom-10 left-10'></Link>

    </main>
  )
}
