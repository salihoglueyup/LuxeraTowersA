import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const RevealText = ({ text, className = '', as: Component = 'div', delay = 0 }) => {
  const words = text.split(' ');

  return (
    <Component className={`flex flex-wrap ${className}`}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        custom={delay}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            className="mr-[0.25em] pb-[0.1em]"
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Component>
  );
};

export default RevealText;
