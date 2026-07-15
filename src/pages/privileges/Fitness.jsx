import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../shared/utils/animations';
import { Link } from 'react-router-dom';
import { ArrowLeft, Activity, Heart, Droplets, UserCheck } from 'lucide-react';
import { privilegeImages } from '../../data/amenities';
import AmenityStrip from '../../shared/ui/AmenityStrip';
import PrivilegeExtras from '../../shared/ui/PrivilegeExtras';

import { useTranslation } from 'react-i18next';

const Fitness = () => {
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
              <p className="text-luxera-gold uppercase tracking-[0.3em] text-sm font-semibold">{t('privileges.fitness.overline', 'Luxera Privileges')}</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">Fitness & <span className="text-luxera-gold italic">SPA</span></h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('privileges.fitness.desc', 'Bedeninize ve ruhunuza hak ettiği özeni gösterin. Şehrin merkezinde ama stresinden çok uzakta; son teknoloji ekipmanlarla donatılmış spor salonumuz ve arınmanızı sağlayacak lüks SPA merkezimiz sizi bekliyor.')}
            </p>

            <div className="space-y-6">
              {[
                { icon: <Activity size={24} />, title: t('privileges.fitness.f1.title', "Tam Donanımlı Gym"), desc: t('privileges.fitness.f1.desc', "Technogym'in en yeni nesil kardiyo ve ağırlık istasyonları.") },
                { icon: <Droplets size={24} />, title: t('privileges.fitness.f2.title', "Kapalı Yüzme Havuzu"), desc: t('privileges.fitness.f2.desc', "Dört mevsim kullanıma uygun, ısıtmalı ve ferah kapalı yüzme havuzu.") },
                { icon: <Heart size={24} />, title: t('privileges.fitness.f3.title', "Premium SPA Merkezi"), desc: t('privileges.fitness.f3.desc', "Türk hamamı, sauna, buhar odası ve kişiye özel masaj terapileri.") },
                { icon: <UserCheck size={24} />, title: t('privileges.fitness.f4.title', "Özel Eğitmen Desteği"), desc: t('privileges.fitness.f4.desc', "Birebir (Personal Trainer) fitness danışmanlığı ve pilates stüdyoları.") }
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
              src={privilegeImages.fitness}
              alt="Luxera Towers Fitness & SPA"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>

        <AmenityStrip />
      </div>

      <PrivilegeExtras
        detail={{
          title: t('privileges.fitness.extras.title', 'Bedeniniz ve Ruhunuz İçin Bir Vaha'),
          image: privilegeImages.fitness,
          paragraphs: [
            t('privileges.fitness.extras.p1', 'Güne enerjik başlamak ya da günün yorgunluğunu atmak; ihtiyacınız ne olursa olsun, aradığınız her şey evinizin birkaç kat altında.'),
            t('privileges.fitness.extras.p2', 'Isıtmalı kapalı yüzme havuzu, Türk hamamı, sauna ve buhar odasının ardından; kişiye özel masaj terapileriyle tam bir arınma deneyimi yaşayın.'),
          ],
          bullets: [
            t('privileges.fitness.extras.b1', 'Yeni nesil kardiyo ve ağırlık istasyonları'),
            t('privileges.fitness.extras.b2', 'Dört mevsim kullanılabilen ısıtmalı kapalı havuz'),
            t('privileges.fitness.extras.b3', 'Türk hamamı, sauna ve buhar odası'),
            t('privileges.fitness.extras.b4', 'Birebir personal trainer ve pilates stüdyosu'),
          ],
        }}
        stats={[
          { value: 1200, suffix: t('privileges.fitness.stats.m2', ' m²'), label: t('privileges.fitness.stats.s1', 'Wellness Alanı') },
          { value: 7, suffix: '/24', label: t('privileges.fitness.stats.s2', 'Fitness Erişimi') },
          { value: 4, suffix: '', label: t('privileges.fitness.stats.s3', 'Mevsim Havuz') },
          { value: 5, suffix: '★', label: t('privileges.fitness.stats.s4', 'SPA Standardı') },
        ]}
        cta={{
          title: t('privileges.fitness.cta.title', 'Sağlıklı Yaşam Kapınızın Altında'),
          desc: t('privileges.fitness.cta.desc', 'Fitness & SPA ayrıcalığını ve Luxera Towers yaşamını yerinde deneyimlemek için randevu alın.'),
          image: privilegeImages.fitness,
        }}
      />
    </div>
  );
};

export default Fitness;
