import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, PieChart, Activity, ExternalLink, Download } from 'lucide-react';
import PageHero from '../../shared/ui/PageHero';
import SectionHeader from '../../shared/ui/SectionHeader';
import SEO from '../../shared/seo/SEO';

const Finance = () => {
  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO 
        title="Finans & Aidat Yönetimi | Luxera Towers"
        description="Luxera Towers sakinlerine özel Apsiyon dijital yönetim sistemi üzerinden aidat ve ödeme takibi."
      />
      
      <PageHero
        overline="Dijital Yönetim"
        title="Finans &"
        highlight="Aidat"
        subtitle="Apsiyon altyapısı ile güvence altına alınmış, şeffaf ve hızlı dijital finansal yönetim deneyimi."
        backgroundImage="/images/interior/d5_scene5_20240304_220944copy_2025-12-18_03-47-03_7b5b78.webp"
      />

      <div className="max-w-[90rem] mx-auto px-6 mt-24">
        <SectionHeader 
          title="Ayrıcalıklı Finans Yönetimi"
          subtitle="Tüm rezidans ödemeleriniz ve aidat takipleriniz tek bir şifreli ekranda."
          watermark="FINANCE"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><CreditCard size={100} className="text-luxera-gold" /></div>
            <div className="w-16 h-16 bg-luxera-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <CreditCard className="text-luxera-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Tek Tıkla Ödeme</h3>
            <p className="text-gray-400">Aidat ve diğer site giderlerinizi 3D Secure güvencesi ile kredi kartınızdan saniyeler içinde ödeyin. Otomatik ödeme talimatı ile zaman kazanın.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><PieChart size={100} className="text-luxera-gold" /></div>
            <div className="w-16 h-16 bg-luxera-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <PieChart className="text-luxera-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Şeffaf Bütçe</h3>
            <p className="text-gray-400">Yönetim gelir-gider tablolarını, işletme bütçelerini ve harcama kalemlerini Apsiyon üzerinden anlık olarak görüntüleyebilir, şeffaf yönetime dahil olabilirsiniz.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Activity size={100} className="text-luxera-gold" /></div>
            <div className="w-16 h-16 bg-luxera-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-luxera-gold/30">
              <Activity className="text-luxera-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Anlık Bakiye Takibi</h3>
            <p className="text-gray-400">Hesap ekstrenize dijital ortamda ulaşın. Geçmiş ödemelerinizin makbuzlarını indirin ve cari hesap hareketlerinizi 7/24 izleyin.</p>
          </motion.div>
        </div>

        {/* Apsiyon Integration Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-24 group border border-luxera-gold/30">
          <div className="absolute inset-0 bg-luxera-gold/5"></div>
          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-luxera-gold font-bold uppercase tracking-widest mb-4">
                <ShieldCheck size={20} /> Banka Düzeyinde Güvenlik
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Apsiyon Finans Ekranı</h2>
              <p className="text-gray-300 max-w-xl text-lg">
                Luxera Towers finansal süreçleri, Türkiye'nin lider rezidans yönetim yazılımı Apsiyon altyapısı ile güvence altındadır. İşlemlerinizi başlatmak için panele giriş yapın.
              </p>
            </div>
            <a 
              href="https://www.apsiyon.com/giris" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-luxera-gold text-luxera-navy px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl hover:scale-105 shrink-0"
            >
              Giriş Yap <ExternalLink size={18} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Finance;
