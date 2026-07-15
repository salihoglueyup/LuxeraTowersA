import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Coffee, ShoppingBag, HeartPulse, Train, Plane, GraduationCap, Map } from 'lucide-react';
import { staggerContainer, slideInLeft, slideInRight } from '../shared/utils/animations';
import { downloadCatalog } from '../shared/utils/download';
import PageHero from '../shared/ui/PageHero';
import StatStrip from '../shared/ui/StatStrip';
import Testimonials from '../shared/ui/Testimonials';

import { useTranslation } from 'react-i18next';

const Guide = () => {
  const { t } = useTranslation();

  const guideItems = [
    { 
      icon: <ShoppingBag size={32} />, 
      title: t('guide.items.shopping.title', 'Alışveriş & Eğlence'), 
      desc: t('guide.items.shopping.desc', 'Bölgenin en büyük ve prestijli AVM\'leri hemen yanınızda. Mall of İstanbul, 212 Outlet ve Starcity Outlet gibi merkezlerde dünyaca ünlü markalar, sinema ve eğlence alanları sizi bekliyor.'),
      points: [t('guide.items.shopping.p1', 'Mall of İstanbul (5 Dk)'), t('guide.items.shopping.p2', '212 Outlet AVM (2 Dk)'), t('guide.items.shopping.p3', 'Starcity Outlet (10 Dk)'), t('guide.items.shopping.p4', 'Güneşli Park AVM (4 Dk)')]
    },
    { 
      icon: <HeartPulse size={32} />, 
      title: t('guide.items.health.title', 'Sağlık Merkezleri'), 
      desc: t('guide.items.health.desc', 'Sağlığınız güvence altında. İstanbul\'un en modern tıp merkezleri ve araştırma hastanelerine sadece birkaç dakika uzaklıktasınız.'),
      points: [t('guide.items.health.p1', 'Çam ve Sakura Şehir Hastanesi (12 Dk)'), t('guide.items.health.p2', 'Medipol Mega Üniversite Hastanesi (8 Dk)'), t('guide.items.health.p3', 'Acıbadem Halkalı (10 Dk)'), t('guide.items.health.p4', 'BHT Clinic Tema (15 Dk)')]
    },
    { 
      icon: <GraduationCap size={32} />, 
      title: t('guide.items.edu.title', 'Eğitim & Üniversiteler'), 
      desc: t('guide.items.edu.desc', 'Çocuklarınız için en iyi eğitim kurumları, özel okullar ve üniversiteler kampüsleri projenin çevresinde konumlanıyor.'),
      points: [t('guide.items.edu.p1', 'Kültür Üniversitesi (10 Dk)'), t('guide.items.edu.p2', 'Altınbaş Üniversitesi (8 Dk)'), t('guide.items.edu.p3', 'Arel Üniversitesi (12 Dk)'), t('guide.items.edu.p4', 'Bilfen Koleji (5 Dk)')]
    },
    { 
      icon: <Coffee size={32} />, 
      title: t('guide.items.social.title', 'Sosyal Yaşam'), 
      desc: t('guide.items.social.desc', 'Lüks restoranlar, üçüncü nesil kahveciler ve kültürel etkinlik alanları. Basın Ekspres\'in yükselen trendi, sosyal hayatınızı da canlandırıyor.'),
      points: [t('guide.items.social.p1', 'ArenaPark (10 Dk)'), t('guide.items.social.p2', 'Gourmet Restoranlar Vadisi'), t('guide.items.social.p3', 'Kültür ve Sanat Merkezleri')]
    }
  ];

  const distances = [
    { icon: <Train size={24} />, title: t('guide.distances.m9.title', 'M9 Metro İstasyonu'), time: t('guide.distances.m9.time', '1 Dk'), type: t('guide.distances.m9.type', 'Yürüme') },
    { icon: <Map size={24} />, title: t('guide.distances.tem.title', 'E-5 ve TEM Otoyolu'), time: t('guide.distances.tem.time', '2 Dk'), type: t('guide.distances.tem.type', 'Araç') },
    { icon: <Plane size={24} />, title: t('guide.distances.airport.title', 'İstanbul Havalimanı'), time: t('guide.distances.airport.time', '25 Dk'), type: t('guide.distances.airport.type', 'Araç') },
    { icon: <MapPin size={24} />, title: t('guide.distances.marmara.title', 'Kuzey Marmara Otoyolu'), time: t('guide.distances.marmara.time', '5 Dk'), type: t('guide.distances.marmara.type', 'Araç') },
  ];

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24 overflow-hidden">
      <PageHero
        overline={t('guide.hero.overline', 'Çevre Analizi')}
        title={t('guide.hero.title', 'Yaşam')}
        highlight={t('guide.hero.highlight', 'Rehberi')}
        subtitle={t('guide.hero.subtitle', 'Basın Ekspres\'in tam kalbinde, İstanbul\'un en hızlı değer kazanan noktasındasınız. İhtiyacınız olan her şeye dakikalar içinde ulaşın.')}
        backgroundImage="/images/exterior/9_2025-12-18_02-46-35_8d953d.webp"
      />

      {/* Distances Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bg-luxera-charcoal border border-luxera-gold/20 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-luxera-gold/5 rounded-full blur-3xl"></div>
          
          {distances.map((dist, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10">
              <div className="w-14 h-14 rounded-full bg-luxera-gold/10 flex items-center justify-center text-luxera-gold mb-4">
                {dist.icon}
              </div>
              <h4 className="text-white font-serif mb-1">{dist.title}</h4>
              <div className="flex items-center gap-2">
                <span className="text-luxera-gold font-bold text-xl">{dist.time}</span>
                <span className="text-gray-500 text-xs uppercase tracking-wider">{dist.type}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Guide Details */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {guideItems.map((item, index) => (
            <motion.div 
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              key={index} 
              className="group"
            >
              <div className="flex gap-6 items-start mb-6">
                <div className="text-luxera-gold shrink-0 bg-luxera-charcoal p-5 rounded-2xl border border-luxera-gold/20 group-hover:bg-luxera-gold group-hover:text-luxera-navy transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-serif text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
              
              <div className="pl-24">
                <ul className="space-y-3">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-luxera-gold"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Erişim İstatistikleri */}
      <StatStrip
        className="mb-24"
        stats={[
          { value: 1, suffix: t('guide.stats.min', ' dk'), label: t('guide.stats.s1', 'Metroya Yürüme') },
          { value: 5, suffix: t('guide.stats.min', ' dk'), label: t('guide.stats.s2', 'AVM & Alışveriş') },
          { value: 8, suffix: t('guide.stats.min', ' dk'), label: t('guide.stats.s3', 'Sağlık Kampüsü') },
          { value: 25, suffix: t('guide.stats.min', ' dk'), label: t('guide.stats.s4', 'Havalimanı') },
        ]}
      />

      {/* Referanslar */}
      <div className="mb-24">
        <Testimonials title={t('guide.testimonials.title', 'Bölgede Yaşayanlar')} overline={t('guide.testimonials.overline', 'Referanslar')} category="resident" watermark="★" />
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-serif text-white mb-6">{t('guide.cta.title', 'Bölgeyi Daha Yakından Keşfedin')}</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">{t('guide.cta.desc', 'Tüm lokasyon avantajları, ulaşım planları ve detaylı bölge haritası için projenin PDF kataloğunu inceleyebilirsiniz.')}</p>
          <button onClick={downloadCatalog} className="inline-flex items-center gap-3 bg-luxera-gold text-luxera-navy px-8 py-4 rounded-sm uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Download size={20} /> {t('guide.cta.button', 'Rehberi PDF Olarak İndir')}
          </button>
        </motion.div>
      </div>
      
    </div>
  );
};

export default Guide;
