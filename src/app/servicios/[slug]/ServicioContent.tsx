"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { RiArrowLeftLine, RiWhatsappLine, RiCheckLine } from "react-icons/ri";
import type { ServicioData } from "./data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WA = "https://wa.me/522225497631?text=Hola%2C%20me%20interesa%20solicitar%20información%20sobre%20los%20servicios%20de%20DREVIA.";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function ServicioContent({ servicio }: { servicio: ServicioData }) {
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
              href="/#servicios"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200 mb-10 group"
            >
              <RiArrowLeftLine size={15} className="transition-transform duration-200 group-hover:-translate-x-1" />
              Volver a servicios
            </motion.a>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-block text-white/35 text-xs font-medium tracking-[0.3em] uppercase mb-5"
            >
              Servicio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.08] max-w-4xl"
            >
              {servicio.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-4 text-white/55 text-lg sm:text-xl max-w-2xl leading-relaxed"
            >
              {servicio.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="mt-4 text-white/40 text-base max-w-2xl leading-relaxed"
            >
              {servicio.longDescription}
            </motion.p>

            {/* Benefits strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/8"
            >
              {servicio.benefits.map((b) => (
                <div key={b.label}>
                  <p className="text-3xl font-bold text-white">{b.metric}</p>
                  <p className="text-white/40 text-sm mt-0.5">{b.label}</p>
                </div>
              ))}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="self-center inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-white/15 ml-auto"
              >
                <RiWhatsappLine size={16} />
                Solicitar información
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-24 border-t border-white/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-12"
            >
              <span className="inline-block text-white/35 text-xs font-medium tracking-[0.3em] uppercase mb-4">
                Qué incluye
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Todo lo que necesitas,<br />
                <span className="text-white/45">sin nada que sobre</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {servicio.features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group flex gap-4 p-5 rounded-2xl border border-white/8 bg-white/2 hover:bg-white/5 hover:border-white/15 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                    <RiCheckLine size={12} className="text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Casos de éxito */}
        {servicio.casos.length > 0 && (
          <section className="py-20 lg:py-24 border-t border-white/6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="mb-12"
              >
                <span className="inline-block text-white/35 text-xs font-medium tracking-[0.3em] uppercase mb-4">
                  Portafolio
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Casos de éxito en<br />
                  <span className="text-white/45">{servicio.title}</span>
                </h2>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5"
              >
                {servicio.casos.map((caso) => (
                  <motion.div
                    key={caso.company}
                    variants={itemVariants}
                    whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.18)" }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="group rounded-2xl border border-white/8 bg-white/3 overflow-hidden"
                  >
                    <div className="px-7 pt-7 pb-6 border-b border-white/6">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="relative h-12 w-36 flex-shrink-0">
                          <Image
                            src={caso.logo}
                            alt={caso.company}
                            fill
                            className="object-contain object-left filter brightness-0 invert"
                            sizes="144px"
                          />
                        </div>
                        <span className="flex-shrink-0 text-[10px] text-white/35 font-medium tracking-wider border border-white/10 rounded-full px-3 py-1 whitespace-nowrap">
                          {caso.industry}
                        </span>
                      </div>

                      <p className="text-xs text-white/35 font-medium tracking-widest uppercase mb-2">
                        {caso.type}
                      </p>
                      <h3 className="text-white font-bold text-xl mb-3">{caso.company}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{caso.description}</p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {caso.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] text-white/35 bg-white/5 border border-white/8 rounded-full px-2.5 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="px-7 py-5">
                      <p className="text-[10px] text-white/30 font-medium tracking-widest uppercase mb-4">
                        Resultados clave
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        {caso.results.map((r) => (
                          <div key={r.label}>
                            <p className="text-white font-bold text-xl lg:text-2xl">{r.metric}</p>
                            <p className="text-white/40 text-xs mt-0.5 leading-snug">{r.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <Link
                  href="/casos"
                  className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  Ver todos los casos de éxito →
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 lg:py-28 border-t border-white/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-center"
            >
              <div className="inline-flex flex-col items-center gap-6 p-8 lg:p-10 rounded-2xl border border-white/8 bg-white/3 max-w-xl mx-auto w-full">
                <p className="text-white/40 text-xs font-medium tracking-[0.25em] uppercase">
                  ¿Listo para empezar?
                </p>
                <h3 className="text-white font-bold text-2xl lg:text-3xl text-center leading-snug">
                  Hablemos de tu proyecto
                </h3>
                <p className="text-white/45 text-sm text-center leading-relaxed">
                  Sin compromisos. Cuéntanos tu idea y te decimos exactamente qué podemos hacer por ti.
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-white/15 w-full sm:w-auto"
                >
                  <RiWhatsappLine size={16} />
                  Solicitar Demo vía WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
