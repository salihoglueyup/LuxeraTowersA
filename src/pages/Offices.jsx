import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { offices } from '../data/brands';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';

const Offices = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <PageHero
        overline="Ticari Alanlar"
        title="Ofisler &"
        highlight="Şirketler"
        subtitle="İş dünyasının devleri Luxera Towers'ta buluşuyor. Modern ofis katlarımızda yer alan seçkin şirketler."
        backgroundImage="/images/exterior/1_2025-12-18_02-46-34_3de865.webp"
      />

      <div className="max-w-7xl mx-auto px-6 mt-24">
        <SectionHeader 
          title="Kurumsal Kiracılarımız"
          subtitle="A+ ofis katlarımızda yer alan global ve ulusal markalar."
          watermark="OFİS"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offices.map((office) => (
            <motion.div
              variants={fadeUp}
              key={office.id}
              className="bg-luxera-charcoal border border-luxera-gold/10 p-8 rounded-2xl hover:border-luxera-gold/40 transition-colors group"
            >
              <div className="w-16 h-16 bg-luxera-gold/5 rounded-full flex items-center justify-center text-luxera-gold mb-6 group-hover:bg-luxera-gold group-hover:text-luxera-navy transition-colors">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">{office.name}</h3>
              <p className="text-luxera-gold text-sm tracking-widest uppercase mb-4">{office.sector}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 h-16">{office.description}</p>
              
              <div className="flex items-center gap-2 text-gray-500 text-xs border-t border-white/5 pt-4">
                <Building size={14} />
                <span>Kat: {office.floor}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Offices;
