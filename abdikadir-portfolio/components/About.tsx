'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Shield, Rocket } from 'lucide-react'

export default function About() {
  const interests = [
    { icon: Code, text: 'Coding and exploring new technologies' },
    { icon: Brain, text: 'Reading about innovation and tech trends' },
    { icon: Shield, text: 'Exploring cybersecurity' },
    { icon: Rocket, text: 'Building innovative solutions' },
  ]

  return (
    <section id="about" className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Picture for About Section */}
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-xl">
                  <div className="w-full h-full rounded-2xl bg-white p-1">
                    <img
                      src="/profile.jpg"
                      alt="Abdikadir"
                      className="w-full h-full rounded-2xl object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-full rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-5xl font-bold">
                            AK
                          </div>
                        `
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am a Software Engineering graduate with experience in{' '}
                <span className="font-semibold text-primary-600">Full-Stack Development</span> and a 
                keen interest in <span className="font-semibold text-primary-600">Blockchain</span> and{' '}
                <span className="font-semibold text-primary-600">Machine Learning</span>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Passionate about building innovative solutions and exploring cybersecurity, I aim to 
                contribute to impactful projects and grow as a developer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializing in <span className="font-semibold text-primary-600">TypeScript, React, Next.js, PostgreSQL</span> for web development 
                and <span className="font-semibold text-primary-600">React Native, Firebase</span> for mobile applications. 
                I build modern, scalable applications with a focus on performance and user experience.
              </p>
            </div>
            <div className="space-y-4">
              {interests.map((interest, index) => {
                const Icon = interest.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg"
                  >
                    <Icon className="text-primary-600" size={24} />
                    <span className="text-gray-700">{interest.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

