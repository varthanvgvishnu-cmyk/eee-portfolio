import React from 'react';
import About from './components/About';
import Achievements from './components/Achievements';
import AmbientBackground from './components/AmbientBackground';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Internship from './components/Internship';
import LearningLog from './components/LearningLog';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';
import ScrollyHero from './components/ScrollyHero';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#060a14] text-slate-100">

      <AmbientBackground />

      <ScrollProgress />

      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <ScrollyHero />

        {/* Engineering Biography & CIT EEE Education */}
        <About />

        {/* Categorized Projects with Deep Dive Modal & Truth Disclosures */}
        <Projects />

        {/* Technical Competencies with Interactive Category Filter */}
        <Skills />

        {/* Auto Print Machinery Industrial Switchgear & VFD Showcase */}
        <Internship />

        {/* VISION X & Y'HACK Podiums with Interactive Confetti */}
        <Achievements />

        {/* Practical Engineering Journal & Debugging Notes */}
        <LearningLog />

        {/* Liquid Glass Contact Terminal & Configurable Social Links */}
        <Contact />
      </main>

      {/* Engineering Footer with Telemetry Clock */}
      <Footer />
    </div>
  );
}
