import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'luxera_cookie_consent';

// İlk ziyarette çıkan, localStorage ile bir kez kabul edilince gizlenen çerez şeridi.
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Preloader'ın (2.5sn) ardından yumuşakça göster
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const timer = setTimeout(() => setVisible(true), 3200);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // localStorage erişilemezse sessizce geç
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch (e) {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[70]"
        >
          <div className="relative bg-luxera-charcoal/95 backdrop-blur-md border border-luxera-gold/25 rounded-2xl p-6 shadow-2xl">
            <button
              onClick={accept}
              aria-label={t('cookie.close_aria', 'Kapat')}
              className="absolute top-3 right-3 text-gray-500 hover:text-luxera-gold transition-colors"
            >
              <X size={18} />
            </button>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-luxera-gold/10 flex items-center justify-center text-luxera-gold shrink-0">
                <Cookie size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg mb-2">{t('cookie.title', 'Çerez Kullanımı')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {t('cookie.desc1', 'Deneyiminizi iyileştirmek için çerezler kullanıyoruz. Siteyi kullanmaya devam ederek')}{' '}
                  <Link to="/cerez" className="text-luxera-gold hover:underline">{t('cookie.policy', 'Çerez Politikası')}</Link> {t('cookie.and', 've')}{' '}
                  <Link to="/kvkk" className="text-luxera-gold hover:underline">{t('cookie.kvkk', 'KVKK Aydınlatma Metni')}</Link>{t('cookie.desc2', "'ni kabul etmiş olursunuz.")}
                </p>
                <button
                  onClick={accept}
                  className="bg-luxera-gold text-luxera-navy px-6 py-2.5 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors"
                >
                  {t('cookie.accept', 'Kabul Et')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
