import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Munir Mohammed — AI Backend Engineer',
  description: 'Backend Engineer with 5+ years of experience crafting robust solutions and specializing in Artificial Intelligence functionalities. Successfully implemented AI-driven predictive stock analysis in a comprehensive ERP system, optimizing inventory management.',
  keywords: 'Python, AI, Backend Engineer, Machine Learning, TensorFlow, Django, FastAPI, Node.js',
  authors: [{ name: 'Munir Mohammed' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0idXJsKCNncmFkaWVudDApIi8+CjxwYXRoIGQ9Ik04IDEwSDI0VjIySDhWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAgMTJIMTRWMjBIMTBWMTJaTTE2IDEySDIwVjIwSDE2VjEyWiIgZmlsbD0iIzA2YjZkNCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDAiIHgxPSIwIiB5MT0iMCIgeDI9IjMyIiB5Mj0iMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzA2YjZkNCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzYjgyZjYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}