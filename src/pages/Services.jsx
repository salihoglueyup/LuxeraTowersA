import React from 'react';
import { motion } from 'framer-motion';
import { Car, Bell, Key, ShieldCheck, Dumbbell, Coffee, Smartphone, MessageSquare, Sparkles, ThumbsUp } from 'lucide-react';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import PageHero from '../shared/ui/PageHero';
import LuxuryCard from '../shared/ui/LuxuryCard';
import SectionHeader from '../shared/ui/SectionHeader';
import RevealText from '../shared/ui/RevealText';
import ProcessSteps from '../shared/ui/ProcessSteps';
import StatStrip from '../shared/ui/StatStrip';
import Testimonials from '../shared/ui/Testimonials';
import CtaBand from '../shared/ui/CtaBand';
import HoverImageReveal from '../shared/ui/HoverImageReveal';

import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const serviceSteps = [
    { icon: <Smartphone size={22} />, title: <HoverImageReveal text={t('services.steps.step1.title', 'Talebinizi İletin')} imageSrc="/images/amenities/amenity-whatsapp-01.jpeg" />, desc: t('services.steps.step1.desc', 'Mobil uygulama veya tek bir telefonla concierge ekibine talebinizi bildirin.') },
    { icon: <MessageSquare size={22} />, title: <HoverImageReveal text={t('services.steps.step2.title', 'Planlama')} imageSrc="/images/interior/d5_scene101_20240303_153337copy_2025-12-18_03-46-55_6f850e.webp" />, desc: t('services.steps.step2.desc', 'Ekibimiz talebinizi değerlendirir, en uygun çözümü ve zamanlamayı sizinle paylaşır.') },
    { icon: <Sparkles size={22} />, title: <HoverImageReveal text={t('services.steps.step3.title', 'Hizmet')} imageSrc="/images/exterior/13_2025-12-18_02-46-35_a465ab.webp" />, desc: t('services.steps.step3.desc', 'Vale, housekeeping, rezervasyon ya da organizasyon; hizmet titizlikle yerine getirilir.') },
    { icon: <ThumbsUp size={22} />, title: <HoverImageReveal text={t('services.steps.step4.title', 'Memnuniyet')} imageSrc="/images/interior/2_2025-12-18_02-42-20_d8b016.webp" />, desc: t('services.steps.step4.desc', 'Deneyiminizi değerlendirin; hizmet standartlarımızı sizin için sürekli iyileştiriyoruz.') },
  ];

  const serviceStats = [
    { value: 7, suffix: '/24', label: t('services.stats.s1', 'Kesintisiz Hizmet') },
    { value: 6, suffix: '', label: t('services.stats.s2', 'Ayrıcalık Alanı') },
    { value: 5, suffix: '★', label: t('services.stats.s3', 'Otel Standardı') },
    { value: 100, suffix: '%', label: t('services.stats.s4', 'Kişiye Özel') },
  ];

  const services = [
    { path: '/ayricaliklar/concierge', icon: <Bell size={40} />, title: t('services.list.concierge.title', '7/24 Concierge'), desc: t('services.list.concierge.desc', 'Siz sadece hayatın tadını çıkarın diye, uçak bileti rezervasyonundan özel etkinlik planlamalarına kadar her detayı profesyonel ekibimiz organize ediyor.'), image: '/images/amenities/privilege_concierge_v2_1784289560447.png' },
    { path: '/ayricaliklar/guvenlik', icon: <ShieldCheck size={40} />, title: t('services.list.security.title', 'Özel Güvenlik'), desc: t('services.list.security.desc', 'Akıllı bina teknolojileri, kapalı devre kamera sistemleri (CCTV) ve 7/24 devriye atan profesyonel güvenlik personeli ile aileniz daima güvende.'), image: '/images/amenities/privilege_security_macro_v4.png' },
    { path: '/ayricaliklar/vale', icon: <Car size={40} />, title: t('services.list.valet.title', 'Vale & Otopark'), desc: t('services.list.valet.desc', 'Aracınızı güvenle teslim edebileceğiniz vale hizmeti ve sadece sakinlere özel, plaka tanıma sistemli tahsisli otopark alanları.'), image: '/images/amenities/privilege_valet_v2_1784289582660.png' },
    { path: '/ayricaliklar/fitness', icon: <Dumbbell size={40} />, title: t('services.list.fitness.title', 'Fitness & SPA'), desc: t('services.list.fitness.desc', 'Güne enerjik başlamanız için en son teknoloji fitness ekipmanları ve günün stresini atmanız için lüks tasarım SPA merkezi.'), image: '/images/amenities/privilege_fitness_v2_1784289598172.png' },
    { path: '/ayricaliklar/housekeeping', icon: <Key size={40} />, title: t('services.list.housekeeping.title', 'Housekeeping'), desc: t('services.list.housekeeping.desc', '5 yıldızlı otel standartlarında temizlik, kuru temizleme ve ütü hizmetleri ile rezidansınız her zaman misafir ağırlamaya hazır.'), image: '/images/amenities/privilege_housekeeping_v2_1784289608856.png' },
    { path: '/ayricaliklar/lounge', icon: <Coffee size={40} />, title: t('services.list.lounge.title', 'Lounge Alanı'), desc: t('services.list.lounge.desc', 'İş toplantılarınızı yapabileceğiniz, misafirlerinizi prestijli bir ortamda ağırlayabileceğiniz yüksek tavanlı özel lobi ve lounge.'), image: '/images/amenities/privilege_lounge_v2_1784289616886.png' }
  ];
  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pb-24">
      
      <PageHero
        overline={t('services.hero.overline', 'Ayrıcalıklar')}
        title={t('services.hero.title', 'Luxera')}
        highlight={t('services.hero.highlight', 'Life')}
        subtitle={t('services.hero.subtitle', 'Zamanın değerini bilenler için tasarlandı. Sadece bir metrekare değil, hayatınıza konfor katan bir yaşam tarzı satın alıyorsunuz.')}
        backgroundImage="/images/interior/d5_scene3_20240304_221324copy_2025-12-18_03-47-03_b3ced7.webp"
      />

      <div className="max-w-4xl mx-auto px-6 mb-32 text-center">
        <RevealText as="h2" text={t('services.intro.title', 'Otel Konforunu Evinize Getiren Hizmetler')} className="text-3xl md:text-4xl font-serif text-luxera-gold mb-8 justify-center" />
        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
          {t('services.intro.p1', 'Gerçek lüksün, eşyaların parlaklığında değil, hayatı ne kadar kolaylaştırdığında gizli olduğuna inanıyoruz. Luxera Towers\'ta, 5 yıldızlı bir otelin lobisinden içeri girdiğinizde hissettiğiniz o "bana özel" hissini, her gün evinize adım attığınızda yaşatmayı vaat ediyoruz.')}
        </p>
        <p className="text-gray-400 text-lg leading-relaxed font-light">
          {t('services.intro.p2', 'İster yorucu bir iş gününün ardından aracınızı valeye teslim edin, ister sabahın erken saatlerinde eğitmeniniz eşliğinde güne başlayın. Tüm hizmetlerimiz, size sadece "yaşamın tadını çıkarma" lüksünü bırakmak için kurgulandı.')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title={t('services.listSection.title', 'Tüm Ayrıcalıklarımız')}
          watermark="VIP"
        />
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div variants={fadeUp} key={index} className="h-[450px]">
              <LuxuryCard 
                image={service.image}
                title={service.title}
                description={service.desc}
                category="Hizmet"
                actionHref={service.path}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Nasıl Faydalanılır */}
      <ProcessSteps
        className="mt-32"
        overline={t('services.process.overline', 'Nasıl İşler?')}
        title={t('services.process.title', 'Hizmete Ulaşmak Çok Kolay')}
        subtitle={t('services.process.subtitle', 'Tek bir talep, kusursuz bir deneyime dönüşür. Gerisini Luxera ekibine bırakın.')}
        watermark="VIP"
        steps={serviceSteps}
      />

      {/* İstatistikler */}
      <StatStrip stats={serviceStats} className="mt-24" />

      {/* Referanslar */}
      <Testimonials className="mt-32" title={t('services.testimonials.title', 'Sakinlerimiz Ne Diyor?')} overline={t('services.testimonials.overline', 'Referanslar')} category="resident" watermark="★" />

      {/* CTA */}
      <CtaBand
        className="mt-32"
        title={t('services.cta.title', 'Otel Konforunu Evinizde Yaşayın')}
        desc={t('services.cta.desc', 'Luxera Towers ayrıcalıklarını ve hizmet standartlarını yakından deneyimlemek için bizimle iletişime geçin.')}
        primary={{ label: t('services.cta.primary', 'İletişime Geçin'), href: '/iletisim' }}
        backgroundImage="/images/interior/d5_scene5_20240304_220944copy_2025-12-18_03-47-03_7b5b78.webp"
      />
    </div>
  );
};

export default Services;
