import React from 'react';
import { motion } from 'framer-motion';
import LuxuryButton from '../shared/ui/LuxuryButton';
import RevealText from '../shared/ui/RevealText';

import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-luxera-navy min-h-screen text-white flex items-center justify-center relative overflow-hidden">
      {/* Background with subtle glow + logo watermark */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxera-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <img
          src="/images/logo/logo.webp"
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] max-w-none brightness-0 invert opacity-[0.04] select-none pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/logo/logo.webp" alt="Luxera Towers" className="h-14 w-auto brightness-0 invert mx-auto mb-10 opacity-90" />

          <h1 className="text-[120px] md:text-[200px] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-luxera-gold to-luxera-gold/20 leading-none mb-4 select-none">
            404
          </h1>

          <div className="flex justify-center mb-6">
            <RevealText as="h2" text={t('notFound.title', 'Gökyüzünde kayboldunuz sanırım...')} className="text-2xl md:text-3xl font-serif text-white" />
          </div>

          <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
            {t('notFound.desc', 'Aradığınız sayfayı bulamıyoruz. Belki taşınmış, silinmiş veya geçici olarak ulaşılamıyor olabilir.')}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <LuxuryButton variant="primary" href="/">
              {t('notFound.home', 'Ana Sayfaya Dön')}
            </LuxuryButton>
            <LuxuryButton variant="outline" href="/rezidanslar">
              {t('notFound.residences', 'Rezidanslar')}
            </LuxuryButton>
            <LuxuryButton variant="outline" href="/iletisim">
              {t('notFound.contact', 'İletişim')}
            </LuxuryButton>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-12 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
    </div>
  );
};

export default NotFound;
