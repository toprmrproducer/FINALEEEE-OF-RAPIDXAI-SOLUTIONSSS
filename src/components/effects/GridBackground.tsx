import React, { useEffect, useRef } from 'react';

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid properties
    const gridSize = 40;
    let mouseX = 0;
    let mouseY = 0;

    // Draw grid
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate grid dimensions
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      // Offset for scrolling effect
      const scrollOffset = window.scrollY * 0.5;
      const yOffset = scrollOffset % gridSize;

      for (let i = 0; i <= cols; i++) {
        for (let j = -1; j <= rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize - yOffset;

          // Calculate distance from mouse
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;
          
          // Calculate opacity based on distance
          const opacity = Math.max(0.1, Math.min(0.5, 1 - distance / maxDistance));
          ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
          ctx.lineWidth = opacity;

          // Draw vertical line
          ctx.beginPath();
          ctx.moveTo(x, y - gridSize);
          ctx.lineTo(x, y + gridSize);
          ctx.stroke();

          // Draw horizontal line
          ctx.beginPath();
          ctx.moveTo(x - gridSize, y);
          ctx.lineTo(x + gridSize, y);
          ctx.stroke();

          // Add glow effect at intersections
          if (distance < maxDistance) {
            ctx.fillStyle = `rgba(0, 255, 255, ${opacity * 0.2})`;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Handle scroll for parallax effect
    window.addEventListener('scroll', drawGrid);

    // Animation loop
    let animationFrame: number;
    function animate() {
      drawGrid();
      animationFrame = requestAnimationFrame(animate);
    }
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', drawGrid);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ background: 'transparent' }}
    />
  );
}