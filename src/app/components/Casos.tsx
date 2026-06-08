"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";
import Reveal from "./Reveal";
import { WA } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const casos = [
  {
    id: "musclevolution",
    chip: "musclevolution.com",
    n: "01",
    cats: "E-COMMERCE · FITNESS · ESCALA",
    year: "2024",
    title: ["Tienda que", "crece desde", "el día uno."],
    desc: "Ecosistema digital completo con membresías, blog y logística integrada. Independencia total de marketplaces y ventas en automático.",
    metric: "+240%",
    metricLabel: "pedidos mensuales",
    video: "/videos/musclevolution.mp4",
  },
  {
    id: "centraldent",
    chip: "centraldentmx.com",
    n: "02",
    cats: "DISEÑO WEB · SALUD · UX/UI",
    year: "2024",
    title: ["Sitio corporativo", "que convierte."],
    desc: "Una presencia digital construida para comunicar con precisión, generar confianza y convertir visitantes en pacientes desde el primer scroll.",
    metric: "+180%",
    metricLabel: "consultas online",
    video: "/videos/centraldent.mp4",
  },
  {
    id: "didacticosiq",
    chip: "didacticosiq.com",
    n: "03",
    cats: "TIENDA EN LÍNEA · CONVERSIÓN · CHECKOUT",
    year: "2024",
    title: ["E-commerce", "que vende", "de verdad."],
    desc: "Estructura de compra optimizada para reducir fricción, maximizar el ticket promedio y hacer que cada visita cuente.",
    metric: "+320%",
    metricLabel: "ventas online",
    video: "/videos/didacticosiq.mp4",
  },
];

function LaptopMockup({ video }: { video: string }) {
  return (
    <div className="relative w-full max-w-[460px]">
      <div className="rounded-t-xl border-[6px] border-[#0d1b3a] bg-[#0d1b3a] overflow-hidden shadow-2xl shadow-black/40">
        {/* browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#13234a]">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        {/* screen — autoplaying muted video of the real project */}
        <div className="relative h-[230px] sm:h-[260px] bg-slate-900">
          <video
            key={video}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      {/* laptop base */}
      <div className="h-3 bg-[#0d1b3a] rounded-b-xl mx-[-8px]" />
      <div className="h-1.5 w-1/3 mx-auto bg-[#13234a] rounded-b-lg" />
    </div>
  );
}

export default function Casos() {
  const [active, setActive] = useState(0);
  const c = casos[active];

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

        {/* chips */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          {casos.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                active === i
                  ? "bg-white/15 border-white/30 text-white"
                  : "bg-white/5 border-white/10 text-blue-100/60 hover:text-white hover:border-white/20"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${active === i ? "bg-blue-300" : "bg-white/30"}`} />
              {item.chip}
            </button>
          ))}
        </Reveal>

        {/* case content */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={c.id + "-text"}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="flex items-center gap-3 text-blue-200/50 text-xs font-mono tracking-widest">
                <span>{c.n}</span>
                <span className="h-px w-6 bg-blue-200/30" />
                <span>{c.cats}</span>
                <span className="h-px w-6 bg-blue-200/30" />
                <span>{c.year}</span>
              </div>
              <h3 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-[1.05]">
                {c.title.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </h3>
              <p className="mt-6 text-blue-100/70 leading-relaxed max-w-md">
                {c.desc}
              </p>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10">
                <span className="text-2xl font-bold text-white">{c.metric}</span>
                <span className="h-6 w-px bg-white/20" />
                <span className="text-sm text-blue-100/70">{c.metricLabel}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={c.id + "-mockup"}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex justify-center lg:justify-end"
            >
              <LaptopMockup video={c.video} />
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.15} className="mt-16 flex justify-center">
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
