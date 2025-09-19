'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise and problem-solving approach
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Computer Science
                    </h3>
                    <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
                      Addis Ababa University
                    </h4>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>June 2019 - August 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Addis Ababa, Ethiopia</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary-500" />
                      Key Areas of Study
                    </h5>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Software Engineering & Development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Data Structures & Algorithms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Database Management Systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Machine Learning & AI</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Academic Achievements
                    </h5>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Strong foundation in computer science principles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Practical experience in software development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Research in AI and machine learning applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Collaborative project development experience</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    My computer science education at Addis Ababa University provided me with a solid theoretical foundation 
                    and practical skills that I've successfully applied in building innovative software solutions. The program 
                    emphasized both technical excellence and problem-solving methodologies that continue to guide my 
                    professional development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Continuous Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI & Machine Learning",
                  description: "Advanced courses in TensorFlow, PyTorch, and deep learning architectures"
                },
                {
                  title: "Cloud Technologies",
                  description: "Google Cloud Platform, Docker containerization, and microservices"
                },
                {
                  title: "Modern Frameworks",
                  description: "React, Node.js, FastAPI, and full-stack development practices"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-md"
                >
                  <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}