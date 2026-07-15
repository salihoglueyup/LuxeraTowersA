import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X } from 'lucide-react';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { events } from '../data/events';
import CtaBand from '../shared/ui/CtaBand';

import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-luxera-navy min-h-screen text-white pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">{t('events.hero.title1', 'Haberler &')} <span className="text-luxera-gold italic">{t('events.hero.title2', 'Etkinlikler')}</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('events.hero.desc', 'Luxera Towers ekosistemindeki en güncel gelişmeler, kampanyalar ve sosyal etkinlikler.')}
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              variants={fadeUp}
              key={index}
              className="bg-luxera-charcoal border border-luxera-gold/10 rounded-2xl overflow-hidden hover:border-luxera-gold/40 transition-colors group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-luxera-navy/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-luxera-gold text-xs uppercase tracking-widest px-3 py-1 bg-luxera-gold/10 rounded-full">{t(`eventsData.${event.id}.category`, event.category)}</span>
                  <div className="flex items-center text-gray-400 text-sm gap-1">
                    <Calendar size={14} /> {event.date}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-luxera-gold transition-colors">{t(`eventsData.${event.id}.title`, event.title)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{t(`eventsData.${event.id}.desc`, event.desc)}</p>

                <button
                  onClick={() => setSelected(event)}
                  className="text-luxera-gold text-sm tracking-widest uppercase hover:text-white transition-colors text-left mt-auto inline-flex items-center gap-2"
                >
                  {t('events.card.readMore', 'Devamını Oku')} <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <CtaBand
        className="mt-24"
        title={t('events.cta.title', 'Etkinliklerden Haberdar Olun')}
        desc={t('events.cta.desc', 'Luxera Towers\'ın özel lansman, kampanya ve sosyal etkinliklerinden ilk siz haberdar olmak için bizimle iletişime geçin.')}
        primary={{ label: t('events.cta.primary', 'İletişime Geçin'), href: '/iletisim' }}
        backgroundImage="/images/exterior/12_2025-12-18_02-46-35_4cee27.webp"
      />

      {/* Detay Modalı */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              className="bg-luxera-charcoal border border-luxera-gold/30 rounded-2xl w-full max-w-2xl relative z-10 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-white hover:text-luxera-gold z-20 bg-black/40 rounded-full p-1"><X size={22} /></button>
              <div className="h-56 overflow-hidden shrink-0">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-luxera-gold text-xs uppercase tracking-widest px-3 py-1 bg-luxera-gold/10 rounded-full">{t(`eventsData.${selected.id}.category`, selected.category)}</span>
                  <span className="text-gray-400 text-sm flex items-center gap-1"><Calendar size={14} /> {selected.date}</span>
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">{t(`eventsData.${selected.id}.title`, selected.title)}</h3>
                <p className="text-gray-300 leading-relaxed">{t(`eventsData.${selected.id}.body`, selected.body)}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
