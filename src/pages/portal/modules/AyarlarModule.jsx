import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Bell, Moon, Sun, Monitor } from 'lucide-react';

const AyarlarModule = () => {
  const [theme, setTheme] = useState('system');

  return (
    <motion.div key="ayarlar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-luxera-gold/20 rounded-full flex items-center justify-center border-2 border-luxera-gold">
                <User size={40} className="text-luxera-gold" />
              </div>
              <button className="absolute bottom-0 right-0 bg-luxera-gold text-luxera-navy p-1.5 rounded-full hover:bg-white transition-colors">
                <User size={14} />
              </button>
            </div>
            <h3 className="text-xl font-serif text-white mb-1">Eyüp S.</h3>
            <p className="text-luxera-gold text-xs uppercase tracking-widest font-semibold mb-4">A Blok - Daire 42</p>
            <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/30">Hesap Onaylı</span>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
            <h4 className="text-gray-400 font-semibold mb-4 text-sm uppercase tracking-wider">Arayüz Teması</h4>
            <div className="flex gap-2">
              <button onClick={() => setTheme('light')} className={`flex-1 py-3 rounded-xl flex flex-col items-center gap-2 border transition-colors ${theme === 'light' ? 'bg-luxera-gold/10 border-luxera-gold text-luxera-gold' : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/30'}`}>
                <Sun size={20} />
                <span className="text-xs font-medium">Açık</span>
              </button>
              <button onClick={() => setTheme('dark')} className={`flex-1 py-3 rounded-xl flex flex-col items-center gap-2 border transition-colors ${theme === 'dark' ? 'bg-luxera-gold/10 border-luxera-gold text-luxera-gold' : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/30'}`}>
                <Moon size={20} />
                <span className="text-xs font-medium">Koyu</span>
              </button>
              <button onClick={() => setTheme('system')} className={`flex-1 py-3 rounded-xl flex flex-col items-center gap-2 border transition-colors ${theme === 'system' ? 'bg-luxera-gold/10 border-luxera-gold text-luxera-gold' : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/30'}`}>
                <Monitor size={20} />
                <span className="text-xs font-medium">Sistem</span>
              </button>
            </div>
          </div>
        </div>

        {/* Forms Area */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Personal Info Form */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Kişisel Bilgiler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Ad Soyad</label>
                <input type="text" defaultValue="Eyüp S." className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Telefon Numarası</label>
                <input type="text" defaultValue="+90 (555) 123 45 67" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">E-Posta Adresi</label>
                <input type="email" defaultValue="eyup@example.com" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Plaka</label>
                <input type="text" defaultValue="34 LXR 042" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
              </div>
            </div>
            <button className="bg-luxera-gold text-luxera-navy font-bold px-8 py-3 rounded-xl hover:bg-white transition-colors">Değişiklikleri Kaydet</button>
          </div>

          {/* Security & Notifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
              <h3 className="text-lg font-serif text-white mb-6 flex items-center gap-2"><Lock size={18} className="text-luxera-gold"/> Güvenlik</h3>
              <div className="space-y-4 mb-6">
                <input type="password" placeholder="Mevcut Şifre" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
                <input type="password" placeholder="Yeni Şifre" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
                <input type="password" placeholder="Yeni Şifre (Tekrar)" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
              </div>
              <button className="w-full bg-white/10 text-white font-bold py-3 rounded-xl hover:bg-luxera-gold hover:text-luxera-navy transition-colors">Şifreyi Güncelle</button>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
              <h3 className="text-lg font-serif text-white mb-6 flex items-center gap-2"><Bell size={18} className="text-luxera-gold"/> Bildirim Tercihleri</h3>
              <div className="space-y-6">
                {[
                  { label: 'E-Posta Bildirimleri', desc: 'Aidat ve duyuru mailleri', defaultChecked: true },
                  { label: 'SMS Bildirimleri', desc: 'Acil durum ve vale mesajları', defaultChecked: true },
                  { label: 'Push Bildirimleri', desc: 'Tarayıcı içi anlık uyarılar', defaultChecked: true },
                  { label: 'Pazarlama İletileri', desc: 'Özel kampanya ve teklifler', defaultChecked: false }
                ].map((pref, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="text-white text-sm font-medium">{pref.label}</p>
                      <p className="text-xs text-gray-500">{pref.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={pref.defaultChecked} />
                      <div className="w-11 h-6 bg-black/40 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-luxera-gold"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </motion.div>
  );
};

export default AyarlarModule;
