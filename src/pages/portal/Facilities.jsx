import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Calendar, Droplets, Dumbbell, Coffee, ExternalLink } from 'lucide-react';
import PageHero from '../../shared/ui/PageHero';
import SectionHeader from '../../shared/ui/SectionHeader';
import SEO from '../../shared/seo/SEO';

const Facilities = () => {
  const { t } = useTranslation();
  const facilities = [
    {
      id: 1,
      title: t('portal.facilities.f1title'),
      desc: t('portal.facilities.f1desc'),
      icon: <Droplets size={32} />,
      img: '/images/amenities/d5_scene20_20240303_013151copy_2025-12-18_03-46-29_42c7ac.webp'
    },
    {
      id: 2,
      title: t('portal.facilities.f2title'),
      desc: t('portal.facilities.f2desc'),
      icon: <Dumbbell size={32} />,
      img: '/images/amenities/d5_scene26_20240303_012656copy_2025-12-18_03-46-34_808608.webp'
    },
    {
      id: 3,
      title: t('portal.facilities.f3title'),
      desc: t('portal.facilities.f3desc'),
      icon: <Coffee size={32} />,
      img: '/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp'
    }
  ];

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO
        title={t('portal.facilities.seoTitle')}
        description={t('portal.facilities.seoDesc')}
      />

      <PageHero
        overline={t('portal.facilities.heroOverline')}
        title={t('portal.facilities.heroTitle')}
        highlight={t('portal.facilities.heroHighlight')}
        subtitle={t('portal.facilities.heroSubtitle')}
        backgroundImage="/images/amenities/d5_scene20_20240303_013151copy_2025-12-18_03-46-29_42c7ac.webp"
      />

      <div className="max-w-[90rem] mx-auto px-6 mt-24">
        <SectionHeader
          title={t('portal.facilities.sectionTitle')}
          subtitle={t('portal.facilities.sectionSubtitle')}
          watermark="LIFESTYLE"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-24">
          {facilities.map((fac, index) => (
            <motion.div 
              key={fac.id}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }} 
              className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <div className="absolute inset-0">
                <img 
                  src={fac.img} 
                  alt={fac.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxera-charcoal via-luxera-charcoal/60 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="w-16 h-16 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-luxera-gold mb-6 border border-white/20">
                  {fac.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{fac.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {fac.desc}
                </p>
                <div className="flex items-center gap-2 text-luxera-gold text-sm uppercase tracking-widest font-bold">
                  {t('portal.facilities.reserveBtn')} <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-6">
          <div className="w-16 h-16 bg-luxera-gold rounded-full flex shrink-0 items-center justify-center">
            <Calendar size={28} className="text-luxera-navy" />
          </div>
          <div>
            <h4 className="text-white font-serif text-xl mb-2">{t('portal.facilities.infoTitle')}</h4>
            <p className="text-gray-400">
              {t('portal.facilities.infoDesc')}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Facilities;
