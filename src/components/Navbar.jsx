import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { 
  CircuitBoard, 
  Cpu, 
  Factory, 
  FileText, 
  Home, 
  Mail, 
  Menu, 
  Sparkles, 
  User, 
  X 
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Internship', href: '#internship' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Log', href: '#log' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Desktop Liquid Glass Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl pointer-events-none"
      >
        <div className="flex items-center justify-between px-3 md:px-5 py-2.5 rounded-full glass-nav pointer-events-auto border border-[#00ff88]/20 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,136,0.1)]">
          {/* Logo / Student Title */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
            className="flex items-center gap-2.5 group pl-1.5 focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#00ff88] to-[#10b981] p-[1.5px] flex items-center justify-center shadow-lg shadow-[#00ff88]/20 group-hover:shadow-[#00ff88]/50 transition-shadow">
              <div className="w-full h-full rounded-full bg-[#030603] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-[#00ff88] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs md:text-sm font-semibold tracking-wide text-white group-hover:text-[#00ff88] transition-colors">
                Vishnu Varthan VG
              </span>
              <span className="text-[10px] text-emerald-400/80 font-mono tracking-wider">
                CIT // EEE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(sectionId);
                  }}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-[#00ff88] hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff88]/20 to-[#10b981]/20 border border-[#00ff88]/40 shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action: Status Pill & Resume */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/25 hover:bg-[#00ff88]/20 transition-all shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_8px_#00ff88]" />
              <span className="hidden md:inline">Open to Roles</span>
            </a>

            <a
              href="/resume.pdf"
              download="Vishnu_Varthan_VG_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-[#00ff88]/20 hover:text-[#00ff88] text-white border border-white/15 hover:border-[#00ff88]/40 transition-all shadow-sm"
              title="Download Vishnu Varthan VG's Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-[#00ff88]" />
              <span>CV</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-[#00ff88] focus:outline-none rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00ff88]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu & Backdrop Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed top-20 inset-x-3 sm:inset-x-6 z-50 lg:hidden p-4 sm:p-5 rounded-3xl glass-panel border border-[#00ff88]/30 shadow-2xl space-y-2 backdrop-blur-2xl bg-[#040905]/95 max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <button
                      key={item.label}
                      onClick={() => scrollTo(sectionId)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                        isActive
                          ? 'bg-gradient-to-r from-[#00ff88]/20 to-[#10b981]/20 text-white font-semibold border border-[#00ff88]/40'
                          : 'text-slate-300 hover:bg-white/5 hover:text-[#00ff88]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_6px_#00ff88]" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href="/resume.pdf"
                  download="Vishnu_Varthan_VG_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium bg-white/10 text-white border border-white/10 hover:border-[#00ff88]/40"
                >
                  <FileText className="w-3.5 h-3.5 text-[#00ff88]" />
                  Resume / CV
                </a>
                <button
                  onClick={() => scrollTo('contact')}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#00ff88] to-[#10b981] text-black shadow-lg shadow-[#00ff88]/25"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Floating Bottom Quick-Nav Bar (Phone View) */}
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="fixed bottom-3 inset-x-3 z-40 lg:hidden pointer-events-none"
        aria-label="Mobile quick navigation"
      >
        <div className="max-w-md mx-auto rounded-full glass-nav border border-[#00ff88]/35 shadow-[0_10px_35px_rgba(0,0,0,0.95),0_0_20px_rgba(0,255,136,0.2)] p-1 pointer-events-auto flex items-center justify-between bg-[#030804]/90 backdrop-blur-2xl px-2">
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'about', label: 'About', icon: User },
            { id: 'projects', label: 'Projects', icon: CircuitBoard },
            { id: 'skills', label: 'Skills', icon: Cpu },
            { id: 'internship', label: 'Field', icon: Factory },
            { id: 'contact', label: 'Contact', icon: Mail }
          ].map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative flex flex-col items-center justify-center py-1.5 px-2.5 rounded-full transition-all text-[10px] font-medium touch-manipulation ${
                  isActive
                    ? 'text-[#00ff88] font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute inset-0 rounded-full bg-[#00ff88]/20 border border-[#00ff88]/40 shadow-[0_0_12px_rgba(0,255,136,0.35)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-4 h-4 relative z-10 transition-transform ${isActive ? 'text-[#00ff88] scale-110' : 'text-slate-400'}`} />
                <span className="relative z-10 tracking-tight mt-0.5">{label}</span>
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
