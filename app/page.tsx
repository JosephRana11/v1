import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import Home from './home'

export default function Page() {
  return (
    <section className='h-[100vh] justify-center flex flex-col'>
      <Home/>
    </section>
  )
}



      // <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      //   About Me
      // </h1>
      //   <p className='mb-4'>
      //     {`I enjoy solving coding problems and learning Algorithms.`}
      //   </p>
      //   <p className='mb-4'>
      //     {`I'm passionate about the beauty of blockchain technology and its potential, as well as the fascinating intricacies of microservice architecture.`}
      //   </p>
      // <div className="my-8">
      //   <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      //     Latest Blogs
      //   </h1>
      //   <BlogPosts />
      // </div>