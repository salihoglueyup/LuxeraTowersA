import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from '../../shared/ui/PageTransition';
import BackToTop from '../../shared/ui/BackToTop';
import { getPageTitle } from '../../data/seo';

export default function MainLayout() {
  const location = useLocation();

  // Rota değişiminde sayfa başlığını güncelle (SPA SEO/UX)
  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <React.Fragment key={location.pathname}>
            <PageTransition>
              <Outlet />
            </PageTransition>
          </React.Fragment>
        </AnimatePresence>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}
