import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = '/assets/logo/oceanlogotherapy.svg',
  url = 'https://oceantherapy.com',
  type = 'website',
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  // Get title and description based on current language
  const pageTitle = title || t('seo.title');
  const pageDescription = description || t('seo.description');
  
  // Get language name for meta tags
  const languageName = language === 'en' ? 'english' : language === 'uk' ? 'ukrainian' : 'russian';
  
  // Generate canonical and alternate URLs for each language
  const baseUrl = url.replace(/\/$/, '');
  const enUrl = `${baseUrl}/en`;
  const ukUrl = `${baseUrl}/uk`;
  const ruUrl = `${baseUrl}/ru`;
  
  // Get current page URL based on selected language
  const currentUrl = language === 'en' ? enUrl : language === 'uk' ? ukUrl : ruUrl;
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'OCEANTHERAPY',
    description: pageDescription,
    image: image,
    url: currentUrl,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PT',
      addressLocality: 'Baleal',
      addressRegion: 'Peniche',
    },
    offers: {
      '@type': 'Offer',
      price: '1850',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="language" content={languageName} />
      <meta name="robots" content="index, follow" />

      {/* Canonical and Alternate language links */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" href={enUrl} hrefLang="en" />
      <link rel="alternate" href={ukUrl} hrefLang="uk" />
      <link rel="alternate" href={ruUrl} hrefLang="ru" />
      <link rel="alternate" href={enUrl} hrefLang="x-default" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'uk' ? 'uk_UA' : 'ru_RU'} />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="uk_UA" />
      <meta property="og:locale:alternate" content="ru_RU" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEO; 