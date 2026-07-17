"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "camerepse-cookie-consent";

/**
 * Banner di consenso cookie (GDPR). Il sito usa solo cookie/localStorage tecnici
 * necessari; il consenso viene comunque richiesto e memorizzato in localStorage.
 * Compare una sola volta finché l'utente non sceglie.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* localStorage non disponibile */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Preferenze cookie"
          aria-live="polite"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-[60] w-[calc(100%-3rem)] max-w-sm rounded-3xl border border-sea-700/12 bg-cream/95 p-6 shadow-[0_20px_60px_-15px_rgba(10,44,52,0.4)] backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sea-700/8 text-gold-600">
              <Cookie className="h-5 w-5" />
            </span>
            <h2 className="font-display text-lg text-sea-800">Rispettiamo la tua privacy</h2>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-sea-700/75">
            Usiamo solo cookie tecnici necessari al funzionamento del sito. Puoi scegliere liberamente e
            leggere i dettagli nella{" "}
            <Link
              href="/privacy"
              className="font-medium text-gold-600 underline decoration-gold-500/30 underline-offset-2 hover:text-gold-700"
            >
              Privacy &amp; Cookie Policy
            </Link>
            .
          </p>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <button
              onClick={() => decide("rejected")}
              className="order-2 flex-1 rounded-full border border-sea-700/25 px-5 py-2.5 text-sm font-medium text-sea-700 transition-colors hover:bg-sea-700/5 sm:order-1"
            >
              Rifiuta
            </button>
            <button
              onClick={() => decide("accepted")}
              className="order-1 flex-1 rounded-full bg-sea-700 px-5 py-2.5 text-sm font-medium text-cream shadow-sm transition-colors hover:bg-sea-600 sm:order-2"
            >
              Accetta
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
