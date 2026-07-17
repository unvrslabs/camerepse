"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  crumb,
  eyebrow,
  title,
  intro,
  image,
  stats,
}: {
  crumb: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  image: string;
  stats: { v: string; l: string }[];
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);

  return (
    <section ref={ref} className="relative min-h-[92svh] overflow-hidden bg-sea-950">
      <motion.div style={reduce ? undefined : { y, scale }} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover opacity-65" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-sea-950/80 via-sea-950/55 to-sea-950" />
      <div className="mesh-sea absolute inset-0 opacity-40 mix-blend-soft-light" />
      <div className="grain absolute inset-0" />

      <div className="container-x relative z-10 mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end pb-16 pt-32">
        <motion.nav
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center gap-1.5 text-sm text-cream/60"
        >
          <Link href="/" className="transition hover:text-cream">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-gold-400">{crumb}</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
          className="eyebrow mt-6 text-gold-400"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
          className="font-display mt-4 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] tracking-tight text-cream"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75 text-pretty"
        >
          {intro}
        </motion.p>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/12 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.l} className="bg-cream/[0.05] p-5 backdrop-blur-sm">
              <dt className="font-display text-3xl text-gold-400">{s.v}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-cream/60">{s.l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
