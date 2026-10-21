import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Neon Green Ambient Glow */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full glow-ambient-blob"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.16) 0%, rgba(16, 185, 129, 0.08) 45%, transparent 70%)',
          animationDuration: '14s'
        }}
      />

      {/* Center Deep Emerald Ambient Glow */}
      <div 
        className="absolute top-[38%] -right-[15%] w-[50vw] h-[50vw] rounded-full glow-ambient-blob"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, rgba(5, 150, 105, 0.06) 50%, transparent 70%)',
          animationDuration: '18s',
          animationDelay: '-4s'
        }}
      />

      {/* Bottom Neon Lime Ambient Glow */}
      <div 
        className="absolute top-[75%] -left-[10%] w-[45vw] h-[45vw] rounded-full glow-ambient-blob"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.12) 0%, rgba(34, 197, 94, 0.05) 50%, transparent 70%)',
          animationDuration: '16s',
          animationDelay: '-8s'
        }}
      />

      {/* Deep Obsidian Vignette Edge Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#030503_100%)] opacity-85" />
    </div>
  );
}
