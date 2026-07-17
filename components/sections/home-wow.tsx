"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeGallery, marqueeShots, homeStats } from "@/lib/content";
import { CountUp } from "@/components/motion/count-up";
import { TextReveal } from "@/components/motion/text-reveal";

/* ───────── Manifesto: testo che si "accende" parola per parola ───────── */
export function FillManifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.32"] });
  const text =
    "Due strutture curate, a un passo dal centro e dall'Adriatico. Camere pronte all'uso, pensate per chi ospita un team.";
  const words = text.split(" ");
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-cream px-6 py-28 md:py-36">
      <p
        ref={ref}
        className="font-display mx-auto flex max-w-4xl flex-wrap justify-center gap-x-3 gap-y-1 text-center text-3xl leading-tight md:text-5xl lg:text-[3.4rem]"
      >
        {words.map((w, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return <FillWord key={i} progress={scrollYProgress} range={[start, end]} word={w} />;
        })}
      </p>
    </section>
  );
}

function FillWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  const color = useTransform(progress, range, ["#8ab0b0", "#0a2c34"]);
  return (
    <motion.span style={{ opacity, color }} className="inline-block">
      {word}
    </motion.span>
  );
}

/* ───────── Stats band con count-up + barre animate ───────── */
export function StatsBand() {
  const bars = [40, 70, 92, 55];
  return (
    <section className="relative overflow-hidden bg-sea-900 px-6 py-24 md:py-28">
      <div className="grain absolute inset-0" />
      <div className="mesh-sea absolute inset-0 opacity-45" />
      <div
        className="absolute -left-32 top-0 h-[42vw] w-[42vw] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle,rgba(199,154,75,0.16),transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-0 md:divide-x md:divide-cream/10">
          {homeStats.map((s, i) => (
            <div key={s.l} className="flex flex-col items-center px-2 text-center md:px-6">
              <CountUp
                to={s.to}
                suffix={s.suffix}
                repeat
                className="font-display block text-5xl text-gold-400 md:text-6xl"
              />
              <span className="mt-2 block text-sm text-cream/60">{s.l}</span>
              <div className="mt-4 h-1.5 w-24 overflow-hidden rounded-full bg-cream/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bars[i]}%` }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 1.1, delay: i * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Galleria camere a scroll orizzontale (pan nativo, robusto) ───────── */
export function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const sec = sectionRef.current;
      const row = rowRef.current;
      if (!sec || !row) return;
      const total = sec.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-sec.getBoundingClientRect().top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      const maxPan = Math.max(0, row.scrollWidth - window.innerWidth);
      row.style.transform = `translate3d(${-p * maxPan}px,0,0)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[340vh] bg-sea-950">
      <div className="grain absolute inset-0 z-20" />
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container-x mx-auto max-w-7xl pb-8 md:pb-10">
          <span className="eyebrow text-gold-400">Le camere · in mostra</span>
          <TextReveal
            text="Uno sguardo dentro le due strutture"
            className="font-display mt-4 max-w-4xl text-4xl leading-[1.02] tracking-tight text-cream md:text-6xl"
          />
          <p className="mt-4 max-w-lg text-cream/60">Scorri per attraversare le camere, la cucina e i bagni di Es Vedra e Via Romagna.</p>
        </div>
        <div ref={rowRef} className="flex w-max gap-5 pl-6 pr-6 will-change-transform md:gap-6 md:pl-10">
          {homeGallery.map((g) => (
            <figure
              key={g.img}
              className="group relative h-[52vh] w-[78vw] shrink-0 overflow-hidden rounded-3xl ring-1 ring-cream/10 sm:w-[58vw] md:h-[56vh] md:w-[40vw] lg:w-[32vw]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.img}
                alt={g.cap}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sea-950 via-sea-950/25 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <span className="font-display block text-3xl text-cream/25">{g.n}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-gold-400">{g.struct}</span>
                <span className="font-display mt-1 block text-xl text-cream md:text-2xl">{g.cap}</span>
              </figcaption>
            </figure>
          ))}
          <Link
            href="/es-vedra"
            className="group flex h-[52vh] w-[70vw] shrink-0 flex-col justify-center rounded-3xl bg-gold-500 p-8 text-ink sm:w-[40vw] md:h-[56vh] md:w-[28vw] lg:w-[22vw]"
          >
            <span className="font-display text-3xl leading-tight md:text-4xl">Scopri ogni camera</span>
            <span className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-1">
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── Striscia foto continua (marquee) ───────── */
export function PhotoMarquee() {
  const loop = [...marqueeShots, ...marqueeShots];
  return (
    <section className="overflow-hidden bg-cream py-16 md:py-20">
      <div className="group relative">
        <div className="flex w-max gap-4 pl-4 animate-[marquee-x_55s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((src, i) => (
            <div key={i} className="relative aspect-[3/4] w-[180px] shrink-0 overflow-hidden rounded-2xl md:w-[220px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-sea-950/5" />
            </div>
          ))}
        </div>
        {/* sfumature laterali */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}
