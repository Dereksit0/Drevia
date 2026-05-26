"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

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

  // Active section tracking
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
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
              aria-label="Cambiar tema"
              className="p-2 rounded-lg text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/6 dark:hover:bg-white/8 transition-all duration-200"
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
              className="lg:hidden text-black dark:text-white p-2 rounded-lg hover:bg-black/8 dark:hover:bg-white/10 transition-colors duration-200"
              aria-label="Abrir menú"
            >
              {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-black/8 dark:border-white/8 overflow-hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = isHome && link.id && activeSection === link.id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                    onClick={() => setMenuOpen(false)}
                    className={`py-3 text-base font-medium tracking-wide transition-colors border-b border-black/5 dark:border-white/5 last:border-0 ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <motion.a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full mt-4 hover:bg-black/85 dark:hover:bg-white/90 transition-all duration-200"
              >
                Cotizar Proyecto
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
