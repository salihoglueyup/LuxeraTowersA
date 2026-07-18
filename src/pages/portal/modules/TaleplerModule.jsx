import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Clock, Wrench, CheckCircle, MoreHorizontal, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TaleplerModule = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [requests, setRequests] = useState([
    { id: 1, type: t('portal.requests.tech_service', 'Teknik Servis'), title: t('portal.requests.req1.title', 'Akıllı Ev Paneli Arızası'), desc: t('portal.requests.req1.desc', 'Salondaki panelin dokunmatiği bazen tepki vermiyor.'), status: 'islemde', date: t('portal.requests.yesterday', 'Dün 14:30') },
    { id: 2, type: t('portal.requests.plumbing', 'Tesisat'), title: t('portal.requests.req2.title', 'Mutfak Bataryası Sızıntısı'), desc: t('portal.requests.req2.desc', 'Mutfak tezgahında su birikiyor.'), status: 'cozuldu', date: '12 Kasım 2025' },
    { id: 3, type: t('portal.requests.cleaning', 'Temizlik'), title: t('portal.requests.req3.title', 'Balkon Gideri Temizliği'), desc: t('portal.requests.req3.desc', 'Balkon gideri tıkanmış.'), status: 'cozuldu', date: '03 Ekim 2025' }
  ]);
  const [newRequest, setNewRequest] = useState({ title: '', desc: '', type: t('portal.requests.tech_service', 'Teknik Servis') });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRequest.title.trim()) {
      setRequests([
        { 
          id: Date.now(), 
          ...newRequest, 
          status: 'bekliyor', 
          date: t('portal.requests.just_now', 'Az Önce') 
        },
        ...requests
      ]);
      setShowModal(false);
      setNewRequest({ title: '', desc: '', type: t('portal.requests.tech_service', 'Teknik Servis') });
    }
  };

  const pending = requests.filter(r => r.status === 'bekliyor');
  const inProgress = requests.filter(r => r.status === 'islemde');
  const resolved = requests.filter(r => r.status === 'cozuldu');

  return (
    <motion.div key="talepler" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6 relative">
      <div className="flex justify-between items-center bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
        <p className="text-gray-300">{t('portal.requests.description', 'Tüm teknik ve destek taleplerinizi buradan takip edebilirsiniz.')}</p>
        <button onClick={() => setShowModal(true)} className="bg-luxera-gold text-luxera-navy px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-colors">
          <Plus size={18} /> {t('portal.requests.new_request', 'Yeni Talep')}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bekleyen */}
        <div className="bg-black/20 border border-white/5 rounded-2xl p-4 flex flex-col gap-3">
          <h4 className="text-gray-400 font-semibold mb-2 flex items-center gap-2"><Clock size={16} /> {t('portal.requests.pending', 'Beklemede')} ({pending.length})</h4>
          {pending.length === 0 ? (
            <div className="h-24 border-2 border-dashed border-white/5 rounded-xl flex items-center justify-center text-gray-500 text-sm">{t('portal.requests.no_request', 'Talep bulunmuyor')}</div>
          ) : (
            pending.map(r => (
              <div key={r.id} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <span className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded mb-2 inline-block">{r.type}</span>
                <h5 className="text-white font-medium mb-1">{r.title}</h5>
                <p className="text-xs text-gray-400 line-clamp-2 mb-3">{r.desc}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{r.date}</span>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* İşlemde */}
        <div className="bg-black/20 border border-white/5 rounded-2xl p-4 flex flex-col gap-3">
          <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2"><Wrench size={16} /> {t('portal.requests.in_progress', 'İşlemde')} ({inProgress.length})</h4>
          {inProgress.map(r => (
            <div key={r.id} className="bg-white/5 border border-white/10 p-4 rounded-xl border-l-4 border-l-blue-500">
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded mb-2 inline-block">{r.type}</span>
              <h5 className="text-white font-medium mb-1">{r.title}</h5>
              <p className="text-xs text-gray-400 line-clamp-2 mb-3">{r.desc}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{r.date}</span>
                <MoreHorizontal size={16} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Çözüldü */}
        <div className="bg-black/20 border border-white/5 rounded-2xl p-4 flex flex-col gap-3">
          <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2"><CheckCircle size={16} /> {t('portal.requests.resolved', 'Çözüldü')} ({resolved.length})</h4>
          {resolved.map(r => (
            <div key={r.id} className="bg-white/5 border border-white/10 p-4 rounded-xl opacity-60 hover:opacity-100 transition-opacity border-l-4 border-l-green-500">
              <h5 className="text-white font-medium mb-1 text-sm">{r.title}</h5>
              <p className="text-xs text-gray-400">{r.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-luxera-charcoal border border-white/10 p-8 rounded-3xl max-w-lg w-full relative"
            >
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-serif text-white mb-6">{t('portal.requests.modal_title', 'Yeni Talep Oluştur')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">{t('portal.requests.type_label', 'Talep Tipi')}</label>
                  <select 
                    value={newRequest.type} 
                    onChange={e => setNewRequest({...newRequest, type: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none"
                  >
                    <option value={t('portal.requests.tech_service', 'Teknik Servis')}>{t('portal.requests.tech_service_desc', 'Teknik Servis (Elektrik, Su vb.)')}</option>
                    <option value={t('portal.requests.cleaning', 'Temizlik')}>{t('portal.requests.cleaning_desc', 'Ortak Alan Temizliği')}</option>
                    <option value={t('portal.requests.security', 'Güvenlik')}>{t('portal.requests.security_desc', 'Güvenlik Bildirimi')}</option>
                    <option value={t('portal.requests.other', 'Diğer')}>{t('portal.requests.other', 'Diğer')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">{t('portal.requests.title_label', 'Başlık')}</label>
                  <input 
                    type="text" 
                    required
                    value={newRequest.title}
                    onChange={e => setNewRequest({...newRequest, title: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">{t('portal.requests.desc_label', 'Açıklama')}</label>
                  <textarea 
                    rows="4"
                    required
                    value={newRequest.desc}
                    onChange={e => setNewRequest({...newRequest, desc: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none resize-none" 
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-luxera-gold text-luxera-navy font-bold py-4 rounded-xl hover:bg-white transition-all mt-4">
                  {t('portal.requests.submit', 'Talebi Gönder')}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default TaleplerModule;
