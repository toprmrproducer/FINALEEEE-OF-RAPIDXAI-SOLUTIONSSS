import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface CubeProps {
  position: [number, number, number];
  rotation: [number, number, number];
  color?: string;
}

export function Cube({ position, rotation, color = '#00b4d8' }: CubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={2}
        clearcoat={1}
        clearcoatRoughness={0.1}
        reflectivity={1}
        transparent
        opacity={0.9}
        toneMapped={false}
      />
    </mesh>
  );
}