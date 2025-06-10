// src/components/Projects.tsx
import React from 'react';
import { portfolioData } from '../data/data';

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-purple-100/70 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating impactful solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-400/20 hover:border-pink-400/30 transition-all duration-500 transform hover:scale-105">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-500/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-pink-500/80 backdrop-blur-sm rounded-full text-white hover:bg-pink-500 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-200 mb-3 group-hover:text-pink-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-purple-100/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-sm text-purple-100/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-purple-200 mb-4">Other Notable Projects</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="group">
                  <div className="bg-gradient-to-br from-purple-900/15 to-pink-900/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/10 hover:border-pink-400/20 transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2 group-hover:text-pink-200 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-purple-100/70 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-purple-500/10 border border-purple-400/20 rounded text-xs text-purple-100/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-purple-100/50">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-pink-300 transition-colors text-sm flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                        </svg>
                        Demo
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-pink-300 transition-colors text-sm flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;