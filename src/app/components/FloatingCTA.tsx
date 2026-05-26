"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCalendarLine } from "react-icons/ri";

const WA = "https://wa.me/522225497631?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20llamada%20gratuita%20con%20el%20equipo%20de%20DREVIA.";

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
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.92 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-4 z-50 lg:hidden"
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 pl-4 pr-5 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.28)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.12)] active:scale-95 transition-transform duration-150"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15 dark:bg-black/15 flex-shrink-0">
              <RiCalendarLine size={13} />
            </span>
            Agendar llamada gratis
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
