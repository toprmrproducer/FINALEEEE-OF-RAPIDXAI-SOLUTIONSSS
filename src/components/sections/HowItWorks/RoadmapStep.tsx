import React from 'react';
import { LucideIcon } from 'lucide-react';
import { TypewriterText } from '../../effects/TypewriterText';

interface RoadmapStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
  isLast?: boolean;
}

export function RoadmapStep({ icon: Icon, title, description, step, isLast }: RoadmapStepProps) {
  return (
    <div className="relative group">
      {/* Step Number */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-cyan-400 font-display text-sm tracking-wider">
        Step {step}
      </div>
      
      {/* Icon Circle */}
      <div className="relative z-10 mx-auto w-20 h-20 mb-6">
        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/40 transition-colors duration-300" />
        <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
          <Icon className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <TypewriterText
          text={title}
          className="text-xl font-bold text-white mb-3"
          delay={step * 200}
        />
        <TypewriterText
          text={description}
          className="text-gray-400"
          delay={1000 + step * 200}
          cursor={false}
        />
      </div>
    </div>
  );
}