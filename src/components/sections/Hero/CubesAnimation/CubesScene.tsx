import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { Cube } from './Cube';

const cubePositions = [
  [-4, 0, 0],
  [4, 0, 0],
  [0, 4, 0],
  [0, -4, 0],
  [0, 0, 4],
  [0, 0, -4],
] as const;

export function CubesScene() {
  return (
    <div className="w-full h-[800px]">
      <Canvas
        camera={{ position: [15, 15, 15], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
        }}
      >
        {/* Transparent background */}
        <color attach="background" transparent />
        
        {/* Enhanced lighting for metallic effect */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

        {/* Floating cubes with enhanced metallic material */}
        {cubePositions.map((position, index) => (
          <Float
            key={index}
            speed={1.5} 
            rotationIntensity={1} 
            floatIntensity={2}
            floatingRange={[-0.1, 0.1]}
          >
            <Cube
              position={position}
              rotation={[Math.random(), Math.random(), Math.random()]}
              color={`hsl(${190 + index * 10}, 90%, 70%)`}
            />
          </Float>
        ))}

        {/* Environment map for realistic reflections */}
        <Environment preset="city" />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}