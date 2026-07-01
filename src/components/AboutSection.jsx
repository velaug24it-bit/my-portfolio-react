import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const skills = [
    { name: 'React.js', level: 90, color: '#61DAFB' },
    { name: 'Node.js', level: 80, color: '#3C873A' },
    { name: 'Python', level: 85, color: '#3776AB' },
    { name: 'FastAPI', level: 75, color: '#009688' },
    { name: 'MongoDB / MySQL', level: 80, color: '#47A248' },
    { name: 'AI/ML', level: 80, color: '#8E44AD' },
    { name: 'UI/UX Design', level: 85, color: '#FF6B6B' },
  ];

  const experiences = [
    { year: '2024 - Present', role: 'Web Developer & Student Engineer', company: 'HIG AI Inc. / Personal Projects' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know who I am and what I do</p>
          <div className="title-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>My Story</h3>
            <p>
              I’m a Full Stack Developer and AI/ML enthusiast who enjoys turning ideas into practical digital products. My work combines modern frontend development, backend systems, and intelligent features that solve real-world problems.
            </p>
            <p>
              Recently, I’ve expanded my skill set with React, Node.js, Python, FastAPI, databases, and computer vision projects. I focus on building responsive applications with clean architecture, strong user experience, and reliable performance.
            </p>
            <p>
              Beyond coding, I enjoy learning new technologies, improving my problem-solving process, and creating projects that make everyday experiences smarter and easier.
            </p>
            
            <div className="experience-timeline">
              <h4>Experience Timeline</h4>
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{exp.year}</div>
                  <div className="timeline-content">
                    <h5>{exp.role}</h5>
                    <p>{exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-skills">
            <h3>Technical Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-level" 
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="education-card">
              <h4>Education</h4>
              <div className="education-item">
                <div className="edu-icon">🎓</div>
                <div className="edu-details">
                  <h5>Bachelor of Information Technology</h5>
                  <p>Francis Xavier Engineering College | 2024-2028</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;