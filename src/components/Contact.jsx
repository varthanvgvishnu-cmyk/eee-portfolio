import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  FileText, 
  Mail, 
  MapPin, 
  Send, 
  ShieldCheck 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate interactive transmission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative z-20 py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] mb-3 shadow-[0_0_15px_rgba(0,255,136,0.12)]">
          <Mail className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Let's Build the <span className="text-gradient-neon">Future of Hardware</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#10b981] rounded-full mt-4 shadow-[0_0_10px_#00ff88]" />
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
          Whether you want to discuss embedded systems, industrial plant automation, state-space control simulations, or an internship opportunity, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Links & Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Quick Card with Copy */}
          <div className="p-6 rounded-3xl glass-card border border-[#00ff88]/20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#00ff88] uppercase tracking-wider">
                Direct Email
              </span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-white/5 hover:bg-[#00ff88]/20 text-slate-300 hover:text-[#00ff88] transition-colors border border-[#00ff88]/20"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00ff88]" />
                    <span className="text-[#00ff88] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#00ff88]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-lg sm:text-xl font-bold text-white hover:text-[#00ff88] transition-colors block break-all font-mono"
            >
              {personalInfo.email}
            </a>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Primary Inquiries & Collaboration</span>
              <span className="text-[#00ff88] font-mono text-[11px]">Direct Transmission</span>
            </div>
          </div>

          {/* Location & Academic Base Card */}
          <div className="p-6 rounded-3xl glass-card border border-[#00ff88]/20 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00ff88]/15 text-[#00ff88] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Location & Affiliation</h4>
                <p className="text-xs text-slate-300">{personalInfo.location}</p>
                <p className="text-[11px] text-emerald-400/80 font-mono mt-0.5">{personalInfo.institution}</p>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl glass-card border border-[#00ff88]/20 hover:border-[#00ff88]/50 transition-all flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#00ff88]/15 text-[#00ff88] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="text-left overflow-hidden">
                <p className="text-xs font-semibold text-white group-hover:text-[#00ff88] transition-colors">LinkedIn</p>
                <p className="text-[10px] text-slate-400 truncate">in/vishnuvarthan</p>
              </div>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl glass-card border border-[#00ff88]/20 hover:border-[#00ff88]/50 transition-all flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-white/10 text-[#00ff88] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="text-left overflow-hidden">
                <p className="text-xs font-semibold text-white group-hover:text-[#00ff88] transition-colors">GitHub</p>
                <p className="text-[10px] text-slate-400 truncate">varthanvgvishnu-cmyk</p>
              </div>
            </a>
          </div>

          {/* Resume PDF Download Card */}
          <div className="p-5 rounded-3xl glass-card border border-[#00ff88]/30 bg-gradient-to-br from-[#00ff88]/10 to-[#10b981]/5 flex items-center justify-between gap-4 shadow-[0_0_30px_rgba(0,255,136,0.12)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00ff88]/20 text-[#00ff88] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,255,136,0.25)]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Curriculum Vitae (Resume)</h4>
                <p className="text-[11px] text-emerald-400/90 font-mono">Official PDF • CGPA: 8.30 / 10.00</p>
              </div>
            </div>

            <a
              href={personalInfo.socials.resume}
              download="Vishnu_Varthan_VG_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#00ff88] text-black hover:bg-[#4ade80] transition-colors shrink-0 flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,136,0.3)]"
            >
              <span>Download CV</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#00ff88]/20 relative overflow-hidden">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Send a Transmission
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Drop an email inquiry or project proposal directly through this terminal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-mono text-emerald-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Ramesh / Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[#00ff88]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-colors"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-mono text-emerald-300">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[#00ff88]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-emerald-300">Subject / Inquiry *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Embedded Firmware Role / Smart Safe Locker Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[#00ff88]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-colors"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-emerald-300">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[#00ff88]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#00ff88] via-[#22c55e] to-[#10b981] hover:brightness-110 text-black shadow-lg shadow-[#00ff88]/25 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {submitting ? (
                  <span className="flex items-center gap-2 font-mono text-xs">
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Transmitting...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-black" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-2xl bg-[#00ff88]/15 border border-[#00ff88]/40 text-[#00ff88] text-xs font-medium flex items-center gap-2 text-left"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#00ff88] shrink-0" />
                    <span>Thank you! Your message was logged successfully. Vishnu will respond promptly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
