import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wrench, Calendar, Bell, Clock, AlertCircle } from 'lucide-react';

const OzetModule = ({ setActiveTab }) => (
  <motion.div key="ozet" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <div className="bg-gradient-to-br from-luxera-charcoal to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-luxera-gold/30 transition-colors shadow-2xl">
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><CreditCard size={80} className="text-luxera-gold" /></div>
      <h4 className="text-gray-400 font-semibold mb-2 flex items-center gap-2"><CreditCard size={16}/> Güncel Borç Bakiyesi</h4>
      <p className="text-4xl font-serif text-white mb-1">₺8,500<span className="text-sm text-gray-500 font-sans">.00</span></p>
      <p className="text-luxera-gold text-xs font-semibold uppercase tracking-wider mb-8">Son Ödeme: 25 Aralık 2025</p>
      <button onClick={() => setActiveTab('finans')} className="w-full bg-luxera-gold text-luxera-navy font-bold py-3 rounded-xl hover:bg-white transition-colors">Hemen Öde</button>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-colors">
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Wrench size={80} className="text-white" /></div>
      <div className="flex justify-between items-start mb-6">
        <h4 className="text-gray-400 font-semibold flex items-center gap-2"><Wrench size={16}/> Aktif Talepler</h4>
        <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30">1 Açık</span>
      </div>
      <div className="bg-black/40 border border-white/10 rounded-2xl p-4 cursor-pointer hover:border-luxera-gold/30 transition-colors" onClick={() => setActiveTab('talepler')}>
        <p className="text-white font-medium mb-1">Akıllı Ev Paneli Arızası</p>
        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3"><Clock size={12}/> Oluşturulma: Dün 14:30</p>
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full w-1/2 rounded-full"></div>
        </div>
        <p className="text-xs text-blue-400 mt-2 font-semibold">Durum: Teknik ekip yönlendirildi</p>
      </div>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-colors md:col-span-2 xl:col-span-1">
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Calendar size={80} className="text-white" /></div>
      <div className="flex justify-between items-start mb-6">
        <h4 className="text-gray-400 font-semibold flex items-center gap-2"><Calendar size={16}/> Yaklaşan Rezervasyon</h4>
      </div>
      <div className="bg-black/40 border border-white/10 rounded-2xl p-4 flex gap-4 items-center cursor-pointer hover:border-luxera-gold/30 transition-colors" onClick={() => setActiveTab('rezervasyonlar')}>
        <div className="w-16 h-16 bg-luxera-gold/10 rounded-xl flex flex-col items-center justify-center border border-luxera-gold/20 shrink-0">
          <span className="text-luxera-gold font-bold text-xl leading-none">24</span>
          <span className="text-luxera-gold text-xs uppercase font-semibold">Ara</span>
        </div>
        <div>
          <p className="text-white font-medium mb-1">Kapalı Havuz Kullanımı</p>
          <p className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12}/> 18:00 - 19:30</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default OzetModule;
