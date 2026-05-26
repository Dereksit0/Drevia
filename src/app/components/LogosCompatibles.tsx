"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tools = [
  {
    name: "Google Ads",
    logo: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 flex-shrink-0" fill="none">
        <path d="M24 4L6 36h12l6-10.5L30 36h12L24 4z" fill="#EA4335" />
        <path d="M6 36a9 9 0 1 0 18 0H6z" fill="#34A853" />
        <path d="M30 36a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" fill="#FBBC04" />
      </svg>
    ),
    label: <><strong className="font-bold text-black dark:text-white">Google</strong><span className="text-black/50 dark:text-white/50 font-normal"> Ads</span></>,
  },
  {
    name: "Facebook Ads",
    logo: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 flex-shrink-0" fill="none">
        <circle cx="24" cy="24" r="22" fill="#1877F2" />
        <path d="M31 24h-5v-3.5c0-1.1.9-1.5 1.8-1.5H31V14h-4.5C22.4 14 20 16.9 20 20.5V24h-4v6h4v14h6V30h4l1-6z" fill="white" />
      </svg>
    ),
    label: <><strong className="font-bold text-black dark:text-white" style={{ fontFamily: "Georgia, serif", fontStyle: "italic", letterSpacing: "-0.02em" }}>facebook</strong><span className="text-black/50 dark:text-white/50 font-normal"> Ads</span></>,
  },
  {
    name: "Google Analytics",
    logo: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 flex-shrink-0" fill="none">
        <rect x="6"  y="22" width="10" height="20" rx="3" fill="#E37400" />
        <rect x="19" y="12" width="10" height="30" rx="3" fill="#E8A000" />
        <rect x="32" y="4"  width="10" height="38" rx="3" fill="#F9AB00" />
      </svg>
    ),
    label: <><strong className="font-bold text-black dark:text-white">Google</strong><span className="text-black/50 dark:text-white/50 font-normal"> Analytics</span></>,
  },
  {
    name: "SSL / HTTPS",
    logo: (
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-green-500/30 bg-green-500/6">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-green-500" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white" />
          </svg>
          <span className="text-green-600 dark:text-green-400 text-[10px] font-bold tracking-wider">SSL</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1.5 rounded-md border border-green-500/20 bg-green-500/5">
          <svg viewBox="0 0 24 24" className="w-3 h-3 text-green-500" fill="currentColor">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
          </svg>
          <span className="text-green-600 dark:text-green-400 text-[10px] font-bold">https://</span>
        </div>
      </div>
    ),
    label: null,
  },
];

export default function LogosCompatibles() {
  return (
    <section className="bg-[#fafafa] dark:bg-[#050505] py-16 lg:py-20 border-t border-black/6 dark:border-white/6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="inline-block text-black/35 dark:text-white/35 text-[10px] font-semibold tracking-[0.4em] uppercase mb-3">
            Todas nuestras páginas web
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white tracking-tight">
            100% Listas para Trabajar con
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 mt-10"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: EASE }}
              className="flex items-center gap-2.5"
            >
              {tool.logo}
              {tool.label && (
                <span className="text-base leading-none">{tool.label}</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
