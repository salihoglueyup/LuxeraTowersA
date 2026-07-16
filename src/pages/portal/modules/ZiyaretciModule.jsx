import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, Car, QrCode, X, Clock } from 'lucide-react';

const ZiyaretciModule = () => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [valetCalling, setValetCalling] = useState(false);
  const [valetTime, setValetTime] = useState(0); // in seconds
  const [guestName, setGuestName] = useState('');

  // Valet countdown timer
  useEffect(() => {
    let interval = null;
    if (valetCalling && valetTime > 0) {
      interval = setInterval(() => {
        setValetTime(t => t - 1);
      }, 1000);
    } else if (valetTime === 0 && valetCalling) {
      // Arrived
    }
    return () => clearInterval(interval);
  }, [valetCalling, valetTime]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleCallValet = () => {
    setValetTime(5 * 60); // 5 minutes
    setValetCalling(true);
  };

  const handleGenerateQR = () => {
    if (guestName.trim()) {
      setShowQRModal(true);
    }
  };

  return (
    <motion.div key="ziyaretci" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
          <Key className="text-luxera-gold" size={28} />
          <h3 className="text-xl font-serif text-white">QR Ziyaretçi Kaydı</h3>
        </div>
        <p className="text-sm text-gray-400 mb-6">Misafirinizin adını girerek güvenlik noktasından hızlı geçiş yapabileceği tek kullanımlık bir QR kod oluşturun.</p>
        <div className="space-y-4 mb-6">
          <input 
            type="text" 
            placeholder="Misafir Adı Soyadı" 
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" 
          />
          <input type="text" placeholder="Araç Plakası (Opsiyonel)" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
        </div>
        <button onClick={handleGenerateQR} className="w-full bg-luxera-gold text-luxera-navy font-bold py-4 rounded-xl hover:bg-white transition-all">QR Kod Üret</button>
      </div>

      <div className="bg-gradient-to-br from-luxera-navy to-black border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center text-center">
        <Car size={64} className="text-luxera-gold mb-6" />
        <h3 className="text-2xl font-serif text-white mb-2">Vale Çağır</h3>
        
        {!valetCalling ? (
          <>
            <p className="text-gray-400 mb-8 max-w-xs">Aracınızın çıkış kapısına getirilmesi yaklaşık 5-7 dakika sürmektedir.</p>
            <button onClick={handleCallValet} className="bg-white text-luxera-navy font-bold py-4 px-12 rounded-full hover:bg-luxera-gold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] text-lg uppercase tracking-widest">
              Aracımı Hazırla
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center">
            {valetTime > 0 ? (
              <>
                <p className="text-gray-400 mb-2">Aracınız kapıya getiriliyor...</p>
                <div className="text-5xl font-mono text-luxera-gold mb-6 flex items-center gap-3">
                  <Clock size={32} /> {formatTime(valetTime)}
                </div>
                <button onClick={() => setValetCalling(false)} className="text-sm text-red-400 hover:text-white transition-colors">İptal Et</button>
              </>
            ) : (
              <>
                <p className="text-green-400 text-xl font-bold mb-2">Aracınız Kapıda!</p>
                <button onClick={() => setValetCalling(false)} className="bg-white/10 text-white font-bold py-2 px-6 rounded-full hover:bg-white/20 transition-all mt-4">
                  Teşekkürler
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* QR Modal */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-luxera-charcoal border border-white/10 p-8 rounded-3xl max-w-sm w-full text-center relative"
            >
              <button onClick={() => setShowQRModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-serif text-white mb-2">Misafir QR Kodu</h3>
              <p className="text-gray-400 text-sm mb-6">{guestName} adlı misafiriniz bu kodu okutarak giriş yapabilir.</p>
              
              <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                {/* Fake QR using Lucide icon scaled up for visual */}
                <QrCode size={200} className="text-black" />
              </div>
              
              <p className="text-luxera-gold text-xs font-bold uppercase tracking-widest">Geçerlilik: 2 Saat</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default ZiyaretciModule;
