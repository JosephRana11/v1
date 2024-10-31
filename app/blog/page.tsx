import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <p className='mb-4'>
        I am always working and learning new things. By writing blogs, I am better able to understand the things I am learning and also 
        share intersting ideas. 
      </p>
      <p className='mb-4'>
        Here are some of the blogs I have written . 
      </p>
      <BlogPosts />
    </section>
  )
}
