'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('')

  const skills = [
    { name: 'Python', years: 4, category: 'Backend', projects: 6 },
    { name: 'JavaScript', years: 3, category: 'Frontend', projects: 5 },
    { name: 'Node.js', years: 3, category: 'Backend', projects: 4 },
    { name: 'React', years: 3, category: 'Frontend', projects: 4 },
    { name: 'Django', years: 2, category: 'Backend', projects: 3 },
    { name: 'Flask', years: 2, category: 'Backend', projects: 3 },
    { name: 'TensorFlow', years: 2, category: 'AI/ML', projects: 3 },
    { name: 'Machine Learning', years: 2, category: 'AI/ML', projects: 4 },
    { name: 'Neo4j', years: 2, category: 'Database', projects: 2 },
    { name: 'Docker', years: 2, category: 'DevOps', projects: 4 },
    { name: 'Google Cloud Platform', years: 2, category: 'Cloud', projects: 3 },
    { name: 'Vue.js', years: 2, category: 'Frontend', projects: 2 },
    { name: 'Firebase', years: 2, category: 'Cloud', projects: 3 },
    { name: 'FastAPI', years: 2, category: 'Backend', projects: 3 },
    { name: 'PyTorch', years: 1, category: 'AI/ML', projects: 2 },
    { name: 'Microservices', years: 4, category: 'Architecture', projects: 5 },
    { name: 'Material UI', years: 3, category: 'Frontend', projects: 3 },
    { name: 'Software Development', years: 5, category: 'General', projects: 8 },
    { name: 'Artificial Intelligence', years: 1, category: 'AI/ML', projects: 2 },
    { name: 'Graph databases', years: 2, category: 'Database', projects: 2 },
    { name: 'Data Visualization', years: 3, category: 'Analytics', projects: 3 },
    { name: 'Forecasting', years: 3, category: 'Analytics', projects: 2 },
    { name: 'Cypher', years: 2, category: 'Database', projects: 2 },
    { name: 'Problem Solving', years: 5, category: 'Soft Skills', projects: 8 },
    { name: 'Communication', years: 5, category: 'Soft Skills', projects: 8 }
  ]

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))]

  const filteredSkills = filter === '' || filter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === filter)

  const getSkillSize = (years: number) => {
    if (years >= 4) return 'text-base px-4 py-2 font-semibold'
    if (years >= 3) return 'text-sm px-3 py-1.5 font-medium'
    if (years >= 2) return 'text-sm px-3 py-1.5'
    return 'text-xs px-2 py-1'
  }

  const getSkillColor = (category: string) => {
    const colors = {
      'Backend': 'from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600',
      'Frontend': 'from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600',
      'AI/ML': 'from-violet-400 to-violet-500 hover:from-violet-500 hover:to-violet-600',
      'Database': 'from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600',
      'DevOps': 'from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600',
      'Cloud': 'from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600',
      'Architecture': 'from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600',
      'Analytics': 'from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600',
      'General': 'from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600',
      'Soft Skills': 'from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600'
    }
    return colors[category as keyof typeof colors] || 'from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600'
  }

  const playHoverSound = () => {
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.1)
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interactive skill cloud - click on any skill to see details, or filter by category
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category || (filter === '' && category === 'All')
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                  : 'bg-gray-200 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cloud */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.button
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedSkill(skill.name)
                  playHoverSound()
                }}
                onMouseEnter={playHoverSound}
                className={`skill-tag bg-gradient-to-r ${getSkillColor(skill.category)} text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${getSkillSize(skill.years)} border border-white/20`}
              >
                {skill.name}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold gradient-text">
                    {selectedSkill}
                  </h3>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {(() => {
                  const skill = skills.find(s => s.name === selectedSkill)
                  return skill ? (
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                        <span className="font-semibold">{skill.years}+ years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Category:</span>
                        <span className="font-semibold">{skill.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Used in projects:</span>
                        <span className="font-semibold">{skill.projects}</span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${(skill.years / 5) * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          Proficiency Level: {skill.years >= 4 ? 'Expert' : skill.years >= 3 ? 'Advanced' : skill.years >= 2 ? 'Intermediate' : 'Beginner'}
                        </p>
                      </div>
                    </div>
                  ) : null
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}