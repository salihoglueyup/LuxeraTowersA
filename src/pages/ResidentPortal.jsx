import React from 'react';
import { motion } from 'framer-motion';
import { User, LogIn, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { boardMembers } from '../data/brands';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import LuxuryButton from '../shared/ui/LuxuryButton';

const ResidentPortal = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <PageHero
        overline="Mülk Sahipleri ve Kiracılar İçin"
        title="Sakinler"
        highlight="Portalı"
        subtitle="Luxera Towers yönetimi ile ilgili tüm işlemlerinize ve duyurulara buradan ulaşabilirsiniz."
        backgroundImage="/images/interior/d5_scene261_20240303_094451copy_2025-12-18_03-46-55_fb7e9a.webp"
      />

      {/* Apsiyon Login Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-luxera-charcoal border border-luxera-gold/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-luxera-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="w-20 h-20 bg-luxera-gold/10 rounded-full flex items-center justify-center text-luxera-gold mx-auto mb-6">
            <LogIn size={32} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Apsiyon Yönetim Sistemi</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Aidat ödemelerinizi yapmak, yönetim duyurularını okumak ve taleplerinizi iletmek için Apsiyon sistemine giriş yapabilirsiniz.
          </p>
          
          {/* Mock link to Apsiyon */}
          <a 
            href="https://www.apsiyon.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-luxera-gold text-luxera-navy px-10 py-5 rounded-sm uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Apsiyon'a Giriş Yap <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>

      {/* Yönetim Kurulu */}
      <div className="max-w-5xl mx-auto px-6 mt-32">
        <SectionHeader 
          title="Site Yönetim Kurulu"
          subtitle="Luxera Towers'ın sorunsuz ve prestijli yaşam standartlarını koruyan yönetim kadromuz."
          watermark="YÖNETİM"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {boardMembers.map((member, index) => (
            <motion.div
              variants={fadeUp}
              key={member.id}
              className={`bg-luxera-charcoal border border-luxera-gold/10 p-6 rounded-2xl hover:border-luxera-gold/40 transition-colors group flex items-center gap-4 ${index === 0 ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-gray-400 group-hover:text-luxera-gold transition-colors shrink-0">
                <User size={24} />
              </div>
              <div>
                <h3 className={`font-serif text-white mb-1 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>{member.name}</h3>
                <p className="text-luxera-gold text-xs tracking-widest uppercase">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ResidentPortal;
