import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Dumbbell, Coffee, ShieldCheck } from 'lucide-react';
import { amenityGallery } from '../data/amenities';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import RevealText from '../shared/ui/RevealText';
import Testimonials from '../shared/ui/Testimonials';
import CtaBand from '../shared/ui/CtaBand';

import { useTranslation } from 'react-i18next';

const Life = () => {
  const { t } = useTranslation();

  const features = [
    { icon: <ShoppingBag size={32} />, title: t('life.features.f1.title', '87 Lüks Mağaza'), desc: t('life.features.f1.desc', 'Dünyaca ünlü markalar, prestijli tasarımcı butikleri ve seçkin perakende mağazaları, sadece bir asansör mesafesinde kişisel gardırobunuzun bir uzantısı gibi sizi bekliyor.') },
    { icon: <Dumbbell size={32} />, title: t('life.features.f2.title', 'Fitness & SPA'), desc: t('life.features.f2.desc', 'Sağlıklı bir yaşam için en modern uluslararası ekipmanlarla donatılmış fitness merkezi ve günün yorgunluğunu atabileceğiniz termal konforlu lüks SPA alanı.') },
    { icon: <Coffee size={32} />, title: t('life.features.f3.title', 'Gastronomi Kültürü'), desc: t('life.features.f3.desc', 'Michelin yıldızı vizyonuna sahip şeflerin ilham aldığı gurme restoranlar ve üçüncü nesil kahvecilerle, her yemeği unutulmaz bir deneyime dönüştürün.') },
    { icon: <ShieldCheck size={32} />, title: t('life.features.f4.title', '7/24 VIP Hizmet'), desc: t('life.features.f4.desc', 'Özel vale, bellboy ve profesyonel asistanlık (concierge) hizmetleriyle, 5 yıldızlı otel konforunu kendi evinizin mahremiyetinde yaşayın.') }
  ];


  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pb-24">
      
      <PageHero
        overline={t('life.hero.overline', 'Sosyal Yaşam')}
        title={t('life.hero.title', 'Hayatın')}
        highlight={t('life.hero.highlight', 'Tam Merkezinde')}
        subtitle={t('life.hero.subtitle', 'Luxera Towers AVM ve çok katmanlı sosyal yaşam alanlarıyla, İstanbul\'un yeni buluşma noktası tam olarak evinizin altında şekilleniyor.')}
        backgroundImage="/images/amenities/d5_scene20_20240303_013151copy_2025-12-18_03-46-29_42c7ac.webp"
      />

      {/* Lüks Hikayeleştirme Metni */}
      <div className="max-w-4xl mx-auto px-6 mb-32 text-center">
        <RevealText as="h2" text={t('life.intro.title', 'Sınırları Aşan Bir Yaşam Mimarisi')} className="text-3xl md:text-4xl font-serif text-luxera-gold mb-8 justify-center" />
        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
          {t('life.intro.p1', 'Şehrin ritmine ayak uydurmak yerine, şehrin ritmini kendi etrafınızda şekillendirin. Luxera Towers, sadece bir barınma alanı değil; mimarinin, doğanın ve ticari dinamizmin kusursuz bir uyum içinde dans ettiği, kendi kendine yeten devasa bir ekosistemdir.')}
        </p>
        <p className="text-gray-400 text-lg leading-relaxed font-light">
          {t('life.intro.p2', 'Sabah kahvenizi seçkin bir kafede yudumladıktan sonra, gün ışığıyla yıkanan açık hava teraslarında yürüyüşe çıkabilir, akşam ise dünya mutfağından seçmeler sunan bir restoranda dostlarınızı ağırlayabilirsiniz. Burada "dışarı çıkmak", sadece evinizin dış kapısını aralamak kadar kolaydır.')}
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <SectionHeader 
          title={t('life.featuresSection.title', 'Ayrıcalıklı Yaşam')}
          watermark="01"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-luxera-charcoal border border-luxera-gold/10 p-8 rounded-2xl hover:border-luxera-gold/40 transition-colors group flex flex-col"
            >
              <div className="text-luxera-gold mb-6 bg-luxera-gold/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-luxera-gold group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-4 group-hover:text-luxera-gold transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sosyal Alanlar Galeri Şeridi */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <SectionHeader 
          overline={t('life.gallery.overline', 'Galeri')}
          title={t('life.gallery.title', 'Sosyal Yaşam Alanları')}
          subtitle={t('life.gallery.subtitle', 'Havuzlar, yeşil teraslar ve dinlenme alanlarıyla yaşamın her anı ayrıcalıklı.')}
          watermark="02"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenityGallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`overflow-hidden rounded-xl border border-luxera-gold/10 group relative ${i === 0 ? 'col-span-2 row-span-2 h-full min-h-[400px]' : 'h-48 md:h-56'}`}
            >
              <img src={src} alt="Sosyal alan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-luxera-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Referanslar */}
      <div className="mt-32">
        <Testimonials title={t('life.testimonials.title', 'Sakinlerimizin Gözünden')} overline={t('life.testimonials.overline', 'Referanslar')} category="resident" watermark="★" />
      </div>

      {/* CTA */}
      <CtaBand
        className="mt-32"
        title={t('life.cta.title', 'Bu Yaşamı Yakından Görün')}
        desc={t('life.cta.desc', 'Luxera Towers\'ın sosyal yaşamını ve ayrıcalıklarını yerinde deneyimlemek için satış ofisimizden randevu alın.')}
        primary={{ label: t('life.cta.primary', 'Randevu Alın'), href: '/iletisim' }}
        secondary={{ label: t('life.cta.secondary', 'Ayrıcalıklar'), href: '/ayricaliklar' }}
        backgroundImage="/images/amenities/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp"
      />
    </div>
  );
};

export default Life;
