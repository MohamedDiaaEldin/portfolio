# 🎯 Product Requirements Document (PRD)
## Mohamed Diaa - Portfolio Website

---

## 📋 Product Overview

**Product Name:** Mohamed Diaa – Professional Portfolio  
**Type:** Personal Portfolio Website  
**Goal:** Showcase Mohamed Diaa's professional journey, technical expertise, and standout projects in a modern, captivating format that converts visitors into opportunities.

**Platform:** Web (Fully Responsive)  
**Hosting:** Vercel / Netlify (Static Deployment)  
**Domain:** `mohameddiaa.me` or `mohamed-diaa.dev`  
**Tech Stack:** React + Vite + Tailwind CSS + Framer Motion

---

## 🎯 Core Objectives

1. **Establish Authority:** Present Mohamed as a skilled, reliable full-stack engineer with proven impact
2. **Drive Engagement:** Clear CTAs guiding visitors to contact, download resume, or explore work
3. **Build Trust:** Professional design + detailed experience = credibility
4. **Enable Discovery:** SEO-optimized content for recruiters and clients searching for talent
5. **Showcase Personality:** Modern, clean aesthetics reflecting attention to detail and quality

---

## 👥 Target Audience

| Audience Type | Needs | Key Messages |
|--------------|-------|--------------|
| **Tech Recruiters** | Quick skill assessment, work history | "Proven track record at Vultara & Juthor" |
| **Hiring Managers** | Problem-solving ability, team fit | "90% performance improvement, cross-functional collaboration" |
| **Freelance Clients** | Reliability, diverse skill set | "3.5 years freelance experience, ERP systems" |
| **Tech Peers** | Technical depth, open to collaboration | "Microservices, Redis queues, system design" |

---

## 🎨 Design System

### Color Palette

```
Primary Colors:
- Midnight Blue:   #0F172A (backgrounds, headers)
- Slate Dark:      #1E293B (cards, secondary backgrounds)
- Slate:           #334155 (borders, dividers)

Accent Colors:
- Cyan Bright:     #06B6D4 (CTAs, links, highlights)
- Cyan Glow:       #22D3EE (hover states, accents)

Neutral Colors:
- White:           #FFFFFF (text on dark)
- Slate Light:     #CBD5E1 (secondary text)
- Slate Lighter:   #F1F5F9 (light backgrounds)

Semantic Colors:
- Success:         #10B981 (achievements, positive)
- Warning:         #F59E0B (in-progress items)
```

### Typography

**Fonts:**
- **Headings:** Poppins (Bold 600-700) - Modern, geometric, confident
- **Body:** Inter (Regular 400, Medium 500) - Readable, professional, clean

**Scale:**
```
H1 (Hero):        4.5rem (72px) - Desktop | 3rem (48px) - Mobile
H2 (Section):     3rem (48px) - Desktop | 2rem (32px) - Mobile
H3 (Subsection):  1.875rem (30px) - Desktop | 1.5rem (24px) - Mobile
Body Large:       1.125rem (18px)
Body:             1rem (16px)
Body Small:       0.875rem (14px)
```

**Line Height:**
- Headings: 1.2
- Body: 1.6

### Spacing System

Based on 8px grid:
```
xs:  4px (0.5 units)
sm:  8px (1 unit)
md:  16px (2 units)
lg:  24px (3 units)
xl:  32px (4 units)
2xl: 48px (6 units)
3xl: 64px (8 units)
4xl: 96px (12 units)
```

**Section Padding:**
- Desktop: 96px vertical, 80px horizontal
- Tablet: 64px vertical, 40px horizontal
- Mobile: 48px vertical, 20px horizontal

### Component Specifications

#### Cards
```
Background: Slate Dark (#1E293B)
Border: 1px solid Slate (#334155)
Border Radius: 16px
Padding: 32px
Shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
Hover: Transform scale(1.02), Shadow increase
Transition: 300ms ease-in-out
```

#### Buttons (Primary CTA)
```
Background: Cyan Bright (#06B6D4)
Text: White
Padding: 12px 32px
Border Radius: 8px
Font: Inter Medium 16px
Hover: Background → Cyan Glow, Scale 1.05
Shadow: 0 4px 12px rgba(6, 182, 212, 0.4)
```

#### Timeline
```
Vertical line: 2px solid Slate
Dots: 16px circle, Cyan Bright fill
Card offset: 40px from timeline
Expand animation: Height transition 400ms
```

---

## 🏗️ Site Structure & Content

### Navigation
**Type:** Sticky header with smooth scroll  
**Items:** About • Experience • Projects • Skills • Contact  
**CTA:** "Download Resume" button (right-aligned)  
**Behavior:** 
- Transparent on top, solid background on scroll
- Active section highlighting
- Mobile: Hamburger menu

---

### Section 1: Hero

**Layout:** Full viewport height, centered content

**Content:**
```
[Eyebrow Text - Cyan]
👋 Hey, I'm Mohamed Diaa

[Main Headline - Gradient White→Cyan]
Building Scalable Web Solutions
That Drive Real Impact

[Subheadline - Slate Light]
Full-Stack Software Engineer specializing in microservices, 
high-performance systems, and seamless integrations.

[Stats Row]
📍 Based in Egypt  •  🌍 Remote Work  •  💼 Currently @ Juthor

[CTA Buttons]
[View My Work ↓]  [Let's Connect →]
```

**Animation:** 
- Text fade-in stagger (200ms delay each)
- Gradient text shimmer effect
- Subtle floating animation on avatar/icon

---

### Section 2: About

**Layout:** Two-column (Desktop) | Single-column (Mobile)

**Content:**
```
[Section Title]
About Me

[Body - Compelling Story]
I'm a full-stack software engineer with a passion for building systems 
that scale. Over the past 4+ years, I've worked across diverse domains—
from automotive cybersecurity at Vultara to retail microservices at Juthor.

My approach? Understand the problem deeply, design with scalability in 
mind, and deliver solutions that just work. Whether it's optimizing 
performance by 90% or integrating systems never meant to talk to each 
other, I thrive on technical challenges.

When I'm not coding, I'm exploring system design patterns, contributing 
to open-source, or helping teams ship better software faster.

[Highlight Cards - 3 Columns]
┌─────────────────────┐
│ 🚀 Performance      │
│ 90% faster systems  │
└─────────────────────┘

┌─────────────────────┐
│ 🏗️ Architecture     │
│ Microservices expert│
└─────────────────────┘

┌─────────────────────┐
│ 🤝 Collaboration    │
│ Cross-functional pro│
└─────────────────────┘

[CTA]
[Download Full Resume]
```

---

### Section 3: Experience

**Layout:** Vertical timeline (left-aligned line)

**Job Entries:**

#### 1. Juthor | جذور
```
[Logo Circle - Top Right]
[Cyan Dot on Timeline]

Role: Software Engineer
Type: Full-time • Remote
Location: Saudi Arabia
Duration: Jul 2025 - Present (5 months)

[Key Achievements - Expandable]
• Architected microservices infrastructure ensuring modularity & scalability
• Implemented Redis-based queue systems for async task processing
• Built integrations with retail platforms via webhook synchronization
• Configured reverse proxy for optimized routing & security
• Delivered high-performance solutions with NestJS, Next.js, PostgreSQL

[Tech Stack Badges]
[NestJS] [Next.js] [PostgreSQL] [Redis] [Microservices]
```

#### 2. Vultara, Inc.
```
[Cyan Dot on Timeline]

Role: Software Engineer (Feb '25 - Jul '25) • Junior SE (Aug '24 - Feb '25)
Type: Full-time • Remote
Location: United States
Duration: 1 year (Aug 2024 - Jul 2025)

[Key Achievements]
As Software Engineer:
• Led end-to-end development of cybersecurity algorithms & dashboards
• Achieved 90% performance improvement via refactoring & optimization
• Implemented unit testing & CI/CD in regulated automotive security domain
• Collaborated across cross-domain teams for scalable delivery

As Junior Software Engineer:
• Developed core features: threat modeling, vulnerability tracking
• Gained expertise in security workflows & automotive compliance
• Built scalable integration patterns

[Tech Stack Badges]
[TypeScript] [Node.js] [React] [CI/CD] [Cybersecurity]
```

#### 3. Fiverr (Freelance)
```
[Cyan Dot on Timeline]

Role: Software Engineer (Freelance)
Type: Contract • Remote
Location: Global
Duration: 3.5 years (Feb 2021 - Jul 2024)

[Key Achievements]
• Delivered custom web applications for 20+ clients
• Designed backend for ERP system deployed across Egyptian universities
• Integrated deep learning models into production environments
• Connected legacy systems not designed for interoperability

[Tech Stack Badges]
[Python] [Flask] [PostgreSQL] [JavaScript] [Deep Learning]
```

---

### Section 4: Projects

**Layout:** 3-column grid (Desktop) | 1-column (Mobile)

**Project Cards:**

#### Project 1: Microservices Architecture (Juthor)
```
[Card with Hover Lift]
[Preview Image/Diagram]

Title: Scalable Retail Platform
Description: Designed modular microservices with Redis queuing, 
reverse proxy routing, and webhook-driven sync.

Impact: Handled 10K+ requests/minute, 99.9% uptime

[View Case Study →]

Tech: [NestJS] [Redis] [PostgreSQL] [Docker]
```

#### Project 2: Cybersecurity Dashboard (Vultara)
```
Title: Automotive Security Suite
Description: Built real-time threat monitoring dashboard with 
vulnerability tracking and compliance reporting.

Impact: 90% faster data processing, <100ms response times

[View Case Study →]

Tech: [TypeScript] [React] [Node.js] [Chart.js]
```

#### Project 3: University ERP System
```
Title: Multi-Campus ERP Backend
Description: Python-based backend infrastructure serving multiple 
universities with student management, grading, scheduling.

Impact: Serving 50K+ students across 5 institutions

Tech: [Python] [Flask] [PostgreSQL] [REST APIs]
```

**Note:** Each card shows only tech badges on initial view, full description on hover/click

---

### Section 5: Skills

**Layout:** Categorized badge display

```
[Section Title]
Technical Expertise

[Category Tabs]
Frontend • Backend • DevOps • Concepts

[Frontend - Active]
┌─────────────────────────────────────────┐
│ [JavaScript] [TypeScript] [React]       │
│ [Next.js] [Angular] [HTML5] [CSS3]      │
│ [Tailwind CSS] [Framer Motion]          │
└─────────────────────────────────────────┘

[Backend]
┌─────────────────────────────────────────┐
│ [Node.js] [NestJS] [Express.js]         │
│ [Python] [Flask] [PostgreSQL]           │
│ [MongoDB] [Redis] [REST APIs]           │
└─────────────────────────────────────────┘

[DevOps & Tools]
┌─────────────────────────────────────────┐
│ [Docker] [Git] [Linux] [CI/CD]          │
│ [GitHub Actions] [Vercel] [Nginx]       │
└─────────────────────────────────────────┘

[Concepts & Practices]
┌─────────────────────────────────────────┐
│ [Microservices] [System Design]         │
│ [OOP] [SOLID] [Data Structures]         │
│ [Algorithms] [Clean Code]               │
└─────────────────────────────────────────┘
```

---

### Section 6: Contact

**Layout:** Centered content with icon links

```
[Section Title]
Let's Build Something Great

[Subheadline]
Currently open to full-time opportunities and freelance projects.
Let's talk about how I can help your team succeed.

[Contact Methods - Icon Grid]
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Email     │  │  LinkedIn   │  │   GitHub    │
│ mdiaan442@  │  │ /mohamed-   │  │  /mdiaa     │
│  gmail.com  │  │ diaa-...    │  │             │
└─────────────┘  └─────────────┘  └─────────────┘

[Primary CTA]
[Send Me an Email →]

[Secondary Text]
Based in Cairo, Egypt • Available for remote work worldwide
```

---

### Footer

```
[Simple, Clean]
────────────────────────────────────────────
© 2025 Mohamed Diaa. Built with React & ❤️

[Links]
LinkedIn • GitHub • Email
```

---

## 🎬 Animation & Interaction Patterns

### Scroll Animations
```javascript
- Fade In: Opacity 0 → 1, Y offset 40px → 0
- Stagger: Child elements delay by 100ms
- Trigger: Element enters viewport (threshold: 0.1)
- Duration: 600ms
- Easing: ease-out
```

### Hover Effects
```javascript
Cards:
  - Scale: 1 → 1.02
  - Shadow: Increase spread & blur
  - Border: Subtle glow (cyan)
  
Buttons:
  - Scale: 1 → 1.05
  - Shadow: Increase with color
  - Background: Brighten 10%
  
Links:
  - Underline: Width 0 → 100%
  - Color: Slate → Cyan
```

### Navigation Behavior
```javascript
- Smooth scroll: scrollBehavior: 'smooth'
- Active section: Intersection Observer
- Header background: Scroll > 50px → solid
- Mobile menu: Slide from right, backdrop blur
```

---

## 📱 Responsive Design Specifications

### Breakpoints
```
Mobile:  < 640px
Tablet:  640px - 1024px
Desktop: 1024px - 1536px
Wide:    > 1536px
```

### Layout Adaptations

**Mobile (< 640px):**
- Single column
- Stacked sections
- Hamburger menu
- Touch-friendly buttons (min 44px)
- Reduced padding (24px)

**Tablet (640px - 1024px):**
- 2-column grids
- Expanded timeline
- Side-by-side content blocks
- Medium padding (40px)

**Desktop (> 1024px):**
- 3-column grids
- Full timeline visualization
- Hover effects active
- Maximum content width: 1280px
- Large padding (80px)

---

## ⚡ Performance Requirements

| Metric | Target | How to Achieve |
|--------|--------|----------------|
| **First Contentful Paint** | < 1.5s | Code splitting, lazy loading |
| **Largest Contentful Paint** | < 2.5s | Optimize images, minimize JS |
| **Time to Interactive** | < 3.0s | Defer non-critical JS |
| **Cumulative Layout Shift** | < 0.1 | Fixed dimensions, no dynamic |
| **Bundle Size** | < 200KB | Tree shaking, minification |
| **Lighthouse Score** | > 95 | Follow all best practices |

### Optimization Strategies
1. **Images:** WebP format, lazy loading, responsive srcset
2. **Fonts:** Preload critical fonts, font-display: swap
3. **Code Splitting:** Route-based chunks
4. **Caching:** Service worker for static assets
5. **Minification:** Terser for JS, cssnano for CSS

---

## ♿ Accessibility Standards

**WCAG 2.1 Level AA Compliance:**

- **Color Contrast:** Minimum 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation:** Full site navigable with Tab/Enter
- **Focus Indicators:** Visible outline on all interactive elements
- **Alt Text:** Descriptive text for all images
- **ARIA Labels:** Proper labeling for screen readers
- **Semantic HTML:** h1→h6 hierarchy, nav, main, footer tags
- **Skip Links:** "Skip to main content" for screen readers

---

## 🔍 SEO Requirements

### Meta Tags
```html
<title>Mohamed Diaa - Full-Stack Software Engineer | React, Node.js, Python</title>
<meta name="description" content="Full-stack engineer specializing in microservices, high-performance systems. Proven track record with 90% performance improvements.">
<meta name="keywords" content="software engineer, full-stack developer, React, Node.js, NestJS, microservices">
```

### Open Graph
```html
<meta property="og:title" content="Mohamed Diaa - Software Engineer">
<meta property="og:description" content="Building scalable web solutions with real impact">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://mohameddiaa.me">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mohamed Diaa",
  "jobTitle": "Software Engineer",
  "description": "Full-Stack Developer specializing in microservices",
  "url": "https://mohameddiaa.me"
}
```

---

## 🚀 Deployment Configuration

**Platform:** Vercel (Recommended) or Netlify

**Build Settings:**
```bash
Build Command: npm run build
Output Directory: dist
Node Version: 18.x
```

**Environment Variables:**
```
VITE_CONTACT_EMAIL=mdiaan442@gmail.com
VITE_LINKEDIN_URL=https://linkedin.com/in/mohamed-diaa-03986b1ab/
VITE_GITHUB_URL=https://github.com/yourusername
```

**Custom Domain:**
- Primary: mohameddiaa.me
- SSL: Auto (Let's Encrypt)
- CDN: Enabled globally

---

## 📊 Success Metrics

### Engagement Metrics
- Average session duration: > 2 minutes
- Bounce rate: < 40%
- Resume downloads: Track via analytics
- Contact form submissions: > 5/month

### Technical Metrics
- Lighthouse Performance: > 95
- Core Web Vitals: All green
- Zero console errors
- 99.9% uptime

---

## 🔄 Content Update Strategy

**Frequency:** Monthly review, quarterly major updates

**Easy Updates via config/content.js:**
```javascript
// Add new job experience
experiences: [
  {
    company: "New Company",
    role: "Senior Engineer",
    duration: "Jan 2026 - Present",
    achievements: [...],
    techStack: [...]
  }
]

// Add new project
projects: [
  {
    title: "New Project",
    description: "...",
    tech: [...],
    link: "..."
  }
]
```

**No code changes required** - all content lives in one config file!

---

## ✅ Launch Checklist

### Pre-Launch
- [ ] All sections populated with real content
- [ ] Resume PDF uploaded and linked
- [ ] All external links tested (LinkedIn, email)
- [ ] Mobile responsive on iOS & Android
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
- [ ] Lighthouse audit passed (>95 score)
- [ ] SEO meta tags verified
- [ ] Analytics installed (Google Analytics/Umami)
- [ ] Custom domain configured
- [ ] SSL certificate active

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Share on LinkedIn, GitHub profile
- [ ] Monitor analytics for first week
- [ ] Gather feedback from peers
- [ ] A/B test CTA buttons

---

**End of PRD**

*This document serves as the single source of truth for the portfolio website. All design decisions, content structure, and technical requirements are defined here.*



