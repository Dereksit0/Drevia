import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import Reveal from "../components/Reveal";
import { WA, EMAIL, PHONE, LOCATION } from "../lib/site";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiWhatsappLine,
  RiCompass3Line,
  RiEyeLine,
  RiShieldCheckLine,
  RiSpeedUpLine,
  RiHeart3Line,
  RiBriefcase4Line,
  RiHandHeartLine,
  RiCheckLine,
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";

export const metadata = {
  title: "Quiénes somos — DREVIA Solutions",
  description:
    "Conoce al equipo detrás de DREVIA: una agencia de desarrollo web en Puebla obsesionada con convertir negocios en resultados digitales reales. Cercanía, transparencia y trabajo bien hecho.",
  alternates: { canonical: "/quienes-somos" },
  openGraph: {
    title: "Quiénes somos — DREVIA Solutions",
    description:
      "El equipo, la historia y los valores detrás de los proyectos web de DREVIA.",
    url: "/quienes-somos",
    type: "website",
  },
};

const stats = [
  { value: "+50", label: "Proyectos entregados" },
  { value: "95%", label: "Clientes satisfechos" },
  { value: "+3", label: "Años de experiencia" },
  { value: "4.9/5", label: "Calificación promedio" },
];

const valores = [
  {
    icon: RiShieldCheckLine,
    title: "Transparencia total",
    desc: "Precios claros, tiempos reales y comunicación directa. Sin letras pequeñas ni sorpresas a mitad del proyecto.",
  },
  {
    icon: RiSpeedUpLine,
    title: "Obsesión por resultados",
    desc: "No entregamos sitios bonitos: entregamos webs que convierten visitas en clientes y clientes en ventas.",
  },
  {
    icon: RiHeart3Line,
    title: "Cercanía real",
    desc: "Hablas directo con quien construye tu proyecto. Nada de intermediarios ni respuestas automáticas.",
  },
  {
    icon: RiBriefcase4Line,
    title: "Compromiso a largo plazo",
    desc: "No desaparecemos al lanzar. Acompañamos, damos soporte y crecemos contigo después de la entrega.",
  },
];

const diferenciadores = [
  "Tratamos tu negocio como si fuera nuestro.",
  "Diseño premium y código que carga rápido en cualquier dispositivo.",
  "Estrategia enfocada en conversión, no solo en estética.",
  "Soporte humano y cercano antes, durante y después del proyecto.",
  "Cumplimos lo que prometemos, en el tiempo acordado.",
];

export default function QuienesSomosPage() {
  return (
    <>
      <Header />
      <main className="bg-[#061029] text-white">
        {/* ───────────────────────── HERO ───────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(110%_80%_at_50%_0%,#1d4ed8_0%,#0a1a3f_55%,transparent_100%)] opacity-60" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-semibold tracking-[0.25em] uppercase">
                Quiénes somos
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Somos el equipo que convierte tu negocio{" "}
                <span className="font-display italic font-medium text-blue-300">
                  en resultados digitales
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 text-blue-100/70 text-lg leading-relaxed max-w-2xl mx-auto">
                DREVIA nació en Puebla con una idea simple: que cualquier empresa
                pueda tener una presencia web de nivel mundial sin perderse en
                tecnicismos, sobrecostos ni promesas vacías.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={WA.cotizar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 hover:scale-[1.03] active:scale-95 transition-all shadow-lg shadow-blue-600/30"
                >
                  <RiWhatsappLine size={18} />
                  Hablemos de tu proyecto
                </a>
                <a
                  href="/casos"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/5 border border-white/15 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  Ver casos de éxito
                  <RiArrowRightUpLine size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────────────── TRUST / STATS BAND ───────────────────── */}
        <section className="relative border-y border-white/10 bg-[#0a1a3f] py-12 lg:py-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18),transparent_70%)]" />
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
                  <p className="text-4xl lg:text-5xl font-bold tracking-tight">
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

        {/* ───────────────────────── HISTORIA ───────────────────────── */}
        <section className="relative bg-white text-slate-900 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal>
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide">
                  Nuestra historia
                </span>
                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight">
                  Empezamos hartos de webs que{" "}
                  <span className="font-display italic font-medium text-blue-600">
                    se ven bien pero no venden
                  </span>
                </h2>
                <div className="mt-6 space-y-5 text-slate-600 text-base lg:text-lg leading-relaxed">
                  <p>
                    Vimos demasiados negocios pagando por páginas lentas, plantillas
                    genéricas y agencias que desaparecían tras cobrar. Sitios que
                    quedaban bonitos en la presentación y olvidados en internet.
                  </p>
                  <p>
                    Por eso creamos DREVIA: una agencia donde el diseño premium se une
                    a una estrategia real de conversión y a un trato humano de verdad.
                    Cada proyecto lo tratamos como si el negocio fuera nuestro —porque
                    tu crecimiento es lo que mide nuestro trabajo.
                  </p>
                  <p>
                    Hoy somos un equipo joven y técnico que ya ha entregado más de 50
                    proyectos para clínicas, tiendas, marcas y empresas que querían dar
                    el salto digital sin complicarse.
                  </p>
                </div>
              </Reveal>

              {/* Misión / Visión cards */}
              <div className="grid gap-5">
                <Reveal delay={0.1}>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/25">
                      <RiCompass3Line size={24} className="text-white" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">Nuestra misión</h3>
                    <p className="mt-2.5 text-slate-600 leading-relaxed">
                      Darle a cada empresa una presencia digital que trabaje para ella:
                      que atraiga, convenza y venda, sin que tengas que ser experto en
                      tecnología para lograrlo.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.18}>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center">
                      <RiEyeLine size={24} className="text-white" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">Nuestra visión</h3>
                    <p className="mt-2.5 text-slate-600 leading-relaxed">
                      Convertirnos en el aliado digital de referencia para las empresas
                      en crecimiento de México, demostrando que cercanía, calidad y
                      resultados pueden ir de la mano.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── VALORES ───────────────────────── */}
        <section className="relative bg-[#061029] py-20 lg:py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-semibold tracking-wide">
                En qué creemos
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Los valores que{" "}
                <span className="font-display italic font-medium text-blue-300">
                  no negociamos
                </span>
              </h2>
              <p className="mt-5 text-blue-100/65 text-base lg:text-lg leading-relaxed">
                Más que una lista bonita en una pared: es la forma en la que
                trabajamos en cada proyecto.
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {valores.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-blue-400/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
                      <v.icon size={24} className="text-blue-300" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                    <p className="mt-2.5 text-blue-100/55 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── POR QUÉ CONFIAR ─────────────────── */}
        <section className="relative bg-white text-slate-900 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal>
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide">
                  Por qué confiar en nosotros
                </span>
                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight">
                  Trabajamos para que esta sea{" "}
                  <span className="font-display italic font-medium text-blue-600">
                    la última agencia que necesites
                  </span>
                </h2>
                <p className="mt-6 text-slate-600 text-base lg:text-lg leading-relaxed">
                  Sabemos que confiar tu negocio a un equipo externo no es fácil. Por
                  eso construimos cada relación sobre hechos, no sobre promesas.
                </p>

                <ul className="mt-8 space-y-4">
                  {diferenciadores.map((d, i) => (
                    <Reveal key={d} delay={i * 0.06}>
                      <li className="flex items-start gap-3">
                        <span className="mt-0.5 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-sm shadow-blue-600/30">
                          <RiCheckLine size={15} className="text-white" />
                        </span>
                        <span className="text-slate-700 leading-relaxed">{d}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>

                <Reveal delay={0.3}>
                  <a
                    href={WA.cotizar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-600/25"
                  >
                    Quiero trabajar con DREVIA
                    <RiArrowRightLine size={18} />
                  </a>
                </Reveal>
              </Reveal>

              {/* Promise card */}
              <Reveal delay={0.12}>
                <div className="relative rounded-3xl bg-[#0a1a3f] text-white p-8 lg:p-10 overflow-hidden">
                  <div className="pointer-events-none absolute -top-20 -right-10 w-72 h-72 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.35),transparent_70%)]" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <RiHandHeartLine size={28} className="text-blue-300" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight">
                      Nuestro compromiso contigo
                    </h3>
                    <p className="mt-4 text-blue-100/70 leading-relaxed">
                      Si algo no te convence, lo ajustamos. Si tienes una duda, la
                      respondemos un humano de verdad. Y si tu negocio crece, seguimos a
                      tu lado para que tu web crezca contigo.
                    </p>
                    <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-white">100%</p>
                        <p className="mt-1 text-[11px] text-blue-100/55 leading-tight">
                          Trato directo
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">0</p>
                        <p className="mt-1 text-[11px] text-blue-100/55 leading-tight">
                          Costos ocultos
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">24-48h</p>
                        <p className="mt-1 text-[11px] text-blue-100/55 leading-tight">
                          Tiempo de respuesta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────────────────────── CTA FINAL ───────────────────────── */}
        <section className="relative bg-[#061029] py-20 lg:py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(90%_80%_at_50%_0%,rgba(37,99,235,0.25),transparent_70%)]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                ¿Conversamos sobre{" "}
                <span className="font-display italic font-medium text-blue-300">
                  tu próximo proyecto
                </span>
                ?
              </h2>
              <p className="mt-5 text-blue-100/70 text-lg leading-relaxed">
                Cuéntanos qué necesitas y te decimos, sin rodeos, cómo podemos
                ayudarte. La primera conversación siempre es gratis.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={WA.cotizar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 hover:scale-[1.03] active:scale-95 transition-all shadow-lg shadow-blue-600/30"
                >
                  <RiWhatsappLine size={18} />
                  Escríbenos por WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  <RiMailLine size={18} />
                  Enviar un correo
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-blue-100/55 text-sm">
                <span className="inline-flex items-center gap-2">
                  <RiMapPinLine size={16} className="text-blue-300" />
                  {LOCATION}
                </span>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <RiPhoneLine size={16} className="text-blue-300" />
                  {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <RiMailLine size={16} className="text-blue-300" />
                  {EMAIL}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
