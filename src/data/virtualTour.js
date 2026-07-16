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
    title: 'Mutfak',
    img: '/images/interior/d5_scene7_20240304_220754copy_2025-12-18_03-47-03_62285d.webp',
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
    id: 'banyo',
    title: 'Banyo',
    img: '/images/interior/d5_scene3_20240304_221324copy_2025-12-18_03-47-03_b3ced7.webp',
    hotspots: [
      {
        id: 'shower',
        x: 45,
        y: 45,
        title: 'Walk-in Duş',
        desc: 'Termostatik ankastre duş bataryası ve geniş cam kabin.',
      },
      {
        id: 'sink',
        x: 75,
        y: 60,
        title: 'Doğal Taş & Seramik',
        desc: 'A Kalite İtalyan seramikleri ve şık çift lavabo tasarımı.',
      }
    ]
  }
];
