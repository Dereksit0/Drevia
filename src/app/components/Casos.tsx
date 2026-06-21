"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiArrowRightUpLine } from "react-icons/ri";
import Reveal from "./Reveal";
import { WA } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Caso = {
  id: string;
  n: string;
  brand: string;
  url?: string;
  title: string;
  highlight: string;
  tags: string[];
  year: string;
  desc: string;
  metric: string;
  metricLabel: string;
  video: string;
  poster: string;
};

const casos: Caso[] = [
  {
    id: "centraldent",
    n: "01",
    brand: "centraldentmx.com",
    url: "https://centraldentmx.com",
    title: "Sitio corporativo",
    highlight: "que convierte",
    tags: ["Diseño web", "Salud", "UX/UI"],
    year: "2024",
    desc: "Una presencia digital construida para comunicar con precisión, generar confianza y convertir visitantes en pacientes desde el primer scroll.",
    metric: "+180%",
    metricLabel: "consultas online",
    video: "/videos/centraldent.mp4",
    poster: "/videos/centraldent.jpg",
  },
  {
    id: "didacticosiq",
    n: "02",
    brand: "didacticosiq.com",
    url: "https://didacticosiq.com",
    title: "E-commerce",
    highlight: "que vende de verdad",
    tags: ["Tienda en línea", "Conversión", "Checkout"],
    year: "2024",
    desc: "Estructura de compra optimizada para reducir fricción, maximizar el ticket promedio y hacer que cada visita cuente.",
    metric: "+320%",
    metricLabel: "ventas online",
    video: "/videos/didacticosiq.mp4",
    poster: "/videos/didacticosiq.jpg",
  },
  {
    id: "musclevolution",
    n: "03",
    brand: "musclevolution.com",
    url: "https://musclevolution.com",
    title: "Tienda que crece",
    highlight: "desde el día uno",
    tags: ["E-commerce", "Fitness", "Escala"],
    year: "2024",
    desc: "Ecosistema digital completo con membresías, blog y logística integrada. Independencia total de marketplaces y ventas en automático.",
    metric: "+240%",
    metricLabel: "pedidos mensuales",
    video: "/videos/musclevolution.mp4",
    poster: "/videos/musclevolution.jpg",
  },
];

function CasoMockup({ caso }: { caso: Caso }) {
  const ref = useRef<HTMLVideoElement>(null);

  // #45 — reproduce solo cuando está en viewport; pausa al salir
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative w-full max-w-[520px]">
      <div className="rounded-2xl border border-white/10 bg-[#0d1b3a] overflow-hidden shadow-2xl shadow-black/40">
        {/* browser bar */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#13234a] border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-white/5 border border-white/5 flex items-center px-3">
            <span className="text-xs text-blue-100/45 truncate">{caso.url ?? caso.brand}</span>
          </div>
        </div>

        {/* screen — video real del proyecto */}
        <div className="relative h-[260px] sm:h-[300px] bg-slate-900">
          <video
            ref={ref}
            src={caso.video}
            poster={caso.poster}
            muted
            loop
            playsInline
            preload="none"
            aria-label={`Vista del proyecto ${caso.brand}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function Casos() {
  return (
    <section
      id="casos"
      className="relative overflow-hidden py-20 lg:py-28 bg-[linear-gradient(180deg,#0a1a3f_0%,#0e2356_50%,#0a1a3f_100%)]"
    >
      <div className="absolute inset-0 -z-0 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Proyectos que{" "}
            <span className="font-display italic font-medium text-blue-200">
              hablan solos
            </span>
          </h2>
          <p className="mt-5 text-blue-100/70 text-base lg:text-lg">
            Una selección de proyectos donde diseño, estrategia y tecnología se
            convierten en crecimiento real.
          </p>
        </Reveal>

        {/* alternating project rows */}
        <div className="mt-16 lg:mt-24 flex flex-col gap-20 lg:gap-28">
          {casos.map((c, i) => {
            const flipped = i % 2 === 1; // alterna lado de la imagen
            return (
              <Reveal key={c.id}>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                  {/* Mockup */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className={`flex justify-center ${
                      flipped ? "lg:order-2 lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    <CasoMockup caso={c} />
                  </motion.div>

                  {/* Text */}
                  <div className={flipped ? "lg:order-1" : ""}>
                    {/* counter + number */}
                    <div className="flex items-baseline gap-4">
                      <span className="text-5xl sm:text-6xl font-bold text-white/15 leading-none">
                        {c.n}
                      </span>
                      <span className="text-xs font-mono tracking-widest text-blue-200/50">
                        {c.n} / {casos.length}
                      </span>
                    </div>

                    {/* tags */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium tracking-wide text-blue-100/70 uppercase"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-blue-200/50">
                        {c.year}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.1]">
                      {c.title}{" "}
                      <span className="font-display italic font-medium text-blue-200">
                        {c.highlight}
                      </span>
                    </h3>

                    <p className="mt-5 text-blue-100/70 leading-relaxed max-w-md">
                      {c.desc}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10">
                        <span className="text-2xl font-bold text-white">{c.metric}</span>
                        <span className="h-6 w-px bg-white/20" />
                        <span className="text-sm text-blue-100/70">{c.metricLabel}</span>
                      </div>
                      {c.url && (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                        >
                          Visitar sitio
                          <RiArrowRightUpLine size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-20 flex justify-center">
          <a
            href={WA.cotizar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#0a1a3f] text-sm font-semibold rounded-full hover:bg-blue-50 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Quiero un proyecto así
            <RiArrowRightLine size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
