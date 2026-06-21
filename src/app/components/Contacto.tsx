"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import {
  RiWhatsappLine,
  RiMailLine,
  RiArrowRightLine,
  RiCheckLine,
  RiShieldCheckLine,
  RiTimeLine,
} from "react-icons/ri";
import { EMAIL, PHONE } from "../lib/site";

const WA_NUMBER = "522225497631";

const projectTypes = [
  "Landing Page",
  "Página Web",
  "E-commerce",
  "SEO",
  "Sistema a medida",
  "Otro / No estoy seguro",
];

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    type: projectTypes[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as keyof Errors]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Dinos tu nombre.";
    if (!form.phone.trim()) {
      next.phone = "Necesitamos un teléfono o WhatsApp para responderte.";
    } else if (!/^[\d\s()+-]{7,}$/.test(form.phone.trim())) {
      next.phone = "Ese teléfono no parece válido.";
    }
    if (!form.message.trim()) next.message = "Cuéntanos brevemente tu proyecto.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      "Hola DREVIA, quiero solicitar una cotización.",
      "",
      `Nombre: ${form.name.trim()}`,
      form.company.trim() ? `Empresa: ${form.company.trim()}` : null,
      `Teléfono: ${form.phone.trim()}`,
      `Tipo de proyecto: ${form.type}`,
      "",
      `Mensaje: ${form.message.trim()}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputBase =
    "w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-blue-100/35 outline-none transition-colors focus:bg-white/10 focus:border-blue-400/60";
  const labelClass = "block text-blue-100/80 text-xs font-semibold tracking-wide mb-2";

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#0a1a3f] py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-semibold tracking-[0.2em] uppercase">
              Contacto
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Cuéntanos sobre{" "}
              <span className="font-display italic font-medium text-blue-300">
                tu proyecto
              </span>
            </h2>
            <p className="mt-5 text-blue-100/70 text-base leading-relaxed max-w-md">
              Completa el formulario y te respondemos con una propuesta a tu
              medida. Primera consulta sin costo y sin compromiso.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                { icon: RiTimeLine, text: "Respondemos en menos de 2 horas hábiles" },
                { icon: RiShieldCheckLine, text: "Sin compromiso ni costos ocultos" },
                { icon: RiCheckLine, text: "Propuesta clara con precio y tiempos" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-blue-100/75 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-blue-300" aria-hidden="true" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-3 text-blue-100/70 hover:text-white text-sm transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <RiMailLine size={15} className="text-blue-300" aria-hidden="true" />
                </span>
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 text-blue-100/70 hover:text-white text-sm transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <RiWhatsappLine size={15} className="text-blue-300" aria-hidden="true" />
                </span>
                {PHONE}
              </a>
            </div>
          </Reveal>

          {/* Right — form / success */}
          <Reveal delay={0.1}>
            {sent ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-green-500/15 border border-green-400/30 flex items-center justify-center">
                  <RiCheckLine size={28} className="text-green-300" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">¡Listo!</h3>
                <p className="mt-2 text-blue-100/70 text-sm leading-relaxed">
                  Abrimos WhatsApp con tu mensaje. Si no se abrió, escríbenos
                  directamente y te respondemos enseguida.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-semibold transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className={labelClass}>
                      Nombre <span className="text-blue-300">*</span>
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "c-name-error" : undefined}
                      placeholder="Tu nombre"
                      className={`${inputBase} border ${errors.name ? "border-red-400/70" : "border-white/12"}`}
                    />
                    {errors.name && (
                      <p id="c-name-error" className="mt-1.5 text-xs text-red-300">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="c-company" className={labelClass}>
                      Empresa
                    </label>
                    <input
                      id="c-company"
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Opcional"
                      className={`${inputBase} border border-white/12`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-phone" className={labelClass}>
                    Teléfono / WhatsApp <span className="text-blue-300">*</span>
                  </label>
                  <input
                    id="c-phone"
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "c-phone-error" : undefined}
                    placeholder="Ej. 222 123 4567"
                    className={`${inputBase} border ${errors.phone ? "border-red-400/70" : "border-white/12"}`}
                  />
                  {errors.phone && (
                    <p id="c-phone-error" className="mt-1.5 text-xs text-red-300">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="c-type" className={labelClass}>
                    Tipo de proyecto
                  </label>
                  <select
                    id="c-type"
                    value={form.type}
                    onChange={(e) => update("type", e.target.value)}
                    className={`${inputBase} border border-white/12 cursor-pointer [&>option]:text-slate-900`}
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="c-message" className={labelClass}>
                    Mensaje <span className="text-blue-300">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "c-message-error" : undefined}
                    placeholder="Cuéntanos qué necesitas y tus objetivos."
                    className={`${inputBase} border resize-none ${errors.message ? "border-red-400/70" : "border-white/12"}`}
                  />
                  {errors.message && (
                    <p id="c-message-error" className="mt-1.5 text-xs text-red-300">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/30"
                >
                  <RiWhatsappLine size={16} aria-hidden="true" />
                  Enviar solicitud
                  <RiArrowRightLine
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(se abre WhatsApp con tu mensaje)</span>
                </button>
                <p className="text-center text-blue-100/45 text-xs">
                  Se abrirá WhatsApp con tu mensaje listo para enviar.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
