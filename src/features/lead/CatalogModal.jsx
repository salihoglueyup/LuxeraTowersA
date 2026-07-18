import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, CheckCircle, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATALOG_URL, downloadCatalog } from '../../shared/utils/download';
import {
  unitTypeOptions,
  purposeOptions,
  timelineOptions,
  contactPreferenceOptions,
  sourceOptions,
  catalogHighlights,
} from '../../data/leadForm';

const inputClass =
  'w-full bg-gray-900 border border-gray-700 p-3 rounded-sm text-white text-sm focus:border-luxera-gold outline-none transition-colors';
const labelClass = 'block text-xs uppercase tracking-wider text-gray-400 mb-1.5';

const CatalogModal = ({ open, onClose }) => {
  const { t } = useTranslation();

  const leadSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(3, { message: t('catalog.v.name') }),
        email: z.string().email({ message: t('catalog.v.email') }),
        phone: z.string().min(10, { message: t('catalog.v.phone') }),
        unitType: z.string().optional(),
        purpose: z.string().optional(),
        timeline: z.string().optional(),
        contactPreference: z.string().optional(),
        source: z.string().optional(),
        message: z.string().optional(),
        kvkk: z.boolean().refine((v) => v === true, { message: t('catalog.v.kvkk') }),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ resolver: zodResolver(leadSchema) });

  // Escape ile kapat
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const handleClose = () => {
    onClose();
    // Kapanış animasyonu bitince formu sıfırla
    setTimeout(() => reset(), 300);
  };

  const onSubmit = async (data) => {
    // Gerçek uygulamada burada lead bilgisi backend'e/CRM'e gönderilir
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Lead:', data);
    downloadCatalog();
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-luxera-charcoal border border-luxera-gold/30 rounded-2xl w-full max-w-3xl relative z-10 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
          >
            <button
              onClick={handleClose}
              aria-label={t('catalog.close')}
              className="absolute top-4 right-4 text-white hover:text-luxera-gold z-20 bg-black/40 rounded-full p-2 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Üst Panel — Görsel (Top Banner) */}
            <div className="relative w-full h-48 sm:h-56 shrink-0">
              <img
                src="/images/exterior/13_2025-12-18_02-46-35_a465ab.webp"
                alt={t('catalog.alt')}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxera-navy via-luxera-navy/60 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-4">
                  <img src="/images/logo/logo.webp" alt="Luxera Towers" className="h-10 w-auto brightness-0 invert opacity-90" />
                  <div className="h-8 w-[1px] bg-white/30 hidden sm:block"></div>
                  <h3 className="text-2xl font-serif text-white hidden sm:block">{t('catalog.title')}</h3>
                </div>
              </div>
            </div>

            {/* Alt Panel — Form */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              {!isSubmitSuccessful ? (
                <>
                  <h3 className="text-2xl font-serif text-white mb-2">{t('catalog.title')}</h3>
                  <p className="text-gray-400 mb-6 text-sm">
                    {t('catalog.desc')}
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                    {/* Zorunlu temel bilgiler */}
                    <div>
                      <label className={labelClass} htmlFor="lead-name">{t('catalog.label.name')}</label>
                      <input id="lead-name" {...register('name')} type="text" placeholder={t('catalog.ph.name')} className={inputClass} />
                      {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass} htmlFor="lead-email">{t('catalog.label.email')}</label>
                        <input id="lead-email" {...register('email')} type="email" placeholder={t('catalog.ph.email')} className={inputClass} />
                        {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="lead-phone">{t('catalog.label.phone')}</label>
                        <input id="lead-phone" {...register('phone')} type="tel" placeholder={t('catalog.ph.phone')} className={inputClass} />
                        {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>}
                      </div>
                    </div>

                    {/* İlgi & niyet (opsiyonel select'ler) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass} htmlFor="lead-unit">{t('catalog.label.unitType')}</label>
                        <select id="lead-unit" {...register('unitType')} className={inputClass} defaultValue="">
                          <option value="" disabled>{t('catalog.ph.select')}</option>
                          {unitTypeOptions.map((o) => <option key={o.value} value={o.value}>{t(o.labelKey)}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="lead-purpose">{t('catalog.label.purpose')}</label>
                        <select id="lead-purpose" {...register('purpose')} className={inputClass} defaultValue="">
                          <option value="" disabled>{t('catalog.ph.select')}</option>
                          {purposeOptions.map((o) => <option key={o.value} value={o.value}>{t(o.labelKey)}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="lead-timeline">{t('catalog.label.timeline')}</label>
                        <select id="lead-timeline" {...register('timeline')} className={inputClass} defaultValue="">
                          <option value="" disabled>{t('catalog.ph.select')}</option>
                          {timelineOptions.map((o) => <option key={o.value} value={o.value}>{t(o.labelKey)}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="lead-contact">{t('catalog.label.contact')}</label>
                        <select id="lead-contact" {...register('contactPreference')} className={inputClass} defaultValue="">
                          <option value="" disabled>{t('catalog.ph.select')}</option>
                          {contactPreferenceOptions.map((o) => <option key={o.value} value={o.value}>{t(o.labelKey)}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="lead-source">{t('catalog.label.source')}</label>
                      <select id="lead-source" {...register('source')} className={inputClass} defaultValue="">
                        <option value="" disabled>{t('catalog.ph.select')}</option>
                        {sourceOptions.map((o) => <option key={o.value} value={o.value}>{t(o.labelKey)}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="lead-message">{t('catalog.label.message')}</label>
                      <textarea id="lead-message" {...register('message')} rows={2} placeholder={t('catalog.ph.message')} className={inputClass} />
                    </div>

                    {/* KVKK onayı */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-400">
                        <input {...register('kvkk')} type="checkbox" className="mt-0.5 w-4 h-4 accent-luxera-gold shrink-0" />
                        <span>
                          {t('catalog.kvkkPre')}<Link to="/kvkk" target="_blank" className="text-luxera-gold hover:underline">{t('catalog.kvkkLink')}</Link>{t('catalog.kvkkPost')}
                        </span>
                      </label>
                      {errors.kvkk && <p className="text-red-500 text-xs mt-1.5">{errors.kvkk.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-luxera-gold text-white p-4 rounded-sm uppercase tracking-widest text-sm hover:bg-luxera-goldDark transition-colors mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? t('catalog.submitting') : <>{t('catalog.submit')} <Download size={16} /></>}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 h-full flex flex-col justify-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-flex justify-center items-center w-20 h-20 bg-green-500/20 rounded-full mb-6 mx-auto">
                    <CheckCircle className="text-green-500" size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-serif text-white mb-2">{t('catalog.successTitle')}</h3>
                  <p className="text-gray-400">
                    {t('catalog.successPre')}
                    <a href={CATALOG_URL} download="Luxera-Towers-Katalog.pdf" className="text-luxera-gold underline">{t('catalog.successLink')}</a>{t('catalog.successPost')}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CatalogModal;
