import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://drevia.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DREVIA — Desarrollo Web para Empresas",
    template: "%s · DREVIA",
  },
  description:
    "Agencia de desarrollo web premium para empresas medianas y grandes. Diseñamos y desarrollamos soluciones digitales que transforman tu negocio.",
  keywords:
    "desarrollo web, agencia digital, landing pages, e-commerce, sistemas web, México, Puebla",
  alternates: {
    canonical: "/",
  },
  // El favicon lo genera src/app/icon.tsx (monograma "D" a tamaño completo).
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
  areaServed: ["MX", "Latinoamérica"],
  sameAs: [
    "https://www.instagram.com/dreviasolutions/",
    "https://www.tiktok.com/@dreviasolutionsweb",
    "https://www.facebook.com/profile.php?id=61586295823455",
  ],
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
      </head>
      <body className="min-h-full flex flex-col bg-[#061029] text-white">
        {children}
      </body>
    </html>
  );
}
