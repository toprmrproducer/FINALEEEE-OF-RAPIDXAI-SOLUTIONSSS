import React from 'react';
import { cn } from '../../../utils/cn';
import { TypewriterText } from '../../effects/TypewriterText';

interface ChoiceOptionProps {
  title: string;
  subtitle: string;
  points: string[];
  variant: 'ignore' | 'act';
  ctaButton?: React.ReactNode;
}

export function ChoiceOption({ title, subtitle, points, variant, ctaButton }: ChoiceOptionProps) {
  const isAct = variant === 'act';
  
  return (
    <div className="relative group">
      <div className={cn(
        "absolute -inset-0.5 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-300 blur",
        isAct ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500" : "bg-gray-800/50"
      )} />
      <div className={cn(
        "relative bg-black p-8 rounded-2xl border transition-all duration-300",
        isAct ? "border-cyan-800 group-hover:border-cyan-500/50" : "border-gray-800"
      )}>
        <TypewriterText
          text={title}
          className={cn(
            "text-2xl font-bold mb-6",
            isAct ? "text-cyan-400" : "text-gray-400"
          )}
          speed={50}
        />
        <TypewriterText
          text={subtitle}
          className="text-xl font-bold text-white mb-8"
          speed={40}
          delay={500}
        />
        <ul className="space-y-4 text-gray-400 mb-8">
          {points.map((point, index) => (
            <li 
              key={index} 
              className={cn(
                "flex items-start gap-2 transition-all duration-300 transform",
                "hover:translate-x-2"
              )}
            >
              <span className={isAct ? "text-cyan-400" : "text-red-500"}>→</span>
              <TypewriterText
                text={point}
                className={cn(
                  "text-gray-300",
                  isAct ? "group-hover:text-cyan-300" : "group-hover:text-red-300"
                )}
                speed={30}
                delay={1000 + index * 200}
              />
            </li>
          ))}
        </ul>
        {ctaButton}
      </div>
    </div>
  );
}