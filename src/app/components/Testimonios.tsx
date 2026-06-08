"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiStarFill, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Reveal from "./Reveal";
import { WA } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testimonios = [
  {
    name: "Dr. Alejandro Ríos",
    role: "Director · CentralDent",
    initials: "AR",
    color: "from-cyan-500 to-blue-600",
    enfoque: "Resultados reales",
    relacion: "Comunicación clara",
    quote:
      "Pasamos de no tener presencia digital a recibir pacientes nuevos cada semana. El sitio agenda citas solo y transmite exactamente la calidad de nuestra clínica.",
  },
  {
    name: "Karla Mendoza",
    role: "Fundadora · Didácticos IQ",
    initials: "KM",
    color: "from-amber-400 to-orange-500",
    enfoque: "Crecimiento",
    relacion: "Entrega ágil",
    quote:
      "Vendíamos solo por WhatsApp y era un caos. Con la tienda que nos construyeron triplicamos las ventas en un trimestre y hoy gestionamos todo sin depender de nadie.",
  },
  {
    name: "Eduardo Torres",
    role: "CEO · Muscle Evolution",
    initials: "ET",
    color: "from-emerald-400 to-green-600",
    enfoque: "Escala",
    relacion: "Soporte continuo",
    quote:
      "Dejamos de depender de marketplaces con altas comisiones. Nuestro ecosistema digital creció los pedidos +240% y las campañas de temporada ya no son un caos operativo.",
  },
  {
    name: "Mariana Vargas",
    role: "Fundadora · Plata 925",
    initials: "MV",
    color: "from-fuchsia-400 to-purple-600",
    enfoque: "Marca premium",
    relacion: "Diseño cuidado",
    quote:
      "La tienda refleja la elegancia de mis piezas y vende sola. Dejé de pasar horas respondiendo precios por DM y ahora llego a clientes de todo México.",
  },
  {
    name: "Carlos Infante",
    role: "Dirección · Sadmind",
    initials: "CI",
    color: "from-blue-500 to-indigo-600",
    enfoque: "Eficiencia",
    relacion: "Documentación clara",
    quote:
      "Construimos un sistema a medida que centraliza toda la operación. Automatizamos el 60% de los procesos y por fin tenemos visibilidad real del avance de cada proyecto.",
  },
];

export default function Testimonios() {
  const [active, setActive] = useState(0);
  const t = testimonios[active];
  const go = (dir: number) =>
    setActive((a) => (a + dir + testimonios.length) % testimonios.length);

  return (
    <section id="testimonios" className="relative bg-slate-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide">
            Testimonios
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            La confianza también se{" "}
            <span className="font-display italic font-medium text-slate-700">
              demuestra
            </span>
          </h2>
          <p className="mt-5 text-slate-500 text-base lg:text-lg leading-relaxed">
            Empresas y proyectos que necesitaban una solución clara, funcional y
            enfocada en resultados.
          </p>
        </Reveal>

        {/* Featured card */}
        <Reveal delay={0.1} className="mt-14">
          <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-400" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="grid md:grid-cols-2"
              >
                {/* left */}
                <div className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-slate-100">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <RiStarFill key={i} size={18} className="text-amber-400" />
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-[10px] font-semibold tracking-wider text-blue-600 uppercase">Enfoque</p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">{t.enfoque}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-[10px] font-semibold tracking-wider text-blue-600 uppercase">Relación</p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">{t.relacion}</p>
                    </div>
                  </div>
                </div>

                {/* right */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <blockquote className="text-xl lg:text-2xl font-bold text-slate-900 leading-snug">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-semibold tracking-wider text-blue-600 uppercase">
                        Testimonio destacado
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        4.9/5 · +50 proyectos con foco en resultados.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => go(-1)}
                        aria-label="Anterior testimonio"
                        className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        <RiArrowLeftLine size={18} />
                      </button>
                      <button
                        onClick={() => go(1)}
                        aria-label="Siguiente testimonio"
                        className="w-11 h-11 rounded-full bg-[#0a1a3f] flex items-center justify-center text-white hover:bg-[#13234a] transition-colors"
                      >
                        <RiArrowRightLine size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Avatar selector */}
        <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-2.5">
          {testimonios.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full border transition-all ${
                active === i
                  ? "bg-white border-blue-300 shadow-sm"
                  : "bg-white/60 border-slate-200 hover:border-slate-300"
              }`}
            >
              <span className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-[11px] font-bold`}>
                {item.initials}
              </span>
              <span className={`text-sm font-medium ${active === i ? "text-blue-700" : "text-slate-600"}`}>
                {item.name.split(" ").slice(-1)[0]}
              </span>
            </button>
          ))}
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.2} className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            ¿Quieres un proyecto con esta claridad y nivel de ejecución?
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={WA.llamada}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-600/25"
            >
              Agendar diagnóstico gratuito
            </a>
            <a
              href="#casos"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-slate-200 text-slate-800 text-sm font-semibold rounded-full hover:border-slate-300 transition-all"
            >
              Ver casos de éxito
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
