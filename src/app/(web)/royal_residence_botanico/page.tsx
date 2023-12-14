import Description from "@/components/description";
import Lets_build from "@/components/projects/lets_build";
import Choose_your_aparatment from "@/components/projects/royal_residence_botanico/choose_your_apartaments";
import Project_details from "@/components/projects/royal_residence_botanico/project_details";
import Slider from "@/components/projects/royal_residence_botanico/slider";
import Table from "@/components/projects/royal_residence_botanico/table";
import Utube from "@/components/projects/royal_residence_botanico/utube";
import Title from "@/components/title";

export default function page() {
    const title = 'Royal Residense Botanico'

    const description = 
    {text1:'Unique for Georgia, an elite residential complex 20 minutes drive from Batumi and 5 minutes from the Botanical Garden combines both premium-class apartments in a 5-storey building and townhouses with their own courtyard. All this in a closed protected area surrounded by eucalyptus groves. Real estate with guaranteed profitability.  ',
     text2:'One of the most promising areas of country life in Georgia. The proximity to the sea, the salubrious climate and the rapidly developing infrastructure of the place open up great prospects for profitability from renting an apartment or house in this complex.'}
  return (
    <div>
        <Title title={title}/>
        <Description text1={description.text1} text2={description.text2}/>
        <Project_details/>
        <Slider/>
        <Table/>
        <Choose_your_aparatment/>
        <Utube/>
        <Lets_build/>
    </div>
  )
}
