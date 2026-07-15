import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import StatStrip from '../shared/ui/StatStrip';
import Testimonials from '../shared/ui/Testimonials';
import CtaBand from '../shared/ui/CtaBand';
import HorizontalScroll from '../shared/ui/HorizontalScroll';

import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();

  const IMAGES = [
    { id: 1, src: '/images/exterior/13_2025-12-18_02-46-35_a465ab.webp', category: t('gallery.cat.exterior', 'Dış Mekan'), title: t('gallery.img.i1', 'Genel Görünüm') },
    { id: 2, src: '/images/interior/6_2025-12-18_02-42-20_29be56.webp', category: t('gallery.cat.interior', 'İç Mekan'), title: t('gallery.img.i2', 'Salon Konsepti') },
    { id: 3, src: '/images/exterior/5_2025-12-18_02-46-35_82a21a.webp', category: t('gallery.cat.exterior', 'Dış Mekan'), title: t('gallery.img.i3', 'Mimari Detay') },
    { id: 4, src: '/images/interior/7_2025-12-18_02-42-20_35374f.webp', category: t('gallery.cat.interior', 'İç Mekan'), title: t('gallery.img.i4', 'Yatak Odası') },
    { id: 5, src: '/images/exterior/9_2025-12-18_02-46-35_8d953d.webp', category: t('gallery.cat.exterior', 'Dış Mekan'), title: t('gallery.img.i5', 'Peyzaj ve Kuleler') },
    { id: 6, src: '/images/interior/d5_scene7_20240304_220754copy_2025-12-18_03-47-03_62285d.webp', category: t('gallery.cat.interior', 'İç Mekan'), title: t('gallery.img.i6', 'Mutfak Tasarımı') },
    { id: 7, src: '/images/exterior/12_2025-12-18_02-46-35_4cee27.webp', category: t('gallery.cat.exterior', 'Dış Mekan'), title: t('gallery.img.i7', 'Gece Görünümü') },
    { id: 8, src: '/images/amenities/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp', category: t('gallery.cat.amenity', 'Sosyal Alan'), title: t('gallery.img.i8', 'Kapalı Havuz') },
    { id: 9, src: '/images/amenities/d5_scene13_20240303_032610copy_2025-12-18_03-46-29_1819dd.webp', category: t('gallery.cat.amenity', 'Sosyal Alan'), title: t('gallery.img.i9', 'Lounge') },
  ];

  const CATEGORIES = [t('gallery.cat.all', 'Tümü'), t('gallery.cat.exterior', 'Dış Mekan'), t('gallery.cat.interior', 'İç Mekan'), t('gallery.cat.amenity', 'Sosyal Alan')];

  const [activeCategory, setActiveCategory] = useState(t('gallery.cat.all', 'Tümü'));
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === t('gallery.cat.all', 'Tümü') 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="pt-24 bg-luxera-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">{t('gallery.title', 'Galeri')}</h1>
          <div className="h-[1px] w-24 bg-luxera-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">{t('gallery.desc', 'Projenin mimari detaylarını, iç mekan tasarımlarını ve sosyal alanlarını inceleyin.')}</p>
        </motion.div>
        
        {/* Kategoriler */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? 'bg-luxera-gold/10 border border-luxera-gold text-luxera-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]' 
                : 'bg-transparent border border-white/20 text-gray-400 hover:border-luxera-gold hover:text-luxera-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Yatay Kaydırma Galerisi */}
        <HorizontalScroll>
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative h-[60vh] w-[80vw] md:w-[60vw] lg:w-[40vw] shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-2xl"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="text-luxera-gold mb-4" size={48} />
                <h4 className="text-white font-serif text-3xl mb-2">{img.title}</h4>
                <span className="text-luxera-gold text-lg tracking-widest uppercase">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </HorizontalScroll>

        {/* İstatistikler + Referanslar + CTA */}
        <div className="text-left mt-24 space-y-24">
          <StatStrip
            stats={[
              { value: IMAGES.length, suffix: '+', label: t('gallery.stats.s1', 'Görsel & Render') },
              { value: CATEGORIES.length - 1, suffix: '', label: t('gallery.stats.s2', 'Kategori') },
              { value: 3, suffix: '', label: t('gallery.stats.s3', 'İkonik Kule') },
              { value: 4, suffix: 'K', label: t('gallery.stats.s4', 'Görsel Kalite') },
            ]}
          />
          <Testimonials
            title={t('gallery.testimonials.title', 'Görenler Ne Diyor?')}
            overline={t('gallery.testimonials.overline', 'Referanslar')}
            watermark="★"
            limit={3}
          />
          <CtaBand
            title={t('gallery.cta.title', 'Projeyi Yerinde Görün')}
            desc={t('gallery.cta.desc', 'Görsellerde beğendiğiniz mekânları örnek dairemizde deneyimlemek için satış ofisimizden randevu alın.')}
            primary={{ label: t('gallery.cta.primary', 'Randevu Alın'), href: '/iletisim' }}
            secondary={{ label: t('gallery.cta.secondary', 'Sanal Tur'), href: '/sanal-tur' }}
            backgroundImage="/images/exterior/9_2025-12-18_02-46-35_8d953d.webp"
          />
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white hover:text-luxera-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain border border-luxera-gold/20 shadow-2xl"
                onClick={e => e.stopPropagation()}
              />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-serif text-2xl text-luxera-gold">{selectedImage.title}</h3>
                <p className="text-gray-400">{selectedImage.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
