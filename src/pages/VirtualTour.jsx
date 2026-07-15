import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Maximize, Compass, Eye, MousePointerClick, Sofa, Sun, Route, CalendarCheck } from 'lucide-react';
import PageHero from '../shared/ui/PageHero';
import VideoModal from '../shared/ui/VideoModal';
import SectionHeader from '../shared/ui/SectionHeader';
import Reveal from '../shared/ui/Reveal';
import ProcessSteps from '../shared/ui/ProcessSteps';
import StatStrip from '../shared/ui/StatStrip';
import CtaBand from '../shared/ui/CtaBand';
import { virtualTour, HERO_DEMO_MP4 } from '../data/videos';
import { useTranslation } from 'react-i18next';

const VirtualTour = () => {
  const { t } = useTranslation();
  const [activeScene, setActiveScene] = useState(virtualTour.scenes[0]);
  const [showVideo, setShowVideo] = useState(false);

  const highlights = [
    { icon: <Sofa size={26} />, title: t('virtualTour.highlights.h1.title', 'Örnek Daire İç Mekanı'), desc: t('virtualTour.highlights.h1.desc', 'Salon, mutfak, yatak odası ve banyoların gerçek ölçek ve malzeme dokusuyla sanal turu.') },
    { icon: <Sun size={26} />, title: t('virtualTour.highlights.h2.title', 'Panoramik Manzara'), desc: t('virtualTour.highlights.h2.desc', 'Tavandan yere uzanan camlardan şehir siluetine açılan gün ışığıyla yıkanan mekânlar.') },
    { icon: <Eye size={26} />, title: t('virtualTour.highlights.h3.title', 'Detaylı Doku & Işık'), desc: t('virtualTour.highlights.h3.desc', 'İtalyan seramikler, masif ahşap detaylar ve dolaylı aydınlatmanın atmosferini yakından görün.') },
  ];

  const tourSteps = [
    { icon: <MousePointerClick size={22} />, title: t('virtualTour.steps.s1.title', 'Sahneyi Seçin'), desc: t('virtualTour.steps.s1.desc', 'Alttaki sahne seçiciden gezmek istediğiniz mekânı (salon, mutfak, yatak odası, banyo) belirleyin.') },
    { icon: <Play size={22} />, title: t('virtualTour.steps.s2.title', 'Turu Başlatın'), desc: t('virtualTour.steps.s2.desc', 'Görselin üzerine tıklayarak örnek daire video turunu tam ekran deneyimleyin.') },
    { icon: <Route size={22} />, title: t('virtualTour.steps.s3.title', 'Keşfedin'), desc: t('virtualTour.steps.s3.desc', 'Mekânlar arasında gezinerek oranları, malzemeleri ve manzarayı evinizin konforunda inceleyin.') },
    { icon: <CalendarCheck size={22} />, title: t('virtualTour.steps.s4.title', 'Randevu Alın'), desc: t('virtualTour.steps.s4.desc', 'Beğendiğiniz daireyi yerinde görmek için satış ofisimizden randevu oluşturun.') },
  ];

  const tourStats = [
    { value: 4, suffix: '', label: t('virtualTour.stats.st1', 'Farklı Sahne') },
    { value: 360, suffix: '°', label: t('virtualTour.stats.st2', 'Deneyim') },
    { value: 3, suffix: '.20 m', label: t('virtualTour.stats.st3', 'Tavan Yüksekliği') },
    { value: 7, suffix: '/24', label: t('virtualTour.stats.st4', 'Erişim') },
  ];

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24 overflow-hidden">
      <PageHero
        overline={t('virtualTour.hero.overline', '360° Deneyim')}
        title={t('virtualTour.hero.title', 'Sanal')}
        highlight={t('virtualTour.hero.highlight', 'Tur')}
        subtitle={t('virtualTour.hero.subtitle', 'Luxera Towers\'ın benzersiz mimarisini ve örnek dairelerimizi evinizin konforunda keşfedin.')}
        backgroundImage="/images/interior/6_2025-12-18_02-42-20_29be56.webp"
      />

      <div className="max-w-7xl mx-auto px-6">
        {virtualTour.matterportUrl ? (
          // Gerçek 360°/Matterport turu (link gelince aktifleşir)
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden border border-luxera-gold/20 shadow-2xl"
          >
            <iframe title="Sanal Tur" src={virtualTour.matterportUrl} className="w-full h-full" allowFullScreen />
          </motion.div>
        ) : (
          // Fallback: örnek daire video turu + sahne seçici
          <>
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
              className="relative w-full aspect-video bg-luxera-charcoal rounded-3xl overflow-hidden border border-luxera-gold/20 shadow-2xl group cursor-pointer mb-8"
              onClick={() => setShowVideo(true)}
            >
              <img src={activeScene.img} alt={activeScene.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-luxera-navy/30 group-hover:bg-luxera-navy/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-luxera-gold/20 rounded-full flex items-center justify-center backdrop-blur-md border border-luxera-gold/50 group-hover:scale-110 transition-transform">
                  <Play className="text-luxera-gold ml-2" size={40} />
                </div>
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-luxera-gold/30">
                <Compass className="text-luxera-gold" size={18} />
                <span className="text-sm text-white">{t(`virtualTour.scenes.${activeScene.id}.title`, activeScene.title)}</span>
              </div>
              <div className="absolute bottom-6 right-6">
                <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10">
                  <Maximize size={20} />
                </div>
              </div>
            </motion.div>

            {/* Sahne Seçici */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {virtualTour.scenes.map((scene) => (
                <button
                  key={scene.title}
                  onClick={() => setActiveScene(scene)}
                  className={`relative h-28 rounded-xl overflow-hidden border transition-all ${
                    activeScene.title === scene.title ? 'border-luxera-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-white/10 hover:border-luxera-gold/50'
                  }`}
                >
                  <img src={scene.img} alt={scene.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 flex items-end p-3 transition-colors ${activeScene.title === scene.title ? 'bg-luxera-navy/30' : 'bg-luxera-navy/60 hover:bg-luxera-navy/40'}`}>
                    <span className="text-sm font-serif text-white">{t(`virtualTour.scenes.${scene.id}.title`, scene.title)}</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Giriş Anlatımı */}
      <div className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <SectionHeader
          overline={t('virtualTour.intro.overline', 'Deneyim')}
          title={t('virtualTour.intro.title', 'Evinizi Taşınmadan Önce Yaşayın')}
          subtitle={t('virtualTour.intro.subtitle', 'Sanal tur, örnek dairelerimizi ve sosyal alanlarımızı en ince ayrıntısına kadar keşfetmenizi sağlar.')}
        />
        <p className="text-gray-400 leading-relaxed">
          {t('virtualTour.intro.desc', 'Luxera Towers\'ın örnek dairelerini, gerçek ölçek ve malzeme dokusuyla adım adım gezebilirsiniz. Işığın gün içindeki dansını, tavan yüksekliğinin ferahlığını ve panoramik camlardan açılan manzarayı; henüz taşınmadan, olduğunuz yerden deneyimleyin. Her sahne, evinizde sizi bekleyen atmosferi olabildiğince gerçekçi biçimde yansıtmak için hazırlandı.')}
        </p>
      </div>

      {/* Turda Neler Göreceksiniz */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <Reveal.Item
              key={h.title}
              variant="fade-up"
              className="bg-luxera-charcoal border border-luxera-gold/10 rounded-2xl p-8 text-center hover:border-luxera-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-[colors,box-shadow] group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-luxera-gold/10 flex items-center justify-center mb-6 text-luxera-gold group-hover:bg-luxera-gold group-hover:text-luxera-navy transition-colors">
                {h.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{h.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
            </Reveal.Item>
          ))}
        </Reveal>
      </div>

      {/* İstatistikler */}
      <StatStrip stats={tourStats} className="mt-24" />

      {/* Nasıl Gezilir */}
      <ProcessSteps
        className="mt-32"
        overline={t('virtualTour.how.overline', 'Adım Adım')}
        title={t('virtualTour.how.title', 'Sanal Tur Nasıl Yapılır?')}
        watermark="360°"
        steps={tourSteps}
      />

      {/* CTA */}
      <CtaBand
        className="mt-32"
        title={t('virtualTour.cta.title', 'Daireleri Yerinde Görün')}
        desc={t('virtualTour.cta.desc', 'Sanal turda beğendiğiniz daireyi gerçek atmosferinde deneyimlemek için satış ofisimizden randevu alın.')}
        primary={{ label: t('virtualTour.cta.primary', 'Randevu Alın'), href: '/iletisim' }}
        secondary={{ label: t('virtualTour.cta.secondary', 'Tüm Videolar'), href: '/videolar' }}
        backgroundImage="/images/interior/6_2025-12-18_02-42-20_29be56.webp"
      />

      <VideoModal
        video={showVideo ? { title: `${t('virtualTour.modal', 'Örnek Daire Turu')} — ${t(`virtualTour.scenes.${activeScene.id}.title`, activeScene.title)}`, mp4: HERO_DEMO_MP4 } : null}
        onClose={() => setShowVideo(false)}
      />
    </div>
  );
};

export default VirtualTour;
