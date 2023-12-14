import Are_u_ready from '@/components/about_us/are_u_ready'
import Awards from '@/components/about_us/awards'
import Key_people from '@/components/about_us/key_people'
import Our_team from '@/components/about_us/our_team'
import Header from '@/components/header'

export default function page() {
  return (
    <div>
      <Header/>
      <Our_team/>
      <Key_people/>
      <Awards/>
      <Are_u_ready/>
    </div>
  )
}
