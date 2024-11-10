"use client";

import { BlogPosts } from "app/components/oraganisms/posts";
import Link from "next/link";
import Home from "./pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export default function Page() {
  return (
    <>
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <section className="h-[100vh] justify-center flex flex-col" id="home">
        <Home />
      </section>
      <section className="mb-52" id="about">
        <About />
      </section>
      <section className="mb-52" id="experience">
        <Experience/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="blog">
        {/* <BlogPosts /> */}
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </>
  );
}
