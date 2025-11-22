'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-container bg-gradient-to-br from-primary-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <p className="text-lg text-gray-700 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="mailto:abdikadermd143@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-lg hover:shadow-xl"
                >
                  <Mail className="mr-2" size={20} />
                  Email Me
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/abdikadir-mohd-tahir-abdirahman-31138424b"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/abdikadirhadji"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-lg hover:shadow-xl"
                >
                  <Github className="mr-2" size={20} />
                  GitHub
                </motion.a>
              </div>
              <div className="flex items-center justify-center text-gray-600">
                <MapPin className="mr-2" size={20} />
                <span>Mogadishu, Somalia</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

