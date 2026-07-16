import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Download, PhoneCall, CalendarCheck, FileSignature, KeyRound, ZoomIn, X, ToggleLeft, ToggleRight, Layers } from 'lucide-react';
import { residences } from '../data/residences';
import { downloadFile, CATALOG_URL } from '../shared/utils/download';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import RevealText from '../shared/ui/RevealText';
import LuxuryButton from '../shared/ui/LuxuryButton';
import ProcessSteps from '../shared/ui/ProcessSteps';
import Testimonials from '../shared/ui/Testimonials';
import CtaBand from '../shared/ui/CtaBand';
import SEO from '../shared/seo/SEO';

import { useTranslation } from 'react-i18next';

const Residences = () => {
  const { t } = useTranslation();
  
  const buySteps = [
    { icon: <PhoneCall size={22} />, title: t('residences.buySteps.step1.title', 'İletişim'), desc: t('residences.buySteps.step1.desc', 'Satış danışmanımızla görüşerek ihtiyaç ve beklentilerinizi paylaşın.') },
    { icon: <CalendarCheck size={22} />, title: t('residences.buySteps.step2.title', 'Örnek Daire Gezisi'), desc: t('residences.buySteps.step2.desc', 'Örnek dairemizi yerinde gezin, malzeme ve manzarayı deneyimleyin.') },
    { icon: <FileSignature size={22} />, title: t('residences.buySteps.step3.title', 'Planlama & Sözleşme'), desc: t('residences.buySteps.step3.desc', 'Size uygun daireyi ve ödeme planını belirleyip sözleşmeyi tamamlayın.') },
    { icon: <KeyRound size={22} />, title: t('residences.buySteps.step4.title', 'Teslim'), desc: t('residences.buySteps.step4.desc', 'Anahtar teslim süreci ve sonrasında yaşamınıza başlayın.') },
  ];

  const [activeTab, setActiveTab] = useState(residences[0]);
  const [activeVariant, setActiveVariant] = useState(residences[0].plans[0]);
  const [showDimensions, setShowDimensions] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (activeTab && activeTab.plans && activeTab.plans.length > 0) {
      setActiveVariant(activeTab.plans[0]);
    }
  }, [activeTab]);

  const handlePlanDownload = () => {
    downloadFile(activeTab.planPdf || CATALOG_URL, `Luxera-${activeTab.id}-Plan.pdf`);
  };

  const currentPlanImage = showDimensions ? activeVariant.withWords : activeVariant.withoutWords;

  return (
    <div className="min-h-screen bg-luxera-navy text-white pb-24">
      <SEO 
        title={t('residences.seo.title', 'Rezidans ve Kat Planları')}
        description={t('residences.seo.desc', 'Farklı yaşam tarzlarına hitap eden, 3.20m tavan yüksekliğine sahip lüks rezidans daire seçenekleri ve detaylı kat planları.')}
        canonical="https://luxeratowers.com/rezidanslar"
      />
      
      <PageHero
        overline={t('residences.hero.overline', 'Kusursuz Yaşam')}
        title={t('residences.hero.title', 'Rezidans')}
        highlight={t('residences.hero.highlight', 'Seçenekleri')}
        subtitle={t('residences.hero.subtitle', 'Her m²\'sinde ince bir zevkin ve üstün mühendisliğin yansımalarını bulacağınız, sadece size özel tasarlanmış prestijli yaşam alanları.')}
        backgroundImage="/images/interior/6_2025-12-18_02-42-20_29be56.webp"
      />

      {/* İç Mekan Felsefemiz */}
      <div className="max-w-5xl mx-auto px-6 mb-32">
        <SectionHeader 
          overline={t('residences.philosophy.overline', 'Tasarım Vizyonu')}
          title={t('residences.philosophy.title', 'İç Mekan Felsefemiz')}
          watermark="01"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <RevealText as="h3" text={t('residences.philosophy.heading', 'Gelenekten Geleceğe Ulaşan Zarafet')} className="text-2xl font-serif text-luxera-gold mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed font-light">
              {t('residences.philosophy.p1', 'Luxera Towers\'ın iç mekan tasarımı, lüksün bağırmayan, sessiz ama derinden hissedilen gücünden ilham alır. Standartları yıkan 3.20 metrelik tavan yükseklikleri, eve adım attığınız an üzerinizdeki tüm yorgunluğu alacak ferah bir atmosfer yaratır.')}
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed font-light text-sm">
              {t('residences.philosophy.p2', 'Mutfak ve ıslak zeminlerde kullanılan birinci sınıf İtalyan seramikler, antrede sizi karşılayan doğal masif ahşap detaylarla kusursuz bir tezat oluşturarak mekana sıcaklık katar. Ses yalıtımında kullanılan akustik bariyerler sayesinde, şehrin kalbinde olmanıza rağmen evinizde mutlak bir sessizlik hüküm sürer.')}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-luxera-gold">✦</span> {t('residences.philosophy.f1', 'Yerden ısıtma ve VRV soğutma sistemleri')}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-luxera-gold">✦</span> {t('residences.philosophy.f2', 'Mobil cihazlardan yönetilebilen Akıllı Ev Altyapısı')}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-luxera-gold">✦</span> {t('residences.philosophy.f3', 'Tavandan yere kadar uzanan panoramik yalıtımlı camlar')}
              </li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-luxera-gold/20">
            <img src="/images/interior/10_2025-12-18_02-42-20_2ab0c1.webp" alt="İç Mekan Detay" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxera-navy/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title={t('residences.floorPlans.title', 'Kat Planları')}
          watermark="02"
        />

        {/* Ana Tipler (1+1, 2+1 vs) Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {residences.map((res) => (
            <button
              key={res.id}
              onClick={() => setActiveTab(res)}
              className={`px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${
                activeTab.id === res.id
                  ? 'bg-luxera-gold text-white shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-transparent border border-white/20 text-gray-400 hover:border-luxera-gold hover:text-luxera-gold'
              }`}
            >
              {res.id}
            </button>
          ))}
        </div>

        {/* Alt Tipler (A1, A3 vs) Tabs */}
        {activeTab.plans && activeTab.plans.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {activeTab.plans.map((variant) => (
              <button
                key={variant.name}
                onClick={() => setActiveVariant(variant)}
                className={`px-5 py-2 rounded-md text-xs tracking-widest transition-all ${
                  activeVariant?.name === variant.name
                    ? 'bg-white/10 text-luxera-gold border border-luxera-gold/50'
                    : 'bg-transparent border border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="bg-luxera-charcoal border border-luxera-gold/20 rounded-3xl p-6 md:p-12 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVariant?.name || activeTab.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
            >
              {/* Sol: Detay */}
              <div>
                <h2 className="text-4xl font-serif text-luxera-gold mb-2">{t(`residences.types.${activeTab.id}.title`, activeTab.title)}</h2>
                <div className="text-gray-400 font-serif text-xl mb-6 flex items-center gap-2">
                  <Layers size={20} className="text-luxera-gold/60"/> 
                  {activeVariant?.name}
                </div>
                
                <p className="text-gray-300 text-lg mb-8">{t(`residences.types.${activeTab.id}.desc`, activeTab.desc)}</p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-500 uppercase tracking-widest text-sm">{t('residences.floorPlans.grossArea', 'Brüt Alan')}</span>
                    <span className="text-white font-serif">{activeTab.area}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-500 uppercase tracking-widest text-sm">{t('residences.floorPlans.ceiling', 'Tavan Yüksekliği')}</span>
                    <span className="text-white font-serif">{activeTab.ceiling}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-500 uppercase tracking-widest text-sm">{t('residences.floorPlans.hvac', 'Isıtma/Soğutma')}</span>
                    <span className="text-white font-serif">{activeTab.hvac}</span>
                  </div>
                </div>

                {/* Oda listesi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {activeTab.rooms.map((room, index) => (
                    <div key={room} className="flex items-start gap-3 text-gray-300 text-sm">
                      <Check className="text-luxera-gold shrink-0 mt-0.5" size={16} />
                      <span>{t(`residences.types.${activeTab.id}.feature${index}`, room)}</span>
                    </div>
                  ))}
                </div>

                <LuxuryButton 
                  variant="outline" 
                  onClick={handlePlanDownload}
                  icon={<Download size={18} />}
                  className="w-full"
                >
                  {t('residences.floorPlans.downloadPlan', 'Kataloğu İndir')}
                </LuxuryButton>
              </div>

              {/* Sağ: Plan + İç Mekan */}
              <div className="space-y-6">
                
                {/* Etkileşimli Kat Planı Görüntüleyici */}
                <div className="bg-gray-800/80 rounded-2xl p-4 flex flex-col items-center border border-white/5 relative shadow-2xl group">
                  {/* Ölçüleri Gizle/Göster Butonu (Sihirli Buton) */}
                  <div className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 cursor-pointer hover:bg-black/60 transition-colors" onClick={() => setShowDimensions(!showDimensions)}>
                    <span className="text-xs uppercase tracking-widest text-gray-300">
                      {showDimensions ? 'Ölçüleri Gizle' : 'Ölçüleri Göster'}
                    </span>
                    {showDimensions ? (
                      <ToggleRight size={24} className="text-luxera-gold" />
                    ) : (
                      <ToggleLeft size={24} className="text-gray-500" />
                    )}
                  </div>

                  <div 
                    onClick={() => setLightboxImage(currentPlanImage)}
                    className="w-full h-[380px] relative cursor-zoom-in"
                  >
                    <div className="absolute inset-0 bg-luxera-gold/5 rounded-xl blur-xl transition-all group-hover:bg-luxera-gold/15 pointer-events-none"></div>
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={currentPlanImage}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={currentPlanImage} 
                        alt={`${activeVariant?.name} Kat Planı`} 
                        className="w-full h-full object-contain mix-blend-screen relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                      />
                    </AnimatePresence>
                    
                    <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 pointer-events-none">
                      <div className="bg-luxera-navy/80 p-3 rounded-full backdrop-blur-sm text-luxera-gold flex flex-col items-center">
                        <ZoomIn size={28} />
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  onClick={() => setLightboxImage(activeTab.interiorImg)}
                  className="rounded-2xl overflow-hidden h-40 border border-luxera-gold/10 cursor-zoom-in relative group"
                >
                  <img src={activeTab.interiorImg} alt={`${activeTab.title} İç Mekan`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-luxera-navy/80 p-2 px-4 rounded-full backdrop-blur-sm text-luxera-gold flex items-center gap-2">
                      <ZoomIn size={18} />
                      <span className="text-xs uppercase tracking-widest">{t('residences.floorPlans.zoom', 'Örnek Daireyi İncele')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Satın Alma Yolculuğu */}
      <ProcessSteps
        className="mt-32"
        overline={t('residences.process.overline', 'Adım Adım')}
        title={t('residences.process.title', 'Satın Alma Yolculuğu')}
        subtitle={t('residences.process.subtitle', 'İlk görüşmeden anahtar teslimine kadar süreç, sizin için sade ve şeffaf biçimde yönetilir.')}
        watermark="03"
        steps={buySteps}
      />

      {/* Referanslar */}
      <div className="mt-32">
        <Testimonials title={t('residences.testimonials.title', 'Ev Sahiplerimiz Ne Diyor?')} overline={t('residences.testimonials.overline', 'Referanslar')} category="resident" watermark="★" />
      </div>

      {/* CTA */}
      <CtaBand
        className="mt-32"
        title={t('residences.cta.title', 'Dairenizi Seçin')}
        desc={t('residences.cta.desc', 'Size en uygun daire tipini ve ödeme planını belirlemek için uzman satış danışmanlarımızla görüşün.')}
        primary={{ label: t('residences.cta.primary', 'İletişime Geçin'), href: '/iletisim' }}
        secondary={{ label: t('residences.cta.secondary', 'Sanal Tur'), href: '/sanal-tur' }}
        backgroundImage="/images/interior/10_2025-12-18_02-42-20_2ab0c1.webp"
      />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-luxera-gold transition-colors bg-white/10 rounded-full p-2"
              onClick={() => setLightboxImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImage}
              alt="Büyük Görsel"
              className="max-w-full max-h-full object-contain border border-luxera-gold/20 shadow-2xl rounded-lg bg-black"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Residences;
