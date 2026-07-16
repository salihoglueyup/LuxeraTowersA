import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Users, Building, ShieldCheck } from 'lucide-react';

const BelgelerModule = () => {
  const [downloading, setDownloading] = useState(null);

  const handleDownload = (id) => {
    setDownloading(id);
    setTimeout(() => {
      setDownloading(null);
    }, 1500);
  };

  const docs = [
    { id: 1, title: '2025 Kasım Yönetim Kurulu Toplantı Tutanakları', type: 'Tutanak', size: '2.4 MB', icon: <Users /> },
    { id: 2, title: '2025 Yılı Tahmini Bütçe ve Gider Dağılımı', type: 'Finans', size: '1.8 MB', icon: <Building /> },
    { id: 3, title: 'Site Ortak Alan Kullanım Kuralları Manifestosu', type: 'Kurallar', size: '4.1 MB', icon: <ShieldCheck /> },
    { id: 4, title: 'Deprem ve Acil Durum Tahliye Planı', type: 'Güvenlik', size: '5.2 MB', icon: <ShieldCheck /> }
  ];

  return (
    <motion.div key="belgeler" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
      <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-serif text-white mb-1">Yönetim ve Belgeler</h3>
          <p className="text-sm text-gray-400">Site yönetimi tarafından yayınlanan resmi evraklar ve kurallar.</p>
        </div>
        <div className="bg-luxera-gold/10 text-luxera-gold px-4 py-2 rounded-lg border border-luxera-gold/30 text-sm font-bold flex items-center gap-2">
           <FileText size={18} /> Apsiyon Entegrasyonu
        </div>
      </div>

      <div className="space-y-4">
        {docs.map(doc => (
          <div key={doc.id} className="flex justify-between items-center p-5 bg-black/40 rounded-2xl border border-white/5 group hover:border-luxera-gold/30 transition-colors">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-luxera-gold transition-colors">
                {doc.icon}
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">{doc.title}</h4>
                <div className="flex items-center gap-3 mt-1 text-xs">
                  <span className="text-luxera-gold font-semibold uppercase tracking-wider">{doc.type}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">PDF Document</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{doc.size}</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => handleDownload(doc.id)}
              className="w-12 h-12 rounded-xl bg-white/5 hover:bg-luxera-gold hover:text-luxera-navy text-gray-300 flex items-center justify-center transition-colors border border-white/10 shrink-0"
              title="İndir"
            >
              {downloading === doc.id ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Download size={20} />
              )}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BelgelerModule;
