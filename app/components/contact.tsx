'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/data';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { personal, social } = portfolioData;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-bl from-purple-500/10 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-purple-100/70 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
              <h3 className="text-2xl font-semibold text-purple-200 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30">
                    <svg className="w-6 h-6 text-purple-200" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-100/60 text-sm">Email</p>
                    <p className="text-purple-200 font-medium">{personal.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30">
                    <svg className="w-6 h-6 text-purple-200" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-100/60 text-sm">Phone</p>
                    <p className="text-purple-200 font-medium">{personal.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30">
                    <svg className="w-6 h-6 text-purple-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-100/60 text-sm">Location</p>
                    <p className="text-purple-200 font-medium">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20">
              <h3 className="text-2xl font-semibold text-pink-200 mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg border border-purple-400/20 hover:border-pink-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-6 h-6 text-purple-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-purple-100/80 text-sm">GitHub</span>
                </a>

                <a 
                  href={social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg border border-purple-400/20 hover:border-pink-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-6 h-6 text-purple-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                  </svg>
                  <span className="text-purple-100/80 text-sm">LinkedIn</span>
                </a>

                <a 
                  href={social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg border border-purple-400/20 hover:border-pink-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-6 h-6 text-purple-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                  <span className="text-purple-100/80 text-sm">Twitter</span>
                </a>

                <a 
                  href={social.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg border border-purple-400/20 hover:border-pink-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-6 h-6 text-purple-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-purple-100/80 text-sm">Website</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
            <h3 className="text-2xl font-semibold text-purple-200 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-purple-100/80 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-purple-900/20 backdrop-blur-sm border border-purple-400/30 rounded-lg text-purple-100 placeholder-purple-300/50 focus:outline-none focus:border-pink-400/50 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-purple-100/80 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-purple-900/20 backdrop-blur-sm border border-purple-400/30 rounded-lg text-purple-100 placeholder-purple-300/50 focus:outline-none focus:border-pink-400/50 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-purple-100/80 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-purple-900/20 backdrop-blur-sm border border-purple-400/30 rounded-lg text-purple-100 placeholder-purple-300/50 focus:outline-none focus:border-pink-400/50 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-purple-100/80 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-purple-900/20 backdrop-blur-sm border border-purple-400/30 rounded-lg text-purple-100 placeholder-purple-300/50 focus:outline-none focus:border-pink-400/50 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg text-purple-100 hover:from-purple-500/30 hover:to-pink-500/30 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;