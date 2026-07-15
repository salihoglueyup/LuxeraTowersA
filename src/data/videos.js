// Luxera TV — video listesi.
// `youtubeId` gerçek video ID'si geldiğinde doldurulur; boşsa `mp4` demo oynatılır.
// thumbnail: youtubeId varsa otomatik YouTube küçük resmi, yoksa proje render'ı.

export const HERO_DEMO_MP4 = '/video/luxera-hero.mp4';

// YouTube thumbnail üretici
const ytThumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export const videos = [
  {
    title: 'Luxera Towers Tanıtım Filmi',
    duration: 'Fragman',
    category: 'Tanıtım',
    youtubeId: 'nhFdIkyN1Dk', // luxera.com.tr/towers resmi tanıtım filmi
    mp4: HERO_DEMO_MP4,
    thumbnail: ytThumb('nhFdIkyN1Dk'),
  },
  {
    title: 'Luxera Towers Nerede? — Konum & Ulaşım',
    duration: '60 sn',
    category: 'Bölge Rehberi',
    youtubeId: '5KSZPKvv4PY', // resmi konum tanıtım videosu
    mp4: HERO_DEMO_MP4,
    thumbnail: ytThumb('5KSZPKvv4PY'),
  },
  {
    title: "Basın Ekspres'te Yaşam",
    duration: '4:20',
    category: 'Yaşam',
    youtubeId: null, // gerçek link gelince doldur
    mp4: HERO_DEMO_MP4,
    thumbnail: '/images/amenities/d5_scene20_20240303_013151copy_2025-12-18_03-46-29_42c7ac.webp',
  },
  {
    title: 'Örnek Daire Gezisi',
    duration: '5:15',
    category: 'İç Mimari',
    youtubeId: null, // gerçek link gelince doldur
    mp4: HERO_DEMO_MP4,
    thumbnail: '/images/interior/d5_scene7_20240304_220754copy_2025-12-18_03-47-03_62285d.webp',
  },
];

// Sanal tur — 360°/Matterport linki gelince doldur. Boşsa örnek daire video turu gösterilir.
export const virtualTour = {
  matterportUrl: null,
  fallbackImg: '/images/interior/d5_scene7_20240304_220754copy_2025-12-18_03-47-03_62285d.webp',
  scenes: [
    { title: 'Salon', img: '/images/interior/6_2025-12-18_02-42-20_29be56.webp' },
    { title: 'Mutfak', img: '/images/interior/d5_scene7_20240304_220754copy_2025-12-18_03-47-03_62285d.webp' },
    { title: 'Yatak Odası', img: '/images/interior/7_2025-12-18_02-42-20_35374f.webp' },
    { title: 'Banyo', img: '/images/interior/d5_scene3_20240304_221324copy_2025-12-18_03-47-03_b3ced7.webp' },
  ],
};
