import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Play, Pause, Share2, DownloadCloud, FileText, MessageCircle } from 'lucide-react';
import StatStrip from '../shared/ui/StatStrip';
import Testimonials from '../shared/ui/Testimonials';
import CtaBand from '../shared/ui/CtaBand';
import SEO from '../shared/seo/SEO';
import VideoModal from '../shared/ui/VideoModal';

import { useTranslation } from 'react-i18next';
import { galleryImages } from '../data/gallery';
import { videos } from '../data/videos';

const ITEMS_PER_PAGE = 15;

const Gallery = () => {
  const { t } = useTranslation();

  const CATEGORIES = [
    { key: 'all', label: t('gallery.cat.all', 'Tümü') },
    { key: 'gallery.cat.exterior', label: t('gallery.cat.exterior', 'Dış Mekan') },
    { key: 'gallery.cat.interior', label: t('gallery.cat.interior', 'İç Mekan') },
    { key: 'gallery.cat.amenity', label: t('gallery.cat.amenity', 'Sosyal Alan') },
    { key: 'gallery.cat.plans', label: t('gallery.cat.plans', 'Kat Planları') },
    { key: 'gallery.cat.videos', label: t('gallery.cat.videos', 'Videolar') }
  ];

  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].key);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  // Parallax for Hero
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Combine videos into gallery format
  const videoItems = videos.map((v, i) => ({
    id: 'vid' + i,
    src: v.thumbnail,
    categoryKey: 'gallery.cat.videos',
    defaultCategory: 'Video',
    titleKey: `videoTitles.${v.title}`,
    defaultTitle: v.title,
    isVideo: true,
    videoData: v
  }));

  const allItems = [...galleryImages, ...videoItems];

  const filteredImages = activeCategory === 'all' 
    ? allItems 
    : allItems.filter(img => img.categoryKey === activeCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  // Otomatik Slayt Gösterisi
  useEffect(() => {
    let interval;
    if (isPlaying && selectedImageIndex !== null) {
      interval = setInterval(() => {
        setSelectedImageIndex(prev => {
          if (prev === filteredImages.length - 1) return 0;
          return prev + 1;
        });
      }, 3000); // 3 saniyede bir değiştir
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedImageIndex, filteredImages.length]);

  // Lightbox kapanınca slaytı durdur
  useEffect(() => {
    if (selectedImageIndex === null) {
      setIsPlaying(false);
    }
  }, [selectedImageIndex]);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1) {
      setSelectedImageIndex(prev => prev + 1);
    }
  }, [selectedImageIndex, filteredImages.length]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(prev => prev - 1);
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  const handleShareWhatsApp = (img, e) => {
    e.stopPropagation();
    const url = window.location.href;
    const text = `Luxera Towers - ${t(img.titleKey, img.defaultTitle)} inceleyin: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-luxera-charcoal min-h-screen relative pb-12">
      <SEO 
        title={t('gallery.seo.title', 'Galeri ve Görseller')}
        description={t('gallery.seo.desc', 'Luxera Towers\'ın seçkin dış mimarisi, lüks iç mekan tasarımları, kat planları ve sosyal olanaklarını galerimizde inceleyin.')}
        canonical="https://luxeratowers.com/galeri"
      />
      
      {/* Parallax Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full"
        >
          <img src="/images/exterior/12_2025-12-18_02-46-35_4cee27.webp" alt="Hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-luxera-charcoal/80 via-transparent to-luxera-charcoal"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-2xl">{t('gallery.title', 'Galeri')}</h1>
            <div className="h-[2px] w-32 bg-luxera-gold mx-auto mb-6 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg drop-shadow-lg">{t('gallery.desc', 'Projenin mimari detaylarını, iç mekan tasarımlarını ve sosyal alanlarını inceleyin.')}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 py-8 text-center relative z-20">
        {/* Kategoriler */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="relative px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-all text-gray-400 hover:text-luxera-gold"
            >
              {activeCategory === cat.key && (
                <motion.div 
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-luxera-gold/10 border border-luxera-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Gerçek Masonry Galerisi */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: (index % ITEMS_PER_PAGE) * 0.05 }}
                className="group relative w-full cursor-pointer overflow-hidden rounded-2xl shadow-2xl break-inside-avoid"
                onClick={() => {
                  if (img.isVideo) {
                    setActiveVideo(img.videoData);
                  } else {
                    setSelectedImageIndex(filteredImages.findIndex(i => i.id === img.id));
                  }
                }}
                data-cursor-text={img.isVideo ? t('gallery.cursor.play', 'İZLE') : t('gallery.cursor.view', 'BÜYÜT')}
              >
                <img 
                  src={img.src} 
                  alt={t(img.titleKey, img.defaultTitle)} 
                  loading="lazy"
                  className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 ${img.categoryKey === 'gallery.cat.plans' ? 'bg-gray-800 p-8' : ''}`}
                />
                <div className="absolute inset-0 bg-luxera-navy/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 border border-white/10">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }} 
                    whileInView={{ scale: 1, opacity: 1 }} 
                    className="bg-luxera-gold/90 text-white rounded-full p-4 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  >
                    {img.isVideo ? <Play size={24} className="ml-1" /> : <ZoomIn size={24} />}
                  </motion.div>
                  <h4 className="text-white font-serif text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">{t(img.titleKey, img.defaultTitle)}</h4>
                  <div className="w-12 h-[1px] bg-luxera-gold mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                  <span className="text-white/80 text-xs tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                    {t(img.categoryKey, img.defaultCategory)}
                  </span>
                  
                  {/* Kat Planları için ekstra buton */}
                  {img.categoryKey === 'gallery.cat.plans' && (
                    <a href={img.src} download onClick={e => e.stopPropagation()} className="mt-6 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-luxera-gold text-white rounded-full transition-colors text-xs tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 delay-200">
                      <FileText size={14} /> {t('gallery.ui.downloadPdf', 'PDF İndir')}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Daha Fazla Göster */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16"
          >
            <button 
              onClick={handleLoadMore}
              className="px-10 py-4 border border-luxera-gold/50 text-luxera-gold hover:bg-luxera-gold hover:text-white transition-all duration-300 uppercase tracking-widest text-sm rounded-full"
            >
              {t('gallery.ui.loadMore', 'Daha Fazla Göster')}
            </button>
          </motion.div>
        )}

        {/* İstatistikler + Referanslar + CTA */}
        <div className="text-left mt-32 space-y-32">
          <StatStrip
            stats={[
              { value: allItems.length, suffix: '+', label: t('gallery.stats.s1', 'Görsel & Render') },
              { value: CATEGORIES.length - 1, suffix: '', label: t('gallery.stats.s2', 'Kategori') },
              { value: 12, suffix: '', label: t('gallery.stats.s3', 'Daire Tipi') },
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

        {/* Gelişmiş Lightbox */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-black/95 flex flex-col p-4 md:p-8 select-none"
              onClick={() => setSelectedImageIndex(null)}
            >
              {/* Top Bar */}
              <div className="absolute top-0 left-0 right-0 p-6 flex flex-col md:flex-row justify-between items-start md:items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
                <div className="text-left mb-4 md:mb-0">
                  <h3 className="font-serif text-2xl text-luxera-gold">
                    {t(filteredImages[selectedImageIndex].titleKey, filteredImages[selectedImageIndex].defaultTitle)}
                  </h3>
                  <p className="text-gray-400 text-sm tracking-wider uppercase mt-1 flex items-center">
                    {t(filteredImages[selectedImageIndex].categoryKey, filteredImages[selectedImageIndex].defaultCategory)}
                    {isPlaying && <span className="ml-3 text-luxera-gold animate-pulse text-xs">● {t('gallery.ui.autoplaying', 'Otomatik Oynatılıyor')}</span>}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    className="text-white hover:text-green-400 transition-colors bg-white/5 hover:bg-white/10 rounded-full p-3 flex items-center gap-2"
                    onClick={(e) => handleShareWhatsApp(filteredImages[selectedImageIndex], e)}
                    title={t('gallery.ui.shareWhatsapp', "WhatsApp'ta Paylaş")}
                  >
                    <MessageCircle size={20} />
                    <span className="text-xs uppercase tracking-widest hidden lg:block">{t('gallery.ui.askRep', 'Temsilciye Sor')}</span>
                  </button>
                  <div className="w-[1px] h-8 bg-white/20 mx-2"></div>
                  <button 
                    className="text-white hover:text-luxera-gold transition-colors bg-white/5 hover:bg-white/10 rounded-full p-3 flex items-center gap-2"
                    onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button 
                    className="text-white hover:text-luxera-gold transition-colors bg-white/5 hover:bg-white/10 rounded-full p-3"
                    onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Main Image Area */}
              <div className="flex-1 flex items-center justify-center relative w-full h-full mt-20 mb-28">
                {selectedImageIndex > 0 && (
                  <button 
                    onClick={handlePrev}
                    className="absolute left-0 md:left-8 text-white/50 hover:text-luxera-gold p-4 hover:bg-white/5 rounded-full transition-all z-20"
                  >
                    <ChevronLeft size={48} strokeWidth={1} />
                  </button>
                )}

                <motion.img
                  key={filteredImages[selectedImageIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                  src={filteredImages[selectedImageIndex].src}
                  alt={t(filteredImages[selectedImageIndex].titleKey, filteredImages[selectedImageIndex].defaultTitle)}
                  className={`max-w-full max-h-[65vh] md:max-h-[75vh] object-contain shadow-2xl ${filteredImages[selectedImageIndex].categoryKey === 'gallery.cat.plans' ? 'bg-white p-4 md:p-8 rounded-lg' : ''}`}
                  onClick={e => e.stopPropagation()}
                />

                {selectedImageIndex < filteredImages.length - 1 && (
                  <button 
                    onClick={handleNext}
                    className="absolute right-0 md:right-8 text-white/50 hover:text-luxera-gold p-4 hover:bg-white/5 rounded-full transition-all z-20"
                  >
                    <ChevronRight size={48} strokeWidth={1} />
                  </button>
                )}
              </div>

              {/* Bottom Thumbnail Strip */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-28 bg-black/90 border-t border-white/10 flex items-center justify-center px-4"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex gap-3 overflow-x-auto py-4 px-4 no-scrollbar max-w-6xl w-full scroll-smooth items-center">
                  {filteredImages.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative flex-shrink-0 h-16 w-24 rounded overflow-hidden transition-all duration-300 ${idx === selectedImageIndex ? 'border-2 border-luxera-gold scale-110 opacity-100 z-10' : 'opacity-40 hover:opacity-100'}`}
                    >
                      <img src={img.src} alt="" className={`w-full h-full object-cover ${img.categoryKey === 'gallery.cat.plans' ? 'bg-gray-800' : ''}`} />
                      {img.isVideo && <div className="absolute inset-0 flex items-center justify-center bg-black/30"><Play size={16} className="text-white"/></div>}
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Action Button - Katalog İndir */}
      <motion.a 
        href="/Luxera-Towers-Catalog.pdf" 
        download 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[90] bg-luxera-gold hover:bg-white text-white hover:text-luxera-gold px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(212,175,55,0.4)] flex items-center gap-3 transition-colors duration-300 group"
      >
        <DownloadCloud size={24} className="group-hover:-translate-y-1 transition-transform" />
        <span className="font-serif tracking-wider uppercase text-sm hidden md:block">{t('gallery.ui.downloadCatalog', 'E-Katalog İndir')}</span>
      </motion.a>

      {/* Video Modal Component */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
};

export default Gallery;
