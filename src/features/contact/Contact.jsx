import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../shared/ui/SectionHeader';

const Contact = () => {
  const { t } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);

  // Zod şemasını component içine aldık ki t() fonksiyonuna erişebilsin
  const formSchema = z.object({
    name: z.string().min(3, { message: t('contact.errors.name', 'Ad Soyad en az 3 karakter olmalıdır') }),
    phone: z.string().min(10, { message: t('contact.errors.phone', 'Geçerli bir telefon numarası giriniz') }),
    email: z.string().email({ message: t('contact.errors.email', 'Geçerli bir e-posta adresi giriniz') }),
    unitType: z.string().min(1, { message: t('contact.errors.unitType', 'Lütfen ilgilendiğiniz daire tipini seçin') }),
  });
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="iletisim" className="py-24 bg-luxera-charcoal relative">
      <div className="absolute inset-0 bg-[url('/images/interior/6_2025-12-18_02-42-20_29be56.webp')] bg-cover bg-center opacity-5"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-luxera-navy/90 backdrop-blur-xl p-10 md:p-16 border border-luxera-gold/30 shadow-2xl relative overflow-hidden">
          <AnimatePresence>
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 bg-luxera-navy/95 z-20 flex flex-col items-center justify-center text-center p-10"
              >
                <CheckCircle2 size={80} className="text-luxera-gold mb-6" />
                <h3 className="text-3xl font-serif text-white mb-4">{t('contact.success.title', 'Talebiniz Alındı')}</h3>
                <p className="text-gray-300 max-w-md">{t('contact.success.desc', 'Değerli başvurunuz için teşekkür ederiz. Satış danışmanlarımız sizinle en kısa sürede iletişime geçecektir.')}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <SectionHeader title={t('contact.header.title', 'Fiyat Bilgisi Alın')} subtitle={t('contact.header.subtitle', 'Prestijli yaşama ilk adımı atmak için formumuzu doldurun, satış temsilcilerimiz sizinle hemen iletişime geçsin.')} />
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input {...register('name')} type="text" placeholder={t('contact.placeholders.name', 'Adınız Soyadınız')} className="w-full bg-luxera-charcoal border border-gray-700 text-white px-4 py-4 focus:outline-none focus:border-luxera-gold transition-colors placeholder:text-gray-500" />
                {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
              </div>
              <div>
                <input {...register('phone')} type="tel" placeholder={t('contact.placeholders.phone', 'Telefon Numaranız')} className="w-full bg-luxera-charcoal border border-gray-700 text-white px-4 py-4 focus:outline-none focus:border-luxera-gold transition-colors placeholder:text-gray-500" />
                {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone.message}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input {...register('email')} type="email" placeholder={t('contact.placeholders.email', 'E-posta Adresiniz')} className="w-full bg-luxera-charcoal border border-gray-700 text-white px-4 py-4 focus:outline-none focus:border-luxera-gold transition-colors placeholder:text-gray-500" />
                {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
              </div>
              <div>
                <select {...register('unitType')} className="w-full bg-luxera-charcoal border border-gray-700 text-gray-500 px-4 py-4 focus:outline-none focus:border-luxera-gold transition-colors appearance-none">
                  <option value="">{t('contact.placeholders.unitType', 'İlgilendiğiniz Daire Tipi')}</option>
                  <option value="1+1">{t('contact.options.1+1', '1+1 Rezidans')}</option>
                  <option value="2+1">{t('contact.options.2+1', '2+1 Rezidans')}</option>
                  <option value="3+1">{t('contact.options.3+1', '3+1 Aile Rezidansı')}</option>
                  <option value="4+1">{t('contact.options.4+1', '4+1 Penthouse')}</option>
                </select>
                {errors.unitType && <p className="text-red-500 text-xs mt-2">{errors.unitType.message}</p>}
              </div>
            </div>
            <button disabled={isSubmitting} type="submit" className="w-full bg-luxera-gold text-white py-5 uppercase tracking-widest font-medium hover:bg-luxera-goldDark transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50">
              {isSubmitting ? t('contact.submitting', 'Gönderiliyor...') : t('contact.submit', 'Hemen Bilgi Alın')}
            </button>
            <p className="text-gray-500 text-xs text-center mt-4">
              {t('contact.kvkk', 'Bilgileriniz KVKK kapsamında korunmaktadır.')}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
