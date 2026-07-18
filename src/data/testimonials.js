// Müşteri / yatırımcı / ticari kiracı yorumları.
// NOT: İsimler ve roller YER TUTUCUDUR — gerçek referanslar geldiğinde değiştirin.
// `avatar` opsiyoneldir; boşsa ismin baş harfleri kullanılır.
// `category`: 'resident' (sakin) | 'investor' (yatırımcı) | 'commercial' (ticari) | 'general'

export const getTestimonials = (t) => [
  {
    name: 'A. Yılmaz',
    role: t('testimonials.t1.role', 'Rezidans Sakini'),
    category: 'resident',
    rating: 5,
    avatar: null,
    quote: t('testimonials.t1.quote', 'Sabah spor salonundan çıkıp asansörle ofisimin bulunduğu kata inebiliyorum. Luxera Towers gerçekten "hayatı bir adıma indiriyor". Ailemle geçirdiğim zaman ikiye katlandı.'),
  },
  {
    name: 'M. Demir',
    role: t('testimonials.t2.role', 'Yatırımcı'),
    category: 'investor',
    rating: 5,
    avatar: null,
    quote: t('testimonials.t2.quote', 'Basın Ekspres bölgesinin yükselişini yıllardır takip ediyordum. Karma konsept ve metro yakınlığı, aradığım likidite ve kira güvencesini bir arada sunuyor. Doğru zamanda doğru karar oldu.'),
  },
  {
    name: 'S. Kaya',
    role: t('testimonials.t3.role', 'Ticari Kiracı — Perakende'),
    category: 'commercial',
    rating: 5,
    avatar: null,
    quote: t('testimonials.t3.quote', 'Cadde üzeri görünürlük ve AVM içi yaya trafiği, markamızın bilinirliğini ilk aydan itibaren artırdı. Konumun ticari potansiyeli beklentimizin üzerinde çıktı.'),
  },
  {
    name: 'E. Şahin',
    role: t('testimonials.t4.role', 'Rezidans Sakini'),
    category: 'resident',
    rating: 5,
    avatar: null,
    quote: t('testimonials.t4.quote', '3.20 metrelik tavanlar ve panoramik camlar sayesinde eve girdiğim an şehrin gürültüsü geride kalıyor. Concierge ekibi her talebi bir telefonla hallediyor; otel konforu evimde.'),
  },
  {
    name: 'B. Aydın',
    role: t('testimonials.t5.role', 'Yabancı Yatırımcı'),
    category: 'investor',
    rating: 5,
    avatar: null,
    quote: t('testimonials.t5.quote', 'Vatandaşlık ve tapu sürecinin tamamı uçtan uca yönetildi. Süreç boyunca şeffaf ve hızlı bir iletişim vardı; İstanbul’daki ilk yatırımım için güven verici bir deneyim oldu.'),
  },
  {
    name: 'C. Öztürk',
    role: t('testimonials.t6.role', 'Ticari Kiracı — Gastronomi'),
    category: 'commercial',
    rating: 5,
    avatar: null,
    quote: t('testimonials.t6.quote', 'Teras katındaki konumumuz hem rezidans sakinleri hem de bölge misafirleri için bir buluşma noktasına dönüştü. Doğru marka-mix planlaması işimize değer kattı.'),
  },
];

export const getTestimonialsByCategory = (t, category) =>
  category ? getTestimonials(t).filter((item) => item.category === category) : getTestimonials(t);
