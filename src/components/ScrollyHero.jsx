import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, CircuitBoard, Cpu, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const focusAreas = [
  { id: 'embedded', label: 'Embedded systems', eyebrow: '01 / Embedded systems', title: 'Firmware that meets the physical world.', description: 'Microcontrollers, sensors, interfaces and the practical details that make hardware dependable.', icon: Cpu },
  { id: 'power', label: 'Power & control', eyebrow: '02 / Power & control', title: 'A systems view of power and motion.', description: 'From thermal limits in power electronics to motor control, switching and feedback.', icon: CircuitBoard },
  { id: 'industry', label: 'Industrial automation', eyebrow: '03 / Industrial automation', title: 'Learning where reliability matters.', description: 'Hands-on exposure to control panels, VFDs, switchgear and safe electrical practices.', icon: BriefcaseBusiness },
];

export default function ScrollyHero() {
  const [activeFocus, setActiveFocus] = useState(focusAreas[0].id);
  const focus = focusAreas.find((item) => item.id === activeFocus) ?? focusAreas[0];
  const FocusIcon = focus.icon;
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero-shell relative z-10 min-h-[100svh] px-4 pb-12 pt-28 sm:px-6 lg:px-10 lg:pt-32">
      <div className="mx-auto grid min-h-[calc(100svh-10rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[11px] font-medium tracking-[0.13em] text-sky-100/75 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,.9)]" />
            ELECTRICAL & ELECTRONICS ENGINEERING
          </div>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-white sm:text-6xl md:text-7xl lg:text-[5.35rem]">
            Building the link between ideas and <span className="hero-gradient-text">working systems.</span>
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            I’m {personalInfo.name}, an EEE student focused on embedded systems, power electronics and industrial automation — with an eye for the small details that make a build reliable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={() => scrollTo('projects')} className="hero-primary-action">See selected work <ArrowDownRight className="h-4 w-4" /></button>
            <a href={personalInfo.socials.resume} download="Vishnu_Varthan_VG_Resume.pdf" className="hero-secondary-action"><FileText className="h-4 w-4" /> Resume</a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-7 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-4">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label}><dt className="text-2xl font-semibold tracking-[-0.05em] text-white">{stat.value}</dt><dd className="mt-1 text-[11px] leading-4 text-slate-400">{stat.label}</dd></div>
            ))}
          </dl>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto w-full max-w-[33rem] lg:max-w-none">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-portrait-card group relative overflow-hidden rounded-[2rem] border border-white/[0.14] p-3 shadow-[0_28px_90px_rgba(3,9,26,.42)]">
            <div className="relative aspect-[4/4.65] overflow-hidden rounded-[1.45rem] bg-slate-900">
              <img src={personalInfo.profileImage} alt="Vishnu Varthan VG" className="h-full w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071222]/95 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4"><div><p className="text-xs font-medium tracking-[0.16em] text-sky-200/80">BASED IN TAMIL NADU, INDIA</p><p className="mt-1 text-lg font-medium text-white">Vishnu Varthan VG</p></div><div className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-sky-100 backdrop-blur-md"><ArrowUpRight className="h-4 w-4" /></div></div>
            </div>
          </div>
          <div className="hero-availability absolute -bottom-4 -left-4 z-10 rounded-2xl border border-white/[0.13] px-4 py-3 backdrop-blur-2xl sm:-left-7"><p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] text-sky-100/80"><span className="h-1.5 w-1.5 rounded-full bg-sky-300" /> OPEN TO OPPORTUNITIES</p><p className="mt-1 text-xs text-slate-300">Embedded · Automation · Core engineering</p></div>
        </motion.div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl lg:mt-2">
        <div className="liquid-focus-panel grid overflow-hidden rounded-[1.75rem] border border-white/[0.11] lg:grid-cols-[.9fr_1.1fr]">
          <div className="flex gap-1 overflow-x-auto border-b border-white/10 p-2 no-scrollbar lg:flex-col lg:border-b-0 lg:border-r lg:p-3">
            {focusAreas.map((item) => { const Icon = item.icon; const selected = item.id === activeFocus; return <button key={item.id} onClick={() => setActiveFocus(item.id)} className={`focus-tab ${selected ? 'focus-tab-active' : ''}`}><Icon className="h-4 w-4 shrink-0" /><span>{item.label}</span></button>; })}
          </div>
          <AnimatePresence mode="wait"><motion.div key={focus.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} className="p-6 sm:p-7"><div className="flex items-center gap-2 text-[10px] font-medium tracking-[0.16em] text-sky-200/75"><Sparkles className="h-3.5 w-3.5" /> {focus.eyebrow.toUpperCase()}</div><div className="mt-3 flex items-start justify-between gap-5"><div><h2 className="text-xl font-medium tracking-[-0.035em] text-white sm:text-2xl">{focus.title}</h2><p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">{focus.description}</p></div><FocusIcon className="hidden h-8 w-8 text-sky-200/70 sm:block" /></div></motion.div></AnimatePresence>
        </div>
      </div>
    </section>
  );
}
