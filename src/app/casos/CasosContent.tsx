"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  RiArrowLeftLine,
  RiWhatsappLine,
  RiExternalLinkLine,
  RiArrowRightLine,
} from "react-icons/ri";
import { projects } from "./casosData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WA = "https://wa.me/522225497631?text=Hola%2C%20vi%20sus%20casos%20de%20%C3%A9xito%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20mi%20proyecto%20con%20DREVIA.";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function CasosContent() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#061029] text-white">

        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_15%_10%,#2f6bff_0%,#1d4ed8_38%,#0a1a3f_78%,#061029_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white text-sm transition-colors duration-200 mb-10 group"
            >
              <RiArrowLeftLine size={15} className="transition-transform duration-200 group-hover:-translate-x-1" />
              Volver al inicio
            </motion.a>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-block text-black/35 dark:text-white/35 text-xs font-medium tracking-[0.3em] uppercase mb-5"
            >
              Portafolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl"
            >
              Casos de Éxito
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-5 text-black/50 dark:text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              Proyectos reales, resultados concretos. Conoce cómo hemos transformado
              la presencia digital de empresas como la tuya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-black/8 dark:border-white/8"
            >
              {[
                { value: "6+",    label: "Clientes presentados" },
                { value: "98%",   label: "Satisfacción" },
                { value: "+300%", label: "Resultados promedio" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-black dark:text-white">{s.value}</p>
                  <p className="text-black/40 dark:text-white/40 text-sm mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6"
            >
              {projects.map((project) => (
                <motion.a
                  key={project.company}
                  href={`/casos/${project.slug}`}
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.18)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group rounded-2xl border border-black/8 dark:border-white/8 bg-black/2 dark:bg-white/3 overflow-hidden transition-colors duration-300 cursor-pointer"
                >
                  {/* Card header */}
                  <div className="px-7 pt-7 pb-6 border-b border-black/6 dark:border-white/6">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="relative h-12 w-36 flex-shrink-0">
                        <Image
                          src={project.logo}
                          alt={project.company}
                          fill
                          className="object-contain object-left filter brightness-0 dark:invert"
                          sizes="144px"
                        />
                      </div>
                      <span className="flex-shrink-0 text-[10px] text-black/35 dark:text-white/35 font-medium tracking-wider border border-black/10 dark:border-white/10 rounded-full px-3 py-1 whitespace-nowrap">
                        {project.industry}
                      </span>
                    </div>

                    <p className="text-xs text-black/35 dark:text-white/35 font-medium tracking-widest uppercase mb-2">
                      {project.type}
                    </p>
                    <h2 className="text-black dark:text-white font-bold text-xl mb-3">{project.company}</h2>
                    <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-black/35 dark:text-white/35 bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8 rounded-full px-2.5 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="px-7 py-5 flex items-center justify-between">
                    <div className="grid grid-cols-3 gap-4 flex-1">
                      {project.results.map((r) => (
                        <div key={r.label}>
                          <p className="text-black dark:text-white font-bold text-xl lg:text-2xl">{r.metric}</p>
                          <p className="text-black/40 dark:text-white/40 text-xs mt-0.5 leading-snug">{r.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-black/6 dark:bg-white/8 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
                      <RiArrowRightLine size={14} className="text-black/40 dark:text-white/40 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-16 lg:mt-20 text-center"
            >
              <div className="inline-flex flex-col items-center gap-6 p-8 lg:p-10 rounded-2xl border border-black/8 dark:border-white/8 bg-black/3 dark:bg-white/3 max-w-xl mx-auto w-full">
                <p className="text-black/40 dark:text-white/40 text-xs font-medium tracking-[0.25em] uppercase">
                  ¿Tu empresa podría ser el próximo caso de éxito?
                </p>
                <h3 className="text-black dark:text-white font-bold text-2xl lg:text-3xl text-center leading-snug">
                  Hablemos de tu proyecto
                </h3>
                <p className="text-black/45 dark:text-white/45 text-sm text-center leading-relaxed">
                  Sin compromisos, sin burocracia. Cuéntanos tu idea y te decimos cómo podemos hacerla realidad.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-black/85 dark:hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-black/15 dark:shadow-white/15"
                  >
                    <RiWhatsappLine size={16} />
                    Contactar por WhatsApp
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-black/15 dark:border-white/15 text-black/70 dark:text-white/70 text-sm font-medium rounded-full hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
                  >
                    <RiExternalLinkLine size={15} />
                    Ver servicios
                  </a>
                </div>
              </div>

              <a
                href="/"
                className="inline-flex items-center gap-2 text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 text-sm transition-colors duration-200 mt-8 group"
              >
                <RiArrowLeftLine size={14} className="transition-transform group-hover:-translate-x-1" />
                Volver a la página principal
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
