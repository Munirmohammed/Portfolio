'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Back-End Engineer',
      company: 'Playstream Interactive',
      period: 'Oct 2024 - Present',
      location: 'Remote',
      achievement: 'Currently developing scalable backend solutions for interactive gaming platforms',
      current: true
    },
    {
      title: 'Back-End Engineer',
      company: 'Stone Age Technologies',
      period: 'February 2023 - Oct 2024',
      duration: '1 yr 8 mos',
      location: 'Remote',
      achievement: 'Built comprehensive fintech platform Remytel with microservices architecture, enabling global airtime top-ups across 200+ countries'
    },
    {
      title: 'Software Developer',
      company: 'Omic',
      period: 'October 2022 - June 2023',
      duration: '8 mos',
      location: 'Remote',
      achievement: 'Developed cutting-edge biomedical AI platform for disease reverse engineering using Python, FastAPI, and machine learning algorithms'
    },
    {
      title: 'Software Engineer',
      company: 'RDX Delta',
      period: 'June 2020 - May 2023',
      duration: '2 yrs 11 mos',
      location: 'Remote',
      achievement: 'Created multiple full-stack applications including HobbyzHub AI platform and J Search ERP system with advanced inventory management'
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey building innovative solutions across fintech, healthcare, and enterprise domains
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-dark-900 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pr-0'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                      {exp.company}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        {exp.duration && (
                          <span className="text-gray-500">({exp.duration})</span>
                        )}
                      </div>
                      <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.achievement}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "4+", label: "Years Experience" },
            { number: "4", label: "Companies" },
            { number: "8+", label: "Major Projects" },
            { number: "100%", label: "Remote Work" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white dark:bg-dark-900 rounded-xl shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}