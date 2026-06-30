import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const skills = [
    { name: 'HTML', level: 95, color: '#61DAFB' },
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'CSS', level: 85, color: '#339933' },
    { name: 'React', level: 50, color: '#3178C6' },
    { name: 'Python', level: 75, color: '#3776AB' },
    { name: 'UI/UX Design', level: 85, color: '#FF6B6B' },
  ];

  const experiences = [
    { year: '2024-Present', role: ' Web Developer', company: 'HIG AI Inc.' },
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
              I'm a passionate Full Stack Developer with over 1 years of experience 
              creating digital solutions that make a difference. My journey began 
              with a curiosity about how websites work, which evolved into a career 
              I truly love.
            </p>
            <p>
              I specialize in creating responsive web applications with clean code 
              and intuitive user interfaces. I believe in writing code that's not 
              only functional but also maintainable and scalable.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source 
              projects, learning new technologies, or exploring the outdoors 
              with my camera.
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