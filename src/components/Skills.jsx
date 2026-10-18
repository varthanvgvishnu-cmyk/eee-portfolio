import { motion } from 'motion/react';
import React, { useState } from 'react';
import { skills } from '../data/portfolioData';
import { 
  CheckCircle, 
  CircuitBoard, 
  Cpu, 
  Factory, 
  Layers, 
  Terminal, 
  Wrench, 
  Zap 
} from 'lucide-react';

const CATEGORY_ICONS = {
  'Embedded Systems & Microcontrollers': Cpu,
  'Industrial Automation & Switchgear': Factory,
  'Circuit Design & Simulation Tools': CircuitBoard,
  'Programming & Software Tools': Terminal,
  'Core Electrical Engineering': Zap
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="relative z-20 py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] mb-3 shadow-[0_0_15px_rgba(0,255,136,0.12)]">
          <Wrench className="w-3.5 h-3.5" />
          <span>Core Competencies & Tools</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Technical <span className="text-gradient-neon">Skills & Toolchain</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#10b981] rounded-full mt-4 shadow-[0_0_10px_#00ff88]" />
      </div>

      {/* Category Tabs for Desktop & Mobile */}
      <div className="flex gap-2 pb-4 mb-8 overflow-x-auto no-scrollbar">
        {skills.categories.map((category, idx) => {
          const Icon = CATEGORY_ICONS[category.name] || Layers;
          const isSelected = selectedCategory === idx;
          return (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-[#00ff88]/20 text-white font-bold border border-[#00ff88]/40 shadow-[0_0_20px_rgba(0,255,136,0.2)]'
                  : 'glass-card text-slate-300 hover:text-[#00ff88] hover:bg-white/5 border border-white/5'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-[#00ff88]' : 'text-slate-400'}`} />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Skills Panel */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#00ff88]/20 relative overflow-hidden">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#00ff88]/15">
          <div>
            <span className="text-xs font-mono text-[#00ff88] uppercase tracking-wider block">
              Skill Domain
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              {skills.categories[selectedCategory].name}
            </h3>
          </div>
          <span className="text-xs text-emerald-400/80 font-mono hidden sm:block">
            {skills.categories[selectedCategory].skills.length} Competencies Listed
          </span>
        </div>

        {/* Skills List with Progress Bars & Practical Real-World Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.categories[selectedCategory].skills.map((skill, idx) => (
            <div key={skill.name} className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-[#00ff88]/15 hover:border-[#00ff88]/30 transition-colors">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-white flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00ff88]" />
                  {skill.name}
                </span>
                <span className="font-mono text-[#00ff88] font-bold">{skill.level}%</span>
              </div>

              {/* Glowing Progress Track */}
              <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden p-[1px] border border-[#00ff88]/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#00ff88] via-[#22c55e] to-[#4ade80] shadow-[0_0_10px_rgba(0,255,136,0.8)]"
                />
              </div>

              <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-slate-400">
                <span>Applied Context:</span>
                <span className="text-emerald-300 bg-white/5 px-2 py-0.5 rounded-md border border-[#00ff88]/20">
                  {skill.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
