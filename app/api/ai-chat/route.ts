import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json()

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            )
        }

        console.log('AI Chat request:', message)

        const systemPrompt = `You are Munir Mohammed's AI assistant. Munir is an AI Backend Engineer with 5+ years experience in Python, JavaScript, Node.js, React, TensorFlow. He built Remytel (fintech), HobbyzHub (AI platform), Biomedical AI platform. Keep responses short and helpful.`

        // // PRIORITY 1: Try Hugging Face API with multiple approaches
        // if (process.env.HUGGINGFACE_API_TOKEN) {
        //     // Approach 1: Try with current Inference API format
        //     try {
        //         console.log('Trying Hugging Face Inference API (Approach 1)...')
                
        //         const hfResponse1 = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
        //             method: 'POST',
        //             headers: {
        //                 'Authorization': `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
        //                 'Content-Type': 'application/json',
        //                 'x-wait-for-model': 'true'
        //             },
        //             body: JSON.stringify({
        //                 inputs: `${systemPrompt}\n\nUser: ${message}\nAssistant:`,
        //                 parameters: {
        //                     max_length: 200,
        //                     temperature: 0.7,
        //                     do_sample: true,
        //                     return_full_text: false
        //                 },
        //                 options: {
        //                     wait_for_model: true
        //                 }
        //             })
        //         })

        //         console.log('HF Approach 1 status:', hfResponse1.status)
                
        //         if (hfResponse1.ok) {
        //             const hfData1 = await hfResponse1.json()
        //             console.log('HF Approach 1 response:', hfData1)
                    
        //             let aiResponse = ''
        //             if (Array.isArray(hfData1) && hfData1[0]?.generated_text) {
        //                 aiResponse = hfData1[0].generated_text.split('Assistant:').pop()?.trim() || hfData1[0].generated_text
        //             } else if (hfData1.generated_text) {
        //                 aiResponse = hfData1.generated_text.split('Assistant:').pop()?.trim() || hfData1.generated_text
        //             }
                    
        //             if (aiResponse && aiResponse.length > 5) {
        //                 console.log('Using HF Approach 1 response:', aiResponse)
        //                 return NextResponse.json({ response: aiResponse }, { status: 200 })
        //             }
        //         } else {
        //             const errorText = await hfResponse1.text()
        //             console.log('HF Approach 1 error:', hfResponse1.status, errorText)
        //         }
        //     } catch (error) {
        //         console.log('HF Approach 1 failed:', error)
        //     }

        //     // Approach 2: Try with different model and format
        //     try {
        //         console.log('Trying Hugging Face with GPT-2 (Approach 2)...')
                
        //         const hfResponse2 = await fetch('https://api-inference.huggingface.co/models/gpt2', {
        //             method: 'POST',
        //             headers: {
        //                 'Authorization': `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({
        //                 inputs: `Munir Mohammed is an AI Backend Engineer. Question: ${message} Answer:`,
        //                 parameters: {
        //                     max_new_tokens: 50,
        //                     temperature: 0.7,
        //                     return_full_text: false
        //                 }
        //             })
        //         })

        //         console.log('HF Approach 2 status:', hfResponse2.status)
                
        //         if (hfResponse2.ok) {
        //             const hfData2 = await hfResponse2.json()
        //             console.log('HF Approach 2 response:', hfData2)
                    
        //             let aiResponse = ''
        //             if (Array.isArray(hfData2) && hfData2[0]?.generated_text) {
        //                 aiResponse = hfData2[0].generated_text.trim()
        //             } else if (hfData2.generated_text) {
        //                 aiResponse = hfData2.generated_text.trim()
        //             }
                    
        //             if (aiResponse && aiResponse.length > 5) {
        //                 console.log('Using HF Approach 2 response:', aiResponse)
        //                 return NextResponse.json({ response: aiResponse }, { status: 200 })
        //             }
        //         }
        //     } catch (error) {
        //         console.log('HF Approach 2 failed:', error)
        //     }

        //     // Approach 3: Try with Flan-T5 (instruction following)
        //     try {
        //         console.log('Trying Hugging Face with Flan-T5 (Approach 3)...')
                
        //         const hfResponse3 = await fetch('https://api-inference.huggingface.co/models/google/flan-t5-small', {
        //             method: 'POST',
        //             headers: {
        //                 'Authorization': `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({
        //                 inputs: `Answer this question about Munir Mohammed, an AI Backend Engineer with Python, JavaScript, Node.js, React, TensorFlow skills: ${message}`,
        //                 parameters: {
        //                     max_new_tokens: 50,
        //                     temperature: 0.7
        //                 }
        //             })
        //         })

        //         console.log('HF Approach 3 status:', hfResponse3.status)
                
        //         if (hfResponse3.ok) {
        //             const hfData3 = await hfResponse3.json()
        //             console.log('HF Approach 3 response:', hfData3)
                    
        //             let aiResponse = ''
        //             if (Array.isArray(hfData3) && hfData3[0]?.generated_text) {
        //                 aiResponse = hfData3[0].generated_text.trim()
        //             } else if (hfData3.generated_text) {
        //                 aiResponse = hfData3.generated_text.trim()
        //             }
                    
        //             if (aiResponse && aiResponse.length > 5) {
        //                 console.log('Using HF Approach 3 response:', aiResponse)
        //                 return NextResponse.json({ response: aiResponse }, { status: 200 })
        //             }
        //         }
        //     } catch (error) {
        //         console.log('HF Approach 3 failed:', error)
        //     }

        //     // Approach 4: Try with serverless inference endpoint
        //     try {
        //         console.log('Trying Hugging Face serverless (Approach 4)...')
                
        //         const hfResponse4 = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-small', {
        //             method: 'POST',
        //             headers: {
        //                 'Authorization': `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({
        //                 inputs: {
        //                     past_user_inputs: [],
        //                     generated_responses: [],
        //                     text: message
        //                 }
        //             })
        //         })

        //         console.log('HF Approach 4 status:', hfResponse4.status)
                
        //         if (hfResponse4.ok) {
        //             const hfData4 = await hfResponse4.json()
        //             console.log('HF Approach 4 response:', hfData4)
                    
        //             if (hfData4.generated_text && hfData4.generated_text.length > 5) {
        //                 console.log('Using HF Approach 4 response:', hfData4.generated_text)
        //                 return NextResponse.json({ response: hfData4.generated_text }, { status: 200 })
        //             }
        //         }
        //     } catch (error) {
        //         console.log('HF Approach 4 failed:', error)
        //     }

        //     console.log('All Hugging Face approaches failed, trying other APIs...')
        // }

        // // 2. Try Groq (free tier with generous limits)
        // try {
        //     console.log('Trying Groq free API...')
            
        //     // Groq has a free tier that's quite generous
        //     const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             // Try without auth first for demo
        //         },
        //         body: JSON.stringify({
        //             model: 'llama3-8b-8192',
        //             messages: [
        //                 { role: 'system', content: systemPrompt },
        //                 { role: 'user', content: message }
        //             ],
        //             max_tokens: 80,
        //             temperature: 0.7
        //         })
        //     })

        //     console.log('Groq status:', groqResponse.status)
            
        //     if (groqResponse.ok) {
        //         const groqData = await groqResponse.json()
        //         const groqAI = groqData.choices?.[0]?.message?.content
                
        //         if (groqAI && groqAI.length > 5) {
        //             console.log('Using Groq response:', groqAI)
        //             return NextResponse.json({ response: groqAI }, { status: 200 })
        //         }
        //     }
        // } catch (error) {
        //     console.log('Groq failed:', error)
        // }

        // // 2. Try Ollama (if running locally)
        // try {
        //     console.log('Trying Ollama local API...')
            
        //     const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             model: 'llama2',
        //             prompt: `${systemPrompt}\n\nUser: ${message}\nAssistant:`,
        //             stream: false
        //         })
        //     })

        //     if (ollamaResponse.ok) {
        //         const ollamaData = await ollamaResponse.json()
        //         const ollamaAI = ollamaData.response?.trim()
                
        //         if (ollamaAI && ollamaAI.length > 5) {
        //             console.log('Using Ollama response:', ollamaAI)
        //             return NextResponse.json({ response: ollamaAI }, { status: 200 })
        //         }
        //     }
        // } catch (error) {
        //     console.log('Ollama not available:', error)
        // }

        // // 3. Try Perplexity (has free tier)
        // try {
        //     console.log('Trying Perplexity API...')
            
        //     const perplexityResponse = await fetch('https://api.perplexity.ai/chat/completions', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             // Try without auth for demo
        //         },
        //         body: JSON.stringify({
        //             model: 'llama-3.1-sonar-small-128k-online',
        //             messages: [
        //                 { role: 'system', content: systemPrompt },
        //                 { role: 'user', content: message }
        //             ],
        //             max_tokens: 80
        //         })
        //     })

        //     if (perplexityResponse.ok) {
        //         const perplexityData = await perplexityResponse.json()
        //         const perplexityAI = perplexityData.choices?.[0]?.message?.content
                
        //         if (perplexityAI && perplexityAI.length > 5) {
        //             console.log('Using Perplexity response:', perplexityAI)
        //             return NextResponse.json({ response: perplexityAI }, { status: 200 })
        //         }
        //     }
        // } catch (error) {
        //     console.log('Perplexity failed:', error)
        // }

        // // 4. Try DeepInfra (free tier)
        // try {
        //     console.log('Trying DeepInfra free API...')
            
        //     const deepInfraResponse = await fetch('https://api.deepinfra.com/v1/openai/chat/completions', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             model: 'meta-llama/Llama-2-7b-chat-hf',
        //             messages: [
        //                 { role: 'system', content: systemPrompt },
        //                 { role: 'user', content: message }
        //             ],
        //             max_tokens: 80,
        //             temperature: 0.7
        //         })
        //     })

        //     console.log('DeepInfra status:', deepInfraResponse.status)
            
        //     if (deepInfraResponse.ok) {
        //         const deepInfraData = await deepInfraResponse.json()
        //         const deepInfraAI = deepInfraData.choices?.[0]?.message?.content
                
        //         if (deepInfraAI && deepInfraAI.length > 5) {
        //             console.log('Using DeepInfra response:', deepInfraAI)
        //             return NextResponse.json({ response: deepInfraAI }, { status: 200 })
        //         }
        //     }
        // } catch (error) {
        //     console.log('DeepInfra failed:', error)
        // }

        // // 5. Try Fireworks AI (free tier)
        // try {
        //     console.log('Trying Fireworks AI...')
            
        //     const fireworksResponse = await fetch('https://api.fireworks.ai/inference/v1/chat/completions', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             model: 'accounts/fireworks/models/llama-v2-7b-chat',
        //             messages: [
        //                 { role: 'system', content: systemPrompt },
        //                 { role: 'user', content: message }
        //             ],
        //             max_tokens: 80,
        //             temperature: 0.7
        //         })
        //     })

        //     if (fireworksResponse.ok) {
        //         const fireworksData = await fireworksResponse.json()
        //         const fireworksAI = fireworksData.choices?.[0]?.message?.content
                
        //         if (fireworksAI && fireworksAI.length > 5) {
        //             console.log('Using Fireworks response:', fireworksAI)
        //             return NextResponse.json({ response: fireworksAI }, { status: 200 })
        //         }
        //     }
        // } catch (error) {
        //     console.log('Fireworks failed:', error)
        // }

        // 6. Last resort: OpenRouter (if available)
        if (process.env.OPENROUTER_API_KEY) {
            try {
                console.log('Trying OpenRouter as last resort...')
                
                const openRouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                        'Content-Type': 'application/json',
                        'HTTP-Referer': 'https://munir-portfolio.vercel.app',
                        'X-Title': 'Munir Portfolio AI Assistant'
                    },
                    body: JSON.stringify({
                        model: 'meta-llama/llama-3.2-3b-instruct:free',
                        messages: [
                            { role: 'system', content: systemPrompt },
                            { role: 'user', content: message }
                        ],
                        max_tokens: 80,
                        temperature: 0.7
                    })
                })

                if (openRouterResponse.ok) {
                    const openRouterData = await openRouterResponse.json()
                    const openRouterAI = openRouterData.choices?.[0]?.message?.content
                    
                    if (openRouterAI && openRouterAI.length > 5) {
                        console.log('Using OpenRouter response:', openRouterAI)
                        return NextResponse.json({ response: openRouterAI }, { status: 200 })
                    }
                }
            } catch (error) {
                console.log('OpenRouter last resort failed:', error)
            }
        }

        // Final fallback: Enhanced intelligent response
        console.log('All external APIs failed, using enhanced intelligent response system')
        const response = getEnhancedResponse(message)
        return NextResponse.json({ response }, { status: 200 })

    } catch (error) {
        console.error('AI Chat error:', error)
        return NextResponse.json(
            { error: 'Failed to process message. Please try again.' },
            { status: 500 }
        )
    }
}

// Enhanced intelligent response function
function getEnhancedResponse(message: string): string {
    const lowerMessage = message.toLowerCase()

    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        const greetings = [
            "Hi there! I'm Munir's AI assistant. What would you like to know about his work?",
            "Hello! I can tell you about Munir's projects, skills, or how to contact him. What interests you?",
            "Hey! I'm here to help you learn about Munir Mohammed. Ask me anything!"
        ]
        return greetings[Math.floor(Math.random() * greetings.length)]
    }
    
    // Who are you responses
    if (lowerMessage.includes('who are you') || lowerMessage.includes('who r u') || lowerMessage.includes('what are you')) {
        return "I'm Munir Mohammed's AI assistant! I help people learn about his work as a Python/AI backend engineer with 5+ years of experience."
    }

    // Contact responses
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        return "📧 munirmohammed038@gmail.com\n💼 LinkedIn: https://www.linkedin.com/in/munir-mohammed-26015220b\n🔗 GitHub: https://github.com/munirmohammed\n\nHe's available for immediate hire with 4+ hours PST/EST overlap!"
    }
    
    // Skills responses
    if (lowerMessage.includes('python') || lowerMessage.includes('skills') || lowerMessage.includes('technologies')) {
        return "Munir's core skills: Python (4 years), JavaScript (3 years), Node.js (3 years), React (3 years), TensorFlow (2 years), Django (2 years), Flask (2 years), Neo4j (2 years), Docker (2 years), Google Cloud Platform (2 years)."
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('career')) {
        return "Munir has 5+ years of software development experience. Currently at Playstream Interactive as a Back-End Engineer. Previously worked at Stone Age Technologies (built Remytel), Omic (Biomedical AI), and RDX Delta."
    }
    
    if (lowerMessage.includes('projects') || lowerMessage.includes('portfolio')) {
        return "Munir's key projects: Remytel (fintech platform), HobbyzHub (AI platform), Biomedical AI (disease analysis), People Intelligence (Neo4j), J Search (ERP), EthioEducation, and Intfind. Which one interests you?"
    }

    // Project-specific responses
    if (lowerMessage.includes('remytel')) {
        return "Remytel is Munir's comprehensive fintech platform enabling global airtime top-ups across 200+ countries. Built with TypeScript/Node.js, Stripe integration, and microservices architecture."
    }

    if (lowerMessage.includes('hobbyzhub') || lowerMessage.includes('hobby')) {
        return "HobbyzHub is Munir's AI-powered platform for hobby enthusiasts. Built with Python, Flask, FastAPI, and TensorFlow for personalized ML experiences. 🔗 https://gitlab.com/hobbyzhub-application"
    }

    if (lowerMessage.includes('biomedical') || lowerMessage.includes('disease') || lowerMessage.includes('healthcare')) {
        return "The Biomedical AI Platform is for reverse engineering complex diseases using Python, FastAPI, React, TensorFlow, and PyTorch. 🔗 https://github.com/Munirmohammed/duri_"
    }

    if (lowerMessage.includes('neo4j') || lowerMessage.includes('people intelligence') || lowerMessage.includes('graph')) {
        return "People Intelligence manages complex relationships using Neo4j and Flask. Features Cypher queries and ML embeddings. 🔗 https://github.com/Munirmohammed/People-Intelligence"
    }

    if (lowerMessage.includes('j search') || lowerMessage.includes('erp') || lowerMessage.includes('ecommerce')) {
        return "J Search combines eCommerce and ERP functionalities using JavaScript, Node.js, and React. Includes inventory management and order fulfillment across Europe."
    }

    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('tensorflow')) {
        return "Munir specializes in AI/ML with 2+ years of TensorFlow experience. He's implemented AI in HobbyzHub (personalized recommendations), NoStock ERP (predictive analysis), and Biomedical platform (disease analysis)."
    }

    // Default response
    return "I can help with info about Munir's projects, technical skills, work experience, or contact details. Try asking about 'remytel project', 'python experience', or 'contact info'!"
}