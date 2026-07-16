import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, ShoppingBag, Train } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, zoomIn } from '../../shared/utils/animations';

const Highlights = () => {
  const { t } = useTranslation();

  const HIGHLIGHTS = [
    { icon: Building2, value: '2', label: t('highlights.towers', 'Görkemli Kule') },
    { icon: Home, value: '369', label: t('highlights.residences', 'Özel Rezidans') },
    { icon: ShoppingBag, value: '87', label: t('highlights.mall', 'Lüks Mağaza') },
    { icon: Train, value: '2', label: t('highlights.metro', 'Dk Mimar Sinan Metrosu') },
  ];

  return (
    <section id="proje" className="py-24 bg-luxera-charcoal relative z-20 -mt-10 border-t border-luxera-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {HIGHLIGHTS.map((item, idx) => (
            <motion.div key={idx} variants={zoomIn} className="text-center group">
              <div className="mx-auto w-16 h-16 rounded-full border border-luxera-gold/30 flex items-center justify-center mb-6 group-hover:border-luxera-gold group-hover:bg-luxera-gold/10 group-hover:scale-110 transition-all duration-300">
                <item.icon className="text-luxera-gold" size={28} />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">{item.value}</h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs md:text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
