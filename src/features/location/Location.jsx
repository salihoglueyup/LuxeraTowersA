import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Train, Car, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Location = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="konum" className="py-24 bg-luxera-navy" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 uppercase tracking-wider">
              {t('location.title1', 'Şehrin Merkezinde,')} <br/><span className="text-luxera-gold">{t('location.title2', 'Hayatın İçinde')}</span>
            </h2>
            <div className="w-24 h-1 bg-luxera-gold mb-8"></div>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              {t('location.desc', 'Basın Ekspres Yolu üzerinde, ulaşım ağlarının tam kalbinde yer alan Luxera Towers, İstanbul Havalimanı ve ana arterlere olan yakınlığı ile eşsiz bir yatırım fırsatı sunuyor.')}
            </p>
            
            <ul className="space-y-6">
              {[
                { icon: Train, title: t('location.metro', 'Mimar Sinan Metrosu'), time: t('location.time.2m', '2 Dakika') },
                { icon: Car, title: t('location.tem', 'TEM & E-5 Bağlantı'), time: t('location.time.5m', '5 Dakika') },
                { icon: building => <MapPin size={24} className="text-luxera-gold"/>, title: t('location.mall', 'Mall of Istanbul'), time: t('location.time.10m', '10 Dakika') },
                { icon: building => <MapPin size={24} className="text-luxera-gold"/>, title: t('location.airport', 'İstanbul Havalimanı'), time: t('location.time.25m', '25 Dakika') },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-luxera-charcoal p-4 border border-gray-800 hover:border-luxera-gold/50 transition-colors">
                  <div className="bg-luxera-navy p-3 rounded-sm"><item.icon size={24} className="text-luxera-gold" /></div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-luxera-gold text-sm">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="h-[600px] bg-gray-900 border-2 border-luxera-gold/20 relative overflow-hidden group">
            <motion.img 
              style={{ y, scale: 1.2 }}
              src="/images/exterior/7_2025-12-18_02-46-34_3b69d3.webp" 
              alt="Harita" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-luxera-navy/40"></div>
            {/* Harita İşaretçisi Simülasyonu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-16 h-16 bg-luxera-gold rounded-full flex items-center justify-center animate-bounce shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                <Building2 className="text-white" size={32} />
              </div>
              <div className="mt-4 bg-black/80 backdrop-blur-sm px-6 py-2 border border-luxera-gold/50">
                <span className="text-luxera-gold font-serif font-bold tracking-widest">LUXERA TOWERS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
