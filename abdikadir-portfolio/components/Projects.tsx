'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Globe, Database, Building2 } from 'lucide-react'

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
      image: '/projects/property-management.jpg', // Add your screenshot here
      icon: Building2,
      featured: true,
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
      image: '/projects/sarms-system.jpg', // Add your screenshot here
      icon: Database,
      featured: true,
      features: [
        'Work Permit Management',
        'Digital ID Card Generation',
        'Payment Processing',
        'Role-based Access Control',
        'Document Management'
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
          Production-grade full-stack applications showcasing expertise in modern web development, 
          database management, and system architecture.
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Project Header with Screenshot or Icon */}
                  <div className="h-48 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to icon if image fails to load
                            e.currentTarget.style.display = 'none'
                            const fallback = e.currentTarget.parentElement
                            if (fallback) {
                              fallback.innerHTML = `
                                <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                  <svg class="text-white/90" width="80" height="80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                  </svg>
                                </div>
                              `
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="text-white/90" size={80} />
                        </div>
                      </>
                    )}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
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
                          {project.metrics.map((metric, idx) => (
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
                        {project.features.map((feature, idx) => (
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
                        {project.tech.map((tech, techIndex) => (
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
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        <Globe size={18} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
