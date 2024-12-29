import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "RapidX.AI's Team Bravo transformed our outbound marketing. We've seen a 3x increase in qualified leads within months."
  },
  {
    name: "Michael Rodriguez",
    role: "Customer Success Manager",
    company: "CloudScale Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    quote: "Team Delta's AI chat support has revolutionized our customer service. Response times dropped from hours to seconds."
  },
  {
    name: "David Park",
    role: "Sales Director",
    company: "InnovateX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "Team Alpha's AI cold calling system has been a game-changer. Our conversion rates have doubled since implementation."
  }
];

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
}