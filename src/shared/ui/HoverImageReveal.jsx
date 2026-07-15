import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HoverImageReveal = ({ text, imageSrc, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Fare hareketlerini dinleyelim
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block cursor-pointer relative ${className}`}
    >
      <span className="relative z-10 transition-colors duration-300 hover:text-luxera-gold">
        {text}
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed pointer-events-none z-[100] w-64 h-40 rounded-xl overflow-hidden shadow-2xl border border-luxera-gold/30"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              // Fare noktasını tam merkeze almak için transform (-50%, -50%)
              x: '-50%',
              y: '-50%'
            }}
          >
            <img src={imageSrc} alt={text} className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverImageReveal;
