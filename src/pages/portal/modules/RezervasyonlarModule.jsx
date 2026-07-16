import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, X } from 'lucide-react';

const RezervasyonlarModule = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [reservations, setReservations] = useState([
    { day: 24, title: 'SPA Masaj Seansı', time: '18:00 - 19:30', facility: 'SPA & Masaj' }
  ]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowModal(true);
  };

  const handleBook = (e) => {
    e.preventDefault();
    setReservations([...reservations, { day: selectedDay, title: 'Yeni Rezervasyon', time: '14:00 - 15:00', facility: 'Kapalı Havuz' }]);
    setShowModal(false);
  };

  return (
    <motion.div key="rezervasyonlar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
      <div className="lg:col-span-2 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-serif text-white">Aralık 2025</h3>
          <div className="flex gap-2">
            <button className="bg-black/40 text-gray-300 px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">Tesisler</button>
          </div>
        </div>
        {/* Fake Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(d => <div key={d} className="text-center text-gray-500 text-sm py-2">{d}</div>)}
          {Array.from({length: 31}).map((_, i) => {
            const isReserved = reservations.some(r => r.day === i + 1);
            return (
              <div 
                key={i} 
                onClick={() => handleDayClick(i + 1)}
                className={`aspect-square rounded-lg flex items-center justify-center text-sm cursor-pointer transition-colors ${
                  isReserved 
                  ? 'bg-luxera-gold text-luxera-navy font-bold shadow-[0_0_10px_rgba(212,175,55,0.5)]' 
                  : 'bg-black/20 text-gray-300 hover:bg-white/10 hover:border hover:border-white/20'
                }`}
              >
                {i + 1}
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-luxera-navy to-black border border-white/10 p-8 rounded-3xl backdrop-blur-md h-fit">
        <h3 className="text-xl font-serif text-white mb-6">Yaklaşan Rezervasyonlar</h3>
        <div className="space-y-4">
          {reservations.map((res, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4 items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5"><Calendar size={60} /></div>
              <div className="w-16 h-16 bg-luxera-gold/10 rounded-xl flex flex-col items-center justify-center border border-luxera-gold/20 shrink-0">
                <span className="text-luxera-gold font-bold text-xl leading-none">{res.day}</span>
                <span className="text-luxera-gold text-xs uppercase font-semibold">Ara</span>
              </div>
              <div className="relative z-10">
                <p className="text-xs text-luxera-gold mb-1">{res.facility}</p>
                <p className="text-white font-medium mb-1">{res.title}</p>
                <p className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12}/> {res.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
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
              <h3 className="text-2xl font-serif text-white mb-2">Tesis Rezervasyonu</h3>
              <p className="text-gray-400 text-sm mb-6">{selectedDay} Aralık 2025 için müsaitlik arayın.</p>
              
              <form onSubmit={handleBook} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Tesis</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none">
                    <option>Kapalı Havuz</option>
                    <option>SPA & Masaj</option>
                    <option>VIP Toplantı Odası</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Saat</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none">
                    <option>10:00 - 11:30</option>
                    <option>14:00 - 15:30</option>
                    <option>18:00 - 19:30 (Dolu)</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-luxera-gold text-luxera-navy font-bold py-4 rounded-xl hover:bg-white transition-all mt-4">
                  Yer Ayırt
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default RezervasyonlarModule;
