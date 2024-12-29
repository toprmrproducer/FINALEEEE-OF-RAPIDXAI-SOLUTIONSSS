import React from 'react';

export function BranchingArrows() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-full h-24 -mt-8">
      {/* Left Arrow */}
      <div className="absolute left-1/4 transform -translate-x-1/2 w-[200px] opacity-30 group-hover:opacity-100 transition-opacity duration-300">
        <svg viewBox="0 0 200 100" className="w-full">
          <path
            d="M100,0 Q50,50 0,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-600"
          />
          <polygon
            points="0,100 10,85 -10,85"
            fill="currentColor"
            className="text-gray-600"
          />
        </svg>
      </div>

      {/* Right Arrow */}
      <div className="absolute right-1/4 transform translate-x-1/2 w-[200px] opacity-30 group-hover:opacity-100 transition-opacity duration-300">
        <svg viewBox="0 0 200 100" className="w-full">
          <path
            d="M0,0 Q150,50 200,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-cyan-500"
          />
          <polygon
            points="200,100 190,85 210,85"
            fill="currentColor"
            className="text-cyan-500"
          />
        </svg>
      </div>
    </div>
  );
}