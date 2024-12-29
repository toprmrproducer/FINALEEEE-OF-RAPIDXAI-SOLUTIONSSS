import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { Roadmap } from './Roadmap';
import { GridBackground } from '../../effects/GridBackground';

export function HowItWorks() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Here's How RapidX.AI Works:"
          description="Transform your business in three simple steps"
          gradient
        />
        <Roadmap />
      </div>
    </section>
  );
}