const portfolioData = {
    personal: {
        name: "Durva Dongre",
        title: "Software Development Engineer (AI/ML)",
        // Make sure this image path is correct relative to your HTML file
        image: "images/profile.jpeg", 
        email: "durvadongre@gmail.com",
        phone: "+91-8268300074",
        location: "Panvel, Mumbai, Maharashtra, India",
        linkedin: "https://www.linkedin.com/in/durvadongre",
        github: "https://github.com/durvadongre"
    },
    
    about: "AI/ML-focused Software Engineer skilled in building scalable ML pipelines, NLP applications & deployments. Experienced in handling 100K+ data records/day with <2s latency.",
    
    education: {
        degree: "Bachelor of Engineering",
        field: "Electronics & Computer Science",
        institution: "Pillai HOC College of Engineering & Technology",
        duration: "2022 - 2026"
    },
    
    skills: {
        languages: ["Java", "C++", "Python"],
        frameworks: ["React.js", "Next.js", "Node.js", "Expo", "TensorFlow", "Keras", "Transformers", "Scikit-learn"],
        databases: ["Firebase", "Supabase", "PostgreSQL", "AWS", "MongoDB", "BigQuery", "Lambda", "S3", "EC2"],
        competencies: ["Backend Development", "REST APIs", "Data Engineering", "NLP", "Deep Learning", "LLMs", "Scalable Systems"]
    },
    
    projects: [
        {
            title: "AI NLP News Justice",
            company: "Deadline",
            duration: "Jul 2025 - Aug 2025",
            points: [
                "Built AI platform processing 10k+ daily articles",
                "Event linking & update detection",
                "Improved user retention by 35%"
            ]
        },
        {
            title: "AI Career Assistant",
            company: "JobsForHer",
            duration: "Mar 2025 - May 2025",
            points: [
                "AI chatbot for career recommendations",
                "5K+ daily interactions with reliable uptime",
                "Personalized for women professionals"
            ]
        },
        {
            title: "AI Powered Search",
            company: "Peekaboo",
            duration: "Jan 2025 - Jun 2025",
            points: [
                "Internal research tool, 20+ sources",
                "Semantic search for 100K+ docs",
                "<2s retrieval latency via Vector DB"
            ]
        },
        {
            title: "Env Prediction System",
            company: "Project Parisar",
            duration: "Jun 2025 - Aug 2025",
            points: [
                "Ensemble ML (XGBoost) for AQI",
                "Improved accuracy by 15%",
                "ETL pipelines for 50K+ records/day"
            ]
        },
        {
            title: "BullsEye Finance",
            company: "Zerodha (Open Source)",
            duration: "May 2025 - Present",
            points: [
                "Personalized finance dashboard",
                "Smart insights via ML models",
                "Investment decision visualizations"
            ]
        }
    ]
};

// Function to render the portfolio (Netflix Style)
function renderPortfolio() {
    const container = document.getElementById('portfolio-content');
    
    // --- Helper to create a Project Card ---
    const createProjectCard = (project, index) => {
        return `
            <div class="row-poster">
                <div class="card-image-placeholder">
                   <span>TOP 10</span>
                   <h3>${project.title.charAt(0)}${project.title.charAt(1)}</h3>
                </div>
                <div class="card-details">
                    <div>
                        <div class="card-meta">98% Match &nbsp; ${project.duration.split(' ')[0]}</div>
                        <div class="card-title">${project.title}</div>
                        <div class="card-desc">${project.points[0]}</div>
                    </div>
                    <div style="font-size: 0.7rem; color: #777; margin-top: 5px;">
                        ${project.company}
                    </div>
                </div>
            </div>
        `;
    };

    // --- Helper to create a Skill Card ---
    const createSkillCard = (skillName, category) => {
        return `
            <div class="row-poster" style="min-width: 180px; max-width: 180px;">
                <div class="card-image-placeholder" style="height: 100px; background: #222;">
                   <h4 style="color: #E50914;">${skillName}</h4>
                </div>
                <div class="card-details" style="height: auto; padding: 10px;">
                    <div class="card-desc" style="text-align: center;">${category}</div>
                </div>
            </div>
        `;
    };

    // Combine all skills for the carousel
    const allSkills = [
        ...portfolioData.skills.languages.map(s => ({name: s, cat: "Language"})),
        ...portfolioData.skills.frameworks.map(s => ({name: s, cat: "Framework"})),
        ...portfolioData.skills.databases.map(s => ({name: s, cat: "Cloud/DB"}))
    ];

    const html = `
        <div class="nav">
            <a href="#" class="nav-logo">DURVA.AI</a>
            <img src="${portfolioData.personal.image}" alt="Profile" class="nav-avatar">
        </div>

        <header class="banner">
            <img src="${portfolioData.personal.image}" class="banner-image-bg" alt="Hero Background">
            <div class="banner-contents">
                <h1 class="banner-title">${portfolioData.personal.name}</h1>
                <div style="margin-bottom: 15px;">
                    <span class="match-score">99% Match</span>
                    <span class="year-tag">2025</span>
                    <span class="year-tag">U/A 18+</span>
                    <span style="font-weight: bold; margin-left: 5px;">AI Engineer</span>
                </div>
                <h1 class="banner-description">
                    ${portfolioData.personal.title}.<br>
                    ${portfolioData.about.split('.')[0]}.
                </h1>
                <div class="banner-buttons">
                    <a href="${portfolioData.personal.linkedin}" target="_blank" class="banner-button play">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        Connect
                    </a>
                    <a href="${portfolioData.personal.github}" target="_blank" class="banner-button info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7h2v2h-2zm0 4h2v6h-2z"/></svg>
                        GitHub Work
                    </a>
                </div>
            </div>
        </header>

        <div class="row">
            <h2>Blockbuster Projects</h2>
            <div class="row-posters">
                ${portfolioData.projects.map((proj, index) => createProjectCard(proj, index)).join('')}
            </div>
        </div>

        <div class="row">
            <h2>Top Technologies</h2>
            <div class="row-posters">
                ${allSkills.map(skill => createSkillCard(skill.name, skill.cat)).join('')}
            </div>
        </div>

        <div class="row">
            <h2>Education & Stats</h2>
            <div class="row-posters">
                <div class="row-poster" style="min-width: 350px;">
                    <div class="card-image-placeholder">
                        <span style="border-color: #46d369;">DEGREE</span>
                        <h3>B.E.</h3>
                    </div>
                    <div class="card-details">
                         <div class="card-title">${portfolioData.education.degree}</div>
                         <div class="card-desc">${portfolioData.education.field}</div>
                         <div class="card-meta" style="margin-top: 10px;">${portfolioData.education.institution}</div>
                    </div>
                </div>

                <div class="row-poster" style="min-width: 250px;">
                    <div class="card-image-placeholder" style="background: #111;">
                        <h1 style="color: #46d369;">100K+</h1>
                    </div>
                    <div class="card-details" style="height: auto;">
                        <div class="card-title" style="text-align: center;">Records Processed/Day</div>
                    </div>
                </div>

                <div class="row-poster" style="min-width: 250px;">
                    <div class="card-image-placeholder" style="background: #111;">
                        <h1 style="color: #46d369;">< 2s</h1>
                    </div>
                    <div class="card-details" style="height: auto;">
                        <div class="card-title" style="text-align: center;">Latency Achieved</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>Questions? Contact ${portfolioData.personal.email}</p>
            <div style="margin-top: 10px;">
                <a href="${portfolioData.personal.linkedin}">LinkedIn</a>
                <a href="${portfolioData.personal.github}">GitHub</a>
                <a href="mailto:${portfolioData.personal.email}">Email</a>
            </div>
            <p style="margin-top: 20px; font-size: 0.7rem; color: #555;">© 2025 Durva Dongre. No Rights Reserved. Just Kidding.</p>
        </div>
    `;
    
    container.innerHTML = html;
}

// Render the portfolio when the page loads
document.addEventListener('DOMContentLoaded', renderPortfolio);
