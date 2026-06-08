"use client";

import Reveal from "./Reveal";

const stats = [
  { value: "+50", label: "Proyectos entregados" },
  { value: "95%", label: "Clientes satisfechos" },
  { value: "+3", label: "Años de experiencia" },
  { value: "4.9/5", label: "Calificación promedio" },
];

export default function Stats() {
  return (
    <section className="relative bg-[#0a1a3f] border-y border-white/10 py-12 lg:py-16 overflow-hidden">
      {/* subtle grid + glow */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.22),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`text-center lg:px-6 ${
                i !== 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <p className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {s.value}
              </p>
              <p className="mt-2 text-blue-100/60 text-xs sm:text-sm font-medium">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
