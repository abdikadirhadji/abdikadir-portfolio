'use client'

import ResumeDownload from '@/components/ResumeDownload'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <ResumeDownload />
      </div>
      <Footer />
    </div>
  )
}


