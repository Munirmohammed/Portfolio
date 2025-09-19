# Munir Mohammed - Portfolio Website

A stunning, interactive portfolio website built with Next.js, featuring draggable project cards, AI chat assistant, and smooth animations.

## 🚀 Features

- **Interactive Draggable Cards**: Drag and play with project cards for a unique user experience
- **AI Chat Assistant**: Ask questions about my projects and experience
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered animations throughout
- **Sound Effects**: Subtle hover sounds for enhanced interactivity
- **Skills Cloud**: Interactive 3D-style skill visualization
- **Timeline Experience**: Professional work history with achievements

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static export ready for Vercel/Netlify

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd munir-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

This portfolio is configured for static export and can be deployed to any static hosting service:

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag and drop the `out` folder to Netlify

### GitHub Pages
1. Run `npm run build`
2. Deploy the `out` folder contents

## 🎨 Customization

### Colors
The color scheme uses a modern indigo/teal palette defined in `tailwind.config.js`:
- Primary: Blue shades (#0ea5e9, #0284c7, #0369a1)
- Accent: Cyan shades (#22d3ee, #06b6d4, #0891b2)
- Dark: Slate shades (#1e293b, #0f172a)

### Content
All content is defined in the component files:
- Personal info: `app/components/Hero.tsx`
- Skills: `app/components/Skills.tsx`
- Projects: `app/components/Projects.tsx`
- Experience: `app/components/Experience.tsx`

### AI Chat Responses
The AI chat knowledge base is in `app/components/AIChat.tsx` - update the `knowledgeBase` object to modify responses.

## 📱 Features Breakdown

### Draggable Project Cards
- Physics-based dragging with elastic constraints
- Hover effects with rotation and scaling
- Reset positions functionality
- Mobile-friendly touch interactions

### AI Chat Assistant
- Floating chat widget with smooth animations
- Knowledge base covering all projects and skills
- Contextual responses about experience and contact info
- Expandable/collapsible interface

### Skills Cloud
- Interactive skill tags sized by experience level
- Category filtering system
- Click-to-reveal detailed stats modal
- Hover sound effects

### Theme System
- Automatic dark mode detection
- Smooth color transitions
- Persistent theme preference
- System preference respect

## 🎵 Sound Effects

The portfolio includes subtle hover sound effects generated using the Web Audio API. These are lightweight (under 5kb total) and enhance the interactive experience.

## 📊 Performance

- Lighthouse Score: 90+ across all metrics
- Optimized images and assets
- Minimal bundle size
- Fast loading times
- SEO optimized

## 🔧 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 12+)
- Mobile browsers: Optimized experience

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

- **Email**: munirmohammed038@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/munir-mohammed-26015220b
- **GitHub**: https://github.com/munirmohammed

---

Munir Mohammed © 2025