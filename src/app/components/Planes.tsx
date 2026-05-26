"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCheckLine, RiArrowRightLine, RiSubtractLine } from "react-icons/ri";

const WA = "https://wa.me/522225497631?text=Hola%2C%20me%20interesa%20solicitar%20información%20sobre%20los%20planes%20de%20DREVIA.";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Category = "Landing Page" | "Página Web" | "E-commerce" | "Sistema Web";
const categories: Category[] = ["Landing Page", "Página Web", "E-commerce", "Sistema Web"];

interface Plan {
  name: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  badge: string | null;
  highlighted: boolean;
  cta: string;
  features: { text: string; included: boolean }[];
}

const plansByCategory: Record<Category, Plan[]> = {
  "Landing Page": [
    {
      name: "Starter", price: "$4,900", currency: "MXN", period: "/proyecto",
      description: "Landing page rápida para captar leads desde el día uno.", badge: null, highlighted: false, cta: "Empezar ahora",
      features: [
        { text: "1 página / landing",              included: true  },
        { text: "Diseño responsive",               included: true  },
        { text: "SSL & dominio",                   included: true  },
        { text: "SEO básico on-page",              included: true  },
        { text: "CTA a WhatsApp",                  included: true  },
        { text: "Formulario de contacto",          included: true  },
        { text: "Secciones ilimitadas",            included: false },
        { text: "Google Analytics",                included: false },
        { text: "Integración de herramientas",     included: false },
        { text: "A/B testing",                     included: false },
      ],
    },
    {
      name: "Professional", price: "$9,900", currency: "MXN", period: "/proyecto",
      description: "Landing page premium optimizada para convertir visitas en clientes.", badge: "Más popular", highlighted: true, cta: "Elegir Professional",
      features: [
        { text: "Secciones ilimitadas",            included: true  },
        { text: "Diseño responsive premium",       included: true  },
        { text: "SSL & dominio",                   included: true  },
        { text: "SEO avanzado + Analytics",        included: true  },
        { text: "CTA a WhatsApp optimizado",       included: true  },
        { text: "Formularios avanzados",           included: true  },
        { text: "Google Analytics integrado",      included: true  },
        { text: "3 revisiones de diseño",          included: true  },
        { text: "Integración de herramientas",     included: true  },
        { text: "A/B testing",                     included: false },
      ],
    },
    {
      name: "Enterprise", price: "A medida", currency: "", period: "",
      description: "Landing enterprise con tracking avanzado y múltiples variantes.", badge: null, highlighted: false, cta: "Agendar llamada",
      features: [
        { text: "Secciones ilimitadas",            included: true  },
        { text: "Diseño responsive premium",       included: true  },
        { text: "SSL & dominio",                   included: true  },
        { text: "SEO técnico completo",            included: true  },
        { text: "CTAs múltiples optimizados",      included: true  },
        { text: "Formularios avanzados",           included: true  },
        { text: "Google Tag Manager + Analytics",  included: true  },
        { text: "Revisiones ilimitadas",           included: true  },
        { text: "Integraciones avanzadas",         included: true  },
        { text: "A/B testing avanzado",            included: true  },
      ],
    },
  ],
  "Página Web": [
    {
      name: "Starter", price: "$9,900", currency: "MXN", period: "/proyecto",
      description: "Para empresas que dan su primer paso digital.", badge: null, highlighted: false, cta: "Empezar ahora",
      features: [
        { text: "Hasta 5 páginas",             included: true  },
        { text: "Diseño responsive",            included: true  },
        { text: "SSL & dominio",                included: true  },
        { text: "SEO básico on-page",           included: true  },
        { text: "1 revisión de diseño",         included: true  },
        { text: "Integración de formularios",   included: true  },
        { text: "Blog / CMS",                   included: false },
        { text: "Soporte prioritario",          included: false },
        { text: "Integraciones API",            included: false },
        { text: "Desarrollo a medida",          included: false },
      ],
    },
    {
      name: "Professional", price: "$24,900", currency: "MXN", period: "/proyecto",
      description: "La opción más elegida por empresas en crecimiento.", badge: "Más popular", highlighted: true, cta: "Elegir Professional",
      features: [
        { text: "Hasta 15 páginas",             included: true  },
        { text: "Diseño responsive premium",    included: true  },
        { text: "SSL & dominio",                included: true  },
        { text: "SEO avanzado + Analytics",     included: true  },
        { text: "3 revisiones de diseño",       included: true  },
        { text: "Integración de formularios",   included: true  },
        { text: "Blog / CMS incluido",          included: true  },
        { text: "Soporte prioritario",          included: true  },
        { text: "Integraciones API",            included: false },
        { text: "Desarrollo a medida",          included: false },
      ],
    },
    {
      name: "Enterprise", price: "A medida", currency: "", period: "",
      description: "Soluciones completas para grandes organizaciones.", badge: null, highlighted: false, cta: "Agendar llamada",
      features: [
        { text: "Páginas ilimitadas",           included: true  },
        { text: "Diseño responsive premium",    included: true  },
        { text: "SSL & dominio",                included: true  },
        { text: "SEO técnico completo",         included: true  },
        { text: "Revisiones ilimitadas",        included: true  },
        { text: "Integración de formularios",   included: true  },
        { text: "Blog / CMS avanzado",          included: true  },
        { text: "Soporte 24/7 dedicado",        included: true  },
        { text: "Integraciones API",            included: true  },
        { text: "Desarrollo a medida",          included: true  },
      ],
    },
  ],
  "E-commerce": [
    {
      name: "Starter", price: "$14,900", currency: "MXN", period: "/proyecto",
      description: "Lanza tu tienda online con todo lo esencial.", badge: null, highlighted: false, cta: "Empezar ahora",
      features: [
        { text: "Hasta 50 productos",           included: true  },
        { text: "1 pasarela de pago",           included: true  },
        { text: "Carrito de compras",           included: true  },
        { text: "Diseño responsive",            included: true  },
        { text: "SSL & dominio",                included: true  },
        { text: "Gestión de inventario básica", included: true  },
        { text: "Cupones y descuentos",         included: false },
        { text: "Dashboard de ventas",          included: false },
        { text: "Integración de envíos",        included: false },
        { text: "App móvil / API",              included: false },
      ],
    },
    {
      name: "Professional", price: "$34,900", currency: "MXN", period: "/proyecto",
      description: "La tienda online completa para escalar tus ventas.", badge: "Más popular", highlighted: true, cta: "Elegir Professional",
      features: [
        { text: "Productos ilimitados",         included: true  },
        { text: "Múltiples pasarelas de pago",  included: true  },
        { text: "Carrito + wishlist + cupones", included: true  },
        { text: "Diseño responsive premium",    included: true  },
        { text: "SSL & dominio",                included: true  },
        { text: "Inventario avanzado",          included: true  },
        { text: "Cupones y descuentos",         included: true  },
        { text: "Dashboard de ventas",          included: true  },
        { text: "Integración de envíos",        included: true  },
        { text: "App móvil / API",              included: false },
      ],
    },
    {
      name: "Enterprise", price: "A medida", currency: "", period: "",
      description: "E-commerce enterprise con integraciones avanzadas.", badge: null, highlighted: false, cta: "Agendar llamada",
      features: [
        { text: "Productos ilimitados",         included: true  },
        { text: "Múltiples pasarelas de pago",  included: true  },
        { text: "Carrito + wishlist + cupones", included: true  },
        { text: "Diseño responsive premium",    included: true  },
        { text: "SSL & dominio",                included: true  },
        { text: "Inventario enterprise",        included: true  },
        { text: "Cupones y descuentos",         included: true  },
        { text: "Dashboard avanzado + BI",      included: true  },
        { text: "Integración de envíos + ERP",  included: true  },
        { text: "App móvil / API propia",       included: true  },
      ],
    },
  ],
  "Sistema Web": [
    {
      name: "Starter", price: "$19,900", currency: "MXN", period: "/proyecto",
      description: "Tu primer sistema web a medida, funcional desde el día uno.", badge: null, highlighted: false, cta: "Empezar ahora",
      features: [
        { text: "1-3 módulos personalizados",     included: true  },
        { text: "Panel de administración",        included: true  },
        { text: "Roles y permisos básicos",       included: true  },
        { text: "Base de datos incluida",         included: true  },
        { text: "SSL & hosting",                  included: true  },
        { text: "Autenticación segura",           included: true  },
        { text: "Reportería y analytics",         included: false },
        { text: "API REST / Integraciones",       included: false },
        { text: "Soporte prioritario",            included: false },
        { text: "Hosting dedicado / VPS",         included: false },
      ],
    },
    {
      name: "Professional", price: "$49,900", currency: "MXN", period: "/proyecto",
      description: "Sistema robusto para automatizar y escalar operaciones.", badge: "Más popular", highlighted: true, cta: "Elegir Professional",
      features: [
        { text: "Hasta 8 módulos personalizados",   included: true  },
        { text: "Panel de administración avanzado", included: true  },
        { text: "Roles y permisos granulares",      included: true  },
        { text: "Base de datos + respaldos",        included: true  },
        { text: "SSL & hosting VPS",                included: true  },
        { text: "Autenticación segura (2FA)",       included: true  },
        { text: "Reportería y analytics",           included: true  },
        { text: "API REST / 2 integraciones",       included: true  },
        { text: "Soporte prioritario",              included: true  },
        { text: "Hosting dedicado",                 included: false },
      ],
    },
    {
      name: "Enterprise", price: "A medida", currency: "", period: "",
      description: "Plataforma enterprise escalable y de misión crítica.", badge: null, highlighted: false, cta: "Agendar llamada",
      features: [
        { text: "Módulos ilimitados",              included: true  },
        { text: "Panel enterprise + BI",           included: true  },
        { text: "Roles granulares + Audit log",    included: true  },
        { text: "BD + respaldos automáticos",      included: true  },
        { text: "Hosting dedicado + CDN",          included: true  },
        { text: "Autenticación SSO / 2FA",         included: true  },
        { text: "Reportería avanzada + BI",        included: true  },
        { text: "API REST + integraciones ∞",      included: true  },
        { text: "Soporte 24/7 con SLA",            included: true  },
        { text: "Infraestructura dedicada",        included: true  },
      ],
    },
  ],
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function Planes() {
  const [active, setActive] = useState<Category>("Página Web");
  const plans = plansByCategory[active];

  return (
    <section id="precios" className="bg-white dark:bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-10 lg:mb-12"
        >
          <span className="inline-block text-black/40 dark:text-white/40 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Inversión
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight">
            Planes y Precios
          </h2>
          <p className="mt-4 text-black/50 dark:text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Selecciona el tipo de proyecto y descubre el plan ideal para tu empresa.
          </p>
        </motion.div>

        {/* Category selector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/10 dark:shadow-white/10"
                    : "text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/6"
                }`}
              >
                {cat}
                {active === cat && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-black dark:bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plans grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start"
            >
              {plans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={cardVariants}
                  whileHover={!plan.highlighted ? { y: -6 } : {}}
                  className={`relative rounded-2xl p-7 lg:p-8 flex flex-col transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-black dark:bg-white border-2 border-black dark:border-white shadow-[0_0_60px_rgba(0,0,0,0.12)] dark:shadow-[0_0_60px_rgba(255,255,255,0.12)] lg:-mt-4 lg:-mb-4"
                      : "bg-black/3 dark:bg-white/3 border border-black/10 dark:border-white/10 hover:border-black/22 dark:hover:border-white/22 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-block px-4 py-1 rounded-full bg-white dark:bg-black text-black dark:text-white text-[10px] font-bold tracking-widest uppercase border border-black/20 dark:border-white/20">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <p className={`text-xs font-bold tracking-[0.25em] uppercase mb-3 ${plan.highlighted ? "text-white/50 dark:text-black/50" : "text-black/40 dark:text-white/40"}`}>
                    {plan.name}
                  </p>

                  <div className="flex items-end gap-1.5 mb-1">
                    <span className={`font-bold tracking-tight ${plan.price === "A medida" ? "text-3xl lg:text-4xl" : "text-4xl lg:text-5xl"} ${plan.highlighted ? "text-white dark:text-black" : "text-black dark:text-white"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm mb-2 ${plan.highlighted ? "text-white/50 dark:text-black/50" : "text-black/40 dark:text-white/40"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {plan.currency && (
                    <p className={`text-xs mb-4 ${plan.highlighted ? "text-white/40 dark:text-black/40" : "text-black/30 dark:text-white/30"}`}>
                      Pesos mexicanos (MXN) · IVA no incluido
                    </p>
                  )}

                  <p className={`text-sm leading-relaxed mb-6 ${plan.highlighted ? "text-white/60 dark:text-black/60" : "text-black/45 dark:text-white/45"}`}>
                    {plan.description}
                  </p>

                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 mb-7 hover:gap-3 ${
                      plan.highlighted
                        ? "bg-white dark:bg-black text-black dark:text-white hover:bg-white/85 dark:hover:bg-black/85"
                        : "bg-black/6 dark:bg-white/8 text-black dark:text-white hover:bg-black/12 dark:hover:bg-white/15 border border-black/10 dark:border-white/12 hover:border-black/22 dark:hover:border-white/25"
                    }`}
                  >
                    {plan.cta}
                    <RiArrowRightLine size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </a>

                  <div className={`h-px w-full mb-6 ${plan.highlighted ? "bg-white/10 dark:bg-black/10" : "bg-black/8 dark:bg-white/8"}`} />

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-center gap-3">
                        {feature.included ? (
                          <span className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.highlighted ? "bg-white/15 dark:bg-black/10" : "bg-black/8 dark:bg-white/10"}`}>
                            <RiCheckLine size={10} className={plan.highlighted ? "text-white dark:text-black" : "text-black dark:text-white"} />
                          </span>
                        ) : (
                          <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-black/4 dark:bg-white/4">
                            <RiSubtractLine size={10} className="text-black/20 dark:text-white/20" />
                          </span>
                        )}
                        <span className={`text-sm ${feature.included ? (plan.highlighted ? "text-white/75 dark:text-black/75" : "text-black/70 dark:text-white/70") : "text-black/25 dark:text-white/25 line-through"}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-black/30 dark:text-white/30 text-sm mt-10"
        >
          Precios referenciales en pesos mexicanos. Contáctanos para una cotización personalizada sin costo.
        </motion.p>
      </div>
    </section>
  );
}
