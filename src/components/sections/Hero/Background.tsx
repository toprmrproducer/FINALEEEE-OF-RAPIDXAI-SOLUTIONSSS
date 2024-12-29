import React from 'react';

export function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-black" />
    </div>
  );
}