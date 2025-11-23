'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Globe, Database, Building2, Shield, Lock, ChevronLeft, ChevronRight, Mail } from 'lucide-react'

// Helper function to generate image paths dynamically based on pattern
// Smarter: tries one extension per number first, then others if needed
function generateImagePaths(baseName: string, count: number, extensions: string[] = ['jpg', 'png', 'jpeg']): string[] {
  const paths: string[] = []
  for (let i = 1; i <= count; i++) {
    // Try extensions in order - only add first extension per number to avoid duplicates
    // If that doesn't exist, browser will handle it via onError
    paths.push(`/projects/${baseName}-${i}.${extensions[0]}`)
    // Also try other extensions for the same number (in case user mixes extensions)
    for (let j = 1; j < extensions.length; j++) {
      paths.push(`/projects/${baseName}-${i}.${extensions[j]}`)
    }
  }
  return paths
}

// Project Card Component with Carousel
function ProjectCard({ project, index }: { project: any; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<string[]>([])
  const [validImages, setValidImages] = useState<string[]>([])
  
  // Use manual images array (most reliable)
  useEffect(() => {
    if (project.images) {
      // Manual array provided - use as is
      const filtered = project.images.filter((img: string) => img && img.trim() !== '')
      setLoadedImages(filtered)
    } else if (project.image) {
      // Single image
      setLoadedImages([project.image])
    } else {
      setLoadedImages([])
    }
  }, [project.images, project.image])
  
  // For manual array, images are already validated - use them directly
  const images = loadedImages
              const Icon = project.icon
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
      {/* Project Header with Screenshot Carousel or Icon */}
      <div className="h-80 md:h-96 bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden border-b border-gray-200">
        {images.length > 0 ? (
          <>
            <div className="relative w-full h-full">
              {images.map((img: string, imgIndex: number) => (
                <img
                  key={`${project.title}-img-${imgIndex}`}
                  src={img}
                  alt={`${project.title} - Screenshot ${imgIndex + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                    imgIndex === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  onError={(e) => {
                    // Hide broken images
                    e.currentTarget.style.display = 'none'
                  }}
                  loading="lazy"
                />
              ))}
              {/* Light background for better image visibility */}
              <div className="absolute inset-0 bg-white" />
              <div className="absolute inset-0 bg-gray-50/50 group-hover:bg-gray-50/70 transition-colors" />
              
              {/* Carousel Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white p-2 rounded-full transition-all z-20 shadow-lg backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white p-2 rounded-full transition-all z-20 shadow-lg backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-gray-900/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {images.map((_: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? 'bg-white w-6 shadow-sm'
                            : 'bg-white/60 w-1.5 hover:bg-white/80'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Image Counter */}
                  <div className="absolute top-2 left-2 bg-gray-900/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium shadow-lg">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="text-white/90" size={80} />
                        </div>
                      </>
                    )}
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end z-10">
                    {project.featured && (
            <div className="bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Featured
                      </div>
                    )}
          {project.confidential && (
            <div className="bg-amber-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <Lock size={12} />
              Confidential
            </div>
          )}
          {project.academic && (
            <div className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              Academic Project
            </div>
          )}
        </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Quantifiable Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="mb-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg border border-primary-200">
                        <h4 className="text-xs font-semibold text-primary-700 mb-3 uppercase tracking-wide">Key Metrics</h4>
                        <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric: any, idx: number) => (
                            <div key={idx} className="text-center">
                              <div className="text-lg font-bold text-primary-600">{metric.value}</div>
                              <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Impact Description */}
                    {project.impact && (
                      <div className="mb-4 p-3 bg-primary-50 border-l-4 border-primary-600 rounded-r-lg">
                        <p className="text-sm text-primary-800 font-semibold">
                          💡 Impact: {project.impact}
                        </p>
                      </div>
                    )}

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
            {project.features.map((feature: string, idx: number) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
          {project.confidential ? (
            // For confidential projects, show "Contact for Demo" instead of GitHub link
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium group/link flex-1 justify-center"
            >
              <Mail size={18} />
              <span>Contact for Demo</span>
            </a>
          ) : (
            // For public projects, show GitHub link
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium group/link flex-1 justify-center"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                        <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
          )}
          {!project.confidential && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        <Globe size={18} />
                        <span>GitHub</span>
                      </a>
          )}
                    </div>
                  </div>
                </motion.div>
              )
}

export default function Projects() {
  const projects = [
    {
      title: 'Multi-Property Management System',
      description: 'A comprehensive property management system built with Next.js 15, TypeScript, Prisma, and PostgreSQL. Provides complete property management functionality including tenant management, payment processing, maintenance tracking, and financial reporting.',
      impact: 'Production-ready system with multi-tenant architecture supporting multiple property owners with complete data isolation.',
      metrics: [
        { label: 'Properties Managed', value: '100+' },
        { label: 'Users Supported', value: '500+' },
        { label: 'Response Time', value: '<200ms' },
      ],
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'Prisma', 'PostgreSQL', 'Next-Auth', 'Tailwind CSS'],
      github: 'https://github.com/abdikadirhadji/multi-property-management-system',
      live: 'https://github.com/abdikadirhadji/multi-property-management-system',
      // Manual array - MOST RELIABLE approach
      // Just add your image paths here. Easy to update when you add more images!
      images: [
        '/projects/property-management-1.jpg',
        '/projects/property-management-2.png',
        '/projects/property-management-3.png',
        '/projects/property-management-4.png',
        '/projects/property-management-5.png',
        '/projects/property-management-6.png',
        '/projects/property-management-7.png',
        '/projects/property-management-8.png',
        '/projects/property-management-9.png',
        '/projects/property-management-10.png',
        '/projects/property-management-11.png',
        '/projects/property-management-12.png',
      ],
      icon: Building2,
      featured: true,
      confidential: true, // Mark as confidential - will hide GitHub link
      features: [
        'Multi-tenant Architecture',
        'Role-based Access Control',
        'Payment Processing',
        'Financial Reporting',
        'Maintenance Tracking'
      ],
    },
    {
      title: 'SARMS - Somaliland Automated Registration Management System',
      description: 'A comprehensive web-based work permit management system for Somaliland Immigration and Border Control. Streamlines the complete lifecycle of work permit applications, from submission through approval, payment processing, and digital ID card generation.',
      impact: 'Government-level system handling critical immigration processes with role-based workflows and secure document management.',
      metrics: [
        { label: 'Applications Processed', value: '1000+' },
        { label: 'User Roles', value: '4' },
        { label: 'Processing Time', value: '50% Faster' },
      ],
      tech: ['React 18', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Puppeteer', 'Tailwind CSS'],
      github: 'https://github.com/abdikadirhadji/sarms-system',
      live: 'https://github.com/abdikadirhadji/sarms-system',
      images: [
        '/projects/sarms-system-1.jpg',
        '/projects/sarms-system-2.jpg',
        '/projects/sarms-system-3.jpg',
        // Add more images here as needed:
        // '/projects/sarms-system-4.jpg',
        // '/projects/sarms-system-5.jpg',
      ], // Supports ANY number of screenshots - just add more to the array!
      icon: Database,
      featured: true,
      confidential: true, // Mark as confidential - will hide GitHub link
      features: [
        'Work Permit Management',
        'Digital ID Card Generation',
        'Payment Processing',
        'Role-based Access Control',
        'Document Management'
      ],
    },
    {
      title: 'Blockchain-Based Smart Contract Tender Bidding System',
      description: 'A blockchain-based tender management system developed as a final year project to improve transparency, efficiency, and accountability in procurement processes. Built with Solidity smart contracts, React.js, and MySQL, addressing corruption and inefficiency in traditional procurement systems.',
      impact: 'Research prototype demonstrating how blockchain technology can eliminate up to 60% of unmonitored tenders and increase transparency in government procurement processes.',
      metrics: [
        { label: 'Tender Types', value: 'RFP & RFQ' },
        { label: 'User Roles', value: '4' },
        { label: 'Transparency', value: '100%' },
      ],
      tech: ['Solidity', 'React.js', 'Node.js', 'MySQL', 'Web3.js', 'Truffle', 'Ganache', 'MetaMask'],
      github: 'https://github.com/abdikadirhadji/blockchain-tender-system',
      live: 'https://github.com/abdikadirhadji/blockchain-tender-system',
      images: [
        '/projects/blockchain-tender-1.png',
        '/projects/blockchain-tender-2.png',
        '/projects/blockchain-tender-3.png',
        '/projects/blockchain-tender-4.png',
        '/projects/blockchain-tender-5.png',
        '/projects/blockchain-tender-6.png',
        '/projects/blockchain-tender-7.png',
        '/projects/blockchain-tender-8.png',
        '/projects/blockchain-tender-9.png',
        '/projects/blockchain-tender-10.png',
      ],
      icon: Shield,
      featured: true,
      academic: true, // Mark as academic project
      features: [
        'Smart Contract-based Tender Creation',
        'Immutable Bid Submission',
        'Automated Bid Evaluation',
        'Transparent Contract Awarding',
        'Multi-role Dashboard (Admin, Bidder, Evaluator, Procurement Officer)',
        'Blockchain Transparency & Security'
      ],
    },
  ]

  return (
    <section id="projects" className="section-container bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Production-grade full-stack applications and academic projects showcasing expertise in modern web development, 
          blockchain technology, database management, and system architecture. Some projects are marked as confidential 
          due to client privacy requirements.
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/abdikadirhadji"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <Github size={24} />
              <span>View More on GitHub</span>
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
