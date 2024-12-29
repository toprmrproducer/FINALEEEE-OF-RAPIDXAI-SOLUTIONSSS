import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useStarAnimation } from './hooks/useStarAnimation';
import { createStarGeometry } from './utils/starGeometry';
import { starMaterial } from './utils/starMaterial';

export function InteractiveStar() {
  const meshRef = useRef<Mesh>(null);
  const { handleMouseMove, handleHover } = useStarAnimation(meshRef);

  useFrame(() => {
    if (!meshRef.current) return;
    handleMouseMove();
  });

  return (
    <mesh 
      ref={meshRef} 
      scale={[6, 6, 6]}
      position={[0, 0, 0]}
      onPointerEnter={() => handleHover(true)}
      onPointerLeave={() => handleHover(false)}
    >
      <primitive object={createStarGeometry()} />
      {starMaterial}
    </mesh>
  );
}