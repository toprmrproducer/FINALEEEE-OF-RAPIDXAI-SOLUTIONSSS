import React from 'react';
import { TypewriterText } from '../../effects/TypewriterText';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export function TestimonialCard({ name, role, company, image, quote }: TestimonialCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
      <div className="relative bg-black p-8 rounded-2xl">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-cyan-500/50 rounded-full blur" />
            <img
              src={image}
              alt={name}
              className="relative w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <TypewriterText
              text={name}
              className="text-lg font-semibold text-white"
              speed={50}
            />
            <TypewriterText
              text={role}
              className="text-cyan-400 text-sm"
              delay={500}
              speed={30}
            />
            <TypewriterText
              text={company}
              className="text-gray-400 text-sm"
              delay={800}
              speed={30}
            />
          </div>
        </div>
        <TypewriterText
          text={quote}
          className="text-gray-300 italic"
          delay={1200}
          speed={20}
        />
      </div>
    </div>
  );
}