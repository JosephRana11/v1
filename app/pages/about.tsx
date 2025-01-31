'use client'

import Image from "next/image";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { about } from "app/constants";

export default function About(){
    return (
        <article className="flex flex-col gap-4">
  <h1 className="custom-subheading">About Me</h1>
  <p className="mb-4">
    {about.description1}
  </p>
  <p className="mb-4">
    {about.description2}
  </p>
  <p className="mb-4 font-semibold">
    Some of the Technologies that I work with.
  </p>
  <TechnologiesList/>
  {/* <div className="flex justify-center">
      <ProfileImage/>
  </div> */}
</article>

    )
}

const ProfileImage = () => {
    return (
        <div className="relative justify-end items-end flex">
            <Image src={"/assets/images/profile.jpg"} alt="Joseph Rana" width={300} height={300} className="grayscale aspect-square object-cover rounded-xl object-top"/>
            <Image src={"/assets/images/profile.jpg"} alt="Joseph Rana" width={300} height={300} className="absolute top-10 right-10  aspect-square object-cover rounded-xl object-top"/>
        </div>

    )
}


const TechnologiesList = () => {
    return (
        <ul className="grid grid-cols-2 gap-2 ml-4">
            {about.technologyStack.map((item , index) => 
            <span className="flex gap-2 items-center" key={`${item}-${index}`}>
                <ArrowRightIcon fontSize="medium"/>
                <li key={item}>{item}</li>
            </span>
)}
        </ul>
    )
    
}
