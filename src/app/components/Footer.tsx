"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

const WA = "https://wa.me/522225497631?text=Hola%2C%20me%20interesa%20solicitar%20información%20sobre%20los%20servicios%20de%20DREVIA.";

const quickLinks = [
  { label: "Inicio",         href: "#inicio" },
  { label: "Servicios",      href: "#servicios" },
  { label: "Clientes",       href: "#clientes" },
  { label: "Precios",        href: "#precios" },
  { label: "Testimonios",    href: "#testimonios" },
  { label: "Casos de Éxito", href: "/casos" },
];

const socialLinks = [
  { icon: RiInstagramLine, href: "https://www.instagram.com/dreviasolutions/",             label: "Instagram" },
  { icon: SiTiktok,        href: "https://www.tiktok.com/@dreviasolutionsweb?lang=es",     label: "TikTok"    },
  { icon: RiFacebookFill,  href: "https://www.facebook.com/profile.php?id=61586295823455", label: "Facebook"  },
];

const contactInfo = [
  { icon: RiMailLine,   text: "dreviasolutions@gmail.com" },
  { icon: RiPhoneLine,  text: "+52 222 549 7631" },
  { icon: RiMapPinLine, text: "Puebla, México" },
];

const serviceLinks = [
  { label: "Páginas Web",         href: "/servicios/paginas-web"          },
  { label: "Landing Pages",        href: "/servicios/landing-pages"        },
  { label: "Sistemas Web",         href: "/servicios/sistema-web"          },
  { label: "E-commerce",           href: "/servicios/ecommerce"            },
  { label: "Desarrollos a Medida", href: "/servicios/desarrollos-a-medida" },
];

function ContactBlock() {
  return (
    <div>
      <h4 className="text-black dark:text-white font-semibold text-sm tracking-wide mb-5">Contacto</h4>
      <ul className="space-y-4 mb-6">
        {contactInfo.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-black/5 dark:bg-white/6 flex items-center justify-center flex-shrink-0">
              <Icon size={13} className="text-black/55 dark:text-white/55" />
            </div>
            <span className="text-black/55 dark:text-white/55 text-sm">{text}</span>
          </li>
        ))}
      </ul>
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/6 dark:bg-white/8 border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 text-xs font-semibold rounded-full hover:bg-black/12 dark:hover:bg-white/14 hover:border-black/22 dark:hover:border-white/22 hover:text-black dark:hover:text-white transition-all duration-200"
      >
        Solicitar Demo vía WhatsApp
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-black/8 dark:border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8">

        {/*
          Grid layout:
          Mobile  (grid-cols-2): [Brand 2-cols] | [Nav | Contact] | [Services 2-cols]
          Desktop (grid-cols-3): [Brand+Contact] | [Nav] | [Services]
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-12 mb-14">

          {/* Brand — full width on mobile, col 1 on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#inicio" className="inline-flex items-center">
              <Image
                src="/imgs/drevialogo.png"
                alt="DREVIA"
                height={40}
                width={160}
                className="h-16 w-auto object-contain dark:invert-0 invert"
              />
            </a>
            <p className="mt-4 text-black/55 dark:text-white/55 text-sm leading-relaxed max-w-xs">
              Agencia de desarrollo web premium para empresas que buscan
              resultados digitales reales: más tráfico, más clientes, más ventas.
            </p>

            {/* Social links */}
            <div className="flex gap-2.5 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-lg bg-black/5 dark:bg-white/6 border border-black/8 dark:border-white/8 flex items-center justify-center text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Contact — only on desktop (below social) */}
            <div className="hidden lg:block mt-10 pt-8 border-t border-black/6 dark:border-white/6">
              <ContactBlock />
            </div>
          </div>

          {/* Navigation — col 1 on mobile, col 2 on desktop */}
          <div className="col-span-1">
            <h4 className="text-black dark:text-white font-semibold text-sm tracking-wide mb-5">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-px bg-black/20 dark:bg-white/20 group-hover:w-3 group-hover:bg-black/60 dark:group-hover:bg-white/60 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — col 2 on mobile (next to nav), hidden on desktop */}
          <div className="col-span-1 lg:hidden">
            <ContactBlock />
          </div>

          {/* Services — full width on mobile, col 3 on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-black dark:text-white font-semibold text-sm tracking-wide mb-5">Servicios</h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ label: s, href }) => (
                <li key={s}>
                  <a
                    href={href}
                    className="text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-px bg-black/20 dark:bg-white/20 group-hover:w-3 group-hover:bg-black/60 dark:group-hover:bg-white/60 transition-all duration-300" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="h-px w-full bg-black/6 dark:bg-white/6 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-black/45 dark:text-white/45 text-xs">
            © {new Date().getFullYear()} DREVIA. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacidad" className="text-black/45 dark:text-white/45 hover:text-black/60 dark:hover:text-white/60 text-xs transition-colors duration-200">
              Política de Privacidad
            </a>
            <a href="/terminos" className="text-black/45 dark:text-white/45 hover:text-black/60 dark:hover:text-white/60 text-xs transition-colors duration-200">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
