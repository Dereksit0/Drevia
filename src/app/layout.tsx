import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DREVIA — Desarrollo Web para Empresas",
  description:
    "Agencia de desarrollo web premium para empresas medianas y grandes. Diseñamos y desarrollamos soluciones digitales que transforman tu negocio.",
  keywords:
    "desarrollo web, agencia digital, landing pages, e-commerce, sistemas web, México",
  openGraph: {
    title: "DREVIA — Desarrollo Web para Empresas",
    description:
      "Agencia de desarrollo web premium para empresas medianas y grandes.",
    type: "website",
  },
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
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
