import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`eyebrow inline-flex items-center gap-3 ${light ? "text-gold-400" : "text-sea-500"}`}>
      <span className={`h-px w-8 ${light ? "bg-gold-500/70" : "bg-sea-400/60"}`} />
      {children}
    </span>
  );
}

type BtnProps = {
  children: ReactNode;
  href: string;
  variant?: "gold" | "sea" | "outline" | "wa" | "ghost-light";
  external?: boolean;
  className?: string;
};

export function Button({ children, href, variant = "gold", external, className = "" }: BtnProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 will-change-transform";
  const styles: Record<string, string> = {
    gold: "bg-gold-500 text-ink hover:bg-gold-400 shadow-[0_10px_30px_-10px_rgba(199,154,75,0.7)]",
    sea: "bg-sea-700 text-cream hover:bg-sea-600 shadow-[0_10px_30px_-12px_rgba(13,59,69,0.8)]",
    outline: "border border-sea-700/25 text-sea-700 hover:border-sea-700/60 hover:bg-sea-700/5",
    wa: "bg-wa text-white hover:brightness-105 shadow-[0_10px_30px_-12px_rgba(37,211,102,0.7)]",
    "ghost-light": "border border-cream/25 text-cream hover:bg-cream/10",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  const inner = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;
  return (
    <Magnetic>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {inner}
        </Link>
      )}
    </Magnetic>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  const titleCls = `font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl ${
    light ? "text-cream" : "text-sea-800"
  }`;
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      {typeof title === "string" ? (
        <TextReveal text={title} className={titleCls} />
      ) : (
        <h2 className={titleCls}>{title}</h2>
      )}
      {intro && (
        <p className={`mt-6 text-lg leading-relaxed text-pretty ${light ? "text-cream/70" : "text-sea-700/75"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
