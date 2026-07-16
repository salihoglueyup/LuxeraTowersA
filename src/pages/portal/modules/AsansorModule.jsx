import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownToLine, ArrowUpToLine, Key, QrCode, X, Clock } from 'lucide-react';

const AsansorModule = () => {
  const [elevatorStatus, setElevatorStatus] = useState('idle'); // idle, calling, arrived
  const [showQR, setShowQR] = useState(false);

  const callElevator = () => {
    setElevatorStatus('calling');
    setTimeout(() => setElevatorStatus('arrived'), 3000);
    setTimeout(() => setElevatorStatus('idle'), 8000);
  };

  return (
    <motion.div key="asansor" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      
      {/* Call Elevator */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-luxera-gold/5 rounded-full blur-3xl"></div>
        
        <h3 className="text-2xl font-serif text-white mb-2 relative z-10">Akıllı Asansör</h3>
        <p className="text-gray-400 mb-8 relative z-10">A Blok - 42. Kat</p>

        {elevatorStatus === 'idle' && (
          <div className="flex gap-4 relative z-10">
            <button onClick={callElevator} className="w-24 h-24 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-gray-300 hover:text-luxera-gold hover:border-luxera-gold/50 transition-all group shadow-xl">
              <ArrowUpToLine size={32} className="mb-2 group-hover:-translate-y-1 transition-transform" />
              <span className="text-xs font-bold">YUKARI</span>
            </button>
            <button onClick={callElevator} className="w-24 h-24 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-gray-300 hover:text-luxera-gold hover:border-luxera-gold/50 transition-all group shadow-xl">
              <ArrowDownToLine size={32} className="mb-2 group-hover:translate-y-1 transition-transform" />
              <span className="text-xs font-bold">AŞAĞI</span>
            </button>
          </div>
        )}

        {elevatorStatus === 'calling' && (
          <div className="flex flex-col items-center justify-center h-24 relative z-10">
            <div className="text-4xl font-serif text-luxera-gold mb-2 animate-pulse">Çağrılıyor...</div>
            <p className="text-xs text-gray-400">Lütfen bekleyin</p>
          </div>
        )}

        {elevatorStatus === 'arrived' && (
          <div className="flex flex-col items-center justify-center h-24 relative z-10">
            <div className="text-4xl font-serif text-green-400 mb-2">Asansör Katta</div>
            <p className="text-xs text-green-500/70">Kapılar açılıyor</p>
          </div>
        )}
      </div>

      {/* Guest PIN / QR */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
          <Key className="text-luxera-gold" size={28} />
          <div>
            <h3 className="text-xl font-serif text-white">Misafir Asansör Erişimi</h3>
            <p className="text-xs text-gray-400 mt-1">Sadece sizin katınıza çıkış izni verir.</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-2">Tek Kullanımlık PIN Kodu</p>
            <p className="text-4xl font-mono text-white tracking-[0.5em] mb-4">4285</p>
            <p className="text-xs text-luxera-gold flex items-center justify-center gap-1"><Clock size={12}/> Geçerlilik: 15 Dakika</p>
          </div>

          <button onClick={() => setShowQR(true)} className="w-full bg-white/10 text-white font-bold py-4 rounded-xl hover:bg-luxera-gold hover:text-luxera-navy transition-all border border-white/10 flex items-center justify-center gap-2">
            <QrCode size={20} /> Asansör QR Kodu Göster
          </button>
        </div>
      </div>

      {/* QR Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-luxera-charcoal border border-white/10 p-8 rounded-3xl max-w-sm w-full text-center relative"
            >
              <button onClick={() => setShowQR(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-serif text-white mb-2">Asansör QR</h3>
              <p className="text-gray-400 text-sm mb-6">Misafiriniz bu kodu asansördeki okuyucuya taratarak 42. kata çıkabilir.</p>
              
              <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <QrCode size={200} className="text-black" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AsansorModule;
