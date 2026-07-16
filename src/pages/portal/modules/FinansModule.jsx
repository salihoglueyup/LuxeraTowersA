import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle } from 'lucide-react';

const FinansModule = () => (
  <motion.div key="finans" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-black via-gray-900 to-black border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-luxera-gold/5 rounded-full blur-3xl"></div>
        <CreditCard className="text-luxera-gold mb-6" size={40} />
        <h3 className="text-gray-400 font-medium mb-1">Toplam Ödenecek Tutar</h3>
        <p className="text-5xl font-serif text-white mb-6">₺8,500<span className="text-xl text-gray-500 font-sans">.00</span></p>
        <div className="space-y-4">
          <input type="text" placeholder="Kart Numarası" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
          <div className="flex gap-4">
            <input type="text" placeholder="AA/YY" className="w-1/2 bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
            <input type="text" placeholder="CVC" className="w-1/2 bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
          </div>
          <button className="w-full bg-luxera-gold text-luxera-navy font-bold py-4 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">3D Secure ile Öde</button>
        </div>
      </div>
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md h-[450px] overflow-y-auto custom-scrollbar">
        <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4 sticky top-0 bg-luxera-navy/80 backdrop-blur-md z-10">Geçmiş İşlemler</h3>
        <div className="space-y-4">
          {[
            { desc: 'Kasım 2025 Aidatı', date: '01.11.2025', amount: '₺8,500', status: 'Ödendi' },
            { desc: 'Ekim 2025 Aidatı', date: '01.10.2025', amount: '₺8,500', status: 'Ödendi' },
            { desc: 'Eylül 2025 Aidatı', date: '01.09.2025', amount: '₺8,500', status: 'Ödendi' },
            { desc: 'Havuz Rezervasyonu (Ekstra)', date: '15.09.2025', amount: '₺450', status: 'Ödendi' },
            { desc: 'Ağustos 2025 Aidatı', date: '01.08.2025', amount: '₺8,500', status: 'Ödendi' }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-xl border border-white/5">
              <div>
                <p className="text-white font-medium">{item.desc}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">{item.amount}</p>
                <p className="text-xs text-green-400 flex items-center gap-1 justify-end"><CheckCircle size={12}/> {item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default FinansModule;
