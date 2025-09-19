'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'
import { ExternalLink, Github, X, Maximize2 } from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [draggedPositions, setDraggedPositions] = useState<{[key: string]: {x: number, y: number}}>({})
  const dragControls = useDragControls()

  const projects = [
    {
      id: 'remytel',
      name: 'Remytel',
      tech: ['TypeScript', 'Node.js', 'React Native', 'PostgreSQL', 'Stripe', 'Twilio'],
      description: 'Comprehensive fintech platform enabling global airtime top-ups and remittances with seamless cross-border payment solutions.',
      outcome: 'Built a robust microservices architecture serving international customers with real-time transaction processing and multi-currency operations across 200+ countries.',
      github: '',
      details: [
        'Architected comprehensive fintech platform for global airtime top-ups and remittances',
        'Built robust microservices architecture using TypeScript/Node.js with Bun runtime',
        'Implemented advanced payment infrastructure integrating Stripe and DtOne API',
        'Designed sophisticated user management with multi-factor authentication',
        'Developed intelligent referral and rewards system with gamification',
        'Engineered real-time notification system with multiple channels',
        'Optimized database performance using PostgreSQL with Prisma ORM',
        'Integrated monitoring tools including Sentry and Redis for caching'
      ]
    },
    {
      id: 'hobbyzhub',
      name: 'HobbyzHub',
      tech: ['Python', 'Flask', 'FastAPI', 'TensorFlow', 'Docker', 'Node.js'],
      description: 'Dynamic platform using Python with AI-powered personalized experiences through machine learning algorithms.',
      outcome: 'Successfully created a thriving platform that brings together hobby enthusiasts with enhanced user engagement through personalized notifications.',
      github: 'https://gitlab.com/hobbyzhub-application',
      details: [
        'Developed dynamic platform with services including Helprequest, Post, and Notification',
        'Leveraged AI to deliver personalized experiences through ML algorithms',
        'Built using Python frameworks Flask and FastAPI with Node.js',
        'Showcased seamless microservices deployment with Docker',
        'Integrated cutting-edge AI components using TensorFlow',
        'Enhanced user engagement through personalized notifications',
        'Fostered community building within the platform'
      ]
    },
    {
      id: 'jsearch',
      name: 'J Search',
      tech: ['JavaScript', 'Node.js', 'React', 'ERP', 'E-Commerce'],
      description: 'Comprehensive business management solution seamlessly amalgamating eCommerce platform and ERP system functionalities.',
      outcome: 'Transformed business operations through integrated eCommerce and ERP functionalities, streamlining inventory management and enhancing customer experience.',
      github: '',
      details: [
        'Developed comprehensive business management project',
        'Seamlessly integrated eCommerce platform and ERP system',
        'Included inventory management and order fulfillment features',
        'Optimized retail stores and managed product transfers',
        'Streamlined supplier interactions and purchase orders',
        'Established interconnected sales channels across Europe',
        'Included promotions, gift cards, and real-time notifications',
        'Built user-friendly interface with Node.js and React'
      ]
    },
    {
      id: 'biomedical',
      name: 'Biomedical AI Platform',
      tech: ['Python', 'FastAPI', 'React', 'TensorFlow', 'PyTorch', 'Django'],
      description: 'Cutting-edge biomedical AI platform dedicated to reverse engineering complex diseases using advanced machine learning.',
      outcome: 'Successfully reverse-engineered complex diseases using state-of-the-art AI algorithms, enhancing disease understanding and optimizing treatment strategies.',
      github: 'https://github.com/Munirmohammed/duri_',
      details: [
        'Developed cutting-edge biomedical AI platform for disease reverse engineering',
        'Leveraged Python, FastAPI, React and AI technologies for backend infrastructure',
        'Designed and implemented ML algorithms for core functionalities',
        'Utilized TensorFlow and PyTorch for biomedical data analysis',
        'Managed backend architecture for efficient data processing',
        'Enabled AI functionalities to deliver meaningful insights',
        'Created user-friendly frontend with React and Material UI',
        'Revolutionized disease understanding and treatment approaches'
      ]
    },
    {
      id: 'people-intelligence',
      name: 'People Intelligence',
      tech: ['Flask', 'Neo4j', 'Docker', 'GCP', 'Machine Learning', 'Cypher'],
      description: 'Dynamic platform leveraging Neo4j and LlamaIndex PropertyGraphIndex for graph-based relationship management.',
      outcome: 'Created scalable platform for managing complex relationships with AI-driven embeddings, providing enriched insights and context-aware recommendations.',
      github: 'https://github.com/Munirmohammed/People-Intelligence',
      details: [
        'Built dynamic platform using Neo4j for graph-based relationship management',
        'Utilized Cypher to model complex relationships between people and locations',
        'Integrated machine learning embeddings for enhanced querying',
        'Built APIs using Flask for efficient data operations',
        'Developed multimedia content analysis pipelines',
        'Deployed on Google Cloud Platform using Docker',
        'Implemented data enrichment with Wikipedia integration',
        'Streamlined user interactions with Firebase frontend'
      ]
    },
    {
      id: 'nostock',
      name: 'No Stock',
      tech: ['Python', 'Flask', 'Django', 'React', 'AI', 'Data Visualization'],
      description: 'Dynamic ERP system with AI-powered predictive stock analysis, featuring comprehensive business operation modules.',
      outcome: 'Delivered impactful outcomes through AI-driven predictive analysis, optimizing inventory and enhancing decision-making with real-time dashboards.',
      github: '',
      details: [
        'Presented dynamic ERP system for seamless business operations',
        'Included supplier/customer management and delivery logistics',
        'Leveraged Python and AI for predictive stock analysis',
        'Optimized inventory levels through demand forecasting',
        'Featured interactive dashboards for real-time tracking',
        'Integrated Python-based data visualization libraries',
        'Developed responsive frontend using Flask and Django',
        'Showcased full-stack development prowess'
      ]
    },
    {
      id: 'ethioeducation',
      name: 'EthioEducation',
      tech: ['Django', 'React', 'JavaScript', 'Node.js'],
      description: 'Online education platform tailored to the Ethiopian context with customized learning paths and student management.',
      outcome: 'Successfully created seamless learning environment with customized paths, addressing unique educational needs of Ethiopian students.',
      github: '',
      details: [
        'Crafted online education platform for Ethiopian context',
        'Developed user-friendly interface using Django backend',
        'Built platform using React on the frontend',
        'Emphasized customized learning paths for students',
        'Provided diverse courses on the platform',
        'Integrated student management system for engagement',
        'Facilitated data-driven insights through analytics'
      ]
    },
    {
      id: 'intfind',
      name: 'Intfind',
      tech: ['React', 'JavaScript', 'Node.js'],
      description: 'Dynamic platform at the intersection of design and development education, offering industry-relevant online courses and job opportunities.',
      outcome: 'Transformed individuals in design and development fields by empowering them with practical skills crucial for success in the digital landscape.',
      github: '',
      details: [
        'Created dynamic platform for design and development education',
        'Offered concise, industry-relevant online courses',
        'Embraced collaboration for peer learning community',
        'Doubled as job platform connecting learners with internships',
        'Ensured regularly updated content aligned with trends',
        'Built using JavaScript frameworks Node.js and React'
      ]
    }
  ]

  const handleDrag = (projectId: string, info: any) => {
    setDraggedPositions(prev => ({
      ...prev,
      [projectId]: { x: info.offset.x, y: info.offset.y }
    }))
  }

  const resetPositions = () => {
    setDraggedPositions({})
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Drag and play with my project cards! Each represents a real solution I've built, from AI-powered platforms to comprehensive ERP systems.
          </p>
          
          <button
            onClick={resetPositions}
            className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            Reset Positions
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              drag
              dragControls={dragControls}
              dragElastic={0.1}
              dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
              onDrag={(event, info) => handleDrag(project.id, info)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateZ: Math.random() * 4 - 2 }}
              whileDrag={{ scale: 1.05, rotateZ: 5, zIndex: 10 }}
              className="draggable-card bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{
                x: draggedPositions[project.id]?.x || 0,
                y: draggedPositions[project.id]?.y || 0,
              }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-500 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="text-gray-500 hover:text-primary-500 transition-colors"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">
                    OUTCOME:
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject)
                  return project ? (
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-3xl font-bold gradient-text">
                          {project.name}
                        </h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Description</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {project.description}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Outcome</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {project.outcome}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Key Features & Achievements</h4>
                        <ul className="space-y-2">
                          {project.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.github && (
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                          >
                            <Github className="w-5 h-5" />
                            View on GitHub
                          </a>
                        </div>
                      )}
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