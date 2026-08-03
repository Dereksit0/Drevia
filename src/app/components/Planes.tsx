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
  /** Cuota de inicio. Si no existe, el plan se cotiza según alcance (SEO, Software). */
  price?: string;
  /** Mensualidad recurrente que acompaña a la cuota de inicio. */
  monthly?: string;
  /** Letra pequeña bajo el precio. */
  note: string;
  features: string[];
};

const tabs = [
  "Landing Page",
  "Página Web",
  "E-commerce",
  "SEO",
  "Software a Medida",
] as const;
type Tab = (typeof tabs)[number];

const detailsHref: Record<Tab, string> = {
  "Landing Page": "/servicios/landing-pages",
  "Página Web": "/servicios/paginas-web",
  "E-commerce": "/servicios/ecommerce",
  SEO: "/servicios/seo",
  "Software a Medida": "/servicios/desarrollos-a-medida",
};

const plansByTab: Record<Tab, Plan[]> = {
  "Landing Page": [
    {
      badge: "Para empezar",
      name: "Esencial",
      tagline: "Tu landing profesional para empezar a vender",
      price: "$1,800",
      monthly: "$890",
      note: "Hosting, dominio y mantenimiento incluidos · cobro mensual automático · mínimo 6 meses",
      features: [
        "Diseño de landing page de 1 sola página",
        "Hosting administrado + dominio conectado",
        "Certificado SSL (candado de seguridad)",
        "1 actualización de contenido al mes",
        "Monitoreo de que la página esté siempre activa",
        "Soporte por WhatsApp (respuesta en 72 horas)",
      ],
    },
    {
      badge: "Más recomendado",
      name: "Crecimiento",
      tagline: "Tu landing como motor activo de clientes",
      price: "$2,500",
      monthly: "$1,290",
      note: "★ El plan más elegido por PYMES · Hosting, dominio y mantenimiento incluidos · cobro mensual · mínimo 6 meses",
      features: [
        "Todo lo del plan Esencial",
        "2 actualizaciones de contenido al mes",
        "Reporte mensual de visitas",
        "Optimización básica de velocidad de carga",
        "Formulario de contacto/agendamiento integrado",
        "Soporte prioritario (respuesta en 48 horas)",
      ],
    },
    {
      badge: "Máximo potencial",
      name: "Pro",
      tagline: "Tu landing como principal canal de ventas",
      price: "$3,200",
      monthly: "$1,790",
      note: "Hosting, dominio y mantenimiento incluidos · cobro mensual · mínimo 6 meses",
      features: [
        "Todo lo del plan Crecimiento",
        "4 actualizaciones de contenido al mes",
        "SEO básico (para aparecer en búsquedas de Google)",
        "Reporte mensual con recomendaciones de mejora",
        "Integración con WhatsApp Business / redes sociales",
        "Soporte VIP (respuesta en 24 horas)",
      ],
    },
  ],
  "Página Web": [
    {
      badge: "Para empezar",
      name: "Esencial",
      tagline: "Tu presencia profesional online",
      price: "$3,200",
      monthly: "$1,490",
      note: "Hosting, dominio y mantenimiento incluidos · cobro mensual automático · mínimo 6 meses",
      features: [
        "Sitio de hasta 5 páginas (Inicio, Servicios, Nosotros, Contacto)",
        "Diseño impecable en celular y computadora",
        "Contacto directo a tu WhatsApp en todo el sitio",
        "SEO inicial para que Google te encuentre",
        "Hosting, dominio y mantenimiento incluidos",
        "2 actualizaciones de contenido al mes",
        "Revisión de seguridad mensual",
        "Reporte mensual de visitas",
        "Soporte por WhatsApp (48 horas)",
      ],
    },
    {
      badge: "Más recomendado",
      name: "Crecimiento",
      tagline: "Atrae clientes desde Google",
      price: "$4,500",
      monthly: "$2,190",
      note: "★ El plan más elegido por PYMES · Hosting, dominio y mantenimiento incluidos · cobro mensual · mínimo 12 meses",
      features: [
        "Todo lo del plan Esencial",
        "Hasta 8 páginas, con blog para atraer tráfico orgánico",
        "4 actualizaciones de contenido al mes",
        "SEO básico continuo (palabras clave + meta descripciones)",
        "Píxel de Meta/Google listo para tus campañas",
        "Google Analytics y datos estructurados configurados",
        "Panel sencillo para que edites tu propio contenido",
        "Reporte mensual con métricas de posicionamiento",
        "Soporte prioritario (24–48 horas)",
      ],
    },
    {
      badge: "Máximo potencial",
      name: "Pro",
      tagline: "Conviértete en el referente de tu nicho",
      price: "$6,000",
      monthly: "$2,990",
      note: "Hosting, dominio y mantenimiento incluidos · cobro mensual · mínimo 12 meses",
      features: [
        "Todo lo del plan Crecimiento",
        "Diseño de páginas ilimitadas dentro del sitio",
        "6 actualizaciones de contenido al mes",
        "SEO avanzado + optimización continua",
        "Se conecta con tu CRM o sistema de ventas",
        "Integración con Google Business Profile",
        "Optimización certificada Core Web Vitals",
        "Reunión mensual de seguimiento (30 min)",
        "Soporte VIP (24 horas)",
      ],
    },
  ],
  "E-commerce": [
    {
      badge: "Para empezar",
      name: "Esencial",
      tagline: "Empieza a vender en línea sin fricciones",
      price: "$5,500",
      monthly: "$2,690",
      note: "Hosting, dominio y mantenimiento incluidos · cobro mensual automático · mínimo 12 meses",
      features: [
        "Tienda en línea con hasta 30 productos",
        "Integración de 1 método de pago (Stripe/Mercado Pago)",
        "Hosting administrado de alta disponibilidad",
        "Backups automáticos diarios",
        "Monitoreo de la pasarela de pagos",
        "Soporte de catálogo (altas/bajas/precios) — hasta 2 hrs/mes",
        "Reporte mensual de ventas",
        "Soporte prioritario (24 horas)",
      ],
    },
    {
      badge: "Más recomendado",
      name: "Crecimiento",
      tagline: "Escala tus ventas sin fricciones técnicas",
      price: "$7,500",
      monthly: "$3,690",
      note: "★ El plan más elegido por PYMES · Hosting, dominio y mantenimiento incluidos · cobro mensual · mínimo 12 meses",
      features: [
        "Todo lo del plan Esencial",
        "Productos ilimitados",
        "2 métodos de pago integrados",
        "SEO de productos y categorías",
        "Análisis de carritos abandonados",
        "Soporte de catálogo — hasta 4 hrs/mes",
        "Reporte mensual de ventas + conversión",
        "Soporte VIP (mismo día en horario laboral)",
      ],
    },
    {
      badge: "Máximo potencial",
      name: "Pro",
      tagline: "Tu tienda como principal canal de ingresos",
      price: "$10,000",
      monthly: "$4,990",
      note: "Hosting, dominio y mantenimiento incluidos · cobro mensual · mínimo 12 meses",
      features: [
        "Todo lo del plan Crecimiento",
        "Optimización continua de conversión (CRO)",
        "Automatización de emails (carrito abandonado, post-compra)",
        "Integración con inventario/facturación si aplica",
        "Soporte de catálogo — hasta 8 hrs/mes",
        "Reunión mensual de seguimiento (30 min)",
        "Prioridad máxima de soporte (mismo día, incluso findes en emergencias)",
      ],
    },
  ],
  SEO: [
    {
      badge: "Para empezar",
      name: "Básico",
      tagline: "Tu primer mes en búsqueda orgánica",
      note: "Servicio mensual · sin permanencia · se cotiza según tu sector y competencia",
      features: [
        "4 blogs de 1,000 palabras/mes",
        "Auditoría on-page inicial",
        "Reporte básico de posiciones",
        "5–10 keywords objetivo",
        "Optimización de títulos y meta descripciones",
        "Seguimiento mensual de rankings",
      ],
    },
    {
      badge: "Más recomendado",
      name: "Profesional",
      tagline: "Tráfico orgánico real + posiciones en página 1",
      note: "★ El plan más elegido · Servicio mensual · sin permanencia · se cotiza según alcance",
      features: [
        "Todo lo del plan Básico",
        "8 blogs de 1,200 palabras/mes",
        "Backlinks de autoridad",
        "Auditoría trimestral + optimizaciones",
        "Estrategia de contenido trimestral",
        "15–25 keywords objetivo",
        "Reporte mensual detallado con tráfico y posiciones",
        "Google Analytics 4 + Search Console configurados",
      ],
    },
    {
      badge: "Máximo potencial",
      name: "Premium",
      tagline: "Dominio completo de tu nicho",
      note: "Servicio mensual · sin permanencia · se cotiza según alcance",
      features: [
        "Todo lo del plan Profesional",
        "12 blogs/mes + content hub",
        "Estrategia link building avanzada",
        "Auditoría técnica mensual",
        "Llamada mensual de estrategia",
        "Análisis de competencia + proyecciones",
        "Local SEO + featured snippets",
        "Keywords ilimitadas",
      ],
    },
  ],
  "Software a Medida": [
    {
      badge: "Para empezar",
      name: "Automatización",
      tagline: "Digitaliza el proceso que más te frena",
      note: "Proyecto cotizado según alcance · diagnóstico inicial sin costo",
      features: [
        "Sesión de discovery para entender tu operación",
        "Automatización de un proceso o flujo de trabajo",
        "Integración con las herramientas que ya usas",
        "Panel web para operarlo desde cualquier lugar",
        "Documentación técnica y de usuario",
        "Soporte post-entrega los primeros meses",
      ],
    },
    {
      badge: "Más recomendado",
      name: "Sistema a Medida",
      tagline: "Tu operación completa en un solo sistema",
      note: "★ El más solicitado por empresas · Proyecto cotizado según alcance · diagnóstico sin costo",
      features: [
        "Todo lo del plan Automatización",
        "Arquitectura escalable pensada para crecer contigo",
        "Roles y permisos por tipo de usuario",
        "Integraciones con ERP, CRM o pasarelas de pago",
        "Reportería y panel de analítica en tiempo real",
        "Entregas incrementales para ver avances cada semana",
        "Capacitación para tu equipo",
      ],
    },
    {
      badge: "Máximo potencial",
      name: "Plataforma",
      tagline: "Software propio como ventaja competitiva",
      note: "Proyecto cotizado según alcance · diagnóstico inicial sin costo",
      features: [
        "Todo lo del plan Sistema a Medida",
        "Arquitectura multiusuario y multisucursal",
        "API propia para conectar con terceros",
        "Integraciones complejas con sistemas legados",
        "Ambiente de pruebas y despliegue continuo",
        "Mantenimiento evolutivo mensual",
        "Acompañamiento técnico dedicado",
      ],
    },
  ],
};

const ctaLabels = ["Cotizar por WhatsApp", "Quiero este plan", "Hablar con especialista"];
// En los planes sin precio público el CTA no puede prometer contratación directa.
const quoteCtaLabels = ["Solicitar cotización", "Quiero cotizar este plan", "Hablar con especialista"];

export default function Planes() {
  const [tab, setTab] = useState<Tab>("Página Web");
  const plans = plansByTab[tab];

  // #52 — Navegación por teclado del tablist (flechas)
  const onTabKey = (e: React.KeyboardEvent) => {
    const i = tabs.indexOf(tab);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setTab(tabs[(i + 1) % tabs.length]);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setTab(tabs[(i - 1 + tabs.length) % tabs.length]);
    }
  };

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
          <div
            role="tablist"
            aria-label="Tipo de servicio"
            onKeyDown={onTabKey}
            className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10"
          >
            {tabs.map((t) => {
              const selected = tab === t;
              return (
                <button
                  key={t}
                  id={`tab-${t}`}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="planes-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setTab(t)}
                  className={`relative px-5 sm:px-8 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    selected ? "text-slate-900" : "text-blue-100/80 hover:text-white"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ duration: 0.3, ease: EASE }}
                    />
                  )}
                  <span className="relative z-10">{t}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Plans */}
        <div
          id="planes-panel"
          role="tabpanel"
          aria-labelledby={`tab-${tab}`}
          className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start pt-3"
        >
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

                  {p.price ? (
                    <>
                      <div className="mt-6 flex items-end gap-2">
                        <span className={`text-4xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>
                          {p.price}
                        </span>
                        <span className={`mb-1.5 text-sm font-semibold ${dark ? "text-blue-200/80" : "text-slate-500"}`}>
                          MXN
                        </span>
                        <span className={`mb-1.5 px-2 py-0.5 rounded text-[11px] font-semibold ${dark ? "bg-white/10 text-blue-200" : "bg-slate-100 text-slate-500"}`}>
                          CUOTA DE INICIO
                        </span>
                      </div>
                      <p className={`mt-2 text-xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>
                        + {p.monthly}{" "}
                        <span className={`text-sm font-semibold ${dark ? "text-blue-200/80" : "text-slate-500"}`}>
                          MXN/mes
                        </span>
                      </p>
                    </>
                  ) : (
                    <div className="mt-6 flex items-end gap-2">
                      <span className={`text-4xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>
                        A cotizar
                      </span>
                      <span className={`mb-1.5 px-2 py-0.5 rounded text-[11px] font-semibold ${dark ? "bg-white/10 text-blue-200" : "bg-slate-100 text-slate-500"}`}>
                        SEGÚN ALCANCE
                      </span>
                    </div>
                  )}
                  <p className={`mt-2 text-xs leading-relaxed ${dark ? "text-blue-200/60" : "text-slate-400"}`}>
                    {p.note}
                  </p>

                  {/* Primary CTA */}
                  <a
                    href={
                      p.price
                        ? WA.plan(`${p.name} (${tab})`, true)
                        : WA.cotizarPlan(`${p.name} (${tab})`)
                    }
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
                    {(p.price ? ctaLabels : quoteCtaLabels)[i]}
                  </a>

                  {/* Ver detalles */}
                  <a
                    href={detailsHref[tab]}
                    {...(detailsHref[tab].startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
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
