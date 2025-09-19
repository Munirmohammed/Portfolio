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



  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return
    
    const userMessage = { type: 'user', content: inputMessage }
    setMessages(prev => [...prev, userMessage])
    
    const currentInput = inputMessage
    setInputMessage('')
    
    // Add typing indicator
    const typingMessage = { type: 'bot', content: 'Thinking...' }
    setMessages(prev => [...prev, typingMessage])
    
    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      })
      
      const data = await response.json()
      
      // Remove typing indicator and add real response
      setMessages(prev => {
        const newMessages = [...prev]
        newMessages[newMessages.length - 1] = { type: 'bot', content: data.response || 'Sorry, I encountered an error. Please try again.' }
        return newMessages
      })
    } catch (error) {
      // Remove typing indicator and add error message
      setMessages(prev => {
        const newMessages = [...prev]
        newMessages[newMessages.length - 1] = { type: 'bot', content: 'Sorry, I encountered a network error. Please try again.' }
        return newMessages
      })
    }
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