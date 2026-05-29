"use client";

import { motion } from "framer-motion";
import {
  RiCodeSSlashLine,
  RiSpeedLine,
  RiSmartphoneLine,
  RiTeamLine,
  RiShieldCheckLine,
  RiCustomerService2Line,
} from "react-icons/ri";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reasons = [
  {
    icon: RiCodeSSlashLine,
    title: "Desarrollamos desde cero",
    description:
      "Nunca usamos plantillas prehechas. Cada proyecto es diseñado y desarrollado a medida para que tu negocio tenga una identidad digital 100% única y auténtica.",
    highlight: "Sin plantillas",
  },
  {
    icon: RiSpeedLine,
    title: "Velocidad de carga garantizada",
    description:
      "Utilizamos las tecnologías más actuales para que tu proyecto cargue en menos de 3 segundos. Un sitio rápido convierte más y posiciona mejor en Google.",
    highlight: "Menos de 3 seg",
  },
  {
    icon: RiSmartphoneLine,
    title: "Adaptado a cualquier dispositivo",
    description:
      "Tu proyecto se verá perfecto en celular, tablet y PC. Diseñamos con enfoque mobile-first para que ningún cliente tenga una mala experiencia.",
    highlight: "Mobile-first",
  },
  {
    icon: RiTeamLine,
    title: "Desarrolladores con experiencia",
    description:
      "Somos un equipo de desarrolladores de software especializados, no diseñadores que aprenden a programar. Arquitectura sólida, código limpio y buenas prácticas.",
    highlight: "Equipo experto",
  },
  {
    icon: RiShieldCheckLine,
    title: "Código escalable y seguro",
    description:
      "Tu proyecto está construido para crecer. Seguridad integrada desde el principio, código mantenible y arquitectura que soporta el crecimiento de tu empresa.",
    highlight: "Listo para escalar",
  },
  {
    icon: RiCustomerService2Line,
    title: "Acompañamiento real",
    description:
      "No desaparecemos después de entregar el proyecto. Te acompañamos en el lanzamiento, capacitamos a tu equipo y estamos disponibles cuando nos necesitas.",
    highlight: "Soporte continuo",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function PorQueNosotros() {
  return (
    <section className="bg-[#fafafa] dark:bg-[#050505] py-24 lg:py-32 border-t border-black/6 dark:border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 lg:mb-16"
        >
          <span className="inline-block text-black/55 dark:text-white/55 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Ventajas
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight max-w-xl">
              ¿Por qué elegir
              <br />
              <span className="text-black/45 dark:text-white/45">DREVIA?</span>
            </h2>
            <p className="text-black/55 dark:text-white/55 text-sm sm:text-base max-w-xs leading-relaxed flex-shrink-0">
              Lo que nos hace diferentes no es lo que prometemos, es lo que entregamos.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                whileHover={{ y: -4, borderColor: "rgba(0,0,0,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex flex-col p-6 lg:p-7 rounded-2xl border border-black/8 dark:border-white/8 bg-white dark:bg-white/3 hover:bg-white dark:hover:bg-white/5 transition-all duration-300"
              >
                {/* Highlight badge */}
                <span className="inline-block self-start text-[10px] font-semibold tracking-wider text-black/40 dark:text-white/40 border border-black/10 dark:border-white/10 rounded-full px-2.5 py-0.5 mb-5">
                  {reason.highlight}
                </span>

                <div className="w-11 h-11 rounded-xl bg-black/6 dark:bg-white/8 flex items-center justify-center mb-4 group-hover:bg-black/10 dark:group-hover:bg-white/14 transition-colors duration-300">
                  <Icon size={22} className="text-black/70 dark:text-white/70" />
                </div>

                <h3 className="text-black dark:text-white font-semibold text-base mb-3 leading-snug">
                  {reason.title}
                </h3>

                <p className="text-black/55 dark:text-white/55 text-sm leading-relaxed flex-1">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-14 pt-10 border-t border-black/6 dark:border-white/6 flex flex-wrap justify-center gap-10"
        >
          {[
            { value: "100%",   label: "Código a medida" },
            { value: "<3s",    label: "Tiempo de carga" },
            { value: "Mobile", label: "First por defecto" },
            { value: "+3 años",label: "De experiencia" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-black dark:text-white">{item.value}</span>
              <span className="text-black/50 dark:text-white/50 text-xs text-center">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
