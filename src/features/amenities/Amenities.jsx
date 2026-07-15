import React from 'react';
import { motion } from 'framer-motion';
import { Trees, Dumbbell, ShoppingBag, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../shared/ui/SectionHeader';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Amenities = () => {
  const { t } = useTranslation();

  const AMENITIES = [
    { icon: Trees, title: t('amenities.gardens.title', 'Gökyüzü Bahçeleri'), desc: t('amenities.gardens.desc', 'Her kat arasında dikey bahçeler ve dinlenme alanları.'), img: '/images/amenities/d5_scene1_20240303_042825copy_2025-12-18_03-46-29_4a00ef.webp' },
    { icon: Dumbbell, title: t('amenities.fitness.title', 'Fitness & SPA'), desc: t('amenities.fitness.desc', 'Son teknoloji fitness salonu, buhar odası ve masaj odaları.'), img: '/images/amenities/d5_scene10_20240303_023622copy_2025-12-18_03-46-29_3601d4.webp' },
    { icon: ShoppingBag, title: t('amenities.mall.title', 'Lüks AVM'), desc: t('amenities.mall.desc', 'Dünyaca ünlü markalar, restoranlar ve kafeler bir asansör uzağınızda.'), img: '/images/amenities/d5_scene15_20240303_020511copy_2025-12-18_03-46-29_bedf6f.webp' },
    { icon: Shield, title: t('amenities.security.title', '7/24 Güvenlik'), desc: t('amenities.security.desc', 'Profesyonel güvenlik ekipleri ve kapalı devre kamera sistemleri.'), img: '/images/amenities/d5_scene20_20240303_013151copy_2025-12-18_03-46-29_42c7ac.webp' },
  ];

  return (
    <section id="donatilar" className="py-24 bg-luxera-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={t('amenities.header', 'Sadece Bir Ev Değil, Bir Yaşam Tarzı')} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="group relative overflow-hidden h-[400px] cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-luxera-navy/90 transition-colors duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-luxera-gold/20 backdrop-blur-sm flex items-center justify-center rounded-full mb-4 border border-luxera-gold/30">
                  <item.icon className="text-luxera-gold" size={24} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
