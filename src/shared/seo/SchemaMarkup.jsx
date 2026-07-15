import React from 'react';
import { useLocation } from 'react-router-dom';
import { defaultSEO } from './seoConfig';

const SchemaMarkup = () => {
  const location = useLocation();

  // 1. Real Estate & Local Business Schema (Her sayfada ortak)
  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Luxera Towers Satış Ofisi",
    "image": "https://luxeratowers.com/images/seo/og-home.webp",
    "url": "https://luxeratowers.com",
    "telephone": "+902120000000",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Basın Ekspres Yolu",
      "addressLocality": "Güneşli",
      "addressRegion": "İstanbul",
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
        "name": "Ana Sayfa",
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
    "name": "Luxera Towers Lüks Rezidans",
    "image": "https://luxeratowers.com/images/interior/10_2025-12-18_02-42-20_2ab0c1.webp",
    "description": "3.20m tavan yüksekliğine sahip, Basın Ekspres'in en lüks rezidans daireleri.",
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
        "name": "Proje ne zaman teslim edilecek?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Luxera Towers projesinin teslim tarihi Aralık 2025 olarak planlanmıştır."
        }
      },
      {
        "@type": "Question",
        "name": "Projeden daire almanın yatırım avantajı nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basın Ekspres lokasyonu sayesinde projenin tamamlandığında ortalama %120 değer artışı sağlaması öngörülmektedir."
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
