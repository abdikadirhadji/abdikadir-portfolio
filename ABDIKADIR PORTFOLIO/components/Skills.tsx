'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const techStacks = {
    'Frontend': [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 
      'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'
    ],
    'Backend': [
      'Node.js', 'Express.js', 'RESTful APIs', 
      'API Integration', 'Server-side Development'
    ],
    'Database': [
      'Database Design', 'SQL', 'NoSQL', 
      'Database Management', 'Data Modeling'
    ],
    'Mobile': [
      'React Native', 'Mobile App Development', 
      'Cross-platform Development'
    ],
    'Tools & Others': [
      'Git & GitHub', 'Version Control', 'UI/UX Design', 
      'Problem Solving', 'Debugging', 'Agile Methodology'
    ]
  }

  const softSkills = [
    'Team Collaboration', 'Communication', 'Project Management',
    'Critical Thinking', 'Adaptability', 'Time Management'
  ]

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Arabic', level: 'Fluent' },
    { name: 'Somali', level: 'Fluent' },
    { name: 'Malay', level: 'Intermediate' },
  ]

  return (
    <section id="skills" className="section-container bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Technical Skills & Expertise
          </span>
        </h2>
        
        <div className="max-w-7xl mx-auto">
          {/* Tech Stacks */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tech Stacks</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(techStacks).map(([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="card border-l-4 border-primary-600"
                >
                  <h4 className="text-xl font-bold text-primary-600 mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-800 rounded-lg text-sm font-semibold shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Languages</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card text-center hover:scale-105 transition-transform"
                >
                  <h4 className="text-2xl font-bold text-primary-600 mb-2">{lang.name}</h4>
                  <p className="text-gray-600 font-semibold">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
