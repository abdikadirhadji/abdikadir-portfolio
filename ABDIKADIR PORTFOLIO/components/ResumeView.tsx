'use client'

import { Download, Mail, MapPin } from 'lucide-react'
import { useRef } from 'react'

export default function ResumeView() {
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return

    try {
      const html2canvas = (await import('html2canvas')).default
      const jsPDF = (await import('jspdf')).default

      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
      })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF.jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('Abdikadir_Resume.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try printing the page instead (Ctrl+P).')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Download Button */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            <Download size={20} />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Resume Content */}
        <div ref={resumeRef} className="bg-white p-8 shadow-2xl">
          {/* Header */}
          <div className="border-b-2 border-primary-600 pb-4 mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Abdikadir</h1>
            <p className="text-xl text-primary-600 font-semibold mb-3">
              Software Engineer | Full-Stack Developer
            </p>
            <div className="flex flex-wrap gap-4 text-gray-700">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>abdikadermd143@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Mogadishu, Somalia</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Software Engineering graduate with experience in Full-Stack Development and a keen 
              interest in Blockchain and Machine Learning. Passionate about building innovative 
              solutions and exploring cybersecurity, I aim to contribute to impactful projects and 
              grow as a developer.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              Experience
            </h2>
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Web & Mobile Applications Developer</h3>
                  <p className="text-lg text-primary-600 font-semibold">City Art IT Solutions</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Jan 2025 – Present</p>
                  <p className="text-gray-600 text-sm">Kuala Lumpur, Malaysia</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Designed and developed responsive web and mobile applications using modern frameworks and technologies</li>
                <li>Collaborated with cross-functional teams to gather requirements and implement efficient software solutions</li>
                <li>Integrated APIs, databases, and user interfaces to ensure smooth functionality and performance</li>
                <li>Improved app performance and user experience through debugging and optimization</li>
                <li>Contributed to both frontend and backend development, ensuring scalability and reliability of applications</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              Education
            </h2>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Bachelor of Software Engineering with Honours</h3>
              <p className="text-lg text-primary-600 font-semibold">
                Kuala Lumpur University of Science and Technology (KLUST)
              </p>
              <p className="text-gray-600">2022-2025</p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <div>• Web and Mobile Application Development</div>
              <div>• Frontend & Backend Development</div>
              <div>• Database Design and Management</div>
              <div>• API Integration</div>
              <div>• UI/UX Design Principles</div>
              <div>• Problem Solving & Debugging</div>
              <div>• Project Collaboration & Teamwork</div>
              <div>• Version Control (Git & GitHub)</div>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              Languages
            </h2>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <div>English (Fluent)</div>
              <div>Arabic (Fluent)</div>
              <div>Somali (Fluent)</div>
              <div>Malay (Intermediate)</div>
            </div>
          </section>

          {/* Leadership */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              Leadership & Activities
            </h2>
            <div className="text-gray-700 space-y-1">
              <div>• Vice President, KLUST Somalian Society</div>
              <div>• Treasurer, KLUST Cyber Club</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

