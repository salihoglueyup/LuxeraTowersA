import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Trees, Ruler, ShieldCheck, Leaf, Award } from 'lucide-react';
import { siteStats } from '../data/site';
import Testimonials from '../shared/ui/Testimonials';
import CtaBand from '../shared/ui/CtaBand';
import { useTranslation } from 'react-i18next';
import MaskRevealImage from '../shared/ui/MaskRevealImage';

const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { value: siteStats.residences, label: t('about.stats.residences', 'Özel Rezidans') },
    { value: siteStats.stores, label: t('about.stats.stores', 'Lüks Mağaza') },
    { value: siteStats.towers, label: t('about.stats.towers', 'İkonik Kule') },
    { value: siteStats.landscapeRatio, label: t('about.stats.landscapeRatio', 'Yeşil Alan Oranı') },
  ];

  const timeline = [
    { year: '2023', title: t('about.timeline.2023.title', 'Temel Atma'), desc: t('about.timeline.2023.desc', 'Fore kazık ve radye temel çalışmalarının tamamlanması.') },
    { year: '2024', title: t('about.timeline.2024.title', 'Kaba İnşaat'), desc: t('about.timeline.2024.desc', 'Kulelerin yükselişi ve yapısal imalatların ilerlemesi.') },
    { year: '2025', title: t('about.timeline.2025.title', 'İnce İşçilik'), desc: t('about.timeline.2025.desc', 'Cephe kaplama, iç mekan ve peyzaj uygulamaları.') },
    { year: '2026', title: t('about.timeline.2026.title', 'Teslim'), desc: t('about.timeline.2026.desc', 'Anahtar teslim ve yaşamın başlaması (Q4).') },
  ];

  const specs = [
    { icon: <Building2 size={24} />, title: t('about.specs.system.title', 'İnşaat Sistemi'), value: t('about.specs.system.value', 'Betonarme + Fore Kazık / Radye Temel') },
    { icon: <Ruler size={24} />, title: t('about.specs.height.title', 'Tavan Yüksekliği'), value: t('about.specs.height.value', '3.20 m – 3.60 m (Penthouse)') },
    { icon: <Leaf size={24} />, title: t('about.specs.leed.title', 'Yeşil Sertifika'), value: t('about.specs.leed.value', 'LEED uyumlu sürdürülebilir tasarım') },
    { icon: <ShieldCheck size={24} />, title: t('about.specs.earthquake.title', 'Deprem Yönetmeliği'), value: t('about.specs.earthquake.value', 'TBDY 2018 tam uyumlu') },
  ];

  const reasons = [
    { img: '/images/interior/6_2025-12-18_02-42-20_29be56.webp', title: t('about.reasons.view.title', 'Gökyüzüyle Komşu Daireler'), desc: t('about.reasons.view.desc', 'Panoramik şehir manzarasına açılan geniş pencereli ve ferah tavanlı daireler, evinize her girdiğinizde size derin bir nefes aldırmak için tasarlandı. Gökyüzü bahçelerinde veya geniş balkonlarda huzurun tadını çıkarabilirsiniz.') },
    { img: '/images/amenities/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp', title: t('about.reasons.social.title', 'Konforlu ve Sosyal Yaşam'), desc: t('about.reasons.social.desc', 'Luxera Towers yalnızca yaşam alanları değil, bir yaşam biçimi sunuyor. Spor salonu, kapalı ve açık yüzme havuzları, sauna ve hamam, çocuk oyun alanları, kafeler, restoranlar… Evinizde konforu yaşarken yaşamınıza değer katın.') },
    { img: '/images/exterior/6_2025-12-18_02-46-35_632c46.webp', title: t('about.reasons.life.title', 'Hayata Karışmak Bir Adım Uzakta'), desc: t('about.reasons.life.desc', 'Evinizin hemen altında dünya markalarını bulabileceğiniz bir alışveriş merkezi, formunuzu koruyabileceğiniz spor alanları ve sosyal tesisler… Luxera Towers\'ta "dışarı çıkmak" için sadece asansöre binmeniz yeterli.') },
  ];

  const offers = [
    t('about.offers.0', 'Trafikte kaybedilen saatleri sevdiklerinize vakit ayırarak kazanmak,'),
    t('about.offers.1', 'Akşamları evinizin rahatlığında şehrin ışıl ışıl manzarasına karşı günün yorgunluğunu atmak,'),
    t('about.offers.2', 'İhtiyaç duyduğunuz her şeye sadece bir asansör mesafesinde ulaşmanın lüksünü yaşamak,'),
    t('about.offers.3', 'Hem bugünün konforunu sürmek hem de geleceği parlak bir yatırıma sahip olmanın huzurunu hissetmek.'),
  ];
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-luxera-navy min-h-screen text-white pt-32 pb-24 overflow-hidden">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-24 bg-luxera-gold"></div>
            <p className="text-luxera-gold uppercase tracking-[0.4em] text-sm font-semibold">{t('about.hero.subtitle', 'Vizyonumuz')}</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif leading-none mb-12">
            {t('about.hero.title1', 'Mimarinin')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxera-gold to-luxera-goldLight italic">{t('about.hero.title2', 'Zirvesi')}</span>
          </h1>
        </motion.div>
      </section>

      {/* Storytelling */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
        <MaskRevealImage 
          src="/images/exterior/13_2025-12-18_02-46-35_a465ab.webp" 
          alt="Luxera Towers Mimari" 
          className="aspect-[4/5] rounded-3xl" 
        />

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <h2 className="text-4xl font-serif mb-8 leading-tight">{t('about.story.title', 'Basın Ekspres\'in Kulesi, Gökyüzü Bahçeleri')}</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
            {t('about.story.p1', 'İstanbul\'un en dinamik noktasında hayatın tam merkezinde yer alan Luxera Towers; modern şehir yaşamının hızına yetişmeye çalışanlar için değil, o hızı kendi konforuna dönüştürmek isteyenler için tasarlandı.')}
          </p>
          <p className="text-gray-400 text-lg leading-relaxed font-light mb-12">
            {t('about.story.p2', 'Burası sadece bir ev değil; işiniz, sosyal hayatınız ve ailenizle geçireceğiniz kıymetli anlar arasındaki mesafeleri kaldıran bir yaşam kurgusu. Çünkü biliyoruz ki gerçek lüks; gösterişte değil, hayatı ne kadar kolaylaştırdığınızda gizli.')}
          </p>

          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            {stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <p className="text-5xl font-serif text-luxera-gold mb-2">{s.value}</p>
                <p className="text-sm uppercase tracking-widest text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Rakamlarla Proje */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-luxera-charcoal border border-luxera-gold/10 rounded-2xl p-8 text-center hover:border-luxera-gold/40 transition-colors"
            >
              <p className="text-4xl md:text-5xl font-serif text-luxera-gold mb-2">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Neden Luxera Towers? */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{t('about.why.title1', 'Neden')} <span className="text-luxera-gold italic">{t('about.why.title2', 'Luxera Towers?')}</span></h2>
          <p className="text-gray-400 leading-relaxed">
            {t('about.why.desc', 'Luxera Towers, yüksek standartlara sahip bir residence projesinden öte; günlük hayatı kolaylaştıran ve her detayı düşünülmüş bir yaşam alanı. Şehir hayatıyla bağınızı korurken, bulutların üzerinden izleyeceğiniz manzaralarla huzurun ayrıcalıklı halini deneyimleyin.')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-luxera-charcoal border border-luxera-gold/10 rounded-2xl overflow-hidden group hover:border-luxera-gold/40 transition-colors"
            >
              <div className="h-52 overflow-hidden">
                <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif text-luxera-gold mb-3">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Size Ne Sunuyor? */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-luxera-charcoal to-luxera-navy border border-luxera-gold/20 rounded-3xl p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-serif text-white mb-4">{t('about.offersHeader.title1', 'Luxera Towers')} <span className="text-luxera-gold italic">{t('about.offersHeader.title2', 'Size Ne Sunuyor?')}</span></h2>
            <p className="text-gray-400 leading-relaxed">{t('about.offersHeader.desc', 'Luxera Towers\'ta yaşam demek; burada yaşam sadece akıp giden bir zaman değil, keyifle yönettiğiniz bir ayrıcalık.')}</p>
          </div>
          <ul className="space-y-5">
            {offers.map((o, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 text-gray-300"
              >
                <span className="text-luxera-gold font-serif text-2xl leading-none shrink-0">✦</span>
                <span className="leading-relaxed">{o}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Gökyüzü Bahçeleri Konsepti (Parallax) */}
      <section className="w-full h-[60vh] relative overflow-hidden mb-32 flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img src="/images/interior/6_2025-12-18_02-42-20_29be56.webp" alt="İç Mekan" className="w-full h-[120%] object-cover object-center" />
          <div className="absolute inset-0 bg-luxera-navy/60 mix-blend-multiply"></div>
        </motion.div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="flex items-center gap-3 justify-center mb-6">
            <Trees className="text-luxera-gold" size={28} />
            <span className="text-luxera-gold uppercase tracking-[0.3em] text-sm">{t('about.gardens.subtitle', 'Gökyüzü Bahçeleri')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">{t('about.gardens.title', '"Her penceresinden başarıya açılan bir manzara"')}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('about.gardens.desc', 'Kuleler arasına yerleştirilen çok katlı yeşil teraslar, şehrin ortasında doğayla iç içe nefes alan bir yaşam sunar. Peyzajlı sosyal platformlar, yürüyüş yolları ve dinlenme alanları evinizin bir uzantısıdır.')}
          </p>
          <div className="h-[1px] w-24 bg-luxera-gold mx-auto mt-8"></div>
        </div>
      </section>

      {/* Zaman Çizelgesi */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">{t('about.timelineHeader.title', 'Proje Yolculuğu')}</h2>
          <p className="text-gray-400">{t('about.timelineHeader.desc', 'Temelden teslime, planlanan gelişim takvimi.')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="text-5xl font-serif text-luxera-gold/30 mb-4">{t.year}</div>
              <div className="h-[2px] w-full bg-gradient-to-r from-luxera-gold to-transparent mb-6"></div>
              <h3 className="text-xl font-serif text-white mb-2">{t.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teknik Künye */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-luxera-charcoal border border-luxera-gold/20 rounded-3xl p-10 md:p-16">
          <div className="flex items-center gap-3 mb-10">
            <Award className="text-luxera-gold" size={28} />
            <h2 className="text-3xl font-serif text-white">{t('about.specsHeader', 'Teknik Künye')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specs.map((s) => (
              <div key={s.title} className="flex gap-5 items-start border-b border-white/5 pb-6">
                <div className="text-luxera-gold bg-luxera-gold/10 p-3 rounded-xl shrink-0">{s.icon}</div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{s.title}</p>
                  <p className="text-white font-serif text-lg">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar */}
      <section className="mb-32">
        <Testimonials title={t('about.testimonials.title', 'Luxera\'da Yaşayanlar')} overline={t('about.testimonials.overline', 'Referanslar')} watermark="★" />
      </section>

      {/* CTA */}
      <CtaBand
        title={t('about.cta.title', 'Bu Hikâyenin Bir Parçası Olun')}
        desc={t('about.cta.desc', 'Luxera Towers\'ı yakından tanımak, örnek dairemizi gezmek ve size özel seçenekleri keşfetmek için bizimle iletişime geçin.')}
        primary={{ label: t('about.cta.primary', 'İletişime Geçin'), href: '/iletisim' }}
        secondary={{ label: t('about.cta.secondary', 'Rezidansları İncele'), href: '/rezidanslar' }}
        backgroundImage="/images/exterior/13_2025-12-18_02-46-35_a465ab.webp"
      />
    </div>
  );
};

export default About;
