import { motion } from 'motion/react';
import React from 'react';
import { education, personalInfo } from '../data/portfolioData';
import { 
  BookOpen, 
  Compass, 
  Cpu, 
  ExternalLink,
  FileText,
  GraduationCap, 
  ShieldCheck, 
  Sparkles, 
  Wrench 
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-20 py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] mb-3 shadow-[0_0_15px_rgba(0,255,136,0.12)]">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Engineering Profile & Background</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          About <span className="text-gradient-neon">Vishnu Varthan</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#10b981] rounded-full mt-4 shadow-[0_0_10px_#00ff88]" />
      </div>

      {/* Main Grid: Biography + Education & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Bio Narrative & Engineering Philosophy (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#00ff88]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-[#00ff88]" />
              <span>The Interdisciplinary Hardware Engineer</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              I'm <strong className="text-white font-semibold">Vishnu Varthan VG</strong>, an <strong className="text-[#00ff88] font-semibold">Electrical and Electronics Engineering</strong> student at <strong className="text-white font-semibold">Chennai Institute of Technology</strong>, passionate about building <span className="text-emerald-300 font-medium">innovative hardware solutions</span> and exploring the intersection of <span className="text-[#00ff88] font-medium">electronics</span>, <span className="text-[#00ff88] font-medium">embedded systems</span>, and <span className="text-emerald-300 font-medium">intelligent technologies</span>.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              My interests span <span className="text-[#00ff88] font-semibold">embedded systems</span>, <span className="text-emerald-300 font-semibold">industrial automation</span>, <span className="text-emerald-300 font-semibold">motor control</span>, and <span className="text-[#00ff88] font-semibold">semiconductor engineering</span>, where I enjoy turning ideas into <strong className="text-white font-semibold">practical prototypes</strong> through hands-on experimentation and continuous learning.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              From developing an <span className="text-[#00ff88] font-medium">ESP32-based smart safe locker</span> and a <span className="text-emerald-300 font-medium">flame-detection rover</span> to exploring <span className="text-[#00ff88] font-medium">ML-driven adaptive noise cancellation</span>, I strive to strengthen my engineering skills through real-world projects and collaborative innovation. With <strong className="text-white font-medium">industrial internship exposure</strong> and <strong className="text-[#00ff88] font-semibold">hackathon achievements</strong>, I'm continuously working toward becoming an engineer who designs <span className="text-emerald-200 font-medium">reliable, efficient, and impactful technologies</span> for the future.
            </p>

            {/* Core Values Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-[#00ff88]/15 flex items-start gap-2.5 hover:border-[#00ff88]/30 transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#00ff88] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Truthful Specifications</h4>
                  <p className="text-[11px] text-slate-400">Strictly differentiating measured hardware from simulation.</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-[#00ff88]/15 flex items-start gap-2.5 hover:border-[#00ff88]/30 transition-colors">
                <Wrench className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Bench Rigor</h4>
                  <p className="text-[11px] text-slate-400">DSO waveform verification, flyback clamping, snubber design.</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-[#00ff88]/15 flex items-start gap-2.5 hover:border-[#00ff88]/30 transition-colors">
                <Compass className="w-4 h-4 text-[#10b981] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Industrial Standards</h4>
                  <p className="text-[11px] text-slate-400">DIN rail layouts, wire ferrule coding, and phase safety.</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-[#00ff88]/15 flex items-start gap-2.5 hover:border-[#00ff88]/30 transition-colors">
                <Sparkles className="w-4 h-4 text-[#4ade80] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Hackathon Tenacity</h4>
                  <p className="text-[11px] text-slate-400">Podium finishes at VISION X and Y'HACK under tight sprints.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="p-3 sm:p-4 rounded-2xl glass-card border border-[#00ff88]/15 hover:border-[#00ff88]/35 text-center">
                <div className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#4ade80] font-mono mb-0.5">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-white mb-0.5">{stat.label}</div>
                <div className="text-[10px] text-emerald-400/80">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education at Chennai Institute of Technology (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#00ff88]/20 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00ff88]/20 to-[#10b981]/20 border border-[#00ff88]/30 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#00ff88] uppercase tracking-wider block">
                  Academic Foundation
                </span>
                <h3 className="text-lg font-bold text-white">{education.institution}</h3>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                <span className="text-slate-400">Degree</span>
                <span className="text-white font-medium">{education.degree}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                <span className="text-slate-400">Specialization</span>
                <span className="text-[#00ff88] font-medium">{education.major}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                <span className="text-slate-400">Affiliation</span>
                <span className="text-slate-200">{education.affiliation}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                <span className="text-slate-400">Duration</span>
                <span className="text-emerald-400 font-mono">{education.period}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                <span className="text-slate-400">Academic Standing</span>
                <span className="text-[#00ff88] font-mono font-bold">{education.cgpa}</span>
              </div>
            </div>

            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#00ff88]" />
              <span>Relevant Coursework & Domains</span>
            </h4>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {education.coreCoursework.map((course) => (
                <span 
                  key={course}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/[0.04] hover:bg-[#00ff88]/10 hover:text-[#00ff88] text-slate-300 border border-white/5 hover:border-[#00ff88]/30 transition-all"
                >
                  {course}
                </span>
              ))}
            </div>

            {/* Direct Resume Download Link */}
            <a
              href={personalInfo.socials.resume}
              download="Vishnu_Varthan_VG_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#00ff88]/10 hover:bg-[#00ff88] text-[#00ff88] hover:text-black border border-[#00ff88]/30 hover:border-[#00ff88] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.1)] group"
            >
              <FileText className="w-4 h-4 text-[#00ff88] group-hover:text-black transition-colors" />
              <span>Download Official Resume (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Engineering Persona Spotlight Badge */}
          <div className="p-5 rounded-3xl glass-card border border-[#00ff88]/20 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl border border-[#00ff88]/30 shrink-0 bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.15)] relative">
              <Cpu className="w-7 h-7" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#00ff88] animate-ping" />
            </div>
            <div>
              <p className="text-xs font-mono text-[#00ff88]">HARDWARE & EMBEDDED SPECIALIST</p>
              <h4 className="text-sm font-bold text-white">Vishnu Varthan VG</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Ready to contribute in core electrical engineering, firmware, and automation roles.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
