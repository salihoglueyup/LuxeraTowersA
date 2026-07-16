import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, PhoneCall, Clock, CheckCircle, ExternalLink, Zap } from 'lucide-react';
import PageHero from '../../shared/ui/PageHero';
import SectionHeader from '../../shared/ui/SectionHeader';
import SEO from '../../shared/seo/SEO';

const Support = () => {
  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO 
        title="Konsiyerj & Teknik Destek | Luxera Towers"
        description="Luxera Towers sakinlerine özel 7/24 teknik servis ve konsiyerj hizmetleri."
      />
      
      <PageHero
        overline="Premium Destek"
        title="Konsiyerj &"
        highlight="Teknik"
        subtitle="Yaşam alanınızdaki her türlü ihtiyacınız için 7/24 hazır profesyonel destek ekibi."
        backgroundImage="/images/exterior/4_2025-12-18_02-46-35_361a6b.webp"
      />

      <div className="max-w-[90rem] mx-auto px-6 mt-24">
        <SectionHeader 
          title="Ayrıcalıklı Hizmet"
          subtitle="Teknik bir arıza mı var? Yoksa kuru temizleme talebiniz mi? Ekibimiz bir tık uzağınızda."
          watermark="SUPPORT"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-24">
          {/* Teknik Servis Kartı */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Wrench size={120} className="text-luxera-gold" /></div>
            <div className="w-20 h-20 bg-luxera-gold/10 rounded-3xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <Zap className="text-luxera-gold" size={40} />
            </div>
            <h3 className="text-3xl font-serif mb-4">Anında Teknik Servis</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Elektrik, tesisat, iklimlendirme veya akıllı ev sistemlerindeki herhangi bir arıza durumunda, dijital portal üzerinden fotoğraf ekleyerek talebinizi saniyeler içinde oluşturun.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-luxera-gold" /> Anlık durum takibi</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-luxera-gold" /> Geri bildirim ve puanlama</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-luxera-gold" /> Geçmiş taleplerin arşivi</li>
            </ul>
          </motion.div>

          {/* Konsiyerj Kartı */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><PhoneCall size={120} className="text-luxera-gold" /></div>
            <div className="w-20 h-20 bg-luxera-gold/10 rounded-3xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <Clock className="text-luxera-gold" size={40} />
            </div>
            <h3 className="text-3xl font-serif mb-4">7/24 Konsiyerj</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Taksi çağrısından kuru temizlemeye, ev temizliğinden rezervasyon işlemlerine kadar hayatınızı kolaylaştıran tüm detaylar tek bir panelde.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-luxera-gold" /> Vale araç çağırma</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-luxera-gold" /> Posta ve kargo takibi</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-luxera-gold" /> VIP transfer yönetimi</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="bg-luxera-gold rounded-3xl p-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif text-luxera-navy mb-4">Yeni Talep Oluştur</h2>
          <p className="text-luxera-navy/80 mb-8 max-w-2xl">
            Tüm teknik destek, arıza bildirimi ve konsiyerj taleplerinizi Apsiyon üzerinden giriş yaparak teknik ekibimizin iş sırasına anında ekleyebilirsiniz.
          </p>
          <a 
            href="https://www.apsiyon.com/giris" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-luxera-navy text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:scale-105"
          >
            Sisteme Giriş <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
