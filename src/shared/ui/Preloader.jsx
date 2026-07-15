import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2.5 saniye sonra preloader'ı kaldır
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Animasyonun bitmesi için ek süre
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-luxera-charcoal flex items-center justify-center overflow-hidden"
          exit={{ y: '-100%', transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            <img src="/images/logo/logo.webp" alt="Luxera Towers" className="h-24 w-auto brightness-0 invert mb-8" />
            
            {/* Altın Çizgi Yükleme Animasyonu */}
            <div className="w-64 h-[1px] bg-gray-800 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-luxera-gold"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-luxera-gold uppercase tracking-[0.5em] mt-6 text-sm font-light"
            >
              Yükleniyor
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
