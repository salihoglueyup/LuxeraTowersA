import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, Wrench, Calendar, Bell, User, Settings, LogOut, Key, Package, Home,
  LayoutDashboard, History, Coffee, Users, Video, BatteryCharging
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../shared/seo/SEO';

// Import modules
import OzetModule from './modules/OzetModule';
import FinansModule from './modules/FinansModule';
import SmartHomeModule from './modules/SmartHomeModule';
import ZiyaretciModule from './modules/ZiyaretciModule';
import KargolarModule from './modules/KargolarModule';
import TaleplerModule from './modules/TaleplerModule';
import RezervasyonlarModule from './modules/RezervasyonlarModule';
import KonsiyerjModule from './modules/KonsiyerjModule';
import KameralarModule from './modules/KameralarModule';
import SarjModule from './modules/SarjModule';
import EtkinliklerModule from './modules/EtkinliklerModule';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ozet');

  const menuCategories = [
    {
      title: 'ANA EKRAN',
      items: [
        { id: 'ozet', label: 'Özet (Pano)', icon: <LayoutDashboard size={18} /> }
      ]
    },
    {
      title: 'FİNANS YÖNETİMİ',
      items: [
        { id: 'finans', label: 'Aidat & Faturalar', icon: <CreditCard size={18} /> },
      ]
    },
    {
      title: 'YAŞAM & HİZMETLER',
      items: [
        { id: 'smart-home', label: 'Akıllı Ev', icon: <Home size={18} /> },
        { id: 'talepler', label: 'Talepler & Servis', icon: <Wrench size={18} /> },
        { id: 'konsiyerj', label: 'Konsiyerj & VIP', icon: <Coffee size={18} /> },
        { id: 'ziyaretci', label: 'Misafir & Vale', icon: <Key size={18} /> },
        { id: 'kargolar', label: 'Kargolarım', icon: <Package size={18} /> }
      ]
    },
    {
      title: 'SOSYAL & TESİSLER',
      items: [
        { id: 'rezervasyonlar', label: 'Rezervasyonlarım', icon: <Calendar size={18} /> },
        { id: 'etkinlikler', label: 'Etkinlik & Topluluk', icon: <Users size={18} /> }
      ]
    },
    {
      title: 'GÜVENLİK & OTOPARK',
      items: [
        { id: 'kameralar', label: 'Canlı Kameralar', icon: <Video size={18} /> },
        { id: 'sarj', label: 'EV Şarj İstasyonu', icon: <BatteryCharging size={18} /> }
      ]
    }
  ];

  const handleLogout = () => {
    navigate('/portal/login');
  };

  const getTabLabel = (tabId) => {
    for (const cat of menuCategories) {
      const found = cat.items.find(i => i.id === tabId);
      if (found) return found.label;
    }
    return 'Ayarlar';
  };

  return (
    <div className="bg-luxera-navy min-h-screen text-white pt-24 pb-12">
      <SEO title="Yönetim Paneli | Luxera Towers" description="Luxera Towers dijital yönetim paneli." />

      <div className="max-w-[95rem] mx-auto px-4 md:px-6 h-full flex flex-col md:flex-row gap-8">
        
        {/* HIERARCHICAL SIDEBAR */}
        <div className="w-full md:w-64 lg:w-72 shrink-0">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md sticky top-32 shadow-2xl h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
            
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 bg-luxera-gold/20 rounded-full flex items-center justify-center border border-luxera-gold/30 shrink-0">
                <User size={20} className="text-luxera-gold" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-serif text-white truncate">Eyüp S.</h3>
                <p className="text-luxera-gold text-xs tracking-widest uppercase font-semibold">A Blok - Daire 42</p>
              </div>
            </div>

            <nav className="flex flex-col gap-6">
              {menuCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 px-2">{category.title}</h4>
                  <div className="flex flex-col gap-1">
                    {category.items.map(item => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 text-sm ${
                          activeTab === item.id 
                          ? 'bg-luxera-gold/10 text-luxera-gold border border-luxera-gold/20 font-semibold' 
                          : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                        }`}
                      >
                        <span className={activeTab === item.id ? 'text-luxera-gold' : 'text-gray-500'}>{item.icon}</span>
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2.5 w-full text-left text-red-400 hover:bg-red-400/10 rounded-xl transition-colors text-sm">
                <LogOut size={18} /> Çıkış Yap
              </button>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 min-w-0">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md mb-6 flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-serif text-white ml-2">{getTabLabel(activeTab)}</h2>
            <button className="relative p-2 text-gray-300 hover:text-white transition-colors bg-black/40 rounded-full border border-white/10">
              <Bell size={18} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-luxera-navy"></span>
            </button>
          </div>

          <div className="pb-12">
            <AnimatePresence mode="wait">
              {activeTab === 'ozet' && <OzetModule setActiveTab={setActiveTab} />}
              {activeTab === 'finans' && <FinansModule />}
              {activeTab === 'smart-home' && <SmartHomeModule />}
              {activeTab === 'ziyaretci' && <ZiyaretciModule />}
              {activeTab === 'kargolar' && <KargolarModule />}
              {activeTab === 'talepler' && <TaleplerModule />}
              {activeTab === 'rezervasyonlar' && <RezervasyonlarModule />}
              {activeTab === 'konsiyerj' && <KonsiyerjModule />}
              {activeTab === 'kameralar' && <KameralarModule />}
              {activeTab === 'sarj' && <SarjModule />}
              {activeTab === 'etkinlikler' && <EtkinliklerModule />}
              
              {/* Fallback for Settings/History etc */}
              {['gecmis-islemler'].includes(activeTab) && (
                <motion.div key="fallback" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="bg-white/5 border border-white/10 rounded-3xl p-16 backdrop-blur-md flex flex-col items-center justify-center text-center h-[400px]">
                  <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center text-luxera-gold mb-6 border border-white/10"><Settings size={28} /></div>
                  <h3 className="text-xl font-serif text-white mb-2">{getTabLabel(activeTab)} yükleniyor...</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
