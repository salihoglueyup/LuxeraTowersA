import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { stores } from '../data/brands';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';

const Stores = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <PageHero
        overline="AVM & Yaşam"
        title="Mağazalar &"
        highlight="Markalar"
        subtitle="Dünyaca ünlü markalar, prestijli tasarımcı butikleri ve seçkin perakende mağazaları bir asansör uzağınızda."
        backgroundImage="/images/exterior/10_2025-12-18_02-46-35_72a99a.webp"
      />

      <div className="max-w-7xl mx-auto px-6 mt-24">
        <SectionHeader 
          title="Marka Karması (Brand-Mix)"
          subtitle="Modadan teknolojiye, kozmetikten lüks giyime 87 seçkin mağaza."
          watermark="MAĞAZA"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {stores.map((store) => (
            <motion.div
              variants={fadeUp}
              key={store.id}
              className="bg-luxera-charcoal border border-luxera-gold/10 p-6 rounded-2xl hover:border-luxera-gold/40 transition-colors group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black font-serif text-3xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                {store.logo}
              </div>
              <h3 className="text-xl font-serif text-white mb-1">{store.name}</h3>
              <p className="text-luxera-gold text-xs tracking-widest uppercase mb-4">{store.category}</p>
              
              <div className="flex items-center justify-center gap-1 text-gray-500 text-xs border-t border-white/5 pt-3 w-full mt-auto">
                <MapPin size={14} />
                <span>Konum: {store.floor}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stores;
