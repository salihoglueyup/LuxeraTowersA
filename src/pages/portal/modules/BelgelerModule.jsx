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

  const boardMembers = [
    { id: 1, name: 'Ahmet Yılmaz', role: 'Yönetim Kurulu Başkanı', contact: 'ahmet.y@luxeratowers.com' },
    { id: 2, name: 'Ayşe Demir', role: 'Site Müdürü', contact: 'ayse.d@luxeratowers.com' },
    { id: 3, name: 'Can Öztürk', role: 'Mali İşler & Aidat', contact: 'finans@luxeratowers.com' }
  ];

  return (
    <div className="space-y-6">
      {/* Yönetim Kurulu & Apsiyon */}
      <motion.div key="yonetim" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Apsiyon Card */}
        <div className="bg-luxera-gold/10 border border-luxera-gold/30 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 bg-luxera-gold/20 rounded-full flex items-center justify-center text-luxera-gold mb-4">
            <Building size={32} />
          </div>
          <h3 className="text-xl font-serif text-white mb-2">Apsiyon Yönetim Sistemi</h3>
          <p className="text-sm text-gray-400 mb-6">Aidat ödemelerinizi, finansal raporlarınızı ve resmi borç durumunuzu güvenli bir şekilde takip edin.</p>
          <a href="#" className="w-full bg-luxera-gold text-luxera-navy font-bold py-3 rounded-xl hover:bg-white transition-colors">
            Apsiyon'a Giriş Yap
          </a>
        </div>

        {/* Board Members */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
          <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Yönetim Kurulu & İletişim</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {boardMembers.map(member => (
              <div key={member.id} className="bg-black/40 p-4 rounded-2xl border border-white/5">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 mb-3">
                  <Users size={18} />
                </div>
                <h4 className="text-white font-medium text-sm">{member.name}</h4>
                <p className="text-luxera-gold text-xs font-bold uppercase tracking-wider mt-1 mb-2">{member.role}</p>
                <a href={`mailto:${member.contact}`} className="text-gray-400 text-xs hover:text-white transition-colors">{member.contact}</a>
              </div>
            ))}
          </div>
        </div>

      </motion.div>

      {/* Documents */}
      <motion.div key="belgeler" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
      <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-serif text-white mb-1">Yönetim Belgeleri</h3>
          <p className="text-sm text-gray-400">Site yönetimi tarafından yayınlanan resmi evraklar ve kurallar.</p>
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
    </div>
  );
};

export default BelgelerModule;
