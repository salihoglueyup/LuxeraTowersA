import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

import { events } from '../../../data/events';

const EtkinliklerModule = () => (
  <motion.div key="etkinlikler" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {events.map((evt, i) => (
      <div key={evt.id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group">
        <div className="h-48 overflow-hidden relative">
          <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute top-4 right-4 bg-luxera-gold text-luxera-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{evt.category}</div>
        </div>
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <h3 className="text-xl font-serif text-white mb-2 line-clamp-2">{evt.title}</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-400 mb-6 flex-1">
            <span className="flex items-center gap-2"><Calendar size={14} className="text-luxera-gold shrink-0"/> {evt.date}</span>
            <span className="text-xs leading-relaxed line-clamp-2">{evt.desc}</span>
          </div>
          <button className="w-full bg-white/10 text-white font-bold py-3 rounded-xl hover:bg-luxera-gold hover:text-luxera-navy transition-colors mt-auto">Detayları Gör</button>
        </div>
      </div>
    ))}
  </motion.div>
);

export default EtkinliklerModule;
