import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Download, Lock, ExternalLink, CreditCard, Wrench, Calendar, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { residences } from '../../data/residences';
import CatalogModal from '../../features/lead/CatalogModal';
import LanguageSwitcher from '../../shared/ui/LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const location = useLocation();

  // Her sayfa değişiminde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: t('nav.projectAndLife', 'Proje & Yaşam'), 
      path: '#',
      hasDropdown: true,
      subLinks: [
        { name: t('nav.discover', 'Projeyi Keşfet'), path: '/kesfet' },
        { name: t('nav.location', 'Konum & Ulaşım'), path: '/konum' },
        { name: t('nav.virtualTour', 'Sanal Tur'), path: '/sanal-tur' },
        { name: t('nav.guide', 'Yaşam Rehberi'), path: '/rehber' }
      ]
    },
    { 
      name: t('nav.residences', 'Rezidanslar'), 
      path: '/rezidanslar',
      hasMega: true 
    },
    { 
      name: t('nav.privileges', 'Ayrıcalıklar'), 
      path: '/ayricaliklar',
      hasDropdown: true,
      subLinks: [
        { name: t('nav.privilegesHome', 'Ayrıcalıklar Anasayfa'), path: '/ayricaliklar' },
        { name: t('nav.concierge', '7/24 Concierge'), path: '/ayricaliklar/concierge' },
        { name: t('nav.security', 'Özel Güvenlik'), path: '/ayricaliklar/guvenlik' },
        { name: t('nav.valet', 'Vale & Otopark'), path: '/ayricaliklar/vale' },
        { name: t('nav.fitness', 'Fitness & SPA'), path: '/ayricaliklar/fitness' },
        { name: t('nav.housekeeping', 'Housekeeping'), path: '/ayricaliklar/housekeeping' },
        { name: t('nav.lounge', 'Lounge Alanı'), path: '/ayricaliklar/lounge' }
      ]
    },
    { 
      name: t('nav.commercialAndInvestment', 'Ticari & Yatırım'), 
      path: '#',
      hasDropdown: true,
      subLinks: [
        { name: t('nav.commercial', 'Ticari Üniteler'), path: '/ticari' },
        { name: t('nav.offices', 'Ofisler & Şirketler'), path: '/ofisler' },
        { name: t('nav.stores', 'Mağazalar & Markalar'), path: '/magazalar' },
        { name: t('nav.dining', 'Yeme & İçme'), path: '/yeme-icme' },
        { name: t('nav.mall', 'AVM & Yaşam'), path: '/yasam' },
        { name: t('nav.investment', 'Yatırım Değeri'), path: '/yatirim' }
      ]
    },
    { 
      name: t('nav.media', 'Medya'), 
      path: '#',
      hasDropdown: true,
      subLinks: [
        { name: t('nav.gallery', 'Galeri'), path: '/galeri' },
        { name: t('nav.luxeraTv', 'Luxera TV'), path: '/videolar' },
        { name: t('nav.virtualTour', 'Sanal Tur'), path: '/sanal-tur' },
        { name: t('nav.press', 'Basında Biz'), path: '/basinda-biz' },
        { name: t('nav.events', 'Haberler & Etkinlikler'), path: '/etkinlikler' }
      ]
    },
    { name: t('nav.contact', 'İletişim'), path: '/iletisim' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-luxera-navy/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6'}`}>
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/logo/logo.webp" alt="Luxera Towers" className="h-12 w-auto brightness-0 invert" />
          </Link>
          
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center text-sm tracking-wider uppercase text-gray-300">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => {
                  if (link.hasMega) setShowMegaMenu(true);
                  if (link.hasDropdown) setActiveDropdown(link.name);
                }}
                onMouseLeave={() => {
                  if (link.hasMega) setShowMegaMenu(false);
                  if (link.hasDropdown) setActiveDropdown(null);
                }}
              >
                <Link 
                  to={link.path} 
                  className={`flex items-center gap-1 transition-colors py-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap ${(location.pathname === link.path && link.path !== '#') ? 'text-luxera-gold' : 'hover:text-luxera-gold'}`}
                >
                  {link.name}
                  {(link.hasMega || link.hasDropdown) && <ChevronDown size={14} className={`transition-transform duration-300 ${(showMegaMenu && link.hasMega) || (activeDropdown === link.name) ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.hasMega && (
                  <AnimatePresence>
                    {showMegaMenu && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full start-1/2 -translate-x-1/2 rtl:translate-x-1/2 mt-4 w-[600px] bg-luxera-navy/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-4"
                      >
                        {residences.map((plan) => (
                          <Link key={plan.id} to="/rezidanslar" className="group/item flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden flex items-center justify-center p-1 border border-luxera-gold/10 group-hover/item:border-luxera-gold/30">
                              <img src={plan.planImg} alt={`${plan.id} Plan`} className="w-full h-full object-contain mix-blend-screen group-hover/item:scale-110 transition-transform" />
                            </div>
                            <div>
                              <p className="text-white font-serif text-lg">{plan.id} {t('nav.residence', 'Rezidans')}</p>
                              <p className="text-luxera-gold text-xs">{t('nav.viewPlans', 'Planları İncele')}</p>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Standard Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full start-1/2 -translate-x-1/2 rtl:translate-x-1/2 mt-4 min-w-[240px] bg-luxera-navy/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4 flex flex-col gap-2 z-50 whitespace-nowrap"
                      >
                        {link.subLinks.map((sub, idx) => (
                          <Link 
                            key={idx} 
                            to={sub.path} 
                            className="text-white hover:text-luxera-gold hover:bg-white/5 px-8 py-3 rounded-lg transition-colors font-serif tracking-wide text-start"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <button 
              onClick={() => setShowLeadModal(true)}
              className="border border-luxera-gold text-luxera-gold px-6 py-2 rounded-sm hover:bg-luxera-gold hover:text-white transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              {t('common.downloadCatalog', 'Katalog İndir')} <Download size={16} />
            </button>

            {/* SAKİNLER PORTALI AÇILIR MENÜ (DROPDOWN) */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('residentPortal')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/sakinler-portali"
                className={`border px-5 py-2 rounded-sm transition-all flex items-center gap-2 ${
                  (location.pathname === '/sakinler-portali' || activeDropdown === 'residentPortal')
                  ? 'border-luxera-gold text-luxera-gold bg-luxera-gold/10'
                  : 'border-white/20 text-white hover:bg-white/10'
                }`}
              >
                {t('nav.residentPortal', 'Sakinler Portalı')}
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'residentPortal' ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {activeDropdown === 'residentPortal' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full end-0 mt-4 min-w-[260px] bg-luxera-navy/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4 flex flex-col gap-2 z-50 whitespace-nowrap"
                  >
                    <Link 
                      to="/sakinler-portali" 
                      className="group/link text-white hover:text-luxera-gold hover:bg-white/5 px-6 py-3 rounded-lg transition-colors font-serif tracking-wide flex items-center gap-3"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <LayoutDashboard size={16} className="text-luxera-gold" /> Portal Anasayfa
                    </Link>
                    <Link 
                      to="/portal/finans" 
                      className="group/link text-white hover:text-luxera-gold hover:bg-white/5 px-6 py-3 rounded-lg transition-colors font-serif tracking-wide flex items-center gap-3"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <CreditCard size={16} className="text-luxera-gold" /> Finans & Aidat
                    </Link>
                    <Link 
                      to="/portal/destek" 
                      className="group/link text-white hover:text-luxera-gold hover:bg-white/5 px-6 py-3 rounded-lg transition-colors font-serif tracking-wide flex items-center gap-3"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Wrench size={16} className="text-luxera-gold" /> Konsiyerj & Destek
                    </Link>
                    <Link 
                      to="/portal/tesisler" 
                      className="group/link text-white hover:text-luxera-gold hover:bg-white/5 px-6 py-3 rounded-lg transition-colors font-serif tracking-wide flex items-center gap-3"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Calendar size={16} className="text-luxera-gold" /> Sosyal Yaşam & SPA
                    </Link>
                    
                    <div className="h-px bg-white/10 my-2"></div>
                    
                    <Link 
                      to="/portal/login" 
                      className="group/link text-white hover:text-luxera-navy hover:bg-luxera-gold px-6 py-3 rounded-lg transition-all font-serif tracking-wide flex items-center gap-3"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Lock size={16} className="text-luxera-gold group-hover/link:text-luxera-navy transition-colors" /> Sisteme Giriş 
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-s border-white/20 ps-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Toggle & Lang & Resident */}
          <div className="lg:hidden flex items-center gap-3 z-[60]">
            <Link to="/sakinler-portali" className="text-white text-xs border border-white/20 px-2 py-1 rounded">Sakinler</Link>
            <LanguageSwitcher />
            <button className="text-white" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Full-Screen Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: "tween", duration: 0.5 }}
              className="fixed inset-0 bg-luxera-navy/98 backdrop-blur-3xl z-50 flex flex-col items-center py-20 space-y-8 overflow-y-auto no-scrollbar"
            >
              {navLinks.map((link, idx) => (
                <motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (idx * 0.1) }} className="flex flex-col items-center">
                  <Link to={link.path !== '#' ? link.path : '#'} className="text-3xl font-serif text-white hover:text-luxera-gold transition-colors text-center" onClick={() => link.path !== '#' && setMobileMenu(false)}>
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="flex flex-col items-center mt-4 space-y-4">
                      {link.subLinks.map((sub, sidx) => (
                        <Link key={sidx} to={sub.path} className="text-xl text-gray-400 hover:text-luxera-gold transition-colors" onClick={() => setMobileMenu(false)}>
                          - {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Mobil Menü Sakinler Portalı Linkleri */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col items-center pt-8 border-t border-white/10 w-3/4">
                <Link to="/sakinler-portali" className="text-3xl font-serif text-white hover:text-luxera-gold transition-colors text-center" onClick={() => setMobileMenu(false)}>
                  Sakinler Portalı
                </Link>
                <div className="flex flex-col items-center mt-4 space-y-4">
                  <Link to="/portal/finans" className="text-xl text-gray-400 hover:text-luxera-gold transition-colors" onClick={() => setMobileMenu(false)}>- Finans & Aidat</Link>
                  <Link to="/portal/destek" className="text-xl text-gray-400 hover:text-luxera-gold transition-colors" onClick={() => setMobileMenu(false)}>- Konsiyerj & Destek</Link>
                  <Link to="/portal/tesisler" className="text-xl text-gray-400 hover:text-luxera-gold transition-colors" onClick={() => setMobileMenu(false)}>- Sosyal Yaşam & SPA</Link>
                  <Link to="/portal/login" className="text-xl text-luxera-gold hover:text-white transition-colors flex items-center gap-2" onClick={() => setMobileMenu(false)}>
                    - Sisteme Giriş
                  </Link>
                </div>
              </motion.div>

              <motion.button 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                onClick={() => { setMobileMenu(false); setShowLeadModal(true); }}
                className="mt-8 bg-luxera-gold text-white px-8 py-4 rounded-sm uppercase tracking-widest text-sm"
              >
                {t('common.downloadCatalog', 'Katalog İndir')}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Lead Generation Modal */}
      <CatalogModal open={showLeadModal} onClose={() => setShowLeadModal(false)} />
    </>
  );
};

export default Navbar;
