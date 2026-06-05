import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  return (
    <div className="port">
      <div className="browser-bar">
        <div className="browser-dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <span className="url">Email: vivekkumarhari03@gmail.com</span>
      </div>
      <div className="site">
        <Header resumeLink={portfolioData.socialLinks.resume} />
        <Hero data={portfolioData} />
        <FeaturedWork projects={portfolioData.projects} githubLink={portfolioData.socialLinks.github} />
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Contact contact={portfolioData.contact} socialLinks={portfolioData.socialLinks} />
      </div>
    </div>
  );
}

export default App;
