import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Tag, Search, MapPin } from 'lucide-react';

const MarketplaceModule = () => {
  const { t } = useTranslation();
  const categories = t('portal.marketplace.categories', { returnObjects: true });
  const listings = [
    { id: 1, title: t('portal.marketplace.l1title'), price: '₺450,000', seller: 'Eyüp S. (A Blok)', category: t('portal.marketplace.l1cat'), img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2000&auto=format&fit=crop' },
    { id: 2, title: t('portal.marketplace.l2title'), price: '₺1,500 / Saat', seller: 'Ceren K. (B Blok)', category: t('portal.marketplace.l2cat'), img: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2000&auto=format&fit=crop' },
    { id: 3, title: t('portal.marketplace.l3title'), price: '₺45,000', seller: 'Hakan Y. (A Blok)', category: t('portal.marketplace.l3cat'), img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2000&auto=format&fit=crop' },
    { id: 4, title: t('portal.marketplace.l4title'), price: '₺120,000', seller: 'Ayşe T. (B Blok)', category: t('portal.marketplace.l4cat'), img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2000&auto=format&fit=crop' }
  ];

  return (
    <motion.div key="marketplace" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
      
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder={t('portal.marketplace.searchPlaceholder')}
            className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white focus:border-luxera-gold outline-none"
          />
        </div>
        <button className="bg-luxera-gold text-luxera-navy px-6 py-2 rounded-xl font-bold hover:bg-white transition-colors w-full md:w-auto">
          {t('portal.marketplace.newListing')}
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto custom-scrollbar pb-2">
        {categories.map((cat, idx) => (
          <button key={idx} className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-luxera-gold text-luxera-navy' : 'bg-black/40 text-gray-400 border border-white/10 hover:text-white hover:border-white/30'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map(item => (
          <div key={item.id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-luxera-gold/30 transition-all cursor-pointer">
            <div className="h-48 overflow-hidden relative">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <Tag size={12} className="text-luxera-gold" /> {item.category}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white font-medium mb-1 truncate">{item.title}</h3>
              <p className="text-luxera-gold font-bold text-lg mb-4">{item.price}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400 pt-4 border-t border-white/5">
                <MapPin size={12} />
                <span>{item.seller}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MarketplaceModule;
