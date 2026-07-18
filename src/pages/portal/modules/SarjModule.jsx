import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BatteryCharging, Zap, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SarjModule = () => {
  const { t } = useTranslation();
  const [stations, setStations] = useState([
    { id: 1, status: 'available', kw: '22kW', progress: 0, timeLeft: '-' },
    { id: 2, status: 'charging', kw: '22kW', progress: 65, timeLeft: '1s 45dk' },
    { id: 3, status: 'charging', kw: '22kW', progress: 20, timeLeft: '2s 10dk' },
    { id: 4, status: 'available', kw: '22kW', progress: 0, timeLeft: '-' }
  ]);

  // Simulate progress bar increment
  useEffect(() => {
    const interval = setInterval(() => {
      setStations(prev => prev.map(st => {
        if (st.status === 'charging' && st.progress < 100) {
          return { ...st, progress: Math.min(st.progress + 1, 100) };
        }
        return st;
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div key="sarj" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center text-center">
        <BatteryCharging size={64} className="text-luxera-gold mb-6" />
        <h3 className="text-2xl font-serif text-white mb-2">{t('portal.charging.title', 'EV Şarj İstasyonları')}</h3>
        <p className="text-gray-400 mb-6">{t('portal.charging.desc', 'Otopark -1. Katta bulunan 4 adet 22kW AC şarj istasyonu durumu.')}</p>
        <div className="w-full bg-black/40 p-4 rounded-xl border border-white/5 flex justify-between items-center">
          <span className="text-gray-300">{t('portal.charging.empty_stations', 'Boş İstasyon')}</span>
          <span className="text-2xl font-bold text-green-400">2<span className="text-sm text-gray-500 font-normal">/4</span></span>
        </div>
      </div>
      <div className="md:col-span-2 grid grid-cols-2 gap-6">
        {stations.map(st => (
          <div key={st.id} className={`p-6 rounded-3xl border transition-all relative overflow-hidden ${st.status === 'available' ? 'bg-green-500/5 border-green-500/30' : 'bg-blue-500/5 border-blue-500/30'}`}>
            
            {/* Animated Progress Background for Charging */}
            {st.status === 'charging' && (
              <div 
                className="absolute inset-0 bg-blue-500/10 transition-all duration-1000 ease-linear"
                style={{ width: `${st.progress}%` }}
              ></div>
            )}

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${st.status === 'available' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400 animate-pulse'}`}>
                  <Zap size={24} />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${st.status === 'available' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  {st.status === 'available' ? t('portal.charging.empty', 'BOŞ') : t('portal.charging.charging_progress', '%{{progress}} ŞARJ', { progress: st.progress })}
                </span>
              </div>
              <h4 className="text-white font-medium mb-1">{t('portal.charging.station', 'İstasyon {{id}}', { id: st.id })}</h4>
              <div className="flex justify-between text-xs text-gray-400 mt-4 border-t border-white/5 pt-4">
                <span className="flex items-center gap-1"><Zap size={12}/> {st.kw}</span>
                <span className="flex items-center gap-1"><Clock size={12}/> {st.status === 'available' ? '-' : t('portal.charging.time_left', '{{time}} kaldı', { time: st.timeLeft })}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SarjModule;
