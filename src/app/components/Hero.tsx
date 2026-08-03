"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiShoppingBag3Line,
  RiGlobalLine,
  RiLineChartLine,
  RiShieldCheckLine,
  RiPauseFill,
  RiPlayFill,
} from "react-icons/ri";
import { WA } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Proyectos reales que rotan dentro del mockup del celular.
const showcase = [
  { video: "/videos/musclevolution_movil.mp4", poster: "/videos/musclevolution_movil.jpg", name: "Muscle Evolution", tag: "E-commerce", metric: "+240% pedidos" },
  { video: "/videos/centraldent_movil.mp4", poster: "/videos/centraldent_movil.jpg", name: "CentralDent", tag: "Sitio corporativo", metric: "+180% consultas" },
  { video: "/videos/didacticosiq_movil.mp4", poster: "/videos/didacticosiq_movil.jpg", name: "Didácticos IQ", tag: "Tienda en línea", metric: "+320% ventas" },
];

const valueChips = [
  { icon: RiShoppingBag3Line, label: "E-commerce" },
  { icon: RiGlobalLine, label: "Páginas web" },
  { icon: RiLineChartLine, label: "Landing Pages" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function FloatBadge({
  icon: Icon,
  small,
  big,
  href,
  className,
  delay,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  small: string;
  big: string;
  href: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      className={`absolute z-20 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 hover:border-white/30 shadow-xl shadow-black/20 animate-float cursor-pointer transition-colors ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-white" />
      </div>
      <div className="leading-tight">
        <p className="text-xs text-white/60 font-medium">{small}</p>
        <p className="text-sm text-white font-semibold">{big}</p>
      </div>
    </motion.a>
  );
}

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Auto-rotación (pausable — WCAG 2.2.2)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % showcase.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  // #5/#32 — Solo reproduce el video activo (los demás quedan montados, pausados)
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === slide) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [slide]);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16"
    >
      {/* Background: electric blue gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_15%_10%,#2f6bff_0%,#1d4ed8_38%,#0a1a3f_78%,#061029_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* Left column */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.08] tracking-tight text-white"
            >
              Sitios web, tiendas y SEO que traen{" "}
              <span className="font-display italic font-medium text-blue-200">
                clientes reales
              </span>{" "}
              — no solo se ven bien, también venden.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 text-base lg:text-lg text-blue-100/85 leading-relaxed max-w-xl"
            >
              CentralDent recibe pacientes nuevos{" "}
              <span className="font-semibold text-white">cada semana</span>.
              Didácticos IQ{" "}
              <span className="font-semibold text-white">triplicó sus ventas</span>{" "}
              en un trimestre. Muscle Evolution creció{" "}
              <span className="font-semibold text-white">+240% en pedidos</span>.
              Mira exactamente qué los hizo diferentes.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={WA.cotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#0a1a3f] text-sm lg:text-base font-semibold rounded-full hover:bg-blue-50 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20"
              >
                Solicitar Cotización
                <RiArrowRightLine size={18} aria-hidden="true" />
                <span className="sr-only">(se abre WhatsApp)</span>
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white text-sm lg:text-base font-semibold rounded-full hover:bg-white/15 transition-all backdrop-blur-sm"
              >
                Ver Servicios
              </a>
            </motion.div>

            {/* #28 — chips de valor visibles en móvil (los badges flotantes son sm+) */}
            <motion.div variants={item} className="mt-6 flex sm:hidden flex-wrap gap-2">
              {valueChips.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-medium">
                  <Icon size={14} aria-hidden="true" className="text-blue-200" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* #29 — prueba social */}
            <motion.div variants={item} className="mt-8">
              <p className="text-sm text-blue-100/75">
                <span className="font-semibold text-white">+50 empresas</span> en
                México y Colombia confían en DREVIA
              </p>
            </motion.div>
          </motion.div>

          {/* Right column — phone mockup with floating badges */}
          <div className="relative flex justify-center lg:justify-end">
            <FloatBadge
              icon={RiShoppingBag3Line}
              small="Diseño profesional"
              big="E-commerce"
              href="/servicios/ecommerce"
              delay={0.6}
              className="top-2 lg:top-14 -right-2 lg:-right-10"
            />
            <FloatBadge
              icon={RiGlobalLine}
              small="Presencia digital"
              big="Páginas web"
              href="/servicios/paginas-web"
              delay={0.9}
              className="bottom-28 left-2 sm:left-4 lg:left-44"
            />
            <FloatBadge
              icon={RiLineChartLine}
              small="Alta conversión"
              big="Landing Pages"
              href="/servicios/landing-pages"
              delay={1.2}
              className="bottom-6 -right-2 lg:-right-14"
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              className="relative w-[240px] sm:w-[270px] lg:w-[300px]"
            >
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] border-[9px] border-[#0d1b3a] bg-[#0d1b3a] shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#0d1b3a] rounded-full z-10" />
                <div className="rounded-[1.9rem] overflow-hidden bg-white">
                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-slate-200">
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <div className="ml-2 flex-1 h-3.5 rounded bg-white border border-slate-200" />
                  </div>
                  {/* Rotating project showcase — todos montados, solo el activo reproduce */}
                  <div className="relative h-[400px] lg:h-[440px] bg-slate-900">
                    {showcase.map((s, i) => (
                      <div
                        key={s.video}
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{ opacity: i === slide ? 1 : 0 }}
                        aria-hidden={i === slide ? undefined : true}
                      >
                        <video
                          ref={(el) => { videoRefs.current[i] = el; }}
                          src={s.video}
                          poster={s.poster}
                          muted
                          loop
                          playsInline
                          preload="none"
                          aria-label={`Proyecto ${s.name}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* bottom gradient + label */}
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                          <p className="text-xs font-medium text-blue-200">{s.tag}</p>
                          <p className="text-sm font-bold text-white leading-tight">{s.name}</p>
                          <p className="mt-0.5 text-xs font-semibold text-green-300">{s.metric}</p>
                        </div>
                      </div>
                    ))}

                    {/* progress dots */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                      {showcase.map((s, i) => (
                        <span
                          key={s.video}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i === slide ? "w-5 bg-white" : "w-1.5 bg-white/40"
                          }`}
                        />
                      ))}
                    </div>

                    {/* #31 — control de pausa */}
                    <button
                      type="button"
                      onClick={() => setPaused((p) => !p)}
                      aria-label={paused ? "Reanudar presentación" : "Pausar presentación"}
                      className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                    >
                      {paused ? <RiPlayFill size={13} aria-hidden="true" /> : <RiPauseFill size={13} aria-hidden="true" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* chip bottom */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-xl whitespace-nowrap"
              >
                <RiShieldCheckLine size={15} className="text-blue-600" aria-hidden="true" />
                <span className="text-xs font-semibold text-slate-800">Proyecto real · +confianza</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
