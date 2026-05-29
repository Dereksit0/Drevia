"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiArrowRightLine,
  RiPlayCircleLine,
  RiArrowDownLine,
} from "react-icons/ri";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WA = "https://wa.me/522225497631?text=Hola%2C%20me%20interesa%20solicitar%20una%20demo%20o%20cotizaci%C3%B3n%20con%20DREVIA.";

const WORDS = ["páginas web", "landing pages", "e-commerce", "sistemas web", "profesionales"];

function fadeProps(delay: number) {
  return {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  } as const;
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,var(--glow),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(255,255,255,0.06),transparent)] dark:block hidden" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

          {/* Left: Text content */}
          <div className="flex flex-col items-start justify-center text-left">
            {/* Badge */}
            <motion.div
              {...fadeProps(0)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 text-xs font-medium tracking-widest uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 inline-block" />
              Agencia Premium de Desarrollo Web
            </motion.div>

            {/* Headline — rendered visible immediately (LCP element, no opacity fade) */}
            <motion.h1
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white leading-[1.08] tracking-tight"
            >
              Webs que venden
              <br />
              <span className="text-black/40 dark:text-white/45">y posicionan</span>
              <br />
              <span>tu negocio online.</span>
            </motion.h1>

            {/* Animated rotating word */}
            <motion.div
              {...fadeProps(0.18)}
              className="mt-6 flex items-center flex-wrap gap-x-2 gap-y-0 text-base sm:text-lg font-medium"
            >
              <span className="text-black/55 dark:text-white/50">Desarrollamos</span>
              <span className="relative inline-block overflow-hidden align-middle">
                {/* Invisible spacer keeps width stable at the longest word */}
                <span aria-hidden className="invisible font-bold whitespace-nowrap">landing pages</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={WORDS[wordIndex]}
                    initial={{ y: "115%", filter: "blur(8px)", opacity: 0 }}
                    animate={{ y: "0%",   filter: "blur(0px)", opacity: 1 }}
                    exit={{ y: "-115%",   filter: "blur(8px)", opacity: 0 }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="absolute inset-0 flex items-center font-bold text-black dark:text-white whitespace-nowrap"
                  >
                    <span className="relative">
                      {WORDS[wordIndex]}
                      <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-black/20 dark:bg-white/20 rounded-full" />
                    </span>
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-black/55 dark:text-white/50">para ti.</span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              {...fadeProps(0.26)}
              className="mt-5 text-base sm:text-lg text-black/55 dark:text-white/55 max-w-xl leading-relaxed"
            >
              Desarrollamos soluciones web a medida para empresas medianas y
              grandes que buscan resultados reales: más tráfico, más
              conversiones, más negocio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeProps(0.36)}
              className="flex flex-wrap gap-3 mt-10"
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-black/85 dark:hover:bg-white/90 hover:scale-105 hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-white/20 active:scale-95 transition-all duration-200"
              >
                Solicitar Cotización
                <RiArrowRightLine
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#servicios"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-black/20 dark:border-white/20 text-black/80 dark:text-white/80 text-sm font-medium rounded-full hover:border-black/50 dark:hover:border-white/50 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all duration-200"
              >
                <RiPlayCircleLine size={16} />
                Ver Servicios
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeProps(0.48)}
              className="mt-14 flex gap-5 sm:gap-10 lg:gap-12 justify-center sm:justify-start"
            >
              {[
                { value: "+50",    label: "Proyectos entregados" },
                { value: "95%",    label: "Clientes satisfechos" },
                { value: "+3 años", label: "De experiencia" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-black/55 dark:text-white/55 mt-0.5 leading-snug max-w-[100px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="animate-float w-full max-w-[540px]">
              {/* Browser mockup */}
              <div className="rounded-2xl border border-black/10 dark:border-white/12 bg-black/3 dark:bg-white/4 backdrop-blur-sm overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-black/6 dark:border-white/8 bg-black/2 dark:bg-white/3">
                  <span className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-black/15 dark:bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-black/10 dark:bg-white/10" />
                  <div className="flex-1 ml-3 h-5 rounded-full bg-black/5 dark:bg-white/6 flex items-center px-3">
                    <span className="text-black/30 dark:text-white/30 text-[10px] font-mono">
                      https://tuempresa.com
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  {/* Nav skeleton */}
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-4 rounded bg-black/10 dark:bg-white/10" />
                    <div className="flex gap-2">
                      {[56, 44, 52, 64].map((w, i) => (
                        <div key={i} className="h-3 rounded bg-black/6 dark:bg-white/6" style={{ width: w }} />
                      ))}
                    </div>
                    <div className="w-20 h-7 rounded-full bg-black/12 dark:bg-white/15" />
                  </div>

                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    {[
                      { label: "Visitas",     value: "12,847", trend: "+24%" },
                      { label: "Conversión",  value: "3.2%",   trend: "+0.8%" },
                      { label: "Revenue",     value: "$48.2k", trend: "+31%" },
                    ].map((m) => (
                      <div key={m.label} className="rounded-xl bg-black/4 dark:bg-white/5 border border-black/6 dark:border-white/8 p-3">
                        <p className="text-black/40 dark:text-white/40 text-[9px] uppercase tracking-wider">{m.label}</p>
                        <p className="text-black dark:text-white font-bold text-base mt-1">{m.value}</p>
                        <p className="text-black/50 dark:text-white/50 text-[9px] mt-0.5">{m.trend}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="rounded-xl bg-black/3 dark:bg-white/3 border border-black/5 dark:border-white/6 p-4">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-black/40 dark:text-white/40 text-[10px] uppercase tracking-wider">Tráfico semanal</span>
                      <span className="text-black/30 dark:text-white/30 text-[10px]">Últimos 7 días</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 55, 35, 70, 62, 85, 75].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-t ${i === 5 ? "bg-black/55 dark:bg-white/60" : "bg-black/10 dark:bg-white/15"}`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1.5">
                      {["L","M","X","J","V","S","D"].map((d) => (
                        <span key={d} className="text-black/25 dark:text-white/25 text-[9px] flex-1 text-center">{d}</span>
                      ))}
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="space-y-2">
                    {[
                      { label: "Nuevo lead captado",         time: "hace 2m" },
                      { label: "Venta completada — $3,200",  time: "hace 8m" },
                      { label: "Formulario contacto",         time: "hace 15m" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between py-2 border-b border-black/5 dark:border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/50 dark:bg-white/50" />
                          <span className="text-black/60 dark:text-white/60 text-[10px]">{item.label}</span>
                        </div>
                        <span className="text-black/25 dark:text-white/25 text-[10px]">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -right-6 top-16 hidden xl:flex items-center gap-2 px-3 py-2 rounded-xl bg-black/6 dark:bg-white/8 border border-black/10 dark:border-white/12 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-black/70 dark:bg-white/70" />
                <span className="text-black/70 dark:text-white/70 text-[10px] font-medium">+24% conversiones</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#servicios"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors duration-200"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <RiArrowDownLine size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
