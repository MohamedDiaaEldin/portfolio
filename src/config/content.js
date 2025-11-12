// ==========================================
// PORTFOLIO CONTENT CONFIGURATION
// ==========================================
// Edit this file to update your portfolio content
// No need to touch any React components!

export const personalInfo = {
  name: "Mohamed Diaa",
  title: "Software Engineer – Full-Stack Development",
  tagline: "Building Scalable Web Solutions That Drive Real Impact",
  description: "Full-Stack Software Engineer specializing in microservices, high-performance systems, and seamless integrations.",
  location: "Cairo, Egypt",
  email: "mdiaan442@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamed-diaa-03986b1ab/",
  github: "https://github.com/MohamedDiaaEldin", // Update with your GitHub
  resumeUrl: "/mohamed_diaa_resume.pdf", // Place your resume.pdf in the public folder
  availability: "Currently @ Juthor",
  workMode: "Remote Work"
}

export const hero = {
  greeting: "👋 Hey, I'm Mohamed Diaa",
  headline: "Building Scalable Web Solutions That Drive Real Impact",
  subheadline: "Full-Stack Software Engineer specializing in microservices, high-performance systems, and seamless integrations.",
  cta: {
    primary: "View My Work",
    secondary: "Let's Connect"
  }
}

export const about = {
  title: "About Me",
  description: [
    "I'm a full-stack software engineer with a passion for building systems that scale. Over the past ~3 years, I've worked across diverse domains—from automotive cybersecurity at Vultara to retail microservices at Juthor.",
    
    "I'm skilled in both frontend and backend development using JavaScript, TypeScript, and Python, with strong experience in NestJS, Next.js, React, and Node.js. I'm comfortable working with different system architectures and databases like PostgreSQL and MongoDB.",
    
    "My approach focuses on understanding problems deeply, designing with scalability in mind, and delivering reliable solutions. I'm experienced in integrating external systems, improving performance, and participating in system design discussions. Known for adaptability, problem-solving, and delivering reliable solutions in collaborative environments."
  ],
  highlights: [
    {
      icon: "🚀",
      title: "Performance",
      description: "90% faster systems"
    },
    {
      icon: "🏗️",
      title: "Architecture",
      description: "Microservices architecture"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Cross-functional teams"
    }
  ]
}

export const experiences = [
  {
    id: 1,
    company: "Juthor | جذور",
    role: "Software Engineer",
    type: "Full-time",
    location: "Saudi Arabia",
    workMode: "Remote",
    duration: "Jul 2025 - Present",
    durationShort: "5 months",
    current: true,
    logo: null, // Add logo URL if available
    achievements: [
      "Designed and developed microservices-based architecture, ensuring modularity, scalability, and efficient inter-service communication",
      "Implemented queue systems using Redis to manage asynchronous tasks, enhance performance, and improve system reliability",
      "Built and maintained integrations with external systems and services, including retail platforms and webhook-driven synchronization",
      "Collaborated with cross-functional teams and participated in system design meetings to ensure scalable architecture and domain compliance",
      "Delivered high-performance, maintainable solutions using NestJS, Next.js, and PostgreSQL, optimizing for speed, reliability, and ease of deployment",
      "Configured and implemented a reverse proxy setup to optimize request routing, security, and load management across services"
    ],
    techStack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Microservices", "Docker"]
  },
  {
    id: 2,
    company: "Vultara, Inc.",
    role: "Software Engineer",
    type: "Full-time",
    location: "United States",
    workMode: "Remote",
    duration: "Aug 2024 - Jul 2025",
    durationShort: "1 year",
    current: false,
    logo: null,
    positions: [
      {
        title: "Software Engineer",
        period: "Feb 2025 - Jul 2025",
        achievements: [
          "Led end-to-end development of cybersecurity algorithms, dashboards, and third-party integrations",
          "Improved system performance by up to 90% via optimization, refactoring, and adopting efficient system design tailored for automotive cybersecurity platforms",
          "Participated in code reviews and implemented unit testing and continuous integration to ensure reliable, maintainable solutions within a regulated domain",
          "Collaborated with cross-functional and cross-domain teams to ensure timely delivery, domain compliance, and scalability"
        ]
      },
      {
        title: "Junior Software Engineer",
        period: "Aug 2024 - Feb 2025",
        achievements: [
          "Assisted in developing and maintaining core features in Vultara's cybersecurity domain, including threat modeling, vulnerability tracking, and automotive security workflows",
          "Gained hands-on experience in software scalability, integration practices, and managing security data"
        ]
      }
    ],
    techStack: ["TypeScript", "Node.js", "React", "CI/CD", "Cybersecurity", "Testing"]
  },
  {
    id: 3,
    company: "Fiverr",
    role: "Software Engineer (Freelance)",
    type: "Contract",
    location: "Global",
    workMode: "Remote",
    duration: "Feb 2021 - Jul 2024",
    durationShort: "3.5 years",
    current: false,
    logo: null,
    achievements: [
      "Collaborated with clients to develop custom web applications and features tailored to their business needs",
      "Designed and implemented backend infrastructure for an ERP system used in many universities in Egypt using Python and PostgreSQL, ensuring data consistency, scalability, and performance",
      "Developed and maintained full-stack solutions using modern technologies and frameworks"
    ],
    accomplishments: [
      "Seamlessly integrated a deep learning model into a production-level project",
      "Successfully integrated systems not initially designed for interoperability, showcasing adaptability and problem-solving skills"
    ],
    techStack: ["Python", "Flask", "PostgreSQL", "JavaScript", "Deep Learning", "REST APIs"]
  }
]

export const projects = [
  {
    id: 1,
    title: "Scalable Retail Platform",
    description: "Designed and developed microservices-based architecture with Redis queue systems, reverse proxy configuration, and webhook-driven synchronization for retail platforms.",
    impact: "Optimized for speed, reliability, and ease of deployment",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Docker", "Microservices"],
    link: null, // Add project link if available
    category: "Backend Architecture",
    featured: true
  },
  {
    id: 2,
    title: "Automotive Security Suite",
    description: "Built cybersecurity algorithms, dashboards, and third-party integrations for automotive cybersecurity platforms with real-time threat monitoring and vulnerability tracking.",
    impact: "Improved system performance by up to 90% via optimization and refactoring",
    tech: ["TypeScript", "React", "Node.js", "CI/CD", "Testing"],
    link: null,
    category: "Full-Stack",
    featured: true
  },
  {
    id: 3,
    title: "University ERP System",
    description: "Designed and implemented backend infrastructure for an ERP system used in many universities in Egypt using Python and PostgreSQL, ensuring data consistency, scalability, and performance.",
    impact: "Supporting multiple universities with scalable architecture",
    tech: ["Python", "Flask", "PostgreSQL", "REST APIs"],
    link: null,
    category: "Backend Development",
    featured: true
  },
  {
    id: 4,
    title: "Deep Learning Integration",
    description: "Seamlessly integrated a deep learning model into a production-level project.",
    impact: "Successfully deployed in production environment",
    tech: ["Python", "Deep Learning", "Flask"],
    link: null,
    category: "Machine Learning",
    featured: false
  },
  {
    id: 5,
    title: "System Integration",
    description: "Successfully integrated systems not initially designed for interoperability, showcasing adaptability and problem-solving skills.",
    impact: "Enabled seamless communication between disparate systems",
    tech: ["Node.js", "Python", "REST APIs", "Webhooks"],
    link: null,
    category: "Integration",
    featured: false
  }
]

export const skills = {
  categories: [
    {
      id: "frontend",
      name: "Frontend",
      skills: [
        { name: "JavaScript", level: "advanced" },
        { name: "TypeScript", level: "advanced" },
        { name: "React", level: "advanced" },
        { name: "Next.js", level: "advanced" },
        { name: "Angular", level: "intermediate" },
        { name: "HTML5", level: "advanced" },
        { name: "CSS3", level: "advanced" },
        { name: "Tailwind CSS", level: "advanced" }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      skills: [
        { name: "Node.js", level: "advanced" },
        { name: "NestJS", level: "advanced" },
        { name: "Express.js", level: "advanced" },
        { name: "Python", level: "advanced" },
        { name: "Flask", level: "advanced" },
        { name: "PostgreSQL", level: "advanced" },
        { name: "MongoDB", level: "intermediate" },
        { name: "Redis", level: "advanced" },
        { name: "REST APIs", level: "advanced" }
      ]
    },
    {
      id: "devops",
      name: "DevOps & Tools",
      skills: [
        { name: "Docker", level: "advanced" },
        { name: "Git", level: "advanced" },
        { name: "Linux", level: "advanced" },
        { name: "CI/CD", level: "advanced" },
        { name: "GitHub Actions", level: "intermediate" },
        { name: "Nginx", level: "intermediate" }
      ]
    },
    {
      id: "concepts",
      name: "Concepts & Practices",
      skills: [
        { name: "Microservices", level: "advanced" },
        { name: "System Design", level: "advanced" },
        { name: "OOP", level: "advanced" },
        { name: "SOLID Principles", level: "advanced" },
        { name: "Data Structures", level: "advanced" },
        { name: "Algorithms", level: "advanced" },
        { name: "Clean Code", level: "advanced" }
      ]
    }
  ]
}

export const education = {
  degree: "Bachelor's Degree in Management Information Systems",
  institution: "Higher Institute of Advanced Studies",
  location: "Cairo, Egypt",
  period: "2018 - 2022",
  honors: "Graduated with Excellent Honors"
}

export const contact = {
  title: "Let's Build Something Great",
  subtitle: "Currently open to full-time opportunities and freelance projects. Let's talk about how I can help your team succeed.",
  email: personalInfo.email,
  linkedin: personalInfo.linkedin,
  github: personalInfo.github,
  cta: "Send Me an Email",
  availability: "Based in Cairo, Egypt • Available for remote work worldwide"
}

export const footer = {
  copyright: `© ${new Date().getFullYear()} Mohamed Diaa. Built with React & ❤️`,
  links: [
    { name: "LinkedIn", url: personalInfo.linkedin },
    { name: "GitHub", url: personalInfo.github },
    { name: "Email", url: `mailto:${personalInfo.email}` }
  ]
}

// SEO Configuration
export const seo = {
  title: "Mohamed Diaa - Full-Stack Software Engineer | React, Node.js, Python",
  description: "Full-stack software engineer with ~3 years of experience specializing in microservices, high-performance systems, and seamless integrations. Skilled in JavaScript, TypeScript, Python, NestJS, Next.js, and React.",
  keywords: "software engineer, full-stack developer, React, Node.js, NestJS, microservices, Mohamed Diaa, TypeScript, Python",
  ogImage: "/og-image.jpg", // Add this image to public folder
  url: "https://mohameddiaa.me"
}

