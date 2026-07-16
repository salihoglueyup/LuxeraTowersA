import React from 'react';
import { motion } from 'framer-motion';
import { Users, Car, MapPin, Key, ExternalLink } from 'lucide-react';
import PageHero from '../../shared/ui/PageHero';
import SectionHeader from '../../shared/ui/SectionHeader';
import SEO from '../../shared/seo/SEO';

const Guest = () => {
  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO 
        title="Misafir & Vale Yönetimi | Luxera Towers"
        description="Luxera Towers dijital misafir karşılama ve vale araç çağırma sistemi."
      />
      
      <PageHero
        overline="Ayrıcalıklı Karşılama"
        title="Misafir &"
        highlight="Vale"
        subtitle="Ziyaretçileriniz için QR kodlu hızlı geçiş, aracınız için tek tıkla vale hizmeti."
        backgroundImage="/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp"
      />

      <div className="max-w-[90rem] mx-auto px-6 mt-24">
        <SectionHeader 
          title="Ziyaretçi ve Araç Yönetimi"
          subtitle="Misafirleriniz lobiye gelmeden önce güvenlik onayı verebilir, çıkış saatinizde aracınızı hazır edebilirsiniz."
          watermark="GUEST"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Users size={100} className="text-luxera-gold" /></div>
            <div className="w-16 h-16 bg-luxera-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <Key className="text-luxera-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Dijital Misafir Kartı</h3>
            <p className="text-gray-400">
              Gelecek misafirleriniz için portal üzerinden ön kayıt oluşturarak QR geçiş kodu tanımlayın. Lobi beklemelerini sıfıra indirin ve güvenlik prosedürlerini hızlandırın.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Car size={100} className="text-luxera-gold" /></div>
            <div className="w-16 h-16 bg-luxera-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <MapPin className="text-luxera-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Vale Otomasyonu</h3>
            <p className="text-gray-400">
              Dairenizden çıkmadan 5 dakika önce vale butonuna basın, aracınız iklimlendirilmiş olarak çıkış kapısında sizi beklesin. Kışın sıcak, yazın serin.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="bg-luxera-gold rounded-3xl p-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif text-luxera-navy mb-4">Sisteme Bağlan</h2>
          <p className="text-luxera-navy/80 mb-8 max-w-2xl">
            Ziyaretçi kabullerini ve vale taleplerinizi doğrudan Apsiyon portalı üzerinden yönetebilirsiniz.
          </p>
          <a 
            href="https://www.apsiyon.com/giris" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-luxera-navy text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:scale-105"
          >
            Apsiyon'a Giriş Yap <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Guest;
