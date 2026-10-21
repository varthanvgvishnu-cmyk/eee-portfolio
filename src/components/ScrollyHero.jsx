import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Activity, 
  ArrowDown, 
  Award, 
  CircuitBoard, 
  Cpu, 
  ExternalLink, 
  Eye, 
  Factory, 
  FileText, 
  Radio, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Wrench, 
  Zap 
} from 'lucide-react';

export default function ScrollyHero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Default known duration (10.01s)
  const [duration, setDuration] = useState(10.01);
  const [currentTime, setCurrentTime] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // High-performance seek queue refs
  const pendingTargetRef = useRef(null);
  const targetTimeRef = useRef(0);
  const rafIdRef = useRef(null);

  // Seek dispatcher: uses native video.seeking state with zero possibility of deadlock
  const queueSeek = (targetTime) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    // Avoid redundant seeking if already close
    if (Math.abs(video.currentTime - targetTime) < 0.02) {
      return;
    }

    // If browser is actively decoding a previous seek, queue this latest target
    if (video.seeking) {
      pendingTargetRef.current = targetTime;
      return;
    }

    try {
      video.currentTime = targetTime;
    } catch (e) {
      // safe fallback
    }
  };

  // Preload entire 839KB video into RAM as Blob URL for instantaneous zero-latency seeking
  useEffect(() => {
    let active = true;
    let blobUrl = null;

    const loadVideo = async () => {
      const video = videoRef.current;
      if (!video) return;

      try {
        const res = await fetch('/videos/scroll-animation.mp4');
        const blob = await res.blob();
        if (!active) return;
        blobUrl = URL.createObjectURL(blob);
        video.src = blobUrl;
      } catch (err) {
        // Fallback to static URL
        if (video) video.src = '/videos/scroll-animation.mp4';
      }

      video.muted = true;
      video.playsInline = true;
      video.pause();

      const onLoadedMetadata = () => {
        if (video.duration && !isNaN(video.duration)) {
          setDuration(video.duration);
        }
        setIsVideoLoaded(true);
      };

      const onSeeked = () => {
        if (video) {
          setCurrentTime(video.currentTime);
        }

        // Immediately seek to any target queued while seeking
        if (pendingTargetRef.current !== null) {
          const next = pendingTargetRef.current;
          pendingTargetRef.current = null;
          queueSeek(next);
        }
      };

      video.addEventListener('loadedmetadata', onLoadedMetadata);
      video.addEventListener('canplay', onLoadedMetadata);
      video.addEventListener('canplaythrough', onLoadedMetadata);
      video.addEventListener('seeked', onSeeked);

      video.load();

      // Prime video decoder so frame 0 renders immediately
      try {
        await video.play();
        video.pause();
      } catch (e) {
        // Autoplay policy fallback
      }
    };

    loadVideo();

    return () => {
      active = false;
      const video = videoRef.current;
      if (video) {
        video.pause();
      }
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, []);

  // Responsive scroll listener: maps scroll progress directly to video timeline
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = rect.height - viewportHeight;

      if (scrollableDistance <= 0) return;

      // Normalized progress strictly clamped between 0.0 and 1.0
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      setScrollProgress(progress);

      const video = videoRef.current;
      const totalDur = (video && video.duration && !isNaN(video.duration)) ? video.duration : duration;
      const targetTime = progress * Math.max(0.01, totalDur - 0.04);
      targetTimeRef.current = targetTime;

      queueSeek(targetTime);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [duration]);

  // Robust RAF catch-up loop: guarantees video synchronizes whenever browser is idle
  useEffect(() => {
    let active = true;

    const tick = () => {
      if (!active) return;
      const video = videoRef.current;
      if (video && !video.seeking) {
        const target = targetTimeRef.current;
        if (Math.abs(video.currentTime - target) > 0.03) {
          queueSeek(target);
        }
      }
      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      active = false;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} id="home" className="relative w-full h-[400vh] bg-[#030503]">
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black select-none">
        
        {/* BACKGROUND SCROLL-DRIVEN VIDEO: Prominent, Crystal Clear & Cinematic */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover select-none pointer-events-none opacity-95 filter contrast-105 brightness-100 transition-opacity duration-300"
          />

          {/* Liquid Dark Glass Tint: Keeps video sharp and visible while ensuring text readability */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />

          {/* Top & Bottom seamless fades into dark portfolio body */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#030503] via-[#030503]/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030503] via-[#030503]/60 to-transparent pointer-events-none" />

          {/* Ambient Neon Emerald Rim Light */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,255,136,0.1)_100%)] pointer-events-none" />
        </div>

        {/* TOP STATUS OVERLAYS & LIVE TELEMETRY */}
        <div className="absolute top-20 md:top-24 inset-x-4 md:inset-x-12 z-20 pointer-events-none flex items-center justify-between">
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-[#00ff88]/30 text-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.2)] pointer-events-auto text-[11px] font-mono bg-black/60 backdrop-blur-md">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#00ff88]" />
            <span className="font-semibold tracking-wider">CIT_EEE // SYSTEM_ONLINE</span>
          </div>

          {/* Live Video Scroller Telemetry Pill */}
          <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full glass-panel border border-[#00ff88]/35 font-mono text-xs text-white pointer-events-auto shadow-[0_0_20px_rgba(0,255,136,0.2)] bg-black/60 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
            <span className="text-[#00ff88] font-bold">SCROLL VIDEO SYNC:</span>
            <span className="font-bold text-white">{Math.round(scrollProgress * 100)}%</span>
            <span className="text-[#00ff88] font-bold">({currentTime.toFixed(1)}s / {duration.toFixed(1)}s)</span>
          </div>
        </div>

        {/* =========================================================================
            STAGE 1: HERO OVERVIEW (Scroll 0% to ~33%)
            Designed to keep Vishnu completely visible while highlighting qualifications
           ========================================================================= */}
        <motion.div
          animate={{
            opacity: scrollProgress < 0.33 ? 1 : 0,
            y: scrollProgress < 0.33 ? 0 : -35,
            scale: scrollProgress < 0.33 ? 1 : 0.96
          }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 flex flex-col justify-end pb-24 md:pb-28 items-center text-center px-4 sm:px-6 z-20 ${
            scrollProgress < 0.33 ? 'pointer-events-auto' : 'pointer-events-none hidden'
          }`}
        >
          {/* Main Title Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#00ff88]/40 text-xs text-slate-100 mb-3 shadow-[0_0_20px_rgba(0,255,136,0.25)] bg-black/65 backdrop-blur-lg">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88]" />
            <span className="font-semibold text-white">Chennai Institute of Technology</span>
            <span className="text-slate-400">•</span>
            <span className="text-[#00ff88] font-mono font-bold">Dept of EEE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08] mb-2 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            VISHNU VARTHAN <span className="text-gradient-neon">VG</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-emerald-300 font-bold max-w-2xl mb-3 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
            Electrical & Electronics Engineer
          </p>

          <p className="text-xs sm:text-sm text-slate-200 max-w-lg mb-6 leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)] font-medium bg-black/40 px-4 py-1.5 rounded-2xl backdrop-blur-sm border border-white/10">
            {personalInfo.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-[#00ff88] via-[#22c55e] to-[#10b981] hover:brightness-110 text-black shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all flex items-center gap-2 active:scale-95"
            >
              <CircuitBoard className="w-4 h-4 text-black" />
              <span>Explore Projects</span>
            </button>

            <button
              onClick={() => scrollTo('internship')}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold glass-panel hover:bg-[#00ff88]/20 text-white border border-[#00ff88]/40 hover:border-[#00ff88] transition-all flex items-center gap-2 active:scale-95 shadow-lg bg-black/60 backdrop-blur-md"
            >
              <Factory className="w-4 h-4 text-[#a3e635]" />
              <span>Auto Print Machinery</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white hover:text-[#00ff88] glass-panel hover:bg-white/10 transition-colors flex items-center gap-2 bg-black/60 border border-white/20 backdrop-blur-md"
            >
              <span>Get in Touch</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#00ff88]" />
            </button>
          </div>
        </motion.div>

        {/* =========================================================================
            STAGE 2: BRIDGING HARDWARE & SYSTEMS (Scroll 33% to ~68%)
            Flanked on Left & Right so Vishnu in the video remains completely in view
           ========================================================================= */}
        <motion.div
          animate={{
            opacity: scrollProgress >= 0.33 && scrollProgress < 0.68 ? 1 : 0,
            y: scrollProgress >= 0.33 && scrollProgress < 0.68 ? 0 : 35,
            scale: scrollProgress >= 0.33 && scrollProgress < 0.68 ? 1 : 0.96
          }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 flex flex-col justify-between p-6 sm:p-12 md:p-16 z-20 ${
            scrollProgress >= 0.33 && scrollProgress < 0.68 ? 'pointer-events-auto' : 'pointer-events-none hidden'
          }`}
        >
          {/* Spacer for top nav */}
          <div className="h-16" />

          {/* Flanking Cards - Left and Right */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-none">
            {/* Left Flank Card: Embedded Systems */}
            <div className="w-full md:w-80 p-5 rounded-2xl glass-panel border-l-4 border-l-[#00ff88] border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl pointer-events-auto text-left transform md:-translate-y-4">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-[#00ff88]/15 text-[#00ff88]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">ESP32 & Firmware</h4>
                  <p className="text-[11px] font-mono text-[#00ff88]">C++ // Non-blocking Timers</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Potentiometer passcode validation, anti-tamper lockouts, and OLED I2C diagnostic interfaces.
              </p>
            </div>

            {/* Right Flank Card: Industrial Automation */}
            <div className="w-full md:w-80 p-5 rounded-2xl glass-panel border-r-4 border-r-[#a3e635] border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl pointer-events-auto text-left transform md:translate-y-4">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-[#a3e635]/15 text-[#a3e635]">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Industrial Switchgear</h4>
                  <p className="text-[11px] font-mono text-[#a3e635]">415V // MCBs, OLRs, VFDs</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Real-world panel assembly at Auto Print Machinery. Three-phase motor controls and safety interlocks.
              </p>
            </div>
          </div>

          {/* Bottom Center Narrative Pill */}
          <div className="mx-auto max-w-xl p-4 sm:p-5 rounded-2xl glass-panel border border-[#00ff88]/30 bg-black/75 backdrop-blur-xl text-center pointer-events-auto shadow-[0_0_40px_rgba(0,255,136,0.2)]">
            <span className="text-[11px] font-mono text-[#00ff88] uppercase tracking-widest block mb-1 font-bold">
              Continuous Bench Verification
            </span>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              Bridging practical motor control and embedded firmware with hands-on industrial switchgear.
            </p>
          </div>
        </motion.div>

        {/* =========================================================================
            STAGE 3: HONEST ACHIEVEMENTS & PORTFOLIO ENTRY (Scroll 68% to 100%)
            Vishnu reaches final motion pose in the video
           ========================================================================= */}
        <motion.div
          animate={{
            opacity: scrollProgress >= 0.68 ? 1 : 0,
            y: scrollProgress >= 0.68 ? 0 : 35,
            scale: scrollProgress >= 0.68 ? 1 : 0.96
          }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 flex flex-col justify-between p-6 sm:p-12 md:p-16 z-20 ${
            scrollProgress >= 0.68 ? 'pointer-events-auto' : 'pointer-events-none hidden'
          }`}
        >
          {/* Spacer for top nav */}
          <div className="h-16" />

          {/* Flanking Cards - Left and Right */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-none">
            {/* Left: Hackathon Podiums */}
            <div className="w-full md:w-80 p-5 rounded-2xl glass-panel border-l-4 border-l-[#4ade80] border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl pointer-events-auto text-left">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-[#4ade80]/15 text-[#4ade80]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Competitive Podiums</h4>
                  <p className="text-[11px] font-mono text-[#4ade80]">VISION X & Y'HACK</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                2nd place at VISION X Hackathon and runner-up at Y'HACK, building rapid functional prototypes under pressure.
              </p>
            </div>

            {/* Right: Technical Truthfulness */}
            <div className="w-full md:w-80 p-5 rounded-2xl glass-panel border-r-4 border-r-[#00ff88] border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl pointer-events-auto text-left">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-[#00ff88]/15 text-[#00ff88]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Engineering Integrity</h4>
                  <p className="text-[11px] font-mono text-[#00ff88]">Truthful Hardware Disclosures</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clear distinction between bench-tested prototypes, active codebases, and academic concept reviews.
              </p>
            </div>
          </div>

          {/* Bottom Center CTA to scroll into About */}
          <div className="mx-auto max-w-md p-4 rounded-2xl glass-panel border border-[#00ff88]/35 bg-black/80 backdrop-blur-xl text-center pointer-events-auto shadow-[0_0_40px_rgba(0,255,136,0.25)] flex flex-col items-center gap-2.5">
            <p className="text-xs sm:text-sm font-semibold text-white">
              Explore Complete Engineering Journey
            </p>
            <button
              onClick={() => scrollTo('about')}
              className="px-5 py-2 rounded-full text-xs font-bold bg-[#00ff88] text-black hover:bg-[#4ade80] transition-colors inline-flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,136,0.4)] active:scale-95"
            >
              <span>Scroll to Biography & Details</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* BOTTOM VIDEO SCRUBBER BAR */}
        <div className="absolute bottom-5 md:bottom-7 inset-x-4 md:inset-x-16 z-20 pointer-events-none flex flex-col items-center gap-2">
          <div className="w-full max-w-xl h-2 rounded-full bg-black/80 border border-[#00ff88]/30 p-[1px] backdrop-blur-md overflow-hidden relative shadow-[0_0_15px_rgba(0,255,136,0.15)]">
            <motion.div
              style={{ width: `${scrollProgress * 100}%` }}
              className="h-full rounded-full bg-gradient-to-r from-[#00ff88] via-[#22c55e] to-[#4ade80] shadow-[0_0_12px_rgba(0,255,136,0.9)]"
            />
          </div>

          <div className="flex items-center justify-between w-full max-w-xl px-1 text-[11px] font-mono text-slate-300">
            <span className="text-[#00ff88] font-bold">00:00 [START]</span>
            <span className="text-[#00ff88] uppercase tracking-widest hidden sm:inline font-semibold">
              Scroll Down to Advance Video • Scroll Up to Reverse
            </span>
            <span className="text-[#00ff88] font-bold">[END] {duration.toFixed(1)}s</span>
          </div>
        </div>

      </div>
    </div>
  );
}
