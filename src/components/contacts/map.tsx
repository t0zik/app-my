'use client'
import React , {useEffect} from 'react'
import {Loader} from '@googlemaps/js-api-loader'

import Image from 'next/image'

import point_img from '@/../public/images/contacts/point.svg'
import phone_img from '@/../public/images/contacts/phone.svg'
import mail_img from '@/../public/images/contacts/mail.svg'

import whats_up from '@/../public/images/contacts/whats_up.svg'
import instagram from '@/../public/images/contacts/instagram.svg'
import telegram from '@/../public/images/contacts/telegram.svg'
import facebook from '@/../public/images/contacts/facebook.svg'
import utube from '@/../public/images/contacts/utube.svg'

export default function Map() {
    const mapRef = React.useRef<HTMLDivElement>(null)

    useEffect(() =>{
        const initMap = async () => {
            const loader  = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string ,
                version:'weekly'
            })   
            const { Map } = await loader.importLibrary('maps')
            const { Marker } = await loader.importLibrary('marker') 
            const position = {
                lat: 41.639460642141984,
                lng: 41.61721239248418
            }
            const mapOptions: google.maps.MapOptions = {
                center:position,
                zoom:15,
                // mapId:'MY_NEXTJS_MAPID'
            }
            const map = new Map(mapRef.current as HTMLDivElement,mapOptions)

            const marker = new Marker({
                map:map,
                position:position
            })
        }
        initMap()
    },[])


  return (
    <div className='flex items-center gap-10 w-[80%] mx-auto'>
    <div className='h-[400px] w-[800px]' ref={mapRef}></div>
    <div>
        <div>
            <ul>
                <li className='flex items-center text-[18px] mb-2'><Image src={point_img} alt='point image' className='mr-2' />Batumi, Zhiyuli Shartava, 10</li>
                <li className='flex items-center text-[18px] mb-2'><Image src={phone_img} alt='phone image' className='mr-2' />+995 557 221 188</li>
                <li className='flex items-center text-[18px] mb-2'><Image src={phone_img} alt='phone image' className='mr-2'/>+995 555 22 11 88</li>
                <li className='flex items-center text-[18px] mb-2'><Image src={mail_img} alt='mail image' className='mr-2' />Ltd.batumiinvestment@gmail.com</li>
            </ul>
        </div>
        <div className='flex gap-5'>
            <Image src={whats_up} alt='' className='hover:scale-150 duration-300 ease-out hover:ease-in '/>
            <Image src={instagram} alt='' className='hover:scale-150 duration-300 ease-out hover:ease-in'/>
            <Image src={utube} alt='' className='hover:scale-150 duration-300 ease-out hover:ease-in'/>
            <Image src={facebook} alt='' className='hover:scale-150 duration-300 ease-out hover:ease-in'/>
            <Image src={telegram} alt='' className='hover:scale-150 duration-300 ease-out hover:ease-in'/>
        </div>
    </div>
    </div>
  )
}
