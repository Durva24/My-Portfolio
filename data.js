const portfolioData = {
    personal: {
        name: "Durva Dongre",
        title: "Software Development Engineer (AI/ML)",
        image: "profile.jpeg",
        email: "durvadongre@gmail.com",
        phone: "+91-8268300074",
        location: "Panvel, Mumbai, Maharashtra, India",
        linkedin: "https://www.linkedin.com/in/durvadongre",
        github: "https://github.com/durva24"
    },
    
    about: "Dynamic and results-driven Software Engineer with expertise in AI/ML, building scalable ML pipelines, NLP applications, and robust production deployments. Experienced in handling high-volume data (100K+ records/day) with ultra-low latency (<2s). Passionate about applying cutting-edge AI techniques to create tangible business value.",
    
    education: {
        degree: "Bachelor of Engineering",
        field: "Electronics & Computer Science",
        institution: "Pillai HOC College of Engineering & Technology",
        duration: "2022 - 2026"
    },
    
    skills: {
        languages: ["Java", "C++", "Python", "SQL"],
        frameworks: ["React.js", "TensorFlow", "Keras", "Transformers", "Scikit-learn", "Next.js", "Node.js"],
        databases_cloud: ["AWS (Lambda, S3, EC2)", "Firebase", "PostgreSQL", "MongoDB", "BigQuery"],
        competencies: ["Backend Development", "Data Engineering", "NLP", "Deep Learning", "LLMs", "Scalable Systems", "REST APIs"]
    },
    
    projects: [
        {
            title: "AI NLP News Justice Tracking Engine",
            company: "Deadline",
            duration: "Jul 2025 - Aug 2025",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%231a1a2e' width='400' height='300'/%3E%3Cpath fill='%23e50914' d='M50 150 L200 50 L350 150 L200 250 Z' opacity='0.3'/%3E%3C/svg%3E",
            points: [
                "Built AI platform to track news headlines until resolution, processing 10k+ daily articles",
                "Implemented event linking & update detection using NLP models for persistent story tracking",
                "Improved user retention by 35% through consistent content updates"
            ]
        },
        {
            title: "AI-Based Career Assistant Platform",
            company: "JobsForHer",
            duration: "Mar 2025 - May 2025",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%230f3460' width='400' height='300'/%3E%3Ccircle fill='%23e50914' cx='200' cy='150' r='80' opacity='0.4'/%3E%3C/svg%3E",
            points: [
                "Built & deployed an AI chatbot providing personalized career recommendations",
                "Designed and deployed the system to reliably support 5K+ daily user interactions"
            ]
        },
        {
            title: "Search Engine Powered by AI",
            company: "Peekaboo",
            duration: "Jan 2025 - Jun 2025",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23533483' width='400' height='300'/%3E%3Cpath fill='%23e50914' d='M100 100 Q200 50 300 100 T300 200 Q200 250 100 200 Z' opacity='0.3'/%3E%3C/svg%3E",
            points: [
                "Built internal research tool automating data collection from 20+ online sources",
                "Developed semantic search for 100K+ documents using vector embeddings and transformer models",
                "Optimized query pipelines to achieve sub-<2s retrieval latency"
            ]
        },
        {
            title: "Environmental ML Prediction System",
            company: "Project Parisar",
            duration: "Jun 2025 - Aug 2025",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23094d29' width='400' height='300'/%3E%3Cpath fill='%23e50914' d='M50 250 Q100 200 150 220 T250 180 T350 200 L350 300 L50 300 Z' opacity='0.4'/%3E%3C/svg%3E",
            points: [
                "Engineered ensemble ML models (XGBoost, Random Forest) for AQI & water quality prediction",
                "Achieved 15% improvement in prediction accuracy over baseline methods",
                "Developed real-time ETL pipelines ingesting 50K+ environmental records/day"
            ]
        }
    ],
    
    achievements: [
        { stat: "100K+", label: "Data Records/Day" },
        { stat: "<2s", label: "Latency Target" },
        { stat: "35%", label: "User Retention Increase" },
        { stat: "5K+", label: "Daily Interactions" }
    ]
};

function renderPortfolio() {
    const container = document.getElementById('portfolio-content');
    if (!container) return;

    const renderSkills = (skills) => skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
    
    const createProjectCard = (project, index) => {
        return `
            <div class="card">
                <img src="${project.image}" alt="${project.title}" class="card-image">
                <div class="card-overlay">
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-subtitle">${project.company}</p>
                    <p class="card-duration">${project.duration}</p>
                </div>
            </div>
        `;
    };

    const html = `
        <!-- Navigation Bar -->
        <nav class="navbar" id="navbar">
            <div class="logo">${portfolioData.personal.name.split(' ')[0].toUpperCase()}</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <!-- Hero Section -->
        <section class="hero-section" id="home">
            <div class="hero-content">
                <h1 class="hero-title">${portfolioData.personal.name}</h1>
                <p class="hero-subtitle">${portfolioData.personal.title}</p>
                <p class="hero-description">${portfolioData.about}</p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">
                        ▶ View Projects
                    </a>
                    <a href="#contact" class="btn btn-secondary">
                        ⓘ More Info
                    </a>
                </div>
            </div>
        </section>

        <!-- Content Wrapper -->
        <div class="content-wrapper">
            
            <!-- Projects Section -->
            <section class="section" id="projects">
                <h2 class="section-title">Featured Projects</h2>
                <div class="card-grid">
                    ${portfolioData.projects.map((proj, idx) => createProjectCard(proj, idx)).join('')}
                </div>
            </section>

            <!-- Skills Section -->
            <section class="section" id="skills">
                <h2 class="section-title">Technical Skills</h2>
                <div class="skills-container">
                    <div class="skill-category">
                        <h3>Languages</h3>
                        <div class="skill-tags">
                            ${renderSkills(portfolioData.skills.languages)}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Frameworks & Libraries</h3>
                        <div class="skill-tags">
                            ${renderSkills(portfolioData.skills.frameworks)}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Databases & Cloud</h3>
                        <div class="skill-tags">
                            ${renderSkills(portfolioData.skills.databases_cloud)}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Core Competencies</h3>
                        <div class="skill-tags">
                            ${renderSkills(portfolioData.skills.competencies)}
                        </div>
                    </div>
                </div>
            </section>

            <!-- Achievements Section -->
            <section class="section">
                <h2 class="section-title">Key Achievements</h2>
                <div class="card-grid">
                    ${portfolioData.achievements.map(ach => `
                        <div class="card" style="display: flex; flex-direction: column; justify-content: center; align-items: center; background: linear-gradient(135deg, var(--color-darker) 0%, #1a1a2e 100%);">
                            <div style="font-family: var(--font-serif); font-size: 3rem; font-weight: 900; color: var(--color-accent);">${ach.stat}</div>
                            <div style="font-size: 1rem; color: var(--color-light); margin-top: 10px;">${ach.label}</div>
                        </div>
                    `).join('')}
                </div>
            </section>

        </div>

        <!-- Footer -->
        <footer class="footer" id="contact">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Education</h3>
                    <ul>
                        <li>${portfolioData.education.degree}</li>
                        <li>${portfolioData.education.field}</li>
                        <li>${portfolioData.education.institution}</li>
                        <li>${portfolioData.education.duration}</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li>📧 ${portfolioData.personal.email}</li>
                        <li>📱 ${portfolioData.personal.phone}</li>
                        <li>📍 ${portfolioData.personal.location}</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="${portfolioData.personal.linkedin}" target="_blank">LinkedIn</a></li>
                        <li><a href="${portfolioData.personal.github}" target="_blank">GitHub</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 ${portfolioData.personal.name}. All rights reserved.</p>
            </div>
        </footer>
    `;
    
    container.innerHTML = html;

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', renderPortfolio);
