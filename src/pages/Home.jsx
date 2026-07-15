import React from 'react';
import SEO from '../shared/seo/SEO';
import Hero from '../features/hero/Hero';
import Highlights from '../features/hero/Highlights';
import UnitTypes from '../features/unit-types/UnitTypes';
import Amenities from '../features/amenities/Amenities';
import Location from '../features/location/Location';
import Contact from '../features/contact/Contact';

export default function Home() {
  return (
    <main>
      <SEO />
      <Hero />
      <Highlights />
      <UnitTypes />
      <Amenities />
      <Location />
      <Contact />
    </main>
  );
}
