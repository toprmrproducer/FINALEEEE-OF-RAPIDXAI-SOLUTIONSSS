import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { InteractiveStar } from './InteractiveStar';

export function StarScene() {
  return (
    <div className="w-full h-full relative cursor-none">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <InteractiveStar />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}