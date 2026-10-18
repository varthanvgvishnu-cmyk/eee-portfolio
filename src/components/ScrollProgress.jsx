import { motion, useScroll, useSpring } from 'motion/react';
import React from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-black/40">
      <motion.div
        className="h-full bg-gradient-to-r from-[#00ff88] via-[#22c55e] to-[#10b981] shadow-[0_0_16px_rgba(0,255,136,0.95)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
