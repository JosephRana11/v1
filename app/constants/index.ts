export const about = {
  title: "About Me",
  description1:
  "HI I'm Joseph, passionate about both frontend and backend domains. My coding journey began all the way from highschool when I was creating small apps here and there. Fast foward many years now , I have had the pleasure of working alongside and learning from some of the best developers.",
  description2:
  "Besides being a developer , I also enjoy travelling and reading books . When I am not in front of a screen , I am highly likely playing sports or reading some random article on hackernews. :)",
  technologyStack : ["Python","Javascript","Typescript","React","Nextjs","Nodejs","Docker","Fastapi","Django" , "Github Actions"]
};


export interface IExperience{
    company : string
    position : string
    period : string
    description : string[]
    companyUrl? : string
    childExperiences? : IExperience[]
}

export const experiences: IExperience[] = [
    {
        company: "Sireto Technology",
        position: "Developer",
        period: "June 2024 - Present",
        companyUrl: "https://sireto.io",
        description: [
            "Work on frontend and backend development of web applications",
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

export interface IProject {
    title: string;
    description: string;
    src: string;
    link: string;
    color: string;
    stack?: string[];
}

export const projects : IProject[] = [
    {
      title: 'DrepID',
      description:
        'A webapp for easy minting , sharing and delegation of DrepID. ',
      src: 'https://preview.drep.id/',
      link: '/assets/images/projects/DrepId.png',
      color: '#13006c',
      stack : ["NextJS","FastAPI","Docker","TailwindCSS","Github Actions"]
    },
    {
      title: 'Autonomous Agent Testing',
      description:
        'A platform for automated testing of Governance Actions and Transactions in the Cardano Blockchain using AI Agents.',
      src: 'https://preview.agents.cardanoapi.io/',
      link: '/assets/images/projects/AAT.png',
      color: '#5196fd',
      stack: ["NextJS","FastAPI","WebSockets","NodeJS","Docker","Postgres","Github Actions"]
    },
    {
      title: 'CardanoSignLib',
      description:
        'A python library for validating Cardano Signed data according to CIP-8 Standards. ',
      src: 'https://github.com/JosephRana11/CardanoSignLib',
      link: '/assets/images/projects/CardanoSignLib.png',
      color: '#8f89ff',
      stack: ["Python","Cardano"]
    },
  ];
