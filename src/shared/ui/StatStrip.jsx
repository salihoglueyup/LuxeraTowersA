import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

// Animasyonlu rakam bandı.
// stats: [{ value: number, suffix?: string, label: string, prefix?: string }]
// value string ise (ör. '65%') düz gösterilir; sayı ise AnimatedCounter ile animasyonlanır.
const StatStrip = ({ stats = [], className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-luxera-charcoal border border-luxera-gold/20 rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-luxera-gold/5 rounded-full blur-3xl pointer-events-none" />
        {stats.map((s, i) => (
          <div key={s.label} className="text-center relative z-10">
            <div className="text-4xl md:text-5xl font-serif text-luxera-gold mb-2">
              {typeof s.value === 'number' ? (
                <>
                  {s.prefix || ''}
                  <AnimatedCounter value={s.value} suffix={s.suffix || ''} />
                </>
              ) : (
                <span>{s.value}</span>
              )}
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-500">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatStrip;
