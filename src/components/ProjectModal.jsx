import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { GithubIcon } from './Icons';
import { 
  ArrowUpRight,
  CircuitBoard, 
  Cpu, 
  ExternalLink, 
  Globe,
  ImageIcon, 
  Info, 
  Maximize2,
  Play, 
  ShieldAlert, 
  Sparkles, 
  Video, 
  X, 
  ZoomIn
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [enlargedImage, setEnlargedImage] = useState(null);

  const hasHardwareMedia = !!(project?.wiringDiagram || project?.wiringDiagramPlaceholder || project?.demoVideoPlaceholder);
  const hasLiveApp = !!project?.liveUrl;
  const hasMediaTab = hasHardwareMedia || hasLiveApp;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (enlargedImage) {
          setEnlargedImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, enlargedImage]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop Glass Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] flex flex-col rounded-2xl sm:rounded-3xl glass-nav border border-[#00ff88]/30 shadow-[0_0_50px_rgba(0,255,136,0.18)] overflow-hidden z-10 text-left my-auto bg-[#040804]"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-6 border-b border-[#00ff88]/15 flex items-start justify-between gap-3 sm:gap-4 bg-gradient-to-r from-[#00ff88]/[0.05] to-transparent">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30 shadow-[0_0_8px_rgba(0,255,136,0.2)]">
                  {project.category}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium border ${
                  project.statusType === 'completed'
                    ? 'bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/40'
                    : project.statusType === 'in-progress'
                    ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                    : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                }`}>
                  {project.statusBadge}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-[#00ff88]/20 text-slate-400 hover:text-[#00ff88] transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#00ff88]/15 px-3 sm:px-6 gap-2 sm:gap-4 overflow-x-auto no-scrollbar text-xs font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-2 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'border-[#00ff88] text-[#00ff88] font-bold shadow-[0_2px_10px_rgba(0,255,136,0.5)]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>Overview & Logic</span>
            </button>

            <button
              onClick={() => setActiveTab('pinouts')}
              className={`py-3 px-2 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'pinouts'
                  ? 'border-[#00ff88] text-[#00ff88] font-bold shadow-[0_2px_10px_rgba(0,255,136,0.5)]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <CircuitBoard className="w-3.5 h-3.5" />
              <span>{project.pinoutTitle ? "Specs & Mathematical Model" : "Hardware Specs & Pinouts"}</span>
            </button>

            {hasMediaTab && (
              <button
                onClick={() => setActiveTab('media')}
                className={`py-3 px-2 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'media'
                    ? 'border-[#00ff88] text-[#00ff88] font-bold shadow-[0_2px_10px_rgba(0,255,136,0.5)]'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {hasHardwareMedia ? (
                  <>
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Wiring Diagram & Demo Media</span>
                  </>
                ) : (
                  <>
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live App & Deployment</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Modal Body Content (Scrollable) */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-5">
                {/* Engineering Truth & Transparency Callout */}
                <div className="p-4 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/25 flex items-start gap-3 shadow-[0_0_20px_rgba(0,255,136,0.08)]">
                  <ShieldAlert className="w-5 h-5 text-[#00ff88] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#00ff88] uppercase tracking-wider font-mono">
                      Engineering Status & Scope Disclosure
                    </h4>
                    <p className="text-xs text-emerald-200/90 mt-0.5 leading-relaxed">
                      {project.truthLabel}
                    </p>
                  </div>
                </div>

                {/* Live Deployment Banner */}
                {project.liveUrl && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#00ff88]/15 via-emerald-950/30 to-black/60 border border-[#00ff88]/30 shadow-[0_0_25px_rgba(0,255,136,0.12)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-[#00ff88] animate-ping" />
                        <span className="text-[11px] font-mono text-[#00ff88] uppercase tracking-wider font-semibold">
                          Active Live Deployment
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white">
                        {project.liveLabel || "Interactive Live Application"}
                      </h4>
                      <p className="text-xs text-slate-300 font-mono break-all">
                        {project.liveUrl}
                      </p>
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#00ff88] text-black hover:bg-[#4ade80] transition-all shadow-[0_0_15px_rgba(0,255,136,0.35)] flex items-center gap-2 shrink-0 active:scale-95"
                    >
                      <span>Launch Live App</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold text-white mb-2 font-mono uppercase tracking-wider text-slate-400">
                    Project Narrative & Architecture
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Technologies & Protocols
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-xs bg-white/5 border border-[#00ff88]/15 text-emerald-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: HARDWARE & PINOUTS */}
            {activeTab === 'pinouts' && (
              <div className="space-y-6">
                {/* Hardware BOM Specs */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#00ff88] mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span>Hardware Components (Bill of Materials)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.hardwareSpecs.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-[#00ff88]/15 flex flex-col">
                        <span className="text-xs text-emerald-400/80 font-mono">{item.item}</span>
                        <span className="text-xs sm:text-sm font-medium text-white mt-0.5">{item.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pinout Table */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#00ff88] mb-3 flex items-center gap-2">
                    <CircuitBoard className="w-4 h-4" />
                    <span>{project.pinoutTitle || "Microcontroller Pinout & Signal Mapping"}</span>
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-[#00ff88]/20 bg-white/[0.01]">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#00ff88]/10 text-[#00ff88] font-mono uppercase border-b border-[#00ff88]/20">
                        <tr>
                          <th className="py-2.5 px-4 font-semibold">{project.pinoutHeader1 || "Header / Pin"}</th>
                          <th className="py-2.5 px-4 font-semibold">{project.pinoutHeader2 || "Signal / Connected Peripheral"}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#00ff88]/10 font-mono">
                        {project.pinoutTable.map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#00ff88]/[0.05] transition-colors">
                            <td className="py-2.5 px-4 text-[#00ff88] font-semibold">{row.pin}</td>
                            <td className="py-2.5 px-4 text-slate-300">{row.function}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Circuit Diagram Quick Preview (If Available) */}
                {project.wiringDiagram && (
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-[#00ff88]/20">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#00ff88] flex items-center gap-2">
                        <ImageIcon className="w-4 h-4" />
                        <span>{project.diagramTitle || "Verified Circuit Pin Diagram"}</span>
                      </h4>
                      <button
                        onClick={() => setActiveTab('media')}
                        className="text-xs text-[#00ff88] hover:underline font-mono flex items-center gap-1"
                      >
                        <span>View in Media Tab</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div 
                      onClick={() => setEnlargedImage(project.wiringDiagram)}
                      className="relative rounded-xl overflow-hidden border border-[#00ff88]/30 bg-black/50 group cursor-pointer hover:border-[#00ff88] transition-all"
                    >
                      <img 
                        src={project.wiringDiagram} 
                        alt={`${project.title} circuit wiring diagram`}
                        className="w-full max-h-56 object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                        <span className="text-[11px] font-mono text-[#00ff88] flex items-center gap-1">
                          <ZoomIn className="w-3.5 h-3.5" /> Click to enlarge diagram
                        </span>
                        <span className="text-[10px] bg-[#00ff88] text-black font-bold px-2 py-0.5 rounded-full">
                          Inspect
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: MEDIA & LIVE APP SHOWCASE */}
            {activeTab === 'media' && (
              <div className="space-y-6">
                {hasHardwareMedia ? (
                  <>
                    {/* Wiring Diagram Frame */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 flex items-center gap-2">
                          <CircuitBoard className="w-4 h-4 text-[#00ff88]" />
                          <span>{project.diagramTitle || "Wiring & Circuit Schematic Diagram"}</span>
                        </h4>
                        {project.wiringDiagram ? (
                          <div className="flex items-center gap-2">
                            <a
                              href={project.wiringDiagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-[#00ff88] hover:text-[#4ade80] font-mono flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/25 hover:border-[#00ff88]/40 transition-colors"
                            >
                              <span>Open Full Image</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        ) : (
                          <span className="text-[11px] text-emerald-400/70 font-mono">Editable Placeholder</span>
                        )}
                      </div>
                      
                      {project.wiringDiagram ? (
                        <div className="space-y-3">
                          <div 
                            onClick={() => setEnlargedImage(project.wiringDiagram)}
                            className="relative rounded-2xl overflow-hidden border border-[#00ff88]/30 bg-black/70 group cursor-pointer shadow-[0_0_30px_rgba(0,255,136,0.1)] hover:border-[#00ff88] transition-all p-2 sm:p-4"
                          >
                            <img 
                              src={project.wiringDiagram} 
                              alt={`${project.title} circuit wiring diagram`}
                              className="w-full max-h-[460px] object-contain mx-auto group-hover:scale-[1.01] transition-transform duration-300 rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 pointer-events-none">
                              <span className="text-xs font-mono text-[#00ff88] flex items-center gap-1.5">
                                <Maximize2 className="w-4 h-4" /> Click to open full-screen lightbox
                              </span>
                              <span className="text-xs bg-[#00ff88] text-black font-bold px-3 py-1 rounded-full shadow-[0_0_10px_#00ff88]">
                                Zoom View
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-[#00ff88]/15 flex items-start gap-2.5 text-xs text-slate-300">
                            <Sparkles className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-white">Hardware Implementation Accuracy</p>
                              <p className="text-slate-400 text-[11px] mt-0.5">
                                This schematic reflects the real physical pin layout, microcontroller header connections, and circuit protections verified on bench.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-8 rounded-2xl border-2 border-dashed border-[#00ff88]/30 bg-white/[0.02] flex flex-col items-center justify-center text-center group hover:border-[#00ff88]/60 transition-colors">
                          <div className="w-14 h-14 rounded-2xl bg-[#00ff88]/15 text-[#00ff88] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                            <CircuitBoard className="w-7 h-7" />
                          </div>
                          <p className="text-sm font-semibold text-white">Wiring Diagram Slot</p>
                          <p className="text-xs text-slate-400 max-w-md mt-1">
                            Save your KiCad or Fritzing schematic as <code className="text-[#00ff88] bg-white/5 px-1 py-0.5 rounded">{project.wiringDiagramPlaceholder}</code> in the <code className="text-slate-300">public/projects/</code> directory.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Demo Video / Bench Test Media Placeholder */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                          <Video className="w-4 h-4 text-[#00ff88]" />
                          <span>Bench Test / Hardware Demonstration Video</span>
                        </h4>
                        <span className="text-[11px] text-emerald-400/70 font-mono">Hardware Link</span>
                      </div>

                      <div className="p-6 rounded-2xl border border-[#00ff88]/20 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#00ff88]/15 text-[#00ff88] flex items-center justify-center shrink-0">
                            <Play className="w-5 h-5 ml-0.5" />
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-semibold text-white">YouTube / Drive Demo Video Link</p>
                            <p className="text-[11px] text-slate-400">Configure your video URL in <span className="font-mono text-[#00ff88]">src/data/portfolioData.js</span></p>
                          </div>
                        </div>
                        <a
                          href={project.demoVideoPlaceholder}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-medium bg-[#00ff88]/10 hover:bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30 transition-all flex items-center gap-1.5 shrink-0"
                        >
                          <span>Open Link</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </>
                ) : hasLiveApp ? (
                  /* Dedicated Live Deployment Showcase */
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#00ff88]/10 via-black/40 to-black/80 border border-[#00ff88]/30 shadow-[0_0_40px_rgba(0,255,136,0.12)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex h-2.5 w-2.5 rounded-full bg-[#00ff88] animate-ping" />
                          <span className="text-xs font-mono text-[#00ff88] font-bold uppercase tracking-wider">
                            Active Live Deployment
                          </span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white">
                          {project.liveLabel || "Interactive Live Application"}
                        </h4>
                      </div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-[#00ff88] text-black hover:bg-[#4ade80] transition-all shadow-[0_0_20px_rgba(0,255,136,0.35)] flex items-center justify-center gap-2 shrink-0 active:scale-95"
                      >
                        <span>Launch Fullscreen App</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Browser Mock Frame */}
                    <div className="rounded-2xl border border-[#00ff88]/20 bg-[#020502] overflow-hidden shadow-2xl">
                      <div className="p-3 bg-black/60 border-b border-[#00ff88]/15 flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        </div>
                        <div className="flex-1 mx-3 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono text-xs truncate flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-[#00ff88] shrink-0" />
                          <span className="truncate">{project.liveUrl}</span>
                        </div>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-md text-slate-400 hover:text-[#00ff88] transition-colors"
                          title="Open in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      
                      <div className="p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-4 bg-gradient-to-b from-transparent to-[#00ff88]/[0.02]">
                        <div className="w-16 h-16 rounded-3xl bg-[#00ff88]/15 text-[#00ff88] flex items-center justify-center shadow-[0_0_25px_rgba(0,255,136,0.25)] border border-[#00ff88]/30">
                          <Globe className="w-8 h-8" />
                        </div>
                        <div className="max-w-md">
                          <h5 className="text-base font-bold text-white mb-1">
                            Interactive Cloud Platform Available
                          </h5>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            This software engineering application is hosted and running in production. Click below to explore live simulations, interactive controls, and visual telemetry in real time.
                          </p>
                        </div>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30 hover:border-[#00ff88]/60 text-xs font-mono font-medium transition-all"
                        >
                          <span>Open {project.liveUrl}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            )}

          </div>

          {/* Modal Footer Bar */}
          <div className="p-3 sm:p-5 border-t border-[#00ff88]/15 bg-[#020502] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] sm:text-xs text-emerald-400/70 font-mono text-center sm:text-left">
              CIT // EEE • Vishnu Varthan VG
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-3.5 py-2 rounded-full text-xs font-bold bg-[#00ff88] text-black hover:bg-[#4ade80] transition-all shadow-[0_0_15px_rgba(0,255,136,0.35)] flex items-center justify-center gap-1.5 active:scale-95 touch-manipulation"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span className="truncate">{project.liveLabel || "Launch Live App"}</span>
                  <ExternalLink className="w-3 h-3 text-black" />
                </a>
              )}

              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-3.5 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-[#00ff88]/20 hover:text-[#00ff88] text-white border border-white/15 hover:border-[#00ff88]/30 transition-all flex items-center justify-center gap-2 touch-manipulation"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 touch-manipulation"
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>

        {/* Lightbox Modal for Diagram Enlargement */}
        {enlargedImage && (
          <div 
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn"
            onClick={() => setEnlargedImage(null)}
          >
            <div 
              className="relative max-w-5xl max-h-[92vh] w-full flex flex-col rounded-2xl overflow-hidden border border-[#00ff88]/40 shadow-[0_0_60px_rgba(0,255,136,0.25)] bg-[#030703]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-[#00ff88]/20 flex items-center justify-between bg-black/60">
                <div className="flex items-center gap-2">
                  <CircuitBoard className="w-4 h-4 text-[#00ff88]" />
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">
                    {project.title} — Circuit Schematic
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={enlargedImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30 transition-colors"
                    title="Open original image file in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setEnlargedImage(null)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-3 sm:p-6 overflow-auto flex items-center justify-center bg-black/80 flex-1">
                <img 
                  src={enlargedImage} 
                  alt={`${project.title} circuit wiring diagram full resolution`}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              <div className="p-3 border-t border-[#00ff88]/20 bg-[#020502] flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Use mouse scroll to zoom / click outside or ESC to close</span>
                <span className="text-[#00ff88]">High-Resolution Schematic Inspection</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
