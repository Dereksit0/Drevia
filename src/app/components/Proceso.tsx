"use client";

import { motion } from "framer-motion";
import {
  RiMessage2Line,
  RiPenNibLine,
  RiCodeLine,
  RiCheckDoubleLine,
  RiRocketLine,
} from "react-icons/ri";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WA = "https://wa.me/522225497631?text=Hola%2C%20quiero%20iniciar%20mi%20proyecto%20con%20DREVIA.";

const steps = [
  {
    icon: RiMessage2Line,
    title: "Consulta Inicial",
    description: "Entendemos tu negocio, objetivos y necesidades específicas en una sesión estratégica sin costo.",
  },
  {
    icon: RiPenNibLine,
    title: "Diseño & Prototipo",
    description: "Creamos wireframes y prototipos de alta fidelidad para validar la visión antes de escribir código.",
  },
  {
    icon: RiCodeLine,
    title: "Desarrollo",
    description: "Nuestro equipo construye tu solución con las mejores tecnologías, actualizándote en cada etapa.",
  },
  {
    icon: RiCheckDoubleLine,
    title: "Pruebas & Revisión",
    description: "Pruebas exhaustivas de rendimiento, usabilidad y compatibilidad. Tu aprobación es indispensable.",
  },
  {
    icon: RiRocketLine,
    title: "Lanzamiento & Soporte",
    description: "Deployment profesional, monitoreo post-lanzamiento y soporte continuo para que tu proyecto crezca.",
  },
];

export default function Proceso() {
  return (
    <section className="bg-white dark:bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-black/40 dark:text-white/40 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-black/50 dark:text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Un proceso claro, transparente y orientado a resultados que garantiza el éxito de cada proyecto.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative mb-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: EASE }}
              style={{ originX: 0 }}
              className="absolute top-8 left-[calc(10%)] right-[calc(10%)] h-px bg-gradient-to-r from-black/0 dark:from-white/0 via-black/20 dark:via-white/20 to-black/0 dark:to-white/0"
            />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: EASE }}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-black/6 dark:bg-white/6 border border-black/12 dark:border-white/12 flex items-center justify-center mb-5 relative z-10 group-hover:bg-black/10 dark:group-hover:bg-white/10 group-hover:border-black/25 dark:group-hover:border-white/25 transition-all duration-300"
                  >
                    <Icon size={22} className="text-black/70 dark:text-white/70" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-[9px] font-black">
                      {index + 1}
                    </span>
                  </motion.div>
                  <h3 className="text-black dark:text-white font-semibold text-sm mb-2.5 leading-snug">{step.title}</h3>
                  <p className="text-black/40 dark:text-white/40 text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-black/0 dark:from-white/0 via-black/15 dark:via-white/15 to-black/0 dark:to-white/0" />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
                  className="flex gap-6"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-black/6 dark:bg-white/6 border border-black/12 dark:border-white/12 flex items-center justify-center relative z-10">
                      <Icon size={18} className="text-black/70 dark:text-white/70" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-[8px] font-black z-20">
                      {index + 1}
                    </span>
                  </div>
                  <div className="pt-2 flex-1">
                    <h3 className="text-black dark:text-white font-semibold text-sm mb-1.5">{step.title}</h3>
                    <p className="text-black/45 dark:text-white/45 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20"
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-black/85 dark:hover:bg-white/90 hover:scale-105 hover:shadow-xl hover:shadow-black/15 dark:hover:shadow-white/15 active:scale-95 transition-all duration-200"
          >
            Iniciar mi proyecto
          </a>
        </motion.div>
      </div>
    </section>
  );
}
