"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { RiSunLine, RiMoonLine, RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WA = "https://wa.me/522225497631?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20con%20DREVIA.";

const navDefs = [
  { label: "Inicio",         anchor: "#inicio",       id: "inicio"      },
  { label: "Landing Pages",  anchor: "#landing",      id: "landing"     },
  { label: "Servicios",      anchor: "#servicios",    id: "servicios"   },
  { label: "Precios",        anchor: "#precios",      id: "precios"     },
  { label: "Testimonios",    anchor: "#testimonios",  id: "testimonios" },
  { label: "Casos de Éxito", anchor: null, page: "/casos", id: null    },
];

export default function Header() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]        = useState(false);
  const [activeSection,  setActiveSection]   = useState("inicio");
  const pathname                             = usePathname();
  const isHome                               = pathname === "/";
  const { theme, toggle }                    = useTheme();

  const navLinks = navDefs.map((d) => ({
    label: d.label,
    href:  d.page ?? (isHome ? d.anchor! : `/${d.anchor}`),
    id:    d.id,
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close mobile menu with the Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!isHome) return;
    const sectionIds = navDefs.filter((d) => d.id).map((d) => d.id!);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-black/8 dark:border-white/8"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href={isHome ? "#inicio" : "/"} className="flex items-center">
              <Image
                src="/imgs/drevialogo.png"
                alt="DREVIA"
                height={40}
                width={160}
                className="h-16 w-auto object-contain dark:invert-0 invert"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = isHome && link.id && activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 group"
                  >
                    <span className={isActive ? "text-black dark:text-white" : ""}>{link.label}</span>
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-px bg-black dark:bg-white"
                      initial={false}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.3, ease: EASE }}
                    />
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                );
              })}
            </nav>

            {/* CTA + Theme toggle + Hamburger */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
                className="w-11 h-11 flex items-center justify-center rounded-lg text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white hover:bg-black/6 dark:hover:bg-white/8 transition-all duration-200"
              >
                {theme === "dark" ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
              </button>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-black/85 dark:hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-black/10 dark:shadow-white/10"
              >
                Cotizar Proyecto
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-black dark:text-white hover:bg-black/8 dark:hover:bg-white/10 transition-colors duration-200"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                      transition={{ duration: 0.18 }}
                    >
                      <HiX size={20} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                      transition={{ duration: 0.18 }}
                    >
                      <HiMenu size={20} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full-screen side panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[55] bg-black/25 dark:bg-black/50 backdrop-blur-[3px] lg:hidden"
            />

            {/* Side panel */}
            <motion.div
              key="panel"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: EASE }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-full max-w-[320px] bg-white dark:bg-[#080808] border-l border-black/8 dark:border-white/8 shadow-[-24px_0_80px_rgba(0,0,0,0.15)] dark:shadow-[-24px_0_80px_rgba(0,0,0,0.6)] lg:hidden flex flex-col"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-black/6 dark:border-white/6 flex-shrink-0">
                <a href={isHome ? "#inicio" : "/"} onClick={() => setMenuOpen(false)}>
                  <Image
                    src="/imgs/drevialogo.png"
                    alt="DREVIA"
                    height={28}
                    width={110}
                    className="h-10 w-auto object-contain dark:invert-0 invert"
                  />
                </a>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white hover:bg-black/6 dark:hover:bg-white/8 transition-all duration-200"
                >
                  <HiX size={18} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 px-6 py-4 flex flex-col overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = isHome && link.id && activeSection === link.id;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24 }}
                      transition={{ delay: 0.06 + i * 0.05, duration: 0.28, ease: EASE }}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between py-4 border-b border-black/5 dark:border-white/5 last:border-0 group transition-colors duration-200 ${
                        isActive
                          ? "text-black dark:text-white"
                          : "text-black/55 dark:text-white/50 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      <span className="text-xl font-bold tracking-tight">
                        {link.label}
                      </span>
                      <span className="text-black/20 dark:text-white/20 text-[10px] font-mono group-hover:text-black/40 dark:group-hover:text-white/40 transition-colors duration-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </motion.a>
                  );
                })}
              </nav>

              {/* Panel footer */}
              <div className="px-6 pb-8 pt-5 border-t border-black/6 dark:border-white/6 flex-shrink-0 space-y-3">
                <motion.a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.38, duration: 0.28 }}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-black/85 dark:hover:bg-white/90 transition-all duration-200"
                >
                  Cotizar Proyecto
                  <RiArrowRightLine size={14} />
                </motion.a>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.46, duration: 0.25 }}
                  className="text-center text-black/45 dark:text-white/45 text-[10px] leading-relaxed"
                >
                  dreviasolutions@gmail.com
                  <br />
                  +52 222 549 7631
                </motion.p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
