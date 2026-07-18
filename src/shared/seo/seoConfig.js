const getLocalizedSEO = (language) => {
  const seoData = {
    tr: {
      title: "Luxera Towers | Basın Ekspres'te Gökyüzü Bahçeleri",
      description: "İstanbul Basın Ekspres'te 3 ikonik kule, 369 prestijli rezidans ve 87 mağazalık lüks AVM. Luxera Towers ile gökyüzü bahçeleri ve ayrıcalıklı yaşam.",
      locale: "tr_TR",
    },
    ar: {
      title: "لوكسيرا تاورز | حدائق السماء في باسن إكسبريس",
      description: "في باسن إكسبريس بإسطنبول: 3 أبراج فخمة، 369 مسكناً فاخراً، ومركز تسوق فاخر بـ 87 متجراً. اكتشف نمط حياة فاخر مع حدائق السماء الخاصة.",
      locale: "ar_SA",
    },
    en: {
      title: "Luxera Towers | Sky Gardens in Basin Ekspres",
      description: "3 iconic towers, 369 prestigious residences, and 87-store luxury mall in Istanbul's Basin Ekspres. Experience luxury living with sky gardens and exclusive privileges at Luxera Towers.",
      locale: "en_US",
    },
    ru: {
      title: "Luxera Towers | Небесные сады в Басын Экспрессе",
      description: "3 величественные башни, 369 престижных резиденций и роскошный торговый центр с 87 магазинами в Басын Экспресс Стамбула. Luxera Towers предлагает жизнь класса люкс с небесными садами и исключительными привилегиями.",
      locale: "ru_RU",
    }
  };

  return seoData[language] || seoData.ar;
};

export const getDefaultSEOByLanguage = (language) => {
  const seo = getLocalizedSEO(language);
  
  return {
    title: seo.title,
    description: seo.description,
    canonicalUrl: "https://luxeratowers.com",
    openGraph: {
      type: "website",
      locale: seo.locale,
      url: "https://luxeratowers.com",
      site_name: "Luxera Towers",
      images: [
        {
          url: "https://luxeratowers.com/images/seo/og-home.webp",
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      handle: "@luxeratowers",
      site: "@luxeratowers",
      cardType: "summary_large_image",
    },
  };
};

// Varsayılan Arapça SEO (SSR ve ilk yükleme için)
export const defaultSEO = getDefaultSEOByLanguage('ar');

