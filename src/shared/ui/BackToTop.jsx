import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Sayfada belli bir noktadan sonra beliren, tıklanınca başa dönen zarif buton.
const BackToTop = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 600);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Başa dön"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="fixed bottom-24 right-6 z-[60] w-12 h-12 rounded-full bg-luxera-gold text-luxera-navy flex items-center justify-center shadow-[0_8px_30px_rgba(212,175,55,0.35)] hover:bg-white transition-colors"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
