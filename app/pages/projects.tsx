import FrameStack from "app/components/molecules/FrameStack";

export interface IProject {
    title: string;
    description: string;
    src: string;
    link: string;
    color: string;
    stack?: string[];
}

const projects : IProject[] = [
    {
      title: 'Autonomous Agent Testing',
      description:
        'A platform for automated testing of Governance Actions and Transactions in the Cardano Blockchain.',
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
    {
      title: 'DrepID',
      description:
        'A webapp for easy minting , sharing and delegation of DrepID. ',
      src: 'https://sanchonet.drep.id/',
      link: '/assets/images/projects/DrepId.png',
      color: '#13006c',
      stack : ["NextJS","FastAPI","KuberClient","TailwindCSS","Github Actions"]
    },
  ];


export default function Projects(){
    return (
        <>
        <FrameStack projects={projects}/>
        </>
    )
}