"use client";

import { useState } from "react";
import Image from "next/image";

const logos = [
  { src: "/imgs/centraldent.png", alt: "CentralDent", large: false },
  { src: "/imgs/didacticosiq.png", alt: "Didácticos IQ", large: false },
  { src: "/imgs/kraken.png", alt: "Kraken", large: false },
  { src: "/imgs/musclevolution.png", alt: "Muscle Evolution", large: true },
  { src: "/imgs/plata925logo.png", alt: "Plata 925", large: false },
  { src: "/imgs/sadmind.png", alt: "Sadmind", large: false },
];

const duplicated = [...logos, ...logos];

export default function ClientesLogos() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="clientes"
      aria-label="Empresas que confían en DREVIA"
      className="relative bg-[#061029] py-12 lg:py-16 border-y border-white/10"
    >
      <p className="text-center text-blue-200/60 text-xs font-semibold tracking-[0.25em] uppercase mb-8">
        Empresas que ya confían en DREVIA
      </p>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#061029] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#061029] to-transparent pointer-events-none" />

        <div
          className="flex items-center"
          style={{
            width: "max-content",
            animation: "marquee 35s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {duplicated.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex items-center justify-center mx-8 sm:mx-12"
            >
              <div
                className={`relative opacity-60 hover:opacity-100 transition-opacity duration-300 ${
                  logo.large ? "h-14 w-44" : "h-11 w-32"
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="176px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
