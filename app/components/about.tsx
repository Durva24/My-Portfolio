// src/components/About.tsx
import React from 'react';
import { portfolioData } from '../data/data';

const About: React.FC = () => {
  const { skills, personal } = portfolioData;

  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
              <h3 className="text-2xl font-semibold text-purple-200 mb-4">My Journey</h3>
              <p className="text-pink-100/80 leading-relaxed mb-4">
                I'm a passionate software engineer with over 5 years of experience in building scalable web applications. 
                My journey started with a curiosity about how things work under the hood, and it has evolved into 
                a career focused on creating innovative solutions that solve real-world problems.
              </p>
              <p className="text-pink-100/80 leading-relaxed">
                I specialize in full-stack development with a particular love for React and Node.js ecosystems. 
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
                or mentoring aspiring developers in the community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20">
              <h3 className="text-2xl font-semibold text-pink-200 mb-4">What I Do</h3>
              <ul className="space-y-3 text-purple-100/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Frontend Development with React, Next.js, and TypeScript
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Backend Development with Node.js and Python
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Cloud Architecture and DevOps with AWS and Docker
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Database Design and Optimization
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-purple-200 mb-8">Technical Skills</h3>
            
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category} className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20">
                <h4 className="text-lg font-medium text-pink-200 mb-4">{category}</h4>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-purple-100/90 font-medium">{skill.name}</span>
                        <span className="text-pink-200/70 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-purple-900/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;