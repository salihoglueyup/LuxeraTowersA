import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getFaqCategories } from '../data/faq';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null); // String or index
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = getFaqCategories(t);

  // Search logic
  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return null; // Using category view
    
    const query = searchTerm.toLowerCase();
    const results = [];
    faqCategories.forEach((cat, cIdx) => {
      cat.faqs.forEach((faq, fIdx) => {
        if (faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query)) {
          results.push({ ...faq, id: `${cIdx}-${fIdx}` });
        }
      });
    });
    return results;
  }, [searchTerm, faqCategories]);

  // SEO JSON-LD Generation
  const jsonLd = useMemo(() => {
    const mainEntity = [];
    faqCategories.forEach(cat => {
      cat.faqs.forEach(faq => {
        mainEntity.push({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        });
      });
    });
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntity
    };
  }, [faqCategories]);

  return (
    <>
      <Helmet>
        <title>{t('faq.hero.title1', 'Sık Sorulan')} {t('faq.hero.title2', 'Sorular')} | Luxera Towers</title>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="bg-luxera-navy min-h-screen text-white pt-32 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-luxera-gold"></div>
              <p className="text-luxera-gold uppercase tracking-[0.3em] text-xs font-semibold">{t('faq.hero.overline', 'Tüm Detaylar')}</p>
              <div className="h-[1px] w-12 bg-luxera-gold"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">{t('faq.hero.title1', 'Sık Sorulan')} <span className="text-luxera-gold italic">{t('faq.hero.title2', 'Sorular')}</span></h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              {t('faq.hero.desc', 'Yatırım ve yaşam kararınızı güvenle alabilmeniz için, Luxera Towers hakkında en çok merak edilen detayları kategoriler halinde sizin için derledik.')}
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder={t('faq.search.placeholder', 'Merak ettiğiniz bir konuyu arayın... (örn: tapu, aidat)')}
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setOpenIndex(null); }}
                className="w-full bg-luxera-charcoal border border-luxera-gold/20 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-luxera-gold/50 transition-colors"
              />
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          {/* Category Tabs - Magic Underline/Background */}
          {!filteredFaqs && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {faqCategories.map((cat, idx) => {
                const isActive = activeCategory === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => { setActiveCategory(idx); setOpenIndex(null); }}
                    className={`relative px-6 py-3 rounded-full text-sm font-serif transition-colors duration-300 ${isActive ? 'text-luxera-navy' : 'text-gray-400 hover:text-white'}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-luxera-gold rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{cat.category}</span>
                  </button>
                )
              })}
            </motion.div>
          )}

          {/* FAQs List */}
          <motion.div 
            key={filteredFaqs ? 'search' : activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {filteredFaqs && filteredFaqs.length === 0 && (
              <div className="text-center text-gray-400 py-10">
                <p>{t('faq.search.empty', 'Aramanıza uygun sonuç bulunamadı.')}</p>
              </div>
            )}

            {(filteredFaqs || faqCategories[activeCategory].faqs).map((faq, index) => {
              const uniqueId = faq.id || index;
              const isOpen = openIndex === uniqueId;
              
              return (
                <motion.div 
                  variants={fadeUp}
                  key={uniqueId} 
                  className="bg-luxera-charcoal border border-luxera-gold/20 rounded-xl overflow-hidden"
                >
                  <button 
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : uniqueId)}
                  >
                    <h3 className="font-serif text-lg pr-8 text-white">{faq.question}</h3>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-luxera-gold' : 'text-gray-400'}`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-luxera-gold/10 pt-4 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Alt CTA with WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-20 relative bg-luxera-charcoal border border-luxera-gold/20 rounded-2xl p-10 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-luxera-gold/5 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-white mb-4">{t('faq.cta.title', 'Sorunuz listede yok mu?')}</h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
                {t('faq.cta.desc', 'Projeyle ilgili daha detaylı bilgi almak, örnek dairemizi gezmek veya size özel ödeme planları oluşturmak için uzman satış danışmanlarımızla hemen iletişime geçin.')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/iletisim" className="inline-flex items-center justify-center bg-luxera-gold text-luxera-navy px-8 py-4 rounded-sm uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors min-w-[220px]">
                  {t('faq.cta.btn', 'Uzmana Danışın')}
                </Link>
                <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-sm uppercase tracking-widest text-sm font-bold hover:bg-[#128C7E] transition-colors min-w-[220px]">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Faq;
