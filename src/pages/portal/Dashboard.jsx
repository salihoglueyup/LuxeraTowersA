import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Wrench, 
  Calendar, 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  ChevronRight, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../../shared/seo/SEO';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ozet');

  const menuItems = [
    { id: 'ozet', label: 'Özet (Pano)', icon: <User size={20} /> },
    { id: 'finans', label: 'Aidat & Ödemeler', icon: <CreditCard size={20} /> },
    { id: 'talepler', label: 'Taleplerim', icon: <Wrench size={20} /> },
    { id: 'rezervasyonlar', label: 'Rezervasyonlarım', icon: <Calendar size={20} /> },
    { id: 'ayarlar', label: 'Hesap Ayarları', icon: <Settings size={20} /> }
  ];

  const handleLogout = () => {
    navigate('/portal/login');
  };

  return (
    <div className="bg-luxera-navy min-h-screen text-white pt-24 pb-12">
      <SEO 
        title="Yönetim Paneli | Luxera Towers"
        description="Luxera Towers sakinlerine özel dijital yönetim paneli."
      />

      <div className="max-w-[95rem] mx-auto px-4 md:px-6 h-full flex flex-col md:flex-row gap-6">
        
        {/* SIDEBAR */}
        <div className="w-full md:w-64 lg:w-72 shrink-0">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md sticky top-32">
            
            {/* User Profile Snippet */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
              <div className="w-14 h-14 bg-luxera-gold/20 rounded-full flex items-center justify-center border border-luxera-gold/30">
                <User size={24} className="text-luxera-gold" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-white">Eyüp S.</h3>
                <p className="text-luxera-gold text-xs tracking-widest uppercase font-semibold">A Blok - Daire 42</p>
              </div>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-2">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === item.id 
                    ? 'bg-luxera-gold text-luxera-navy shadow-[0_0_15px_rgba(212,175,55,0.3)] font-semibold' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {activeTab === item.id && <ChevronRight size={16} className="ml-auto" />}
                </button>
              ))}
            </nav>

            <button 
              onClick={handleLogout}
              className="mt-8 flex items-center gap-4 px-4 py-3 w-full text-left text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
            >
              <LogOut size={20} /> Çıkış Yap
            </button>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1">
          {/* Topbar for notifications */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-serif text-white ml-2">Yönetim Paneli</h2>
            <button className="relative p-2 text-gray-300 hover:text-white transition-colors bg-black/40 rounded-full border border-white/10">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-luxera-navy"></span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'ozet' && (
              <motion.div 
                key="ozet"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {/* Finance Widget */}
                <div className="bg-gradient-to-br from-luxera-charcoal to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-luxera-gold/30 transition-colors shadow-2xl">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><CreditCard size={80} className="text-luxera-gold" /></div>
                  <h4 className="text-gray-400 font-semibold mb-2 flex items-center gap-2"><CreditCard size={16}/> Güncel Borç Bakiyesi</h4>
                  <p className="text-4xl font-serif text-white mb-1">₺8,500<span className="text-sm text-gray-500 font-sans">.00</span></p>
                  <p className="text-luxera-gold text-xs font-semibold uppercase tracking-wider mb-8">Son Ödeme: 25 Aralık 2025</p>
                  <button className="w-full bg-luxera-gold text-luxera-navy font-bold py-3 rounded-xl hover:bg-white transition-colors">
                    Hemen Öde
                  </button>
                </div>

                {/* Tech Request Widget */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-colors">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Wrench size={80} className="text-white" /></div>
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-gray-400 font-semibold flex items-center gap-2"><Wrench size={16}/> Aktif Talepler</h4>
                    <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30">1 Açık</span>
                  </div>
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <p className="text-white font-medium mb-1">Akıllı Ev Paneli Arızası</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1 mb-3"><Clock size={12}/> Oluşturulma: Dün 14:30</p>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-1/2 rounded-full"></div>
                    </div>
                    <p className="text-xs text-blue-400 mt-2 font-semibold">Durum: Teknik ekip yönlendirildi</p>
                  </div>
                </div>

                {/* Reservations Widget */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-colors md:col-span-2 xl:col-span-1">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Calendar size={80} className="text-white" /></div>
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-gray-400 font-semibold flex items-center gap-2"><Calendar size={16}/> Yaklaşan Rezervasyon</h4>
                  </div>
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4 flex gap-4 items-center">
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

                {/* Announcements Widget */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md md:col-span-2 xl:col-span-3">
                  <h4 className="text-gray-400 font-semibold mb-6 flex items-center gap-2"><AlertCircle size={16}/> Yönetim Duyuruları</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-white/20 transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-luxera-gold/20 rounded-full flex items-center justify-center border border-luxera-gold/30 shrink-0 text-luxera-gold">
                        <Bell size={18} />
                      </div>
                      <div>
                        <h5 className="text-white font-medium mb-1">Kışlık Havuz Bakımı Hakkında</h5>
                        <p className="text-sm text-gray-400 line-clamp-2">Sayın sakinlerimiz, 05-08 Aralık tarihleri arasında kapalı yüzme havuzumuzda periyodik kış bakımı yapılacaktır. Bu tarihlerde havuzumuz kullanıma kapalı olacaktır. Anlayışınız için teşekkür ederiz.</p>
                        <p className="text-xs text-luxera-gold mt-2">2 Saat Önce</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-white/20 transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shrink-0 text-white">
                        <Bell size={18} />
                      </div>
                      <div>
                        <h5 className="text-white font-medium mb-1">Yeni Yıl Daveti: Lobi Lounge Caz Dinletisi</h5>
                        <p className="text-sm text-gray-400 line-clamp-2">Yeni yıla yaklaşırken, 25 Aralık Çarşamba akşamı saat 20:00'da ana lobimizde düzenlenecek olan caz dinletimize tüm site sakinlerimiz davetlidir.</p>
                        <p className="text-xs text-gray-500 mt-2">1 Gün Önce</p>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* Other tabs can be empty placeholders for now */}
            {activeTab !== 'ozet' && (
              <motion.div 
                key="other"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-16 backdrop-blur-md flex flex-col items-center justify-center text-center h-[500px]"
              >
                <div className="w-20 h-20 bg-black/40 rounded-full flex items-center justify-center text-luxera-gold mb-6 border border-white/10">
                  <Settings size={32} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Bu modül yapım aşamasında.</h3>
                <p className="text-gray-400 max-w-md">Seçtiğiniz "{menuItems.find(i => i.id === activeTab)?.label}" modülü şu an entegrasyon sürecindedir. Lütfen daha sonra tekrar deneyin.</p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
