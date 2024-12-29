import React from 'react';
import { Cpu, Network, Zap } from 'lucide-react';
import { AboutCard } from './AboutCard';

const features = [
  {
    icon: Cpu,
    title: 'Advanced AI',
    description: 'State-of-the-art artificial intelligence powering your business processes'
  },
  {
    icon: Network,
    title: 'Seamless Integration',
    description: 'Effortlessly integrate our solutions with your existing infrastructure'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Quick implementation and deployment of AI solutions'
  }
];

export function AboutContent() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <AboutCard key={index} {...feature} />
      ))}
    </div>
  );
}