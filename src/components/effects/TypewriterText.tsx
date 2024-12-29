import React, { useEffect, useState, useRef } from 'react';
import { cn } from '../../utils/cn';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}

export function TypewriterText({ 
  text, 
  className,
  delay = 0,
  speed = 50,
  cursor = true 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, started]);

  return (
    <div 
      ref={elementRef}
      className={cn(
        'font-mono',
        cursor && 'after:content-["_"] after:animate-pulse after:text-cyan-400',
        className
      )}
    >
      {displayText}
    </div>
  );
}