import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// This component creates a horizontal scrolling section while scrolling vertically
const HorizontalScroll = ({ children }) => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal movement based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]); // Assuming 3 screens width

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-luxera-charcoal">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-8 md:px-24">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
