import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

// Numaralı adım/süreç bandı.
// steps: [{ title: string, desc: string, icon?: ReactNode }]
// title/overline/watermark: opsiyonel başlık; verilmezse SectionHeader atlanır.
const ProcessSteps = ({ steps = [], title, overline, subtitle, watermark, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 ${className}`}>
      {title && (
        <SectionHeader overline={overline} title={title} subtitle={subtitle} watermark={watermark} />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="relative bg-luxera-charcoal border border-luxera-gold/10 rounded-2xl p-8 hover:border-luxera-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-[colors,box-shadow] group"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-5xl font-serif text-luxera-gold/20 leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              {step.icon && (
                <div className="text-luxera-gold bg-luxera-gold/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-luxera-gold group-hover:text-luxera-navy transition-colors">
                  {step.icon}
                </div>
              )}
            </div>
            <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
