import React, { useEffect, useRef } from 'react';

export function EnhancedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.3;
      cursorY += dy * 0.3;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      glow.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', moveCursor);
    animate();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Glow effect */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[99]"
        style={{ filter: 'blur(4px)' }}
      >
        <div className="relative w-8 h-8">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M16 2L30 28H2L16 2Z"
              fill="#00f7ff"
              fillOpacity="0.3"
              transform="rotate(-45, 16, 16)"
            />
          </svg>
        </div>
      </div>

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[100]"
      >
        <div className="relative w-8 h-8">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M16 2L30 28H2L16 2Z"
              fill="none"
              stroke="#00f7ff"
              strokeWidth="2"
              transform="rotate(-45, 16, 16)"
            />
            <path
              d="M16 6L26 24H6L16 6Z"
              fill="#00f7ff"
              transform="rotate(-45, 16, 16)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}