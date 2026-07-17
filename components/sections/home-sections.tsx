import Link from "next/link";
import { ArrowUpRight, Waves, Award, Factory, TrainFront, MapPin, Check } from "lucide-react";
import { localita, structures, targets } from "@/lib/content";
import { Eyebrow, SectionHead } from "@/components/ui";
import { Reveal, ImageReveal, Stagger, StaggerItem, Tilt } from "@/components/motion/reveal";
import { Comparison } from "@/components/sections/comparison";

const factIcons = [Waves, Award, Factory, TrainFront];

/* ---------- Località ---------- */
export function Localita() {
  return (
    <section id="localita" className="relative bg-cream py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>Dove vi trovate</Eyebrow>
            <Reveal>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-sea-800 md:text-5xl lg:text-6xl">
                <span className="title-grad-dark">{localita.title}</span>
              </h2>
            </Reveal>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-sea-700/80 text-pretty">
              {localita.paras.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative">
            <ImageReveal
              src={structures.esvedra.hero}
              alt="Es Vedra, facciata a Porto Sant'Elpidio"
              className="aspect-[4/5] rounded-[2rem] shadow-[0_40px_90px_-40px_rgba(10,44,52,0.5)]"
            />
            <Reveal delay={0.2}>
              <div className="absolute -bottom-8 -left-6 hidden w-56 rounded-2xl bg-sea-800 p-6 text-cream shadow-xl md:block">
                <span className="font-display text-4xl text-gold-400">500 m</span>
                <p className="mt-1 text-sm text-cream/70">dalla spiaggia, a piedi dal centro</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4">
          {localita.facts.map((f, i) => {
            const Icon = factIcons[i];
            return (
              <StaggerItem key={f.t}>
                <div className="group h-full rounded-2xl border border-sea-700/10 bg-sand-100 p-6 transition-all duration-300 hover:border-gold-500/40 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sea-700 text-gold-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={19} />
                  </span>
                  <h3 className="font-display mt-4 text-lg text-sea-800">{f.t}</h3>
                  <p className="mt-1 text-sm text-sea-700/70">{f.d}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- Le strutture (2 card grandi) ---------- */
export function Strutture() {
  const list = [structures.esvedra, structures.viaromagna];
  return (
    <section id="strutture" className="relative bg-sand-200 py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Le strutture"
          title={<>Un&apos;unica zona, due modi di alloggiare.</>}
          intro="A un minuto dai servizi e a breve dal mare. Scegli l'affittacamere curato di Via Po o l'appartamento condiviso di Via Romagna — o combinali per ospitare un intero team."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {list.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.12}>
              <Tilt className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-cream shadow-[0_30px_80px_-45px_rgba(10,44,52,0.5)]">
                  <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.cover} alt={s.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-sea-950/70 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-sea-700">
                      Struttura {s.n}
                    </span>
                    <div className="absolute bottom-5 left-6 right-6 text-cream">
                      <h3 className="font-display text-3xl">
                        {s.name} <span className="text-cream/60">· {s.addr}</span>
                      </h3>
                      <p className="text-sm text-cream/80">{s.kind}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <ul className="space-y-3">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sea-700/85">
                          <Check size={18} className="mt-0.5 shrink-0 text-gold-500" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex items-center justify-between border-t border-sea-700/10 pt-6">
                      <span className="text-sm text-sea-500">
                        {s.stats[0].v} · {s.stats[1].v} {s.stats[1].l.toLowerCase()}
                      </span>
                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-2 font-medium text-sea-700 transition-colors group-hover:text-gold-600"
                      >
                        Pagina {s.name}
                        <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Mappa e indirizzi ---------- */
export function Indirizzi() {
  const list = [structures.esvedra, structures.viaromagna];
  return (
    <section id="indirizzi" className="relative bg-cream py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Mappa e indirizzi"
          title="Due indirizzi nella stessa zona."
          intro="Entrambe le strutture si trovano a Porto Sant'Elpidio, vicine tra loro e al mare. Apri l'indirizzo direttamente in Google Maps."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {list.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1}>
              <a
                href={s.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-start gap-5 overflow-hidden rounded-3xl border border-sea-700/12 bg-sand-100 p-7 transition-all duration-300 hover:border-gold-500/50 hover:shadow-xl"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sea-700 text-gold-400">
                  <MapPin size={22} />
                </span>
                <span className="flex-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-sea-500">Struttura {s.n}</span>
                  <span className="font-display mt-1 block text-2xl text-sea-800">{s.name}</span>
                  <span className="mt-1 block text-sm text-sea-700/70">{s.fullAddr}</span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600">
                    Apri in Google Maps
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Confronto ---------- */
export function Confronto() {
  return (
    <section id="confronto" className="relative bg-sand-200 py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Confronto"
          title="Quale struttura fa per te?"
          intro="Due formule diverse a poca distanza l'una dall'altra. A colpo d'occhio, come si confrontano."
        />
        <div className="mt-12">
          <Comparison />
        </div>
      </div>
    </section>
  );
}

/* ---------- Adatto a ---------- */
export function AdattoA() {
  return (
    <section id="adatto-a" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Adatto a"
          title="Pensate per chi ospita un team."
          intro="Entrambe le strutture sono la risposta per aziende e attività che cercano un alloggio di qualità, ordinato e pronto, per il proprio personale stagionale o stabile."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {targets.map((t) => (
            <StaggerItem key={t.t}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-sea-700/10 bg-sand-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="font-display absolute -right-3 -top-4 text-[7rem] leading-none text-sea-700/[0.06] transition-colors group-hover:text-gold-500/15">
                  {t.k}
                </span>
                <span className="font-display relative flex h-14 w-14 items-center justify-center rounded-2xl bg-sea-700 text-2xl text-gold-400">
                  {t.k}
                </span>
                <h3 className="font-display relative mt-5 text-2xl text-sea-800">{t.t}</h3>
                <p className="relative mt-3 text-sea-700/75 text-pretty">{t.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
