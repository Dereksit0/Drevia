"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiInstagramLine,
  RiFacebookFill,
  RiWhatsappLine,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { WA, SOCIAL, PHONE } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const navLinks = [
  { label: "Servicios", href: "/#servicios", id: "servicios" },
  { label: "Precios", href: "/#precios", id: "precios" },
  { label: "Casos de Éxito", href: "/#casos", id: "casos" },
  { label: "Quiénes somos", href: "/#quienes-somos", id: "quienes-somos" },
];

const socialLinks = [
  { icon: RiInstagramLine, href: SOCIAL.instagram, label: "Instagram" },
  { icon: SiTiktok, href: SOCIAL.tiktok, label: "TikTok" },
  { icon: RiFacebookFill, href: SOCIAL.facebook, label: "Facebook" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // #22 — Mueve el foco al panel al abrir y lo devuelve al cerrar
  useEffect(() => {
    if (menuOpen) {
      closeRef.current?.focus();
    } else {
      toggleRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // #23 — Scroll-spy: marca la sección visible
  useEffect(() => {
    if (!isHome) return;
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const homeHref = (hash: string) => (isHome ? hash : `/${hash}`);
  const resolve = (href: string) => (href.startsWith("/#") ? homeHref(href.slice(1)) : href);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#061029] border-b border-white/10 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href={isHome ? "#inicio" : "/"} className="flex items-center shrink-0" aria-label="DREVIA Solutions — inicio">
              <Image
                src="/imgs/drevialogo.png"
                alt="DREVIA Solutions"
                height={56}
                width={200}
                className="h-12 lg:h-14 w-auto object-contain brightness-0 invert"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
              {navLinks.map((link) => {
                const isActive = isHome && active === link.id;
                return (
                  <a
                    key={link.label}
                    href={resolve(link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

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

              {/* #21 — CTA WhatsApp visible en móvil */}
              <a
                href={WA.cotizar}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cotizar por WhatsApp"
                className="lg:hidden inline-flex items-center justify-center gap-1.5 px-4 h-11 bg-blue-600 text-white text-sm font-semibold rounded-full active:scale-95 transition-all shadow-lg shadow-blue-600/30"
              >
                <RiWhatsappLine size={16} aria-hidden="true" />
                Cotizar
              </a>

              <button
                ref={toggleRef}
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <HiX size={22} aria-hidden="true" /> : <HiMenu size={22} aria-hidden="true" />}
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
                  ref={closeRef}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <HiX size={18} aria-hidden="true" />
                </button>
              </div>

              {/* Body */}
              <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1.5" aria-label="Móvil">
                <p className="px-1 text-[11px] font-bold tracking-[0.25em] text-blue-300/60 uppercase mb-2">
                  Menú
                </p>

                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={resolve(link.href)}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 bg-white/[0.03] border border-white/8 text-white text-base font-semibold hover:bg-white/[0.06] active:bg-white/10 transition-colors"
                  >
                    {link.label}
                    <RiArrowRightUpLine
                      size={18}
                      aria-hidden="true"
                      className="text-blue-200/60 group-hover:text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                ))}
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
                  <RiWhatsappLine size={16} aria-hidden="true" />
                  Cotizar Proyecto
                  <RiArrowRightLine size={14} aria-hidden="true" />
                </a>

                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="text-blue-100/70 text-xs hover:text-white transition-colors"
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
                        <Icon size={15} aria-hidden="true" />
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
