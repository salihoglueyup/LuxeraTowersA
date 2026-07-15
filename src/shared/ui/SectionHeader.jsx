import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const SectionHeader = ({ title, subtitle, overline, watermark, align = 'center' }) => {
  const alignmentClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  const marginClass = align === 'left' ? 'mr-auto' : align === 'right' ? 'ml-auto' : 'mx-auto';

  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className={`mb-16 relative ${alignmentClass}`}
    >
      {/* Watermark */}
      {watermark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[200px] font-serif font-bold text-white/5 whitespace-nowrap pointer-events-none select-none z-0">
          {watermark}
        </div>
      )}

      <div className="relative z-10">
        {/* Overline */}
        {overline && (
          <div className="flex items-center gap-4 mb-4 justify-center">
            {align !== 'left' && <div className="h-[1px] w-12 bg-luxera-gold"></div>}
            <p className="text-luxera-gold uppercase tracking-[0.3em] text-xs font-semibold">{overline}</p>
            {align !== 'right' && <div className="h-[1px] w-12 bg-luxera-gold"></div>}
          </div>
        )}

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 uppercase tracking-wider">
          {title}
        </h2>
        
        {!overline && <div className={`w-24 h-1 bg-luxera-gold mb-6 ${marginClass}`}></div>}
        
        {subtitle && <p className={`text-gray-400 max-w-2xl text-lg ${marginClass}`}>{subtitle}</p>}
      </div>
    </motion.div>
  );
};

export default SectionHeader;
