import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// İnce imleç (fare) olan cihazlarda mı çalışıyoruz? (mobil/tablet'te kapalı)
const hasFinePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(pointer: fine)').matches;

const CustomCursor = () => {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Konum motion value olarak tutulur → mousemove'da React re-render tetiklenmez
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Dış halka için yumuşak (yaylı) takip
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    // Yalnızca ince pointer'da ve reduced-motion kapalıyken etkinleştir
    if (!hasFinePointer() || reduceMotion) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const updatePosition = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const t = e.target;
      const interactive =
        t.tagName?.toLowerCase() === 'a' ||
        t.tagName?.toLowerCase() === 'button' ||
        t.closest?.('a') ||
        t.closest?.('button') ||
        t.closest?.('[role="button"]');
      setIsHovering(Boolean(interactive));
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Merkez nokta — konumu doğrudan motion value'dan alır (negatif margin ile merkezlenir) */}
      <motion.div
        className="fixed top-0 left-0 -ml-2 -mt-2 w-4 h-4 bg-luxera-gold rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x, y }}
        animate={{ scale: isHovering ? 2 : 1 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      {/* Dış halka — yaylı (gecikmeli) takip */}
      <motion.div
        className="fixed top-0 left-0 -ml-5 -mt-5 w-10 h-10 border border-luxera-gold/50 rounded-full pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: isHovering ? 1.5 : 1, opacity: isHovering ? 0 : 1 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.4 }}
      />
    </>
  );
};

export default CustomCursor;
