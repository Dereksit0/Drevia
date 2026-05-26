"use client";

import { motion } from "framer-motion";
import { RiArrowRightLine, RiCalendarLine, RiWhatsappLine } from "react-icons/ri";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WA_BASE = "https://wa.me/522225497631?text=";

const actions = [
  {
    icon: RiArrowRightLine,
    label: "Cotizar Proyecto",
    href: WA_BASE + "Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20con%20DREVIA.",
    primary: true,
    external: true,
  },
  {
    icon: RiCalendarLine,
    label: "Agendar Llamada",
    href: WA_BASE + "Hola%2C%20quisiera%20agendar%20una%20llamada%20con%20el%20equipo%20de%20DREVIA.",
    primary: false,
    external: true,
  },
];

export default function CTAFinal() {
  return (
    <section
      id="contacto"
      className="relative bg-[#fafafa] dark:bg-[#050505] py-28 lg:py-40 overflow-hidden border-t border-black/6 dark:border-white/6"
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,var(--glow),transparent)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="inline-block text-black/40 dark:text-white/40 text-xs font-medium tracking-[0.3em] uppercase mb-6"
        >
          ¿Listo para empezar?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white tracking-tight leading-[1.08]"
        >
          Transforma tu negocio
          <br />
          <span className="text-black/40 dark:text-white/40">con una presencia</span>
          <br />
          <span>digital de élite.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-black/50 dark:text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          No esperes más para dar el salto digital que tu empresa merece.
          Hablemos de tu proyecto por WhatsApp, sin compromisos, sin burocracia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
        >
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  action.primary
                    ? "bg-black dark:bg-white text-white dark:text-black hover:bg-black/85 dark:hover:bg-white/90 shadow-lg shadow-black/15 dark:shadow-white/15"
                    : "border border-black/18 dark:border-white/18 text-black/75 dark:text-white/75 hover:border-black/35 dark:hover:border-white/35 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <Icon size={15} />
                {action.label}
              </motion.a>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-black/25 dark:text-white/25 text-sm"
        >
          Sin permanencia mínima · Primera consulta gratuita · Resultados garantizados
        </motion.p>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-black/3 dark:border-white/3" />
          <div className="absolute inset-0 m-auto w-[400px] h-[400px] rounded-full border border-black/4 dark:border-white/4" />
          <div className="absolute inset-0 m-auto w-[200px] h-[200px] rounded-full border border-black/5 dark:border-white/5" />
        </div>
      </div>
    </section>
  );
}
