import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, Car, MapPin, Key, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/ui/PageHero';
import SectionHeader from '../../shared/ui/SectionHeader';
import SEO from '../../shared/seo/SEO';

const Guest = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO
        title={t('portal.guestPage.seoTitle')}
        description={t('portal.guestPage.seoDesc')}
      />

      <PageHero
        overline={t('portal.guestPage.heroOverline')}
        title={t('portal.guestPage.heroTitle')}
        highlight={t('portal.guestPage.heroHighlight')}
        subtitle={t('portal.guestPage.heroSubtitle')}
        backgroundImage="/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp"
      />

      <div className="max-w-[90rem] mx-auto px-6 mt-24">
        <SectionHeader
          title={t('portal.guestPage.sectionTitle')}
          subtitle={t('portal.guestPage.sectionSubtitle')}
          watermark="GUEST"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Users size={100} className="text-luxera-gold" /></div>
            <div className="w-16 h-16 bg-luxera-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <Key className="text-luxera-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">{t('portal.guestPage.card1Title')}</h3>
            <p className="text-gray-400">
              {t('portal.guestPage.card1Desc')}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Car size={100} className="text-luxera-gold" /></div>
            <div className="w-16 h-16 bg-luxera-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <MapPin className="text-luxera-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">{t('portal.guestPage.card2Title')}</h3>
            <p className="text-gray-400">
              {t('portal.guestPage.card2Desc')}
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="bg-luxera-gold rounded-3xl p-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif text-luxera-navy mb-4">{t('portal.guestPage.ctaTitle')}</h2>
          <p className="text-luxera-navy/80 mb-8 max-w-2xl">
            {t('portal.guestPage.ctaDesc')}
          </p>
          <Link 
            to="/portal/login"
            className="inline-flex items-center gap-3 bg-luxera-navy text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:scale-105"
          >
            {t('portal.guestPage.ctaBtn')} <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Guest;
