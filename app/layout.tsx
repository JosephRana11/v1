import 'app/styles/global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/oraganisms/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/oraganisms/footer'
// import { baseUrl } from './sitemap'
import 'app/styles/tailwind.css'
import SocialsNav from './components/oraganisms/SocialsNav'
import { ReactLenis } from 'lenis/dist/lenis-react';

//todo configure sitemap
export const metadata: Metadata = {
  // metadataBase:  new URL('https://github.com/JosephRana11'),
  title: {
    default: 'Joseph Rana',
    template: 'Joseph Rana',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: 'https://github.com/JosephRana11',
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        // text-black bg-white dark:text-white dark:bg-black
        'dark',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-4xl mx-4 mt-8 lg:mx-auto dark">
        <Navbar />
        <ReactLenis root>
         <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <SocialsNav/>
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
       </ReactLenis>
      </body>
    </html>
  )
}
