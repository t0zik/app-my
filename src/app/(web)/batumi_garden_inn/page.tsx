import Description from "@/components/description";
import Header from "@/components/header";
import Project_details from "@/components/projects/batumi_garden_inn/project_details";
import Select_your_dream_house from "@/components/projects/batumi_garden_inn/select_your_dream_house";
import Slider from "@/components/projects/batumi_garden_inn/slider";
import Table from "@/components/projects/batumi_garden_inn/table";
import Utube from "@/components/projects/batumi_garden_inn/utube";
import Lets_build from "@/components/projects/lets_build";
import Title from "@/components/title";



export default function page() {

  const description = {
     text1: "The first complex of townhouses in Batumi with a heated pool, private barbecue areas on the terraces, a sports and children's playground. The unique location of the houses is the nearest suburb of Batumi next to the clean equipped Gonio beach, green groves and orchards around.",
     text2: "  Your home in Georgia with the infrastructure of the best hotels, the luxurious nature of the Caucasus from the window and the clear sea within walking distance. Comfortable life in European style or profitable rent with the help of a management company."
}
  const title = "Batumi Garden Inn"


  return (
    <div>
      <Header/>
        {/* <Header/> */}
        <div className= " mb-5 text-lg">
        <Title title={title}/>
        <Description text1={description.text1} text2={description.text2}/>

        </div>
        {/* <Descrition/> */}
        <Project_details/>
        <Slider/>
        <Table/>
        <Select_your_dream_house/>
        <Utube/>
        <Lets_build/>
    </div>
  )
}
