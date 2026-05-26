"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const techCategories = [
  {
    category: "Frontend",
    techs: [
      { name: "Next.js",       icon: "▲" },
      { name: "React",         icon: "⚛" },
      { name: "Astro",         icon: "🚀" },
      { name: "TypeScript",    icon: "TS" },
      { name: "Tailwind CSS",  icon: "🌊" },
      { name: "Framer Motion", icon: "✦" },
      { name: "HTML5",         icon: "H" },
      { name: "CSS3",          icon: "C" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js",   icon: "⬡" },
      { name: "Python",    icon: "🐍" },
      { name: "PHP",       icon: "🐘" },
      { name: "Laravel",   icon: "L" },
      { name: "Express",   icon: "E" },
      { name: "FastAPI",   icon: "F" },
      { name: "GraphQL",   icon: "◈" },
      { name: "REST API",  icon: "~" },
    ],
  },
  {
    category: "Base de Datos",
    techs: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL",      icon: "🐬" },
      { name: "MongoDB",    icon: "🍃" },
      { name: "Redis",      icon: "⚡" },
      { name: "Supabase",   icon: "S" },
      { name: "Prisma",     icon: "◆" },
      { name: "Firebase",   icon: "🔥" },
      { name: "SQLite",     icon: "⬡" },
    ],
  },
  {
    category: "E-commerce",
    techs: [
      { name: "Shopify",      icon: "S" },
      { name: "WooCommerce",  icon: "W" },
      { name: "Mercado Pago", icon: "M" },
      { name: "Stripe",       icon: "S" },
      { name: "PayPal",       icon: "P" },
      { name: "OXXO Pay",     icon: "O" },
      { name: "Conekta",      icon: "C" },
      { name: "OpenPay",      icon: "O" },
    ],
  },
  {
    category: "DevOps & Cloud",
    techs: [
      { name: "AWS",       icon: "☁" },
      { name: "Vercel",    icon: "▲" },
      { name: "Docker",    icon: "🐳" },
      { name: "GitHub",    icon: "⬡" },
      { name: "Git",       icon: "G" },
      { name: "Netlify",   icon: "N" },
      { name: "Linux",     icon: "🐧" },
      { name: "Nginx",     icon: "N" },
    ],
  },
  {
    category: "Herramientas",
    techs: [
      { name: "Figma",       icon: "F" },
      { name: "VS Code",     icon: "{}"},
      { name: "Postman",     icon: "P" },
      { name: "Jira",        icon: "J" },
      { name: "Notion",      icon: "N" },
      { name: "Cloudflare",  icon: "☁" },
      { name: "Twilio",      icon: "T" },
      { name: "SendGrid",    icon: "S" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

export default function Tecnologias() {
  return (
    <section className="bg-[#fafafa] dark:bg-[#050505] py-24 lg:py-32 border-t border-black/6 dark:border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14 lg:mb-16"
        >
          <span className="inline-block text-black/40 dark:text-white/40 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Stack tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight">
            Tecnologías que usamos
          </h2>
          <p className="mt-4 text-black/50 dark:text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Construimos con las herramientas más modernas del mercado para garantizar
            rendimiento, seguridad y escalabilidad en cada proyecto.
          </p>
        </motion.div>

        <div className="space-y-10">
          {techCategories.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.07, ease: EASE }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-black/40 dark:text-white/40 text-xs font-semibold tracking-[0.25em] uppercase">
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-black/8 dark:bg-white/8" />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                className="flex flex-wrap gap-2"
              >
                {group.techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-black/8 dark:border-white/8 bg-white dark:bg-white/3 hover:border-black/18 dark:hover:border-white/18 hover:bg-black/3 dark:hover:bg-white/6 transition-all duration-200 cursor-default"
                  >
                    <span className="text-black/40 dark:text-white/40 text-xs font-mono w-5 text-center leading-none">
                      {tech.icon}
                    </span>
                    <span className="text-black/70 dark:text-white/70 text-sm font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-black/35 dark:text-white/35 text-sm">
            +40 tecnologías y herramientas. Siempre elegimos la mejor para cada proyecto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
