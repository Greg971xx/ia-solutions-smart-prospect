// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ComingSoonBanner from '@/components/ComingSoonBanner'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

// ✅ URL de base pour construire les liens absolus OG/Twitter
//    Mets NEXT_PUBLIC_SITE_URL en prod (ex: https://ia-solutions-guadeloupe.fr)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ia-solutions-guadeloupe.fr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'Smart Prospect | Prospection B2B IA en Guadeloupe',
  description:
    'Smart Prospect est une solution de prospection B2B par IA basée en Guadeloupe. En 30 jours, 50 à 100 décideurs B2B sont contactés et 30 à 80 prospects intéressés vous sont livrés en Guadeloupe, Martinique et Guyane.',
  keywords: [
    'prospection B2B Guadeloupe',
    'prospection B2B Antilles',
    'prospection IA Guadeloupe',
    'Smart Prospect',
    'IA Solutions Guadeloupe',
    'prospection entreprises Guadeloupe',
    'prospection automatisée B2B',
    'génération de prospects B2B Guadeloupe',
    'prospection B2B Martinique',
    'prospection B2B Guyane',
  ],
  authors: [{ name: 'IA Solutions Guadeloupe' }],
  creator: 'IA Solutions Guadeloupe',
  publisher: 'IA Solutions Guadeloupe',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: 'Smart Prospect | Prospection B2B IA en Guadeloupe',
    description:
      'Campagnes de prospection B2B ultra-personnalisées par IA : 50 à 100 décideurs touchés et 30 à 80 prospects intéressés livrés pour les entreprises en Guadeloupe, Martinique et Guyane.',
    siteName: 'IA Solutions Guadeloupe - Smart Prospect',
    images: [
      {
        // 🔁 relatif → https://.../og-image.jpg
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solutions IA pour entreprises en Guadeloupe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Prospect | Prospection B2B IA en Guadeloupe',
    description:
      'Prospection B2B par IA pour les entreprises en Guadeloupe, Martinique et Guyane. 50 à 100 décideurs B2B contactés, 30 à 80 prospects intéressés livrés en 30 jours.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'google-site-verification': 'votre-code-verification-google',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Local Business Schema - IA Solutions Guadeloupe / Smart Prospect */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "IA Solutions Guadeloupe - Smart Prospect",
              "description":
                "Smart Prospect est une solution de prospection B2B automatisée par IA pour les entreprises en Guadeloupe, Martinique et Guyane.",
              "url": "https://www.ia-solutions-guadeloupe.fr",
              "telephone": "+33 7 69 18 20 76",
              "email": "gregory@ia-solutions-guadeloupe.fr",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Guadeloupe",
                "addressCountry": "FR"
              },
              "areaServed": [
                "Guadeloupe",
                "Martinique",
                "Guyane",
                "Antilles françaises"
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 16.2650,
                "longitude": -61.5510
              },
              "serviceType": [
                "Prospection B2B",
                "Prospection automatisée par IA",
                "Campagnes Email et WhatsApp B2B",
                "Génération de prospects B2B",
                "Stratégie commerciale B2B Antilles"
              ]
            })
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Smart Prospect - Prospection B2B IA",
              "description":
                "Campagne de prospection B2B par IA : identification de vos prospects, messages personnalisés, envois multi-canal et 30 à 80 prospects intéressés livrés aux entreprises en Guadeloupe, Martinique et Guyane.",
              "provider": {
                "@type": "Organization",
                "name": "IA Solutions Guadeloupe"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Guadeloupe, Martinique, Guyane, Antilles françaises"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Offres Smart Prospect",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Campagne Smart Prospect",
                      "description":
                        "Campagne de prospection B2B sur 30 jours avec ciblage géolocalisé, messages personnalisés par IA et remontée des réponses en temps réel."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Prospection B2B IA",
                      "description":
                        "Prospection B2B multi-canal par IA (Email + WhatsApp) vers les décideurs des entreprises cibles."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Accompagnement stratégique B2B",
                      "description":
                        "Conseil sur la structuration de votre offre B2B, la qualification des prospects et le suivi commercial aux Antilles."
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />

        {/* Microsoft Clarity (optional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
            `,
          }}
        />
      </head>

      <body className={`${inter.className} antialiased`}>
        <ComingSoonBanner />
        <div className="flex flex-col min-h-screen">
          
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <CookieConsent />
        <Analytics />

        {/* Cookie Display Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Show consent if not already set
              if (typeof window !== 'undefined' && !localStorage.getItem('cookieConsent')) {
                setTimeout(() => {
                  const element = document.getElementById('cookie-consent');
                  if (element) {
                    element.classList.remove('hidden');
                  }
                }, 2000);
              }
            `,
          }}
        />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/33769182076?text=Bonjour, je suis intéressé par vos services IA"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300"
          aria-label="Contacter via WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.686"/>
          </svg>
        </a>
      </body>
    </html>
  )
}
