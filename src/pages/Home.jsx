import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../shared/seo/SEO';
import Hero from '../features/hero/Hero';
import Highlights from '../features/hero/Highlights';
import UnitTypes from '../features/unit-types/UnitTypes';
import Amenities from '../features/amenities/Amenities';
import Location from '../features/location/Location';
import Contact from '../features/contact/Contact';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <SEO title={t('pageTitles.home')} />
      <Hero />
      <Highlights />
      <UnitTypes />
      <Amenities />
      <Location />
      <Contact />
    </main>
  );
}
