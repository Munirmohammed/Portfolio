'use client'

import { motion } from 'framer-motion'
import { Code, Database, Brain, Zap } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "5+ Years Experience",
      description: "Crafting robust Python solutions"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Specialist",
      description: "Machine learning & predictive analytics"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "ERP Systems",
      description: "Enterprise resource planning expert"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Healthcare Tech",
      description: "Biomedical AI platform development"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Backend Engineer with 5+ years of experience crafting robust solutions and specializing in Artificial Intelligence functionalities. Successfully implemented AI-driven predictive stock analysis in a comprehensive ERP system, optimizing inventory management. Contributed to a biomedical AI platform, demonstrating versatility across healthcare and enterprise domains.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary-500 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "8+", label: "Projects Completed" },
            { number: "4", label: "Companies Worked" },
            { number: "10+", label: "Technologies Mastered" }
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}