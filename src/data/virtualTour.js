// Sanal Tur iin hotspot (bilgi noktas) ieren etkileYimli sahneler.
export const virtualTourScenes = [
  {
    id: 'salon',
    title: 'Salon',
    img: '/images/interior/6_2025-12-18_02-42-20_29be56.webp',
    hotspots: [
      {
        id: 'view',
        x: 45, // yuzde (sol)
        y: 35, // yuzde (ust)
        title: 'Panoramik Manzara',
        desc: 'Yere kadar uzanan panaromik camlarla tüm şehir ayaklarınızın altında.',
      },
      {
        id: 'ceiling',
        x: 60,
        y: 15,
        title: '3.20m Tavan Yüksekliği',
        desc: 'Ferah bir yaşam alanı sunan, basıklıktan uzak yüksek tavan mimarisi.',
      },
      {
        id: 'floor',
        x: 75,
        y: 85,
        title: 'Yerden Isıtma & Lamine Parke',
        desc: 'Birinci sınıf doğal meşe lamine parke ve akıllı yerden ısıtma sistemi.',
      }
    ]
  },
  {
    id: 'mutfak',
    title: 'Açık Mutfak',
    img: '/images/interior/2_2025-12-18_02-42-20_d8b016.webp',
    hotspots: [
      {
        id: 'appliances',
        x: 35,
        y: 50,
        title: 'Gaggenau Ankastre',
        desc: 'Tüm mutfaklarda standart olarak sunulan ultra premium Alman teknolojisi.',
      },
      {
        id: 'cabinet',
        x: 65,
        y: 45,
        title: 'İtalyan Tasarım Dolaplar',
        desc: 'Geniş depolama hacmine sahip, parmak izi bırakmayan mat kapak sistemleri.',
      },
      {
        id: 'counter',
        x: 45,
        y: 70,
        title: 'Porselen Tezgah',
        desc: 'Leke tutmayan, çizilmeye ve ısıya dayanıklı geniş porselen çalışma alanı.',
      }
    ]
  },
  {
    id: 'yatak',
    title: 'Yatak Odası',
    img: '/images/interior/7_2025-12-18_02-42-20_35374f.webp',
    hotspots: [
      {
        id: 'wardrobe',
        x: 20,
        y: 50,
        title: 'Giyinme Alanı',
        desc: 'Geniş hacimli, aydınlatmalı gömme dolap ve giyinme modülleri.',
      },
      {
        id: 'bed',
        x: 55,
        y: 65,
        title: 'Master Bedroom',
        desc: 'Huzurlu bir uyku için özel ses izolasyonlu duvarlar.',
      },
      {
        id: 'window',
        x: 85,
        y: 40,
        title: 'Geniş Cam Yüzeyler',
        desc: 'Güneş ışığını maksimum içeri alan geniş camlar ve otomatik panjur altyapısı.',
      }
    ]
  },
  {
    id: 'cocuk-odasi',
    title: 'Çocuk Odası',
    img: '/images/interior/4_2025-12-18_02-42-20_d1aa12.webp',
    hotspots: [
      {
        id: 'study',
        x: 20,
        y: 60,
        title: 'Çalışma ve Oyun Alanı',
        desc: 'Çocukların gelişimi için tasarlanmış, gün ışığı alan ferah köşe.',
      },
      {
        id: 'kidsbed',
        x: 65,
        y: 70,
        title: 'Konforlu Yatak',
        desc: 'Ergonomik tasarımlı, çocuklara özel sağlıklı uyku alanı.',
      }
    ]
  }
];
