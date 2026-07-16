import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, Wrench, Calendar, Bell, User, Settings, LogOut, Key, Package, Home,
  LayoutDashboard, Coffee, Users, Video, BatteryCharging, ShoppingBag, Search, X, Check
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
import MarketplaceModule from './modules/MarketplaceModule';
import AyarlarModule from './modules/AyarlarModule';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ozet');
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
        { id: 'kargolar', label: 'Kargolarım', icon: <Package size={18} /> },
        { id: 'pazar-yeri', label: 'Pazar Yeri (İlanlar)', icon: <ShoppingBag size={18} /> }
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
    },
    {
      title: 'SİSTEM',
      items: [
        { id: 'ayarlar', label: 'Profil ve Ayarlar', icon: <Settings size={18} /> }
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
    return 'Modül';
  };

  // Mock Notifications
  const notifications = [
    { id: 1, title: 'Kargonuz Teslim Edildi', desc: 'Amazon TR paketiniz resepsiyonda.', time: '5 dk önce', read: false },
    { id: 2, title: 'Aidat Ödemesi Yaklaşıyor', desc: 'Aralık ayı aidatınızın son ödeme tarihi yaklaşıyor.', time: '2 saat önce', read: false },
    { id: 3, title: 'Yeni Etkinlik: Caz Gecesi', desc: 'Lobi Lounge\'da caz dinletisi var. Hemen yerinizi ayırtın.', time: 'Dün', read: true }
  ];

  return (
    <div className="bg-luxera-navy min-h-screen text-white pt-24 pb-12 relative overflow-hidden">
      <SEO title="Yönetim Paneli | Luxera Towers" description="Luxera Towers dijital yönetim paneli." />

      <div className="max-w-[95rem] mx-auto px-4 md:px-6 h-full flex flex-col md:flex-row gap-8 relative z-10">
        
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
                          ? 'bg-luxera-gold/10 text-luxera-gold border border-luxera-gold/20 font-semibold shadow-[0_0_15px_rgba(212,175,55,0.1)]' 
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
          
          {/* TOP HEADER BAR */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-md mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl md:text-2xl font-serif text-white ml-2 whitespace-nowrap">{getTabLabel(activeTab)}</h2>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Modüllerde ara..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:border-luxera-gold outline-none transition-colors"
                />
              </div>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2.5 text-gray-300 hover:text-white transition-colors bg-black/40 rounded-full border border-white/10 hover:border-luxera-gold/50"
              >
                <Bell size={18} />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-luxera-navy"></span>
              </button>
            </div>
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
              {activeTab === 'pazar-yeri' && <MarketplaceModule />}
              {activeTab === 'ayarlar' && <AyarlarModule />}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* NOTIFICATIONS DRAWER */}
      <AnimatePresence>
        {showNotifications && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowNotifications(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-96 bg-luxera-navy border-l border-white/10 z-50 p-6 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-serif text-white flex items-center gap-2">
                  <Bell size={20} className="text-luxera-gold"/> Bildirimler
                </h3>
                <button onClick={() => setShowNotifications(false)} className="text-gray-400 hover:text-white p-2 bg-white/5 rounded-full">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2">
                {notifications.map(notif => (
                  <div key={notif.id} className={`p-4 rounded-2xl border transition-colors ${notif.read ? 'bg-white/5 border-white/5' : 'bg-luxera-gold/10 border-luxera-gold/30'}`}>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-white font-medium text-sm">{notif.title}</h4>
                      {!notif.read && <span className="w-2 h-2 bg-luxera-gold rounded-full mt-1.5"></span>}
                    </div>
                    <p className="text-gray-400 text-xs mb-3">{notif.desc}</p>
                    <div className="flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                      <span>{notif.time}</span>
                      {!notif.read && <button className="text-luxera-gold hover:text-white flex items-center gap-1"><Check size={12}/> Okundu İşaretle</button>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-auto">
                <button className="w-full py-3 text-sm text-gray-400 hover:text-white bg-white/5 rounded-xl border border-white/10 transition-colors">
                  Tümünü Okundu İşaretle
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Dashboard;
