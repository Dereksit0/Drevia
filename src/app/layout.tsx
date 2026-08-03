import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// #16 — Solo se usa la itálica de acento en headings: cargamos únicamente esos cortes.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600"],
  display: "swap",
});

// #11 — GA4: se activa solo si se define NEXT_PUBLIC_GA_ID (sin ID queda inerte).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const SITE_URL = "https://drevia.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DREVIA — Desarrollo Web para Empresas",
    template: "%s · DREVIA",
  },
  description:
    "Agencia de desarrollo web para PYMES en México y Colombia: páginas web, landing pages, e-commerce y SEO que generan clientes reales. Resultados medibles, no promesas.",
  keywords:
    "desarrollo web, agencia digital, páginas web, landing pages, e-commerce, SEO, PYMES, México, Colombia, Puebla",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/imgs/logos/faviconblanco.png",
    apple: "/imgs/logos/faviconblanco.png",
  },
  openGraph: {
    title: "DREVIA — Desarrollo Web para Empresas",
    description:
      "Agencia de desarrollo web premium para empresas medianas y grandes.",
    url: SITE_URL,
    siteName: "DREVIA",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DREVIA — Desarrollo Web para Empresas",
    description:
      "Agencia de desarrollo web premium para empresas medianas y grandes.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "DREVIA",
  alternateName: "DREVIA Solutions",
  description:
    "Agencia de desarrollo web premium para empresas medianas y grandes: páginas web, landing pages, e-commerce y sistemas web a medida.",
  url: SITE_URL,
  logo: `${SITE_URL}/imgs/drevialogo.png`,
  image: `${SITE_URL}/imgs/drevialogo.png`,
  email: "dreviasolutions@gmail.com",
  telephone: "+52-222-549-7631",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puebla",
    addressRegion: "Puebla",
    addressCountry: "MX",
  },
  areaServed: ["MX", "CO", "Latinoamérica"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "50",
  },
  sameAs: [
    "https://www.instagram.com/dreviasolutions/",
    "https://www.tiktok.com/@dreviasolutionsweb?lang=es",
    "https://www.facebook.com/profile.php?id=61586295823455",
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "DREVIA",
  url: SITE_URL,
  inLanguage: "es",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} dark h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        {/* #4 — Sin JS, el contenido animado por scroll se muestra igual */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-[#061029] text-white">
        {/* #7 — Skip link */}
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}

        {/* #11 — GA4 (solo si hay ID configurado) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
