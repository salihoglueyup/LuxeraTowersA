import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { defaultSEO } from './seoConfig';

const SchemaMarkup = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // 1. Real Estate & Local Business Schema (Her sayfada ortak)
  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": t('company.name'),
    "image": t('seo.ogImage'),
    "url": t('company.url'),
    "telephone": t('company.phone'),
    "email": t('company.email'),
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": t('company.address'),
      "addressLocality": i18n.language === 'ar' ? 'جونشلي' : i18n.language === 'ru' ? 'Гюнешли' : i18n.language === 'en' ? 'Gunseli' : 'Güneşli',
      "addressRegion": i18n.language === 'ar' ? 'إسطنبول' : i18n.language === 'ru' ? 'Стамбул' : i18n.language === 'en' ? 'Istanbul' : 'İstanbul',
      "postalCode": "34212",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.033333,
      "longitude": 28.816667
    }
  };

  // 2. Breadcrumb Schema (Dinamik)
  const paths = location.pathname.split('/').filter(p => p);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": i18n.language === 'ar' ? 'الرئيسية' : i18n.language === 'ru' ? 'Главная' : i18n.language === 'en' ? 'Home' : 'Ana Sayfa',
        "item": "https://luxeratowers.com"
      },
      ...paths.map((path, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": path.charAt(0).toUpperCase() + path.slice(1),
        "item": `https://luxeratowers.com/${paths.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  // 3. Product & Offer Schema (Sadece Rezidans ve Yatırım Sayfalarında)
  const isProductPage = location.pathname.includes('rezidans') || location.pathname.includes('yatirim');
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": i18n.language === 'ar' ? 'سكن فاخر في لوكسيرا تاورز' : i18n.language === 'ru' ? 'Люксовая резиденция Luxera Towers' : i18n.language === 'en' ? 'Luxera Towers Luxury Residence' : 'Luxera Towers Lüks Rezidans',
    "image": "https://luxeratowers.com/images/interior/10_2025-12-18_02-42-20_2ab0c1.webp",
    "description": i18n.language === 'ar' ? 'مسكن فاخر بارتفاع سقف 3.20 متر في أفضل موقع في باسن إكسبريس' : i18n.language === 'ru' ? 'Роскошные резиденции с высотой потолков 3,20 м в лучшем месте Басын Экспресса' : i18n.language === 'en' ? 'Luxury residences with 3.20m ceiling height at the finest location in Basin Ekspres' : '3.20m tavan yüksekliğine sahip, Basın Ekspres\'in en lüks rezidans daireleri.',
    "brand": {
      "@type": "Brand",
      "name": "Luxera"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://luxeratowers.com/rezidanslar",
      "priceCurrency": "USD",
      "lowPrice": "300000",
      "offerCount": "369"
    }
  };

  // 4. FAQ Schema (Sadece SSS Sayfasında)
  const isFaqPage = location.pathname.includes('sss');
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": i18n.language === 'ar' ? 'متى سيتم تسليم المشروع؟' : i18n.language === 'ru' ? 'Когда будет завершен проект?' : i18n.language === 'en' ? 'When will the project be completed?' : 'Proje ne zaman teslim edilecek?',
        "acceptedAnswer": {
          "@type": "Answer",
          "text": i18n.language === 'ar' ? 'من المتوقع تسليم مشروع لوكسيرا تاورز في ديسمبر 2025' : i18n.language === 'ru' ? 'Проект Luxera Towers планируется к сдаче в декабре 2025 года' : i18n.language === 'en' ? 'Luxera Towers project is planned for completion in December 2025' : 'Luxera Towers projesinin teslim tarihi Aralık 2025 olarak planlanmıştır.'
        }
      },
      {
        "@type": "Question",
        "name": i18n.language === 'ar' ? 'ما هي مميزات الاستثمار في المشروع؟' : i18n.language === 'ru' ? 'Какие преимущества инвестирования в проект?' : i18n.language === 'en' ? 'What are the investment advantages?' : 'Projeden daire almanın yatırım avantajı nedir?',
        "acceptedAnswer": {
          "@type": "Answer",
          "text": i18n.language === 'ar' ? 'بسبب موقع باسن إكسبريس، يتوقع أن تشهد الدراسات المالية ارتفاعا بنسبة 120% في القيمة عند اكتمال المشروع' : i18n.language === 'ru' ? 'Благодаря местоположению на Басын Экспресс, ожидается увеличение стоимости примерно на 120% после завершения проекта' : i18n.language === 'en' ? 'Due to Basin Ekspres location, the project is expected to appreciate approximately 120% upon completion' : 'Basın Ekspres lokasyonu sayesinde projenin tamamlandığında ortalama %120 değer artışı sağlaması öngörülmektedir.'
        }
      }
    ]
  };

  // Tüm şemaları bir dizi içinde topla
  const schemas = [realEstateSchema, breadcrumbSchema];
  if (isProductPage) schemas.push(productSchema);
  if (isFaqPage) schemas.push(faqSchema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
};

export default SchemaMarkup;

