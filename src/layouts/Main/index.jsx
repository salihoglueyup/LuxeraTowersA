import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from '../../shared/ui/PageTransition';
import BackToTop from '../../shared/ui/BackToTop';
import { getPageTitleKey, DEFAULT_TITLE } from '../../data/seo';

export default function MainLayout() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Rota değişiminde sayfa başlığını güncelle (SPA SEO/UX)
  useEffect(() => {
    const pathname = location.pathname.replace(/\/$/, '') || '/';
    const pageTitleKey = getPageTitleKey(pathname);
    document.title = t(pageTitleKey, DEFAULT_TITLE);
  }, [location.pathname, i18n.language, t]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <React.Fragment key={`${location.pathname}-${i18n.language}`}>
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
