import React, { useEffect, useRef } from 'react';

export function CursorSparkle() {
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createSparkle = (x: number, y: number) => {
      if (!sparklesRef.current) return;

      const sparkle = document.createElement('div');
      sparkle.className = 'absolute w-2 h-2 bg-cyan-400 rounded-full';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.animation = 'sparkle 0.8s linear forwards';
      sparklesRef.current.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 800);
    };

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          createSparkle(
            e.clientX + (Math.random() - 0.5) * 20,
            e.clientY + (Math.random() - 0.5) * 20
          );
        }, i * 50);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <div ref={sparklesRef} className="fixed inset-0 pointer-events-none z-50" />
      <style>{`
        @keyframes sparkle {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}