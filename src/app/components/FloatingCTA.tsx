"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiWhatsappLine, RiCloseLine } from "react-icons/ri";
import { WA } from "../lib/site";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-50"
        >
          {/* #74 — descartar */}
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Ocultar botón de WhatsApp"
            className="absolute -top-1.5 -left-1.5 z-20 w-6 h-6 rounded-full bg-[#061029] border border-white/20 text-white/80 flex items-center justify-center hover:text-white hover:bg-[#0a1a3f] transition-colors"
          >
            <RiCloseLine size={13} aria-hidden="true" />
          </button>
          <motion.a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-[0_8px_30px_rgba(34,197,94,0.45)]"
          >
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
            <RiWhatsappLine size={28} className="relative z-10" aria-hidden="true" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
