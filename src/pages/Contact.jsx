import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { contactInfo } from '../data/site';
import PageHero from '../shared/ui/PageHero';
import ProjectMap from '../shared/ui/ProjectMap';
import SEO from '../shared/seo/SEO';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const schema = z.object({
    name: z.string().min(1, { message: t('contact.validation.name', 'Ad Soyad zorunludur') }),
    phone: z.string().min(1, { message: t('contact.validation.phone', 'Telefon numarası zorunludur') }),
    email: z.string().email({ message: t('contact.validation.emailInvalid', 'Geçerli bir e-posta giriniz') }).min(1, { message: t('contact.validation.email', 'E-posta zorunludur') }),
    unitType: z.string().min(1, { message: t('contact.validation.unitType', 'İlgilendiğiniz daire tipini seçiniz') }),
    message: z.string().optional(),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simüle edilmiş API isteği
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Data:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-32">
      <SEO 
        title={t('contact.seo.title', 'İletişim ve Randevu')}
        description={t('contact.seo.desc', 'Satış ofisimizle iletişime geçin, örnek dairemizi ziyaret etmek için hemen randevu oluşturun.')}
        canonical="https://luxeratowers.com/iletisim"
      />
      
      <PageHero
        overline={t('contact.hero.overline', 'Bize Ulaşın')}
        title={t('contact.hero.title', 'Satış')}
        highlight={t('contact.hero.highlight', 'Ofisi')}
        subtitle={t('contact.hero.subtitle', 'Size özel ayrıcalıklı seçenekleri keşfetmek ve lüksü yerinde deneyimlemek için satış uzmanlarımızla görüşün.')}
        backgroundImage="/images/exterior/9_2025-12-18_02-46-35_8d953d.webp"
      />

      <div className="max-w-[90rem] mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Glassmorphism İletişim Formu */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black"
          >
            {/* Arka plan animasyonu */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/interior/7_2025-12-18_02-42-20_35374f.webp" 
                alt="Form Background" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-luxera-navy/80 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-luxera-navy/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-10"
                  >
                    <CheckCircle2 size={72} className="text-luxera-gold mb-6" />
                    <h3 className="text-3xl font-serif text-white mb-4">{t('contact.success.title', 'Talebiniz Alındı')}</h3>
                    <p className="text-gray-300 max-w-md">{t('contact.success.desc', 'Randevu talebiniz için teşekkür ederiz. Satış danışmanlarımız en kısa sürede sizinle iletişime geçecektir.')}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h2 className="text-3xl font-serif text-luxera-gold mb-8">{t('contact.form.title', 'Randevu Oluşturun')}</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">{t('contact.form.name', 'Adınız Soyadınız')}</label>
                    <input {...register('name')} type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-luxera-gold outline-none transition-colors backdrop-blur-md" />
                    {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">{t('contact.form.phone', 'Telefon Numaranız')}</label>
                    <input {...register('phone')} type="tel" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-luxera-gold outline-none transition-colors backdrop-blur-md" />
                    {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">{t('contact.form.email', 'E-posta Adresiniz')}</label>
                  <input {...register('email')} type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-luxera-gold outline-none transition-colors backdrop-blur-md" />
                  {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">{t('contact.form.unitLabel', 'İlgilendiğiniz Daire Tipi')}</label>
                  <select {...register('unitType')} className="w-full bg-[#1a1f2e]/80 border border-white/10 p-4 rounded-xl text-white focus:border-luxera-gold outline-none transition-colors appearance-none backdrop-blur-md">
                    <option value="">{t('contact.form.unitSelect', 'Seçiniz')}</option>
                    <option value="1+1">{t('contact.form.unit1', '1+1 Rezidans')}</option>
                    <option value="2+1">{t('contact.form.unit2', '2+1 Rezidans')}</option>
                    <option value="3+1">{t('contact.form.unit3', '3+1 Rezidans')}</option>
                    <option value="4+1">{t('contact.form.unit4', '4+1 Penthouse')}</option>
                    <option value="avm">{t('contact.form.unit5', 'Ticari Ünite / Mağaza')}</option>
                  </select>
                  {errors.unitType && <p className="text-red-500 text-xs mt-2">{errors.unitType.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">{t('contact.form.message', 'Mesajınız (opsiyonel)')}</label>
                  <textarea {...register('message')} rows={3} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-luxera-gold outline-none transition-colors resize-none backdrop-blur-md" />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-luxera-gold text-luxera-navy font-bold p-5 rounded-xl uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all mt-4 disabled:opacity-50">
                  {isSubmitting ? t('contact.form.sending', 'Gönderiliyor...') : t('contact.form.submit', 'Randevu Talebi Gönder')}
                </button>
                <p className="text-gray-400 text-xs text-center">{t('contact.form.kvkk', 'Bilgileriniz KVKK kapsamında korunmaktadır.')}</p>
              </form>
            </div>
          </motion.div>

          {/* Info & Harita */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }} 
            className="lg:col-span-3 flex flex-col justify-between h-full space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-luxera-charcoal/40 p-8 rounded-3xl border border-white/5">
              <div className="flex items-start gap-4">
                <div className="bg-luxera-gold/10 p-3 rounded-full text-luxera-gold"><MapPin size={24} /></div>
                <div>
                  <h3 className="text-lg font-serif text-white mb-2">{t('contact.info.office', 'Satış Ofisi')}</h3>
                  <p className="text-gray-400 leading-relaxed">{t('contact.info.officeDesc', contactInfo.salesOffice)}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-luxera-gold/10 p-3 rounded-full text-luxera-gold"><Phone size={24} /></div>
                <div>
                  <h3 className="text-lg font-serif text-white mb-2">{t('contact.info.phone', 'İletişim')}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <a href={`tel:${contactInfo.phonePrimary.replace(/\s/g, '')}`} className="hover:text-luxera-gold transition-colors block">{contactInfo.phonePrimary}</a>
                    {contactInfo.phoneSecondary && <a href={`tel:${contactInfo.phoneSecondary.replace(/\s/g, '')}`} className="hover:text-luxera-gold transition-colors block">{contactInfo.phoneSecondary}</a>}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-luxera-gold/10 p-3 rounded-full text-luxera-gold"><Mail size={24} /></div>
                <div>
                  <h3 className="text-lg font-serif text-white mb-2">{t('contact.info.email', 'E-posta')}</h3>
                  <p className="text-gray-400 leading-relaxed">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-luxera-gold/10 p-3 rounded-full text-luxera-gold"><Clock size={24} /></div>
                <div>
                  <h3 className="text-lg font-serif text-white mb-2">{t('contact.info.hours', 'Çalışma Saatleri')}</h3>
                  <p className="text-gray-400 leading-relaxed">{t('contact.info.hoursDesc', contactInfo.hoursNote)}</p>
                </div>
              </div>
            </div>

            {/* Gerçek İnteraktif Harita (React Leaflet) */}
            <div className="w-full flex-1 min-h-[400px] rounded-3xl overflow-hidden border border-luxera-gold/20 shadow-2xl relative">
              <ProjectMap />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-5 py-2 rounded-full border border-luxera-gold/40 pointer-events-none z-[400]">
                <span className="text-luxera-gold font-serif tracking-widest text-sm uppercase">{t('contact.ui.salesOffice', 'Satış Ofisi')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
