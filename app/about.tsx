'use client'
import Image from "next/image";

export default function About(){
    return (
        <article className="flex flex-col gap-4">
  <h1 className="custom-subheading">About Me</h1>
  <p className="mb-4">
    I began coding in high school, creating small apps in my spare time. I did not think of it anything much back then and took it as a hobby.
     After highschool, I got into web development and have been building web apps ever since.
  </p>
  <p className="mb-4">
    Outside of work, I’m focused on personal projects and exploring my interests in blockchain and microservices. 
    When I'm not in front of a screen, you can usually find me on the basketball court or hiking in the nearby mountains.
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

const technolgies = ["Python","Javascript","Typescript","React","Nextjs","Nodejs","Docker","Fastapi","Django" , "Github Actions"]

const TechnologiesList = () => {
    return (
        <ul className="grid grid-cols-2 gap-2 ml-4">
            {technolgies.map((item) => <li key={item}>{item}</li>)}
        </ul>
    )
    
}
