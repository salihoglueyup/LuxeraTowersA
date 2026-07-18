import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../shared/utils/animations';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Video, Fingerprint, Lock, HardHat, Smartphone, Key } from 'lucide-react';
import { privilegeImages } from '../../data/amenities';
import PrivilegeExtras from '../../shared/ui/PrivilegeExtras';

import { useTranslation } from 'react-i18next';

const Security = () => {
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
              <p className="text-luxera-gold uppercase tracking-[0.3em] text-sm font-semibold">{t('privileges.security.overline', 'Luxera Privileges')}</p>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">{t('privileges.security.title_prefix', 'Özel')} <span className="text-luxera-gold italic">{t('privileges.security.title_highlight', 'Güvenlik')}</span></h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('privileges.security.desc', 'Sizin ve sevdiklerinizin huzuru bizim için her şeyden önemli. Luxera Towers\'ta, en ileri güvenlik teknolojileri ve alanında uzman profesyonellerle donatılmış, 7/24 kesintisiz bir güvenlik kalkanı sunuyoruz.')}
            </p>

            <div className="space-y-6">
              {[
                { icon: <Video size={24} />, title: t('privileges.security.f1.title', "Kapalı Devre Kamera Sistemi"), desc: t('privileges.security.f1.desc', "Ortak alanlarda yüksek çözünürlüklü ve kör nokta bırakmayan CCTV izleme ağı.") },
                { icon: <Fingerprint size={24} />, title: t('privileges.security.f2.title', "Biyometrik Geçişler"), desc: t('privileges.security.f2.desc', "Rezidans alanlarına ve sosyal tesislere parmak izi ve yüz tanıma sistemli giriş.") },
                { icon: <Shield size={24} />, title: t('privileges.security.f3.title', "Profesyonel Güvenlik Ekibi"), desc: t('privileges.security.f3.desc', "7/24 devriye gezen ve anında müdahaleye hazır eğitimli güvenlik personeli.") },
                { icon: <Lock size={24} />, title: t('privileges.security.f4.title', "Akıllı Ev Güvenliği"), desc: t('privileges.security.f4.desc', "Dairenizdeki akıllı ev sistemine entegre hırsız ve yangın alarm sistemleri.") }
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
              src={privilegeImages.security}
              alt="Luxera Towers Güvenlik"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>

        {/* Yapısal Güvenlik & Akıllı Bina */}
        <div className="grid md:grid-cols-2 gap-12 mt-24 pt-16 border-t border-white/10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-serif text-luxera-gold mb-8">{t('privileges.security.structural.title', 'Yapısal Güvenlik')}</h3>
            <div className="flex gap-6 mb-8">
              <div className="bg-luxera-charcoal p-4 rounded-full h-fit border border-luxera-gold/20 shrink-0">
                <HardHat className="text-luxera-gold" size={28} />
              </div>
              <div>
                <h4 className="text-xl text-white font-serif mb-2">{t('privileges.security.structural.s1.title', 'Deprem Güvenliği')}</h4>
                <p className="text-gray-400 leading-relaxed">{t('privileges.security.structural.s1.desc', 'En son deprem yönetmeliğine tam uyumlu; fore kazık ve radye temel sistemi ile güçlendirilmiş, yüksek mühendislik standartlarında inşa edilmiştir.')}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-luxera-charcoal p-4 rounded-full h-fit border border-luxera-gold/20 shrink-0">
                <Shield className="text-luxera-gold" size={28} />
              </div>
              <div>
                <h4 className="text-xl text-white font-serif mb-2">{t('privileges.security.structural.s2.title', 'Yangın & Kaçak Koruması')}</h4>
                <p className="text-gray-400 leading-relaxed">{t('privileges.security.structural.s2.desc', 'Su ve gaz kaçağı dedektörleri, otomatik yangın söndürme ve duman tahliye sistemleri ile tam koruma.')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
            <h3 className="text-3xl font-serif text-luxera-gold mb-8">{t('privileges.security.smart.title', 'Akıllı Bina Sistemleri')}</h3>
            <div className="bg-luxera-charcoal p-8 border border-white/10 rounded-2xl relative overflow-hidden group hover:border-luxera-gold/40 transition-colors">
              <Smartphone className="text-luxera-gold mb-6" size={40} />
              <h4 className="text-2xl text-white font-serif mb-4">{t('privileges.security.smart.s1.title', 'Ev Otomasyon Sistemi')}</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('privileges.security.smart.s1.desc', 'İklimlendirme, aydınlatma, güvenlik ve perde sistemlerinizi tek bir panelden ya da dünyanın neresinde olursanız olun akıllı telefonunuzdan yönetin.')}
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><Key size={16} className="text-luxera-gold" /> {t('privileges.security.smart.s1.b1', 'Akıllı Kilit ve Şifreli Giriş')}</li>
                <li className="flex items-center gap-2"><Key size={16} className="text-luxera-gold" /> {t('privileges.security.smart.s1.b2', 'Su ve Gaz Kaçağı Dedektörleri')}</li>
                <li className="flex items-center gap-2"><Key size={16} className="text-luxera-gold" /> {t('privileges.security.smart.s1.b3', 'Akıllı İklimlendirme (VRF)')}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <PrivilegeExtras
        stats={[
          { value: 7, suffix: '/24', label: t('privileges.security.stats.s1', 'Kesintisiz Güvenlik') },
          { value: 100, suffix: '%', label: t('privileges.security.stats.s2', 'Kamera Kapsama') },
          { value: 0, suffix: '', label: t('privileges.security.stats.s3', 'Kör Nokta') },
          { value: 5, suffix: '★', label: t('privileges.security.stats.s4', 'Güvenlik Standardı') },
        ]}
        cta={{
          title: t('privileges.security.cta.title', 'Huzurunuz Güvence Altında'),
          desc: t('privileges.security.cta.desc', 'Luxera Towers’ın çok katmanlı güvenlik altyapısını ve akıllı bina sistemlerini yakından tanımak için bizimle iletişime geçin.'),
          image: privilegeImages.security,
        }}
      />
    </div>
  );
};

export default Security;
