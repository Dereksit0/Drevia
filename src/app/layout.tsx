import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
  icons: {
    icon: [{ url: "/imgs/drevialogo.png", type: "image/png" }],
    apple: "/imgs/drevialogo.png",
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
      className={`${inter.variable} dark h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash: apply stored theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('drevia-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
