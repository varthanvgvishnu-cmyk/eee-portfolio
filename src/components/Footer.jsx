import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUp, 
  CircuitBoard, 
  Cpu, 
  ExternalLink, 
  Heart, 
  Radio, 
  ShieldCheck 
} from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 border-t border-[#00ff88]/15 bg-[#020402] pt-16 pb-12 px-4 sm:px-6 md:px-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        {/* Branding & Department info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#00ff88] to-[#10b981] p-[1px] flex items-center justify-center shadow-[0_0_10px_rgba(0,255,136,0.3)]">
              <div className="w-full h-full rounded-lg bg-[#030603] flex items-center justify-center">
                <Cpu className="w-3.5 h-3.5 text-[#00ff88]" />
              </div>
            </div>
            <span className="text-sm font-bold text-white tracking-wide">
              Vishnu Varthan VG
            </span>
          </div>
          <p className="text-slate-400 max-w-sm">
            B.E. Electrical & Electronics Engineering, Chennai Institute of Technology (CIT).
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#00ff88] pt-1">
            <Radio className="w-3 h-3 text-[#00ff88] animate-pulse" />
            <span>IST (Chennai/Coimbatore): {time || 'Loading...'}</span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
          <a href="#home" className="hover:text-[#00ff88] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#00ff88] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#00ff88] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#00ff88] transition-colors">Skills</a>
          <a href="#internship" className="hover:text-[#00ff88] transition-colors">Internship</a>
          <a href="#achievements" className="hover:text-[#00ff88] transition-colors">Achievements</a>
          <a href="#log" className="hover:text-[#00ff88] transition-colors">Learning Log</a>
          <a href="#contact" className="hover:text-[#00ff88] transition-colors">Contact</a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl glass-card hover:bg-[#00ff88]/15 text-slate-300 hover:text-[#00ff88] border border-[#00ff88]/20 transition-all flex items-center gap-2 active:scale-95 shadow-md shadow-[#00ff88]/5"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 text-[#00ff88]" />
          <span className="text-xs font-mono font-bold">TOP</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
        <div>
          © {new Date().getFullYear()} Vishnu Varthan VG. Built with React, Vite & Motion for React.
        </div>
        <div className="flex items-center gap-4">
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors">
            GitHub
          </a>
          <span>•</span>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors">
            LinkedIn
          </a>
          <span>•</span>
          <a 
            href={personalInfo.socials.resume} 
            download="Vishnu_Varthan_VG_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#00ff88] transition-colors font-semibold"
          >
            Resume (PDF)
          </a>
          <span>•</span>
          <span className="text-emerald-400/80">CIT Department of EEE</span>
        </div>
      </div>
    </footer>
  );
}
