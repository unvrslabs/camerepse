import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, UtensilsCrossed, ShowerHead } from "lucide-react";
import { structures, vrRooms, vrGallery } from "@/lib/content";
import { PageHero } from "@/components/sections/page-hero";
import { Rooms } from "@/components/sections/rooms";
import { Gallery } from "@/components/sections/gallery";
import { AvailabilityCta } from "@/components/availability-cta";
import { SectionHead, Eyebrow, Button } from "@/components/ui";
import { Reveal, ImageReveal, Stagger, StaggerItem } from "@/components/motion/reveal";

const s = structures.viaromagna;

export const metadata: Metadata = {
  title: "Via Romagna 41",
  description:
    "Appartamento condiviso ristrutturato a Porto Sant'Elpidio: ~130 m², 4 camere doppie, 3 bagni con doccia walk-in, cucina e zona pranzo condivise.",
};

export default function ViaRomagnaPage() {
  return (
    <>
      <PageHero
        crumb="Via Romagna"
        eyebrow="Struttura 02 · Via Romagna 41"
        title={<>Via Romagna</>}
        intro={s.tagline}
        image={s.hero}
        stats={s.stats}
      />

      {/* Overview / planimetria */}
      <section className="relative bg-cream py-24 md:py-32">
        <div className="container-x mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Eyebrow>L&apos;appartamento condiviso</Eyebrow>
              <Reveal>
                <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-sea-800 md:text-5xl">
                  <span className="title-grad-dark">~130 m² su piano unico</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-sea-700/80 text-pretty">
                  Un appartamento interamente ristrutturato e pronto all&apos;uso, pensato per la vita condivisa
                  di un team.
                </p>
              </Reveal>
              <Stagger className="mt-8 space-y-3">
                {[
                  "Quattro camere doppie, ~15 m² ciascuna",
                  "Due camere con bagno privato",
                  "Due camere con bagno in comune",
                  "Cucina e zona pranzo condivise",
                ].map((t) => (
                  <StaggerItem key={t}>
                    <div className="flex items-center gap-3 rounded-2xl border border-sea-700/10 bg-sand-100 px-5 py-4 text-sea-700">
                      <span className="h-2 w-2 rounded-full bg-gold-500" />
                      {t}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <ImageReveal
              src="/img/vr_pranzo.jpg"
              alt="Zona pranzo Via Romagna"
              className="aspect-[4/5] rounded-[2rem] shadow-[0_40px_90px_-45px_rgba(10,44,52,0.5)]"
            />
          </div>
        </div>
      </section>

      {/* Camere */}
      <section className="relative bg-sand-200 py-24 md:py-32">
        <div className="container-x mx-auto max-w-7xl">
          <SectionHead
            eyebrow="Le camere doppie"
            title="Quattro doppie, ognuna col suo carattere."
            intro="Dalla stanza con camino e parete in mattoni a quelle affacciate sul balcone: spazi da ~15 m² pensati per lavorare e riposare."
          />
          <div className="mt-16">
            <Rooms rooms={vrRooms} />
          </div>
        </div>
      </section>

      {/* Cucina & pranzo */}
      <section className="relative overflow-hidden bg-sea-900 py-24 text-cream md:py-32">
        <div className="grain absolute inset-0" />
        <div className="mesh-sea absolute inset-0 opacity-50" />
        <div className="container-x relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <ImageReveal src="/img/vr_cucina.jpg" alt="Cucina condivisa" className="aspect-[4/3] rounded-[2rem] shadow-2xl" />
            <div>
              <Eyebrow light>Cucina e sala da pranzo</Eyebrow>
              <Reveal>
                <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl">
                  <span className="title-grad">Uno spazio per la vita condivisa</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70 text-pretty">
                  L&apos;appartamento include una cucina interamente condivisa con zona pranzo dedicata e tavoli
                  comodamente dimensionati per l&apos;uso quotidiano di residenti e ospiti.
                </p>
              </Reveal>
              <Stagger className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-cream/12">
                {[
                  { v: "Condivisa", l: "Cucina" },
                  { v: "Con tavoli", l: "Zona pranzo" },
                  { v: "Quotidiano", l: "Uso del team" },
                ].map((it) => (
                  <StaggerItem key={it.l} className="bg-cream/[0.05] p-5">
                    <span className="font-display text-xl text-gold-400">{it.v}</span>
                    <p className="mt-1 text-xs uppercase tracking-wider text-cream/60">{it.l}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Bagni */}
      <section className="relative bg-cream py-24 md:py-32">
        <div className="container-x mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Bagni</Eyebrow>
              <Reveal>
                <h2 className="font-display mt-5 text-4xl leading-tight text-sea-800 md:text-5xl">
                  Due privati, uno in comune
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-sea-700/80 text-pretty">
                  Due delle quattro camere doppie dispongono di bagno privato; le altre due condividono un terzo
                  bagno. Tutti e tre recentemente ristrutturati e dotati di doccia walk-in.
                </p>
              </Reveal>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { v: "3", l: "Bagni totali" },
                  { v: "2", l: "Privati" },
                  { v: "1", l: "In comune" },
                  { v: "Walk-in", l: "Docce ristrutturate" },
                ].map((it) => (
                  <div key={it.l} className="rounded-2xl border border-sea-700/10 bg-sand-100 p-5">
                    <span className="font-display text-2xl text-sea-700">{it.v}</span>
                    <p className="mt-1 text-sm text-sea-600/70">{it.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["/img/vr_bath1.jpg", "/img/vr_bath2.jpg", "/img/vr_bath3.jpg", "/img/vr_balconebagno.jpg"].map((b, i) => (
                <Reveal key={b} delay={i * 0.08}>
                  <div className="img-zoom overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b} alt={`Bagno Via Romagna ${i + 1}`} className="aspect-[3/4] w-full object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative bg-sand-200 py-24 md:py-32">
        <div className="container-x mx-auto max-w-7xl">
          <SectionHead eyebrow="Galleria" title="Cucina e bagni" intro="Spazi condivisi e docce walk-in, dopo la ristrutturazione." />
          <div className="mt-12">
            <Gallery shots={vrGallery} />
          </div>
        </div>
      </section>

      {/* Indirizzo */}
      <section className="relative bg-cream py-24 md:py-32">
        <div className="container-x mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-sea-700/12 bg-sand-100">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="p-10 md:p-14">
                <Eyebrow>Indirizzo</Eyebrow>
                <h2 className="font-display mt-5 text-4xl text-sea-800">Via Romagna 41</h2>
                <p className="mt-4 text-lg text-sea-700/75">
                  63821 Porto Sant&apos;Elpidio (FM), Marche · zona centrale, vicino alla costa
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button href={s.maps} external variant="sea">
                    <MapPin size={16} /> Apri in Google Maps
                  </Button>
                  <Button href="/prenota" variant="outline">
                    <UtensilsCrossed size={16} /> Richiedi informazioni
                  </Button>
                </div>
                <Link
                  href="/es-vedra"
                  className="mt-8 inline-flex items-center gap-2 font-medium text-sea-700 transition hover:text-gold-600"
                >
                  Vedi Es Vedra
                  <ArrowUpRight size={17} />
                </Link>
              </div>
              <div className="img-zoom relative min-h-[280px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/vr_balconesin.jpg" alt="Via Romagna" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AvailabilityCta />
    </>
  );
}
