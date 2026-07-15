import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../shared/utils/animations';
import { Link } from 'react-router-dom';
import { ArrowLeft, Coffee, Wine, Users, Library } from 'lucide-react';
import { privilegeImages } from '../../data/amenities';
import AmenityStrip from '../../shared/ui/AmenityStrip';
import PrivilegeExtras from '../../shared/ui/PrivilegeExtras';

import { useTranslation } from 'react-i18next';

const Lounge = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <Link to="/ayricaliklar" className="inline-flex items-center gap-2 text-luxera-gold hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm">
          <ArrowLeft size={16} /> {t('privileges.back', 'Tüm Ayrıcalıklar')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-luxera-gold"></div>
              <p className="text-luxera-gold uppercase tracking-[0.3em] text-sm font-semibold">{t('privileges.lounge.overline', 'Luxera Privileges')}</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">Executive <span className="text-luxera-gold italic">Lounge</span></h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('privileges.lounge.desc', 'Sosyalleşmenin ve elit bir çevrede vakit geçirmenin en prestijli hali. Sadece rezidans sakinlerimize özel olarak tasarlanan Lounge alanımız, misafirlerinizi ağırlamak veya günün yorgunluğunu atmak için mükemmel bir atmosfer sunuyor.')}
            </p>

            <div className="space-y-6">
              {[
                { icon: <Coffee size={24} />, title: t('privileges.lounge.f1.title', "Cafe & Bar"), desc: t('privileges.lounge.f1.desc', "Usta baristalar tarafından hazırlanan özel kahveler ve gurme atıştırmalıklar.") },
                { icon: <Wine size={24} />, title: t('privileges.lounge.f2.title', "Özel Davet Alanları"), desc: t('privileges.lounge.f2.desc', "Doğum günleri, özel kutlamalar veya iş yemekleri için rezerve edilebilir lüks alanlar.") },
                { icon: <Library size={24} />, title: t('privileges.lounge.f3.title', "Kütüphane & Çalışma"), desc: t('privileges.lounge.f3.desc', "Sessizliği ve konforu arayanlar için yüksek hızlı internetli özel çalışma ve okuma alanları.") },
                { icon: <Users size={24} />, title: t('privileges.lounge.f4.title', "Toplantı Odaları"), desc: t('privileges.lounge.f4.desc', "İş görüşmeleriniz için tam donanımlı, rezervasyonla kullanılabilen VIP toplantı odaları.") }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-luxera-gold/20 transition-all">
                  <div className="text-luxera-gold mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden border border-luxera-gold/20 group"
          >
            <div className="absolute inset-0 bg-luxera-gold/10 group-hover:bg-transparent transition-colors z-10"></div>
            <img
              src={privilegeImages.lounge}
              alt="Luxera Towers Executive Lounge"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>

        <AmenityStrip />
      </div>

      <PrivilegeExtras
        detail={{
          title: t('privileges.lounge.extras.title', 'Evinizin Bir Uzantısı, Sosyal Hayatın Merkezi'),
          image: privilegeImages.lounge,
          paragraphs: [
            t('privileges.lounge.extras.p1', 'Executive Lounge, misafirlerinizi ağırlamak, iş görüşmesi yapmak ya da yalnızca huzurlu bir mola vermek için tasarlanmış, yalnızca sakinlere özel prestijli bir alandır.'),
            t('privileges.lounge.extras.p2', 'Usta baristaların hazırladığı kahveler, sessiz çalışma köşeleri ve rezerve edilebilen özel davet alanlarıyla; sosyal yaşamınız kapınızın hemen ötesinde.'),
          ],
          bullets: [
            t('privileges.lounge.extras.b1', 'Barista servisli cafe & bar'),
            t('privileges.lounge.extras.b2', 'Rezerve edilebilir özel davet alanları'),
            t('privileges.lounge.extras.b3', 'Yüksek hızlı internetli kütüphane ve çalışma köşeleri'),
            t('privileges.lounge.extras.b4', 'Tam donanımlı VIP toplantı odaları'),
          ],
        }}
        stats={[
          { value: 5, suffix: '★', label: t('privileges.lounge.stats.s1', 'Prestijli Atmosfer') },
          { value: 7, suffix: '/24', label: t('privileges.lounge.stats.s2', 'Sakinlere Özel') },
          { value: 3, suffix: '+', label: t('privileges.lounge.stats.s3', 'Toplantı Odası') },
          { value: 100, suffix: '%', label: t('privileges.lounge.stats.s4', 'Rezervasyonlu Kullanım') },
        ]}
        cta={{
          title: t('privileges.lounge.cta.title', 'Sosyalleşmenin Ayrıcalıklı Hali'),
          desc: t('privileges.lounge.cta.desc', 'Executive Lounge ayrıcalığını ve Luxera Towers yaşamını yakından tanımak için bizimle iletişime geçin.'),
          image: privilegeImages.lounge,
        }}
      />
    </div>
  );
};

export default Lounge;
