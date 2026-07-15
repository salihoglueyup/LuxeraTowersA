import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeUp } from '../../shared/utils/animations';
import { siteStats } from '../../data/site';
import SplitText from '../../shared/ui/SplitText';
import MagneticButton from '../../shared/ui/MagneticButton';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]); // Parallax effect
  const { t } = useTranslation();

  return (
  <section className="relative h-screen w-full overflow-hidden">
    
    {/* Tam Ekran Arka Plan Videosu */}
    <motion.div style={{ y }} className="absolute inset-0 z-0">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video/luxera-hero.mp4" type="video/mp4" />
      </video>
      
      {/* İki Katmanlı Güçlü Degrade */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxera-navy via-luxera-navy/70 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
    </motion.div>

    {/* Alt-Sol Konumlandırılmış Metinler */}
    <div className="absolute bottom-0 left-0 w-full z-10 p-8 md:p-16 lg:p-24 flex items-end">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-2xl"
      >
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-luxera-gold"></div>
            <p className="text-luxera-gold uppercase tracking-[0.3em] text-xs md:text-sm font-semibold shadow-black drop-shadow-md">
              {t('hero.kicker', 'İstanbul\'un Yeni İkonu')}
            </p>
          </div>
        </motion.div>
        
        <h1 
          className="text-4xl md:text-6xl lg:text-[5rem] font-serif text-white leading-[0.95] mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] flex flex-col"
        >
          <span><SplitText text={t('hero.title1', "Basın Ekspres'te")} delay={0.1} /></span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxera-gold to-luxera-goldLight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] block mt-1">
            <span className="block"><SplitText text={t('hero.title2', 'Gökyüzü')} delay={0.3} /></span>
            <span className="block"><SplitText text={t('hero.title3', 'Bahçeleri')} delay={0.5} /></span>
          </span>
        </h1>
        
        <motion.p 
          variants={fadeUp}
          className="text-gray-200 text-base md:text-lg mb-8 font-medium leading-relaxed max-w-xl drop-shadow-lg"
        >
          {t('hero.desc', `${siteStats.towers} görkemli kule, ${siteStats.residences} prestijli rezidans ve ${siteStats.stores} mağazalık lüks AVM ile yaşam standartlarınızı zirveye taşıyoruz.`)}
        </motion.p>
        
        <motion.div variants={fadeUp}>
          <MagneticButton href="#iletisim" className="inline-flex items-center gap-3 bg-luxera-gold text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:bg-luxera-goldDark hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all group">
            {t('common.discover', 'Projeyi Keşfet')}
            <ArrowRight className="group-hover:translate-x-2 transition-transform rtl:group-hover:-translate-x-2 rtl:rotate-180" size={18} />
          </MagneticButton>
        </motion.div>
      </motion.div>
    </div>
  </section>
  );
};

export default Hero;
