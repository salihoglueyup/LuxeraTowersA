import React from 'react';
import { motion } from 'framer-motion';
import { Store, Users, MapPin, TrendingUp, Percent, Building, ArrowRight, Search, FileSignature, Handshake, Rocket } from 'lucide-react';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import LuxuryButton from '../shared/ui/LuxuryButton';
import RevealText from '../shared/ui/RevealText';
import AnimatedCounter from '../shared/ui/AnimatedCounter';
import ProcessSteps from '../shared/ui/ProcessSteps';
import Testimonials from '../shared/ui/Testimonials';

import { useTranslation } from 'react-i18next';

const Commercial = () => {
  const { t } = useTranslation();

  const leaseSteps = [
    { icon: <Search size={22} />, title: t('commercial.steps.s1.title', 'Konum Analizi'), desc: t('commercial.steps.s1.desc', 'Markanız için görünürlük, yaya trafiği ve komşu marka uyumuna göre en doğru üniteyi belirleriz.') },
    { icon: <FileSignature size={22} />, title: t('commercial.steps.s2.title', 'Teklif & Sözleşme'), desc: t('commercial.steps.s2.desc', 'Kira koşulları, teslim standartları ve süreç şeffaf biçimde sözleşmeye bağlanır.') },
    { icon: <Handshake size={22} />, title: t('commercial.steps.s3.title', 'Yer Teslimi'), desc: t('commercial.steps.s3.desc', 'Üniteniz, mağaza kurulumuna hazır teknik altyapısıyla teslim edilir.') },
    { icon: <Rocket size={22} />, title: t('commercial.steps.s4.title', 'Açılış & Yönetim'), desc: t('commercial.steps.s4.desc', 'Açılış sonrası tanıtım, kira takibi ve işletme desteğiyle yanınızdayız.') },
  ];

  const unitTypes = [
    { type: t('commercial.units.u1.type', 'Cadde Üzeri Dükkan'), area: '45 - 120 m²', floor: t('commercial.units.u1.floor', 'Zemin Kat'), ideal: t('commercial.units.u1.ideal', 'Perakende & Marka Mağaza') },
    { type: t('commercial.units.u2.type', 'AVM İçi Ünite'), area: '30 - 200 m²', floor: t('commercial.units.u2.floor', '1. – 2. Kat'), ideal: t('commercial.units.u2.ideal', 'Moda, Teknoloji, Hizmet') },
    { type: t('commercial.units.u3.type', 'Cafe & Restoran'), area: '80 - 300 m²', floor: t('commercial.units.u3.floor', 'Zemin / Teras'), ideal: t('commercial.units.u3.ideal', 'Yeme-İçme & Yaşam') },
    { type: t('commercial.units.u4.type', 'Ofis / Plaza'), area: '60 - 250 m²', floor: t('commercial.units.u4.floor', 'Üst Katlar'), ideal: t('commercial.units.u4.ideal', 'Kurumsal & Serbest Meslek') },
  ];

  const roi = [
    { icon: <TrendingUp size={28} />, stat: t('commercial.roi.r1.stat', 'Yüksek'), label: t('commercial.roi.r1.label', 'Değer Artış Potansiyeli'), desc: t('commercial.roi.r1.desc', 'Metro ve otoyol bağlantılarıyla sürekli yükselen bölge değeri.') },
    { icon: <Percent size={28} />, stat: t('commercial.roi.r2.stat', 'Güçlü'), label: t('commercial.roi.r2.label', 'Kira Getirisi (ROI)'), desc: t('commercial.roi.r2.desc', 'Karma konsept ve yoğun yaya trafiği ile istikrarlı kira geliri.') },
    { icon: <Users size={28} />, stat: t('commercial.roi.r3.stat', 'Maksimum'), label: t('commercial.roi.r3.label', 'Ziyaretçi Kapasitesi'), desc: t('commercial.roi.r3.desc', 'Rezidans sakinleri ve bölge halkının buluşma noktası.') },
  ];
  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden">
      <PageHero
        overline={t('commercial.hero.overline', 'Ticari Fırsatlar')}
        title={t('commercial.hero.title', 'Ticari')}
        highlight={t('commercial.hero.highlight', 'Üniteler')}
        subtitle={t('commercial.hero.subtitle', 'Basın Ekspres\'in en prestijli AVM\'sinde, markanızı zirveye taşıyacak benzersiz ticari fırsatlar.')}
        backgroundImage="/images/exterior/5_2025-12-18_02-46-35_82a21a.webp"
      />

      {/* Ticaretin Kalbi */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <RevealText as="h2" className="text-4xl font-serif text-white mb-8" text={t('commercial.intro.title', 'Ticaretin Yeni Kalbi')} />
          <p className="text-gray-400 leading-relaxed mb-6">
            {t('commercial.intro.desc', 'Luxera Towers AVM, özel mağazaları, geniş yürüyüş alanları ve yüksek yaya trafiği potansiyeliyle hem bölge halkının hem de proje sakinlerinin buluşma noktası oluyor.')}
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-4 text-gray-300">
              <div className="bg-luxera-gold/10 p-2 rounded-full"><Store className="text-luxera-gold" size={20} /></div>
              <span className="flex gap-1"><AnimatedCounter value={87} className="font-bold text-luxera-gold" /> {t('commercial.intro.f1', 'Adet Özel Mağaza ve Dükkan')}</span>
            </li>
            <li className="flex items-center gap-4 text-gray-300">
              <div className="bg-luxera-gold/10 p-2 rounded-full"><Users className="text-luxera-gold" size={20} /></div>
              <span className="flex gap-1">{t('commercial.intro.f2.pre', 'Günlük')} <AnimatedCounter value={15000} suffix="+" className="font-bold text-luxera-gold" /> {t('commercial.intro.f2.post', 'Ziyaretçi Kapasitesi')}</span>
            </li>
            <li className="flex items-center gap-4 text-gray-300">
              <div className="bg-luxera-gold/10 p-2 rounded-full"><MapPin className="text-luxera-gold" size={20} /></div>
              {t('commercial.intro.f3', 'Cadde Üzeri Görünürlük (Yüksek Tabela Değeri)')}
            </li>
          </ul>
          <LuxuryButton variant="outline" href="/iletisim" icon={<ArrowRight size={16} />}>
            {t('commercial.intro.btn', 'Ticari Planları İncele')}
          </LuxuryButton>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative rounded-3xl overflow-hidden border border-luxera-gold/20 aspect-square lg:aspect-auto lg:h-[600px]">
          <img src="/images/exterior/5_2025-12-18_02-46-35_82a21a.webp" alt="Ticari Üniteler" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxera-charcoal via-transparent to-transparent"></div>
        </motion.div>
      </div>

      {/* Ünite Tipleri Tablosu */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <SectionHeader 
          overline={t('commercial.table.overline', 'Seçenekler')}
          title={t('commercial.table.title', 'Ticari Ünite Tipleri')}
          watermark="01"
        />
        <div className="bg-luxera-charcoal border border-luxera-gold/20 rounded-3xl overflow-hidden">
          <div className="hidden md:grid grid-cols-4 gap-4 px-8 py-5 border-b border-white/10 text-xs uppercase tracking-widest text-luxera-gold">
            <span>{t('commercial.table.h1', 'Ünite Tipi')}</span><span>{t('commercial.table.h2', 'Alan')}</span><span>{t('commercial.table.h3', 'Konum')}</span><span>{t('commercial.table.h4', 'İdeal Kullanım')}</span>
          </div>
          {unitTypes.map((u, i) => (
            <motion.div
              key={u.type}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 py-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
            >
              <span className="font-serif text-white text-lg col-span-2 md:col-span-1">{u.type}</span>
              <span className="text-gray-400"><span className="md:hidden text-luxera-gold text-xs uppercase mr-2">{t('commercial.table.h2', 'Alan')}:</span>{u.area}</span>
              <span className="text-gray-400"><span className="md:hidden text-luxera-gold text-xs uppercase mr-2">{t('commercial.table.h3', 'Konum')}:</span>{u.floor}</span>
              <span className="text-gray-400"><span className="md:hidden text-luxera-gold text-xs uppercase mr-2">{t('commercial.table.h4', 'Kullanım')}:</span>{u.ideal}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Yatırım Getirisi */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <SectionHeader 
          overline={t('commercial.roiSection.overline', 'Neden Luxera Towers?')}
          title={t('commercial.roiSection.title', 'Yatırım Getirisi')}
          watermark="02"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roi.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-luxera-charcoal border border-luxera-gold/10 p-10 rounded-2xl text-center group hover:border-luxera-gold/50 transition-colors"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-luxera-gold/10 flex items-center justify-center mb-6 text-luxera-gold group-hover:bg-luxera-gold group-hover:text-luxera-navy transition-colors">
                {r.icon}
              </div>
              <p className="text-2xl font-serif text-luxera-gold mb-1">{r.stat}</p>
              <h3 className="text-lg text-white mb-3">{r.label}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Kiralama Süreci */}
      <ProcessSteps
        className="mb-32"
        overline={t('commercial.process.overline', 'Nasıl İşler?')}
        title={t('commercial.process.title', 'Kiralama Süreci')}
        subtitle={t('commercial.process.subtitle', 'Doğru üniteden açılışa; markanızı Luxera Towers\'a taşımak dört adımda tamamlanır.')}
        watermark="03"
        steps={leaseSteps}
      />

      {/* Ticari Kiracı Yorumları */}
      <div className="mb-32">
        <Testimonials title={t('commercial.testimonials.title', 'Kiracılarımız Ne Diyor?')} overline={t('commercial.testimonials.overline', 'Referanslar')} category="commercial" watermark="★" />
      </div>

      {/* Marka-Mix CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden bg-luxera-charcoal border border-luxera-gold/20 grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="p-12 md:p-16 flex flex-col justify-center items-start">
            <Building className="text-luxera-gold mb-6" size={40} />
            <RevealText as="h2" className="text-4xl font-serif text-white mb-6" text={t('commercial.cta.title', 'Doğru Marka-Mix, Doğru Konum')} />
            <p className="text-gray-400 mb-8 leading-relaxed">
              {t('commercial.cta.desc', 'Perakendeden gastronomiye, teknolojiden hizmete uzanan dengeli marka kompozisyonu; her ünitenin görünürlüğünü ve ticari potansiyelini en üst düzeye taşıyacak şekilde planlanmaktadır. Markanız için en uygun konumu birlikte belirleyelim.')}
            </p>
            <LuxuryButton variant="primary" href="/iletisim" icon={<ArrowRight size={18} />}>
              {t('commercial.cta.btn', 'Ticari Teklif Alın')}
            </LuxuryButton>
          </div>
          <div className="h-full min-h-[400px] relative">
            <img src="/images/exterior/11_2025-12-18_02-46-35_736f9b.webp" alt="Marka Mix" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-luxera-charcoal"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Commercial;
