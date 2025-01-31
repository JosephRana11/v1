import { TabsList, TabsTrigger, Tabs , TabsContent } from "app/components/atoms/Tabs"
import { ExperienceCard } from "app/components/oraganisms/cards/ExperienceCard"
import { IExperience , experiences } from "app/constants"




export default function Experience() {

    return (
        <>
         <h1 className="custom-subheading mb-6">Experience</h1> 
         <Tabs className="flex gap-x-8 300" defaultValue={experiences[0].company}>
            <TabsList className="flex flex-col gap-y-4 ">
                {experiences.map((item , index) =>
                <TabsTrigger key={`${item.company}-${index}`} value={item.company}>{item.company}</TabsTrigger>)}
            </TabsList>
            {experiences.map((item , index) =>
            <TabsContent key={`${item.company}-${index}`} value={item.company} className="min-h-[400px]">
                <ExperienceCard company={item.company} position={item.position} period={item.period} description={item.description} childExperiences={item.childExperiences} companyUrl={item.companyUrl}/>
            </TabsContent>)}
         </Tabs>
        </>
    )
}


