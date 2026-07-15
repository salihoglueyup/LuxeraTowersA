// Rota bazlı sayfa başlıkları ve açıklamaları (SPA gezinmesinde document.title güncellenir).
// Anahtar: rota yolu ("/" ana sayfa). Değer: { title, description }.

const SUFFIX = 'Luxera Towers';

export const pageMeta = {
  '/': { title: `${SUFFIX} | Basın Ekspres'te Gökyüzü Bahçeleri` },
  '/kesfet': { title: `Projeyi Keşfet — ${SUFFIX}` },
  '/rezidanslar': { title: `Rezidanslar & Kat Planları — ${SUFFIX}` },
  '/yasam': { title: `AVM & Yaşam — ${SUFFIX}` },
  '/galeri': { title: `Galeri — ${SUFFIX}` },
  '/iletisim': { title: `İletişim — ${SUFFIX}` },
  '/konum': { title: `Konum & Ulaşım — ${SUFFIX}` },
  '/yatirim': { title: `Yatırım Değeri — ${SUFFIX}` },
  '/ticari': { title: `Ticari Üniteler — ${SUFFIX}` },
  '/sanal-tur': { title: `Sanal Tur — ${SUFFIX}` },
  '/sss': { title: `Sık Sorulan Sorular — ${SUFFIX}` },
  '/ayricaliklar': { title: `Ayrıcalıklar — ${SUFFIX}` },
  '/ayricaliklar/concierge': { title: `7/24 Concierge — ${SUFFIX}` },
  '/ayricaliklar/guvenlik': { title: `Özel Güvenlik — ${SUFFIX}` },
  '/ayricaliklar/vale': { title: `Vale & Otopark — ${SUFFIX}` },
  '/ayricaliklar/fitness': { title: `Fitness & SPA — ${SUFFIX}` },
  '/ayricaliklar/housekeeping': { title: `Housekeeping — ${SUFFIX}` },
  '/ayricaliklar/lounge': { title: `Executive Lounge — ${SUFFIX}` },
  '/rehber': { title: `Yaşam Rehberi — ${SUFFIX}` },
  '/basinda-biz': { title: `Basında Biz — ${SUFFIX}` },
  '/videolar': { title: `Luxera TV — ${SUFFIX}` },
  '/etkinlikler': { title: `Haberler & Etkinlikler — ${SUFFIX}` },
  '/hakkimizda': { title: `Hakkımızda — ${SUFFIX}` },
  '/kvkk': { title: `KVKK Aydınlatma Metni — ${SUFFIX}` },
  '/gizlilik': { title: `Gizlilik Politikası — ${SUFFIX}` },
  '/cerez': { title: `Çerez Politikası — ${SUFFIX}` },
};

export const DEFAULT_TITLE = `${SUFFIX} | Basın Ekspres'te Gökyüzü Bahçeleri`;

// Verilen yola göre başlık döndürür (bilinmeyen yolda varsayılan).
export const getPageTitle = (pathname) => pageMeta[pathname]?.title || DEFAULT_TITLE;
