import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  rating: number;
  testimonial: string;
  logo?: string;
}

export function TestimonialCard({ name, role, company, rating, testimonial, logo }: TestimonialCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
      <div className="relative bg-black p-8 rounded-2xl">
        {logo && (
          <div className="mb-6">
            <img src={logo} alt={company} className="h-12 object-contain" />
          </div>
        )}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
          ))}
        </div>
        <blockquote className="text-gray-300 italic mb-6">{testimonial}</blockquote>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-cyan-400 text-sm">{role}</p>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
}