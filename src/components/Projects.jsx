import { motion } from 'motion/react';
import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';
import { 
  CircuitBoard, 
  Cpu, 
  ExternalLink,
  Zap 
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Power Electronics & Simulation',
  'Embedded & IoT',
  'Robotics & Hardware',
  'Signal Processing & Control',
  'Computer Vision & Safety'
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="relative z-20 py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] mb-3 shadow-[0_0_15px_rgba(0,255,136,0.12)]">
            <CircuitBoard className="w-3.5 h-3.5" />
            <span>Hardware Builds & Theoretical Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient-neon">Engineering Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#10b981] rounded-full mt-4 shadow-[0_0_10px_#00ff88]" />
        </div>

        {/* Category Filter Pills (Swipable on Phone, Clean Wrap on Desktop) */}
        <div className="w-full md:w-auto flex items-center gap-1.5 bg-white/[0.02] p-1.5 rounded-2xl border border-[#00ff88]/15 backdrop-blur-md overflow-x-auto no-scrollbar pb-1.5 sm:pb-1.5">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 whitespace-nowrap shrink-0 touch-manipulation ${
                selectedCategory === category
                  ? 'bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/40 shadow-[0_0_12px_rgba(0,255,136,0.2)] font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl glass-card border border-[#00ff88]/15 hover:border-[#00ff88]/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Circuit Schematic Preview Banner (If diagram is uploaded) */}
              {project.image ? (
                <div 
                  onClick={() => setActiveProject(project)}
                  className="relative h-44 w-full overflow-hidden bg-black/60 border-b border-[#00ff88]/15 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} circuit schematic`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040804] via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#00ff88]/30 text-[10px] font-mono text-[#00ff88] shadow-md">
                    <CircuitBoard className="w-3 h-3 text-[#00ff88]" />
                    <span>{project.imageBadge || "Circuit Diagram"}</span>
                  </div>
                </div>
              ) : null}

              {/* Card Header & Badges */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-[#00ff88] font-medium">
                    {project.category}
                  </span>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                    project.statusType === 'completed'
                      ? 'bg-[#00ff88]/15 text-[#00ff88] border-[#00ff88]/30 shadow-[0_0_8px_rgba(0,255,136,0.2)]'
                      : project.statusType === 'in-progress'
                      ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                      : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {project.statusBadge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors line-clamp-2 mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                  {project.shortDescription}
                </p>

                {/* Hardware Highlights Teaser */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-200 font-mono">
                    <Cpu className="w-3.5 h-3.5 text-[#00ff88] shrink-0" />
                    <span className="truncate">{project.hardwareSpecs[0]?.item}: {project.hardwareSpecs[0]?.detail}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Zap className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                    <span className="truncate">{project.hardwareSpecs[1]?.item}: {project.hardwareSpecs[1]?.detail}</span>
                  </div>
                </div>
              </div>

              {/* Tags & Action Buttons */}
              <div className="mt-auto p-6 pt-3 border-t border-white/5 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] bg-white/[0.03] text-emerald-200/70 border border-white/5">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] text-slate-500 font-mono">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-white/10 hover:bg-[#00ff88]/20 hover:text-[#00ff88] text-white border border-white/10 hover:border-[#00ff88]/30 transition-all flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <CircuitBoard className="w-3.5 h-3.5 text-[#00ff88]" />
                    <span>{project.pinoutTitle ? "Specs & Math" : "Specs & Circuit"}</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#00ff88]/15 hover:bg-[#00ff88]/25 text-[#00ff88] border border-[#00ff88]/30 hover:border-[#00ff88]/50 transition-all flex items-center justify-center shadow-[0_0_10px_rgba(0,255,136,0.15)]"
                      title={`Launch ${project.liveLabel || "Live Application"}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-[#00ff88]/15 text-slate-300 hover:text-[#00ff88] border border-white/5 hover:border-[#00ff88]/25 transition-all"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Full-Screen Project Deep Dive Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
