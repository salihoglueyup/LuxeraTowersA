import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Zap, Home } from 'lucide-react';

const SmartHomeModule = () => {
  const [states, setStates] = useState({
    livingRoomLight: true,
    bedroomLight: false,
    ac: true,
    curtains: false,
    temp: 22
  });

  return (
    <motion.div key="smarthome" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center py-12 md:col-span-1">
          <Thermometer size={48} className="text-luxera-gold mb-4" />
          <h3 className="text-gray-400 font-medium mb-4">Salon Sıcaklığı</h3>
          <div className="text-6xl font-serif text-white mb-6">{states.temp}°C</div>
          <div className="flex gap-4">
            <button onClick={() => setStates(s => ({...s, temp: s.temp - 1}))} className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white border border-white/10 hover:border-luxera-gold transition-colors">-</button>
            <button onClick={() => setStates(s => ({...s, temp: s.temp + 1}))} className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white border border-white/10 hover:border-luxera-gold transition-colors">+</button>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          {[
            { id: 'livingRoomLight', label: 'Salon Aydınlatma', icon: <Zap size={24} /> },
            { id: 'bedroomLight', label: 'Yatak Odası', icon: <Zap size={24} /> },
            { id: 'ac', label: 'Merkezi Klima', icon: <Thermometer size={24} /> },
            { id: 'curtains', label: 'Akıllı Perdeler', icon: <Home size={24} /> }
          ].map(device => (
            <div key={device.id} className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${states[device.id] ? 'bg-luxera-gold/10 border-luxera-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`} onClick={() => setStates(s => ({...s, [device.id]: !s[device.id]}))}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors ${states[device.id] ? 'bg-luxera-gold text-luxera-navy' : 'bg-black/40 text-gray-400'}`}>
                {device.icon}
              </div>
              <h4 className="text-white font-medium">{device.label}</h4>
              <p className={`text-xs mt-1 font-bold ${states[device.id] ? 'text-luxera-gold' : 'text-gray-500'}`}>{states[device.id] ? 'AÇIK' : 'KAPALI'}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SmartHomeModule;
