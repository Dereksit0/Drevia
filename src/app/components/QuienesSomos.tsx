import Reveal from "./Reveal";
import {
  RiCompass3Line,
  RiEyeLine,
  RiShieldCheckLine,
  RiSpeedUpLine,
  RiHeart3Line,
  RiBriefcase4Line,
} from "react-icons/ri";

const stats = [
  { value: "+3", label: "Años de experiencia" },
  { value: "6+", label: "Industrias atendidas" },
  { value: "<2h", label: "Tiempo de respuesta" },
  { value: "100%", label: "Trato directo, sin intermediarios" },
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

export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="relative overflow-hidden bg-[#061029] text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />

      {/* ── Intro + stats ── */}
      <div className="relative pt-20 lg:pt-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(110%_80%_at_50%_0%,#1d4ed8_0%,#0a1a3f_55%,transparent_100%)] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-semibold tracking-[0.25em] uppercase">
              Quiénes somos
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08]">
              Somos el equipo que convierte tu negocio{" "}
              <span className="font-display italic font-medium text-blue-300">
                en resultados digitales
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-blue-100/70 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              DREVIA nació en Puebla con una idea simple: que cualquier empresa
              pueda tener una presencia web de nivel mundial sin perderse en
              tecnicismos, sobrecostos ni promesas vacías.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 border-y border-white/10 py-12">
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
      </div>

      {/* ── Historia + misión/visión ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-semibold tracking-wide">
              Nuestra historia
            </span>
            <h3 className="mt-5 text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight tracking-tight">
              Empezamos hartos de webs que{" "}
              <span className="font-display italic font-medium text-blue-300">
                se ven bien pero no venden
              </span>
            </h3>
            <div className="mt-6 space-y-5 text-blue-100/70 text-base lg:text-lg leading-relaxed">
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

          <div className="grid gap-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-blue-400/30 hover:bg-white/[0.06] transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/25">
                  <RiCompass3Line size={24} className="text-white" />
                </div>
                <h4 className="mt-5 text-xl font-bold">Nuestra misión</h4>
                <p className="mt-2.5 text-blue-100/65 leading-relaxed">
                  Darle a cada empresa una presencia digital que trabaje para ella:
                  que atraiga, convenza y venda, sin que tengas que ser experto en
                  tecnología para lograrlo.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-blue-400/30 hover:bg-white/[0.06] transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <RiEyeLine size={24} className="text-blue-300" />
                </div>
                <h4 className="mt-5 text-xl font-bold">Nuestra visión</h4>
                <p className="mt-2.5 text-blue-100/65 leading-relaxed">
                  Convertirnos en el aliado digital de referencia para las empresas
                  en crecimiento de México, demostrando que cercanía, calidad y
                  resultados pueden ir de la mano.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Valores ── */}
      <div className="relative border-t border-white/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-semibold tracking-wide">
            En qué creemos
          </span>
          <h3 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Los valores que{" "}
            <span className="font-display italic font-medium text-blue-300">
              no negociamos
            </span>
          </h3>
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
                <h4 className="mt-5 text-lg font-bold">{v.title}</h4>
                <p className="mt-2.5 text-blue-100/55 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
