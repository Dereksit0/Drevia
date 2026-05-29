"use client";

import { motion } from "framer-motion";
import { RiStarFill } from "react-icons/ri";

const testimonials = [
  {
    name: "Dr. Alejandro Ríos",
    role: "Director General",
    company: "CentralDent",
    initials: "AR",
    quote: "DREVIA transformó por completo nuestra presencia digital. El nuevo sitio aumentó nuestras consultas en línea de forma notable en solo tres meses. El equipo entiende el negocio, no solo el código.",
    stars: 5,
  },
  {
    name: "Karla Mendoza",
    role: "Fundadora",
    company: "Didácticos IQ",
    initials: "KM",
    quote: "Entregaron en tiempo récord y con una calidad que superó nuestras expectativas. La tienda online que desarrollaron convierte muchísimo mejor que nuestra plataforma anterior. Altamente recomendados.",
    stars: 5,
  },
  {
    name: "Eduardo Torres",
    role: "CEO & Fundador",
    company: "Muscle Evolution",
    initials: "ET",
    quote: "El e-commerce que DREVIA diseñó para nosotros es elegante, rápido y fácil de administrar. Mis clientes me escriben a diario felicitando el diseño y las ventas crecieron desde el primer mes.",
    stars: 5,
  },
  {
    name: "Mariana Vargas",
    role: "CEO",
    company: "Plata 925",
    initials: "MV",
    quote: "Pasamos de vender solo en redes a tener una tienda profesional de verdad. La comunicación durante todo el proceso fue excelente y el soporte post-lanzamiento es impecable.",
    stars: 5,
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-[#fafafa] dark:bg-[#050505] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14 lg:mb-16"
        >
          <span className="inline-block text-black/55 dark:text-white/55 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-black/50 dark:text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Resultados reales de empresas que apostaron por la excelencia digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: "rgba(0,0,0,0.18)" }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="flex flex-col p-6 lg:p-7 rounded-2xl border border-black/8 dark:border-white/8 bg-white dark:bg-white/3 transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <RiStarFill key={i} size={14} className="text-black/70 dark:text-white/70" />
                ))}
              </div>

              <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-black/6 dark:border-white/6">
                <div className="w-10 h-10 rounded-full bg-black/8 dark:bg-white/10 border border-black/10 dark:border-white/12 flex items-center justify-center flex-shrink-0">
                  <span className="text-black/70 dark:text-white/70 text-xs font-bold tracking-wide">{t.initials}</span>
                </div>
                <div>
                  <p className="text-black dark:text-white font-semibold text-sm leading-tight">{t.name}</p>
                  <p className="text-black/55 dark:text-white/55 text-xs mt-0.5">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
        >
          <div className="flex items-center gap-1.5">
            {[1,2,3,4,5].map((i) => (
              <RiStarFill key={i} size={16} className="text-black/60 dark:text-white/60" />
            ))}
          </div>
          <p className="text-black/55 dark:text-white/55 text-sm">
            <span className="text-black dark:text-white font-semibold">4.9/5</span> promedio en
            satisfacción del cliente — basado en{" "}
            <span className="text-black dark:text-white font-semibold">+50</span> proyectos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
