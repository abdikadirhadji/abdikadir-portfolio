'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar } from 'lucide-react'

export default function Certifications() {
  // Add your certifications here
  const certifications = [
    {
      name: 'Full-Stack Web Development',
      issuer: 'Coursera / Udemy / FreeCodeCamp',
      date: '2024',
      credential: 'Certificate ID: XXXXX',
      url: '#', // Add certificate URL if available
    },
    {
      name: 'React & Next.js Mastery',
      issuer: 'Online Platform',
      date: '2024',
      credential: 'Certificate ID: XXXXX',
      url: '#',
    },
    // Add more certifications as needed
  ]

  // If no certifications, show a placeholder message
  if (certifications.length === 0) {
    return null
  }

  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Certifications & Credentials
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Professional certifications and credentials that validate my expertise and commitment to continuous learning.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card border-l-4 border-primary-600 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Award className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                      <p className="text-primary-600 font-semibold text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.url && cert.url !== '#' && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View Certificate
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-gray-500">{cert.credential}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

