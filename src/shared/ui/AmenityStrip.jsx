import React from 'react';
import { motion } from 'framer-motion';
import { amenityGallery } from '../../data/amenities';

/**
 * Ayrıcalık alt sayfalarında kullanılan ortak galeri şeridi.
 * @param {string} [title]
 */
const AmenityStrip = ({ title = 'Luxera Yaşamından Kareler' }) => (
  <div className="mt-24 pt-16 border-t border-white/10">
    <h2 className="text-3xl font-serif text-white mb-10 text-center">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {amenityGallery.slice(0, 3).map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          className="overflow-hidden rounded-xl border border-luxera-gold/10 h-48 md:h-64 group last:hidden md:last:block"
        >
          <img src={src} alt="Luxera yaşam alanı" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </motion.div>
      ))}
    </div>
  </div>
);

export default AmenityStrip;
