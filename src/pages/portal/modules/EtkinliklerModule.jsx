import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const EtkinliklerModule = () => (
  <motion.div key="etkinlikler" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      { title: 'Lobi Lounge Caz Dinletisi', date: '25 Aralık Çarşamba, 20:00', loc: 'Ana Lobi', img: '/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp', status: 'Kayıt Açık' },
      { title: 'Sabah Yogası', date: 'Her Cumartesi, 09:00', loc: 'Fitness Terası', img: '/images/amenities/d5_scene26_20240303_012656copy_2025-12-18_03-46-34_808608.webp', status: 'Kayıt Açık' }
    ].map((evt, i) => (
      <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group">
        <div className="h-48 overflow-hidden relative">
          <img src={evt.img} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute top-4 right-4 bg-luxera-gold text-luxera-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{evt.status}</div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif text-white mb-2">{evt.title}</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-400 mb-6">
            <span className="flex items-center gap-2"><Calendar size={14} className="text-luxera-gold"/> {evt.date}</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-luxera-gold"/> {evt.loc}</span>
          </div>
          <button className="w-full bg-white/10 text-white font-bold py-3 rounded-xl hover:bg-luxera-gold hover:text-luxera-navy transition-colors">Katıl</button>
        </div>
      </div>
    ))}
  </motion.div>
);

export default EtkinliklerModule;
