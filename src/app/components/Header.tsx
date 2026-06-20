"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiArrowDownSLine,
  RiFileTextLine,
  RiArticleLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiShoppingCart2Line,
  RiBuilding2Line,
  RiStore2Line,
  RiTeamLine,
  RiSettings3Line,
  RiExchangeLine,
  RiInstagramLine,
  RiFacebookFill,
  RiWhatsappLine,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { WA, SOCIAL, PHONE } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type MegaItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  desc: string;
  href: string;
};

const serviciosColumns: { title: string; items: MegaItem[] }[] = [
  {
    title: "Sitios Web",
    items: [
      { icon: RiFileTextLine, label: "Páginas Web", desc: "Sitios optimizados para SEO y conversión.", href: "/servicios/paginas-web" },
      { icon: RiArticleLine, label: "Páginas informativas", desc: "Webs corporativas rápidas y claras.", href: "/servicios/paginas-web" },
      { icon: RiFlashlightLine, label: "Landing Pages", desc: "Diseñadas para campañas y leads.", href: "/servicios/landing-pages" },
      { icon: RiShieldCheckLine, label: "Web Care", desc: "Mantenimiento, seguridad y velocidad.", href: "/servicios/desarrollos-a-medida" },
    ],
  },
  {
    title: "Comercio",
    items: [
      { icon: RiShoppingCart2Line, label: "E-commerce", desc: "Tiendas listas para vender online.", href: "/servicios/ecommerce" },
      { icon: RiBuilding2Line, label: "Enterprise", desc: "Soluciones empresariales escalables.", href: "/servicios/desarrollos-a-medida" },
      { icon: RiStore2Line, label: "Mejorar tienda", desc: "Optimiza tu tienda actual.", href: "/servicios/ecommerce" },
    ],
  },
  {
    title: "Software",
    items: [
      { icon: RiTeamLine, label: "CRM", desc: "Gestión de clientes y ventas.", href: "/servicios/sistema-web" },
      { icon: RiSettings3Line, label: "ERP", desc: "Control de operaciones empresariales.", href: "/servicios/sistema-web" },
      { icon: RiExchangeLine, label: "Integraciones", desc: "Automatiza procesos entre sistemas.", href: "/servicios/desarrollos-a-medida" },
    ],
  },
];

const flatLinks = [
  { label: "Precios", href: "/#precios" },
  { label: "Casos de Éxito", href: "/#casos" },
  { label: "Quiénes somos", href: "/quienes-somos" },
];

const socialLinks = [
  { icon: RiInstagramLine, href: SOCIAL.instagram, label: "Instagram" },
  { icon: SiTiktok, href: SOCIAL.tiktok, label: "TikTok" },
  { icon: RiFacebookFill, href: SOCIAL.facebook, label: "Facebook" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [mobileServ, setMobileServ] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const homeHref = (hash: string) => (isHome ? hash : `/${hash}`);
  const resolve = (href: string) => (href.startsWith("/#") ? homeHref(href.slice(1)) : href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#061029]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href={isHome ? "#inicio" : "/"} className="flex items-center shrink-0">
              <Image
                src="/imgs/drevialogo.png"
                alt="DREVIA Solutions"
                height={56}
                width={200}
                className="h-16 lg:h-20 w-auto object-contain brightness-0 invert"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <div
              className="hidden lg:block relative"
              onMouseLeave={() => setOpenDrop(false)}
            >
              <nav className="flex items-center gap-1">
                <button
                  onMouseEnter={() => setOpenDrop(true)}
                  className="flex items-center gap-1 px-4 py-2 text-white/85 hover:text-white text-sm font-medium transition-colors"
                >
                  Servicios
                  <RiArrowDownSLine
                    size={16}
                    className={`transition-transform duration-200 ${openDrop ? "rotate-180" : ""}`}
                  />
                </button>

                {flatLinks.map((link) => (
                  <a
                    key={link.label}
                    href={resolve(link.href)}
                    onMouseEnter={() => setOpenDrop(false)}
                    className="px-4 py-2 text-white/85 hover:text-white text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Mega panel */}
              <AnimatePresence>
                {openDrop && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    className="absolute right-0 top-full pt-3 w-[min(880px,calc(100vw-2rem))]"
                  >
                    <div className="bg-white rounded-2xl border border-slate-200/70 shadow-2xl shadow-black/25 p-7">
                      <div className="flex items-start justify-between pb-5 mb-5 border-b border-slate-100">
                        <div>
                          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                            Servicios
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            Desarrollo web, software y crecimiento digital
                          </p>
                        </div>
                        <a
                          href={homeHref("#servicios")}
                          className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
                        >
                          Ver todos
                        </a>
                      </div>

                      <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                        {serviciosColumns.map((col) => (
                          <div key={col.title}>
                            <p className="text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-3">
                              {col.title}
                            </p>
                            <div className="flex flex-col">
                              {col.items.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className="group flex items-start gap-3 rounded-xl p-2.5 -mx-2.5 hover:bg-blue-50 transition-colors"
                                >
                                  <item.icon size={20} className="text-slate-400 group-hover:text-blue-600 mt-0.5 shrink-0 transition-colors" />
                                  <span>
                                    <span className="block text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                                      {item.label}
                                    </span>
                                    <span className="block text-xs text-slate-500 leading-snug mt-0.5">
                                      {item.desc}
                                    </span>
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-2">
              <a
                href={WA.cotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-lg shadow-blue-600/30"
              >
                Cotizar Proyecto
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[55] bg-[#02060f]/70 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              key="panel"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.42, ease: EASE }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-full max-w-[370px] lg:hidden flex flex-col bg-gradient-to-b from-[#0a1a3f] via-[#081535] to-[#061029] border-l border-white/10 shadow-2xl shadow-black/50"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/10 shrink-0">
                <Image
                  src="/imgs/drevialogo.png"
                  alt="DREVIA"
                  height={28}
                  width={110}
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <HiX size={18} />
                </button>
              </div>

              {/* Body */}
              <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1.5">
                <p className="px-1 text-[10px] font-bold tracking-[0.25em] text-blue-300/60 uppercase mb-2">
                  Menú
                </p>

                {/* Servicios accordion */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/8 overflow-hidden">
                  <button
                    onClick={() => setMobileServ(!mobileServ)}
                    className="w-full flex items-center justify-between px-4 py-4 text-white text-base font-semibold"
                    aria-expanded={mobileServ}
                  >
                    Servicios
                    <span className={`flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/10 transition-transform duration-300 ${mobileServ ? "rotate-180" : ""}`}>
                      <RiArrowDownSLine size={16} className="text-blue-200" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      mobileServ ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-3 pb-4 flex flex-col gap-4">
                        {serviciosColumns.map((col) => (
                          <div key={col.title}>
                            <p className="px-1 text-[10px] font-bold tracking-[0.18em] text-blue-300/70 uppercase mb-2">
                              {col.title}
                            </p>
                            <div className="flex flex-col gap-1">
                              {col.items.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="group flex items-center gap-3 rounded-xl p-2.5 hover:bg-white/[0.06] active:bg-white/10 transition-colors"
                                >
                                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-400/20 shrink-0">
                                    <item.icon size={17} className="text-blue-300" />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block text-sm font-medium text-white leading-tight">
                                      {item.label}
                                    </span>
                                    <span className="block text-[11px] text-blue-100/45 leading-snug mt-0.5">
                                      {item.desc}
                                    </span>
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flat links */}
                <div className="mt-1 flex flex-col gap-1.5">
                  {flatLinks.map((link) => (
                    <a
                      key={link.label}
                      href={resolve(link.href)}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between rounded-2xl px-4 py-4 bg-white/[0.03] border border-white/8 text-white text-base font-semibold hover:bg-white/[0.06] active:bg-white/10 transition-colors"
                    >
                      {link.label}
                      <RiArrowRightUpLine
                        size={18}
                        className="text-blue-200/60 group-hover:text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </a>
                  ))}
                </div>
              </nav>

              {/* Footer of panel */}
              <div className="px-5 pb-7 pt-4 border-t border-white/10 shrink-0 bg-[#061029]/40">
                <a
                  href={WA.cotizar}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 active:scale-95 transition-all shadow-lg shadow-blue-600/30"
                >
                  <RiWhatsappLine size={16} />
                  Cotizar Proyecto
                  <RiArrowRightLine size={14} />
                </a>

                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="text-blue-100/55 text-xs hover:text-white transition-colors"
                  >
                    {PHONE}
                  </a>
                  <div className="flex items-center gap-2">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-100/60 hover:text-white hover:bg-blue-600/30 transition-colors"
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
