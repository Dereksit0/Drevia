"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowRightLine,
  RiArrowUpLine,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import { WA, EMAIL, PHONE, LOCATION, SOCIAL } from "../lib/site";

const empresaLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Precios", href: "/#precios" },
  { label: "Casos de Éxito", href: "/#casos" },
  { label: "Quiénes somos", href: "/#quienes-somos" },
  { label: "Contacto", href: "/#contacto" },
];

const serviceLinks = [
  { label: "Páginas Web", href: "/servicios/paginas-web" },
  { label: "Landing Pages", href: "/servicios/landing-pages" },
  { label: "E-commerce", href: "/servicios/ecommerce" },
  { label: "SEO", href: "/servicios/seo" },
  { label: "Sistemas Web", href: "/servicios/sistema-web" },
  { label: "Software a Medida", href: "/servicios/desarrollos-a-medida" },
];

const ciudades = ["Puebla", "CDMX", "Guadalajara", "Bogotá", "Medellín", "Monterrey"];

const socialLinks = [
  { icon: RiInstagramLine, href: SOCIAL.instagram, label: "Instagram" },
  { icon: SiTiktok, href: SOCIAL.tiktok, label: "TikTok" },
  { icon: RiFacebookFill, href: SOCIAL.facebook, label: "Facebook" },
];

const contactInfo = [
  { icon: RiMailLine, text: EMAIL, href: `mailto:${EMAIL}` },
  { icon: RiPhoneLine, text: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
  { icon: RiMapPinLine, text: LOCATION, href: null },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070f24] border-t border-white/10">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA band */}
        <div className="py-12 lg:py-14 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
              ¿Listo para hacer crecer{" "}
              <span className="font-display italic font-medium text-blue-300">
                tu negocio
              </span>
              ?
            </h3>
            <p className="mt-3 text-blue-100/60 text-sm sm:text-base max-w-md">
              Cuéntanos tu idea y te decimos exactamente cómo convertirla en
              resultados. Sin compromisos.
            </p>
          </div>
          <motion.a
            href={WA.cotizar}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            Cotizar Proyecto
            <RiArrowRightLine size={18} />
          </motion.a>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 py-14 lg:py-16">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/#inicio" className="inline-flex items-center" aria-label="DREVIA Solutions — inicio">
              <Image
                src="/imgs/drevialogo.png"
                alt="DREVIA Solutions"
                height={56}
                width={200}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-5 text-blue-100/55 text-sm leading-relaxed max-w-xs">
              Agencia de desarrollo web premium para empresas que buscan
              resultados digitales reales: más tráfico, más clientes, más ventas.
            </p>
            <div className="flex gap-2.5 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-100/60 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-5">Empresa</h4>
            <ul className="space-y-3.5">
              {empresaLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-blue-100/55 hover:text-white text-sm transition-colors"
                  >
                    <span className="w-0 h-px bg-blue-400 group-hover:w-3 transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-5">Servicios</h4>
            <ul className="space-y-3.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-blue-100/55 hover:text-white text-sm transition-colors"
                  >
                    <span className="w-0 h-px bg-blue-400 group-hover:w-3 transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-5">Contacto</h4>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }) => {
                const inner = (
                  <>
                    <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-blue-300" />
                    </span>
                    <span className="text-blue-100/60 text-sm group-hover:text-white transition-colors break-all">
                      {text}
                    </span>
                  </>
                );
                return (
                  <li key={text}>
                    {href ? (
                      <a href={href} className="group flex items-center gap-3">
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-7 mb-3 text-[11px] font-semibold tracking-[0.15em] text-blue-300/60 uppercase">
              Ciudades
            </p>
            <div className="flex flex-wrap gap-2">
              {ciudades.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-100/55 text-xs"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-blue-100/55 text-xs order-2 sm:order-1">
            © {new Date().getFullYear()} DREVIA Solutions. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-5 order-1 sm:order-2">
            <a href="/privacidad" className="text-blue-100/45 hover:text-white text-xs transition-colors">
              Privacidad
            </a>
            <a href="/terminos" className="text-blue-100/45 hover:text-white text-xs transition-colors">
              Términos
            </a>
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Volver arriba"
              className="inline-flex items-center gap-1.5 text-blue-100/55 hover:text-white text-xs font-medium transition-colors"
            >
              Arriba
              <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-colors">
                <RiArrowUpLine size={14} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
