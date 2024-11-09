import { TabsList, TabsTrigger, Tabs , TabsContent } from "app/components/atoms/Tabs"
import Link from "next/link"

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
                    "Worked with Next.js, FastAPI, Django, TypeScript, Node.js, React, and WebSockets",
                    "Built responsive, user-friendly interfaces in collaboration with UI/UX designers",
                    "Fixed issues in the legacy codebase"
                ]
            }
        ]
    },
    {
        company: "Freelance",
        position: "Web Developer",
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

interface ExperienceCardProps extends IExperience{}

export function ExperienceCard({company , position , period , description , childExperiences , companyUrl}: ExperienceCardProps) {
    return (
        <div className="flex flex-col space-y-8">
            <div className="flex flex-col items-start justify-center">
                <h2 className="text-lg font-medium">
                    {position}
                    {
                        company &&
                        <Link href={companyUrl || "/"} target="_blank">
                            <span className="text-brand-yellow-primary"> @ {company}</span>
                        </Link>
                    }
                </h2>
                <span className="text-sm tracking-wider text-neutral-400">{period}</span>
                <div className="mt-4">      
                 {
                    description?.map((item , index) => 
                        <BulletPoint key={`${item}-${index}`} className="mb-2">
                            <span className="text-gray-200">{item}</span>
                        </BulletPoint>
                    )
                }
                </div>
            </div>
            {
                childExperiences?.map((item , index) => 
                <ExperienceCard key={`${item.company}`} company="" position={item.position} period={item.period} description={item.description} childExperiences={item.childExperiences}/>
                )
            }
        </div>
    )
}

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import cn from "app/lib/utils"

export const BulletPoint = ({children , className} : {children : React.ReactNode , className? : string}) => {
    return (
        <li className={cn("flex gap-2" , className)}>
            <ArrowRightIcon fontSize="small"/>
            {children}
        </li>
    )
}
