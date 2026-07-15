import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { staggerContainer, zoomIn } from '../shared/utils/animations';
import { videos } from '../data/videos';
import VideoModal from '../shared/ui/VideoModal';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import StatStrip from '../shared/ui/StatStrip';
import CtaBand from '../shared/ui/CtaBand';

import { useTranslation } from 'react-i18next';

const Videos = () => {
  const { t } = useTranslation();

  const videoStats = [
    { value: videos.length, suffix: '', label: t('videos.stats.s1', 'Video İçerik') },
    { value: 4, suffix: 'K', label: t('videos.stats.s2', 'Görüntü Kalitesi') },
    { value: 360, suffix: '°', label: t('videos.stats.s3', 'Sanal Deneyim') },
    { value: 7, suffix: '/24', label: t('videos.stats.s4', 'Erişim') },
  ];
  const [activeVideo, setActiveVideo] = useState(null);
  const featured = videos[0];
  const rest = videos.slice(1);

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24 overflow-hidden">
      <PageHero
        overline={t('videos.hero.overline', 'Luxera TV')}
        title={t('videos.hero.title', 'Luxera')}
        highlight={t('videos.hero.highlight', 'TV')}
        subtitle={t('videos.hero.subtitle', 'Projeye dair en güncel videolar, tanıtım filmleri ve inşaat süreçlerini buradan takip edebilirsiniz.')}
        backgroundImage="/images/exterior/12_2025-12-18_02-46-35_4cee27.webp"
      />

      {/* Öne Çıkan Video */}
      {featured && (
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => setActiveVideo(featured)}
            className="group relative w-full aspect-[21/9] rounded-3xl overflow-hidden border border-luxera-gold/20 text-left"
          >
            <img src={featured.thumbnail} alt={featured.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxera-navy via-luxera-navy/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-luxera-gold/90 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(212,175,55,0.5)]">
                <Play size={30} className="ml-1" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-luxera-gold text-xs uppercase tracking-widest mb-2 block">{t('videos.featured', 'Öne Çıkan')} · {t(`videoCategories.${featured.category}`, featured.category)}</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white">{t(`videoTitles.${featured.title}`, featured.title)}</h2>
            </div>
          </motion.button>
        </div>
      )}

      {/* Diğer Videolar */}
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          overline={t('videos.archive.overline', 'Video Arşivi')}
          title={t('videos.archive.title', 'Tüm İçerikler')}
          subtitle={t('videos.archive.subtitle', 'Tanıtım filmleri, bölge rehberi, yaşam ve iç mimari videolarıyla projeyi her yönüyle keşfedin.')}
          watermark="TV"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {rest.map((video, index) => (
            <motion.button
              type="button"
              variants={zoomIn}
              key={index}
              onClick={() => setActiveVideo(video)}
              className="group cursor-pointer text-left"
            >
              <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:border-luxera-gold/50 transition-colors">
                <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-luxera-navy/30 group-hover:bg-luxera-navy/10 transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 bg-luxera-gold/90 rounded-full flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <Play size={24} className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded text-sm text-white font-mono z-20">
                  {video.duration}
                </div>
              </div>
              <div>
                <span className="text-luxera-gold text-xs uppercase tracking-widest mb-2 block">{t(`videoCategories.${video.category}`, video.category)}</span>
                <h3 className="text-xl font-serif text-white group-hover:text-luxera-gold transition-colors">{t(`videoTitles.${video.title}`, video.title)}</h3>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* İstatistikler */}
      <StatStrip stats={videoStats} className="mt-24" />

      {/* CTA */}
      <CtaBand
        className="mt-24"
        title={t('videos.cta.title', 'Daireleri 360° Keşfedin')}
        desc={t('videos.cta.desc', 'Videolarla tanıdığınız Luxera Towers\'ı sanal turumuzla adım adım gezin veya yerinde görmek için randevu alın.')}
        primary={{ label: t('videos.cta.primary', 'Sanal Tura Başla'), href: '/sanal-tur' }}
        secondary={{ label: t('videos.cta.secondary', 'Randevu Alın'), href: '/iletisim' }}
        backgroundImage="/images/exterior/12_2025-12-18_02-46-35_4cee27.webp"
      />

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
};

export default Videos;
