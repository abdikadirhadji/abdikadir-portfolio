'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Web & Mobile Applications Developer',
      company: 'City Art IT Solutions',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Jan 2025 – Present',
      responsibilities: [
        'Designed and developed responsive web and mobile applications using modern frameworks and technologies',
        'Collaborated with cross-functional teams to gather requirements and implement efficient software solutions',
        'Integrated APIs, databases, and user interfaces to ensure smooth functionality and performance',
        'Improved app performance and user experience through debugging and optimization',
        'Contributed to both frontend and backend development, ensuring scalability and reliability of applications',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card mb-6 border-l-4 border-primary-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                    <Briefcase className="mr-2 text-primary-600" size={24} />
                    {exp.title}
                  </h3>
                  <p className="text-xl text-primary-600 font-semibold mb-2">{exp.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="mr-1" size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="mr-1" size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((responsibility, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start text-gray-700"
                  >
                    <CheckCircle2 className="mr-2 text-primary-600 mt-1 flex-shrink-0" size={18} />
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

