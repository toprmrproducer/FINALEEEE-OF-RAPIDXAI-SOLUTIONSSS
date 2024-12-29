import React, { useEffect, useRef } from 'react';

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = glow.getBoundingClientRect();
      const x = e.clientX - rect.width / 2;
      const y = e.clientY - rect.height / 2;
      
      glow.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={glowRef}
      className="fixed top-0 left-0 w-[200px] h-[200px] pointer-events-none z-50 transition-transform duration-150 ease-out"
    >
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl" />
    </div>
  );
}