import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, X, ExternalLink, Globe, Phone, Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getOffices } from '../data/brands';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import SEO from '../shared/seo/SEO';

const Offices = () => {
  const { t } = useTranslation();
  
  const offices = getOffices(t);
  const ALL_KEY = t('offices.filters.all', 'Tümü');
  const uniqueSectors = [...new Set(offices.map(o => o.sector))];
  const sectors = [{ label: ALL_KEY, value: null }, ...uniqueSectors.map(s => ({ label: s, value: s }))];
  const [activeSectorValue, setActiveSectorValue] = useState(null);
  
  // Slide Over Panel için secili ofis
  const [selectedOffice, setSelectedOffice] = useState(null);

  const filteredOffices = !activeSectorValue 
    ? offices 
    : offices.filter(o => o.sector === activeSectorValue);

  // Paneli kapatma kısayolu (Escape)
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedOffice(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24 overflow-hidden relative">
      <SEO 
        title={t('offices.seo.title', 'A+ Ofisler ve Şirketler')}
        description={t('offices.seo.desc', 'Türkiye\'nin ve dünyanın önde gelen kurumsal şirketlerinin yönetim merkezleri Luxera Towers\'ta.')}
        canonical="https://luxeratowers.com/ofisler"
      />
      <PageHero
        overline={t('offices.hero.overline', 'Kurumsal Yaşam')}
        title={t('offices.hero.title', 'A+')}
        highlight={t('offices.hero.highlight', 'Ofisler')}
        subtitle={t('offices.hero.subtitle', 'Küresel vizyona sahip şirketlerin, akıllı bina teknolojileriyle donatılmış yeni nesil yönetim merkezleri.')}
        backgroundImage="/images/exterior/12_2025-12-18_02-46-35_4cee27.webp"
      />

      <div className="max-w-[95rem] mx-auto px-4 mt-32">
        <SectionHeader 
          title={t('offices.section.title', 'İş Dünyasının Merkezi')}
          subtitle={t('offices.section.subtitle', 'Sektörünün öncüsü olan değerli markalara ev sahipliği yapıyoruz.')}
          watermark="BUSINESS"
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          
          {/* Sol: Sektor Filtreleme */}
          <div className="w-full lg:w-1/4 xl:w-1/5 shrink-0">
            <div className="sticky top-32 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">
                <Building size={20} className="inline-block mr-2 text-luxera-gold" /> {t('offices.ui.sectors', 'Sektörler')}
              </h3>
              <div className="flex flex-col gap-3">
                {sectors.map((sector, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSectorValue(sector.value)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSectorValue === sector.value
                        ? 'bg-luxera-gold text-luxera-navy shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {sector.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ: Ofisler Grid */}
          <div className="w-full lg:w-3/4 xl:w-4/5">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredOffices.map((office, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    key={office.id}
                    onClick={() => setSelectedOffice(office)}
                    className="group relative h-[380px] rounded-3xl overflow-hidden bg-black cursor-pointer border border-white/5 hover:border-luxera-gold/30 transition-colors"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={office.image} 
                        alt={office.name}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                      <div className="flex justify-between items-start">
                        <span className="bg-luxera-gold text-luxera-navy font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                          {office.sector}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-luxera-gold transition-colors duration-300">
                          <Briefcase size={16} className="text-white group-hover:text-luxera-navy transition-colors" />
                        </div>
                      </div>

                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl font-serif text-white mb-2 drop-shadow-lg">
                          {office.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {office.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-300 text-sm bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                            <MapPin size={14} className="text-luxera-gold" />
                            <span>{office.floor}</span>
                          </div>
                          
                          <span className="text-luxera-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold tracking-wide">
                            {t('offices.ui.explore', 'İncele')} &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide-over Detail Panel */}
      <AnimatePresence>
        {selectedOffice && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setSelectedOffice(null)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-luxera-charcoal border-l border-white/10 shadow-2xl z-[110] flex flex-col"
            >
              <div className="h-64 relative shrink-0">
                <img src={selectedOffice.image} alt={selectedOffice.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxera-charcoal to-transparent" />
                <button 
                  onClick={() => setSelectedOffice(null)}
                  className="absolute top-6 left-6 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-luxera-gold hover:text-luxera-navy transition-colors border border-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 flex-grow overflow-y-auto">
                <span className="bg-luxera-gold/10 text-luxera-gold border border-luxera-gold/20 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block mb-6">
                  {selectedOffice.sector}
                </span>

                <h2 className="text-4xl font-serif text-white mb-2">{selectedOffice.name}</h2>
                <div className="flex items-center gap-2 text-gray-400 mb-8">
                  <MapPin size={16} /> <span>{selectedOffice.floor}</span>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-3 text-white mb-2 font-semibold">
                      <Phone size={18} className="text-luxera-gold" /> {t('offices.ui.switchboard', 'Santral')}
                    </div>
                    <p className="text-gray-400 text-sm ml-7">+90 212 000 00 00</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-3 text-white mb-2 font-semibold">
                      <Globe size={18} className="text-luxera-gold" /> {t('offices.ui.website', 'Web Sitesi')}
                    </div>
                    <p className="text-gray-400 text-sm ml-7">www.{selectedOffice.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</p>
                  </div>
                  
                  <div className="pt-8 border-t border-white/10">
                    <h4 className="text-white font-serif text-xl mb-4">{t('offices.ui.companyProfile', 'Şirket Profili')}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {selectedOffice.description} {t('offices.ui.aboutSuffix', "Luxera Towers'ın akıllı bina altyapısı ve prestijli lokasyonu, global vizyona sahip şirketler için ideal bir çalışma ortamı sunuyor. LEED sertifikalı çevre dostu ofis alanlarımız, çalışan verimliliğini maksimuma çıkaracak şekilde tasarlandı.")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-white/10 shrink-0">
                <button className="w-full bg-luxera-gold text-luxera-navy font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                  {t('offices.ui.contact', 'İletişime Geç')} <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Offices;
