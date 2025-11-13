# Mohamed Diaa - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a clean design, smooth animations, and easy content management through a centralized configuration file.

## ✨ Features

- 🎨 **Modern Design**: Clean, minimal interface with a professional dark theme
- ⚡ **Fast Performance**: Built with Vite for lightning-fast load times
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- 🎭 **Smooth Animations**: Powered by Framer Motion for elegant transitions
- 🎯 **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- 🔧 **Easy to Update**: All content managed through a single config file
- ♿ **Accessible**: WCAG 2.1 compliant with proper contrast and keyboard navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📝 Content Management

All content is managed through the `/src/config/content.js` file. This makes it super easy to update your portfolio without touching any React components!

### Updating Personal Information

```javascript
// src/config/content.js
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  // ... more fields
}
```

### Adding a New Job Experience

```javascript
// src/config/content.js
export const experiences = [
  {
    id: 1,
    company: "Company Name",
    role: "Your Role",
    duration: "Jan 2024 - Present",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    techStack: ["React", "Node.js", "PostgreSQL"]
  },
  // ... more experiences
]
```

### Adding a New Project

```javascript
// src/config/content.js
export const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description...",
    impact: "Key metrics or impact",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://project-url.com",
    featured: true
  },
  // ... more projects
]
```

### Updating Skills

```javascript
// src/config/content.js
export const skills = {
  categories: [
    {
      id: "frontend",
      name: "Frontend",
      skills: [
        { name: "React", level: "expert" },
        { name: "TypeScript", level: "advanced" }
      ]
    }
  ]
}
```

## 🎨 Design System

### Colors

- **Primary**: `#0F172A` (Midnight Blue)
- **Accent**: `#06B6D4` (Cyan)
- **Accent Light**: `#22D3EE`
- **Text**: `#FFFFFF` (White)
- **Secondary Text**: `#CBD5E1` (Slate Light)

### Typography

- **Headings**: Poppins (Bold, 600-700)
- **Body**: Inter (Regular, 400-500)

### Spacing

Based on 8px grid system using Tailwind's spacing scale.

## 🛠️ Built With

- **[React](https://react.dev/)** - UI library
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory, ready to be deployed.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect the Vite configuration
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build settings are already configured in `netlify.toml`
4. Deploy!

### Manual Deployment

Build the project and upload the `dist` folder to any static hosting service:

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## 📄 Files to Update Before Deployment

1. **Resume PDF**: Place your `resume.pdf` in the `public` folder
2. **GitHub URL**: Update in `src/config/content.js`
3. **Domain**: Update in `public/sitemap.xml` and `public/robots.txt`
4. **OG Image**: Add `og-image.jpg` to the `public` folder (1200x630px)
5. **Favicon**: Replace `public/vite.svg` with your own favicon

## 📊 Performance

- ⚡ Lighthouse Performance Score: 95+
- 📦 Bundle Size: < 200KB
- 🎯 First Contentful Paint: < 1.5s
- ✅ Core Web Vitals: All Green

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation supported
- Screen reader friendly
- High contrast ratios (4.5:1+)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Mohamed Diaa - [mdiaan442@gmail.com](mailto:mdiaan442@gmail.com)

LinkedIn: [linkedin.com/in/mohamed-diaa-03986b1ab/](https://www.linkedin.com/in/mohamed-diaa-03986b1ab/)

---

**Built with React & ❤️**



