"use client";

import { BlogPosts } from "app/components/oraganisms/posts";
import Link from "next/link";
import Home from "./pages/home";
import About from "./pages/about";

export default function Page() {
  return (
    <>
      <section className="h-[100vh] justify-center flex flex-col">
        <Home />
      </section>
      <section>
        <About />
      </section>
    </>
  );
}
