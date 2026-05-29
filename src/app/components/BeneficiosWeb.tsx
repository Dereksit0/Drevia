"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiSearchLine, RiShieldCheckLine, RiWhatsappLine, RiRocketLine, RiArrowRightLine } from "react-icons/ri";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WA = "https://wa.me/522225497631?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20con%20DREVIA.";

const deliveryTimes = [
  { time: "24 a 72 horas", type: "Landing Page" },
  { time: "1 a 5 días",    type: "Página Web"   },
  { time: "1 a 4 semanas", type: "E-commerce"   },
  { time: "1 a 6 semanas", type: "Sistema Web"  },
];

const features = [
  {
    icon: RiSearchLine,
    title: "Google te encuentra primero",
    desc: "SEO técnico desde el desarrollo. Estructura, velocidad y metadatos correctos desde el día uno.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Transmite confianza al instante",
    desc: "Diseño profesional que posiciona tu marca y convierte visitantes en clientes antes de que te hablen.",
  },
  {
    icon: RiWhatsappLine,
    title: "Más leads por WhatsApp",
    desc: "CTAs, botones y formularios estratégicamente ubicados para que cada visita se convierta en un contacto.",
  },
  {
    icon: RiRocketLine,
    title: "Velocidad y rendimiento real",
    desc: "Carga en menos de 3 segundos. Core Web Vitals optimizados para mejorar posición en Google y conversión.",
  },
];

export default function BeneficiosWeb() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % deliveryTimes.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="landing" className="bg-[#fafafa] dark:bg-[#050505] py-24 lg:py-32 border-t border-black/6 dark:border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Rotating delivery badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-black/12 dark:border-white/12 bg-white dark:bg-black shadow-sm shadow-black/5 dark:shadow-white/5">
            <span className="w-2 h-2 rounded-full bg-black/55 dark:bg-white/55 animate-pulse flex-shrink-0" />
            <span className="text-black/45 dark:text-white/45 text-xs font-medium">Entrega en</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: EASE }}
                className="font-bold text-black dark:text-white text-xs"
              >
                {deliveryTimes[current].time}
                <span className="ml-1.5 text-black/40 dark:text-white/40 font-medium">· {deliveryTimes[current].type}</span>
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-block text-black/55 dark:text-white/55 text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Lo que incluye tu página web
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight leading-[1.1] mb-5">
              Una web que{" "}
              <em className="not-italic italic text-black/40 dark:text-white/40">trabaja por ti</em>
              {" "}las 24 horas
            </h2>
            <p className="text-black/50 dark:text-white/50 text-base leading-relaxed mb-10">
              Diseñamos páginas web para negocios, doctores y profesionales que quieren conseguir más clientes por internet. Diseño claro, SEO incluido y entrega en tiempo récord.
            </p>

            <div className="grid sm:grid-cols-2 gap-7">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                    className="flex gap-3"
                  >
                    <Icon size={17} className="text-black/35 dark:text-white/35 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-black dark:text-white text-sm font-semibold mb-1">{f.title}</p>
                      <p className="text-black/55 dark:text-white/55 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom bar */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-black/8 dark:border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black/8 dark:bg-white/8 border border-black/15 dark:border-white/15 flex items-center justify-center flex-shrink-0">
                  <RiWhatsappLine size={18} className="text-black/60 dark:text-white/60" />
                </div>
                <div>
                  <p className="text-black dark:text-white text-sm font-semibold">¿Listo para empezar?</p>
                  <p className="text-black/55 dark:text-white/55 text-xs">Desde $4,900 MXN · Sin compromiso</p>
                </div>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-black/85 dark:hover:bg-white/90 transition-all duration-200 hover:gap-3"
              >
                Cotizar <RiArrowRightLine size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-6 shadow-xl shadow-black/5 dark:shadow-white/5">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-black/35 dark:text-white/35 text-[10px] font-semibold tracking-[0.25em] uppercase mb-0.5">Web Performance</p>
                  <p className="text-black dark:text-white font-bold text-lg">Rendimiento de sitio</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-black/8 dark:bg-white/8 text-black dark:text-white text-[10px] font-bold tracking-wider border border-black/12 dark:border-white/12">
                  En crecimiento
                </span>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "Leads generados", value: "+180%", sub: "vs. sitio anterior" },
                  { label: "Tráfico SEO",     value: "+240%", sub: "Orgánico real"      },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-black/8 dark:border-white/8 p-4 bg-black/2 dark:bg-white/3">
                    <p className="text-black/35 dark:text-white/35 text-[9px] font-semibold tracking-wider uppercase mb-2">{m.label}</p>
                    <p className="text-black dark:text-white text-2xl font-bold tracking-tight">{m.value}</p>
                    <p className="text-black/30 dark:text-white/30 text-[9px] mt-1">{m.sub}</p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-xl border border-black/8 dark:border-white/8 p-4 bg-black/2 dark:bg-white/3 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-black dark:text-white text-sm font-semibold">Tendencia de contactos</p>
                    <p className="text-black/35 dark:text-white/35 text-[9px]">Últimos 6 meses</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-black/60 dark:bg-white/60" />
                    <span className="text-black/35 dark:text-white/35 text-[9px] font-medium">Growth</span>
                  </div>
                </div>
                <svg viewBox="0 0 280 70" className="w-full text-black dark:text-white" fill="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="0,66 47,60 94,50 141,37 188,22 235,8 280,2 280,70 0,70"
                    fill="url(#chartGrad)"
                  />
                  <polyline
                    points="0,66 47,60 94,50 141,37 188,22 235,8 280,2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="280" cy="2" r="3" fill="currentColor" />
                  {["Ene","Feb","Mar","Abr","May","Jun"].map((m, i) => (
                    <text key={m} x={i * 47 + 2} y="70" fontSize="6.5" fill="currentColor" className="fill-black/30 dark:fill-white/30">{m}</text>
                  ))}
                </svg>
              </div>

              {/* Bottom stats */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Velocidad",  value: "95/100" },
                  { label: "WhatsApp",   value: "+31%"   },
                  { label: "SEO Score",  value: "92/100" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-black/8 dark:border-white/8 p-3 bg-black/2 dark:bg-white/3 text-center">
                    <p className="text-black/30 dark:text-white/30 text-[8px] font-semibold tracking-wider uppercase mb-1">{s.label}</p>
                    <p className="text-black dark:text-white text-sm font-bold">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
