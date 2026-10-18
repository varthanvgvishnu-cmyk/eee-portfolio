import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import { learningLogs } from '../data/portfolioData';
import { 
  BookOpen, 
  ChevronDown, 
  CircuitBoard, 
  Code2, 
  Cpu, 
  FileText, 
  Lightbulb, 
  Terminal, 
  Wrench 
} from 'lucide-react';

export default function LearningLog() {
  const [expandedLog, setExpandedLog] = useState('log-1');

  return (
    <section id="log" className="relative z-20 py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] mb-3 shadow-[0_0_15px_rgba(0,255,136,0.12)]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Engineering Journal & Debugging Notes</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Practical <span className="text-gradient-neon">Learning Log</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#10b981] rounded-full mt-4 shadow-[0_0_10px_#00ff88]" />
      </div>

      {/* Logs List */}
      <div className="space-y-4">
        {learningLogs.map((log) => {
          const isExpanded = expandedLog === log.id;
          return (
            <div
              key={log.id}
              className={`rounded-3xl glass-card border transition-all duration-300 overflow-hidden ${
                isExpanded ? 'border-[#00ff88]/40 bg-white/[0.03] shadow-[0_0_30px_rgba(0,255,136,0.12)]' : 'border-[#00ff88]/15 hover:border-[#00ff88]/30'
              }`}
            >
              {/* Header / Clickable Toggle */}
              <button
                onClick={() => setExpandedLog(isExpanded ? null : log.id)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[#00ff88] px-2 py-0.5 rounded bg-[#00ff88]/10 border border-[#00ff88]/20">
                      {log.category}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400/70">
                      {log.date}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    {log.title}
                  </h3>
                </div>

                <div className={`p-2 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#00ff88] bg-[#00ff88]/15' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 pt-2 border-t border-[#00ff88]/15 space-y-4"
                  >
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-[#00ff88]" />
                        <span>The Problem Encountered</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {log.summary}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-[#22c55e]" />
                        <span>The Engineering Resolution</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {log.solution}
                      </p>
                    </div>

                    {/* Code / Logic Snippet */}
                    <div className="rounded-2xl bg-[#020502] border border-[#00ff88]/20 p-4 font-mono text-xs overflow-x-auto text-[#00ff88]">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#00ff88]/15 text-[10px] text-slate-400">
                        <span>Implementation Snippet</span>
                        <span className="text-emerald-400">C++ / MATLAB / Logic</span>
                      </div>
                      <pre className="text-emerald-100/90 leading-relaxed">
                        <code>{log.codeSnippet}</code>
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
