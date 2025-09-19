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

        // Munir's comprehensive data for AI context
        const munirData = `
    MUNIR MOHAMMED - AI BACKEND ENGINEER PORTFOLIO DATA

    PERSONAL INFO:
    - Name: Munir Mohammed
    - Location: Addis Ababa, Ethiopia
    - Email: munirmohammed038@gmail.com
    - LinkedIn: https://www.linkedin.com/in/munir-mohammed-26015220b
    - GitHub: https://github.com/munirmohammed
    - Availability: Immediate hire with 4+ hours PST/EST overlap

    SUMMARY:
    Backend Developer with 5+ years of experience crafting robust solutions and specializing in Artificial Intelligence functionalities. Successfully implemented AI-driven predictive stock analysis in a comprehensive ERP system, optimizing inventory management. Contributed to a biomedical AI platform, demonstrating versatility across healthcare and enterprise domains.

    TECHNICAL SKILLS:
    - Python (4 years) - Backend development, AI/ML
    - JavaScript (3 years) - Frontend and full-stack
    - Node.js (3 years) - Backend services
    - React (3 years) - Frontend development
    - Django (2 years) - Web framework
    - Flask (2 years) - Microservices
    - TensorFlow (2 years) - Machine learning
    - Machine Learning (2 years) - AI algorithms
    - Neo4j (2 years) - Graph databases
    - Docker (2 years) - Containerization
    - Google Cloud Platform (2 years) - Cloud services
    - FastAPI (2 years) - Modern Python APIs
    - PyTorch (1 year) - Deep learning
    - Microservices (4 years) - Architecture
    - Software Development (5 years) - Overall experience

    WORK EXPERIENCE:
    1. Back-End Engineer at Playstream Interactive (Oct 2024 - Present)
       - Currently developing scalable backend solutions for interactive gaming platforms
    
    2. Back-End Engineer at Stone Age Technologies (Feb 2023 - Oct 2024)
       - Built comprehensive fintech platform Remytel with microservices architecture
       - Enabled global airtime top-ups across 200+ countries
    
    3. Software Developer at Omic (Oct 2022 - June 2023)
       - Developed cutting-edge biomedical AI platform for disease reverse engineering
       - Used Python, FastAPI, and machine learning algorithms
    
    4. Software Engineer at RDX Delta (June 2020 - May 2023)
       - Created multiple full-stack applications including HobbyzHub AI platform
       - Built J Search ERP system with advanced inventory management

    MAJOR PROJECTS:

    1. REMYTEL (Fintech Platform)
       - Tech: TypeScript, Node.js, React Native, PostgreSQL, Stripe, Twilio
       - Comprehensive fintech platform for global airtime top-ups and remittances
       - Microservices architecture serving international customers
       - Real-time transaction processing across 200+ countries
       - Advanced payment infrastructure with Stripe and DtOne API integration

    2. HOBBYZHUB (AI Platform)
       - Tech: Python, Flask, FastAPI, TensorFlow, Docker, Node.js
       - Dynamic platform with AI-powered personalized experiences
       - Machine learning algorithms for personalized notifications
       - Microservices deployment with Docker
       - GitHub: https://gitlab.com/hobbyzhub-application

    3. J SEARCH (ERP System)
       - Tech: JavaScript, Node.js, React, ERP, E-Commerce
       - Comprehensive business management solution
       - Integrated eCommerce and ERP functionalities
       - Inventory management and order fulfillment
       - Interconnected sales channels across Europe

    4. BIOMEDICAL AI PLATFORM
       - Tech: Python, FastAPI, React, TensorFlow, PyTorch, Django
       - Cutting-edge platform for reverse engineering complex diseases
       - Advanced machine learning for biomedical data analysis
       - Enhanced disease understanding and treatment optimization
       - GitHub: https://github.com/Munirmohammed/duri_

    5. PEOPLE INTELLIGENCE
       - Tech: Flask, Neo4j, Docker, GCP, Machine Learning, Cypher
       - Graph-based relationship management platform
       - Neo4j with Cypher for complex relationship modeling
       - AI-driven embeddings for enhanced querying
       - Deployed on Google Cloud Platform
       - GitHub: https://github.com/Munirmohammed/People-Intelligence

    6. NO STOCK (ERP with AI)
       - Tech: Python, Flask, Django, React, AI, Data Visualization
       - Dynamic ERP system with AI-powered predictive stock analysis
       - Demand forecasting and inventory optimization
       - Real-time dashboards and data visualization

    7. ETHIOEDUCATION
       - Tech: Django, React, JavaScript, Node.js
       - Online education platform for Ethiopian context
       - Customized learning paths and student management
       - Data-driven insights through analytics

    8. INTFIND
       - Tech: React, JavaScript, Node.js
       - Platform for design and development education
       - Job platform connecting learners with internships
       - Industry-relevant online courses

    EDUCATION:
    - Computer Science at Addis Ababa University (June 2019 - August 2023)
    - Strong foundation in algorithms, data structures, and software engineering
    - Research in AI and machine learning applications

    SPECIALIZATIONS:
    - AI and Machine Learning implementation
    - ERP system development
    - Fintech platform architecture
    - Biomedical AI applications
    - Graph database management
    - Microservices architecture
    - Full-stack development
    - Cloud deployment and scaling
    `

        // Use Hugging Face's AI API for intelligent responses
        const prompt = `<s>[INST] You are Munir Mohammed's professional AI assistant. Answer questions about Munir based on the following portfolio information. Be helpful, professional, and conversational. Keep responses concise but informative.

MUNIR'S PORTFOLIO DATA:
${munirData}

User Question: ${message} [/INST]

I'd be happy to help you learn about Munir Mohammed! `

        try {
            // Try Hugging Face API first with your token
            const hfResponse = await fetch('https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        max_new_tokens: 150,
                        temperature: 0.7,
                        do_sample: true,
                        return_full_text: false
                    }
                })
            })

            if (hfResponse.ok) {
                const hfData = await hfResponse.json()
                const aiResponse = hfData[0]?.generated_text || hfData.generated_text

                if (aiResponse) {
                    // Clean up the response to only include the assistant's part
                    const cleanResponse = aiResponse.replace(prompt, '').trim()
                    if (cleanResponse.length > 10) {
                        return NextResponse.json({ response: cleanResponse }, { status: 200 })
                    }
                }
            }
        } catch (error) {
            console.log('Hugging Face API failed, using fallback')
        }

        // Fallback to OpenRouter API (free tier)
        try {
            const orResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer sk-or-v1-demo', // Demo key for testing
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'https://munir-portfolio.vercel.app',
                    'X-Title': 'Munir Portfolio AI Assistant'
                },
                body: JSON.stringify({
                    model: 'meta-llama/llama-3.2-3b-instruct:free',
                    messages: [
                        {
                            role: 'system',
                            content: `You are Munir Mohammed's AI assistant. Answer questions about Munir based on this information: ${munirData}`
                        },
                        {
                            role: 'user',
                            content: message
                        }
                    ],
                    max_tokens: 200,
                    temperature: 0.7
                })
            })

            if (orResponse.ok) {
                const orData = await orResponse.json()
                const aiResponse = orData.choices?.[0]?.message?.content

                if (aiResponse) {
                    return NextResponse.json({ response: aiResponse }, { status: 200 })
                }
            }
        } catch (error) {
            console.log('OpenRouter API failed, using intelligent fallback')
        }

        // Intelligent fallback based on keywords
        const response = getIntelligentResponse(message, munirData)

        return NextResponse.json({ response }, { status: 200 })
    } catch (error) {
        console.error('AI Chat error:', error)
        return NextResponse.json(
            { error: 'Failed to process message. Please try again.' },
            { status: 500 }
        )
    }
}

// Intelligent fallback function
function getIntelligentResponse(message: string, context: string): string {
    const lowerMessage = message.toLowerCase()

    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return "Hello! I'm Munir's AI assistant. I can tell you about his impressive projects like Remytel (fintech platform), HobbyzHub (AI platform), his biomedical AI work, or his 5+ years of experience in Python and machine learning. What would you like to know?"
    }

    // Project-specific responses
    if (lowerMessage.includes('remytel')) {
        return "Remytel is Munir's flagship fintech project! He architected this comprehensive platform using TypeScript/Node.js with Bun runtime, enabling global airtime top-ups and remittances across 200+ countries. It features advanced payment infrastructure with Stripe integration, real-time transaction processing, sophisticated user management with multi-factor authentication, and intelligent referral systems. It's a perfect showcase of his microservices architecture expertise."
    }

    if (lowerMessage.includes('hobbyzhub') || lowerMessage.includes('hobby')) {
        return "HobbyzHub demonstrates Munir's AI expertise beautifully! Built with Python, Flask, FastAPI, and TensorFlow, this dynamic platform creates personalized experiences for hobby enthusiasts through machine learning algorithms. It uses Docker for microservices deployment and delivers tailored notifications that significantly boost user engagement. Check it out: https://gitlab.com/hobbyzhub-application"
    }

    if (lowerMessage.includes('biomedical') || lowerMessage.includes('disease') || lowerMessage.includes('healthcare')) {
        return "The Biomedical AI Platform showcases Munir's versatility in applying AI to healthcare! He developed this cutting-edge platform for reverse engineering complex diseases using Python, FastAPI, React, TensorFlow, and PyTorch. The system analyzes biomedical data to extract patterns and contribute to disease understanding, revolutionizing treatment approaches. See the code: https://github.com/Munirmohammed/duri_"
    }

    if (lowerMessage.includes('neo4j') || lowerMessage.includes('people intelligence') || lowerMessage.includes('graph')) {
        return "People Intelligence highlights Munir's graph database expertise! Built with Neo4j and Flask, this platform manages complex relationships between people, locations, and multimedia data. He used Cypher queries for relationship modeling, integrated ML embeddings for enhanced querying, and deployed it on Google Cloud Platform with Docker. Explore it: https://github.com/Munirmohammed/People-Intelligence"
    }

    if (lowerMessage.includes('j search') || lowerMessage.includes('erp') || lowerMessage.includes('ecommerce')) {
        return "J Search is Munir's comprehensive business management masterpiece! This solution brilliantly combines eCommerce and ERP functionalities using JavaScript, Node.js, and React. It includes advanced inventory management, order fulfillment, supplier interactions, and spans sales channels across Europe. Features include promotions, gift cards, and real-time notifications - a perfect example of his full-stack skills."
    }

    // Skills and technology responses
    if (lowerMessage.includes('python')) {
        return "Python is Munir's primary expertise with 4+ years of experience! He's used it extensively in HobbyzHub (Flask/FastAPI), the Biomedical AI platform, No Stock ERP system, and People Intelligence. His Python skills span web development, AI/ML implementation, data analysis, and API development. He's particularly strong with Django, Flask, and FastAPI frameworks."
    }

    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('tensorflow')) {
        return "AI and Machine Learning are Munir's specialties! With 2+ years in TensorFlow, he's implemented AI across multiple projects: personalized recommendations in HobbyzHub, predictive stock analysis in No Stock ERP, disease analysis in the Biomedical platform, and AI-driven embeddings in People Intelligence. He's skilled in both TensorFlow and PyTorch with practical experience in recommendation systems and predictive analytics."
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('career')) {
        return "Munir has an impressive 5+ years of software development experience across 4 companies! Currently he's a Back-End Engineer at Playstream Interactive (Oct 2024-Present). Previously: Stone Age Technologies where he built the Remytel fintech platform, Omic where he developed biomedical AI systems, and RDX Delta where he created multiple full-stack applications. He's available for immediate hire with 4+ hours PST/EST overlap!"
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        return "You can reach Munir at munirmohammed038@gmail.com or connect with him on LinkedIn: https://www.linkedin.com/in/munir-mohammed-26015220b. He's based in Addis Ababa, Ethiopia, and is available for immediate hire with 4+ hours overlap with PST/EST timezones. Check out his code on GitHub: https://github.com/munirmohammed"
    }

    if (lowerMessage.includes('skills') || lowerMessage.includes('technologies') || lowerMessage.includes('tech stack')) {
        return "Munir's impressive tech stack includes: Python (4 years), JavaScript (3 years), Node.js (3 years), React (3 years), Django (2 years), Flask (2 years), TensorFlow (2 years), Machine Learning (2 years), Neo4j (2 years), Docker (2 years), Google Cloud Platform (2 years), and FastAPI (2 years). He specializes in AI/ML implementation, ERP systems, fintech platforms, and microservices architecture."
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('university') || lowerMessage.includes('degree')) {
        return "Munir studied Computer Science at Addis Ababa University (June 2019 - August 2023). His education provided a strong foundation in algorithms, data structures, and software engineering, plus he conducted research in AI and machine learning applications. This academic background, combined with his practical experience, makes him well-rounded in both theory and implementation."
    }

    if (lowerMessage.includes('projects') || lowerMessage.includes('portfolio')) {
        return "Munir has built 8+ impressive projects! Key highlights: Remytel (fintech platform), HobbyzHub (AI platform), J Search (ERP system), Biomedical AI Platform, People Intelligence (Neo4j), No Stock (ERP with AI forecasting), EthioEducation (learning platform), and Intfind (job platform). Each showcases different aspects of his full-stack and AI expertise."
    }

    // Default intelligent response
    return "I'm here to help you learn about Munir Mohammed, an experienced AI Backend Engineer with 5+ years in software development! I can tell you about his impressive projects (Remytel fintech platform, HobbyzHub AI system, Biomedical AI platform), his technical expertise (Python, AI/ML, microservices), work experience, or how to contact him. What specific aspect interests you most?"
}