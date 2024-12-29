import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { AboutContent } from './AboutContent';
import { GridBackground } from '../../effects/GridBackground';

export function About() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <GridBackground />
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="About RapidX.AI"
          description="We're revolutionizing business automation through cutting-edge AI solutions. Our mission is to empower organizations with intelligent systems that drive efficiency and growth."
        />
        <AboutContent />
      </div>
    </section>
  );
}