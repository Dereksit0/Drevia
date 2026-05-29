"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RiWhatsappLine, RiMailLine, RiArrowRightLine } from "react-icons/ri";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WA_NUMBER = "522225497631";
const EMAIL = "dreviasolutions@gmail.com";

const projectTypes = [
  "Landing Page",
  "Página Web",
  "E-commerce",
  "Sistema Web",
  "Otro / No estoy seguro",
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    type: projectTypes[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const update = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as keyof Errors]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Dinos tu nombre.";
    if (!form.email.trim()) {
      next.email = "Necesitamos un correo para responderte.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Ese correo no parece válido.";
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
      `Correo: ${form.email.trim()}`,
      `Tipo de proyecto: ${form.type}`,
      "",
      `Mensaje: ${form.message.trim()}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-xl border bg-white dark:bg-white/3 px-4 py-3 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-colors duration-200 focus:border-black/40 dark:focus:border-white/40";
  const labelClass =
    "block text-black/70 dark:text-white/70 text-xs font-semibold tracking-wide mb-2";

  return (
    <section
      id="contacto"
      className="bg-white dark:bg-black py-24 lg:py-32 border-t border-black/6 dark:border-white/6"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="inline-block text-black/55 dark:text-white/55 text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight leading-[1.1]">
              Cuéntanos sobre
              <br />
              <span className="text-black/45 dark:text-white/50">tu proyecto.</span>
            </h2>
            <p className="mt-5 text-black/55 dark:text-white/55 text-base leading-relaxed max-w-md">
              Completa el formulario y te respondemos por WhatsApp con una
              propuesta a tu medida. Primera consulta sin costo y sin compromiso.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
              >
                <span className="w-9 h-9 rounded-lg bg-black/5 dark:bg-white/6 border border-black/8 dark:border-white/8 flex items-center justify-center flex-shrink-0">
                  <RiMailLine size={15} />
                </span>
                {EMAIL}
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
              >
                <span className="w-9 h-9 rounded-lg bg-black/5 dark:bg-white/6 border border-black/8 dark:border-white/8 flex items-center justify-center flex-shrink-0">
                  <RiWhatsappLine size={15} />
                </span>
                +52 222 549 7631
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            noValidate
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/2 dark:bg-white/2 p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Nombre <span className="text-black/40 dark:text-white/40">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Tu nombre"
                  className={`${inputClass} ${errors.name ? "border-red-500/70" : "border-black/12 dark:border-white/12"}`}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="company" className={labelClass}>
                  Empresa
                </label>
                <input
                  id="company"
                  type="text"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Opcional"
                  className={`${inputClass} border-black/12 dark:border-white/12`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Correo electrónico <span className="text-black/40 dark:text-white/40">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="tucorreo@empresa.com"
                className={`${inputClass} ${errors.email ? "border-red-500/70" : "border-black/12 dark:border-white/12"}`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="type" className={labelClass}>
                Tipo de proyecto
              </label>
              <select
                id="type"
                value={form.type}
                onChange={(e) => update("type", e.target.value)}
                className={`${inputClass} border-black/12 dark:border-white/12 appearance-none cursor-pointer`}
              >
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Mensaje <span className="text-black/40 dark:text-white/40">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="Cuéntanos qué necesitas y tus objetivos."
                className={`${inputClass} resize-none ${errors.message ? "border-red-500/70" : "border-black/12 dark:border-white/12"}`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 w-full py-3.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-black/85 dark:hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
            >
              Enviar por WhatsApp
              <RiArrowRightLine size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <p className="text-center text-black/40 dark:text-white/40 text-xs">
              Se abrirá WhatsApp con tu mensaje listo para enviar.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
