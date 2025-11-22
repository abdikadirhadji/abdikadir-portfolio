'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Leadership from '@/components/Leadership'
import CurrentlyLearning from '@/components/CurrentlyLearning'
import Certifications from '@/components/Certifications'
import Blog from '@/components/Blog'
import CTASection from '@/components/CTASection'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Leadership />
      <Certifications />
      <CurrentlyLearning />
      <Blog />
      <CTASection />
      <Contact />
    </div>
  )
}

