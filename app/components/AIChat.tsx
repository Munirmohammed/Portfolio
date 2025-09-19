'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

export default function AIChat({ showChat, setShowChat }: { showChat: boolean, setShowChat: (show: boolean) => void }) {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Munir's AI assistant. Ask me about his projects in Neo4j, AI forecasting, or how he built J Search!"
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const knowledgeBase = {
    'neo4j': 'Munir has 2 years of experience with Neo4j and built the People Intelligence platform using Neo4j with Cypher queries for complex relationship management between people, locations, and multimedia data.',
    'ai forecasting': 'Munir implemented AI-driven predictive stock analysis in the NoStock ERP system, optimizing inventory levels by intelligently forecasting demand patterns using Python and machine learning.',
    'j search': 'J Search is a comprehensive business management solution that seamlessly integrates eCommerce and ERP functionalities. Built with JavaScript, Node.js, and React, it includes inventory management, order fulfillment, and supplier interactions.',
    'python': 'Munir has 4+ years of Python experience, specializing in AI functionalities. He has used Python in projects like HobbyzHub, Biomedical AI platform, and NoStock ERP system.',
    'tensorflow': 'Munir has 2 years of TensorFlow experience and used it in projects like HobbyzHub for AI-powered personalized experiences and the Biomedical AI platform for disease analysis.',
    'remytel': 'Remytel is a comprehensive fintech platform Munir architected using TypeScript/Node.js with Bun runtime, enabling global airtime top-ups and remittances across 200+ countries with Stripe integration.',
    'hobbyzhub': 'HobbyzHub is a dynamic platform Munir developed using Python, Flask, FastAPI, and TensorFlow. It leverages AI for personalized experiences through machine learning algorithms and uses Docker for microservices deployment.',
    'biomedical': 'The Biomedical AI platform is a cutting-edge solution Munir developed for reverse engineering complex diseases using Python, FastAPI, React, TensorFlow, and PyTorch for analyzing biomedical data.',
    'experience': 'Munir has 5+ years of software development experience, currently working as a Back-End Engineer at Playstream Interactive, with previous roles at Stone Age Technologies, Omic, and RDX Delta.',
    'skills': 'Munir specializes in Python (4 years), JavaScript (3 years), Node.js (3 years), React (3 years), Django (2 years), Flask (2 years), TensorFlow (2 years), and Machine Learning (2 years).'
  }

  const getResponse = (message: string) => {
    const lowerMessage = message.toLowerCase()

    for (const [key, response] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
      return "You can reach Munir at munirmohammed038@gmail.com or connect with him on LinkedIn. He's available for immediate hire with 4+ hours PST/EST overlap!"
    }

    if (lowerMessage.includes('projects')) {
      return "Munir has built 8+ major projects including Remytel (fintech), HobbyzHub (AI platform), J Search (ERP), Biomedical AI platform, People Intelligence (Neo4j), NoStock (ERP with AI forecasting), EthioEducation, and Intfind."
    }

    return "I can tell you about Munir's projects (Neo4j, AI forecasting, J Search), his technical skills, experience, or how to contact him. What would you like to know?"
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = { type: 'user', content: inputMessage }
    const botResponse = { type: 'bot', content: getResponse(inputMessage) }

    setMessages(prev => [...prev, userMessage, botResponse])
    setInputMessage('')
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setShowChat(!showChat)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-40"
      >
        {showChat ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-5 h-5" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-20 right-6 w-72 h-80 bg-white dark:bg-dark-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-30 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-3 border-b border-gray-200 dark:border-gray-700">
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                  Munir's AI Assistant
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Ask me anything about Munir!
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-2.5 rounded-lg text-sm ${message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-white'
                      }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about Munir's projects..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}