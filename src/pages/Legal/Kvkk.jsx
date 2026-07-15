import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../shared/ui/PageHero';

import { useTranslation } from 'react-i18next';

const Kvkk = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pb-24">
      <PageHero
        overline={t('legal.kvkk.overline', 'Yasal')}
        title={t('legal.kvkk.title', 'KVKK')}
        subtitle={t('legal.kvkk.subtitle', 'Kişisel Verilerin Korunması Kanunu Kapsamında Aydınlatma Metni')}
      />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }}
          className="prose prose-invert max-w-none text-gray-300 space-y-6"
        >
          <p>
            {t('legal.kvkk.p1', 'Luxera Gayrimenkul Yatırım A.Ş. olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, Şirket olarak ürün ve hizmetlerimizden faydalanan kişiler dahil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")\'na uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz.')}
          </p>
          
          <h3 className="text-luxera-gold text-xl font-serif mt-8 mb-4">{t('legal.kvkk.h1', '1. Kişisel Verilerin İşlenme Amacı')}</h3>
          <p>
            {t('legal.kvkk.p2', 'Toplanan kişisel verileriniz, şirketimiz tarafından sunulan gayrimenkul projelerinin satışı, pazarlanması, sizlere özel kampanyaların oluşturulması, müşteri memnuniyeti araştırmaları ve iletişim faaliyetlerinin yürütülmesi amaçlarıyla işlenmektedir.')}
          </p>

          <h3 className="text-luxera-gold text-xl font-serif mt-8 mb-4">{t('legal.kvkk.h2', '2. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği')}</h3>
          <p>
            {t('legal.kvkk.p3', 'Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel kişilere KVKK\'nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.')}
          </p>

          <h3 className="text-luxera-gold text-xl font-serif mt-8 mb-4">{t('legal.kvkk.h3', '3. Kişisel Veri Sahibinin Hakları')}</h3>
          <p>
            {t('legal.kvkk.p4', 'KVKK\'nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahiptir. Taleplerinizi yazılı olarak şirket merkezimize iletebilirsiniz.')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Kvkk;
