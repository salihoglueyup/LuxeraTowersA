import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Trees, Cpu } from 'lucide-react';
import PageHero from '../shared/ui/PageHero';
import RevealText from '../shared/ui/RevealText';
import SectionHeader from '../shared/ui/SectionHeader';
import StatStrip from '../shared/ui/StatStrip';
import Testimonials from '../shared/ui/Testimonials';
import CtaBand from '../shared/ui/CtaBand';
import { milestones, corporateStats, sustainability, values } from '../data/corporate';
import { useTranslation } from 'react-i18next';

const SUSTAIN_ICONS = [<Leaf size={24} />, <ShieldCheck size={24} />, <Trees size={24} />, <Cpu size={24} />];

const Corporate = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pb-24">
      <PageHero
        overline={t('corporate.hero.overline', 'Kurumsal')}
        title={t('corporate.hero.title', 'Hakkımızda')}
        subtitle={t('corporate.hero.subtitle', 'Geçmişten gelen tecrübe, geleceği inşa eden vizyon.')}
        backgroundImage="/images/exterior/4_2025-12-18_02-46-35_361a6b.webp"
      />

      {/* Vizyon & Değerler */}
      <div className="max-w-4xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <RevealText as="h2" text={t('corporate.vision.title', 'Vizyonumuz ve Değerlerimiz')} className="text-3xl font-serif text-luxera-gold mb-6" />

          <p className="text-gray-300 leading-relaxed mb-6">
            {t('corporate.vision.p1', 'Gayrimenkul sektöründe yılların getirdiği tecrübe ve güvenle yola çıkan Luxera, her projesinde kalite, estetik ve sağlamlığı standart olarak benimsemiştir. Basın Ekspres\'in en değerli lokasyonunda yükselen Luxera Towers, sadece bir konut projesi değil, aynı zamanda İstanbul\'un yeni ikonlarından biri olma vizyonuyla hayata geçirilmektedir.')}
          </p>

          <p className="text-gray-300 leading-relaxed mb-12">
            {t('corporate.vision.p2', 'Yenilikçi mimari anlayışımız, çevreye duyarlı sürdürülebilirlik ilkelerimiz ve insan odaklı tasarım felsefemizle, projelerimizde yaşayan herkese "premium" bir yaşam deneyimi sunmayı hedefliyoruz.')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-luxera-charcoal p-8 rounded-2xl border border-luxera-gold/20 text-center">
                <h3 className="text-luxera-gold font-serif text-xl mb-3">{t(`corporateData.values.${v.id}.title`, v.title)}</h3>
                <p className="text-gray-400 text-sm">{t(`corporateData.values.${v.id}.desc`, v.desc)}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Kurumsal İstatistikler */}
      <StatStrip stats={corporateStats.map(stat => ({ ...stat, label: t(`corporateData.stats.${stat.id}.label`, stat.label) }))} className="mb-32" />

      {/* Kilometre Taşları / Tarihçe */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <SectionHeader overline={t('corporate.milestones.overline', 'Yolculuğumuz')} title={t('corporate.milestones.title', 'Kilometre Taşları')} watermark="01" />
        <div className="relative border-l border-luxera-gold/20 ml-4 md:ml-0 md:border-l-0">
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-5 md:gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="pl-8 md:pl-0 relative"
              >
                <div className="absolute -left-[7px] top-1 md:hidden w-3 h-3 rounded-full bg-luxera-gold" />
                <div className="text-4xl font-serif text-luxera-gold/40 mb-3">{m.year}</div>
                <div className="hidden md:block h-[2px] w-full bg-gradient-to-r from-luxera-gold to-transparent mb-5" />
                <h3 className="text-lg font-serif text-white mb-2">{t(`corporateData.milestones.${m.year}.title`, m.title)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`corporateData.milestones.${m.year}.desc`, m.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sürdürülebilirlik & Sertifikalar */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <SectionHeader
          overline={t('corporate.sustain.overline', 'Sorumluluk')}
          title={t('corporate.sustain.title', 'Sürdürülebilirlik & Sertifikalar')}
          subtitle={t('corporate.sustain.subtitle', 'Geleceğe saygılı, çevreye duyarlı ve teknolojiyle güçlendirilmiş bir yaşam anlayışı.')}
          watermark="02"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sustainability.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 items-start bg-luxera-charcoal border border-luxera-gold/10 rounded-2xl p-8 hover:border-luxera-gold/40 transition-colors"
            >
              <div className="text-luxera-gold bg-luxera-gold/10 p-3 rounded-xl shrink-0">
                {SUSTAIN_ICONS[i % SUSTAIN_ICONS.length]}
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">{t(`corporateData.sustain.${s.id}.title`, s.title)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`corporateData.sustain.${s.id}.desc`, s.desc)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Yönetim Kurulu Mesajı */}
      <div className="max-w-4xl mx-auto px-6 mb-32">
        <RevealText as="h2" text={t('corporate.board.title', 'Yönetim Kurulu Mesajı')} className="text-3xl font-serif text-luxera-gold mb-6" />
        <blockquote className="border-l-2 border-luxera-gold pl-6 italic text-gray-300 text-xl leading-relaxed bg-luxera-charcoal/50 py-6 pr-6 rounded-r-2xl">
          "{t('corporate.board.quote', 'Biz binalar değil, gelecek nesillere gururla bırakılacak kalıcı eserler inşa ediyoruz. Luxera Towers, bu vizyonumuzun en parlak yansımasıdır.')}"
        </blockquote>
      </div>

      {/* Referanslar */}
      <Testimonials className="mb-32" title={t('corporate.testimonials.title', 'Bize Güvenenler')} overline={t('corporate.testimonials.overline', 'Referanslar')} watermark="03" />

      {/* CTA */}
      <CtaBand
        title={t('corporate.cta.title', 'Luxera Ailesine Katılın')}
        desc={t('corporate.cta.desc', 'Markamızın vizyonunu ve Luxera Towers\'ın sunduğu ayrıcalıkları yakından keşfetmek için bizimle iletişime geçin.')}
        primary={{ label: t('corporate.cta.primary', 'İletişime Geçin'), href: '/iletisim' }}
        secondary={{ label: t('corporate.cta.secondary', 'Projeyi Keşfet'), href: '/kesfet' }}
      />
    </div>
  );
};

export default Corporate;
