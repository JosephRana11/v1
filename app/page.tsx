'use client'

import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import Home from './home'
import About from './about'

export default function Page() {
  return (
    <>
    <section className='h-[100vh] justify-center flex flex-col'>
      <Home/>
    </section>
    <section>
      <About/>
    </section>
    </>
  )
}