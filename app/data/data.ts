// src/data/data.ts
export const portfolioData = {
  personal: {
    name: "Alex Johnson",
    title: "Full Stack Software Engineer",
    location: "San Francisco, CA",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate software engineer with 5+ years of experience building scalable web applications. I love creating beautiful, functional solutions that make a real impact.",
    avatar: "/api/placeholder/150/150"
  },
  
  skills: [
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "Next.js", level: 85, category: "Framework" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Python", level: 82, category: "Language" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "AWS", level: 75, category: "Cloud" },
    { name: "Docker", level: 78, category: "DevOps" }
  ],

  experience: [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Led development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%.",
      technologies: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "Remote",
      description: "Built entire frontend application from scratch using React and TypeScript. Developed RESTful APIs handling 10k+ requests daily.",
      technologies: ["React", "TypeScript", "Express", "MongoDB"]
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      location: "New York, NY",
      description: "Created responsive web applications for Fortune 500 clients. Collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      github: "https://github.com/alexjohnson/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com/alexjohnson/task-manager",
      demo: "https://taskmanager-demo.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard showing weather patterns and climate trends with interactive charts.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      github: "https://github.com/alexjohnson/weather-dashboard",
      demo: "https://weather-analytics.vercel.app",
      featured: false
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      duration: "2015 - 2019",
      gpa: "3.8/4.0",
      relevant: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"]
    }
  ],

  social: {
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson_dev",
    website: "https://alexjohnson.dev"
  }
};