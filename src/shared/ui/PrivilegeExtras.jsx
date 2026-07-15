import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CalendarCheck, Sparkles, ThumbsUp, Check } from 'lucide-react';
import ProcessSteps from './ProcessSteps';
import StatStrip from './StatStrip';
import Testimonials from './Testimonials';
import CtaBand from './CtaBand';

// Ayrıcalık alt sayfalarında tekrarlanan bölümleri tek yerde toplar.
// Props:
//  detail: { title, paragraphs: [string], bullets?: [string], image }
//  stats: [{ value, suffix, label }]
//  steps: opsiyonel özel süreç; verilmezse standart "talep→hizmet" akışı kullanılır
//  cta: { title, desc, image }
const DEFAULT_STEPS = [
  { icon: <Smartphone size={22} />, title: 'Talebinizi İletin', desc: 'Mobil uygulama veya tek bir telefonla ekibimize ulaşın.' },
  { icon: <CalendarCheck size={22} />, title: 'Planlama', desc: 'Talebiniz değerlendirilir, size en uygun zaman ve çözüm belirlenir.' },
  { icon: <Sparkles size={22} />, title: 'Hizmet', desc: 'Hizmet, 5 yıldızlı otel standardında ve titizlikle yerine getirilir.' },
  { icon: <ThumbsUp size={22} />, title: 'Memnuniyet', desc: 'Deneyiminizi değerlendirin; standartlarımızı sürekli iyileştiriyoruz.' },
];

const PrivilegeExtras = ({ detail, stats, steps, cta }) => {
  return (
    <div className="space-y-32 mt-32">
      {/* İkincil detay bölümü */}
      {detail && (
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] rounded-3xl overflow-hidden border border-luxera-gold/20 order-2 lg:order-1"
          >
            <img src={detail.image} alt={detail.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxera-navy/70 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-luxera-gold mb-6">{detail.title}</h2>
            {detail.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-400 leading-relaxed mb-4">{p}</p>
            ))}
            {detail.bullets && (
              <ul className="space-y-3 mt-6">
                {detail.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="text-luxera-gold shrink-0 mt-0.5" size={16} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      )}

      {/* Süreç */}
      <ProcessSteps
        overline="Nasıl İşler?"
        title="Hizmete Ulaşmak Çok Kolay"
        watermark="VIP"
        steps={steps || DEFAULT_STEPS}
      />

      {/* İstatistikler */}
      {stats && <StatStrip stats={stats} />}

      {/* Referanslar */}
      <Testimonials title="Sakinlerimiz Ne Diyor?" overline="Referanslar" category="resident" watermark="★" limit={3} />

      {/* CTA */}
      <CtaBand
        title={cta?.title || 'Bu Ayrıcalığı Deneyimleyin'}
        desc={cta?.desc || 'Luxera Towers ayrıcalıklarını yakından tanımak için bizimle iletişime geçin.'}
        primary={{ label: 'İletişime Geçin', href: '/iletisim' }}
        secondary={{ label: 'Tüm Ayrıcalıklar', href: '/ayricaliklar' }}
        backgroundImage={cta?.image || '/images/amenities/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp'}
      />
    </div>
  );
};

export default PrivilegeExtras;
