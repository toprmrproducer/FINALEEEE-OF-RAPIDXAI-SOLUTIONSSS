import React from 'react';
import { RoadmapStep } from './RoadmapStep';
import { CalendarCheck, Lightbulb, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book a Free Discovery Call',
    description: 'Schedule a consultation to discuss your business needs and goals with our AI experts.',
    step: 1
  },
  {
    icon: Lightbulb,
    title: 'Get Your Custom AI Plan',
    description: 'Receive tailored recommendations for implementing AI solutions across your business.',
    step: 2
  },
  {
    icon: TrendingUp,
    title: 'Watch Your Business Scale',
    description: 'Experience transformative results as our AI-powered teams optimize your operations.',
    step: 3
  }
];

export function Roadmap() {
  return (
    <div className="relative mt-20">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600/20 via-cyan-400/40 to-cyan-600/20 transform -translate-y-1/2 hidden md:block" />
      
      <div className="grid md:grid-cols-3 gap-12 relative">
        {steps.map((step, index) => (
          <RoadmapStep
            key={index}
            {...step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}