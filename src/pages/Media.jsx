import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Newspaper } from 'lucide-react';
import { staggerContainer, zoomIn } from '../shared/utils/animations';
import { pressItems } from '../data/press';
import { downloadCatalog } from '../shared/utils/download';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import StatStrip from '../shared/ui/StatStrip';
import CtaBand from '../shared/ui/CtaBand';

import { useTranslation } from 'react-i18next';

const uniqueSources = [...new Set(pressItems.map((p) => p.source))].length;

const Media = () => {
  const { t } = useTranslation();
  
  const pressStats = [
    { value: pressItems.length, suffix: '+', label: t('media.stats.s1', 'Basın Haberi') },
    { value: uniqueSources, suffix: '', label: t('media.stats.s2', 'Farklı Yayın') },
    { value: 2, suffix: 'M+', label: t('media.stats.s3', 'Toplam Erişim') },
    { value: 100, suffix: '%', label: t('media.stats.s4', 'Olumlu Yankı') },
  ];

  const featured = pressItems[0];
  const rest = pressItems.slice(1);

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24 overflow-hidden">
      <PageHero
        overline={t('media.hero.overline', 'Medya')}
        title={t('media.hero.title', 'Basında')}
        highlight={t('media.hero.highlight', 'Biz')}
        subtitle={t('media.hero.subtitle', 'Ulusal ve uluslararası basında Luxera Towers\'ın yankıları. Medyadaki yerimizi keşfedin.')}
        backgroundImage="/images/exterior/10_2025-12-18_02-46-35_72a99a.webp"
      />

      {/* İstatistikler */}
      <StatStrip stats={pressStats} className="mb-24" />

      {/* Öne Çıkan Haber */}
      {featured && (
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-luxera-charcoal border border-luxera-gold/20 rounded-3xl p-10 md:p-16 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-luxera-gold/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="shrink-0 w-16 h-16 rounded-full bg-luxera-gold/10 flex items-center justify-center text-luxera-gold">
                <Newspaper size={30} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-luxera-gold font-serif text-xl tracking-wider">{featured.source}</span>
                  <span className="text-gray-500 text-sm">{featured.date}</span>
                  <span className="text-xs uppercase tracking-widest text-luxera-gold border border-luxera-gold/40 rounded-full px-3 py-1">{t('media.featured', 'Öne Çıkan')}</span>
                </div>
                <h2 className="text-3xl font-serif text-white mb-3">{t(`mediaData.${featured.id}.title`, featured.title)}</h2>
                <p className="text-gray-400 leading-relaxed">{t(`mediaData.${featured.id}.desc`, featured.desc)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Haber Kartları */}
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader overline={t('media.all.overline', 'Medya')} title={t('media.all.title', 'Tüm Haberler')} watermark="PRESS" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {rest.map((item, index) => {
            const hasLink = item.url && item.url !== '#';
            return (
              <motion.a
                variants={zoomIn}
                key={index}
                href={item.url || '#'}
                target={hasLink ? '_blank' : undefined}
                rel={hasLink ? 'noopener noreferrer' : undefined}
                onClick={(e) => !hasLink && e.preventDefault()}
                className={`block bg-luxera-charcoal p-8 rounded-xl border border-white/5 hover:border-luxera-gold/30 transition-all group ${hasLink ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-luxera-gold font-serif text-xl tracking-wider">{item.source}</span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-2xl text-white mb-4 group-hover:text-luxera-gold transition-colors">{t(`mediaData.${item.id}.title`, item.title)}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{t(`mediaData.${item.id}.desc`, item.desc)}</p>

                <div className={`flex items-center gap-2 text-sm text-luxera-gold uppercase tracking-widest transition-opacity ${hasLink ? 'opacity-0 group-hover:opacity-100' : 'opacity-40'}`}>
                  {hasLink ? <>{t('media.card.read', 'Haberi Oku')} <ExternalLink size={14} /></> : t('media.card.soon', 'Yakında')}
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Basın Kiti CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-luxera-charcoal border border-luxera-gold/20 rounded-3xl p-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-luxera-gold/5 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl font-serif text-white mb-4">{t('media.kit.title', 'Basın Kiti')}</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
              {t('media.kit.desc', 'Proje görselleri, logo ve künye bilgilerini içeren basın kitimizi indirin. Röportaj ve iş birliği talepleriniz için basın ekibimizle iletişime geçebilirsiniz.')}
            </p>
            <button
              onClick={downloadCatalog}
              className="inline-flex items-center gap-3 bg-luxera-gold text-luxera-navy px-8 py-4 rounded-sm uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <Download size={20} /> {t('media.kit.btn', 'Basın Kitini İndir')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <CtaBand
        className="mt-24"
        title={t('media.cta.title', 'İş Birliği & Röportaj')}
        desc={t('media.cta.desc', 'Medya iş birlikleri, röportaj talepleri ve basın davetleri için kurumsal iletişim ekibimize ulaşın.')}
        primary={{ label: t('media.cta.primary', 'İletişime Geçin'), href: '/iletisim' }}
        backgroundImage="/images/exterior/10_2025-12-18_02-46-35_72a99a.webp"
      />
    </div>
  );
};

export default Media;
