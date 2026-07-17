"use client";

import { motion, useReducedMotion } from "framer-motion";
import { compare } from "@/lib/content";

export function Comparison() {
  const reduce = useReducedMotion();
  return (
    <div className="overflow-hidden rounded-3xl border border-sea-700/12 bg-cream shadow-[0_30px_80px_-40px_rgba(10,44,52,0.35)]">
      {/* Header */}
      <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-sea-800 text-cream">
        <div className="p-5 md:p-6" />
        {compare.cols.map((c, i) => (
          <div key={c} className={`p-5 md:p-6 ${i === 0 ? "border-x border-cream/10" : ""}`}>
            <span className="font-display text-base leading-tight md:text-lg">{c}</span>
          </div>
        ))}
      </div>
      {/* Rows */}
      {compare.rows.map((row, ri) => (
        <motion.div
          key={row[0]}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: ri * 0.04, ease: [0.16, 1, 0.3, 1] }}
          className={`grid grid-cols-[1.1fr_1fr_1fr] text-sm ${
            ri % 2 ? "bg-sand-100" : "bg-cream"
          }`}
        >
          <div className="p-4 font-medium text-sea-700 md:p-5">{row[0]}</div>
          <div className="border-x border-sea-700/8 p-4 text-sea-800/80 md:p-5">{row[1]}</div>
          <div className="p-4 text-sea-800/80 md:p-5">{row[2]}</div>
        </motion.div>
      ))}
    </div>
  );
}
