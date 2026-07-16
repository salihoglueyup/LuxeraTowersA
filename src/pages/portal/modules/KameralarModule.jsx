import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const KameralarModule = () => {
  const [connecting, setConnecting] = useState(null);
  
  const cameras = [
    { id: 1, title: 'Lobi Giriş', active: true, img: '/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp' },
    { id: 2, title: 'Kapalı Çocuk Parkı', active: true, img: '/images/exterior/4_2025-12-18_02-46-35_361a6b.webp' },
    { id: 3, title: 'Otopark - Kat 1', active: false, img: '' },
    { id: 4, title: 'Otopark - Kat 2', active: false, img: '' }
  ];

  const handleConnect = (id) => {
    if(connecting === id) return;
    setConnecting(id);
    setTimeout(() => {
      setConnecting(null);
    }, 2000); // 2 saniye bağlantı simülasyonu
  };

  return (
    <motion.div key="kameralar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cameras.map((cam) => (
        <div key={cam.id} className="bg-black border border-white/10 rounded-2xl overflow-hidden relative aspect-video group cursor-pointer" onClick={() => cam.active && handleConnect(cam.id)}>
          {cam.active ? (
            connecting === cam.id ? (
              <div className="w-full h-full flex flex-col items-center justify-center text-luxera-gold bg-black/90">
                <div className="w-8 h-8 border-4 border-luxera-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                <span className="text-sm font-semibold tracking-widest">BAĞLANTI KURULUYOR...</span>
              </div>
            ) : (
              <>
                <img src={cam.img} alt={cam.title} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-bold tracking-widest uppercase">LIVE</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-medium bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">{cam.title}</span>
                </div>
              </>
            )
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 bg-white/5">
              <Video size={32} className="mb-2 opacity-50" />
              <span className="text-sm">Bağlantı Yok</span>
              <span className="text-xs mt-1">{cam.title}</span>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default KameralarModule;
