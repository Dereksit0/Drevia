"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiPlayCircleFill, RiInstagramLine } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const videos = [
  {
    logo: "/imgs/centraldent.png",
    company: "CentralDent",
    person: "Dr. Alejandro Ríos",
    role: "Director General",
    quote: "\"DREVIA transformó nuestra clínica digital. Ahora recibimos pacientes todos los días por internet.\"",
  },
  {
    logo: "/imgs/didacticosiq.png",
    company: "Didácticos IQ",
    person: "Karla Mendoza",
    role: "Fundadora",
    quote: "\"Triplicamos nuestras ventas en el primer trimestre. El equipo de DREVIA es increíble.\"",
  },
  {
    logo: "/imgs/musclevolution.png",
    company: "Muscle Evolution",
    person: "Eduardo Torres",
    role: "CEO & Fundador",
    quote: "\"La tienda quedó espectacular. Mis clientes me escriben a diario felicitando el diseño.\"",
  },
  {
    logo: "/imgs/plata925logo.png",
    company: "Plata 925",
    person: "Mariana Vargas",
    role: "CEO",
    quote: "\"Pasamos de vender en redes a tener una tienda profesional. Nuestras ventas se multiplicaron.\"",
  },
  {
    logo: "/imgs/sadmind.png",
    company: "Sadmind",
    person: "Carlos Infante",
    role: "CTO",
    quote: "\"El sistema que desarrollaron automatizó el 60% de nuestros procesos. Excelente trabajo.\"",
  },
];

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  return (
    <motion.div
      key={video.company}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
    >
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0c] group cursor-pointer"
        style={{ aspectRatio: "9 / 16" }}
      >
        {/* Placeholder background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#0d0d0d] to-black" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Logo — top center */}
        <div className="absolute top-6 left-0 right-0 flex justify-center z-10">
          <div className="relative h-8 w-28">
            <Image
              src={video.logo}
              alt={video.company}
              fill
              className="object-contain filter brightness-0 invert opacity-80"
              sizes="112px"
            />
          </div>
        </div>

        {/* Play button — center */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
            <RiPlayCircleFill size={36} className="text-white/80 ml-0.5" />
          </div>
        </div>

        {/* Bottom gradient + info */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent pt-16 pb-5 px-5">
          <p className="text-white/75 text-xs leading-relaxed mb-4 line-clamp-3 italic">
            {video.quote}
          </p>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
              <span className="text-white/60 text-[10px] font-bold">
                {video.person.split(" ").map(n => n[0]).slice(0, 2).join("")}
              </span>
            </div>
            <div>
              <p className="text-white text-xs font-semibold leading-tight">{video.person}</p>
              <p className="text-white/40 text-[10px] mt-0.5">{video.role} · {video.company}</p>
            </div>
          </div>
        </div>

        {/* Top-right platform badge */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
          <SiTiktok size={9} className="text-white/50" />
          <span className="text-white/40 text-[9px] font-medium">Reels</span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}

export default function VideoTestimonios() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white dark:bg-black py-24 lg:py-32 overflow-hidden border-t border-black/6 dark:border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 lg:mb-14"
        >
          <span className="inline-block text-white/40 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            En sus propias palabras
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-xl">
              Lo que opinan sobre
              <br />
              <span className="text-white/50">nuestro trabajo</span>
            </h2>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="https://www.instagram.com/dreviasolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-medium transition-colors duration-200"
              >
                <RiInstagramLine size={14} />
                Instagram
              </a>
              <span className="text-white/15 text-xs">·</span>
              <a
                href="https://www.tiktok.com/@dreviasolutionsweb?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-medium transition-colors duration-200"
              >
                <SiTiktok size={12} />
                TikTok
              </a>
            </div>
          </div>
          <p className="mt-3 text-white/40 text-sm sm:text-base max-w-lg leading-relaxed">
            Los dueños de estos negocios comparten su experiencia trabajando con nosotros.
          </p>
        </motion.div>

        {/* Desktop: 5-column grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-5">
          {videos.map((video, index) => (
            <VideoCard key={video.company} video={video} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="lg:hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{
            paddingLeft: "max(1rem, calc((100vw - 80rem) / 2 + 1rem))",
            paddingRight: "max(1rem, calc((100vw - 80rem) / 2 + 1rem))",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {videos.map((video, index) => (
            <div
              key={video.company}
              className="flex-shrink-0"
              style={{ width: "clamp(200px, 52vw, 260px)", scrollSnapAlign: "start" }}
            >
              <VideoCard video={video} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint — mobile only */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="lg:hidden flex items-center justify-center gap-3 mt-8 max-w-7xl mx-auto px-4"
      >
        <div className="flex gap-1.5">
          {videos.map((_, i) => (
            <span key={i} className={`h-0.5 rounded-full transition-all duration-300 ${i === 0 ? "w-5 bg-white/60" : "w-2 bg-white/15"}`} />
          ))}
        </div>
        <span className="text-white/25 text-xs">Desliza para ver más</span>
      </motion.div>
    </section>
  );
}
