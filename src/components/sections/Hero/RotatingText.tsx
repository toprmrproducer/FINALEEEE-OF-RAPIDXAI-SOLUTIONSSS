import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../../effects/TypewriterText';

const phrases = [
  "AI Powered Employees",
  "Voice Agents that Can Make and Receive Calls",
  "Chatbots that will Fix Customer Support",
  "AI Outreach Squads",
  "AI Powered Personal Assistants"
];

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
      setKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[120px] flex items-center justify-center">
      <TypewriterText
        key={key}
        text={phrases[currentIndex]}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-center"
        speed={30}
      />
    </div>
  );
}