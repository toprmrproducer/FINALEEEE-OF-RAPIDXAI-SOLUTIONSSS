import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { TestimonialCard } from './TestimonialCard';
import { VideoTestimonials } from './VideoTestimonials';
import { testimonials } from './testimonialData';
import { GridBackground } from '../../effects/GridBackground';

export function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Trusted by Industry Leaders"
          description="See how RapidX.AI is transforming businesses across sectors"
          gradient
        />
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-32">
          <SectionTitle
            title="Watch Our Client Success Stories"
            description="Hear directly from our clients about their experience with RapidX.AI"
            gradient
          />
          <div className="mt-16">
            <VideoTestimonials />
          </div>
        </div>
      </div>
    </section>
  );
}