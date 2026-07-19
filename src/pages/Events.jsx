import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, CalendarPlus, ChevronRight, Tag } from 'lucide-react';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { getEvents } from '../data/events';
import CtaBand from '../shared/ui/CtaBand';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';

import { useTranslation } from 'react-i18next';
import SEO from '../shared/seo/SEO';

const Events = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const events = getEvents(t);
  const ALL_KEY = t('events.filters.all', 'Tümü');

  const ITEMS_PER_PAGE = 9;

  const handleAddToCalendar = (e) => {
    e.stopPropagation();
    alert("Google Takvim'e ekleniyor... (Demo)");
  };

  // Sort all events from newest to oldest based on isoDate
  const sortedEvents = [...events].sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));

  // Get unique categories for filtering
  const uniqueCategories = [...new Set(sortedEvents.map(e => e.category))];
  const categories = [{ label: ALL_KEY, value: null }, ...uniqueCategories.map(c => ({ label: c, value: c }))];

  // Filter events based on active category
  const filteredEvents = !activeFilter 
    ? sortedEvents 
    : sortedEvents.filter(e => e.category === activeFilter);

  // Pagination Logic
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Extract featured event (only on page 1)
  const featuredEvent = currentPage === 1 ? paginatedEvents[0] : null;
  const remainingEvents = currentPage === 1 ? paginatedEvents.slice(1) : paginatedEvents;

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-32">
      <SEO 
        title={t('events.seo.title', 'Etkinlikler')}
        description={t('events.seo.desc', 'Luxera Towers sosyal yaşam takvimi, müzik dinletileri, kitap günleri ve en güncel gelişmeler.')}
        canonical="https://luxeratowers.com/etkinlikler"
      />

      <PageHero
        overline={t('events.hero.overline', 'Gündem & Medya')}
        title={t('events.hero.title1', '')}
        highlight={t('events.hero.title2', 'Etkinlikler')}
        subtitle={t('events.hero.desc', 'Luxera Towers ekosistemindeki en güncel gelişmeler, özel kampanyalar ve size özel hazırlanan sosyal etkinlik takvimi.')}
        backgroundImage="/images/exterior/14_2025-12-18_02-46-35_78c2e7.webp"
      />

      <div className="max-w-[85rem] mx-auto px-4 md:px-6 mt-16 md:mt-24">
        
        {/* FILTERS */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-2 bg-white/5 border border-white/10 rounded-3xl md:rounded-full backdrop-blur-md">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveFilter(cat.value);
                  setCurrentPage(1);
                }}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.value 
                  ? 'bg-luxera-gold text-luxera-navy shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT AREA */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* FEATURED EVENT (MANŞET) */}
            {featuredEvent && (
              <div 
                onClick={() => setSelected(featuredEvent)}
                className="group relative bg-black/40 border border-white/10 hover:border-luxera-gold/50 rounded-3xl overflow-hidden shadow-2xl mb-12 cursor-pointer transition-colors"
              >
                <div className="flex flex-col md:flex-row min-h-[400px]">
                  {/* Image Side */}
                  <div className="w-full md:w-2/3 relative overflow-hidden h-[300px] md:h-auto">
                    <img 
                      src={featuredEvent.image} 
                      alt={featuredEvent.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-luxera-navy via-luxera-navy/60 to-transparent" />
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full md:w-1/3 p-6 md:p-12 flex flex-col justify-center relative z-10 -mt-20 md:mt-0 md:-ml-20">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                      <span className="text-luxera-navy font-bold text-[10px] md:text-xs uppercase tracking-widest px-3 md:px-4 py-1 md:py-1.5 bg-luxera-gold rounded-full">
                        {featuredEvent.category}
                      </span>
                      <span className="text-white text-[10px] md:text-xs bg-black/60 backdrop-blur-md px-3 py-1 md:py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 md:gap-2">
                        <Calendar size={12} /> {featuredEvent.date}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-4 md:mb-6 group-hover:text-luxera-gold transition-colors leading-tight">
                      {featuredEvent.title}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
                      {featuredEvent.desc}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-luxera-gold/10 flex items-center justify-center group-hover:bg-luxera-gold text-luxera-gold group-hover:text-luxera-navy transition-colors">
                        <ChevronRight size={18} className="md:w-5 md:h-5" />
                      </div>
                      <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-luxera-gold">{t('events.ui.viewDetails', 'Detayları İncele')}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* GRID LAYOUT FOR REMAINING EVENTS */}
            {remainingEvents.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {remainingEvents.map((event) => (
                  <div 
                    key={event.id}
                    onClick={() => setSelected(event)}
                    className="bg-white/5 border border-white/10 hover:border-luxera-gold/40 rounded-3xl overflow-hidden group cursor-pointer transition-colors flex flex-col"
                  >
                    <div className="h-48 md:h-56 overflow-hidden relative">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                      />
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-xs">
                        <Calendar size={12} className="text-luxera-gold" /> {event.date}
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-luxera-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                        <Tag size={12} /> {event.category}
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-luxera-gold transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8 line-clamp-3">
                        {event.desc}
                      </p>
                      
                      <div className="mt-auto flex justify-between items-center border-t border-white/10 pt-4 md:pt-6">
                        <span className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{t('events.ui.readMore', 'Devamını Oku')}</span>
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxera-gold text-gray-400 group-hover:text-luxera-gold transition-colors">
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {filteredEvents.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                {t('events.ui.empty', 'Bu kategoride henüz bir etkinlik bulunmamaktadır.')}
              </div>
            )}

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 md:gap-4 mt-16 md:mt-20">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                >
                  <ChevronRight size={18} className="transform rotate-180" />
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-serif text-sm md:text-base flex items-center justify-center transition-all ${
                        currentPage === i + 1 
                        ? 'bg-luxera-gold text-luxera-navy' 
                        : 'border border-white/20 text-white hover:border-luxera-gold hover:text-luxera-gold'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <CtaBand
        className="mt-24 md:mt-32"
        title={t('events.cta.title', 'Etkinliklerden Haberdar Olun')}
        desc={t('events.cta.desc', 'Luxera Towers\'ın özel lansman, kampanya ve sosyal etkinliklerinden ilk siz haberdar olmak için bizimle iletişime geçin.')}
        primary={{ label: t('events.cta.primary', 'İletişime Geçin'), href: '/iletisim' }}
        backgroundImage="/images/exterior/12_2025-12-18_02-46-35_4cee27.webp"
      />

      {/* DETAY MODALI (PREMIUM ARTICLE VIEW) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0f141e] border border-white/10 rounded-3xl w-full max-w-5xl relative z-10 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelected(null)} 
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-luxera-gold z-20 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10 transition-colors"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              {/* Modal Image (Editorial Style) */}
              <div className="w-full md:w-5/12 h-48 md:h-auto overflow-hidden relative shrink-0">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0f141e] via-transparent to-transparent opacity-80" />
                <div className="hidden md:block absolute bottom-8 left-8 md:bottom-auto md:top-8 right-8 text-white/50 font-serif italic text-sm">
                  {t('events.ui.magazine', 'Luxera Gündem')}
                </div>
              </div>
              
              {/* Modal Content (Article Style) */}
              <div className="w-full md:w-7/12 p-6 md:p-14 overflow-y-auto no-scrollbar flex flex-col bg-[#0f141e]">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <span className="text-luxera-gold font-bold text-[10px] md:text-xs uppercase tracking-widest px-3 md:px-4 py-1 md:py-1.5 border border-luxera-gold/30 rounded-full">
                    {selected.category}
                  </span>
                  <span className="text-gray-400 text-[10px] md:text-xs flex items-center gap-1.5 md:gap-2">
                    <Calendar size={14} /> {selected.date}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-6 md:mb-8 leading-tight">{selected.title}</h3>
                
                <div className="prose prose-sm md:prose-lg prose-invert prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 max-w-none prose-p:font-light font-sans">
                  <p className="first-letter:text-5xl md:first-letter:text-6xl first-letter:font-serif first-letter:text-luxera-gold first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left">
                    {selected.body}
                  </p>
                </div>

                {selected.type === 'event' && (
                  <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 text-center sm:text-left">
                      <div>
                        <h4 className="text-white font-serif text-base md:text-lg mb-1">{t('events.ui.markCalendar', 'Takviminizi İşaretleyin')}</h4>
                        <p className="text-xs md:text-sm text-gray-400">{t('events.ui.markCalendarDesc', 'Bu özel etkinliği kaçırmamak için ajandanıza ekleyin.')}</p>
                      </div>
                      <button 
                        onClick={handleAddToCalendar}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-luxera-navy hover:text-white bg-luxera-gold hover:bg-transparent px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 border border-luxera-gold shrink-0"
                      >
                        <CalendarPlus size={16} className="md:w-4 md:h-4" />
                        {t('events.ui.addToCalendar', 'Takvime Ekle')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
