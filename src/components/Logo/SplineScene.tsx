import React from 'react';
import Spline from '@splinetool/react-spline';

export function SplineScene() {
  return (
    <div className="w-full h-[600px] relative">
      <Spline 
        scene="/src/components/Logo/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%',
          transform: 'scale(0.8)',
          transformOrigin: 'center center'
        }}
      />
    </div>
  );
}