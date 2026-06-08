"use client";

import Reveal from "./Reveal";
import {
  RiCursorLine,
  RiShoppingBagLine,
  RiSettings4Line,
  RiLayoutGridLine,
  RiArrowRightLine,
} from "react-icons/ri";

const problemas = [
  {
    n: "01",
    icon: RiCursorLine,
    title: "No convierte",
    desc: "Tu sitio recibe visitas, pero no genera contactos reales.",
  },
  {
    n: "02",
    icon: RiShoppingBagLine,
    title: "No vende",
    desc: "Tu tienda online tiene fricción y pierde oportunidades.",
  },
  {
    n: "03",
    icon: RiSettings4Line,
    title: "Todo es manual",
    desc: "Procesos repetitivos consumen tiempo y frenan el crecimiento.",
  },
  {
    n: "04",
    icon: RiLayoutGridLine,
    title: "Falta estructura",
    desc: "Tu operación necesita CRM, sistema o desarrollo a medida.",
  },
];

export default function Problema() {
  return (
    <section id="problema" className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide">
            El problema
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Tú conoces tu negocio.{" "}
            <span className="block font-display italic font-medium text-blue-600">
              Nosotros sabemos digitalizarlo.
            </span>
          </h2>
          <p className="mt-5 text-slate-500 text-base lg:text-lg leading-relaxed">
            Creamos webs, tiendas, landings y sistemas a medida para convertir,
            vender y automatizar.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {problemas.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08} className="text-center group">
              <div className="mx-auto w-16 h-16 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors duration-300">
                <p.icon size={26} className="text-blue-600" />
              </div>
              <p className="mt-5 text-sm font-mono tracking-[0.3em] text-slate-300">
                {p.n}
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2.5 text-sm text-slate-500 leading-relaxed max-w-[220px] mx-auto">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 flex justify-center">
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-600/25"
          >
            Ver soluciones
            <RiArrowRightLine size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
