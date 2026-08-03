"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import {
  RiLayout5Line,
  RiGlobalLine,
  RiShoppingCart2Line,
  RiLineChartLine,
  RiCodeSSlashLine,
  RiArrowRightUpLine,
  RiWhatsappLine,
  RiSparkling2Line,
} from "react-icons/ri";
import { WA } from "../lib/site";

const servicios = [
  {
    icon: RiLayout5Line,
    title: "Landing Pages",
    desc: "Páginas enfocadas en convertir. Diseño estratégico, velocidad y CTAs que funcionan.",
    tags: ["1 página", "Alta conversión", "Listo en días"],
    href: "/servicios/landing-pages",
  },
  {
    icon: RiGlobalLine,
    title: "Páginas Web",
    desc: "No solo presencia: una web que trae contactos cada semana y genera confianza.",
    tags: ["Hasta 8 páginas", "Blog", "SEO técnico"],
    href: "/servicios/paginas-web",
  },
  {
    icon: RiShoppingCart2Line,
    title: "E-commerce",
    desc: "Tiendas online diseñadas para vender y escalar, con checkout optimizado y SEO por producto.",
    tags: ["Catálogo", "Pagos", "Envíos"],
    href: "/servicios/ecommerce",
  },
  {
    icon: RiLineChartLine,
    title: "SEO",
    desc: "Posicionamiento orgánico para que Google te traiga clientes cada mes, con reportes claros.",
    tags: ["Contenido", "Backlinks", "Reportes"],
    href: "/servicios/seo",
  },
  {
    icon: RiCodeSSlashLine,
    title: "Software a Medida",
    desc: "CRM, ERP, integraciones y automatizaciones para las necesidades reales de tu operación.",
    tags: ["Integraciones", "Dashboards", "API"],
    href: "/servicios/desarrollos-a-medida",
  },
];

/** Tarjeta con spotlight que sigue al cursor (se apaga solo con CSS en touch). */
function ServicioCard({ s }: { s: (typeof servicios)[number] }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <a
      ref={ref}
      href={s.href}
      onMouseMove={onMouseMove}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-slate-200/80 p-7 transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-1 focus-visible:border-blue-400"
    >
      {/* Spotlight: solo se ve en hover y en dispositivos con puntero fino */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 max-[1024px]:hidden group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 0%), rgba(37,99,235,0.10), transparent 65%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-105">
          <s.icon
            size={24}
            className="text-blue-600 transition-colors duration-300 group-hover:text-white"
            aria-hidden="true"
          />
        </div>
        <span className="mt-1 inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 text-slate-300 transition-all duration-300 group-hover:border-blue-300 group-hover:text-blue-600 group-hover:rotate-45">
          <RiArrowRightUpLine size={16} aria-hidden="true" />
        </span>
      </div>

      <h3 className="relative mt-6 text-lg font-bold text-slate-900 leading-snug">
        {s.title}
      </h3>
      <p className="relative mt-3 text-sm text-slate-600 leading-relaxed">
        {s.desc}
      </p>

      {/* Etiquetas de alcance */}
      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {s.tags.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-500 text-[11px] font-medium transition-colors duration-300 group-hover:border-blue-200 group-hover:text-blue-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA empujado al fondo para que todas las tarjetas alineen */}
      <div className="relative mt-auto pt-6">
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-all group-hover:gap-2">
          Ver servicio <RiArrowRightUpLine size={16} aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="relative bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide">
            Servicios
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Soluciones que generan{" "}
            <span className="font-display italic font-medium text-slate-700">
              resultados medibles
            </span>
          </h2>
          <p className="mt-5 text-slate-500 text-base lg:text-lg leading-relaxed">
            No vendemos &ldquo;presencia digital&rdquo;. Construimos webs, tiendas
            y sistemas que atraen clientes, generan contactos semanales y se
            recuperan en 1&ndash;4 meses.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <ServicioCard s={s} />
            </Reveal>
          ))}

          {/* Cierra la retícula de 6 celdas y captura al que no encaja en ningún servicio */}
          <Reveal delay={servicios.length * 0.08} className="h-full">
            <div className="relative flex flex-col h-full justify-center overflow-hidden rounded-2xl bg-[#0a1733] border border-white/10 p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-10 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.35),transparent_70%)]"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-blue-100 text-[11px] font-semibold">
                  <RiSparkling2Line size={13} className="text-blue-300" aria-hidden="true" />
                  Proyecto a medida
                </span>
                <h3 className="mt-5 text-lg font-bold text-white leading-snug">
                  ¿Tu proyecto no encaja en ninguno?
                </h3>
                <p className="mt-3 text-sm text-blue-100/70 leading-relaxed">
                  Cuéntanos qué necesitas y te decimos si podemos resolverlo, con
                  qué alcance y en cuánto tiempo. Diagnóstico sin costo.
                </p>
                <a
                  href={WA.cotizar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white text-slate-900 text-sm font-semibold transition-all hover:bg-blue-50 hover:scale-[1.02] active:scale-95"
                >
                  <RiWhatsappLine size={16} aria-hidden="true" />
                  Cuéntanos tu proyecto
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
