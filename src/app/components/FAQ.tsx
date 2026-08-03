"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownSLine, RiWhatsappLine } from "react-icons/ri";
import Reveal from "./Reveal";
import { WA } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    q: "¿Por qué elegir DREVIA en lugar de otras agencias?",
    a: "Porque no entregamos solo un sitio bonito: construimos una solución digital con estrategia, SEO técnico e integraciones pensadas para convertir visitas en clientes. Tenemos casos verificables como CentralDent, Didácticos IQ y Muscle Evolution con resultados medibles.",
  },
  {
    q: "¿Cuánto cuesta una página web profesional en México?",
    a: "Trabajamos con un modelo de cuota de inicio + mensualidad: Landing Pages desde $1,800 MXN de inicio y $890 MXN al mes, Páginas Web desde $3,200 MXN de inicio y $1,490 MXN al mes, y E-commerce desde $5,500 MXN de inicio y $2,690 MXN al mes. La mensualidad incluye hosting, dominio, mantenimiento y actualizaciones de contenido, así que no hay costos sorpresa. Cada servicio tiene tres niveles (Esencial, Crecimiento y Pro), y los proyectos más complejos (sistemas a medida o e-commerce a gran escala) se cotizan según el alcance.",
  },
  {
    q: "¿Cuánto tarda el desarrollo de mi proyecto?",
    a: "Depende del alcance. Una landing page puede estar lista en 1–2 semanas, una página web entre 2–4 semanas y un sistema a medida se define en el diagnóstico inicial. Trabajamos con entregas ágiles y un roadmap claro de etapas.",
  },
  {
    q: "¿DREVIA trabaja con empresas de mi sector?",
    a: "Sí. Hemos desarrollado proyectos para clínicas, educación, fitness, joyería, retail y software. Adaptamos la estrategia y el diseño a las necesidades específicas de cada industria.",
  },
  {
    q: "¿El sitio va a aparecer en Google?",
    a: "Sí. Implementamos SEO técnico desde el desarrollo: estructura optimizada, velocidad de carga, metadatos y buenas prácticas. CentralDent triplicó sus visitas orgánicas y Muscle Evolution posiciona orgánicamente para sus productos.",
  },
  {
    q: "¿Puedo administrar el contenido yo mismo?",
    a: "Sí. Entregamos paneles de administración intuitivos para que gestiones productos, contenido, pedidos e inventario sin depender de nosotros. Incluimos capacitación de uso.",
  },
  {
    q: "¿Son confiables? ¿Puedo ver referencias verificables?",
    a: "Sí. Puedes revisar nuestros casos de éxito con sitios en vivo (CentralDent, Didácticos IQ, Muscle Evolution, Plata 925 y más). Contamos con +50 proyectos entregados y 95% de satisfacción.",
  },
  {
    q: "¿Qué pasa después del lanzamiento?",
    a: "Tu plan no termina en el lanzamiento: la mensualidad incluye hosting, dominio, mantenimiento, monitoreo y actualizaciones de contenido cada mes. El soporte por WhatsApp va de 72 horas de respuesta en el plan Esencial a 24 horas en el plan Pro, y los planes Pro suman una reunión mensual de seguimiento. La permanencia mínima es de 6 a 12 meses según el servicio.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-20 lg:py-28">
      {/* #2 — Rich results de FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide">
            Preguntas frecuentes
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-slate-900">
            Todo lo que necesitas saber
          </h2>
          <p className="mt-3 text-slate-500">Las dudas más comunes, resueltas.</p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 transition-colors">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900">
                      {f.q}
                    </span>
                    <RiArrowDownSLine
                      size={22}
                      aria-hidden="true"
                      className={`text-blue-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-5 text-sm text-slate-500 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="text-slate-500 text-sm">¿Otra pregunta? Escríbenos directo.</p>
          <a
            href={WA.pregunta}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3.5 bg-green-700 text-white text-sm font-semibold rounded-full hover:bg-green-800 transition-all"
          >
            <RiWhatsappLine size={18} aria-hidden="true" />
            Escríbenos por WhatsApp
            <span className="sr-only">(se abre WhatsApp)</span>
          </a>
          {/* #69 — enlazado interno */}
          <p className="mt-5 text-sm text-slate-500">
            También puedes{" "}
            <a href="#casos" className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2">
              ver casos de éxito
            </a>{" "}
            o{" "}
            <a href="#precios" className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2">
              revisar precios
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
