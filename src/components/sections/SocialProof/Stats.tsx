import React from 'react';
import { TypewriterText } from '../../effects/TypewriterText';

const stats = [
  { value: "65%", label: "Increase in Lead Generation" },
  { value: "24/7", label: "Customer Support Coverage" },
  { value: "30%", label: "Cost Savings on Marketing" }
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {stats.map((stat, index) => (
        <div key={index} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg opacity-20 group-hover:opacity-100 transition duration-300 blur" />
          <div className="relative bg-black p-8 rounded-lg text-center">
            <TypewriterText
              text={stat.value}
              className="text-5xl font-bold bg-gradient-to-r from-white to-cyan-300 text-transparent bg-clip-text mb-2"
              delay={index * 200}
            />
            <TypewriterText
              text={stat.label}
              className="text-gray-400"
              delay={1000 + index * 200}
              cursor={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
}