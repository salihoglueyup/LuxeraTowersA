import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { testimonials as allTestimonials, testimonialsByCategory } from '../../data/testimonials';

// İsimden baş harfleri üretir (avatar yoksa kullanılır)
const initials = (name = '') =>
  name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

// Yorum/referans şeridi.
// Kullanım: <Testimonials category="investor" /> veya <Testimonials items={[...]} />
// `limit` ile gösterilecek yorum sayısı sınırlanabilir.
const Testimonials = ({
  items,
  category,
  limit = 3,
  title = 'Onlar Ne Diyor?',
  overline = 'Referanslar',
  subtitle,
  watermark,
  className = '',
}) => {
  const source = items || (category ? testimonialsByCategory(category) : allTestimonials);
  const list = source.slice(0, limit);

  if (!list.length) return null;

  return (
    <div className={`max-w-7xl mx-auto px-6 ${className}`}>
      <SectionHeader overline={overline} title={title} subtitle={subtitle} watermark={watermark} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {list.map((t, i) => (
          <motion.div
            key={t.name + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-luxera-charcoal border border-luxera-gold/10 rounded-2xl p-8 flex flex-col hover:border-luxera-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-[colors,box-shadow] relative"
          >
            <Quote className="text-luxera-gold/30 mb-4 shrink-0" size={36} />
            <p className="text-gray-300 leading-relaxed italic flex-grow mb-6">“{t.quote}”</p>

            {t.rating && (
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="text-luxera-gold fill-luxera-gold" />
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 border-t border-white/10 pt-5">
              <div className="w-12 h-12 rounded-full bg-luxera-gold/10 border border-luxera-gold/30 flex items-center justify-center text-luxera-gold font-serif shrink-0 overflow-hidden">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                ) : (
                  initials(t.name)
                )}
              </div>
              <div>
                <p className="text-white font-serif">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
