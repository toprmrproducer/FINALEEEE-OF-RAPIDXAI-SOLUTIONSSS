import React from 'react';
import { TypewriterText } from '../../effects/TypewriterText';
import { Shield, Sword } from '../../icons/MilitaryIcons';
import { AnimatedIcon } from '../../ui/AnimatedIcon';

const stats = [
  { value: '30+', label: 'Projects Delivered' },
  { value: '70+', label: 'Happy Clients' },
  { value: '98%', label: 'Satisfaction Rate' }
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
          <div className="relative bg-black p-8 rounded-2xl border border-gray-800 text-center">
            <div className="flex justify-center mb-4">
              {index === 0 && <AnimatedIcon icon={Shield} className="w-8 h-8 text-cyan-400" animation="bounce" />}
              {index === 1 && <AnimatedIcon icon={Sword} className="w-8 h-8 text-cyan-400" animation="sway" />}
              {index === 2 && (
                <div className="relative">
                  <AnimatedIcon icon={Shield} className="w-8 h-8 text-cyan-400" animation="pulse" />
                  <AnimatedIcon icon={Sword} className="w-6 h-6 text-cyan-400 absolute top-1 left-1" animation="pulse" />
                </div>
              )}
            </div>
            <TypewriterText
              text={stat.value}
              className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 text-transparent bg-clip-text mb-2"
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