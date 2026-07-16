import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, MotionConfig, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import MainLayout from '../layouts/Main';
import Home from '../pages/Home';
import About from '../pages/About'; // We will use this as "Projeyi Keşfet"
import Residences from '../pages/Residences';
import Life from '../pages/Life';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Location from '../pages/Location';
import Investment from '../pages/Investment';
import Commercial from '../pages/Commercial';
import VirtualTour from '../pages/VirtualTour';
import Faq from '../pages/Faq';
import Services from '../pages/Services';
import Guide from '../pages/Guide';
import Media from '../pages/Media';
import Videos from '../pages/Videos';
import Events from '../pages/Events';
import Corporate from '../pages/Corporate';
import Offices from '../pages/Offices';
import Stores from '../pages/Stores';
import Dining from '../pages/Dining';
import ResidentPortal from '../pages/ResidentPortal';
import Finance from '../pages/portal/Finance';
import Support from '../pages/portal/Support';
import Facilities from '../pages/portal/Facilities';
import Guest from '../pages/portal/Guest';
import Login from '../pages/portal/Login';
import Dashboard from '../pages/portal/Dashboard';
import Kvkk from '../pages/Legal/Kvkk';
import Privacy from '../pages/Legal/Privacy';
import Cookies from '../pages/Legal/Cookies';
import NotFound from '../pages/NotFound';
import Concierge from '../pages/privileges/Concierge';
import Security from '../pages/privileges/Security';
import Valet from '../pages/privileges/Valet';
import Fitness from '../pages/privileges/Fitness';
import Housekeeping from '../pages/privileges/Housekeeping';
import Lounge from '../pages/privileges/Lounge';
import Preloader from '../shared/ui/Preloader';
import CustomCursor from '../shared/ui/CustomCursor';
import CookieConsent from '../shared/ui/CookieConsent';
import WhatsAppWidget from '../shared/ui/WhatsAppWidget';
import { HelmetProvider } from 'react-helmet-async';
import SchemaMarkup from '../shared/seo/SchemaMarkup';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <CustomCursor />
        <SchemaMarkup />
        <WhatsAppWidget />
        <CookieConsent />
        <Preloader onComplete={() => setLoading(false)} />
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-luxera-gold z-[99999] origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        
        <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="kesfet" element={<About />} />
                <Route path="rezidanslar" element={<Residences />} />
                <Route path="yasam" element={<Life />} />
                <Route path="galeri" element={<Gallery />} />
                <Route path="iletisim" element={<Contact />} />
                <Route path="konum" element={<Location />} />
                <Route path="yatirim" element={<Investment />} />
                <Route path="ticari" element={<Commercial />} />
                <Route path="sanal-tur" element={<VirtualTour />} />
                <Route path="sss" element={<Faq />} />
                <Route path="ayricaliklar" element={<Services />} />
                <Route path="ayricaliklar/concierge" element={<Concierge />} />
                <Route path="ayricaliklar/guvenlik" element={<Security />} />
                <Route path="ayricaliklar/vale" element={<Valet />} />
                <Route path="ayricaliklar/fitness" element={<Fitness />} />
                <Route path="ayricaliklar/housekeeping" element={<Housekeeping />} />
                <Route path="ayricaliklar/lounge" element={<Lounge />} />
                <Route path="rehber" element={<Guide />} />
                <Route path="basinda-biz" element={<Media />} />
                <Route path="videolar" element={<Videos />} />
                <Route path="etkinlikler" element={<Events />} />
                <Route path="ofisler" element={<Offices />} />
                <Route path="magazalar" element={<Stores />} />
                <Route path="yeme-icme" element={<Dining />} />
                <Route path="sakinler-portali" element={<ResidentPortal />} />
                <Route path="portal/finans" element={<Finance />} />
                <Route path="portal/destek" element={<Support />} />
                <Route path="portal/tesisler" element={<Facilities />} />
                <Route path="portal/misafir" element={<Guest />} />
                <Route path="portal/login" element={<Login />} />
                <Route path="portal/dashboard" element={<Dashboard />} />
                <Route path="hakkimizda" element={<Corporate />} />
                <Route path="kvkk" element={<Kvkk />} />
                <Route path="gizlilik" element={<Privacy />} />
                <Route path="cerez" element={<Cookies />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </div>
      </MotionConfig>
    </HelmetProvider>
  );
}
