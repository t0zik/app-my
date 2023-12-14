import Description from "@/components/description"
import Project_details from "@/components/projects/grand_botanico_residence/project_details"
import Sliders from "@/components/projects/grand_botanico_residence/sliders"
import Table from "@/components/projects/grand_botanico_residence/table"
import Utube from "@/components/projects/grand_botanico_residence/utube"
import Choose_your_aparatment from "@/components/projects/lemon_garden_residence/choose_your_aparatment"
import Lets_build from "@/components/projects/lets_build"
import Title from "@/components/title"

export default function page() {
    const title = 'Grand Botanico Residence'
    const description = {
        text1:'Premium class residential complex in one of the most promising suburban recreation areas on the Black Sea coast. Apartments in a 6-storey building from 35 sq.m., two and three-storey townhouses, a huge green area, a swimming pool, a sauna, a playground, underground parking - an infrastructure that creates the comfort of city life in an ecologically clean suburb of Batumi.  ',
        text2:' Real estate that will grow many times in a few years and will always be in demand when renting. An excellent opportunity for a successful investment with a guaranteed return from the developer.'
    }

  return (
    <div>
        <Title title={title}/>
        <Description text1={description.text1} text2={description.text2}/>
        <Project_details/>
        <Sliders/>
        <Table/>
        <Choose_your_aparatment/>
        <Utube/>
        <Lets_build/>
    </div>
  )
}
