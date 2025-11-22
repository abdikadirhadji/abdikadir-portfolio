'use client'

import { motion } from 'framer-motion'
import { BookOpen, TrendingUp, Target } from 'lucide-react'

export default function CurrentlyLearning() {
  const learning = [
    {
      icon: BookOpen,
      title: 'Blockchain Development',
      description: 'Exploring smart contracts and decentralized applications',
      status: 'In Progress',
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning',
      description: 'Deepening knowledge in AI/ML algorithms and frameworks',
      status: 'Learning',
    },
    {
      icon: Target,
      title: 'System Architecture',
      description: 'Designing scalable and distributed systems',
      status: 'Exploring',
    },
  ]

  return (
    <section className="section-container bg-gradient-to-br from-primary-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Currently Learning
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Continuously expanding my skillset and exploring new technologies to stay at the forefront of software development.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {learning.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center border-2 border-primary-100 hover:border-primary-300 transition-colors"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Icon className="text-primary-600" size={32} />
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold mb-3">
                    {item.status}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

