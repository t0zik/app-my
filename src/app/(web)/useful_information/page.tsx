import Header from "@/components/header";
import Title from "@/components/title";
import Articles from "@/components/usfull_info/articles";
import Faq from "@/components/usfull_info/faq";
import Video_links from "@/components/usfull_info/video_links";

export default function page() {
  const title = 'Useful information'
  return (
    <div>
      <Header/>
      <Title title={title}/>
        <Articles/>
        <Faq/>
        <Video_links/>
    </div>
  )
}
