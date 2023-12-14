import Lets_build from "@/components/projects/lets_build";
import Project_details from "@/components/projects/luxury_villas/project_details";
import Select_your_dream_villa from "@/components/projects/luxury_villas/select_your_dream_villa";
import Sliders from "@/components/projects/luxury_villas/sliders";
import Table from "@/components/projects/luxury_villas/table";
import Utube from "@/components/projects/luxury_villas/utube";

export default function page() {
  return (
    <div>
        <h1 className="font-medium text-center text-[44px]">Luxury Villas</h1>
        <Project_details/>
        <Sliders/>
        <Table/>
        <Select_your_dream_villa/>
        <Utube/>
        <Lets_build/>
    </div>
  )
}
