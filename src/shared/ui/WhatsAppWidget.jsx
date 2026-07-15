import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp Numarası (Uluslararası formatta, + olmadan)
  const whatsappNumber = "905550000000"; 
  const whatsappMessage = encodeURIComponent("Merhaba, Luxera Towers projesi hakkında detaylı bilgi almak istiyorum.");

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-72 bg-luxera-charcoal border border-luxera-gold/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-luxera-navy to-luxera-charcoal p-4 border-b border-luxera-gold/20 flex items-center justify-between">
              <div>
                <h4 className="text-luxera-gold font-serif text-lg">Satış Danışmanı</h4>
                <p className="text-gray-400 text-xs mt-1">Size nasıl yardımcı olabiliriz?</p>
              </div>
              <button 
                onClick={toggleOpen}
                className="text-gray-400 hover:text-white transition-colors bg-black/20 rounded-full p-1"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-2 flex flex-col gap-1">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">WhatsApp</div>
                  <div className="text-gray-400 text-xs">Anında yanıt alın</div>
                </div>
              </a>

              <a 
                href="tel:+902120000000"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-luxera-gold/10 flex items-center justify-center text-luxera-gold group-hover:bg-luxera-gold group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Bizi Arayın</div>
                  <div className="text-gray-400 text-xs">Satış ofisine bağlanın</div>
                </div>
              </a>

              <Link 
                to="/iletisim"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">İletişim Formu</div>
                  <div className="text-gray-400 text-xs">Size geri dönüş yapalım</div>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-luxera-gold text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.6)] transition-shadow relative"
        aria-label="İletişim"
      >
        {/* Dalga efekti (ping) */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-luxera-gold animate-ping opacity-30"></span>
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={26} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={26} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
