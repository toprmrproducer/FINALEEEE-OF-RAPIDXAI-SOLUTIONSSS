import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh, Vector2, Shape, ExtrudeGeometry, ExtrudeGeometryOptions } from 'three';

export function Star() {
  const meshRef = useRef<Mesh>(null);
  const { pointer } = useThree();
  const mousePosition = useRef(new Vector2());

  useFrame((state) => {
    if (!meshRef.current) return;

    // Update mouse position with smoothing
    mousePosition.current.lerp(pointer, 0.1);
    
    // Rotate based on mouse position
    meshRef.current.rotation.x = mousePosition.current.y * 0.5;
    meshRef.current.rotation.y = mousePosition.current.x * 0.5;
    
    // Add gentle continuous rotation
    meshRef.current.rotation.z += 0.001;
  });

  // Create smaller star shape (30% of original size)
  const starShape = new Shape();
  const points = [
    [0, 15],    // Top point
    [3, 3],     // Inner point
    [15, 0],    // Right point
    [3, -3],    // Inner point
    [0, -15],   // Bottom point
    [-3, -3],   // Inner point
    [-15, 0],   // Left point
    [-3, 3],    // Inner point
  ];

  starShape.moveTo(points[0][0], points[0][1]);
  points.forEach((point) => starShape.lineTo(point[0], point[1]));
  starShape.lineTo(points[0][0], points[0][1]);

  const extrudeSettings: ExtrudeGeometryOptions = {
    depth: 2,
    bevelEnabled: true,
    bevelSegments: 5,
    bevelSize: 1,
    bevelThickness: 1
  };

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <extrudeGeometry args={[starShape, extrudeSettings]} />
      <meshPhysicalMaterial
        color="#00b4d8"
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