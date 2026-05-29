"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/imgs/centraldent.png",    alt: "CentralDent",      large: false },
  { src: "/imgs/didacticosiq.png",   alt: "Didácticos IQ",    large: false },
  { src: "/imgs/kraken.png",         alt: "Kraken",           large: false },
  { src: "/imgs/musclevolution.png", alt: "Muscle Evolution", large: true  },
  { src: "/imgs/plata925logo.png",   alt: "Plata 925",        large: false },
  { src: "/imgs/sadmind.png",        alt: "Sadmind",          large: false },
];

const duplicated = [...logos, ...logos];

export default function SliderLogos() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="clientes" className="bg-[#fafafa] dark:bg-[#050505] py-20 lg:py-24 border-y border-black/6 dark:border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-black/50 dark:text-white/50 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Confianza
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white tracking-tight">
            Empresas que confían en nosotros
          </h2>
          <p className="mt-3 text-black/55 dark:text-white/55 text-sm sm:text-base max-w-lg mx-auto">
            Marcas que han transformado su presencia digital con DREVIA.
          </p>
        </motion.div>
      </div>

      {/* Slider — full width */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#fafafa] dark:from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#fafafa] dark:from-[#050505] to-transparent pointer-events-none" />

        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            width: "max-content",
            animation: "marquee 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {duplicated.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="flex items-center justify-center mx-10 sm:mx-14">
              <div className={`relative flex items-center justify-center opacity-40 hover:opacity-70 dark:opacity-50 dark:hover:opacity-80 transition-opacity duration-300 ${logo.large ? "h-20 w-52" : "h-16 w-40"}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain filter brightness-0 dark:invert"
                  sizes="208px"
                />
              </div>
              <span className="w-px h-6 bg-black/10 dark:bg-white/10 ml-10 sm:ml-14 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-wrap justify-center gap-8"
      >
        {[
          { value: "+50",  label: "proyectos entregados" },
          { value: "6+",   label: "industrias atendidas" },
          { value: "95%",  label: "clientes satisfechos" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="text-black dark:text-white font-bold text-xl">{item.value}</span>
            <span className="text-black/50 dark:text-white/50 text-sm">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
