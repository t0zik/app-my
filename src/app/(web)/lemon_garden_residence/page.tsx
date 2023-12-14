import Header from "@/components/header";
import Choose_your_aparatment from "@/components/projects/lemon_garden_residence/choose_your_aparatment";
import Descrition from "@/components/projects/lemon_garden_residence/descrition";
import Project_details from "@/components/projects/lemon_garden_residence/project_details";
import Slider from "@/components/projects/lemon_garden_residence/slider";
import Table from "@/components/projects/lemon_garden_residence/table";
import Utube from "@/components/projects/lemon_garden_residence/utube";
import Lets_build from "@/components/projects/lets_build";

export default function lemon_garden_residence() {
  return (
    <div className="">
        <Header/>
        <Descrition/>
        <Project_details/>
        <Slider/>
        <Table/>
        <Choose_your_aparatment/>
        <Utube/>
        <Lets_build/>
    </div>
  )
}
