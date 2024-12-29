import React from 'react';
import { cn } from '../../utils/cn';
import { TypewriterText } from '../effects/TypewriterText';

interface SectionTitleProps {
  title: string;
  description?: string;
  gradient?: boolean;
}

export function SectionTitle({ title, description, gradient }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <TypewriterText
        text={title}
        className={cn(
          "text-3xl font-bold",
          gradient && "bg-gradient-to-r from-white to-cyan-300 text-transparent bg-clip-text"
        )}
        speed={60}
      />
      {description && (
        <TypewriterText
          text={description}
          className="mt-4 text-gray-400 max-w-3xl mx-auto"
          delay={1000}
          speed={30}
          cursor={false}
        />
      )}
    </div>
  );
}