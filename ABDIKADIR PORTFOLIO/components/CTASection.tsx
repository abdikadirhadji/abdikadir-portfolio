'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Briefcase } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-container bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Briefcase className="mx-auto mb-4" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm actively seeking new opportunities to build innovative solutions and contribute to impactful projects. 
            Let's connect and discuss how we can collaborate!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="mailto:abdikadermd143@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl"
          >
            <Mail className="mr-2" size={22} />
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/abdikadir-mohd-tahir-abdirahman-31138424b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl"
          >
            <Linkedin className="mr-2" size={22} />
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/abdikadirhadji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl"
          >
            <Github className="mr-2" size={22} />
            View GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-primary-400/30"
        >
          <p className="text-primary-200 text-sm">
            💼 Available for full-time, part-time, and freelance opportunities
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

