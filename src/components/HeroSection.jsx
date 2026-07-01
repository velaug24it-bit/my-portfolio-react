import React from 'react';
import './HeroSection.css';
import profileImage from '../assets/IMG_2843.PNG'; 

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h4 className="hero-greeting">Hello, I'm</h4>
          <h1 className="hero-name">Vel Raj</h1>
          <h2 className="hero-title">Full Stack Developer | AI/ML Enthusiast</h2>
          <p className="hero-description">
            I build responsive web applications, intelligent AI-powered features, and modern user experiences using React, Python, Node.js, and cloud-ready tools.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
       <div className="hero-image">
          <div className="profile-circle">
            <div className="profile-border"></div>
            <div className="profile-glow"></div>
            <div className="profile-image-container">
              <img 
                src={profileImage}
                alt="Vel Raj" 
                className="profile-image"
              />
            </div>
            {/* Decorative dots */}
            <div className="decorative-dot"></div>
            <div className="decorative-dot"></div>
            <div className="decorative-dot"></div>
            <div className="decorative-dot"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
    </section>
  );
};

export default HeroSection;