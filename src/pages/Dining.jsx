import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, MapPin, Utensils } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { dining } from '../data/brands';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';

const Dining = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <PageHero
        overline="Gastronomi Kültürü"
        title="Yeme &"
        highlight="İçme"
        subtitle="Michelin yıldızı vizyonuna sahip şeflerin ilham aldığı gurme restoranlar ve üçüncü nesil kahvecilerle lezzet yolculuğu."
        backgroundImage="/images/exterior/4_2025-12-18_02-46-35_e74cd5 (1).webp"
      />

      <div className="max-w-7xl mx-auto px-6 mt-24">
        <SectionHeader 
          title="Seçkin Mekanlar"
          subtitle="Dünya mutfağından seçmeler ve premium kafeler."
          watermark="LEZZET"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dining.map((place) => (
            <motion.div
              variants={fadeUp}
              key={place.id}
              className="bg-luxera-charcoal border border-luxera-gold/10 p-8 rounded-2xl hover:border-luxera-gold/40 transition-colors group flex flex-col"
            >
              <div className="w-16 h-16 bg-luxera-gold/5 rounded-full flex items-center justify-center text-luxera-gold mb-6 group-hover:bg-luxera-gold group-hover:text-luxera-navy transition-colors">
                {place.category.includes('Kafe') ? <Coffee size={28} /> : <Utensils size={28} />}
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">{place.name}</h3>
              <p className="text-luxera-gold text-sm tracking-widest uppercase mb-4">{place.category}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{place.description}</p>
              
              <div className="flex items-center gap-2 text-gray-500 text-xs border-t border-white/5 pt-4">
                <MapPin size={14} />
                <span>Konum: {place.floor}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Dining;
