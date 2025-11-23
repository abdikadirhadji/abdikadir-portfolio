import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: 'Abdikadir - Software Engineer | Full-Stack Developer | Portfolio',
  description: 'Software Engineering graduate specializing in Full-Stack Development with Next.js, React, TypeScript, and PostgreSQL. Building production-grade applications with modern technologies. Available for opportunities.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'Next.js', 'React', 'TypeScript', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Abdikadir' }],
  openGraph: {
    title: 'Abdikadir - Software Engineer | Full-Stack Developer',
    description: 'Software Engineering graduate specializing in Full-Stack Development, Blockchain, and Machine Learning.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdikadir - Software Engineer | Full-Stack Developer',
    description: 'Software Engineering graduate specializing in Full-Stack Development.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} ${inter.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

