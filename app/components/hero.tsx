// src/components/Hero.tsx
import React from 'react';
import { portfolioData } from '../data/data';

const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-l from-purple-600/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm border border-purple-300/30 overflow-hidden">
                <img 
                  src={personal.avatar} 
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
            {personal.name}
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-purple-200/90 mb-6 font-light">
            {personal.title}
          </h2>

          {/* Bio */}
          <p className="text-lg text-pink-100/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            {personal.bio}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center text-purple-200/70 mb-8">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {personal.location}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-100 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-400/30 rounded-full text-pink-100 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-purple-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-300/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;