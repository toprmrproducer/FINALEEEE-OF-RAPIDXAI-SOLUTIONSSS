import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate(${clientX - 15}px, ${clientY - 3}px)`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, input, [role="button"], .interactive');
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', () => setIsHovered(false));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', () => setIsHovered(false));
    };
  }, []);

  const scale = isHovered ? 1.5 : 1;
  const size = 30; // Increased base size from 20 to 30

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[100] transition-transform duration-150"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <path
          d="M3 2L10 17L13 10L19 7L3 2Z"
          fill="#00e5ff"
          stroke="#006d7a"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}