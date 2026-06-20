"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCheckLine, RiWhatsappLine, RiFireLine } from "react-icons/ri";
import Reveal from "./Reveal";
import { WA } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Plan = {
  badge: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
};

const tabs = ["Landing Page", "Página Web", "E-commerce"] as const;
type Tab = (typeof tabs)[number];

const detailsHref: Record<Tab, string> = {
  "Landing Page": "/servicios/landing-pages",
  "Página Web": "/servicios/paginas-web",
  "E-commerce": "/servicios/ecommerce",
};

// La inversión cubre 1 año (desarrollo + lo incluido) y se renueva cada año.
const priceMeta: Record<Tab, { badge: string; note: string }> = {
  "Landing Page": {
    badge: "POR 1 AÑO",
    note: "Hosting y dominio incluidos · renovación anual",
  },
  "Página Web": {
    badge: "POR 1 AÑO",
    note: "Hosting y dominio incluidos · renovación anual",
  },
  "E-commerce": {
    badge: "POR 1 AÑO",
    note: "Plataforma (mensualidad) la pagas tú · renovación anual",
  },
};

const plansByTab: Record<Tab, Plan[]> = {
  "Landing Page": [
    {
      badge: "Para empezar",
      name: "Esencial",
      tagline: "Lanza y empieza a recibir clientes",
      price: "$4,500",
      features: [
        "Landing de 1 página enfocada 100% en convertir",
        "Lista en 3–5 días, perfecta en celular y carga rápida",
        "Formulario y botón directo a tu WhatsApp",
        "Aparece en Google (SEO inicial configurado)",
        "1 año de hosting y dominio incluidos",
        "1 ronda de cambios + 15 días de soporte",
      ],
    },
    {
      badge: "Más recomendado",
      name: "Crecimiento",
      tagline: "Convierte más y mide resultados",
      price: "$8,500",
      features: [
        "Todo lo del plan Esencial",
        "Más secciones para resolver dudas y cerrar la venta",
        "Píxel de Meta/Google instalado y listo para tus campañas",
        "Datos estructurados para destacar en Google",
        "Diseño accesible para todo tipo de usuario",
        "2 rondas de cambios + 45 días de soporte por WhatsApp",
      ],
    },
    {
      badge: "Máximo potencial",
      name: "Pro",
      tagline: "Tu landing al máximo, con acompañamiento",
      price: "$13,900",
      features: [
        "Todo lo del plan Crecimiento",
        "Hasta 9 secciones con animaciones profesionales",
        "Se conecta con tu CRM o sistema de ventas",
        "Velocidad optimizada (Core Web Vitals)",
        "Dominio .com o .mx incluido (primer año)",
        "3 rondas de cambios + soporte prioritario por WhatsApp",
        "Acompañamiento post-lanzamiento para seguir mejorando",
      ],
    },
  ],
  "Página Web": [
    {
      badge: "Para empezar",
      name: "Esencial",
      tagline: "Tu presencia profesional online",
      price: "$6,500",
      features: [
        "Sitio de hasta 4 páginas (Inicio, Servicios, Nosotros, Contacto)",
        "Diseño impecable en celular y computadora",
        "Contacto directo a tu WhatsApp en todo el sitio",
        "SEO inicial para que Google te encuentre",
        "1 año de hosting y dominio incluidos",
        "Entrega en 5–8 días + 1 ronda de cambios + 15 días de soporte",
      ],
    },
    {
      badge: "Más recomendado",
      name: "Crecimiento",
      tagline: "Atrae clientes desde Google",
      price: "$13,900",
      features: [
        "Todo lo del plan Esencial",
        "Hasta 7 páginas, con blog para atraer tráfico orgánico",
        "3 artículos optimizados para SEO escritos por nosotros",
        "Píxel de Meta/Google listo para tus campañas",
        "Google Analytics y datos estructurados configurados",
        "Panel sencillo para que edites tu propio contenido",
        "2 rondas de cambios + 45 días de soporte por WhatsApp",
      ],
    },
    {
      badge: "Máximo potencial",
      name: "Pro",
      tagline: "Conviértete en el referente de tu nicho",
      price: "$21,900",
      features: [
        "Todo lo del plan Crecimiento",
        "Hasta 12 páginas/secciones totalmente personalizadas",
        "Blog por categorías + 6 artículos SEO incluidos",
        "Se conecta con tu CRM o sistema de ventas",
        "Galería optimizada sin sacrificar velocidad",
        "Optimización certificada Core Web Vitals",
        "Dominio .com o .mx incluido (primer año)",
        "3 rondas de cambios + soporte prioritario por WhatsApp",
      ],
    },
  ],
  "E-commerce": [
    {
      badge: "Para empezar",
      name: "Esencial",
      tagline: "Empieza a vender online",
      price: "$9,900",
      features: [
        "Tienda lista para vender desde el día 1",
        "Hasta 50 productos configurados y organizados",
        "Carrito y pago en línea integrados",
        "Botón de WhatsApp para dudas y cierre de venta",
        "Cada producto optimizado para Google (SEO por producto)",
        "Panel fácil para controlar tu inventario",
        "Plataforma a tu elección (tú pagas su mensualidad)",
        "1 ronda de cambios + 15 días de soporte",
      ],
    },
    {
      badge: "Más recomendado",
      name: "Crecimiento",
      tagline: "Catálogo y promociones que venden",
      price: "$17,900",
      features: [
        "Todo lo del plan Esencial",
        "Hasta 150 productos con categorías y filtros",
        "Cupones y descuentos automáticos",
        "Envíos conectados a tu proveedor de paquetería",
        "Píxel de Meta/Google listo para tus campañas",
        "SEO por categorías + 3 artículos de blog",
        "2 rondas de cambios + 45 días de soporte por WhatsApp",
      ],
    },
    {
      badge: "Máximo potencial",
      name: "Pro",
      tagline: "Tu tienda sin límites, con acompañamiento",
      price: "$29,900",
      features: [
        "Todo lo del plan Crecimiento",
        "Catálogo ilimitado (hasta 100 variantes por producto)",
        "Notificaciones de pedido por WhatsApp",
        "Se conecta con tu CRM y herramientas de analítica",
        "Velocidad optimizada para no perder ventas",
        "Dominio .com incluido (primer año)",
        "3 rondas de cambios + soporte prioritario por WhatsApp",
      ],
    },
  ],
};

const ctaLabels = ["Cotizar por WhatsApp", "Quiero este plan", "Hablar con especialista"];

export default function Planes() {
  const [tab, setTab] = useState<Tab>("Página Web");
  const plans = plansByTab[tab];

  return (
    <section
      id="precios"
      className="relative overflow-hidden py-20 lg:py-28 bg-[linear-gradient(180deg,#0e2356_0%,#0a1a3f_100%)]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold">
            <RiFireLine size={14} className="text-orange-400" />
            Planes web
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Precios claros para crecer con{" "}
            <span className="font-display italic font-medium text-blue-200">
              tecnología
            </span>
          </h2>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 sm:px-8 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  tab === t ? "text-slate-900" : "text-blue-100/60 hover:text-white"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ duration: 0.3, ease: EASE }}
                  />
                )}
                <span className="relative z-10">{t}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Plans */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {plans.map((p, i) => {
              const dark = i === 2; // Pro card is dark navy
              const recommended = i === 1;
              return (
                <motion.div
                  key={tab + p.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
                  className={`relative rounded-3xl p-7 lg:p-8 flex flex-col ${
                    dark
                      ? "bg-[#0a1733] border border-white/10"
                      : recommended
                      ? "bg-white border-2 border-blue-500 lg:-mt-4 shadow-2xl shadow-blue-600/20"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  {recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-wide shadow-sm">
                      RECOMENDADO
                    </span>
                  )}

                  <p className={`text-xs font-bold tracking-wider uppercase ${dark ? "text-blue-300" : "text-blue-600"}`}>
                    {p.badge}
                  </p>
                  <h3 className={`mt-3 text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>
                    {p.name}
                  </h3>
                  <p className={`mt-1.5 text-sm font-medium ${dark ? "text-blue-300/90" : "text-blue-600"}`}>
                    {p.tagline}
                  </p>

                  <div className="mt-6 flex items-end gap-2">
                    <span className={`text-4xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>
                      {p.price}
                    </span>
                    <span className={`mb-1.5 px-2 py-0.5 rounded text-[10px] font-semibold ${dark ? "bg-white/10 text-blue-200" : "bg-slate-100 text-slate-500"}`}>
                      {priceMeta[tab].badge}
                    </span>
                  </div>
                  <p className={`mt-2 text-xs leading-relaxed ${dark ? "text-blue-200/60" : "text-slate-400"}`}>
                    {priceMeta[tab].note}
                  </p>

                  {/* Primary CTA */}
                  <a
                    href={WA.plan(`${p.name} (${tab})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95 ${
                      dark
                        ? "bg-white text-slate-900 hover:bg-blue-50"
                        : recommended
                        ? "bg-[#0a1a3f] text-white hover:bg-[#13234a]"
                        : "bg-blue-600 text-white hover:bg-blue-500"
                    }`}
                  >
                    <RiWhatsappLine size={16} />
                    {ctaLabels[i]}
                  </a>

                  {/* Ver detalles */}
                  <a
                    href={detailsHref[tab]}
                    className={`mt-3 flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold border transition-colors ${
                      dark
                        ? "bg-[#13234a] border-white/10 text-white hover:bg-[#1a2d5a] hover:border-white/20"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    Ver detalles
                  </a>

                  <div className={`mt-7 pt-6 border-t ${dark ? "border-white/10" : "border-slate-100"}`}>
                    <p className={`text-xs font-semibold mb-4 ${dark ? "text-blue-200/70" : "text-slate-400"}`}>
                      Incluye:
                    </p>
                    <ul className="space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                            <RiCheckLine size={12} className="text-white" />
                          </span>
                          <span className={`text-sm leading-relaxed ${dark ? "text-blue-50/90" : "text-slate-600"}`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <Reveal delay={0.15} className="mt-12 text-center">
          <p className="text-blue-100/60 text-sm">
            ¿Necesitas algo más específico? También podemos armar una cotización
            personalizada.
          </p>
          <a
            href={WA.cotizar}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-blue-300 transition-colors"
          >
            <RiWhatsappLine size={16} className="text-green-400" />
            Cotizar a medida →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
