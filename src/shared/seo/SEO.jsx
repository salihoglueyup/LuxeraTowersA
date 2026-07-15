import React from 'react';
import { Helmet } from 'react-helmet-async';
import { defaultSEO } from './seoConfig';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  ogType = 'website',
  noindex = false
}) => {
  const metaTitle = title ? `${title} | Luxera Towers` : defaultSEO.title;
  const metaDescription = description || defaultSEO.description;
  const canonicalUrl = canonical || defaultSEO.canonicalUrl;
  const ogImageUrl = ogImage || defaultSEO.openGraph.images[0].url;

  return (
    <Helmet>
      {/* Temel Meta Etiketleri */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph (Facebook/LinkedIn vb.) */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={defaultSEO.openGraph.site_name} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter Kartları */}
      <meta name="twitter:card" content={defaultSEO.twitter.cardType} />
      <meta name="twitter:site" content={defaultSEO.twitter.site} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
};

export default SEO;
