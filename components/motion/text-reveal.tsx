"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Titolo che si rivela parola-per-parola con wipe verso l'alto (mask). */
export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag className={cn(className)}>
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: 0.4 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.18em] align-bottom -mb-[0.18em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "115%" },
                show: { y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
