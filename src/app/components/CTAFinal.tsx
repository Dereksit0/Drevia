"use client";

import { motion } from "framer-motion";
import { RiArrowRightLine, RiCalendarLine, RiWhatsappLine } from "react-icons/ri";
import { WA } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CTAFinal() {
  return (
    <section className="relative bg-[#061029] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 lg:px-12 lg:py-20 text-center bg-[radial-gradient(125%_125%_at_50%_0%,#2f6bff_0%,#1d4ed8_45%,#0a1a3f_100%)]"
        >
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/85 text-xs font-semibold tracking-wide">
              DIAGNÓSTICO GRATUITO
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              ¿Listo para transformar tu{" "}
              <span className="block font-display italic font-medium text-blue-200">
                presencia digital?
              </span>
            </h2>
            <p className="mt-5 text-blue-100/80 text-base lg:text-lg leading-relaxed">
              Agenda un diagnóstico gratuito y descubre cómo podemos ayudarte a
              crecer con tecnología, procesos más claros y una solución diseñada
              para generar resultados.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={WA.cotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#0a1a3f] text-sm font-semibold rounded-full hover:bg-blue-50 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20"
              >
                <RiWhatsappLine size={18} className="text-green-500" />
                Cotizar Proyecto
              </a>
              <a
                href={WA.llamada}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border border-white/25 text-white text-sm font-semibold rounded-full hover:bg-white/15 transition-all backdrop-blur-sm"
              >
                <RiCalendarLine size={18} />
                Agendar Llamada
                <RiArrowRightLine size={16} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-blue-100/70">
              {["Sin compromiso", "Propuesta clara", "Enfoque en resultados"].map((b, i) => (
                <span key={b} className="flex items-center gap-2">
                  {i > 0 && <span className="hidden sm:inline w-1 h-1 rounded-full bg-blue-300/60 -ml-3" />}
                  {b}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
