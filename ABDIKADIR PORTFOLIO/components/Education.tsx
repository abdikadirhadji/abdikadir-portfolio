'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Software Engineering with Honours',
      institution: 'Kuala Lumpur University of Science and Technology (KLUST)',
      period: '2022-2025',
      location: 'Kuala Lumpur, Malaysia',
    },
  ]

  return (
    <section id="education" className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-4 rounded-full">
                  <GraduationCap className="text-primary-600" size={48} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                <Award className="mr-2 text-primary-600" size={24} />
                {edu.degree}
              </h3>
              <p className="text-xl text-primary-600 font-semibold mb-4">{edu.institution}</p>
              <div className="flex items-center justify-center text-gray-600">
                <Calendar className="mr-2" size={18} />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

