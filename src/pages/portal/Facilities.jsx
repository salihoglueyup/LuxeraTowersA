import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Droplets, Dumbbell, Coffee, ExternalLink } from 'lucide-react';
import PageHero from '../../shared/ui/PageHero';
import SectionHeader from '../../shared/ui/SectionHeader';
import SEO from '../../shared/seo/SEO';

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: 'Kapalı Yüzme Havuzu',
      desc: 'Günlük stresinizden arının. Kendinize özel kulvarınızı ayırtarak kalabalıktan uzak bir yüzme deneyimi yaşayın.',
      icon: <Droplets size={32} />,
      img: '/images/amenities/d5_scene20_20240303_013151copy_2025-12-18_03-46-29_42c7ac.webp'
    },
    {
      id: 2,
      title: 'Premium Fitness Club',
      desc: 'Son teknoloji Technogym ekipmanları ve özel eğitmen (PT) rezervasyonları ile sağlıklı bir yaşama adım atın.',
      icon: <Dumbbell size={32} />,
      img: '/images/amenities/d5_scene26_20240303_012656copy_2025-12-18_03-46-34_808608.webp'
    },
    {
      id: 3,
      title: 'Lounge & Toplantı Odası',
      desc: 'Misafirlerinizi ağırlamak veya iş toplantılarınızı yapmak için VIP Lounge alanını dilediğiniz saat dilimine kiralayın.',
      icon: <Coffee size={32} />,
      img: '/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp'
    }
  ];

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO 
        title="Sosyal Yaşam & SPA Rezervasyonu | Luxera Towers"
        description="Luxera Towers tesis rezervasyon sistemi ile SPA, fitness ve kapalı havuz alanlarında yerinizi ayırtın."
      />
      
      <PageHero
        overline="Sosyal Alanlar"
        title="Sosyal Yaşam &"
        highlight="SPA"
        subtitle="Ayrıcalıklı tesislerimizde yerinizi ayırtın, anın tadını çıkarın."
        backgroundImage="/images/amenities/d5_scene20_20240303_013151copy_2025-12-18_03-46-29_42c7ac.webp"
      />

      <div className="max-w-[90rem] mx-auto px-6 mt-24">
        <SectionHeader 
          title="Tesis Rezervasyonları"
          subtitle="Tüm sosyal tesislerimizin doluluk oranlarını canlı izleyebilir ve kendi programınıza uygun saati rezerve edebilirsiniz."
          watermark="LIFESTYLE"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-24">
          {facilities.map((fac, index) => (
            <motion.div 
              key={fac.id}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }} 
              className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <div className="absolute inset-0">
                <img 
                  src={fac.img} 
                  alt={fac.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxera-charcoal via-luxera-charcoal/60 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="w-16 h-16 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-luxera-gold mb-6 border border-white/20">
                  {fac.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{fac.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {fac.desc}
                </p>
                <div className="flex items-center gap-2 text-luxera-gold text-sm uppercase tracking-widest font-bold">
                  Rezervasyon Yap <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-6">
          <div className="w-16 h-16 bg-luxera-gold rounded-full flex shrink-0 items-center justify-center">
            <Calendar size={28} className="text-luxera-navy" />
          </div>
          <div>
            <h4 className="text-white font-serif text-xl mb-2">Nasıl Rezervasyon Yaparım?</h4>
            <p className="text-gray-400">
              Apsiyon portalı üzerinden <strong>"Tesisler"</strong> sekmesine giderek kullanmak istediğiniz alanı ve saati seçmeniz yeterlidir. Teyit mesajınız anında cebinize gelir.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Facilities;
