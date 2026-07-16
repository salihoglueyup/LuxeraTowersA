import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Wine, Clock, CheckCircle, ChevronRight } from 'lucide-react';

const OdaServisiModule = () => {
  const [activeCategory, setActiveCategory] = useState('kahvalti');
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null); // null, 'hazirlaniyor', 'yolda', 'teslim_edildi'

  const menu = {
    kahvalti: [
      { id: 'k1', name: 'Luxera Özel Kahvaltı Tabağı', price: 450, desc: 'Organik yumurta, avokado, füme somon, artisan ekmekler.' },
      { id: 'k2', name: 'Eggs Benedict', price: 320, desc: 'Hollandaise sos, füme et, kızarmış brioche.' },
      { id: 'k3', name: 'Taze Sıkılmış Detoks Suyu', price: 150, desc: 'Elma, kereviz, zencefil, ıspanak.' }
    ],
    aksam: [
      { id: 'a1', name: 'Izgara Dana Bonfile', price: 1250, desc: 'Taze kuşkonmaz ve trüflü patates püresi ile.' },
      { id: 'a2', name: 'Somon Izgara', price: 850, desc: 'Kinoa salatası ve limonlu tereyağı sosu.' },
      { id: 'a3', name: 'Sezar Salata', price: 350, desc: 'Izgara tavuk göğsü, kruton ve parmesan.' }
    ],
    icecekler: [
      { id: 'i1', name: 'Premium Şarap Seçkisi', price: 2500, desc: 'Bordeaux 2018 (Şişe)' },
      { id: 'i2', name: 'Özel Harman Türk Kahvesi', price: 180, desc: 'Lokum ve su ile.' }
    ]
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleOrder = () => {
    if(cart.length === 0) return;
    setOrderStatus('hazirlaniyor');
    setTimeout(() => setOrderStatus('yolda'), 3000);
    setTimeout(() => setOrderStatus('teslim_edildi'), 6000);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <motion.div key="oda-servisi" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
      
      {/* Menu Area */}
      <div className="lg:col-span-2 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-serif text-white">Oda Servisi</h3>
          <div className="flex gap-2">
            <button onClick={() => setActiveCategory('kahvalti')} className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeCategory === 'kahvalti' ? 'bg-luxera-gold text-luxera-navy font-bold' : 'bg-black/40 text-gray-400 hover:text-white'}`}>Kahvaltı</button>
            <button onClick={() => setActiveCategory('aksam')} className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeCategory === 'aksam' ? 'bg-luxera-gold text-luxera-navy font-bold' : 'bg-black/40 text-gray-400 hover:text-white'}`}>Akşam Yemeği</button>
            <button onClick={() => setActiveCategory('icecekler')} className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeCategory === 'icecekler' ? 'bg-luxera-gold text-luxera-navy font-bold' : 'bg-black/40 text-gray-400 hover:text-white'}`}>İçecekler</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menu[activeCategory].map(item => (
            <div key={item.id} className="bg-black/40 border border-white/5 p-4 rounded-2xl group hover:border-luxera-gold/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-medium">{item.name}</h4>
                <span className="text-luxera-gold font-bold">₺{item.price}</span>
              </div>
              <p className="text-xs text-gray-400 mb-4 h-8">{item.desc}</p>
              <button onClick={() => addToCart(item)} className="w-full bg-white/5 hover:bg-luxera-gold hover:text-luxera-navy text-gray-300 py-2 rounded-xl text-sm transition-colors">
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart & Order Status */}
      <div className="space-y-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md h-fit">
          <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Siparişiniz</h3>
          
          {cart.length === 0 ? (
            <div className="text-center py-8 text-gray-500 text-sm">Sepetiniz boş.</div>
          ) : (
            <>
              <div className="space-y-4 mb-6 max-h-[200px] overflow-y-auto">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">{item.name}</span>
                    <span className="text-white font-medium">₺{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center border-t border-white/10 pt-4 mb-6">
                <span className="text-gray-400">Toplam</span>
                <span className="text-xl text-luxera-gold font-bold">₺{totalAmount}</span>
              </div>
              
              {!orderStatus ? (
                <button onClick={handleOrder} className="w-full bg-luxera-gold text-luxera-navy font-bold py-3 rounded-xl hover:bg-white transition-colors">
                  Daireme Getir
                </button>
              ) : (
                <div className="bg-black/40 rounded-xl p-4 border border-white/10 text-center">
                  {orderStatus === 'hazirlaniyor' && (
                    <div className="text-blue-400 flex flex-col items-center gap-2">
                      <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-semibold tracking-wider">HAZIRLANIYOR</span>
                    </div>
                  )}
                  {orderStatus === 'yolda' && (
                    <div className="text-luxera-gold flex flex-col items-center gap-2 animate-pulse">
                      <Utensils size={24} />
                      <span className="text-sm font-semibold tracking-wider">YOLDA</span>
                    </div>
                  )}
                  {orderStatus === 'teslim_edildi' && (
                    <div className="text-green-400 flex flex-col items-center gap-2">
                      <CheckCircle size={24} />
                      <span className="text-sm font-semibold tracking-wider">AFİYET OLSUN</span>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default OdaServisiModule;
