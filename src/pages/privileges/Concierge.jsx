import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../shared/utils/animations';
import { Link } from 'react-router-dom';
import { ArrowLeft, PhoneCall, CalendarCheck, Plane, Ticket } from 'lucide-react';
import { privilegeImages } from '../../data/amenities';
import AmenityStrip from '../../shared/ui/AmenityStrip';
import PrivilegeExtras from '../../shared/ui/PrivilegeExtras';

import { useTranslation } from 'react-i18next';

const Concierge = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <Link to="/ayricaliklar" className="inline-flex items-center gap-2 text-luxera-gold hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm">
          <ArrowLeft size={16} /> {t('privileges.back', 'Tüm Ayrıcalıklar')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-luxera-gold"></div>
              <p className="text-luxera-gold uppercase tracking-[0.3em] text-sm font-semibold">{t('privileges.concierge.overline', 'Luxera Privileges')}</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">7/24 <span className="text-luxera-gold italic">Concierge</span></h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('privileges.concierge.desc', 'Zamanınızın ne kadar değerli olduğunu biliyoruz. Luxera Towers\'ta yaşam, size sadece keyif almak kalsın diye tasarlandı. Profesyonel concierge ekibimiz, günün her saati tüm taleplerinizi karşılamak için hazır.')}
            </p>

            <div className="space-y-6">
              {[
                { icon: <Plane size={24} />, title: t('privileges.concierge.f1.title', "Seyahat & Transfer"), desc: t('privileges.concierge.f1.desc', "VIP havalimanı transferleri, özel jet ve helikopter kiralama, otel rezervasyonları.") },
                { icon: <Ticket size={24} />, title: t('privileges.concierge.f2.title', "Etkinlik Yönetimi"), desc: t('privileges.concierge.f2.desc', "Konser, tiyatro ve özel davetler için VIP bilet temini ve loca rezervasyonları.") },
                { icon: <CalendarCheck size={24} />, title: t('privileges.concierge.f3.title', "Özel Asistanlık"), desc: t('privileges.concierge.f3.desc', "Restoran rezervasyonları, çiçek ve hediye gönderimi, kuru temizleme organizasyonu.") },
                { icon: <PhoneCall size={24} />, title: t('privileges.concierge.f4.title', "7/24 İletişim"), desc: t('privileges.concierge.f4.desc', "Tek bir telefonla veya mobil uygulamamız üzerinden anında hizmet.") }
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

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden border border-luxera-gold/20 group"
          >
            <div className="absolute inset-0 bg-luxera-gold/10 group-hover:bg-transparent transition-colors z-10"></div>
            <img
              src={privilegeImages.concierge}
              alt="Luxera Towers Concierge"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>

        <AmenityStrip />
      </div>

      <PrivilegeExtras
        detail={{
          title: t('privileges.concierge.extras.title', 'Kişiye Özel Bir Yaşam Asistanı'),
          image: privilegeImages.lounge || privilegeImages.concierge,
          paragraphs: [
            t('privileges.concierge.extras.p1', 'Concierge ekibimiz, günlük hayatın küçük ama zaman alan detaylarını sizin adınıza üstlenir. Böylece siz yalnızca önemli olana odaklanırsınız.'),
            t('privileges.concierge.extras.p2', 'Bir iş yemeği rezervasyonundan yurt dışı seyahat planlamasına, evinize gelecek özel bir hediyeden son dakika bilet teminine kadar; tek bir talep yeterli.'),
          ],
          bullets: [
            t('privileges.concierge.extras.b1', 'Restoran, otel ve etkinlik rezervasyonları'),
            t('privileges.concierge.extras.b2', 'VIP havalimanı transferi ve seyahat organizasyonu'),
            t('privileges.concierge.extras.b3', 'Kuru temizleme, çiçek ve hediye gönderimi'),
            t('privileges.concierge.extras.b4', 'Mobil uygulama üzerinden 7/24 talep yönetimi'),
          ],
        }}
        stats={[
          { value: 7, suffix: '/24', label: t('privileges.concierge.stats.s1', 'Kesintisiz Erişim') },
          { value: 15, suffix: t('privileges.concierge.stats.min', ' dk'), label: t('privileges.concierge.stats.s2', 'Ortalama Yanıt') },
          { value: 100, suffix: '%', label: t('privileges.concierge.stats.s3', 'Kişiye Özel') },
          { value: 5, suffix: '★', label: t('privileges.concierge.stats.s4', 'Hizmet Standardı') },
        ]}
        cta={{
          title: t('privileges.concierge.cta.title', 'Zamanınızı Geri Kazanın'),
          desc: t('privileges.concierge.cta.desc', 'Concierge ayrıcalığını ve Luxera Towers yaşamını yakından tanımak için bizimle iletişime geçin.'),
          image: privilegeImages.concierge,
        }}
      />
    </div>
  );
};

export default Concierge;
