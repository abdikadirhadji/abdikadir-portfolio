'use client'

import { useRef } from 'react'
import { Download, Code, Server, Database, Smartphone, Wrench, Mail, MapPin, Linkedin, Github, User, Target, Briefcase, GraduationCap, Users, Heart, UserCheck } from 'lucide-react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function ResumeDownload() {
  const resumeRef = useRef<HTMLDivElement>(null)

  const downloadPDF = async () => {
    if (!resumeRef.current) return

    try {
      // Show loading state
      const button = document.querySelector('[data-download-btn]') as HTMLElement
      if (button) {
        button.textContent = 'Generating PDF...'
        button.style.pointerEvents = 'none'
      }

      // Create canvas from the resume element
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: resumeRef.current.scrollWidth,
        height: resumeRef.current.scrollHeight,
      })

      // Calculate PDF dimensions (A4 size)
      const imgWidth = 210 // A4 width in mm
      const pageHeight = 297 // A4 height in mm
      const pageWidth = 210 // A4 width in mm
      
      // Calculate the aspect ratio
      const aspectRatio = canvas.width / canvas.height
      const pdfAspectRatio = pageWidth / pageHeight
      
      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      let finalWidth = pageWidth
      let finalHeight = pageHeight
      let xOffset = 0
      let yOffset = 0
      
      // Scale to fit within A4 page
      if (aspectRatio > pdfAspectRatio) {
        // Image is wider - fit to width
        finalHeight = pageWidth / aspectRatio
        yOffset = (pageHeight - finalHeight) / 2
      } else {
        // Image is taller - fit to height
        finalWidth = pageHeight * aspectRatio
        xOffset = (pageWidth - finalWidth) / 2
      }
      
      // Ensure it fits on one page
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', xOffset, yOffset, finalWidth, finalHeight)

      // Save PDF
      pdf.save('Abdikadir_Mohamed_Tahir_Resume.pdf')

      // Reset button
      if (button) {
        button.textContent = 'Download Resume'
        button.style.pointerEvents = 'auto'
      }
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    }
  }

  // Skills data with proficiency levels and icons
  const skills = [
    { category: 'Frontend Development', level: 90, skills: 'React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS', icon: Code },
    { category: 'Backend Development', level: 85, skills: 'Node.js, Express.js, RESTful APIs, API Integration', icon: Server },
    { category: 'Database & Storage', level: 80, skills: 'PostgreSQL, MySQL, Database Design, SQL, Data Modeling', icon: Database },
    { category: 'Mobile Development', level: 75, skills: 'React Native, Mobile App Development, Cross-platform', icon: Smartphone },
    { category: 'Tools & Technologies', level: 85, skills: 'Git & GitHub, Version Control, UI/UX Design, Agile', icon: Wrench },
  ]

  const languages = [
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Arabic', proficiency: 'Fluent' },
    { name: 'Somali', proficiency: 'Fluent' },
    { name: 'Malay', proficiency: 'Intermediate' },
  ]

  return (
    <div className="w-full">
      {/* Download Button */}
      <div className="flex justify-center mb-8">
        <button
          data-download-btn
          onClick={downloadPDF}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
        >
          <Download size={22} />
          Download Resume
        </button>
      </div>

      {/* Resume Content - Two Column Layout */}
      <div 
        ref={resumeRef} 
        className="bg-white max-w-5xl mx-auto shadow-2xl"
        style={{ 
          fontFamily: 'var(--font-inter), Inter, "Segoe UI", Roboto, Arial, sans-serif',
          display: 'flex',
          width: '210mm',
          minHeight: '297mm',
          maxHeight: '297mm',
          overflow: 'hidden'
        }}
      >
        {/* LEFT SIDEBAR - Soft Teal/Blue Background */}
        <div 
          className="w-2/5 text-slate-800 p-6 border-r-2 border-slate-300 relative"
          style={{ 
            minHeight: '297mm', 
            maxHeight: '297mm',
            background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)',
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.12) 0%, transparent 50%)'
          }}
        >
          {/* Profile Picture */}
          <div className="flex justify-center mb-3">
            <div className="w-28 h-28 rounded-full border-3 border-white shadow-xl overflow-hidden bg-white ring-2 ring-cyan-200">
              <img
                src="/profile.jpg"
                alt="Abdikadir Mohamed Tahir"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center text-slate-700 text-3xl font-bold">
                        AMT
                      </div>
                    `
                  }
                }}
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center mb-3 pb-3 border-b-2 border-slate-300">
            <h1 className="text-lg font-bold mb-1 leading-tight text-slate-900" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', letterSpacing: '0.5px' }}>
              ABDIKADIR<br />MOHAMED TAHIR
            </h1>
            <p className="text-slate-600 text-xs font-medium">Software Engineer | Full-Stack Developer</p>
          </div>

          {/* Contact Information */}
          <div className="mb-3 space-y-1.5 text-sm">
            <h3 className="text-sm font-bold mb-2 uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-2 text-slate-800">
              <Mail size={14} className="text-slate-700" />
              Contact
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Mail size={14} className="text-slate-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 text-xs mb-0.5">Email</p>
                  <p className="text-slate-800 text-xs break-words">abdikadermd143@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-slate-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 text-xs mb-0.5">Location</p>
                  <p className="text-slate-800 text-xs">Mogadishu, Somalia</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Linkedin size={14} className="text-slate-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 text-xs mb-0.5">LinkedIn</p>
                  <p className="text-slate-800 text-xs break-words">linkedin.com/in/abdikadir-mohd-tahir-abdirahman-31138424b</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Github size={14} className="text-slate-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 text-xs mb-0.5">GitHub</p>
                  <p className="text-slate-800 text-xs break-words">github.com/abdikadirhadji</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills with Progress Bars */}
          <div className="mb-3">
            <h3 className="text-sm font-bold mb-2 uppercase tracking-wider border-b border-slate-300 pb-1 text-slate-800">Technical Skills</h3>
            <div className="space-y-2.5">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div key={index} className="mb-2">
                    <div className="flex items-center gap-1.5 mb-1">
                      <IconComponent size={12} className="text-slate-700 flex-shrink-0" />
                      <span className="text-slate-800 text-xs font-semibold">{skill.category}</span>
                    </div>
                    <div className="w-full bg-slate-300 rounded-full h-1.5 shadow-inner relative overflow-hidden">
                      <div 
                        className="h-1.5 rounded-full transition-all relative"
                        style={{ 
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, rgb(71, 85, 105) 0%, rgb(51, 65, 85) 100%)',
                          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                        }}
                      ></div>
                    </div>
                    <p className="text-slate-600 text-xs mt-1 ml-4 leading-tight">{skill.skills}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-2">
            <h3 className="text-sm font-bold mb-1.5 uppercase tracking-wider border-b border-slate-300 pb-1 text-slate-800">Languages</h3>
            <div className="space-y-1">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-800 text-xs font-semibold">{lang.name}</span>
                    <span className="text-slate-600 text-xs font-medium">{lang.proficiency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT MAIN CONTENT - White Background */}
        <div className="w-3/5 p-5 text-slate-800 bg-white" style={{ fontFamily: 'var(--font-inter), Inter, "Segoe UI", sans-serif' }}>
          {/* Profile Section */}
          <div className="mb-2.5">
            <h2 className="text-base font-bold text-slate-800 mb-1 pb-1 border-b-2 border-slate-200 uppercase tracking-wider flex items-center gap-2">
              <User size={16} className="text-slate-600" />
              Profile
            </h2>
            <p className="text-slate-700 text-xs leading-tight text-justify">
              Passionate Software Engineering graduate with expertise in Full-Stack Development, specializing in modern web technologies. 
              Proven track record of delivering production-ready applications with emphasis on clean code, optimal performance, and exceptional user experiences. 
              Strong collaborator with a growth mindset, continuously exploring emerging technologies including Blockchain and Machine Learning.
            </p>
          </div>

          {/* Career Objective */}
          <div className="mb-2.5">
            <h2 className="text-base font-bold text-slate-800 mb-1 pb-1 border-b-2 border-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Target size={16} className="text-slate-600" />
              Career Objective
            </h2>
            <p className="text-slate-700 text-xs leading-tight text-justify">
              To leverage technical expertise in software development, contribute to impactful projects, and collaborate with talented teams 
              to deliver exceptional software products using cutting-edge technologies.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-2.5">
            <h2 className="text-base font-bold text-slate-800 mb-1 pb-1 border-b-2 border-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Briefcase size={16} className="text-slate-600" />
              Professional Experience
            </h2>
            <div className="mb-1.5">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">Web & Mobile Applications Developer</h3>
                  <p className="text-xs text-slate-600 font-semibold">City Art IT Solutions</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-600 text-xs font-medium">Jan 2025 – Present</p>
                  <p className="text-xs text-slate-500">Kuala Lumpur, Malaysia</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-700 text-xs space-y-0.5 ml-2 leading-tight">
                <li>Designed and developed responsive web and mobile applications using modern frameworks</li>
                <li>Collaborated with cross-functional teams to implement efficient software solutions</li>
                <li>Integrated APIs, databases, and user interfaces for optimal performance</li>
                <li>Improved app performance through debugging and optimization</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-2.5">
            <h2 className="text-base font-bold text-slate-800 mb-1 pb-1 border-b-2 border-slate-200 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap size={16} className="text-slate-600" />
              Education
            </h2>
            
            <div className="mb-1.5">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">Bachelor of Software Engineering with Honours</h3>
                  <p className="text-xs text-slate-600 font-semibold">Kuala Lumpur University of Science and Technology (KLUST)</p>
                  <p className="text-slate-600 text-xs">Faculty of Engineering, Science and Technology</p>
                </div>
                <p className="text-slate-600 text-xs font-medium">June 2022 – June 2025</p>
              </div>
              <p className="text-slate-700 text-xs">Kuala Lumpur, Malaysia</p>
            </div>

            <div className="mb-1.5">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">High School Diploma</h3>
                  <p className="text-xs text-slate-600 font-semibold">Community School Jigjiga</p>
                </div>
                <p className="text-slate-600 text-xs font-medium">2019 – 2021</p>
              </div>
              <p className="text-slate-700 text-xs">Qoordhere 17, Ethiopia</p>
            </div>
          </div>

          {/* Leadership & Activities */}
          <div className="mb-2.5">
            <h2 className="text-base font-bold text-slate-800 mb-1 pb-1 border-b-2 border-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Users size={16} className="text-slate-600" />
              Leadership & Activities
            </h2>
            <div className="space-y-1">
              <div>
                <h3 className="text-xs font-bold text-slate-900 tracking-tight">Treasurer</h3>
                <p className="text-slate-600 font-semibold text-xs">KLUST Somalian Society</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 tracking-tight">Vice President</h3>
                <p className="text-slate-600 font-semibold text-xs">KLUST Cyber Club</p>
              </div>
            </div>
          </div>

          {/* Interests & Hobbies */}
          <div className="mb-2.5">
            <h2 className="text-base font-bold text-slate-800 mb-1 pb-1 border-b-2 border-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Heart size={16} className="text-slate-600" />
              Interests & Hobbies
            </h2>
            <ul className="list-disc list-inside text-slate-700 text-xs space-y-0.5 leading-tight">
              <li>Coding and exploring new technologies</li>
              <li>Watching documentaries</li>
              <li>Reading about innovation and tech trends</li>
              <li>Playing football</li>
              <li>Traveling and learning about new cultures</li>
            </ul>
          </div>

          {/* References */}
          <div className="mb-0">
            <h2 className="text-base font-bold text-slate-800 mb-1 pb-1 border-b-2 border-slate-200 uppercase tracking-wider flex items-center gap-2">
              <UserCheck size={16} className="text-slate-600" />
              References
            </h2>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div>
                <p className="font-bold text-slate-900 text-xs tracking-tight">Ts. Hasnani Hassan</p>
                <p className="text-slate-700 text-xs">Senior Lecturer, KLUST</p>
                <p className="text-slate-600 text-xs">hasnani@klust.edu.my</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xs tracking-tight">Ts. Dr. Abudhahir Buhari</p>
                <p className="text-slate-700 text-xs">HOPP MIT, KLUST</p>
                <p className="text-slate-600 text-xs">abudhahir@klust.edu.my</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
