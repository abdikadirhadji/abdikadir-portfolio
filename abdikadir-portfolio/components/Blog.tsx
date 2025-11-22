'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar } from 'lucide-react'

export default function Blog() {
  // Add your blog posts/articles here
  const articles = [
    {
      title: 'Building Scalable Full-Stack Applications',
      description: 'A comprehensive guide to building production-ready applications with Next.js and TypeScript.',
      date: '2024',
      url: '#', // Add your blog post URL
      platform: 'Medium / Dev.to / Personal Blog',
    },
    {
      title: 'Understanding Multi-Tenant Architecture',
      description: 'Deep dive into implementing secure multi-tenant systems with data isolation.',
      date: '2024',
      url: '#',
      platform: 'Medium / Dev.to / Personal Blog',
    },
    // Add more articles as needed
  ]

  // If no articles, show a placeholder message
  if (articles.length === 0) {
    return null
  }

  return (
    <section className="section-container bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Articles & Blog Posts
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Technical articles and insights I've written to share knowledge and contribute to the developer community.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors">
                    <BookOpen className="text-primary-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={12} className="mr-1" />
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.platform}</span>
                      </div>
                      {article.url && article.url !== '#' && (
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                          Read Article
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

