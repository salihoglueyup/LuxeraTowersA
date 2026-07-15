import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../shared/ui/SectionHeader';

const UNIT_TYPES = {
  '1+1': {
    title: '1+1 Rezidans',
    net: '55-65', gross: '75-85',
    features: ['Akıllı Ev Sistemi', 'Yerden Isıtma', 'VRF Klima', 'Isıcam', 'Ankastre Mutfak'],
    img: '/images/interior/4_2025-12-18_02-42-20_d1aa12.webp',
    planImg: '/images/floor-plans/plan.webp'
  },
  '2+1': {
    title: '2+1 Rezidans',
    net: '85-105', gross: '110-135',
    features: ['Ebeveyn Banyosu', 'Geniş Balkon', 'Akıllı Ev Sistemi', 'Giyinme Odası', '2 Araçlık Otopark'],
    img: '/images/interior/6_2025-12-18_02-42-20_29be56.webp',
    planImg: '/images/floor-plans/plan.webp'
  },
  '3+1': {
    title: '3+1 Aile Rezidansı',
    net: '125-145', gross: '160-185',
    features: ['Geniş Teras', 'Panoramik Manzara', 'Çamaşır Odası', 'Ebeveyn Süiti', 'Ada Mutfak'],
    img: '/images/interior/d5_scene101_20240303_153337copy_2025-12-18_03-46-55_6f850e.webp',
    planImg: '/images/floor-plans/plan.webp'
  },
  '4+1': {
    title: '4+1 Penthouse / Premium',
    net: '185-225', gross: '240-298',
    features: ['Özel Gökyüzü Bahçesi', 'Hizmetli Odası', 'Sauna', 'Özel Asansör', '4 Araçlık Otopark'],
    img: '/images/interior/2_2025-12-18_02-42-20_d8b016.webp',
    planImg: '/images/floor-plans/plan.webp'
  }
};

const UnitTypes = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('1+1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const unit = UNIT_TYPES[activeTab];

  return (
    <section id="daireler" className="py-24 bg-luxera-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Ayrıcalıklı Yaşam Alanları" subtitle="Her detayı özenle tasarlanmış, ferah ve lüks yaşam seçenekleri." />
        
        <div className="flex justify-center mb-12 space-x-2 md:space-x-4 overflow-x-auto">
          {Object.keys(UNIT_TYPES).map(key => (
            <button 
              key={key} 
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-sm uppercase tracking-widest text-sm transition-all whitespace-nowrap ${
                activeTab === key ? 'bg-luxera-gold text-white' : 'border border-gray-600 text-gray-400 hover:border-luxera-gold hover:text-luxera-gold'
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 bg-luxera-charcoal p-8 md:p-12 rounded-sm border border-gray-800"
        >
          <div className="relative group overflow-hidden cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <img src={unit.img} alt={unit.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white uppercase tracking-widest border border-white px-6 py-2">{t('unitTypes.viewPlan', 'Planı Görüntüle')}</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 flex justify-between items-center border border-white/10">
              <div>
                <p className="text-luxera-gold text-sm uppercase tracking-wider mb-1">{t('unitTypes.grossNet', 'Brüt / Net Alan')}</p>
                <p className="text-white font-serif">{unit.gross} m² / {unit.net} m²</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-serif text-luxera-gold mb-6">{t(`unitTypes.${activeTab}.title`, unit.title)}</h3>
            <ul className="space-y-4 mb-10">
              {unit.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-luxera-gold rounded-full mr-4"></span>
                  {t(`unitTypes.${activeTab}.feature${idx}`, feature)}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button onClick={() => setIsModalOpen(true)} className="w-full border border-luxera-gold text-luxera-gold py-4 uppercase tracking-widest hover:bg-luxera-gold hover:text-white transition-colors">
                {t('unitTypes.reviewDetail', 'Detaylı Planı İncele')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-6 right-6 text-white hover:text-luxera-gold transition-colors"
            >
              <X size={40} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-luxera-charcoal w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg border border-luxera-gold/30 grid md:grid-cols-2 shadow-2xl"
            >
              <div className="p-8 flex items-center justify-center bg-white/5">
                <img src={unit.planImg} alt="Kat Planı" className="max-w-full max-h-[60vh] object-contain drop-shadow-2xl" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-serif text-luxera-gold mb-4">{t(`unitTypes.${activeTab}.title`, unit.title)}</h2>
                <div className="flex gap-8 mb-8 border-b border-gray-700 pb-8">
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">{t('unitTypes.gross', 'Brüt Alan')}</p>
                    <p className="text-2xl text-white font-light">{unit.gross} m²</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">{t('unitTypes.net', 'Net Alan')}</p>
                    <p className="text-2xl text-white font-light">{unit.net} m²</p>
                  </div>
                </div>
                <h4 className="text-white uppercase tracking-widest mb-6">{t('unitTypes.highlights', 'Öne Çıkan Özellikler')}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {unit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300 bg-black/20 p-3 rounded-md border border-white/5">
                      <span className="w-1.5 h-1.5 bg-luxera-gold rounded-full mr-3 shrink-0"></span>
                      <span className="text-sm">{t(`unitTypes.${activeTab}.feature${idx}`, feature)}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-10 flex items-center justify-center gap-3 bg-luxera-gold text-white py-4 hover:bg-luxera-goldDark transition-colors">
                  <Download size={20} /> {t('unitTypes.downloadPDF', 'Kat Planını İndir (PDF)')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default UnitTypes;
