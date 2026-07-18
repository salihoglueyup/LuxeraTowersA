import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { defaultSEO, getDefaultSEOByLanguage } from './seoConfig';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  ogType = 'website',
  noindex = false
}) => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  
  // Dile göre default SEO verilerini al
  const localizedSEO = useMemo(() => {
    return getDefaultSEOByLanguage(i18n.language);
  }, [i18n.language]);

  const metaTitle = title ? `${title} | Luxera Towers` : localizedSEO.title;
  const metaDescription = description || localizedSEO.description;
  const canonicalUrl = canonical || localizedSEO.canonicalUrl;
  const ogImageUrl = ogImage || localizedSEO.openGraph.images[0].url;

  // Hreflang alternates (tüm dil sürümleri)
  const languages = ['tr', 'ar', 'en', 'ru'];
  const hreflangs = languages.map(lang => ({
    lang: lang === 'ar' ? 'ar-SA' : lang === 'tr' ? 'tr-TR' : lang === 'en' ? 'en-US' : 'ru-RU',
    hreflang: lang,
    href: `https://luxeratowers.com${pathname}${pathname.includes('?') ? '&' : '?'}lang=${lang}`
  }));

  return (
    <Helmet>
      {/* Temel Meta Etiketleri */}
      <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Alternates (Multilingual) */}
      {hreflangs.map((hreflang) => (
        <link 
          key={hreflang.lang}
          rel="alternate" 
          hrefLang={hreflang.lang}
          href={hreflang.href}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph (Facebook/LinkedIn vb.) */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={localizedSEO.openGraph.site_name} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content={localizedSEO.openGraph.locale} />

      {/* Twitter Kartları */}
      <meta name="twitter:card" content={localizedSEO.twitter.cardType} />
      <meta name="twitter:site" content={localizedSEO.twitter.site} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
};

export default SEO;

