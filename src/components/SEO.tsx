import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'НЕПТУН - Рыба и морепродукты оптом | Доставка по всей России',
  description = 'Оптовая продажа рыбы и морепродуктов от компании Нептун. Более 10 лет на рынке, прямые поставки, конкурентные цены. Доставка по всей России.',
  keywords = 'рыба оптом, морепродукты оптом, красная рыба, икра, креветки, краб, кальмары, доставка рыбы, оптовые поставки рыбы',
  ogImage = 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=1200',
  ogType = 'website',
  canonicalUrl = window.location.href
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="НЕПТУН" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="НЕПТУН" />
      <meta property="og:locale" content="ru_RU" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0066cc" />
      <meta name="msapplication-TileColor" content="#0066cc" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "НЕПТУН",
          "description": description,
          "url": canonicalUrl,
          "logo": "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=500",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7-999-123-45-67",
            "contactType": "sales",
            "availableLanguage": "Russian"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. ул. Володарского, д. 1/10",
            "addressLocality": "Армавир",
            "addressRegion": "Краснодарский край",
            "addressCountry": "RU"
          },
          "sameAs": [
            "https://vk.com/atlant",
            "https://t.me/atlant"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
