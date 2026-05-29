"use client";

import { motion } from "framer-motion";
import {
  RiComputerLine,
  RiLayoutLine,
  RiCodeSSlashLine,
  RiShoppingCartLine,
  RiSettings4Line,
} from "react-icons/ri";

const services = [
  {
    icon: RiComputerLine,
    title: "Páginas Web",
    href: "/servicios/paginas-web",
    description:
      "Diseñamos y desarrollamos sitios web corporativos a medida que reflejan la identidad de tu marca y generan confianza en tus clientes.",
  },
  {
    icon: RiLayoutLine,
    title: "Landing Pages",
    href: "/servicios/landing-pages",
    description:
      "Páginas de aterrizaje optimizadas para convertir. Diseño enfocado en métricas, velocidad y máximo rendimiento de campañas.",
  },
  {
    icon: RiCodeSSlashLine,
    title: "Sistemas Web",
    href: "/servicios/sistema-web",
    description:
      "Plataformas y aplicaciones web robustas para gestionar procesos internos, automatizar tareas y escalar tu operación.",
  },
  {
    icon: RiShoppingCartLine,
    title: "E-commerce",
    href: "/servicios/ecommerce",
    description:
      "Tiendas online de alto rendimiento con experiencia de compra fluida, pasarelas de pago integradas y gestión de inventario.",
  },
  {
    icon: RiSettings4Line,
    title: "Desarrollos a Medida",
    href: "/servicios/desarrollos-a-medida",
    description:
      "Soluciones tecnológicas únicas adaptadas a tus necesidades específicas. Desde integraciones API hasta sistemas empresariales complejos.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white dark:bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-black/55 dark:text-white/55 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Qué hacemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-black/50 dark:text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones digitales completas para empresas que buscan resultados
            concretos y crecimiento sostenible.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.title}
                href={service.href}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex flex-col p-6 lg:p-7 rounded-2xl border border-black/8 dark:border-white/8 bg-black/3 dark:bg-white/3 hover:bg-black/6 dark:hover:bg-white/6 hover:border-black/18 dark:hover:border-white/18 transition-all duration-300 cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-black/8 dark:bg-white/8 flex items-center justify-center mb-5 group-hover:bg-black/14 dark:group-hover:bg-white/14 transition-colors duration-300">
                  <Icon size={22} className="text-black/80 dark:text-white/80" />
                </div>

                <h3 className="text-black dark:text-white font-semibold text-base mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-black/55 dark:text-white/55 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-black/30 dark:text-white/30 group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors duration-300">
                  <span className="text-xs font-medium">Saber más</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_1px_0_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
