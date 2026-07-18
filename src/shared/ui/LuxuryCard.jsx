import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import LuxuryButton from './LuxuryButton';
import { useTranslation } from 'react-i18next';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const LuxuryCard = ({ 
  image, 
  title, 
  category, 
  date, 
  description, 
  actionText,
  onActionClick,
  actionHref
}) => {
  const { t } = useTranslation();
  const text = actionText || t('luxuryCard.action', 'Detaylı İncele');
  return (
    <motion.div
      variants={fadeUp}
      className="bg-luxera-charcoal border border-luxera-gold/10 rounded-2xl overflow-hidden hover:border-luxera-gold/40 transition-colors group flex flex-col h-full"
    >
      <div className="h-56 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxera-navy/80 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-center mb-4">
          {category && <span className="text-luxera-gold text-xs uppercase tracking-widest px-3 py-1 bg-luxera-gold/10 rounded-full">{category}</span>}
          {date && (
            <div className="flex items-center text-gray-400 text-sm gap-1">
              <Calendar size={14} /> {date}
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-serif text-white mb-4 group-hover:text-luxera-gold transition-colors line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{description}</p>

        <div className="mt-auto pt-4 border-t border-white/5">
          <LuxuryButton 
            variant="ghost" 
            onClick={onActionClick} 
            href={actionHref}
            className="!px-0 !py-0 w-full text-left justify-start"
            icon={<span>&rarr;</span>}
          >
            {text}
          </LuxuryButton>
        </div>
      </div>
    </motion.div>
  );
};

export default LuxuryCard;
