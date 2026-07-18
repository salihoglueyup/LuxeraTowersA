import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CreditCard, ShieldCheck, PieChart, Activity, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/ui/PageHero';
import SectionHeader from '../../shared/ui/SectionHeader';
import SEO from '../../shared/seo/SEO';

const Finance = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO
        title={t('portal.financePage.seoTitle')}
        description={t('portal.financePage.seoDesc')}
      />

      <PageHero
        overline={t('portal.financePage.heroOverline')}
        title={t('portal.financePage.heroTitle')}
        highlight={t('portal.financePage.heroHighlight')}
        subtitle={t('portal.financePage.heroSubtitle')}
        backgroundImage="/images/interior/d5_scene5_20240304_220944copy_2025-12-18_03-47-03_7b5b78.webp"
      />

      <div className="max-w-[90rem] mx-auto px-6 mt-24">
        <SectionHeader
          title={t('portal.financePage.sectionTitle')}
          subtitle={t('portal.financePage.sectionSubtitle')}
          watermark="FINANCE"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><CreditCard size={100} className="text-luxera-gold" /></div>
            <div className="w-16 h-16 bg-luxera-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <CreditCard className="text-luxera-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">{t('portal.financePage.card1Title')}</h3>
            <p className="text-gray-400">{t('portal.financePage.card1Desc')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><PieChart size={100} className="text-luxera-gold" /></div>
            <div className="w-16 h-16 bg-luxera-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <PieChart className="text-luxera-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">{t('portal.financePage.card2Title')}</h3>
            <p className="text-gray-400">{t('portal.financePage.card2Desc')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Activity size={100} className="text-luxera-gold" /></div>
            <div className="w-16 h-16 bg-luxera-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <Activity className="text-luxera-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">{t('portal.financePage.card3Title')}</h3>
            <p className="text-gray-400">{t('portal.financePage.card3Desc')}</p>
          </motion.div>
        </div>

        {/* Apsiyon Integration Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-24 group border border-luxera-gold/30">
          <div className="absolute inset-0 bg-luxera-gold/5"></div>
          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-luxera-gold font-bold uppercase tracking-widest mb-4">
                <ShieldCheck size={20} /> {t('portal.financePage.badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{t('portal.financePage.bannerTitle')}</h2>
              <p className="text-gray-300 max-w-xl text-lg">
                {t('portal.financePage.bannerDesc')}
              </p>
            </div>
            <Link 
              to="/portal/login"
              className="inline-flex items-center gap-3 bg-luxera-gold text-luxera-navy px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl hover:scale-105 shrink-0"
            >
              {t('portal.financePage.loginBtn')} <ExternalLink size={18} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Finance;
