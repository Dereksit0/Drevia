"use client";

import Reveal from "./Reveal";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";

const rows = [
  { otros: "Desarrollo sin estrategia de negocio", drevia: "Estrategia digital enfocada en conversión" },
  { otros: "Sitios visuales pero sin optimización", drevia: "UX/UI orientado a generar leads y ventas" },
  { otros: "Tiempos de entrega inciertos", drevia: "Roadmap claro con etapas definidas" },
  { otros: "Poca integración con herramientas", drevia: "Integración con CRM, APIs y automatizaciones" },
  { otros: "Sin SEO técnico", drevia: "SEO técnico desde el desarrollo" },
  { otros: "Soporte limitado después del proyecto", drevia: "Soporte continuo y mejoras futuras" },
  { otros: "Resultados difíciles de verificar", drevia: "Resultados verificables: +50 proyectos y casos en vivo" },
];

export default function Comparativa() {
  return (
    <section id="comparativa" className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_0%,#eff6ff_0%,transparent_70%)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide">
            Comparativa
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            ¿Por qué elegir{" "}
            <span className="font-display italic font-medium text-blue-600">DREVIA</span>?
          </h2>
          <p className="mt-5 text-slate-500 text-base lg:text-lg leading-relaxed">
            Muchas opciones pueden desarrollar una web. La diferencia está en
            construir una solución digital pensada para generar resultados.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div role="table" aria-label="Comparativa entre otras agencias y DREVIA" className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50">
            {/* Header */}
            <div role="row" className="grid grid-cols-2 bg-slate-50/80 border-b border-slate-200">
              <div role="columnheader" className="px-5 sm:px-8 py-5">
                <p className="text-sm font-semibold text-slate-500">
                  Otros freelancers / agencias
                </p>
              </div>
              <div role="columnheader" className="px-5 sm:px-8 py-5 bg-blue-600/5 border-l border-slate-200">
                <p className="text-sm font-bold text-blue-600">DREVIA</p>
              </div>
            </div>

            {/* Rows */}
            {rows.map((r, i) => (
              <div
                role="row"
                key={r.drevia}
                className={`grid grid-cols-2 ${i !== rows.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div role="cell" className="flex items-start gap-3 px-5 sm:px-8 py-5">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                    <RiCloseLine size={13} className="text-slate-500" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-slate-600 leading-relaxed">{r.otros}</span>
                </div>
                <div role="cell" className="flex items-start gap-3 px-5 sm:px-8 py-5 bg-blue-600/[0.03] border-l border-slate-100">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <RiCheckLine size={13} className="text-white" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-slate-800 leading-relaxed">{r.drevia}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
