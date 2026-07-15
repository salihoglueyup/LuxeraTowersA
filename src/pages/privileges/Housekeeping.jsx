import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../shared/utils/animations';
import { Link } from 'react-router-dom';
import { ArrowLeft, SprayCan, Sparkles, Shirt, Flower2 } from 'lucide-react';
import { privilegeImages } from '../../data/amenities';
import AmenityStrip from '../../shared/ui/AmenityStrip';
import PrivilegeExtras from '../../shared/ui/PrivilegeExtras';

import { useTranslation } from 'react-i18next';

const Housekeeping = () => {
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
              <p className="text-luxera-gold uppercase tracking-[0.3em] text-sm font-semibold">{t('privileges.housekeeping.overline', 'Luxera Privileges')}</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">Premium <span className="text-luxera-gold italic">Housekeeping</span></h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('privileges.housekeeping.desc', 'Evinizin kusursuzluğu, lüks yaşamın en önemli detayıdır. Rezidans konforunu 5 yıldızlı otel standartlarında bir temizlik ve bakım hizmetiyle taçlandırıyor, yaşam alanlarınızı her zaman tertemiz tutuyoruz.')}
            </p>

            <div className="space-y-6">
              {[
                { icon: <Sparkles size={24} />, title: t('privileges.housekeeping.f1.title', "Günlük / Haftalık Temizlik"), desc: t('privileges.housekeeping.f1.desc', "Talebinize göre planlanan detaylı genel ev temizliği ve düzenlemesi.") },
                { icon: <Shirt size={24} />, title: t('privileges.housekeeping.f2.title', "Kuru Temizleme & Ütü"), desc: t('privileges.housekeeping.f2.desc', "Giysileriniz ve ev tekstili ürünleriniz için kapıdan kapıya kuru temizleme hizmeti.") },
                { icon: <SprayCan size={24} />, title: t('privileges.housekeeping.f3.title', "Derinlemesine Hijyen"), desc: t('privileges.housekeeping.f3.desc', "Periyodik olarak uygulanan dezenfeksiyon, koltuk yıkama ve halı bakımı.") },
                { icon: <Flower2 size={24} />, title: t('privileges.housekeeping.f4.title', "Bitki ve Teras Bakımı"), desc: t('privileges.housekeeping.f4.desc', "Terasınızın, kış bahçenizin ve salon bitkilerinizin profesyonel bakımı.") }
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
              src={privilegeImages.housekeeping}
              alt="Luxera Towers Housekeeping"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>

        <AmenityStrip />
      </div>

      <PrivilegeExtras
        detail={{
          title: t('privileges.housekeeping.extras.title', 'Her Zaman Misafir Ağırlamaya Hazır Bir Ev'),
          image: privilegeImages.housekeeping,
          paragraphs: [
            t('privileges.housekeeping.extras.p1', 'Evinizin düzeni ve hijyeni, lüks yaşamın en sessiz ama en belirleyici detayıdır. Housekeeping ekibimiz, yaşam alanlarınızı 5 yıldızlı otel titizliğinde tutar.'),
            t('privileges.housekeeping.extras.p2', 'Günlük temizlikten kuru temizlemeye, teras bitki bakımından derinlemesine hijyene kadar; siz sadece keyfini çıkarın, gerisini bize bırakın.'),
          ],
          bullets: [
            t('privileges.housekeeping.extras.b1', 'Günlük veya haftalık planlı genel temizlik'),
            t('privileges.housekeeping.extras.b2', 'Kapıdan kapıya kuru temizleme ve ütü'),
            t('privileges.housekeeping.extras.b3', 'Periyodik dezenfeksiyon, koltuk ve halı bakımı'),
            t('privileges.housekeeping.extras.b4', 'Teras, kış bahçesi ve salon bitkilerinin bakımı'),
          ],
        }}
        stats={[
          { value: 5, suffix: '★', label: t('privileges.housekeeping.stats.s1', 'Otel Standardı') },
          { value: 7, suffix: '/24', label: t('privileges.housekeeping.stats.s2', 'Talep Yönetimi') },
          { value: 100, suffix: '%', label: t('privileges.housekeeping.stats.s3', 'Kişiye Özel Plan') },
          { value: 30, suffix: '+', label: t('privileges.housekeeping.stats.s4', 'Hizmet Kalemi') },
        ]}
        cta={{
          title: t('privileges.housekeeping.cta.title', 'Kusursuz Bir Yaşam Alanı'),
          desc: t('privileges.housekeeping.cta.desc', 'Housekeeping ayrıcalığını ve Luxera Towers konforunu yakından tanımak için bizimle iletişime geçin.'),
          image: privilegeImages.housekeeping,
        }}
      />
    </div>
  );
};

export default Housekeeping;
