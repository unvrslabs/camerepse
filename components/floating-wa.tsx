"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/content";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivi su WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-wa px-4 py-4 text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.7)] transition-all duration-500 md:px-5 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-wa animate-pulse-soft opacity-40" />
      <MessageCircle size={22} />
      <span className="hidden text-sm font-medium md:inline">Scrivici</span>
    </a>
  );
}
