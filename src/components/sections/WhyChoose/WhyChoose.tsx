import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { StatsGrid } from './StatsGrid';
import { GridBackground } from '../../effects/GridBackground';

export function WhyChoose() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose RapidX.AI"
          description="Experience the future of business automation with our specialized AI teams"
          gradient
        />
        
        <StatsGrid />
      </div>
    </section>
  );
}