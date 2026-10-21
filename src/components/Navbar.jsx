import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#internship' },
  { label: 'Notes', href: '#log' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-3 py-2.5 transition duration-300 sm:px-4 ${scrolled ? 'border-white/[0.14] bg-[#081120]/72 shadow-[0_14px_45px_rgba(0,5,20,.28)] backdrop-blur-2xl' : 'border-transparent bg-transparent'}`}>
          <button onClick={() => scrollTo('#home')} className="group flex items-center gap-2.5 text-left">
            <span className="grid h-8 w-8 place-items-center rounded-xl border border-sky-100/20 bg-sky-100/10 text-sm font-semibold text-sky-100 transition group-hover:bg-sky-100/20">V</span>
            <span className="leading-tight"><span className="block text-sm font-semibold tracking-[-.025em] text-white">Vishnu Varthan</span><span className="block text-[10px] tracking-[.13em] text-slate-400">EEE · CIT</span></span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => <button key={item.href} onClick={() => scrollTo(item.href)} className="rounded-lg px-3 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/[.055] hover:text-white">{item.label}</button>)}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => scrollTo('#contact')} className="hidden items-center gap-1.5 rounded-xl border border-sky-100/15 bg-sky-100/[.08] px-3 py-2 text-xs font-medium text-sky-100 transition hover:border-sky-100/35 hover:bg-sky-100/[.14] sm:inline-flex">Let’s talk <ArrowUpRight className="h-3.5 w-3.5" /></button>
            <button onClick={() => setOpen((value) => !value)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[.045] text-slate-200 lg:hidden" aria-label="Toggle navigation menu">{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
          </div>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="fixed inset-x-4 top-[4.8rem] z-40 rounded-2xl border border-white/[.13] bg-[#0a1325]/95 p-2 shadow-2xl backdrop-blur-2xl sm:inset-x-6 lg:hidden">
          {NAV_ITEMS.map((item) => <button key={item.href} onClick={() => scrollTo(item.href)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/[.06] hover:text-white">{item.label}</button>)}
          <button onClick={() => scrollTo('#contact')} className="mt-1 block w-full rounded-xl bg-sky-100 px-4 py-3 text-left text-sm font-semibold text-slate-950">Start a conversation</button>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
