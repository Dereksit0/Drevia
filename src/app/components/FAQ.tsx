"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en estar listo mi proyecto?",
    answer:
      "Depende del tipo y complejidad del proyecto. Una landing page puede estar lista en 1-2 semanas, una página web corporativa en 3-4 semanas, y un e-commerce o sistema web entre 6-12 semanas. Siempre te damos un cronograma claro antes de empezar.",
  },
  {
    question: "¿Puedo actualizar el contenido de mi sitio yo mismo?",
    answer:
      "Sí. Todos nuestros proyectos incluyen un panel de administración (CMS) intuitivo desde donde puedes actualizar textos, imágenes, productos o cualquier contenido sin necesitar conocimientos técnicos. También te capacitamos para usarlo.",
  },
  {
    question: "¿Utilizan plantillas o todo es desarrollado desde cero?",
    answer:
      "Todo es desarrollado desde cero. Nunca usamos plantillas prehechas ni temas de WordPress u otras plataformas. Cada diseño es 100% personalizado para tu marca e identidad. Esto garantiza un resultado único, más rápido y más seguro.",
  },
  {
    question: "¿Qué tecnologías utilizan para los proyectos?",
    answer:
      "Usamos las tecnologías más modernas del mercado: Next.js, React, Astro, TypeScript, Tailwind CSS para el frontend; Node.js, Python o PHP para el backend; PostgreSQL, MySQL o MongoDB para bases de datos; AWS o Vercel para hosting. La tecnología depende del tipo de proyecto.",
  },
  {
    question: "¿Necesito tener un dominio y hosting antes de empezar?",
    answer:
      "No es necesario. Podemos ayudarte a adquirir el dominio y configurar el hosting durante el proyecto. Si ya tienes uno, también lo migramos sin problema. En muchos casos el hosting está incluido en el primer año del proyecto.",
  },
  {
    question: "¿Qué incluye el soporte post-lanzamiento?",
    answer:
      "Una vez lanzado el proyecto, ofrecemos un período de acompañamiento para resolver dudas, ajustes menores y monitoreo de estabilidad. También contamos con planes de mantenimiento mensual para actualizaciones, backups y soporte continuo.",
  },
  {
    question: "¿Trabajan con clientes fuera de México?",
    answer:
      "Sí. Trabajamos con empresas de toda Latinoamérica y hemos tenido proyectos con clientes en Estados Unidos y Europa. Toda la comunicación y gestión del proyecto se puede hacer de manera remota sin ningún problema.",
  },
  {
    question: "¿Los precios incluyen IVA?",
    answer:
      "Los precios mostrados en nuestra sección de planes son de referencia y no incluyen IVA. Al generar la cotización formal te indicamos el desglose completo con impuestos aplicables. También ofrecemos facturación electrónica (CFDI) para personas morales y físicas con actividad empresarial.",
  },
  {
    question: "¿Puedo ver el avance del proyecto durante el desarrollo?",
    answer:
      "Por supuesto. Trabajamos de forma transparente y te mostramos avances en cada etapa. Utilizamos un ambiente de staging (pre-producción) donde puedes revisar el proyecto en tiempo real antes del lanzamiento final.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white dark:bg-black py-24 lg:py-32 border-t border-black/6 dark:border-white/6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="inline-block text-black/40 dark:text-white/40 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-black/50 dark:text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Todo lo que necesitas saber antes de iniciar tu proyecto con nosotros.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="space-y-2"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-black/15 dark:border-white/15 bg-black/3 dark:bg-white/4"
                    : "border-black/8 dark:border-white/8 bg-black/2 dark:bg-white/2 hover:border-black/12 dark:hover:border-white/12"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`text-sm sm:text-base font-medium transition-colors duration-200 ${isOpen ? "text-black dark:text-white" : "text-black/70 dark:text-white/70"}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-black dark:bg-white text-white dark:text-black" : "bg-black/8 dark:bg-white/8 text-black/50 dark:text-white/50"}`}>
                    {isOpen ? <RiSubtractLine size={14} /> : <RiAddLine size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px w-full bg-black/6 dark:bg-white/6 mb-4" />
                        <p className="text-black/55 dark:text-white/55 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-black/55 dark:text-white/55 text-sm">
            ¿Tienes otra pregunta?{" "}
            <a
              href="https://wa.me/522225497631?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20los%20servicios%20de%20DREVIA."
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Escríbenos por WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
