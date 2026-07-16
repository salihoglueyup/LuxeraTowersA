import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Home, Car, Coffee, X } from 'lucide-react';

const KonsiyerjModule = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const handleOpen = (title) => {
    setActiveService(title);
    setShowModal(true);
  };

  const services = [
    { title: 'Kuru Temizleme', desc: 'Kapınızdan alınır', icon: <Package size={32} /> },
    { title: 'Daire Temizliği', desc: 'Profesyonel ekip', icon: <Home size={32} /> },
    { title: 'VIP Transfer', desc: 'Havalimanı & Şehir İçi', icon: <Car size={32} /> },
    { title: 'Özel Asistan', desc: 'Rezervasyon & Bilet', icon: <Coffee size={32} /> },
  ];

  return (
    <motion.div key="konsiyerj" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {services.map((srv, i) => (
        <div key={i} onClick={() => handleOpen(srv.title)} className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center group cursor-pointer hover:border-luxera-gold/50 transition-all hover:-translate-y-1">
          <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center text-luxera-gold mx-auto mb-4 group-hover:scale-110 transition-transform">
            {srv.icon}
          </div>
          <h4 className="text-white font-medium mb-1">{srv.title}</h4>
          <p className="text-xs text-gray-400">{srv.desc}</p>
        </div>
      ))}
      <div className="md:col-span-2 lg:col-span-4 bg-gradient-to-r from-luxera-gold/20 to-transparent border border-luxera-gold/30 p-8 rounded-3xl mt-4 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-serif text-white mb-2">Özel Bir İsteğiniz Mi Var?</h3>
          <p className="text-gray-300">Konsiyerj ekibimiz 7/24 hizmetinizdedir. Talebinizi iletin, biz halledelim.</p>
        </div>
        <button onClick={() => handleOpen('Özel İstek')} className="bg-luxera-gold text-luxera-navy font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors shrink-0">
          Danışmana Bağlan
        </button>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-luxera-charcoal border border-white/10 p-8 rounded-3xl max-w-sm w-full relative"
            >
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-serif text-white mb-2">{activeService} Talebi</h3>
              <p className="text-gray-400 text-sm mb-6">Konsiyerj ekibimiz talebiniz üzerine sizinle iletişime geçecektir.</p>
              
              <textarea 
                rows="4"
                placeholder="Ek notlar (Opsiyonel)"
                className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none resize-none mb-4"
              ></textarea>

              <button onClick={() => setShowModal(false)} className="w-full bg-luxera-gold text-luxera-navy font-bold py-4 rounded-xl hover:bg-white transition-all">
                Talebi İlet
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default KonsiyerjModule;
