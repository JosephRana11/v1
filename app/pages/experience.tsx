import { TabsList, TabsTrigger, Tabs , TabsContent } from "app/components/atoms/Tabs"
import { ExperienceCard } from "app/components/oraganisms/cards/ExperienceCard"

export interface IExperience{
    company : string
    position : string
    period : string
    description : string[]
    companyUrl? : string
    childExperiences? : IExperience[]
}

const experiences: IExperience[] = [
    {
        company: "Sireto Technology",
        position: "Developer",
        period: "June 2024 - Present",
        companyUrl: "https://sireto.io",
        description: [
            "Collaborate on frontend and backend development",
            "Set up and maintain CI/CD pipelines with GitHub Actions and Docker",
            "Implement authentication, manage cookies, and integrate Cardano wallets",
            "Write and maintain unit and integration tests"
        ],
        childExperiences: [
            {
                company: "Sireto Technology",
                position: "Full Stack Intern",
                period: "March - May 2024",
                description: [
                    "Worked with Next.js, FastAPI, TypeScript, Node.js, React, WebSockets and OAuth",
                    "Built responsive, user-friendly interfaces in collaboration with UI/UX designers",
                    "Fixed issues in the legacy codebase relating to user Authentication and signup"
                ]
            }
        ]
    },
    {
        company: "Freelance",
        position: "Developer",
        companyUrl: "/",
        period: "2022 - Present",
        description: [
            "Developed web solutions tailored to client needs",
            "Created custom frontend components",
            "Built and secured REST APIs with Django and JWT"
        ]
    }
];



export default function Experience() {

    return (
        <>
         <h1 className="custom-subheading mb-6">Experience</h1> 
         <Tabs className="flex gap-x-8 300" defaultValue={experiences[0].company}>
            <TabsList className="flex flex-col gap-y-4 ">
                {experiences.map((item , index) =>
                <TabsTrigger key={`${item.company}`} value={item.company}>{item.company}</TabsTrigger>)}
            </TabsList>
            {experiences.map((item , index) =>
            <TabsContent key={`${item.company}`} value={item.company} className="min-h-[400px]">
                <ExperienceCard company={item.company} position={item.position} period={item.period} description={item.description} childExperiences={item.childExperiences} companyUrl={item.companyUrl}/>
            </TabsContent>)}
         </Tabs>
        </>
    )
}


