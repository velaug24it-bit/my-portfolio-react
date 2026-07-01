// src/components/ProjectsSection.jsx
import React, { useState } from 'react';
import './ProjectSection.css';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Updated projects with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Farmlink Website',
      category: 'fullstack',
      description: 'An agricultural e-commerce platform connecting farmers directly with consumers. Features include product listings, cart system, payment integration, and farmer dashboard.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python Flask', 'MySQL', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlJTIwZmFybXxlbnwwfHwwfHx8MA%3D%3D',
      github: 'https://github.com/velaug24it-bit/fmarmertobuyer',
      live: 'https://farmer-to-buyer-website.onrender.com/'
    },
    {
      id: 2,
      title: 'Plant Disease Identification',
      category: 'ai',
      description: 'AI-powered web application that identifies plant diseases from leaf images using deep learning. Provides treatment recommendations and preventive measures.',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'OpenCV', 'SCSS'],
      image: 'https://plus.unsplash.com/premium_photo-1682146995114-7e2acb42a0ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxwbGFudCUyMGlkZW50aWZpY2F0aW9ufGVufDB8fDB8fHww',
      github: 'https://github.com/velaug24it-bit/plantdisease-identification',
      live: 'https://plantdiseaseidentification-0vss.onrender.com/'
    },
    {
      id: 3,
      title: 'Oil Spill Detection',
      category: 'ai',
      description: 'Computer vision system for detecting oil spills in satellite imagery using machine learning algorithms. Features real-time monitoring and alert system.',
      tags: ['Python', 'OpenCV', 'YOLO', 'React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1676827274623-01f89ce12e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG9pbCUyMHNwaWxsJTIwZGV0ZWN0aW9ufGVufDB8fDB8fHww',
      github: 'https://github.com/velaug24it-bit/oil-spil-detection',
      live: 'https://oil-spill-detector.vercel.app'
    },
    {
      id: 4,
      title: 'MediReact - Healthcare App',
      category: 'fullstack',
      description: 'Comprehensive healthcare management application with appointment booking, telemedicine, prescription management, and patient records.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com/velaug24it-bit/medique',
      live: 'https://6a45183a4621ef0008b1868b--stupendous-tanuki-e4e731.netlify.app/'
    },
    {
      id: 5,
      title: 'My Freelance Flow',
      category: 'fullstack',
      description: 'A freelance workflow platform designed to help clients and freelancers manage projects, communication, and deliverables in one place.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com/velaug24it-bit/FreelanceFlow',
      live: 'https://freelanceflow-marketing.netlify.app/'
    },
    {
      id: 6,
      title: 'Real Estate Dashboard',
      category: 'frontend',
      description: 'Interactive dashboard for real estate analytics with interactive maps, property listings, mortgage calculator, and market trends visualization.',
      tags: ['React', 'D3.js', 'Mapbox', 'Chart.js', 'Material-UI', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com/velaug24it-bit/brixspace',
      live: 'https://gilded-basbousa-42c1c8.netlify.app/'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'webdev', name: 'Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => {
        if (activeFilter === 'webdev') {
          return ['frontend', 'fullstack'].includes(project.category);
        }
        return project.category === activeFilter;
      });

  // Function to handle GitHub link click
  const handleGitHubClick = (githubUrl, e) => {
    e.preventDefault();
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  // Function to handle Live Demo click
  const handleLiveDemoClick = (liveUrl, e) => {
    e.preventDefault();
    if (liveUrl && liveUrl !== '#') {
      window.open(liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert('Live demo is not available for this project yet.');
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A showcase of my latest web and AI-driven solutions</p>
          <div className="title-line"></div>
        </div>

        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {/* GitHub Button */}
                    <button 
                      className="project-link github-link"
                      onClick={(e) => handleGitHubClick(project.github, e)}
                      title="View Source Code on GitHub"
                    >
                      <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="link-text">Code</span>
                    </button>
                    
                    {/* Live Demo Button */}
                    <button 
                      className="project-link live-link"
                      onClick={(e) => handleLiveDemoClick(project.live, e)}
                      title="View Live Demo"
                    >
                      <svg className="live-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span className="link-text">Live</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <span className="project-category">
                    {project.category === 'frontend' && 'Frontend'}
                    {project.category === 'fullstack' && 'Full Stack'}
                    {project.category === 'ai' && 'AI/ML'}
                  </span>
                  
                  {/* View Project Button - Goes to GitHub */}
                  <button 
                    className="project-view"
                    onClick={(e) => handleGitHubClick(project.github, e)}
                  >
                    <svg className="github-small-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Explore my GitHub for more projects, APIs, and machine learning experiments.</p>
          <button 
            className="btn btn-primary"
            onClick={() => window.open('https://github.com/velaug24it-bit', '_blank')}
          >
            <svg className="github-cta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


const handleExternalLink = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
<button 
  onClick={() => handleExternalLink('https://github.com/velaug24it-bit')}
  className="btn"
>
  Visit GitHub
</button>