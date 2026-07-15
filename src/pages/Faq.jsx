import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqCategories } from '../data/faq';
import { staggerContainer, fadeUp } from '../shared/utils/animations';

import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-luxera-navy min-h-screen text-white pt-32 pb-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-luxera-gold"></div>
            <p className="text-luxera-gold uppercase tracking-[0.3em] text-xs font-semibold">{t('faq.hero.overline', 'Tüm Detaylar')}</p>
            <div className="h-[1px] w-12 bg-luxera-gold"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">{t('faq.hero.title1', 'Sık Sorulan')} <span className="text-luxera-gold italic">{t('faq.hero.title2', 'Sorular')}</span></h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            {t('faq.hero.desc', 'Yatırım ve yaşam kararınızı güvenle alabilmeniz için, Luxera Towers hakkında en çok merak edilen detayları kategoriler halinde sizin için derledik.')}
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {faqCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => { setActiveCategory(idx); setOpenIndex(null); }}
              className={`px-6 py-3 rounded-full text-sm font-serif transition-all duration-300 ${activeCategory === idx ? 'bg-luxera-gold text-luxera-navy' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              {t(`faqData.${cat.id}.category`, cat.category)}
            </button>
          ))}
        </motion.div>

        {/* FAQs */}
        <motion.div 
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {faqCategories[activeCategory].faqs.map((faq, index) => (
            <motion.div 
              variants={fadeUp}
              key={index} 
              className="bg-luxera-charcoal border border-luxera-gold/20 rounded-xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-serif text-lg md:text-xl pr-8">{t(`faqData.${faqCategories[activeCategory].id}.faqs.${index}.q`, faq.question)}</span>
                <span className="text-luxera-gold shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-400 leading-relaxed border-t border-luxera-gold/10 pt-4">
                      {t(`faqData.${faqCategories[activeCategory].id}.faqs.${index}.a`, faq.answer)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Alt CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-20 relative bg-luxera-charcoal border border-luxera-gold/20 rounded-2xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-luxera-gold/5 blur-3xl rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif text-white mb-4">{t('faq.cta.title', 'Sorunuz listede yok mu?')}</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">{t('faq.cta.desc', 'Projeyle ilgili daha detaylı bilgi almak, örnek dairemizi gezmek veya size özel ödeme planları oluşturmak için uzman satış danışmanlarımızla hemen iletişime geçin.')}</p>
            <Link to="/iletisim" className="inline-flex items-center gap-2 bg-luxera-gold text-luxera-navy px-10 py-4 rounded-sm uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors">
              {t('faq.cta.btn', 'Uzmana Danışın')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
