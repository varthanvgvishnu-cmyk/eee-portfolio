import React, { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const coreGlowRef = useRef(null);
  const ambientGlowRef = useRef(null);

  // Mouse coordinates & smoothed follower coordinates
  const mouseRef = useRef({ x: -300, y: -300 });
  const corePosRef = useRef({ x: -300, y: -300 });
  const ambientPosRef = useRef({ x: -300, y: -300 });
  const isHoveringRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Only enable for fine pointer devices (mice / trackpads)
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (coreGlowRef.current) coreGlowRef.current.style.opacity = '1';
        if (ambientGlowRef.current) ambientGlowRef.current.style.opacity = '1';
      }

      // Check if hovering over clickable/interactive elements
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      );
      isHoveringRef.current = !!isInteractive;
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      if (coreGlowRef.current) coreGlowRef.current.style.opacity = '0';
      if (ambientGlowRef.current) ambientGlowRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      if (coreGlowRef.current) coreGlowRef.current.style.opacity = '1';
      if (ambientGlowRef.current) ambientGlowRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // High-performance dual-speed RAF loop
    let rafId;
    const coreLerp = 0.22;
    const ambientLerp = 0.12;

    const animate = () => {
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      // Update positions with smooth multi-depth physical inertia
      corePosRef.current.x += (targetX - corePosRef.current.x) * coreLerp;
      corePosRef.current.y += (targetY - corePosRef.current.y) * coreLerp;

      ambientPosRef.current.x += (targetX - ambientPosRef.current.x) * ambientLerp;
      ambientPosRef.current.y += (targetY - ambientPosRef.current.y) * ambientLerp;

      if (coreGlowRef.current) {
        coreGlowRef.current.style.transform = `translate3d(${corePosRef.current.x}px, ${corePosRef.current.y}px, 0)`;
        if (isHoveringRef.current) {
          coreGlowRef.current.style.width = '230px';
          coreGlowRef.current.style.height = '230px';
          coreGlowRef.current.style.marginTop = '-115px';
          coreGlowRef.current.style.marginLeft = '-115px';
        } else {
          coreGlowRef.current.style.width = '190px';
          coreGlowRef.current.style.height = '190px';
          coreGlowRef.current.style.marginTop = '-95px';
          coreGlowRef.current.style.marginLeft = '-95px';
        }
      }

      if (ambientGlowRef.current) {
        ambientGlowRef.current.style.transform = `translate3d(${ambientPosRef.current.x}px, ${ambientPosRef.current.y}px, 0)`;
        if (isHoveringRef.current) {
          ambientGlowRef.current.style.width = '500px';
          ambientGlowRef.current.style.height = '500px';
          ambientGlowRef.current.style.marginTop = '-250px';
          ambientGlowRef.current.style.marginLeft = '-250px';
        } else {
          ambientGlowRef.current.style.width = '420px';
          ambientGlowRef.current.style.height = '420px';
          ambientGlowRef.current.style.marginTop = '-210px';
          ambientGlowRef.current.style.marginLeft = '-210px';
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Layer 1: Gentle Ambient White Glow (Atmospheric Halo) */}
      <div
        ref={ambientGlowRef}
        className="pointer-events-none fixed top-0 left-0 w-[420px] h-[420px] -mt-[210px] -ml-[210px] rounded-full opacity-0 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.07) 35%, rgba(255, 255, 255, 0.015) 60%, transparent 75%)',
          mixBlendMode: 'screen',
          filter: 'blur(24px)',
          transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1), height 0.35s cubic-bezier(0.16, 1, 0.3, 1), margin 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease'
        }}
      />

      {/* Layer 2: Soft Radiant White Core (Balanced Visibility, Zero Dots, Feathered Bloom) */}
      <div
        ref={coreGlowRef}
        className="pointer-events-none fixed top-0 left-0 w-[190px] h-[190px] -mt-[95px] -ml-[95px] rounded-full opacity-0 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.18) 28%, rgba(255, 255, 255, 0.05) 55%, transparent 72%)',
          mixBlendMode: 'screen',
          filter: 'blur(12px)',
          transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1), height 0.35s cubic-bezier(0.16, 1, 0.3, 1), margin 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease'
        }}
      />
    </div>
  );
}
