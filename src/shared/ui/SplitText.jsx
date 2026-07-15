import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ text, className = '', delay = 0 }) => {
  // Metni kelimelere böler, aralardaki boşlukları korumak için \u00A0 ekler.
  // Not: Metin içinde <br /> varsa bunu parse etmez, o yüzden basit metinler için idealdir.
  // Bu yüzden React elementleri de alabilen daha esnek bir versiyon yazıyoruz.
  
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      }
    }
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -20,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-2" style={{ marginRight: '0.25em' }}>
          <motion.span variants={child} className="inline-block origin-bottom">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default SplitText;
