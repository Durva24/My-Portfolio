'use client';

// src/pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

const Portfolio: React.FC = () => {
  return (
    <>
      <Head>
        <title>Alex Johnson - Full Stack Software Engineer</title>
        <meta name="description" content="Passionate software engineer with 5+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="software engineer, full stack developer, react, node.js, typescript, web development" />
        <meta property="og:title" content="Alex Johnson - Full Stack Software Engineer" />
        <meta property="og:description" content="Passionate software engineer with 5+ years of experience building scalable web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alexjohnson.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-purple-900">
        {/* Fixed Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-800/20 backdrop-blur-md border-b border-purple-400/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                AJ
              </div>
              
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-purple-100/80 hover:text-pink-200 transition-colors duration-300 font-medium">
                  Home
                </a>
                <a href="#about" className="text-purple-100/80 hover:text-pink-200 transition-colors duration-300 font-medium">
                  About
                </a>
                <a href="#projects" className="text-purple-100/80 hover:text-pink-200 transition-colors duration-300 font-medium">
                  Projects
                </a>
                <a href="#contact" className="text-purple-100/80 hover:text-pink-200 transition-colors duration-300 font-medium">
                  Contact
                </a>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden text-purple-200 hover:text-pink-200 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative">
          {/* Hero Section */}
          <section id="home">
            <Hero />
          </section>

          {/* About Section */}
          <About />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <Contact />

          {/* Footer */}
          <footer className="py-12 relative">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-8"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="text-purple-100/60 mb-4 md:mb-0">
                    © 2024 Alex Johnson. All rights reserved.
                  </div>
                  
                  <div className="flex space-x-6">
                    <a 
                      href="https://github.com/alexjohnson" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-100/60 hover:text-pink-200 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/alexjohnson" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-100/60 hover:text-pink-200 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com/alexjohnson_dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-100/60 hover:text-pink-200 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-purple-700/30 backdrop-blur-sm border border-purple-400/30 rounded-full flex items-center justify-center text-purple-200 hover:bg-purple-600/40 transition-all duration-300 transform hover:scale-110 z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </main>
    </>
  );
};

export default Portfolio;