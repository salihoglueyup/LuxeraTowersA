import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MaskRevealImage = ({ src, alt, className = '', overlayColor = 'bg-luxera-gold' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* 1. Alttaki Gerçek Resim */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1 } : { scale: 1.2 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
      />
      
      {/* 2. Resmin Önündeki Maske (Reveal Efekti) */}
      <motion.div
        className={`absolute inset-0 ${overlayColor} z-10`}
        initial={{ x: "0%" }}
        animate={isInView ? { x: "100%" } : { x: "0%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
};

export default MaskRevealImage;
