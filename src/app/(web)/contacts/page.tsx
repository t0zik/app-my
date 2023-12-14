import Contact_us from '@/components/contacts/contact_us'
import Map from '@/components/contacts/map'
import Description from '@/components/description'
import Header from '@/components/header'
import Title from '@/components/title'

export default function page() {
  const title = 'Contacts'
  return (
    <div>
        <Header/>
        <Title title={title} className='text-[44px]' />
        <p className='text-center mb-10 text-[22px]'>We are ready to help you with all your questions.</p>
        <Map/>
        <Contact_us/>
    </div>
  )
}
