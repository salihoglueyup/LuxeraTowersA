// Sanal Tur iin hotspot (bilgi noktas) ieren etkileYimli sahneler.
export const getVirtualTourScenes = (t) => [
  {
    id: 'salon',
    title: t('virtualTour.scenes.s1.title', 'Salon'),
    img: '/images/interior/6_2025-12-18_02-42-20_29be56.webp',
    hotspots: [
      {
        id: 'view',
        x: 45, // yuzde (sol)
        y: 35, // yuzde (ust)
        title: t('virtualTour.scenes.s1.h1.title', 'Panoramik Manzara'),
        desc: t('virtualTour.scenes.s1.h1.desc', 'Yere kadar uzanan panaromik camlarla tüm şehir ayaklarınızın altında.'),
      },
      {
        id: 'ceiling',
        x: 60,
        y: 15,
        title: t('virtualTour.scenes.s1.h2.title', '3.20m Tavan Yüksekliği'),
        desc: t('virtualTour.scenes.s1.h2.desc', 'Ferah bir yaşam alanı sunan, basıklıktan uzak yüksek tavan mimarisi.'),
      },
      {
        id: 'floor',
        x: 75,
        y: 85,
        title: t('virtualTour.scenes.s1.h3.title', 'Yerden Isıtma & Lamine Parke'),
        desc: t('virtualTour.scenes.s1.h3.desc', 'Birinci sınıf doğal meşe lamine parke ve akıllı yerden ısıtma sistemi.'),
      }
    ]
  },
  {
    id: 'mutfak',
    title: t('virtualTour.scenes.s2.title', 'Açık Mutfak'),
    img: '/images/interior/2_2025-12-18_02-42-20_d8b016.webp',
    hotspots: [
      {
        id: 'appliances',
        x: 35,
        y: 50,
        title: t('virtualTour.scenes.s2.h1.title', 'Gaggenau Ankastre'),
        desc: t('virtualTour.scenes.s2.h1.desc', 'Tüm mutfaklarda standart olarak sunulan ultra premium Alman teknolojisi.'),
      },
      {
        id: 'cabinet',
        x: 65,
        y: 45,
        title: t('virtualTour.scenes.s2.h2.title', 'İtalyan Tasarım Dolaplar'),
        desc: t('virtualTour.scenes.s2.h2.desc', 'Geniş depolama hacmine sahip, parmak izi bırakmayan mat kapak sistemleri.'),
      },
      {
        id: 'counter',
        x: 45,
        y: 70,
        title: t('virtualTour.scenes.s2.h3.title', 'Porselen Tezgah'),
        desc: t('virtualTour.scenes.s2.h3.desc', 'Leke tutmayan, çizilmeye ve ısıya dayanıklı geniş porselen çalışma alanı.'),
      }
    ]
  },
  {
    id: 'yatak',
    title: t('virtualTour.scenes.s3.title', 'Yatak Odası'),
    img: '/images/interior/7_2025-12-18_02-42-20_35374f.webp',
    hotspots: [
      {
        id: 'wardrobe',
        x: 20,
        y: 50,
        title: t('virtualTour.scenes.s3.h1.title', 'Giyinme Alanı'),
        desc: t('virtualTour.scenes.s3.h1.desc', 'Geniş hacimli, aydınlatmalı gömme dolap ve giyinme modülleri.'),
      },
      {
        id: 'bed',
        x: 55,
        y: 65,
        title: t('virtualTour.scenes.s3.h2.title', 'Master Bedroom'),
        desc: t('virtualTour.scenes.s3.h2.desc', 'Huzurlu bir uyku için özel ses izolasyonlu duvarlar.'),
      },
      {
        id: 'window',
        x: 85,
        y: 40,
        title: t('virtualTour.scenes.s3.h3.title', 'Geniş Cam Yüzeyler'),
        desc: t('virtualTour.scenes.s3.h3.desc', 'Güneş ışığını maksimum içeri alan geniş camlar ve otomatik panjur altyapısı.'),
      }
    ]
  },
  {
    id: 'cocuk-odasi',
    title: t('virtualTour.scenes.s4.title', 'Çocuk Odası'),
    img: '/images/interior/4_2025-12-18_02-42-20_d1aa12.webp',
    hotspots: [
      {
        id: 'study',
        x: 20,
        y: 60,
        title: t('virtualTour.scenes.s4.h1.title', 'Çalışma ve Oyun Alanı'),
        desc: t('virtualTour.scenes.s4.h1.desc', 'Çocukların gelişimi için tasarlanmış, gün ışığı alan ferah köşe.'),
      },
      {
        id: 'kidsbed',
        x: 65,
        y: 70,
        title: t('virtualTour.scenes.s4.h2.title', 'Konforlu Yatak'),
        desc: t('virtualTour.scenes.s4.h2.desc', 'Ergonomik tasarımlı, çocuklara özel sağlıklı uyku alanı.'),
      }
    ]
  }
];
