import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, ExternalLink, Bell, CreditCard, Wrench, Users, Calendar, Phone, Mail, User, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { boardMembers } from '../data/brands';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import SEO from '../shared/seo/SEO';

const ResidentPortal = () => {
  const { t } = useTranslation();

  const residentServices = [
    { id: 1, title: 'Finans & Aidat Yönetimi', icon: <CreditCard size={24} />, img: '/images/interior/d5_scene5_20240304_220944copy_2025-12-18_03-47-03_7b5b78.webp', path: '/portal/finans' },
    { id: 2, title: 'Konsiyerj & Teknik Destek', icon: <Wrench size={24} />, img: '/images/exterior/4_2025-12-18_02-46-35_361a6b.webp', path: '/portal/destek' },
    { id: 3, title: 'Misafir & Vale Yönetimi', icon: <Users size={24} />, img: '/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp', path: '/portal/misafir' },
    { id: 4, title: 'Sosyal Yaşam & SPA', icon: <Calendar size={24} />, img: '/images/amenities/d5_scene20_20240303_013151copy_2025-12-18_03-46-29_42c7ac.webp', path: '/portal/tesisler' }
  ];

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO 
        title={t('portal.seo.title', 'Sakinler Portalı')}
        description={t('portal.seo.desc', 'Luxera Towers sakinlerine özel dijital yönetim sistemi, duyurular ve site içi hizmetler.')}
        canonical="https://luxeratowers.com/sakinler-portali"
      />
      <PageHero
        overline={t('portal.hero.overline', 'Özel Dijital Asistan')}
        title={t('portal.hero.title', 'Sakinler')}
        highlight={t('portal.hero.highlight', 'Portalı')}
        subtitle={t('portal.hero.subtitle', 'Rezidans yaşamınızı kolaylaştıran dijital yönetim sistemi ile tüm işlemleriniz parmaklarınızın ucunda.')}
        backgroundImage="/images/exterior/14_2025-12-18_02-46-35_78c2e7.webp"
      />

      {/* Marquee (Kayan Yazi) - Duyurular */}
      <div className="w-full bg-luxera-gold text-luxera-navy py-3 overflow-hidden flex whitespace-nowrap border-y border-white/20 shadow-2xl relative z-20">
        <div className="animate-marquee flex items-center gap-12 font-semibold tracking-wide text-sm">
          <span className="flex items-center gap-2"><Bell size={16} /> YENİ METRO İSTASYONU 1 DAKİKA MESAFEDE AÇILIYOR!</span>
          <span>•</span>
          <span className="flex items-center gap-2"><Bell size={16} /> 05-08 ARALIK KAPALI HAVUZ PERİYODİK KIŞ BAKIMI.</span>
          <span>•</span>
          <span className="flex items-center gap-2"><Bell size={16} /> 25 ARALIK LOBİ LOUNGE'DA YENİ YIL CAZ DİNLETİSİ.</span>
          <span>•</span>
          <span className="flex items-center gap-2"><Bell size={16} /> YENİ METRO İSTASYONU 1 DAKİKA MESAFEDE AÇILIYOR!</span>
          <span>•</span>
          <span className="flex items-center gap-2"><Bell size={16} /> 05-08 ARALIK KAPALI HAVUZ PERİYODİK KIŞ BAKIMI.</span>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 mt-24">
        
        {/* APSIYON GLASMORPHISM KARTI */}
        <div className="relative rounded-3xl overflow-hidden mb-32 group">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp" 
              alt="Lobby" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxera-navy/95 via-luxera-navy/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxera-gold/20 border border-luxera-gold/30 text-luxera-gold text-xs uppercase tracking-widest font-bold mb-8 backdrop-blur-md">
                <ShieldCheck size={16} /> Apsiyon Dijital Yönetim Sistemi
              </div>
              <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white leading-tight">
                Rezidans Yönetimi <br/>
                <span className="text-luxera-gold font-sans font-light italic">Cebinizde.</span>
              </h2>
              <p className="text-gray-300 mb-10 text-lg font-light leading-relaxed max-w-xl">
                Aidat ödemelerinizi güvenle yapın, anlık bakiye durumunuzu kontrol edin, teknik servis taleplerinizi saniyeler içinde iletin ve lüks SPA/Havuz alanlarımız için anında rezervasyon oluşturun.
              </p>
              
              <a 
                href="https://www.apsiyon.com/giris" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-luxera-gold text-luxera-navy px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105"
              >
                <Lock size={18} />
                Sisteme Giriş Yap
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Quick Stats / Info Widget */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl flex items-center gap-4 w-72 transform translate-x-8">
                <div className="w-12 h-12 rounded-full bg-luxera-gold/20 flex items-center justify-center text-luxera-gold"><CreditCard /></div>
                <div>
                  <div className="text-white font-bold">Tek Tıkla Ödeme</div>
                  <div className="text-gray-400 text-xs">3D Secure Güvencesiyle</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl flex items-center gap-4 w-72">
                <div className="w-12 h-12 rounded-full bg-luxera-gold/20 flex items-center justify-center text-luxera-gold"><Wrench /></div>
                <div>
                  <div className="text-white font-bold">7/24 Teknik Servis</div>
                  <div className="text-gray-400 text-xs">Anında Müdahale Ekibi</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl flex items-center gap-4 w-72 transform -translate-x-8">
                <div className="w-12 h-12 rounded-full bg-luxera-gold/20 flex items-center justify-center text-luxera-gold"><Calendar /></div>
                <div>
                  <div className="text-white font-bold">Tesis Rezervasyonu</div>
                  <div className="text-gray-400 text-xs">SPA & Kapalı Havuz</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SITE ICI HIZMETLER VE AYRICALIKLAR */}
        <div className="mb-32">
          <SectionHeader 
            title={t('portal.services.title', 'Site İçi Hizmetler')}
            subtitle={t('portal.services.subtitle', 'Yaşamınızı kolaylaştırmak için sunulan ayrıcalıklı dijital hizmetler.')}
            watermark="HİZMET"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {residentServices.map((service) => (
              <Link to={service.path} key={service.id}>
                <motion.div
                  variants={fadeUp}
                  className="group relative h-[300px] rounded-3xl overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={service.img} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <div className="w-14 h-14 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-luxera-gold mb-6 border border-white/20 group-hover:bg-luxera-gold group-hover:text-luxera-navy transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>


        {/* YÖNETİM KURULU (3D FLIP CARDS) */}
        <SectionHeader 
          title={t('portal.board.title', 'Yönetim Kurulu')}
          subtitle={t('portal.board.subtitle', 'Luxera Towers yaşam standartlarını zirvede tutmak için çalışan profesyonel yönetim kadromuz.')}
          watermark="BOARD"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {boardMembers.map((member) => (
            <motion.div
              variants={fadeUp}
              key={member.id}
              className="group relative h-[320px] rounded-2xl perspective-1000"
            >
              <div className="w-full h-full absolute preserve-3d group-hover:rotate-y-180 transition-transform duration-700 ease-in-out">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-sm">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxera-gold/20 to-transparent rounded-full flex items-center justify-center border border-luxera-gold/30 mb-6">
                    <User size={32} className="text-luxera-gold" />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">{member.name}</h3>
                  <p className="text-luxera-gold text-xs tracking-widest uppercase font-medium line-clamp-2">{member.role}</p>
                </div>
                
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-luxera-gold rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-12 h-12 bg-luxera-navy/10 rounded-full flex items-center justify-center mb-4">
                    <Info size={24} className="text-luxera-navy" />
                  </div>
                  <h3 className="text-lg font-bold text-luxera-navy mb-2">{member.name}</h3>
                  <p className="text-luxera-navy/80 text-sm mb-6 line-clamp-3">
                    Luxera Towers projelerinin vizyoner süreçlerini yöneten deneyimli profesyonel.
                  </p>
                  <div className="flex justify-center gap-4 text-luxera-navy">
                    <a href="mailto:yonetim@luxeratowers.com" className="hover:scale-110 transition-transform bg-white/30 p-2 rounded-full"><Mail size={16} /></a>
                    <a href="tel:+902120000000" className="hover:scale-110 transition-transform bg-white/30 p-2 rounded-full"><Phone size={16} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ResidentPortal;
