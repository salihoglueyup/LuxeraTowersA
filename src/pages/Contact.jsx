import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { contactInfo, mapEmbedUrl } from '../data/site';

import { useTranslation } from 'react-i18next';

const getFormSchema = (t) => z.object({
  name: z.string().min(3, { message: t('contact.form.errors.name', 'Ad Soyad en az 3 karakter olmalıdır') }),
  phone: z.string().min(10, { message: t('contact.form.errors.phone', 'Geçerli bir telefon numarası giriniz') }),
  email: z.string().email({ message: t('contact.form.errors.email', 'Geçerli bir e-posta adresi giriniz') }),
  unitType: z.string().min(1, { message: t('contact.form.errors.unitType', 'Lütfen ilgilendiğiniz daire tipini seçin') }),
  message: z.string().optional(),
});

const Contact = () => {
  const { t } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(getFormSchema(t)),
  });

  const onSubmit = async (data) => {
    // Gerçek uygulamada burada randevu talebi backend'e/CRM'e gönderilir
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Randevu talebi:', data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 6000);
  };

  return (
    <div className="bg-luxera-navy min-h-screen text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">{t('contact.hero.title', 'VIP İletişim')}</h1>
            <div className="h-[1px] w-24 bg-luxera-gold mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('contact.hero.desc', 'Satış ofisimizde size özel sunum ve kahve eşliğinde projeyi detaylıca incelemek için randevu oluşturun.')}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className="bg-luxera-charcoal border border-luxera-gold/20 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 bg-luxera-charcoal/97 z-20 flex flex-col items-center justify-center text-center p-10"
                  >
                    <CheckCircle2 size={72} className="text-luxera-gold mb-6" />
                    <h3 className="text-3xl font-serif text-white mb-4">{t('contact.success.title', 'Talebiniz Alındı')}</h3>
                    <p className="text-gray-300 max-w-md">{t('contact.success.desc', 'Randevu talebiniz için teşekkür ederiz. Satış danışmanlarımız en kısa sürede sizinle iletişime geçecektir.')}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h2 className="text-3xl font-serif text-luxera-gold mb-8">{t('contact.form.title', 'Randevu Oluşturun')}</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t('contact.form.name', 'Adınız Soyadınız')}</label>
                    <input {...register('name')} type="text" className="w-full bg-gray-900 border border-gray-700 p-4 rounded-sm text-white focus:border-luxera-gold outline-none transition-colors" />
                    {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t('contact.form.phone', 'Telefon Numaranız')}</label>
                    <input {...register('phone')} type="tel" className="w-full bg-gray-900 border border-gray-700 p-4 rounded-sm text-white focus:border-luxera-gold outline-none transition-colors" />
                    {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t('contact.form.email', 'E-posta Adresiniz')}</label>
                  <input {...register('email')} type="email" className="w-full bg-gray-900 border border-gray-700 p-4 rounded-sm text-white focus:border-luxera-gold outline-none transition-colors" />
                  {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t('contact.form.unitLabel', 'İlgilendiğiniz Daire Tipi')}</label>
                  <select {...register('unitType')} className="w-full bg-gray-900 border border-gray-700 p-4 rounded-sm text-white focus:border-luxera-gold outline-none transition-colors appearance-none">
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
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t('contact.form.message', 'Mesajınız (opsiyonel)')}</label>
                  <textarea {...register('message')} rows={3} className="w-full bg-gray-900 border border-gray-700 p-4 rounded-sm text-white focus:border-luxera-gold outline-none transition-colors resize-none" />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-luxera-gold text-white p-5 rounded-sm uppercase tracking-widest hover:bg-luxera-goldDark hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all mt-4 disabled:opacity-50">
                  {isSubmitting ? t('contact.form.sending', 'Gönderiliyor...') : t('contact.form.submit', 'Randevu Talebi Gönder')}
                </button>
                <p className="text-gray-500 text-xs text-center">{t('contact.form.kvkk', 'Bilgileriniz KVKK kapsamında korunmaktadır.')}</p>
              </form>
            </div>
          </motion.div>

          {/* Info & Map */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex flex-col justify-between">
            <div className="space-y-8 mb-12">
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
                    <a href={`tel:${contactInfo.phonePrimary.replace(/\s/g, '')}`} className="hover:text-luxera-gold transition-colors">{contactInfo.phonePrimary}</a>
                    {contactInfo.phoneSecondary && <><br />{contactInfo.phoneSecondary}</>}
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

            {/* Gerçek Google Harita */}
            <div className="w-full h-64 rounded-3xl overflow-hidden border border-luxera-gold/20">
              <iframe
                title="Luxera Towers Satış Ofisi"
                src={mapEmbedUrl()}
                className="w-full h-full grayscale-[30%] contrast-110"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
