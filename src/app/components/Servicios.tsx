"use client";

import Reveal from "./Reveal";
import {
  RiLayout5Line,
  RiGlobalLine,
  RiShoppingCart2Line,
  RiCodeSSlashLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

const servicios = [
  {
    icon: RiLayout5Line,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "Landing Pages",
    desc: "Páginas enfocadas en convertir. Diseño estratégico, velocidad y CTAs que funcionan.",
    metric: "Kraken: 4.8% de conversión y +12k leads en 30 días.",
    href: "/servicios/landing-pages",
  },
  {
    icon: RiGlobalLine,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "Páginas Web que Venden",
    desc: "No solo presencia: una web que trae contactos cada semana y genera confianza.",
    metric: "CentralDent recibe pacientes nuevos cada semana.",
    href: "/servicios/paginas-web",
  },
  {
    icon: RiShoppingCart2Line,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "E-commerce",
    desc: "Tiendas online diseñadas para vender y escalar, con checkout optimizado y SEO por producto.",
    metric: "Muscle Evolution: +240% en pedidos mensuales.",
    href: "/servicios/ecommerce",
  },
  {
    icon: RiCodeSSlashLine,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "Software a Medida",
    desc: "CRM, ERP, integraciones y automatizaciones para las necesidades reales de tu operación.",
    metric: "Sadmind automatizó el 60% de sus procesos.",
    href: "/servicios/desarrollos-a-medida",
  },
];

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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <a
                href={s.href}
                className="group flex flex-col h-full rounded-2xl bg-white border border-slate-200/80 p-7 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                  <s.icon size={24} className={s.iconColor} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900 leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  {s.metric}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  Ver servicio <RiArrowRightUpLine size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
