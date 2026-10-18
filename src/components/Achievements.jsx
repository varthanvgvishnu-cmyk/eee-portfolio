import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import React from 'react';
import { achievements } from '../data/portfolioData';
import { 
  Award, 
  Calendar, 
  CheckCircle2, 
  Medal, 
  PartyPopper, 
  Sparkles, 
  Star, 
  Trophy 
} from 'lucide-react';

export default function Achievements() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#00ff88', '#10b981', '#22c55e', '#a3e635', '#ffffff']
    });
  };

  return (
    <section id="achievements" className="relative z-20 py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] mb-3 shadow-[0_0_15px_rgba(0,255,136,0.12)]">
            <Trophy className="w-3.5 h-3.5" />
            <span>Hackathons & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Recognitions & <span className="text-gradient-neon">Podium Finishes</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#10b981] rounded-full mt-4 shadow-[0_0_10px_#00ff88]" />
        </div>

        {/* Interactive Confetti Button */}
        <button
          onClick={triggerConfetti}
          className="px-5 py-2.5 rounded-full text-xs font-semibold glass-card hover:bg-[#00ff88]/20 text-white hover:text-[#00ff88] border border-[#00ff88]/30 flex items-center gap-2 active:scale-95 shadow-[0_0_20px_rgba(0,255,136,0.15)]"
        >
          <PartyPopper className="w-4 h-4 text-[#00ff88]" />
          <span>Celebrate Wins</span>
        </button>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {achievements.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={triggerConfetti}
              className="group p-6 sm:p-8 rounded-3xl glass-card border border-[#00ff88]/20 hover:border-[#00ff88]/60 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_35px_rgba(0,255,136,0.2)]"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/10 rounded-full blur-2xl group-hover:bg-[#00ff88]/25 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00ff88]/15 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,255,136,0.2)]">
                    {index === 0 ? <Trophy className="w-6 h-6" /> : index === 1 ? <Medal className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-emerald-400/80 uppercase tracking-wider mb-1">
                  {item.event}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-emerald-300 font-medium">
                  {item.highlight}
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {item.year}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
