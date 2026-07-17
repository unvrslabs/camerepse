import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, UtensilsCrossed, ShowerHead } from "lucide-react";
import { structures, esvedraRooms, esvedraGallery, esvedraBaths } from "@/lib/content";
import { PageHero } from "@/components/sections/page-hero";
import { Rooms } from "@/components/sections/rooms";
import { Gallery } from "@/components/sections/gallery";
import { AvailabilityCta } from "@/components/availability-cta";
import { SectionHead, Eyebrow, Button } from "@/components/ui";
import { Reveal, ImageReveal, Stagger, StaggerItem } from "@/components/motion/reveal";

const s = structures.esvedra;

export const metadata: Metadata = {
  title: "Es Vedra · Via Po 13",
  description:
    "Affittacamere curato a Porto Sant'Elpidio: 4 camere matrimoniali con bagno privato, A/C e riscaldamento, cucina condivisa a 500 m dalla spiaggia.",
};

export default function EsVedraPage() {
  return (
    <>
      <PageHero
        crumb="Es Vedra"
        eyebrow="Struttura 01 · Via Po 13"
        title={<>Es Vedra</>}
        intro={s.tagline}
        image={s.hero}
        stats={s.stats}
      />

      {/* Camere */}
      <section className="relative bg-cream py-24 md:py-32">
        <div className="container-x mx-auto max-w-7xl">
          <SectionHead
            eyebrow="Le camere"
            title="Quattro camere, ciascuna con bagno privato."
            intro="Dalla compatta con ingresso indipendente alla più ampia dalla parete blu: ogni camera ha aria condizionata, riscaldamento e bagno privato con doccia."
          />
          <div className="mt-16">
            <Rooms rooms={esvedraRooms} />
          </div>
        </div>
      </section>

      {/* Cucina — cuore della casa */}
      <section className="relative overflow-hidden bg-sea-900 py-24 text-cream md:py-32">
        <div className="grain absolute inset-0" />
        <div className="mesh-sea absolute inset-0 opacity-50" />
        <div className="container-x relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Eyebrow light>Cuore della casa</Eyebrow>
              <Reveal>
                <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl">
                  <span className="title-grad">Cucina condivisa di ~15 m²</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70 text-pretty">
                  Interamente attrezzata, con zona pranzo e ingresso principale. Dà accesso a tre delle quattro
                  camere ed è lo spazio comune dove il team si ritrova a fine giornata.
                </p>
              </Reveal>
              <Stagger className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/12">
                {[
                  { v: "~15 m²", l: "Superficie" },
                  { v: "Dedicata", l: "Zona pranzo" },
                  { v: "Completa", l: "Attrezzatura" },
                  { v: "3 di 4", l: "Camere collegate" },
                ].map((it) => (
                  <StaggerItem key={it.l} className="bg-cream/[0.05] p-5">
                    <span className="font-display text-2xl text-gold-400">{it.v}</span>
                    <p className="mt-1 text-xs uppercase tracking-wider text-cream/60">{it.l}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <ImageReveal
              src="/img/g4.jpg"
              alt="Cucina e spazi comuni Es Vedra"
              className="aspect-[4/3] rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Posizione */}
      <section className="relative bg-cream py-24 md:py-32">
        <div className="container-x mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <ImageReveal
              src={s.hero}
              alt="Es Vedra, zona e posizione"
              className="aspect-[4/5] rounded-[2rem] shadow-[0_40px_90px_-45px_rgba(10,44,52,0.5)]"
            />
            <div>
              <Eyebrow>Posizione</Eyebrow>
              <Reveal>
                <h2 className="font-display mt-5 text-4xl leading-tight text-sea-800 md:text-5xl">
                  A un minuto dal centro, a due passi dal mare
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-sea-700/80 text-pretty">
                  Es Vedra si trova in una zona tranquilla e ben servita: un minuto a piedi dal centro e 500–600
                  metri dalla spiaggia. Comoda per chi lavora in città e vuole il mare a portata di passeggiata.
                </p>
              </Reveal>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { v: "1 min", l: "A piedi dal centro" },
                  { v: "500–600 m", l: "Dalla spiaggia" },
                  { v: "Tranquilla", l: "Zona servita" },
                  { v: "Camera o intera", l: "Formula d'affitto" },
                ].map((it) => (
                  <Reveal key={it.l}>
                    <div className="rounded-2xl border border-sea-700/10 bg-sand-100 p-5">
                      <span className="font-display text-2xl text-sea-700">{it.v}</span>
                      <p className="mt-1 text-sm text-sea-600/70">{it.l}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <Button href={s.maps} external variant="outline">
                    <MapPin size={16} /> Apri Via Po 13 in Google Maps
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bagni */}
      <section className="relative bg-sand-200 py-24 md:py-32">
        <div className="container-x mx-auto max-w-7xl">
          <SectionHead
            eyebrow="I bagni"
            title="Quattro bagni privati, uno per camera"
            intro="Docce walk-in e finiture recenti: ogni camera ha il proprio bagno, con sanitari sospesi e attenzione ai dettagli."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {esvedraBaths.map((b, i) => (
              <Reveal key={b} delay={i * 0.08}>
                <div className="img-zoom overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b} alt={`Bagno ${i + 1}`} className="aspect-[3/4] w-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
          <Stagger className="mt-8 flex flex-wrap gap-3">
            {["Bagno privato · doccia", "Doccia walk-in", "Sanitari sospesi", "Finiture recenti"].map((f) => (
              <StaggerItem key={f}>
                <span className="inline-flex items-center gap-2 rounded-full border border-sea-700/15 bg-cream px-4 py-2 text-sm text-sea-700">
                  <ShowerHead size={15} className="text-gold-500" /> {f}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative bg-cream py-24 md:py-32">
        <div className="container-x mx-auto max-w-7xl">
          <SectionHead eyebrow="Galleria" title="Uno sguardo d'insieme" intro="Altri scorci delle camere e degli spazi." />
          <div className="mt-12">
            <Gallery shots={esvedraGallery} />
          </div>
          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/prenota" variant="gold">
                <UtensilsCrossed size={16} /> Richiedi informazioni
              </Button>
              <Link
                href="/via-romagna"
                className="inline-flex items-center gap-2 font-medium text-sea-700 transition hover:text-gold-600"
              >
                Vedi Via Romagna
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <AvailabilityCta />
    </>
  );
}
