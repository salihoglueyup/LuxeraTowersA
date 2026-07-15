import React, { useState } from 'react';
import { MapPin, Mail, Clock, PhoneCall, ShieldCheck, Award, Smartphone, Navigation, CheckCircle2 } from 'lucide-react';
import { contactInfo, socialLinks } from '../../data/site';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Instagram = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Facebook = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Youtube = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;
const Linkedin = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

const telHref = `tel:${contactInfo.phonePrimary.replace(/\s/g, '')}`;

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    // Backend entegrasyonu ileride; şimdilik başarı durumu gösterilir.
    console.log('Newsletter kaydı:', email);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-black pt-20 border-t border-luxera-gold/20 overflow-hidden relative">
      {/* Deco Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxera-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Section: Newsletter & Badges */}
        <div className="flex flex-col lg:flex-row justify-between items-center pb-16 border-b border-white/10 gap-8">
          <div className="max-w-xl w-full">
            <h3 className="text-2xl font-serif text-white mb-2">{t('footer.newsletter.title', 'Ayrıcalıklardan İlk Sizin Haberiniz Olsun')}</h3>
            <p className="text-gray-400 text-sm mb-6">{t('footer.newsletter.desc', 'Lansmana özel fırsatlar, etkinlikler ve yeniliklerden anında haberdar olmak için e-bültene kayıt olun.')}</p>
            {subscribed ? (
              <div className="flex items-center gap-3 text-luxera-gold bg-luxera-gold/10 border border-luxera-gold/30 rounded-sm px-4 py-3">
                <CheckCircle2 size={20} />
                <span className="text-sm">{t('footer.newsletter.success', 'Kaydınız alındı. Teşekkürler!')}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder', 'E-posta Adresiniz')}
                  className="bg-luxera-charcoal border border-white/10 px-4 py-3 rounded-sm text-white focus:border-luxera-gold outline-none w-full transition-colors"
                />
                <button type="submit" className="bg-luxera-gold text-luxera-navy px-6 py-3 rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-xs font-bold shrink-0">{t('footer.newsletter.submit', 'Kayıt Ol')}</button>
              </form>
            )}
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-3 bg-luxera-charcoal border border-white/5 px-6 py-4 rounded-xl">
              <ShieldCheck className="text-luxera-gold" size={32} />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{t('footer.badges.certTitle', 'Sertifika')}</p>
                <p className="text-white font-serif text-sm">{t('footer.badges.certDesc', 'LEED Gold Adayı')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-luxera-charcoal border border-white/5 px-6 py-4 rounded-xl">
              <Award className="text-luxera-gold" size={32} />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{t('footer.badges.awardTitle', 'Ödül 2026')}</p>
                <p className="text-white font-serif text-sm">{t('footer.badges.awardDesc', 'En İyi Karma Proje')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-white/10">

          {/* Brand & App */}
          <div className="lg:col-span-2">
            <img src="/images/logo/logo.webp" alt="Luxera Towers" className="h-12 w-auto brightness-0 invert mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              {t('footer.about', 'Basın Ekspres\'in kalbinde, uluslararası standartlarda bir yaşam, seçkin ayrıcalıklar ve yüksek kârlı ticari fırsatların birleştiği İstanbul\'un yeni sembolü.')}
            </p>

            {/* Socials */}
            <div className="flex gap-3 mb-10">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-luxera-gold hover:border-luxera-gold transition-colors"><Instagram size={18}/></a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-luxera-gold hover:border-luxera-gold transition-colors"><Facebook size={18}/></a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-luxera-gold hover:border-luxera-gold transition-colors"><Youtube size={18}/></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-luxera-gold hover:border-luxera-gold transition-colors"><Linkedin size={18}/></a>
            </div>

            {/* App Download (Çok Yakında) */}
            <div>
              <p className="text-white font-serif mb-4">{t('footer.app.title', 'Luxera Life Uygulaması')} <span className="text-luxera-gold/70 text-xs uppercase tracking-widest ml-2">{t('footer.app.comingSoon', 'Çok Yakında')}</span></p>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 bg-luxera-charcoal border border-white/10 px-4 py-2 rounded-lg opacity-60 cursor-not-allowed" title={t('footer.app.comingSoon', 'Çok Yakında')}>
                  <Smartphone size={20} className="text-white" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase">Download on the</p>
                    <p className="text-sm font-semibold text-white">App Store</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-luxera-charcoal border border-white/10 px-4 py-2 rounded-lg opacity-60 cursor-not-allowed" title={t('footer.app.comingSoon', 'Çok Yakında')}>
                  <Smartphone size={20} className="text-white" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase">GET IT ON</p>
                    <p className="text-sm font-semibold text-white">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">{t('footer.links.group1', 'Proje & Yaşam')}</h4>
            <ul className="space-y-4">
              <li><Link to="/kesfet" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.discover', 'Projeyi Keşfet')}</Link></li>
              <li><Link to="/rezidanslar" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('footer.links.residencesPlans', 'Rezidanslar & Planlar')}</Link></li>
              <li><Link to="/konum" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.location', 'Konum & Ulaşım')}</Link></li>
              <li><Link to="/rehber" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.guide', 'Yaşam Rehberi')}</Link></li>
              <li><Link to="/videolar" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.luxeraTv', 'Luxera TV')}</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">{t('footer.links.group2', 'Ticari & Ayrıcalıklar')}</h4>
            <ul className="space-y-4">
              <li><Link to="/ayricaliklar" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.privilegesHome', 'Ayrıcalıklar Anasayfa')}</Link></li>
              <li><Link to="/ayricaliklar/concierge" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.concierge', '7/24 Concierge')}</Link></li>
              <li><Link to="/ticari" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.commercial', 'Ticari Üniteler')}</Link></li>
              <li><Link to="/yasam" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.mall', 'AVM & Yaşam')}</Link></li>
              <li><Link to="/yatirim" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.investment', 'Yatırım Değeri')}</Link></li>
            </ul>
          </div>

          {/* Links Column 3 & Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">{t('footer.links.group3', 'Kurumsal')}</h4>
            <ul className="space-y-4 mb-8">
              <li><Link to="/hakkimizda" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('footer.links.aboutUs', 'Hakkımızda')}</Link></li>
              <li><Link to="/iletisim" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('footer.links.contactNav', 'İletişim & Ulaşım')}</Link></li>
              <li><Link to="/sss" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('footer.links.faq', 'Sık Sorulan Sorular')}</Link></li>
              <li><Link to="/basinda-biz" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.press', 'Basında Biz')}</Link></li>
              <li><Link to="/galeri" className="text-sm text-gray-400 hover:text-luxera-gold transition-colors">{t('nav.gallery', 'Galeri')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 border-b border-white/10">
          {/* Prominent Phone CTA */}
          <a href={telHref} className="group flex items-center gap-4 bg-luxera-gold/10 border border-luxera-gold/30 rounded-2xl p-5 hover:bg-luxera-gold/20 transition-colors">
            <div className="w-12 h-12 rounded-full bg-luxera-gold text-luxera-navy flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform rtl:-scale-x-100">
              <PhoneCall size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">{t('footer.contact.callNow', 'Hemen Arayın')}</p>
              <p className="text-luxera-gold font-serif text-xl ltr">{contactInfo.phonePrimary}</p>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-start gap-4 p-5">
            <MapPin size={22} className="text-luxera-gold shrink-0 mt-1" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t('footer.contact.salesOffice', 'Satış Ofisi')}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{contactInfo.salesOffice}</p>
              <a href={contactInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-luxera-gold text-xs mt-2 hover:underline">
                <Navigation size={12} /> {t('footer.contact.directions', 'Yol Tarifi')}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4 p-5">
            <Clock size={22} className="text-luxera-gold shrink-0 mt-1" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t('footer.contact.workingHours', 'Çalışma Saatleri')}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{contactInfo.hoursNote}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-5">
            <Mail size={22} className="text-luxera-gold shrink-0 mt-1" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t('footer.contact.email', 'E-posta')}</p>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-300 text-sm hover:text-luxera-gold transition-colors break-all">{contactInfo.email}</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Luxera Towers. {t('footer.bottom.rights', 'Tüm hakları saklıdır.')}
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <Link to="/gizlilik" className="hover:text-luxera-gold transition-colors">{t('footer.bottom.privacy', 'Gizlilik Politikası')}</Link>
            <Link to="/kvkk" className="hover:text-luxera-gold transition-colors">{t('footer.bottom.kvkk', 'KVKK Aydınlatma Metni')}</Link>
            <Link to="/cerez" className="hover:text-luxera-gold transition-colors">{t('footer.bottom.cookies', 'Çerez Politikası')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
