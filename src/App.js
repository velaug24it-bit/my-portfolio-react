// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;