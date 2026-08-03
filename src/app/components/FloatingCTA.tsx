"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WA } from "../lib/site";

/** Glifo oficial de WhatsApp (burbuja + auricular), en color sólido. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.886-9.885 9.886m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
    </svg>
  );
}

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 z-50"
        >
          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="relative flex items-center h-[58px] rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.35),0_2px_6px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.04] hover:shadow-[0_12px_34px_rgba(37,211,102,0.5),0_4px_12px_rgba(0,0,0,0.3)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {/* Dos anillos desfasados: el pulso se lee como onda, no como parpadeo */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 w-[58px] h-[58px] rounded-full bg-[#25D366] animate-wa-pulse group-hover-pause"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 w-[58px] h-[58px] rounded-full bg-[#25D366] animate-wa-pulse-2 group-hover-pause"
            />

            {/* Etiqueta que se despliega en hover (solo desktop) */}
            <span className="relative hidden lg:block overflow-hidden max-w-0 opacity-0 transition-all duration-300 ease-out group-hover:max-w-[240px] group-hover:opacity-100">
              <span className="block whitespace-nowrap pl-6 pr-1 text-sm font-semibold">
                ¿Tienes dudas? Escríbenos
              </span>
            </span>

            <span className="relative flex items-center justify-center w-[58px] h-[58px] shrink-0">
              <WhatsAppGlyph className="w-8 h-8 transition-transform duration-300 group-hover:rotate-[8deg]" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
