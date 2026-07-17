"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Waves } from "lucide-react";
import { site, structures } from "@/lib/content";
import { Magnetic } from "@/components/motion/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-sea-950">
      {/* Foto di sfondo con parallax */}
      <motion.div
        style={reduce ? undefined : { y: yImg, scale: scaleImg }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={structures.esvedra.hero}
          alt="Es Vedra — Porto Sant'Elpidio"
          className="h-full w-full object-cover object-center opacity-70"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-sea-950/85 via-sea-950/55 to-sea-950" />
      <div className="mesh-sea absolute inset-0 opacity-45 mix-blend-soft-light" />
      <div className="grain absolute inset-0" />

      {/* Contenuto */}
      <motion.div
        style={reduce ? undefined : { y: yText, opacity }}
        className="container-x relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center pb-16 pt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-3 text-gold-400"
        >
          <span className="flex h-8 items-center gap-2 rounded-full border border-gold-500/30 bg-sea-950/30 px-4 backdrop-blur">
            <Waves size={14} />
            <span className="eyebrow">
              {site.tagline} · {site.year}
            </span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
          className="font-display mt-7 max-w-4xl text-[clamp(2.6rem,7vw,6rem)] leading-[0.98] tracking-tight text-cream"
        >
          Es Vedra <span className="italic text-gold-400">&amp;</span>
          <br />
          <span className="title-grad">Via Romagna</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.18 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75 text-pretty md:text-xl"
        >
          {site.description}
        </motion.p>

        {/* Due strutture — pill cards */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.28 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          {[structures.esvedra, structures.viaromagna].map((s) => (
            <Magnetic key={s.id} className="flex-1">
              <Link
                href={s.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-cream/15 bg-cream/[0.06] p-5 backdrop-blur-md transition-all duration-300 hover:border-gold-500/40 hover:bg-cream/[0.1]"
              >
                <span>
                  <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-400">
                    <MapPin size={12} /> Struttura {s.n}
                  </span>
                  <span className="font-display mt-1.5 block text-xl text-cream">{s.name}</span>
                  <span className="text-sm text-cream/55">{s.addr}</span>
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-45">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </Magnetic>
          ))}
        </motion.div>

        {/* Stat inline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-cream/70"
        >
          <span className="flex items-center gap-2 text-sm">
            <span className="font-display text-2xl text-gold-400">8</span> camere totali
          </span>
          <span className="h-4 w-px bg-cream/20" />
          <span className="flex items-center gap-2 text-sm">
            <span className="font-display text-2xl text-gold-400">500 m</span> dalla spiaggia
          </span>
          <span className="h-4 w-px bg-cream/20" />
          <span className="flex items-center gap-2 text-sm">
            <span className="font-display text-2xl text-gold-400">2</span> strutture indipendenti
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={reduce ? undefined : { opacity }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-11 w-7 items-start justify-center rounded-full border border-cream/25 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
