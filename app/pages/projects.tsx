import FrameStack from "app/components/molecules/FrameStack";
import { projects } from "app/constants";


export default function Projects(){
    return (
        <>
        <FrameStack projects={projects}/>
        </>
    )
}
