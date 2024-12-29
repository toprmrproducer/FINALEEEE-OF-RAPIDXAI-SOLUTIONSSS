import { useState, useEffect } from 'react';
import { Vector2 } from 'three';

export function useMousePosition() {
  const [position, setPosition] = useState(new Vector2(0, 0));

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setPosition(new Vector2(x, y));
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return position;
}