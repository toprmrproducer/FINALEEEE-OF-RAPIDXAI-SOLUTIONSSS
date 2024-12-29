import React from 'react';
import { ArrowDownLeft, ArrowDownRight } from 'lucide-react';

export function ChoiceTitle() {
  return (
    <div className="text-center mb-16 relative">
      {/* Animated background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      
      {/* Title with gradient text */}
      <h2 className="relative text-4xl md:text-6xl font-display font-bold mb-8">
        <span className="text-white">YOU'VE GOT </span>
        <span className="relative inline-block">
          {/* Animated gradient background */}
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-lg animate-glow-pulse" />
          <span className="relative bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text hover:scale-110 transition-transform duration-300">
            2 OPTIONS
          </span>
        </span>
        <span className="text-white"> TO CHOOSE FROM</span>
      </h2>

      {/* Arrows */}
      <div className="relative h-24 flex justify-center">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse" />
        
        {/* Arrows container */}
        <div className="absolute w-full top-12 flex justify-between px-16">
          {/* Left Arrow */}
          <div className="transform -translate-x-8 group cursor-pointer">
            <ArrowDownLeft 
              className="w-12 h-12 text-gray-600 group-hover:text-red-500 transition-colors duration-300 animate-bounce" 
              style={{ animationDelay: '0.2s' }}
            />
          </div>
          
          {/* Right Arrow */}
          <div className="transform translate-x-8 group cursor-pointer">
            <ArrowDownRight 
              className="w-12 h-12 text-cyan-500 group-hover:text-fuchsia-500 transition-colors duration-300 animate-bounce"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}