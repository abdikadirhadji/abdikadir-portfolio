'use client'

import { motion } from 'framer-motion'
import { Users, Trophy } from 'lucide-react'

export default function Leadership() {
  const roles = [
    {
      title: 'Treasurer',
      organization: 'KLUST Somalian Society',
      icon: Users,
    },
    {
      title: 'Vice President',
      organization: 'KLUST Cyber Club',
      icon: Trophy,
    },
  ]

  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Leadership & Activities</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="card text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Icon className="text-primary-600" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-primary-600 font-semibold">{role.organization}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

