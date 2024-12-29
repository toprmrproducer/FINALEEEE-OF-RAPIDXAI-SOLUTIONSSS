import { useRef, RefObject } from 'react';
import { useThree } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { useMousePosition } from './useMousePosition';
import { lerp } from '../utils/math';

export function useStarAnimation(meshRef: RefObject<Mesh>) {
  const { viewport } = useThree();
  const mousePosition = useMousePosition();
  const targetRotation = useRef(new Vector3(0, 0, 0));
  const baseRotation = useRef(0);
  const isHovered = useRef(false);

  const handleMouseMove = () => {
    if (!meshRef.current) return;

    baseRotation.current += 0.005;
    
    const x = (mousePosition.x / viewport.width) * 2;
    const y = (mousePosition.y / viewport.height) * -2;

    targetRotation.current.set(
      y * (isHovered.current ? 0.5 : 0.3),
      baseRotation.current + (x * (isHovered.current ? 0.5 : 0.3)),
      0
    );

    meshRef.current.rotation.x = lerp(meshRef.current.rotation.x, targetRotation.current.x, 0.1);
    meshRef.current.rotation.y = lerp(meshRef.current.rotation.y, targetRotation.current.y, 0.1);
  };

  const handleHover = (hovering: boolean) => {
    isHovered.current = hovering;
    if (meshRef.current) {
      meshRef.current.scale.setScalar(hovering ? 9.5 : 8.5); // Increased base and hover sizes
    }
  };

  return { handleMouseMove, handleHover };
}