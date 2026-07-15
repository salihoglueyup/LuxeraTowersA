import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../shared/utils/animations';
import { Link } from 'react-router-dom';
import { ArrowLeft, Car, MapPin, Zap, Clock } from 'lucide-react';
import { privilegeImages } from '../../data/amenities';
import AmenityStrip from '../../shared/ui/AmenityStrip';
import PrivilegeExtras from '../../shared/ui/PrivilegeExtras';

import { useTranslation } from 'react-i18next';

const Valet = () => {
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
              <p className="text-luxera-gold uppercase tracking-[0.3em] text-sm font-semibold">{t('privileges.valet.overline', 'Luxera Privileges')}</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">Vale & <span className="text-luxera-gold italic">Otopark</span></h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('privileges.valet.desc', 'Aracınız için zaman harcamanıza gerek yok. Misafirlerinizi ve sizi, rezidans girişinde profesyonel vale ekibimiz karşılıyor. Siz lüks evinize çıkarken, aracınız güvenli otoparkımızda özenle muhafaza ediliyor.')}
            </p>

            <div className="space-y-6">
              {[
                { icon: <Clock size={24} />, title: t('privileges.valet.f1.title', "Anında Hazır"), desc: t('privileges.valet.f1.desc', "Mobil uygulama üzerinden aracınızı çağırın, siz inmeden aracınız kapıda hazır olsun.") },
                { icon: <Car size={24} />, title: t('privileges.valet.f2.title', "Özel Kapalı Otopark"), desc: t('privileges.valet.f2.desc', "Rezidans sakinlerine özel, plaka tanıma sistemli 4 katlı kapalı otopark.") },
                { icon: <Zap size={24} />, title: t('privileges.valet.f3.title', "Elektrikli Araç Şarjı"), desc: t('privileges.valet.f3.desc', "Otopark katlarımızda elektrikli araçlar için özel hızlı şarj istasyonları.") },
                { icon: <MapPin size={24} />, title: t('privileges.valet.f4.title', "Misafir Valesi"), desc: t('privileges.valet.f4.desc', "Konuklarınız için ayrılmış özel misafir otoparkı ve hızlı vale hizmeti.") }
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
              src={privilegeImages.valet}
              alt="Luxera Towers Vale & Otopark"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>

        <AmenityStrip />
      </div>

      <PrivilegeExtras
        detail={{
          title: t('privileges.valet.extras.title', 'Aracınız İçin Sıfır Zaman Kaybı'),
          image: privilegeImages.valet,
          paragraphs: [
            t('privileges.valet.extras.p1', 'Rezidans girişinde sizi karşılayan profesyonel vale ekibimiz, aracınızı güvenli otoparkımıza özenle yerleştirir. Siz evinize çıkarken tek bir işlemle daha uğraşmazsınız.'),
            t('privileges.valet.extras.p2', 'Çıkışta ise mobil uygulamadan aracınızı çağırmanız yeterli; siz aşağı indiğinizde aracınız kapıda hazır olur.'),
          ],
          bullets: [
            t('privileges.valet.extras.b1', 'Plaka tanıma sistemli 4 katlı kapalı otopark'),
            t('privileges.valet.extras.b2', 'Mobil uygulamadan araç çağırma'),
            t('privileges.valet.extras.b3', 'Her katta hızlı elektrikli araç şarj istasyonu'),
            t('privileges.valet.extras.b4', 'Misafirleriniz için özel vale ve otopark'),
          ],
        }}
        stats={[
          { value: 7, suffix: '/24', label: t('privileges.valet.stats.s1', 'Vale Hizmeti') },
          { value: 4, suffix: '', label: t('privileges.valet.stats.s2', 'Katlı Otopark') },
          { value: 100, suffix: '%', label: t('privileges.valet.stats.s3', 'Kapalı & Güvenli') },
          { value: 2, suffix: t('privileges.valet.stats.min', ' dk'), label: t('privileges.valet.stats.s4', 'Araç Teslim') },
        ]}
        cta={{
          title: t('privileges.valet.cta.title', 'Konforun Anahtarını Teslim Edin'),
          desc: t('privileges.valet.cta.desc', 'Vale ve otopark ayrıcalığını ve Luxera Towers yaşamını yakından tanımak için bizimle iletişime geçin.'),
          image: privilegeImages.valet,
        }}
      />
    </div>
  );
};

export default Valet;
