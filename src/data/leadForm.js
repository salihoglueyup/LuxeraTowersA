// Katalog (lead) formu seçenek verileri — kolay düzenlenebilir.
import { residences } from './residences';

// Daire tipleri residences verisinden türetilir + ekstra seçenekler
export const unitTypeOptions = [
  ...residences.map((r) => r.id === '4+1' ? '4+1 Penthouse' : r.id),
  'Ticari Ünite',
  'Farketmez',
];

export const purposeOptions = ['Oturum', 'Yatırım', 'Ticari'];

export const timelineOptions = ['0 - 3 Ay', '3 - 6 Ay', '6 - 12 Ay', 'Henüz Araştırıyorum'];

export const contactPreferenceOptions = ['Telefon', 'E-posta', 'WhatsApp'];

export const sourceOptions = [
  'Google / Arama Motoru',
  'Sosyal Medya',
  'Tavsiye / Referans',
  'İlan / Reklam',
  'Diğer',
];

// "Katalogda neler var?" — fiyat bilgisi bilinçli olarak yok.
export const catalogHighlights = [
  'Tüm daire tipleri ve kat planları',
  'Konum, ulaşım ve çevre analizi',
  'Ayrıcalıklar ve sosyal yaşam alanları',
  'Sosyal alan galerisi ve iç mekân görselleri',
  'Teknik künye ve teslim bilgileri',
];
