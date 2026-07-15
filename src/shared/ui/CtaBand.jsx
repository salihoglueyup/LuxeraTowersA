import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LuxuryButton from './LuxuryButton';

// Standart alt CTA bandı. Sayfaların sonunda tekrarlanan "iletişime geç" deseni.
// Props: title, desc, primary={label, href}, secondary={label, href}, backgroundImage
const CtaBand = ({
  title = 'Ayrıcalıklı Yaşam Sizi Bekliyor',
  desc = 'Uzman satış danışmanlarımızla görüşerek size en uygun seçenekleri keşfedin ve projeyi yakından tanıyın.',
  primary = { label: 'İletişime Geçin', href: '/iletisim' },
  secondary,
  backgroundImage = '/images/exterior/8_2025-12-18_02-46-35_36bf45.webp',
  className = '',
}) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden border border-luxera-gold/20"
      >
        <img src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxera-navy via-luxera-navy/90 to-luxera-navy/50" />
        <div className="relative z-10 p-12 md:p-20 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">{title}</h2>
          <p className="text-gray-300 leading-relaxed mb-10">{desc}</p>
          <div className="flex flex-wrap gap-4">
            <LuxuryButton variant="primary" href={primary.href} icon={<ArrowRight size={18} />}>
              {primary.label}
            </LuxuryButton>
            {secondary && (
              <LuxuryButton variant="outline" href={secondary.href}>
                {secondary.label}
              </LuxuryButton>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CtaBand;
