"use client";

import Reveal from "./Reveal";
import {
  RiSearchLine,
  RiPencilRuler2Line,
  RiTerminalBoxLine,
  RiRocket2Line,
} from "react-icons/ri";

const pasos = [
  {
    icon: RiSearchLine,
    title: "1. Consulta Inicial",
    desc: "Entendemos tus objetivos, contexto y necesidades específicas para definir una base clara.",
  },
  {
    icon: RiPencilRuler2Line,
    title: "2. Diseño & Prototipo",
    desc: "Diseñamos una experiencia visual clara, intuitiva y alineada con tu marca.",
  },
  {
    icon: RiTerminalBoxLine,
    title: "3. Desarrollo Ágil",
    desc: "Construimos con tecnología moderna, iteraciones rápidas y enfoque en resultados.",
  },
  {
    icon: RiRocket2Line,
    title: "4. Lanzamiento & Soporte",
    desc: "Publicamos, optimizamos y dejamos una base sólida para seguir creciendo.",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,#eff6ff_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide">
            Nuestro proceso
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Cómo transformamos tu idea en{" "}
            <span className="block font-display italic font-medium text-slate-700">
              realidad digital
            </span>
          </h2>
          <p className="mt-5 text-slate-500 text-base lg:text-lg leading-relaxed">
            Convertimos ideas en productos digitales con una metodología clara,
            ágil y enfocada en resultados reales.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {pasos.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                      i === 0
                        ? "bg-blue-600 shadow-blue-600/30"
                        : "bg-white border border-slate-200 shadow-slate-200/60"
                    }`}
                  >
                    <p.icon size={26} className={i === 0 ? "text-white" : "text-blue-600"} />
                  </div>
                  <div className="mt-6 w-full rounded-2xl bg-slate-50/80 border border-slate-200/70 p-6">
                    <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-2.5 text-sm text-slate-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-3">
          {["Diagnóstico claro", "Proceso ordenado", "Entrega ágil"].map((b) => (
            <span
              key={b}
              className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold"
            >
              {b}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
