import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../shared/ui/PageHero';

import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pb-24">
      <PageHero
        overline={t('legal.privacy.overline', 'Yasal')}
        title={t('legal.privacy.title', 'Gizlilik')}
        subtitle={t('legal.privacy.subtitle', 'Gizlilik Politikası ve Kullanım Koşulları')}
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
            {t('legal.privacy.p1', 'Bu gizlilik politikası, Luxera Towers web sitesini ziyaret eden kullanıcıların kişisel bilgilerinin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar. Sitemizi kullanarak bu politikayı kabul etmiş sayılırsınız.')}
          </p>
          
          <h3 className="text-luxera-gold text-xl font-serif mt-8 mb-4">{t('legal.privacy.h1', 'Bilgi Toplama ve Kullanım')}</h3>
          <p>
            {t('legal.privacy.p2', 'Sitemizdeki formları (iletişim formu, e-bülten kaydı vb.) doldururken tarafımıza ilettiğiniz ad, soyad, e-posta, telefon numarası gibi bilgiler sadece size geri dönüş yapabilmek, kampanyalarımızdan haberdar etmek ve hizmet kalitemizi artırmak amacıyla kullanılmaktadır.')}
          </p>

          <h3 className="text-luxera-gold text-xl font-serif mt-8 mb-4">{t('legal.privacy.h2', 'Bilgi Güvenliği')}</h3>
          <p>
            {t('legal.privacy.p3', 'Tarafımızla paylaştığınız tüm kişisel verileriniz güvenli sunucularda saklanmakta olup, yasal zorunluluklar haricinde üçüncü şahıs veya kurumlarla kesinlikle paylaşılmamaktadır. Veri güvenliğiniz için endüstri standardı güvenlik önlemleri alınmaktadır.')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
