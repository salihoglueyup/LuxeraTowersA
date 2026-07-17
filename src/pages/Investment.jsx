import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, ShieldCheck, ArrowRight, Building2, BarChart3, LineChart, BadgeDollarSign } from 'lucide-react';
import SectionHeader from '../shared/ui/SectionHeader';
import PageHero from '../shared/ui/PageHero';
import RevealText from '../shared/ui/RevealText';
import AnimatedCounter from '../shared/ui/AnimatedCounter';
import LuxuryButton from '../shared/ui/LuxuryButton';
import Testimonials from '../shared/ui/Testimonials';
import SEO from '../shared/seo/SEO';

import { useTranslation } from 'react-i18next';

const Investment = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pb-24">
      <SEO 
        title={t('investment.seo.title', 'Yatırım ve Değer Artışı')}
        description={t('investment.seo.desc', '%120 değer artışı öngörüsü, kısa amortisman süresi ve garantili kira getirisi ile İstanbul\'un en kârlı gayrimenkul yatırımı.')}
        canonical="https://luxeratowers.com/yatirim"
      />
      
      <PageHero
        overline={t('investment.hero.overline', 'Kârlı Fırsatlar')}
        title={t('investment.hero.title', 'Geleceğinize')}
        highlight={t('investment.hero.highlight', 'Değer Katın')}
        subtitle={t('investment.hero.subtitle', 'İstanbul\'un yeni altın aksı Basın Ekspres\'te yükselen Luxera Towers ile yüksek yatırım getirisi, güvenli liman ve parlak bir gelecek sizi bekliyor.')}
        backgroundImage="/images/exterior/10_2025-12-18_02-46-35_72a99a.webp"
      />

      {/* Bölge Raporu Metni */}
      <div className="max-w-4xl mx-auto px-6 mb-32 text-center">
        <RevealText as="h2" text={t('investment.intro.title', 'Yeni Maslak: Basın Ekspres')} className="text-3xl md:text-4xl font-serif text-luxera-gold mb-8 justify-center" />
        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
          {t('investment.intro.p1', 'Uluslararası holding merkezleri, 5 yıldızlı oteller zinciri ve devasa ticaret merkezlerinin buluşma noktası olan Basın Ekspres Yolu, İstanbul\'un en hızlı değer kazanan lokasyonu olarak kayıtlara geçmiştir. Devlet destekli mega altyapı projeleri ve planlı şehirleşme hamleleriyle bölge, salt bir ulaşım aksı olmaktan çıkarak dev bir finans ve yaşam merkezine dönüşmüştür.')}
        </p>
        <p className="text-gray-400 text-lg leading-relaxed font-light">
          {t('investment.intro.p2', 'E-5 ve TEM otoyollarını birbirine bağlayan, kapısından M9 metro hattının geçtiği ve İstanbul Havalimanı\'na doğrudan entegre olan bu benzersiz konum, Luxera Towers yatırımcılarına paha biçilemez bir likidite ve talep güvencesi sunmaktadır.')}
        </p>
      </div>

      {/* Stats & Arguments */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <SectionHeader 
          title={t('investment.stats.title', 'Neden Luxera Towers?')}
          watermark="01"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: TrendingUp, title: t('investment.stats.s1.title', 'Bölgesel Değer Artışı'), desc: t('investment.stats.s1.desc', 'Tamamlanan altyapı projeleri ve bölgeye olan yoğun talep sayesinde sürekli katlanan gayrimenkul rayiç bedeli.'), stat: 120, suffix: '%' },
            { icon: PieChart, title: t('investment.stats.s2.title', 'Hedeflenen Amortisman'), desc: t('investment.stats.s2.desc', 'Ticari alanlar, AVM ve rezidans karma konseptinin yarattığı sinerji ile Türkiye ortalamasının çok altında yatırım geri dönüş hızı.'), stat: 12, suffix: t('investment.stats.s2.suffix', ' Yıl') },
            { icon: ShieldCheck, title: t('investment.stats.s3.title', 'Vatandaşlık Sınırı'), desc: t('investment.stats.s3.desc', 'Yabancı yatırımcılar için Türk Vatandaşlığı (Citizenship by Investment) programına tam uyumluluk ve şeffaf hukuki süreç garantisi.'), stat: 400, suffix: 'K $' },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-luxera-charcoal border border-luxera-gold/10 p-10 rounded-2xl text-center group hover:border-luxera-gold/50 transition-colors"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-luxera-gold/10 flex items-center justify-center mb-6 group-hover:bg-luxera-gold group-hover:text-luxera-navy transition-colors">
                <item.icon className="text-luxera-gold group-hover:text-luxera-navy transition-colors" size={32} />
              </div>
              <div className="text-4xl font-serif text-luxera-gold mb-2">
                <AnimatedCounter value={item.stat} suffix={item.suffix} />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Yatırım Avantajları */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-luxera-charcoal border border-luxera-gold/20 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-luxera-gold/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

          <h2 className="text-4xl font-serif text-white mb-12 text-center relative z-10">{t('investment.adv.title', 'Stratejik Karar Noktası')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {[
              { no: '01', title: t('investment.adv.a1.title', 'Karma Konsept (Mixed-Use) Gücü'), desc: t('investment.adv.a1.desc', 'Sadece konut üreten projeler krizlerden etkilenebilir. Ancak altında kendi AVM\'si, ofis bloğu ve ticari alanları bulunan karma projeler, kendi ekonomisini yaratarak krizlere karşı muazzam bir kalkan oluşturur.') },
              { no: '02', title: t('investment.adv.a2.title', 'Ulaşım Ağı Entegrasyonu'), desc: t('investment.adv.a2.desc', 'Kapınızdan çıktığınız an metroya binebilmek, 25 dakikada Avrupa\'nın en büyük havalimanına ulaşmak ve E-5/TEM gişelerine dakikalar içinde bağlanabilmek; kiracı portföyünüzün her zaman üst düzey yöneticilerden oluşmasını sağlar.') },
              { no: '03', title: t('investment.adv.a3.title', 'Uluslararası Marka Güvencesi'), desc: t('investment.adv.a3.desc', 'Luxera markasının uluslararası arenadaki güvenilirliği, projenin yüksek malzeme standartları ve zamanında teslim garantisi; riskleri sıfıra indirerek huzurlu bir yatırım süreci sunar.') },
              { no: '04', title: t('investment.adv.a4.title', 'Yüksek Kira Getirisi (Rental Yield)'), desc: t('investment.adv.a4.desc', 'Bölgedeki plaza çalışanları, havayolu personelleri ve expat yöneticilerin yoğun talebi sayesinde, boş kalma oranı (vacancy rate) minimumda, döviz bazlı kira getirisi potansiyeli maksimumdadır.') },
            ].map((adv) => (
              <motion.div
                key={adv.no}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="flex gap-6"
              >
                <span className="text-4xl md:text-5xl font-serif text-luxera-gold/20 shrink-0">{adv.no}</span>
                <div>
                  <h3 className="text-xl font-serif text-white mb-3">{adv.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Yatırımcı Yorumları */}
      <div className="mb-32">
        <Testimonials title={t('investment.testimonials.title', 'Yatırımcılarımız Ne Diyor?')} overline={t('investment.testimonials.overline', 'Referanslar')} category="investor" watermark="₺" />
      </div>

      {/* Visual & CTA */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden bg-luxera-charcoal border border-luxera-gold/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <RevealText as="h2" text={t('investment.cta.title', 'Profesyonel Yatırım Danışmanlığı')} className="text-3xl md:text-4xl font-serif text-white mb-6" />
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t('investment.cta.desc', 'Her yatırımcının profili ve beklentisi farklıdır. Satış ekibimiz; bütçenize, vatandaşlık hedeflerinize ve vade planlarınıza en uygun ünite seçeneklerini ve kişiselleştirilmiş ödeme planlarını oluşturmak için sizi bekliyor.')}
              </p>
              <div>
                <LuxuryButton variant="primary" href="/iletisim" icon={<ArrowRight size={18} />}>
                  {t('investment.cta.btn', 'Yatırım Sunumu Alın')}
                </LuxuryButton>
              </div>
            </div>
            <div className="h-full min-h-[500px] lg:min-h-full relative">
              <img src="/images/exterior/7_2025-12-18_02-46-34_3b69d3.webp" alt="Yatırım" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-luxera-charcoal"></div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Investment;
