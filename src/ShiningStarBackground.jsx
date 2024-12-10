import React from 'react';

const ShiningStarBackground = ({children}) => {
  // Generate an array of random star positions with larger sizes
  const stars = Array.from({ length: 100 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 5 + 3}px`, // Increased size of stars
  }));

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full  animate-twinkle"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
            backgroundColor: '#FFD700', // Golden color for stars
            boxShadow: '0 0 15px rgba(255, 215, 0, 0.8)', // Golden glow effect
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default ShiningStarBackground;
