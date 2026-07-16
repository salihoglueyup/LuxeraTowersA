import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, Wrench, Calendar, Bell, User, Settings, LogOut, ChevronRight, 
  Clock, AlertCircle, Home, Key, Package, Zap, Thermometer, Download, CheckCircle, Car
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../../shared/seo/SEO';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ozet');
  const [smartHomeStates, setSmartHomeStates] = useState({
    livingRoomLight: true,
    bedroomLight: false,
    ac: true,
    curtains: false,
    temp: 22
  });

  const menuItems = [
    { id: 'ozet', label: 'Özet (Pano)', icon: <User size={20} /> },
    { id: 'finans', label: 'Aidat & Ödemeler', icon: <CreditCard size={20} /> },
    { id: 'smart-home', label: 'Akıllı Ev', icon: <Home size={20} /> },
    { id: 'ziyaretci', label: 'Misafir & Vale', icon: <Key size={20} /> },
    { id: 'talepler', label: 'Taleplerim', icon: <Wrench size={20} /> },
    { id: 'rezervasyonlar', label: 'Rezervasyonlarım', icon: <Calendar size={20} /> },
    { id: 'kargolar', label: 'Kargolarım', icon: <Package size={20} /> },
    { id: 'ayarlar', label: 'Hesap Ayarları', icon: <Settings size={20} /> }
  ];

  const handleLogout = () => {
    navigate('/portal/login');
  };

  // --- MODULE COMPONENTS --- //

  const OzetModule = () => (
    <motion.div 
      key="ozet" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      <div className="bg-gradient-to-br from-luxera-charcoal to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-luxera-gold/30 transition-colors shadow-2xl">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><CreditCard size={80} className="text-luxera-gold" /></div>
        <h4 className="text-gray-400 font-semibold mb-2 flex items-center gap-2"><CreditCard size={16}/> Güncel Borç Bakiyesi</h4>
        <p className="text-4xl font-serif text-white mb-1">₺8,500<span className="text-sm text-gray-500 font-sans">.00</span></p>
        <p className="text-luxera-gold text-xs font-semibold uppercase tracking-wider mb-8">Son Ödeme: 25 Aralık 2025</p>
        <button onClick={() => setActiveTab('finans')} className="w-full bg-luxera-gold text-luxera-navy font-bold py-3 rounded-xl hover:bg-white transition-colors">
          Hemen Öde
        </button>
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
        </div>
      </div>
    </motion.div>
  );

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
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
          <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Geçmiş İşlemler</h3>
          <div className="space-y-4">
            {[
              { desc: 'Kasım 2025 Aidatı', date: '01.11.2025', amount: '₺8,500', status: 'Ödendi' },
              { desc: 'Ekim 2025 Aidatı', date: '01.10.2025', amount: '₺8,500', status: 'Ödendi' },
              { desc: 'Havuz Rezervasyonu (Ekstra)', date: '15.09.2025', amount: '₺450', status: 'Ödendi' }
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

  const SmartHomeModule = () => (
    <motion.div key="smarthome" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center py-12 md:col-span-1">
          <Thermometer size={48} className="text-luxera-gold mb-4" />
          <h3 className="text-gray-400 font-medium mb-4">Salon Sıcaklığı</h3>
          <div className="text-6xl font-serif text-white mb-6">{smartHomeStates.temp}°C</div>
          <div className="flex gap-4">
            <button onClick={() => setSmartHomeStates(s => ({...s, temp: s.temp - 1}))} className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white border border-white/10 hover:border-luxera-gold transition-colors">-</button>
            <button onClick={() => setSmartHomeStates(s => ({...s, temp: s.temp + 1}))} className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white border border-white/10 hover:border-luxera-gold transition-colors">+</button>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          {[
            { id: 'livingRoomLight', label: 'Salon Aydınlatma', icon: <Zap size={24} /> },
            { id: 'bedroomLight', label: 'Yatak Odası', icon: <Zap size={24} /> },
            { id: 'ac', label: 'Merkezi Klima', icon: <Thermometer size={24} /> },
            { id: 'curtains', label: 'Akıllı Perdeler', icon: <Home size={24} /> }
          ].map(device => (
            <div key={device.id} className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${smartHomeStates[device.id] ? 'bg-luxera-gold/10 border-luxera-gold/50' : 'bg-white/5 border-white/10'}`} onClick={() => setSmartHomeStates(s => ({...s, [device.id]: !s[device.id]}))}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${smartHomeStates[device.id] ? 'bg-luxera-gold text-luxera-navy' : 'bg-black/40 text-gray-400'}`}>
                {device.icon}
              </div>
              <h4 className="text-white font-medium">{device.label}</h4>
              <p className={`text-xs mt-1 font-bold ${smartHomeStates[device.id] ? 'text-luxera-gold' : 'text-gray-500'}`}>{smartHomeStates[device.id] ? 'AÇIK' : 'KAPALI'}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const ZiyaretciModule = () => (
    <motion.div key="ziyaretci" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
          <Key className="text-luxera-gold" size={28} />
          <h3 className="text-xl font-serif text-white">QR Ziyaretçi Kaydı</h3>
        </div>
        <p className="text-sm text-gray-400 mb-6">Misafirinizin adını girerek güvenlik noktasından hızlı geçiş yapabileceği tek kullanımlık bir QR kod oluşturun.</p>
        <div className="space-y-4 mb-6">
          <input type="text" placeholder="Misafir Adı Soyadı" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
          <input type="text" placeholder="Araç Plakası (Opsiyonel)" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
        </div>
        <button className="w-full bg-luxera-gold text-luxera-navy font-bold py-4 rounded-xl hover:bg-white transition-all">QR Kod Üret</button>
      </div>
      <div className="bg-gradient-to-br from-luxera-navy to-black border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center text-center">
        <Car size={64} className="text-luxera-gold mb-6" />
        <h3 className="text-2xl font-serif text-white mb-2">Vale Çağır</h3>
        <p className="text-gray-400 mb-8 max-w-xs">Aracınızın çıkış kapısına getirilmesi yaklaşık 5-7 dakika sürmektedir.</p>
        <button className="bg-white text-luxera-navy font-bold py-4 px-12 rounded-full hover:bg-luxera-gold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] text-lg uppercase tracking-widest">
          Aracımı Hazırla
        </button>
      </div>
    </motion.div>
  );

  const KargolarModule = () => (
    <motion.div key="kargolar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
      <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3"><Package className="text-luxera-gold"/> Resepsiyondaki Kargolarım</h3>
      <div className="space-y-4">
        {[
          { sender: 'Amazon TR', code: 'TR-1928374', date: 'Bugün 14:20', status: 'Resepsiyonda Bekliyor', active: true },
          { sender: 'Yurtiçi Kargo', code: 'YK-554122', date: 'Dün 10:15', status: 'Teslim Alındı', active: false }
        ].map((kargo, i) => (
          <div key={i} className={`flex justify-between items-center p-5 rounded-2xl border transition-colors ${kargo.active ? 'bg-luxera-gold/10 border-luxera-gold/30' : 'bg-black/40 border-white/5'}`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${kargo.active ? 'bg-luxera-gold text-luxera-navy' : 'bg-white/10 text-gray-400'}`}>
                <Package size={20} />
              </div>
              <div>
                <p className="text-white font-medium text-lg">{kargo.sender}</p>
                <p className="text-sm text-gray-400">Takip No: {kargo.code}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-bold uppercase tracking-wider mb-1 ${kargo.active ? 'text-luxera-gold' : 'text-gray-500'}`}>{kargo.status}</p>
              <p className="text-xs text-gray-400">{kargo.date}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  // Generic Placeholder for others
  const PlaceholderModule = ({ title }) => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="bg-white/5 border border-white/10 rounded-3xl p-16 backdrop-blur-md flex flex-col items-center justify-center text-center h-[500px]">
      <div className="w-20 h-20 bg-black/40 rounded-full flex items-center justify-center text-luxera-gold mb-6 border border-white/10"><Wrench size={32} /></div>
      <h3 className="text-2xl font-serif text-white mb-2">{title} modülü yapım aşamasında.</h3>
      <p className="text-gray-400 max-w-md">Lüks yaşam standartlarınıza uygun bir deneyim sunmak için bu modül üzerinde titizlikle çalışıyoruz.</p>
    </motion.div>
  );

  return (
    <div className="bg-luxera-navy min-h-screen text-white pt-24 pb-12">
      <SEO title="Yönetim Paneli | Luxera Towers" description="Luxera Towers dijital yönetim paneli." />

      <div className="max-w-[95rem] mx-auto px-4 md:px-6 h-full flex flex-col md:flex-row gap-6">
        
        {/* SIDEBAR */}
        <div className="w-full md:w-64 lg:w-72 shrink-0">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md sticky top-32 shadow-2xl">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
              <div className="w-14 h-14 bg-luxera-gold/20 rounded-full flex items-center justify-center border border-luxera-gold/30">
                <User size={24} className="text-luxera-gold" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-white">Eyüp S.</h3>
                <p className="text-luxera-gold text-xs tracking-widest uppercase font-semibold">A Blok - Daire 42</p>
              </div>
            </div>

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

            <button onClick={handleLogout} className="mt-8 flex items-center gap-4 px-4 py-3 w-full text-left text-red-400 hover:bg-red-400/10 rounded-xl transition-colors">
              <LogOut size={20} /> Çıkış Yap
            </button>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-serif text-white ml-2">{menuItems.find(i => i.id === activeTab)?.label}</h2>
            <button className="relative p-2 text-gray-300 hover:text-white transition-colors bg-black/40 rounded-full border border-white/10">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-luxera-navy"></span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'ozet' && <OzetModule />}
            {activeTab === 'finans' && <FinansModule />}
            {activeTab === 'smart-home' && <SmartHomeModule />}
            {activeTab === 'ziyaretci' && <ZiyaretciModule />}
            {activeTab === 'kargolar' && <KargolarModule />}
            {['talepler', 'rezervasyonlar', 'ayarlar'].includes(activeTab) && <PlaceholderModule title={menuItems.find(i => i.id === activeTab)?.label} />}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
