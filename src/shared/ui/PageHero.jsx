import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PageHero = ({ overline, title, highlight, subtitle, children, center = true, backgroundImage }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  if (backgroundImage) {
    return (
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-16 pt-32 pb-24">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img src={backgroundImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-luxera-navy/80 bg-gradient-to-t from-luxera-navy to-transparent" />
        </motion.div>

        <div className={`relative z-10 max-w-4xl px-6 w-full ${center ? 'mx-auto text-center' : ''}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            {overline && (
              <div className={`flex items-center gap-4 mb-6 ${center ? 'justify-center' : ''}`}>
                <div className="h-[1px] w-12 bg-luxera-gold"></div>
                <p className="text-luxera-gold uppercase tracking-[0.3em] text-sm font-semibold">{overline}</p>
                {center && <div className="h-[1px] w-12 bg-luxera-gold"></div>}
              </div>
            )}
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              {title}
              {highlight && <> <span className="text-luxera-gold italic">{highlight}</span></>}
            </h1>
            {subtitle && (
              <p className={`text-gray-300 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
                {subtitle}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-luxera-gold text-xs uppercase tracking-widest font-semibold">Keşfet</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
              className="absolute top-0 left-0 w-full h-1/2 bg-luxera-gold"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  // Fallback if no background image is provided
  return (
    <div className={`max-w-4xl ${center ? 'mx-auto text-center' : ''} px-6 mb-16 pt-16`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {overline && (
          <div className={`flex items-center gap-4 mb-6 ${center ? 'justify-center' : ''}`}>
            <div className="h-[1px] w-12 bg-luxera-gold"></div>
            <p className="text-luxera-gold uppercase tracking-[0.3em] text-sm font-semibold">{overline}</p>
            {center && <div className="h-[1px] w-12 bg-luxera-gold"></div>}
          </div>
        )}
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          {title}
          {highlight && <> <span className="text-luxera-gold italic">{highlight}</span></>}
        </h1>
        {subtitle && (
          <p className={`text-gray-400 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </motion.div>
    </div>
  );
};

export default PageHero;
