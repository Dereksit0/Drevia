"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { RiArrowLeftLine, RiWhatsappLine, RiAlertLine, RiLightbulbLine, RiExternalLinkLine } from "react-icons/ri";
import type { Caso } from "../casosData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WA = "https://wa.me/522225497631?text=Hola%2C%20vi%20el%20caso%20de%20%C3%A9xito%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20mi%20proyecto%20con%20DREVIA.";

export default function CasoDetail({ caso }: { caso: Caso }) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#061029] text-white">

        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_15%_10%,#2f6bff_0%,#1d4ed8_38%,#0a1a3f_78%,#061029_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-10"
            >
              <a
                href="/casos"
                className="inline-flex items-center gap-2 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white text-sm transition-colors duration-200 group"
              >
                <RiArrowLeftLine size={15} className="transition-transform duration-200 group-hover:-translate-x-1" />
                Casos de éxito
              </a>
              <span className="text-black/15 dark:text-white/15">/</span>
              <span className="text-black/40 dark:text-white/40 text-sm">{caso.company}</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="mb-6"
                >
                  <div className="relative h-14 w-44 mb-6">
                    <Image
                      src={caso.logo}
                      alt={caso.company}
                      fill
                      className="object-contain object-left filter brightness-0 dark:invert"
                      sizes="176px"
                    />
                  </div>
                  <span className="inline-block text-black/35 dark:text-white/35 text-xs font-medium tracking-[0.25em] uppercase mb-3">
                    {caso.type}
                  </span>
                  <span className="ml-3 text-[10px] text-black/35 dark:text-white/35 border border-black/10 dark:border-white/10 rounded-full px-2.5 py-0.5">
                    {caso.industry}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white tracking-tight leading-[1.08] mb-5"
                >
                  {caso.company}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-black/55 dark:text-white/55 text-base leading-relaxed"
                >
                  {caso.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-2 mt-5"
                >
                  {caso.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-black/35 dark:text-white/35 bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8 rounded-full px-2.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {caso.url && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-6"
                  >
                    <a
                      href={caso.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-black/85 dark:hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-black/10 dark:shadow-white/10"
                    >
                      <RiExternalLinkLine size={14} />
                      Ver Proyecto
                    </a>
                  </motion.div>
                )}
              </div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                className="grid grid-cols-1 gap-4"
              >
                {caso.results.map((r) => (
                  <div key={r.label} className="flex items-center gap-5 p-5 rounded-2xl border border-black/8 dark:border-white/8 bg-black/3 dark:bg-white/3">
                    <span className="text-4xl font-bold text-black dark:text-white leading-none">{r.metric}</span>
                    <span className="text-black/50 dark:text-white/50 text-sm leading-snug">{r.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problema & Solución */}
        <section className="py-20 lg:py-24 border-t border-black/6 dark:border-white/6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">

              {/* El problema */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="p-7 rounded-2xl border border-black/8 dark:border-white/8 bg-[#fafafa] dark:bg-white/3"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-black/8 dark:bg-white/8 flex items-center justify-center flex-shrink-0">
                    <RiAlertLine size={18} className="text-black/60 dark:text-white/60" />
                  </div>
                  <div>
                    <p className="text-[10px] text-black/35 dark:text-white/35 font-semibold tracking-widest uppercase">El reto</p>
                    <h2 className="text-black dark:text-white font-bold text-lg leading-tight">El Problema</h2>
                  </div>
                </div>
                <p className="text-black/60 dark:text-white/55 text-sm leading-relaxed">
                  {caso.problema}
                </p>
              </motion.div>

              {/* La solución */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
                className="p-7 rounded-2xl border border-black/12 dark:border-white/12 bg-black/3 dark:bg-white/5"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <RiLightbulbLine size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-black/35 dark:text-white/35 font-semibold tracking-widest uppercase">Lo que hicimos</p>
                    <h2 className="text-black dark:text-white font-bold text-lg leading-tight">La Solución</h2>
                  </div>
                </div>
                <p className="text-black/60 dark:text-white/55 text-sm leading-relaxed">
                  {caso.solucion}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 border-t border-black/6 dark:border-white/6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-center"
            >
              <div className="inline-flex flex-col items-center gap-6 p-8 lg:p-10 rounded-2xl border border-black/8 dark:border-white/8 bg-black/3 dark:bg-white/3 max-w-xl mx-auto w-full">
                <p className="text-black/40 dark:text-white/40 text-xs font-medium tracking-[0.25em] uppercase">
                  ¿Tu empresa podría ser el próximo caso de éxito?
                </p>
                <h3 className="text-black dark:text-white font-bold text-2xl lg:text-3xl text-center leading-snug">
                  Hablemos de tu proyecto
                </h3>
                <p className="text-black/45 dark:text-white/45 text-sm text-center leading-relaxed">
                  Sin compromisos. Cuéntanos tu reto y te decimos exactamente cómo podemos resolverlo.
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-black/85 dark:hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-black/15 dark:shadow-white/15 w-full sm:w-auto"
                >
                  <RiWhatsappLine size={16} />
                  Contactar por WhatsApp
                </a>
              </div>

              <a
                href="/casos"
                className="inline-flex items-center gap-2 text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 text-sm transition-colors duration-200 mt-8 group"
              >
                <RiArrowLeftLine size={14} className="transition-transform group-hover:-translate-x-1" />
                Ver todos los casos de éxito
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
