import { motion } from 'motion/react';
import React, { useState } from 'react';
import { internship } from '../data/portfolioData';
import { 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  ExternalLink, 
  Factory, 
  Gauge, 
  Layers, 
  MapPin, 
  Radio, 
  ShieldCheck, 
  Sparkles, 
  Wrench, 
  Zap 
} from 'lucide-react';

export default function Internship() {
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(0);

  const activeComponent = internship.panelComponents[selectedComponentIndex];

  return (
    <section id="internship" className="relative z-20 py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] mb-3 shadow-[0_0_15px_rgba(0,255,136,0.12)]">
          <Factory className="w-3.5 h-3.5" />
          <span>Industrial Engineering Field Immersion</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Internship @ <span className="text-gradient-neon">Auto Print Machinery</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#10b981] rounded-full mt-4 shadow-[0_0_10px_#00ff88]" />
      </div>

      {/* Overview Banner Card */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#00ff88]/20 mb-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#00ff88]/15">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00ff88] mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{internship.location}</span>
              <span className="text-slate-600">•</span>
              <span>{internship.type}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {internship.role}
            </h3>
            <p className="text-slate-300 text-sm mt-1 font-medium">
              Auto Print Machinery Ltd — High-Precision Printing Machinery & Industrial Automation
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/25 text-xs font-mono text-[#00ff88] shrink-0 shadow-[0_0_15px_rgba(0,255,136,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_8px_#00ff88]" />
            <span>Industrial Panel Wiring & Diagnostics</span>
          </div>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-6">
          {internship.summary}
        </p>

        {/* Key Learning Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {internship.keyLearnings.map((learning, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-[#00ff88]/15 hover:border-[#00ff88]/30 transition-colors">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0" />
                <span>{learning.title}</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                {learning.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE INDUSTRIAL CONTROL PANEL INSPECTOR */}
      <div className="rounded-3xl glass-card border border-[#00ff88]/20 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono text-[#00ff88] uppercase tracking-wider block">
              Simulated Field Equipment
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Industrial Control Panel Component Visualizer
            </h3>
          </div>
          <span className="text-xs text-emerald-400/80 font-mono">
            Click any component to inspect switchgear specifications
          </span>
        </div>

        {/* Panel DIN-Rail Layout Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Simulated DIN Rail Switchgear Rack (7 cols) */}
          <div className="lg:col-span-7 bg-[#020502] p-6 rounded-2xl border border-[#00ff88]/20 relative overflow-hidden">
            {/* Metallic DIN Rail line */}
            <div className="absolute top-1/2 inset-x-4 h-4 bg-gradient-to-r from-emerald-900/60 via-slate-600 to-emerald-900/60 rounded-sm -translate-y-1/2 border-y border-emerald-500/30 opacity-70 z-0" />

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {internship.panelComponents.map((comp, idx) => {
                const isSelected = selectedComponentIndex === idx;
                return (
                  <button
                    key={comp.name}
                    onClick={() => setSelectedComponentIndex(idx)}
                    className={`p-4 rounded-xl text-left transition-all relative flex flex-col justify-between min-h-[120px] ${
                      isSelected
                        ? 'bg-[#00ff88]/20 border-2 border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                        : 'bg-[#040804]/90 hover:bg-[#070e07] border border-[#00ff88]/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                        DIN #{idx + 1}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#00ff88] animate-ping shadow-[0_0_6px_#00ff88]' : 'bg-slate-700'}`} />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">
                        {comp.name}
                      </h4>
                      <p className="text-[10px] text-emerald-400/80 font-mono mt-1">
                        {comp.voltage}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-[#00ff88]/15 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Standard 35mm DIN Rail Mount Configuration</span>
              <span className="text-[#00ff88]">415V 3-Phase Industrial Standard</span>
            </div>
          </div>

          {/* Right Column: Switchgear Details Inspector (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.02] border border-[#00ff88]/15 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00ff88]">
              <Zap className="w-4 h-4" />
              <span>Component Inspection Details</span>
            </div>

            <h4 className="text-xl font-bold text-white">
              {activeComponent.name}
            </h4>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-[#00ff88]/15 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Operating Voltage / Rating:</span>
                <span className="text-white font-mono font-medium">{activeComponent.voltage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Primary Protection / Function:</span>
                <span className="text-[#00ff88] font-medium">{activeComponent.role}</span>
              </div>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Vishnu's Hands-on Exposure
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Observed and assisted in the wiring of this component according to electrical CAD layout schematics, ensuring torque tightening of screw clamps, proper ferrule tagging, and safety interlocks for machine uptime.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-start gap-2.5 text-xs text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
              <span>
                Safety Precaution: All panel maintenance verified using Lockout/Tagout (LOTO) protocols and multimeter zero-voltage checks before touching terminal blocks.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
