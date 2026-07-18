// Katalog (lead) formu seçenek verileri — kolay düzenlenebilir.
// value: CRM'e/backend'e gönderilen sabit kanonik değer (dilden bağımsız).
// labelKey: kullanıcıya gösterilen etiketin i18n anahtarı.

// Daire tipleri residences verisinden türetilir + ekstra seçenekler
export const unitTypeOptions = [
  { value: '1+1', labelKey: 'catalog.opt.unit.u1' },
  { value: '2+1', labelKey: 'catalog.opt.unit.u2' },
  { value: '3+1', labelKey: 'catalog.opt.unit.u3' },
  { value: '4+1 Penthouse', labelKey: 'catalog.opt.unit.penthouse' },
  { value: 'Ticari Ünite', labelKey: 'catalog.opt.unit.commercial' },
  { value: 'Farketmez', labelKey: 'catalog.opt.unit.any' },
];

export const purposeOptions = [
  { value: 'Oturum', labelKey: 'catalog.opt.purpose.residence' },
  { value: 'Yatırım', labelKey: 'catalog.opt.purpose.investment' },
  { value: 'Ticari', labelKey: 'catalog.opt.purpose.commercial' },
];

export const timelineOptions = [
  { value: '0 - 3 Ay', labelKey: 'catalog.opt.timeline.t1' },
  { value: '3 - 6 Ay', labelKey: 'catalog.opt.timeline.t2' },
  { value: '6 - 12 Ay', labelKey: 'catalog.opt.timeline.t3' },
  { value: 'Henüz Araştırıyorum', labelKey: 'catalog.opt.timeline.researching' },
];

export const contactPreferenceOptions = [
  { value: 'Telefon', labelKey: 'catalog.opt.contact.phone' },
  { value: 'E-posta', labelKey: 'catalog.opt.contact.email' },
  { value: 'WhatsApp', labelKey: 'catalog.opt.contact.whatsapp' },
];

export const sourceOptions = [
  { value: 'Google / Arama Motoru', labelKey: 'catalog.opt.source.google' },
  { value: 'Sosyal Medya', labelKey: 'catalog.opt.source.social' },
  { value: 'Tavsiye / Referans', labelKey: 'catalog.opt.source.referral' },
  { value: 'İlan / Reklam', labelKey: 'catalog.opt.source.ad' },
  { value: 'Diğer', labelKey: 'catalog.opt.source.other' },
];

// "Katalogda neler var?" — fiyat bilgisi bilinçli olarak yok.
export const catalogHighlights = [
  'Tüm daire tipleri ve kat planları',
  'Konum, ulaşım ve çevre analizi',
  'Ayrıcalıklar ve sosyal yaşam alanları',
  'Sosyal alan galerisi ve iç mekân görselleri',
  'Teknik künye ve teslim bilgileri',
];
