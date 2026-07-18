import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Package } from 'lucide-react';

const KargolarModule = () => {
  const { t } = useTranslation();
  return (
  <motion.div key="kargolar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
    <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3"><Package className="text-luxera-gold"/> {t('portal.kargolar.title')}</h3>
    <div className="space-y-4">
      {[
        { sender: 'Amazon TR', code: 'TR-1928374', date: t('portal.kargolar.date1'), status: t('portal.kargolar.waiting'), active: true },
        { sender: 'Yurtiçi Kargo', code: 'YK-554122', date: t('portal.kargolar.date2'), status: t('portal.kargolar.received'), active: false },
        { sender: 'Trendyol', code: 'TY-9988221', date: t('portal.kargolar.date3'), status: t('portal.kargolar.received'), active: false }
      ].map((kargo, i) => (
        <div key={i} className={`flex justify-between items-center p-5 rounded-2xl border transition-colors ${kargo.active ? 'bg-luxera-gold/10 border-luxera-gold/30' : 'bg-black/40 border-white/5'}`}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${kargo.active ? 'bg-luxera-gold text-luxera-navy' : 'bg-white/10 text-gray-400'}`}>
              <Package size={20} />
            </div>
            <div>
              <p className="text-white font-medium text-lg">{kargo.sender}</p>
              <p className="text-sm text-gray-400">{t('portal.kargolar.trackNo')} {kargo.code}</p>
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
};

export default KargolarModule;
