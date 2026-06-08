"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  RiInstagramLine,
  RiVolumeUpFill,
  RiVolumeMuteFill,
  RiPlayFill,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import { SOCIAL } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type VideoItem = {
  src: string | null;
  logo: string;
  company: string;
  person: string;
  role: string;
};

// 3 videos reales + 2 espacios listos para sumar más (coloca los .mp4
// en /public/videos con estos nombres y se reproducirán automáticamente).
const videos: VideoItem[] = [
  {
    src: "/videos/centraldent.mp4",
    logo: "/imgs/centraldent.png",
    company: "CentralDent",
    person: "Dr. Alejandro Ríos",
    role: "Director General",
  },
  {
    src: "/videos/didacticosiq.mp4",
    logo: "/imgs/didacticosiq.png",
    company: "Didácticos IQ",
    person: "Karla Mendoza",
    role: "Fundadora",
  },
  {
    src: "/videos/musclevolution.mp4",
    logo: "/imgs/musclevolution.png",
    company: "Muscle Evolution",
    person: "Eduardo Torres",
    role: "CEO & Fundador",
  },
  {
    src: null,
    logo: "/imgs/plata925logo.png",
    company: "Plata 925",
    person: "Mariana Vargas",
    role: "CEO",
  },
  {
    src: null,
    logo: "/imgs/sadmind.png",
    company: "Sadmind",
    person: "Carlos Infante",
    role: "CTO",
  },
];

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    if (!el.muted && el.paused) el.play().catch(() => {});
    setMuted(el.muted);
  };

  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a1a3f] group"
      style={{ aspectRatio: "9 / 16" }}
    >
      {video.src ? (
        <>
          <video
            ref={ref}
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Sound toggle */}
          <button
            onClick={toggleSound}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/45 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/65 transition-colors"
          >
            {muted ? <RiVolumeMuteFill size={16} /> : <RiVolumeUpFill size={16} />}
          </button>
        </>
      ) : (
        // Placeholder elegante: listo para agregar el video del cliente
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(120%_80%_at_50%_0%,#1d4ed8_0%,#0a1a3f_55%,#061029_100%)]">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative h-9 w-28 mb-5">
            <Image
              src={video.logo}
              alt={video.company}
              fill
              className="object-contain filter brightness-0 invert opacity-80"
              sizes="112px"
            />
          </div>
          <div className="relative w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <RiPlayFill size={22} className="text-white/80 ml-0.5" />
          </div>
          <p className="relative mt-4 text-white/55 text-[11px] font-medium tracking-wide uppercase">
            Video próximamente
          </p>
        </div>
      )}

      {/* Bottom gradient + info */}
      <figcaption className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 via-black/55 to-transparent pt-16 pb-4 px-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-bold">
              {video.person
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>
          <div className="leading-tight">
            <p className="text-white text-xs font-semibold">{video.person}</p>
            <p className="text-white/55 text-[10px] mt-0.5">
              {video.role} · {video.company}
            </p>
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export default function VideoTestimonios() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#061029]">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#0f2a6b_0%,#0a1a3f_45%,#061029_100%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 lg:mb-14"
        >
          <span className="inline-block text-blue-300 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            En sus propias palabras
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-xl leading-[1.1]">
              Testimonios en{" "}
              <span className="font-display italic font-medium text-blue-200">
                video
              </span>
            </h2>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-100/70 hover:text-white text-xs font-medium transition-colors duration-200"
              >
                <RiInstagramLine size={14} />
                Instagram
              </a>
              <span className="text-white/20 text-xs">·</span>
              <a
                href={SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-100/70 hover:text-white text-xs font-medium transition-colors duration-200"
              >
                <SiTiktok size={12} />
                TikTok
              </a>
            </div>
          </div>
          <p className="mt-3 text-blue-100/70 text-sm sm:text-base max-w-lg leading-relaxed">
            Los dueños de estos negocios comparten en sus propias palabras la
            experiencia de trabajar con DREVIA.
          </p>
        </motion.div>

        {/* Desktop: 5-column grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-5">
          {videos.map((video, index) => (
            <VideoCard key={video.company} video={video} index={index} />
          ))}
        </div>

        {/* Mobile / tablet: horizontal scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {videos.map((video, index) => (
            <div
              key={video.company}
              className="flex-shrink-0 snap-start"
              style={{ width: "clamp(200px, 60vw, 270px)" }}
            >
              <VideoCard video={video} index={index} />
            </div>
          ))}
        </div>

        <p className="lg:hidden text-center text-blue-100/40 text-xs mt-6">
          Desliza para ver más →
        </p>
      </div>
    </section>
  );
}
