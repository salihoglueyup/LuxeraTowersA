import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Train, Bus, ShoppingBag, Store, GraduationCap, HeartPulse, Crosshair, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHero from '../shared/ui/PageHero';
import StatStrip from '../shared/ui/StatStrip';
import CtaBand from '../shared/ui/CtaBand';
import { locationPois } from '../data/location';
import { contactInfo } from '../data/site';
import SEO from '../shared/seo/SEO';
import ProjectMap from '../shared/ui/ProjectMap';

// Veri dosyasındaki ikon adlarını lucide bileşenlerine eşle
const ICONS = { Plane, Train, Bus, ShoppingBag, Store, GraduationCap, HeartPulse, Crosshair, MapPin };

const categories = Object.keys(locationPois);

const Location = () => {
  const { t } = useTranslation();
  const [activeCat, setActiveCat] = useState(categories[0]);

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24 overflow-hidden">
      <SEO 
        title={t('pageLocation.seo.title', 'Merkezi Konum ve Ulaşım')}
        description={t('pageLocation.seo.desc', 'Güneşli Metro istasyonuna 200m, Basın Ekspres yolunun kalbinde. İstanbul\'un en stratejik ve değerli lokasyonunda yerinizi alın.')}
        canonical="https://luxeratowers.com/konum"
      />
      <PageHero
        overline={t('pageLocation.hero.overline', 'Konum & Ulaşım')}
        title={t('pageLocation.hero.title', 'Eşsiz')}
        highlight={t('pageLocation.hero.highlight', 'Konum')}
        subtitle={t('pageLocation.hero.subtitle', 'İstanbul\'un yeni finans ve yaşam merkezi Basın Ekspres\'te, ulaşım ağlarının tam kalbinde yerinizi alın.')}
        backgroundImage="/images/exterior/10_2025-12-18_02-46-35_72a99a.webp"
      />

      {/* Kategori + POI + Harita */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
        {/* POI Listesi */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all ${
                  activeCat === cat
                    ? 'bg-luxera-gold text-luxera-navy shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-transparent border border-white/20 text-gray-400 hover:border-luxera-gold hover:text-luxera-gold'
                }`}
              >
                {t(`pageLocation.categories.${cat}`, cat)}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {locationPois[activeCat].map((item, idx) => {
              const Icon = ICONS[item.icon] || MapPin;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-luxera-gold/20"
                >
                  <div className="w-14 h-14 rounded-full bg-luxera-charcoal border border-luxera-gold/30 flex items-center justify-center shrink-0">
                    <Icon className="text-luxera-gold" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif text-white">{t(`pageLocation.pois.${item.title}.title`, item.title)}</h3>
                    <p className="text-gray-400 text-sm">{t(`pageLocation.pois.${item.title}.desc`, item.desc)}</p>
                  </div>
                  <span className="text-xl font-serif text-luxera-gold">{t(`pageLocation.pois.${item.title}.time`, item.time)}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Gerçek İnteraktif Harita (React Leaflet) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="relative h-[500px] lg:h-[640px] rounded-3xl overflow-hidden border border-luxera-gold/20"
        >
          <ProjectMap />
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-5 py-2 rounded-full border border-luxera-gold/40 pointer-events-none z-[400]">
            <span className="text-luxera-gold font-serif tracking-widest text-sm uppercase">Luxera Towers</span>
          </div>
        </motion.div>
      </div>

      {/* Ulaşım İstatistikleri */}
      <StatStrip
        className="mb-32"
        stats={[
          { value: 200, suffix: t('pageLocation.stats.m', ' m'), label: t('pageLocation.stats.s1', 'Güneşli Metro') },
          { value: 5, suffix: t('pageLocation.stats.min', ' dk'), label: t('pageLocation.stats.s2', 'Basın Ekspres') },
          { value: 25, suffix: t('pageLocation.stats.min', ' dk'), label: t('pageLocation.stats.s3', 'İstanbul Havalimanı') },
          { value: 2, suffix: t('pageLocation.stats.min', ' dk'), label: t('pageLocation.stats.s4', 'E-5 / TEM Bağlantısı') },
        ]}
      />

      {/* Bölge Değeri */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bg-luxera-charcoal border border-luxera-gold/20 rounded-3xl p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-luxera-gold" size={28} />
              <span className="text-luxera-gold uppercase tracking-[0.3em] text-sm">{t('pageLocation.value.overline', 'Bölge Değeri')}</span>
            </div>
            <h2 className="text-4xl font-serif text-white mb-6">{t('pageLocation.value.title', 'İstanbul\'un Yeni Cazibe Merkezi')}</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t('pageLocation.value.p1', '"Yeni Maslak" olarak anılan Basın Ekspres aksı; uluslararası şirket genel merkezleri, 5 yıldızlı oteller ve devasa alışveriş merkezleriyle İstanbul\'un en hızlı değer kazanan bölgelerinden biridir.')}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t('pageLocation.value.p2', 'Metro, metrobüs, E-5 ve TEM bağlantılarının kesişiminde yer alan konum, hem yaşam hem de yatırım açısından bölgeyi ayrıcalıklı kılar.')}
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-luxera-navy/60 p-6 rounded-2xl border border-white/5">
              <MapPin className="text-luxera-gold shrink-0 mt-1" size={22} />
              <div>
                <p className="text-white font-serif text-lg mb-1">{t('pageLocation.value.salesOffice', 'Satış Ofisi')}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{contactInfo.salesOffice}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-luxera-navy/60 p-6 rounded-2xl border border-white/5">
              <Train className="text-luxera-gold shrink-0 mt-1" size={22} />
              <div>
                <p className="text-white font-serif text-lg mb-1">{t('pageLocation.value.metroTitle', 'Metroya 200 Metre')}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{t('pageLocation.value.metroDesc', 'Güneşli Metro İstasyonu yürüme mesafesinde.')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <CtaBand
        className="mt-32"
        title={t('pageLocation.cta.title', 'Konumu Yerinde Deneyimleyin')}
        desc={t('pageLocation.cta.desc', 'Luxera Towers\'ın ulaşım avantajlarını ve çevresini yakından görmek için satış ofisimizden randevu alın.')}
        primary={{ label: t('pageLocation.cta.primary', 'Randevu Alın'), href: '/iletisim' }}
        secondary={{ label: t('pageLocation.cta.secondary', 'Yaşam Rehberi'), href: '/rehber' }}
        backgroundImage="/images/exterior/10_2025-12-18_02-46-35_72a99a.webp"
      />
    </div>
  );
};

export default Location;
