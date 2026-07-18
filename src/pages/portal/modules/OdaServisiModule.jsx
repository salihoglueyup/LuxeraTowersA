import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Utensils, Coffee, Wine, Clock, CheckCircle, ChevronRight } from 'lucide-react';

const OdaServisiModule = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('kahvalti');
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null); // null, 'hazirlaniyor', 'yolda', 'teslim_edildi'

  const menu = {
    kahvalti: [
      { id: 'k1', name: t('portal.oda.k1n'), price: 450, desc: t('portal.oda.k1d') },
      { id: 'k2', name: t('portal.oda.k2n'), price: 320, desc: t('portal.oda.k2d') },
      { id: 'k3', name: t('portal.oda.k3n'), price: 150, desc: t('portal.oda.k3d') }
    ],
    aksam: [
      { id: 'a1', name: t('portal.oda.a1n'), price: 1250, desc: t('portal.oda.a1d') },
      { id: 'a2', name: t('portal.oda.a2n'), price: 850, desc: t('portal.oda.a2d') },
      { id: 'a3', name: t('portal.oda.a3n'), price: 350, desc: t('portal.oda.a3d') }
    ],
    icecekler: [
      { id: 'i1', name: t('portal.oda.i1n'), price: 2500, desc: t('portal.oda.i1d') },
      { id: 'i2', name: t('portal.oda.i2n'), price: 180, desc: t('portal.oda.i2d') }
    ],
    restoranlar: [
      { id: 'r1', name: t('portal.oda.r1n'), price: 0, desc: t('portal.oda.r1d') },
      { id: 'r2', name: t('portal.oda.r2n'), price: 0, desc: t('portal.oda.r2d') },
      { id: 'r3', name: t('portal.oda.r3n'), price: 0, desc: t('portal.oda.r3d') }
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
          <h3 className="text-xl font-serif text-white">{t('portal.oda.title')}</h3>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            <button onClick={() => setActiveCategory('restoranlar')} className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-colors ${activeCategory === 'restoranlar' ? 'bg-luxera-gold text-luxera-navy font-bold' : 'bg-black/40 text-gray-400 hover:text-white'}`}>{t('portal.oda.catRestaurants')}</button>
            <button onClick={() => setActiveCategory('kahvalti')} className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-colors ${activeCategory === 'kahvalti' ? 'bg-luxera-gold text-luxera-navy font-bold' : 'bg-black/40 text-gray-400 hover:text-white'}`}>{t('portal.oda.catBreakfast')}</button>
            <button onClick={() => setActiveCategory('aksam')} className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-colors ${activeCategory === 'aksam' ? 'bg-luxera-gold text-luxera-navy font-bold' : 'bg-black/40 text-gray-400 hover:text-white'}`}>{t('portal.oda.catDinner')}</button>
            <button onClick={() => setActiveCategory('icecekler')} className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-colors ${activeCategory === 'icecekler' ? 'bg-luxera-gold text-luxera-navy font-bold' : 'bg-black/40 text-gray-400 hover:text-white'}`}>{t('portal.oda.catDrinks')}</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menu[activeCategory].map(item => (
            <div key={item.id} className="bg-black/40 border border-white/5 p-4 rounded-2xl group hover:border-luxera-gold/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-medium">{item.name}</h4>
                {item.price > 0 && <span className="text-luxera-gold font-bold">₺{item.price}</span>}
              </div>
              <p className="text-xs text-gray-400 mb-4 h-8">{item.desc}</p>
              <button onClick={() => addToCart(item)} className="w-full bg-white/5 hover:bg-luxera-gold hover:text-luxera-navy text-gray-300 py-2 rounded-xl text-sm transition-colors">
                {activeCategory === 'restoranlar' ? t('portal.oda.reserveBtn') : t('portal.oda.addCart')}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart & Order Status */}
      <div className="space-y-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md h-fit">
          <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">{t('portal.oda.orderTitle')}</h3>

          {cart.length === 0 ? (
            <div className="text-center py-8 text-gray-500 text-sm">{t('portal.oda.emptyCart')}</div>
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
                <span className="text-gray-400">{t('portal.oda.total')}</span>
                <span className="text-xl text-luxera-gold font-bold">₺{totalAmount}</span>
              </div>
              
              {!orderStatus ? (
                <button onClick={handleOrder} className="w-full bg-luxera-gold text-luxera-navy font-bold py-3 rounded-xl hover:bg-white transition-colors">
                  {t('portal.oda.deliverBtn')}
                </button>
              ) : (
                <div className="bg-black/40 rounded-xl p-4 border border-white/10 text-center">
                  {orderStatus === 'hazirlaniyor' && (
                    <div className="text-blue-400 flex flex-col items-center gap-2">
                      <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-semibold tracking-wider">{t('portal.oda.statusPreparing')}</span>
                    </div>
                  )}
                  {orderStatus === 'yolda' && (
                    <div className="text-luxera-gold flex flex-col items-center gap-2 animate-pulse">
                      <Utensils size={24} />
                      <span className="text-sm font-semibold tracking-wider">{t('portal.oda.statusOnway')}</span>
                    </div>
                  )}
                  {orderStatus === 'teslim_edildi' && (
                    <div className="text-green-400 flex flex-col items-center gap-2">
                      <CheckCircle size={24} />
                      <span className="text-sm font-semibold tracking-wider">{t('portal.oda.statusDelivered')}</span>
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
