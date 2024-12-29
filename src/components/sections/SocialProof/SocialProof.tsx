import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { Stats } from './Stats';
import { Testimonials } from './Testimonials';
import { GridBackground } from '../../effects/GridBackground';

export function SocialProof() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Clients Are Seeing 10x ROI with AI Automation!"
          description="Join hundreds of businesses that have transformed their operations with RapidX.AI"
          gradient
        />
        
        <Stats />
        <Testimonials />
      </div>
    </section>
  );
}