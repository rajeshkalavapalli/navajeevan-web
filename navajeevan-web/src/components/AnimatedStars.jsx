import React, { useEffect, useRef } from 'react';

const generateRandom = (min, max) => Math.random() * (max - min) + min;

const AnimatedStars = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const totalStars = 120;
    const layers = 3;

    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      const layer = i % layers;
      const size = generateRandom(1, 2.5 - layer * 0.5);
      const star = document.createElement('div');

      star.className = `absolute rounded-full bg-white`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${generateRandom(0, 100)}%`;
      star.style.left = `${generateRandom(0, 100)}%`;
      star.style.opacity = `${generateRandom(0.3, 0.9)}`;
      star.style.filter = `blur(${layer}px)`;
      star.style.animation = `twinkle ${generateRandom(2, 5)}s infinite ease-in-out`;
      star.style.zIndex = `${layer}`;

      container.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach((star) => container.removeChild(star));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d0e2c, #1e2150, #2d325f)',
        pointerEvents: 'none',
      }}
    >
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedStars;
