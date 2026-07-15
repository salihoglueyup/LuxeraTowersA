// Proje geneli ortak veriler (luxera.com.tr/towers referans alındı).
// Footer, Contact, About vb. tek kaynaktan beslenir.

export const siteMeta = {
  slogan: 'Şehrin Kalbinden Yükselen Ayrıcalık',
  tagline: "Luxera Towers ile Bugünden Geleceğe Uzanan Yaşamı Keşfedin",
  concept: 'Basın Ekspres’in Kulesi — Gökyüzü Bahçeleri',
  developer: 'Luxera GYO',
};

export const siteStats = {
  residences: 369,        // Özel rezidans sayısı
  stores: 87,             // Lüks mağaza sayısı
  towers: 3,              // Kule sayısı
  landscapeRatio: '65%',  // Yeşil / peyzaj oranı
  delivery: '2026 Q4',    // Teslim dönemi
};

export const contactInfo = {
  salesOffice: 'Bağlar Mah. Koçman Cad. No:69 Bağcılar / İstanbul',
  addressShort: 'Bağlar Mah. Koçman Cad. No:69 Bağcılar / İstanbul',
  phonePrimary: '444 34 35',
  phoneSecondary: '',
  email: 'info@luxera.com.tr',
  hoursWeekday: '10:00 - 18:00',
  hoursWeekend: '10:00 - 18:00',
  hoursNote: '7 Gün 10:00 - 18:00',
  // API anahtarı gerektirmeyen Google Maps embed sorgusu
  mapQuery: 'Luxera Towers Bağlar Koçman Caddesi No:69 Bağcılar İstanbul',
  googleMapsUrl: 'https://maps.app.goo.gl/PszbuzgKxHNYtbLNA',
};

export const socialLinks = {
  instagram: 'https://www.instagram.com/luxeragyo/',
  facebook: 'https://www.facebook.com/luxeragyo',
  youtube: 'https://www.youtube.com/@luxeragyo/featured',
  linkedin: 'https://tr.linkedin.com/company/luxeragyo',
};

// Google Maps embed URL üretici (API anahtarsız çalışır)
export const mapEmbedUrl = (query = contactInfo.mapQuery) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
