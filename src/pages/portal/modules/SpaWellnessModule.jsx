import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Activity, Droplet } from 'lucide-react';

const SpaWellnessModule = () => {
  return (
    <motion.div key="spa" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Kişisel Antrenör', icon: <User size={24} />, desc: 'Özel fitness programları', bg: 'from-blue-900/40' },
          { title: 'Masaj Terapisi', icon: <Droplet size={24} />, desc: 'Thai, Bali ve İsveç', bg: 'from-luxera-gold/20' },
          { title: 'Diyetisyen', icon: <Activity size={24} />, desc: 'Sağlıklı beslenme', bg: 'from-green-900/40' },
          { title: 'Pilates & Yoga', icon: <User size={24} />, desc: 'Grup ve özel dersler', bg: 'from-purple-900/40' }
        ].map((item, idx) => (
          <div key={idx} className={`bg-gradient-to-br ${item.bg} to-black border border-white/10 p-6 rounded-3xl cursor-pointer hover:border-white/30 transition-all group`}>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h4 className="text-white font-medium mb-1">{item.title}</h4>
            <p className="text-xs text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
        <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Uzman Kadromuz</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Dr. Zeynep Alkan', role: 'Uzman Diyetisyen', img: 'https://images.unsplash.com/photo-1594824436998-d5675f6170d7?q=80&w=500&auto=format&fit=crop' },
            { name: 'Carlos Mendez', role: 'Kıdemli Personal Trainer', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop' },
            { name: 'Elena Rostova', role: 'Masaj Terapisti', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?q=80&w=500&auto=format&fit=crop' }
          ].map((staff, i) => (
            <div key={i} className="flex items-center gap-4 bg-black/40 p-4 rounded-2xl border border-white/5">
              <img src={staff.img} alt={staff.name} className="w-16 h-16 rounded-xl object-cover" />
              <div>
                <h5 className="text-white font-medium">{staff.name}</h5>
                <p className="text-xs text-luxera-gold mb-2">{staff.role}</p>
                <button className="text-xs bg-white/10 hover:bg-luxera-gold hover:text-luxera-navy text-white px-3 py-1.5 rounded-lg transition-colors">Randevu Al</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SpaWellnessModule;
