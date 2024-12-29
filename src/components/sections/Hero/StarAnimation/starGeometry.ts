import { Shape, ExtrudeGeometry } from 'three';

export function createStarGeometry() {
  const starShape = new Shape();
  const scale = 0.5; // Increased scale from 0.3 to 0.5
  
  // Create star points
  const points = [
    [0, 1],    // Top
    [0.2, 0.2], // Inner
    [1, 0],    // Right
    [0.2, -0.2], // Inner
    [0, -1],   // Bottom
    [-0.2, -0.2], // Inner
    [-1, 0],   // Left
    [-0.2, 0.2], // Inner
  ].map(([x, y]) => [x * scale, y * scale]);

  // Draw the star shape
  starShape.moveTo(points[0][0], points[0][1]);
  points.forEach(point => starShape.lineTo(point[0], point[1]));
  starShape.lineTo(points[0][0], points[0][1]);

  // Create geometry with subtle depth
  return new ExtrudeGeometry(starShape, {
    depth: 0.1,
    bevelEnabled: true,
    bevelSegments: 3,
    bevelSize: 0.02,
    bevelThickness: 0.02
  });
}