"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function CountUp({
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  className,
  repeat = false,
  decimals = 0,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  repeat?: boolean;
  decimals?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: !repeat, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      if (repeat) setValue(0);
      return;
    }
    if (reduce) {
      setValue(to);
      return;
    }
    let raf: number;
    const factor = 10 ** decimals;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to * factor) / factor);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce, repeat, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("it-IT", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}
