// Müşteri / yatırımcı / ticari kiracı yorumları.
// NOT: İsimler ve roller YER TUTUCUDUR — gerçek referanslar geldiğinde değiştirin.
// `avatar` opsiyoneldir; boşsa ismin baş harfleri kullanılır.
// `category`: 'resident' (sakin) | 'investor' (yatırımcı) | 'commercial' (ticari) | 'general'

export const testimonials = [
  {
    name: 'A. Yılmaz',
    role: 'Rezidans Sakini',
    category: 'resident',
    rating: 5,
    avatar: null,
    quote:
      'Sabah spor salonundan çıkıp asansörle ofisimin bulunduğu kata inebiliyorum. Luxera Towers gerçekten "hayatı bir adıma indiriyor". Ailemle geçirdiğim zaman ikiye katlandı.',
  },
  {
    name: 'M. Demir',
    role: 'Yatırımcı',
    category: 'investor',
    rating: 5,
    avatar: null,
    quote:
      'Basın Ekspres bölgesinin yükselişini yıllardır takip ediyordum. Karma konsept ve metro yakınlığı, aradığım likidite ve kira güvencesini bir arada sunuyor. Doğru zamanda doğru karar oldu.',
  },
  {
    name: 'S. Kaya',
    role: 'Ticari Kiracı — Perakende',
    category: 'commercial',
    rating: 5,
    avatar: null,
    quote:
      'Cadde üzeri görünürlük ve AVM içi yaya trafiği, markamızın bilinirliğini ilk aydan itibaren artırdı. Konumun ticari potansiyeli beklentimizin üzerinde çıktı.',
  },
  {
    name: 'E. Şahin',
    role: 'Rezidans Sakini',
    category: 'resident',
    rating: 5,
    avatar: null,
    quote:
      '3.20 metrelik tavanlar ve panoramik camlar sayesinde eve girdiğim an şehrin gürültüsü geride kalıyor. Concierge ekibi her talebi bir telefonla hallediyor; otel konforu evimde.',
  },
  {
    name: 'B. Aydın',
    role: 'Yabancı Yatırımcı',
    category: 'investor',
    rating: 5,
    avatar: null,
    quote:
      'Vatandaşlık ve tapu sürecinin tamamı uçtan uca yönetildi. Süreç boyunca şeffaf ve hızlı bir iletişim vardı; İstanbul’daki ilk yatırımım için güven verici bir deneyim oldu.',
  },
  {
    name: 'C. Öztürk',
    role: 'Ticari Kiracı — Gastronomi',
    category: 'commercial',
    rating: 5,
    avatar: null,
    quote:
      'Teras katındaki konumumuz hem rezidans sakinleri hem de bölge misafirleri için bir buluşma noktasına dönüştü. Doğru marka-mix planlaması işimize değer kattı.',
  },
];

// Kategoriye göre filtreleme yardımcı fonksiyonu (Testimonials bileşeninde kullanılır)
export const testimonialsByCategory = (category) =>
  category ? testimonials.filter((t) => t.category === category) : testimonials;
