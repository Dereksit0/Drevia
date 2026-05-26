"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ROW_1 = [
  { name: "Next.js",       abbr: "▲"   },
  { name: "React",         abbr: "⚛"   },
  { name: "TypeScript",    abbr: "TS"  },
  { name: "Tailwind CSS",  abbr: "TW"  },
  { name: "Node.js",       abbr: "NJ"  },
  { name: "Python",        abbr: "PY"  },
  { name: "AWS",           abbr: "☁"   },
  { name: "Docker",        abbr: "🐳"  },
  { name: "PostgreSQL",    abbr: "PG"  },
  { name: "Shopify",       abbr: "SH"  },
  { name: "GitHub",        abbr: "GH"  },
  { name: "Vercel",        abbr: "▲"   },
  { name: "Stripe",        abbr: "ST"  },
  { name: "Figma",         abbr: "FG"  },
];

const ROW_2 = [
  { name: "Astro",         abbr: "AS"  },
  { name: "Framer Motion", abbr: "FM"  },
  { name: "GraphQL",       abbr: "GQ"  },
  { name: "MongoDB",       abbr: "MG"  },
  { name: "Redis",         abbr: "RD"  },
  { name: "Supabase",      abbr: "SB"  },
  { name: "Laravel",       abbr: "LV"  },
  { name: "WooCommerce",   abbr: "WC"  },
  { name: "Firebase",      abbr: "🔥"  },
  { name: "Cloudflare",    abbr: "CF"  },
  { name: "MySQL",         abbr: "MY"  },
  { name: "PHP",           abbr: "PHP" },
  { name: "Mercado Pago",  abbr: "MP"  },
  { name: "Nginx",         abbr: "NG"  },
];

function TechPill({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center gap-2.5 mx-2 px-4 py-2.5 rounded-xl border border-black/8 dark:border-white/8 bg-white dark:bg-white/3 flex-shrink-0 select-none">
      <span className="w-7 h-7 rounded-lg bg-black/5 dark:bg-white/8 flex items-center justify-center text-[10px] font-bold text-black/55 dark:text-white/55 leading-none flex-shrink-0 font-mono">
        {abbr}
      </span>
      <span className="text-black/70 dark:text-white/70 text-sm font-medium whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Tecnologias() {
  return (
    <section className="bg-[#fafafa] dark:bg-[#050505] py-24 lg:py-32 border-t border-black/6 dark:border-white/6">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="inline-block text-black/40 dark:text-white/40 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Stack tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight">
            Tecnologías que usamos
          </h2>
          <p className="mt-4 text-black/50 dark:text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Construimos con las herramientas más modernas para garantizar
            rendimiento, seguridad y escalabilidad en cada proyecto.
          </p>
        </motion.div>
      </div>

      {/* Slider — full bleed */}
      <div className="relative py-2 space-y-4">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 z-10 w-20 sm:w-32 pointer-events-none bg-gradient-to-r from-[#fafafa] dark:from-[#050505] to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 sm:w-32 pointer-events-none bg-gradient-to-l from-[#fafafa] dark:from-[#050505] to-transparent" />

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden">
          <div style={{ animation: "marquee-left 42s linear infinite", display: "flex", width: "max-content" }}>
            {[...ROW_1, ...ROW_1].map((tech, i) => (
              <TechPill key={i} {...tech} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div style={{ animation: "marquee-right 48s linear infinite", display: "flex", width: "max-content" }}>
            {[...ROW_2, ...ROW_2].map((tech, i) => (
              <TechPill key={i} {...tech} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center text-black/35 dark:text-white/35 text-sm"
        >
          +40 tecnologías y herramientas. Siempre elegimos la mejor para cada proyecto.
        </motion.p>
      </div>
    </section>
  );
}
