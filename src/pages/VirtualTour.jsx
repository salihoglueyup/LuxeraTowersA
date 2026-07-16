import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize, Map, Camera, MousePointerClick, Info, X } from 'lucide-react';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import { virtualTourScenes } from '../data/virtualTour';
import { useTranslation } from 'react-i18next';
import SEO from '../shared/seo/SEO';

const VirtualTour = () => {
  const { t } = useTranslation();
  const [activeScene, setActiveScene] = useState(virtualTourScenes[0]);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const containerRef = useRef(null);

  // Tur deneyimi nasl yaplr blǬmǬ iin (EYer gerekirse eklenebilir)

  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pb-32">
      <SEO 
        title={t('virtualTour.seo.title', 'İnteraktif Sanal Tur')}
        description={t('virtualTour.seo.desc', 'Luxera Towers örnek dairelerini interaktif sanal tur ile 360 derece detaylarıyla keşfedin.')}
        canonical="https://luxeratowers.com/sanal-tur"
      />
      
      <PageHero
        overline={t('virtualTour.hero.overline', 'İç İçe Deneyim')}
        title={t('virtualTour.hero.title', 'Sanal')}
        highlight={t('virtualTour.hero.highlight', 'Tur')}
        subtitle={t('virtualTour.hero.subtitle', 'Evinizi taşınmadan önce, detaylıca ve interaktif olarak keşfedin.')}
        backgroundImage="/images/exterior/4_2025-12-18_02-46-35_e74cd5 (1).webp"
      />

      <div className="max-w-[95rem] mx-auto px-4 mt-16">
        <div className="text-center mb-12">
          <SectionHeader
            title={t('virtualTour.explorer.title', 'İnteraktif Keşif')}
            subtitle={t('virtualTour.explorer.subtitle', 'Resmi sürükleyerek odayı gezin ve detayları görmek için parlayan noktalara tıklayın.')}
          />
        </div>

        {/* INTERACTIVE HOTSPOT EXPLORER (Fake 360) */}
        <div className="relative w-full h-[600px] md:h-[800px] bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-luxera-gold/20" ref={containerRef}>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeScene.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full relative cursor-grab active:cursor-grabbing"
            >
              {/* SǬrǬklenebilir Dev Grsel (Pan & Zoom effect) */}
              <motion.img 
                drag
                dragConstraints={containerRef}
                dragElastic={0.2}
                initial={{ scale: 1.3 }} // Resim bǬyǬtǬlǬr ki kenarlara sǬrǬklenebilsin
                src={activeScene.img}
                alt={activeScene.title}
                className="w-full h-full object-cover object-center origin-center pointer-events-auto"
                draggable={false}
              />

              {/* Hotspots (Noktalar) */}
              {activeScene.hotspots.map((hotspot) => (
                <div 
                  key={hotspot.id} 
                  className="absolute z-20"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="relative group">
                    {/* Pulsing Dot */}
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 transition-colors ${
                        activeHotspot?.id === hotspot.id 
                          ? 'bg-luxera-gold border-white text-luxera-navy' 
                          : 'bg-black/40 border-luxera-gold text-luxera-gold group-hover:bg-luxera-gold group-hover:text-luxera-navy'
                      }`}
                    >
                      <Info size={20} />
                    </motion.button>
                    <div className="absolute inset-0 rounded-full bg-luxera-gold/50 animate-ping -z-10 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Hotspot Tooltip (Alan Panel) */}
          <AnimatePresence>
            {activeHotspot && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-32 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 md:bottom-32 z-40 w-[90%] md:w-80 bg-black/70 backdrop-blur-xl border border-luxera-gold/30 p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <button 
                  onClick={() => setActiveHotspot(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 rounded-full p-1 transition-colors"
                >
                  <X size={16} />
                </button>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-luxera-gold/20 flex items-center justify-center text-luxera-gold border border-luxera-gold/30">
                    <SparklesIcon />
                  </div>
                  <h4 className="text-xl font-serif text-white">{activeHotspot.title}</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{activeHotspot.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* st Ynergeler */}
          <div className="absolute top-6 left-6 z-30 flex items-center gap-3 bg-black/50 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 pointer-events-none shadow-lg">
            <MousePointerClick className="text-luxera-gold" size={20} />
            <span className="text-sm font-medium tracking-wide">Sürükleyerek Gezin</span>
          </div>

          <div className="absolute top-6 right-6 z-30 flex items-center gap-2 bg-luxera-gold text-luxera-navy px-5 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] pointer-events-none uppercase tracking-widest text-xs">
            {activeScene.title}
          </div>

          {/* Scene Switcher (Oda Seici) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 bg-black/60 backdrop-blur-xl border border-white/20 p-2 rounded-full flex gap-2 w-[90%] md:w-auto overflow-x-auto no-scrollbar">
            {virtualTourScenes.map((scene) => (
              <button
                key={scene.id}
                onClick={() => {
                  setActiveScene(scene);
                  setActiveHotspot(null);
                }}
                className={`relative px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeScene.id === scene.id
                    ? 'bg-luxera-gold text-luxera-navy shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {activeScene.id === scene.id ? <Map size={16} /> : <Camera size={16} />}
                {scene.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

// Basit bir ikon (Sparkles)
const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
)

export default VirtualTour;
