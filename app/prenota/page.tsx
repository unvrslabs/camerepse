import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/lib/content";
import { BookingForm } from "@/components/sections/booking-form";
import { AvailabilityCta } from "@/components/availability-cta";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Prenota",
  description:
    "Richiedi la tua prenotazione a Es Vedra o Via Romagna: scegli struttura, date e ospiti e invia la richiesta su WhatsApp o via email. Nessun pagamento online.",
};

export default function PrenotaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-sea-950 pb-16 pt-36 md:pt-44">
        <div className="grain absolute inset-0" />
        <div className="mesh-sea absolute inset-0 opacity-55" />
        <div
          className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl animate-float-slow"
          style={{ background: "radial-gradient(circle, rgba(199,154,75,0.5), transparent 65%)" }}
        />
        <div className="container-x relative z-10 mx-auto max-w-7xl">
          <nav className="flex items-center gap-1.5 text-sm text-cream/60">
            <Link href="/" className="transition hover:text-cream">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gold-400">Prenota</span>
          </nav>
          <Eyebrow light>Richiesta di prenotazione</Eyebrow>
          <h1 className="font-display mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1] tracking-tight text-cream">
            <span className="title-grad">Prenota il tuo soggiorno</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/70 text-pretty">
            Scegli struttura, date e numero di ospiti: invii la richiesta a {site.contactName} su WhatsApp o via
            email e ti confermiamo disponibilità e prezzo il prima possibile.
          </p>
        </div>
      </section>

      <section className="relative bg-cream py-16 md:py-24">
        <div className="container-x mx-auto max-w-7xl">
          <BookingForm />
        </div>
      </section>

      <AvailabilityCta />
    </>
  );
}
