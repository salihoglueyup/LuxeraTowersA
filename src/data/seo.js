// Rota bazlı sayfa başlık anahtarları (SPA gezinmesinde document.title güncellenir).
// Anahtar: rota yolu. Değer: i18n çeviri anahtarı.
const SUFFIX = 'Luxera Towers';

export const pageTitleKeys = {
  '/': 'pageTitles.home',
  '/kesfet': 'pageTitles.discover',
  '/rezidanslar': 'pageTitles.residences',
  '/yasam': 'pageTitles.mall',
  '/galeri': 'pageTitles.gallery',
  '/iletisim': 'pageTitles.contact',
  '/konum': 'pageTitles.location',
  '/yatirim': 'pageTitles.investment',
  '/ticari': 'pageTitles.commercial',
  '/sanal-tur': 'pageTitles.virtualTour',
  '/sss': 'pageTitles.faq',
  '/ayricaliklar': 'pageTitles.privileges',
  '/ayricaliklar/concierge': 'pageTitles.concierge',
  '/ayricaliklar/guvenlik': 'pageTitles.security',
  '/ayricaliklar/vale': 'pageTitles.valet',
  '/ayricaliklar/fitness': 'pageTitles.fitness',
  '/ayricaliklar/housekeeping': 'pageTitles.housekeeping',
  '/ayricaliklar/lounge': 'pageTitles.lounge',
  '/rehber': 'pageTitles.guide',
  '/basinda-biz': 'pageTitles.press',
  '/videolar': 'pageTitles.videos',
  '/etkinlikler': 'pageTitles.events',
  '/hakkimizda': 'pageTitles.about',
  '/kvkk': 'pageTitles.kvkk',
  '/gizlilik': 'pageTitles.privacy',
  '/cerez': 'pageTitles.cookies',
  '/offices': 'pageTitles.offices',
  '/stores': 'pageTitles.stores',
  '/dining': 'pageTitles.dining',
  '/portal': 'pageTitles.residentPortal',
};

export const DEFAULT_TITLE = `${SUFFIX} | Basın Ekspres'te Gökyüzü Bahçeleri`;

export const getPageTitleKey = (pathname) => pageTitleKeys[pathname] || 'pageTitles.default';
