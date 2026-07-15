import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../shared/ui/PageHero';

import { useTranslation } from 'react-i18next';

const Cookies = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pb-24">
      <PageHero
        overline={t('legal.cookies.overline', 'Yasal')}
        title={t('legal.cookies.title', 'Çerez')}
        highlight={t('legal.cookies.highlight', 'Politikası')}
        subtitle={t('legal.cookies.subtitle', 'Web sitemizde kullanılan çerezler hakkında bilgilendirme')}
      />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }}
          className="prose prose-invert max-w-none text-gray-300 space-y-6"
        >
          <p>
            {t('legal.cookies.p1', 'Luxera Towers web sitesi olarak, ziyaretçilerimize daha iyi bir kullanım deneyimi sunmak, site kullanımını analiz etmek ve kişiselleştirilmiş içerikler sunabilmek amacıyla çerezler (cookies) kullanmaktayız.')}
          </p>
          
          <h3 className="text-luxera-gold text-xl font-serif mt-8 mb-4">{t('legal.cookies.h1', 'Çerez Nedir?')}</h3>
          <p>
            {t('legal.cookies.p2', 'Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır.')}
          </p>

          <h3 className="text-luxera-gold text-xl font-serif mt-8 mb-4">{t('legal.cookies.h2', 'Hangi Çerezleri Kullanıyoruz?')}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{t('legal.cookies.l1.strong', 'Zorunlu Çerezler:')}</strong> {t('legal.cookies.l1.text', 'Web sitesinin düzgün çalışması ve temel işlevlerin yerine getirilmesi için kesinlikle gerekli olan çerezlerdir.')}</li>
            <li><strong>{t('legal.cookies.l2.strong', 'Performans ve Analitik Çerezleri:')}</strong> {t('legal.cookies.l2.text', 'Ziyaretçilerin web sitemizi nasıl kullandığını analiz etmemize ve site performansını iyileştirmemize yardımcı olan çerezlerdir (Örn: Google Analytics).')}</li>
            <li><strong>{t('legal.cookies.l3.strong', 'Pazarlama Çerezleri:')}</strong> {t('legal.cookies.l3.text', 'İlgi alanlarınıza uygun reklam ve kampanyalar sunmak amacıyla kullanılan çerezlerdir.')}</li>
          </ul>

          <h3 className="text-luxera-gold text-xl font-serif mt-8 mb-4">{t('legal.cookies.h3', 'Çerez Yönetimi')}</h3>
          <p>
            {t('legal.cookies.p3', 'Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirme imkanına sahipsiniz. Çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özelliklerinin düzgün çalışmayabileceğini hatırlatmak isteriz.')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
