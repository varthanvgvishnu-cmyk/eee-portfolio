import React from 'react';
import About from './components/About';
import Achievements from './components/Achievements';
import AmbientBackground from './components/AmbientBackground';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
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
    <div className="relative min-h-screen bg-[#030503] text-emerald-100 overflow-x-clip">
      {/* Interactive White Glowing Cursor Effect */}
      <CursorGlow />

      {/* Dynamic Ambient Background with Neon Green Glow Blobs and Circuit Grid */}
      <AmbientBackground />

      {/* Real-time Spring Scroll Progress Bar */}
      <ScrollProgress />

      {/* Liquid Glass Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Scrollytelling Home Block with scroll-driven background video */}
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
