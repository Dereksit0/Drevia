"use client";

import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiWhatsappLine,
  RiShoppingBag3Line,
  RiGlobalLine,
  RiLineChartLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import { WA } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
        <p className="text-[10px] text-white/60 font-medium">{small}</p>
        <p className="text-sm text-white font-semibold">{big}</p>
      </div>
    </motion.a>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Background: electric blue gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_15%_10%,#2f6bff_0%,#1d4ed8_38%,#0a1a3f_78%,#061029_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left column */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/85 text-xs font-medium backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                Resultados verificables, no promesas genéricas
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl sm:text-5xl lg:text-[3.7rem] font-bold leading-[1.05] tracking-tight text-white"
            >
              Páginas web que traen{" "}
              <span className="font-display italic font-medium text-blue-200">
                clientes reales
              </span>{" "}
              — no solo se ven bien, también venden.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-base lg:text-lg text-blue-100/80 leading-relaxed max-w-xl"
            >
              CentralDent recibe pacientes nuevos{" "}
              <span className="font-semibold text-white">cada semana</span>.
              Didácticos IQ{" "}
              <span className="font-semibold text-white">triplicó sus ventas</span>{" "}
              en un trimestre. Muscle Evolution creció{" "}
              <span className="font-semibold text-white">+240% en pedidos</span>.
              Mira exactamente qué los hizo diferentes.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={WA.cotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#0a1a3f] text-sm font-semibold rounded-full hover:bg-blue-50 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20"
              >
                Solicitar Cotización
                <RiArrowRightLine size={18} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/15 transition-all backdrop-blur-sm"
              >
                <RiWhatsappLine size={18} className="text-green-400" />
                Ver Servicios
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
              <div className="flex -space-x-2">
                {["MX", "CD", "GD"].map((c) => (
                  <span
                    key={c}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold text-white"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-blue-100/70">
                <span className="font-semibold text-white">+50 empresas</span> en
                México confían en DREVIA · Puebla · CDMX · GDL
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
              className="relative w-[260px] sm:w-[300px]"
            >
              {/* Phone frame */}
              <div className="relative rounded-[2.8rem] border-[10px] border-[#0d1b3a] bg-[#0d1b3a] shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0d1b3a] rounded-full z-10" />
                <div className="rounded-[2.1rem] overflow-hidden bg-white">
                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-100 border-b border-slate-200">
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <div className="ml-2 flex-1 h-4 rounded bg-white border border-slate-200" />
                  </div>
                  {/* Stylized site */}
                  <div className="relative h-[440px] bg-gradient-to-b from-slate-900 to-slate-800">
                    <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,#1d4ed8_0%,transparent_60%)] opacity-70" />
                    <div className="relative p-5 flex flex-col h-full">
                      <p className="font-display italic text-blue-200 text-xs">drevia</p>
                      <h3 className="mt-8 text-white font-bold text-2xl leading-tight">
                        Convertimos visitas en clientes reales.
                      </h3>
                      <p className="mt-3 text-white/60 text-[11px] leading-relaxed">
                        Diseño, estrategia y tecnología en una sola solución
                        digital pensada para vender.
                      </p>
                      <div className="mt-5 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-blue-600 text-white text-[11px] font-semibold w-fit">
                        Iniciar proyecto →
                      </div>
                      <div className="mt-auto grid grid-cols-3 gap-2">
                        {["+240%", "95%", "+50"].map((v) => (
                          <div key={v} className="rounded-lg bg-white/10 border border-white/10 p-2 text-center">
                            <p className="text-white font-bold text-sm">{v}</p>
                            <p className="text-white/45 text-[7px]">resultado</p>
                          </div>
                        ))}
                      </div>
                    </div>
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
                <RiShieldCheckLine size={15} className="text-blue-600" />
                <span className="text-[11px] font-semibold text-slate-800">Proyecto real · +confianza</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
