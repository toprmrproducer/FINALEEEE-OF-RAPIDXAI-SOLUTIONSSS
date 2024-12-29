import React from 'react';
import { Hero } from '../components/sections/Hero/Hero';
import { Teams } from '../components/sections/Teams/Teams';
import { WhyChoose } from '../components/sections/WhyChoose/WhyChoose';
import { ServicesBreakdown } from '../components/sections/ServicesBreakdown/ServicesBreakdown';
import { ChoiceSection } from '../components/sections/ChoiceSection/ChoiceSection';
import { HowItWorks } from '../components/sections/HowItWorks/HowItWorks';
import { SocialProof } from '../components/sections/SocialProof/SocialProof';
import { About } from '../components/sections/About/About';
import { Testimonials } from '../components/sections/Testimonials/Testimonials';
import { Resources } from '../components/sections/Resources/Resources';

export function Home() {
  return (
    <>
      <Hero />
      <Teams />
      <WhyChoose />
      <ServicesBreakdown />
      <ChoiceSection />
      <HowItWorks />
      <SocialProof />
      <About />
      <Testimonials />
      <Resources />
    </>
  );
}