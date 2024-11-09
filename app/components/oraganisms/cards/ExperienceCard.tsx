import { IExperience } from "app/pages/experience"
import Link from "next/link"
import { BulletPoint } from "app/components/atoms/BulletPoint"

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