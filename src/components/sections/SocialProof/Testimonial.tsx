import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export function Testimonial({ name, role, company, image, quote }: TestimonialProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
      <div className="relative bg-black p-8 rounded-2xl">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-cyan-500/50 rounded-full blur" />
            <img
              src={image}
              alt={name}
              className="relative w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">{name}</h4>
            <p className="text-cyan-400 text-sm">{role}</p>
            <p className="text-gray-400 text-sm">{company}</p>
          </div>
        </div>
        <blockquote className="text-gray-300 italic">{quote}</blockquote>
      </div>
    </div>
  );
}