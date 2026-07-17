"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

export type Option = { value: string; label: string };

export function Select({
  value,
  onChange,
  options,
  placeholder = "— Seleziona —",
  disabled = false,
  icon,
}: {
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-cream px-4 py-3.5 text-left outline-none transition ${
          disabled
            ? "cursor-not-allowed border-sea-700/10 opacity-50"
            : open
              ? "border-gold-500 ring-2 ring-gold-500/20"
              : "border-sea-700/15 hover:border-sea-700/35"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2.5 truncate">
          {icon && <span className="shrink-0 text-gold-600">{icon}</span>}
          <span className={selected ? "text-sea-800" : "text-sea-500"}>
            {selected ? selected.label : placeholder}
          </span>
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-sea-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-sea-700/12 bg-cream p-1.5 shadow-[0_20px_50px_-20px_rgba(10,44,52,0.5)]"
          >
            {options.map((o) => {
              const active = o.value === value;
              return (
                <li key={o.value}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(o.value);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between gap-3 rounded-lg px-3.5 py-3 text-left text-sm transition ${
                      active ? "bg-sea-700 text-cream" : "text-sea-700 hover:bg-sand-200"
                    }`}
                  >
                    <span>{o.label}</span>
                    {active && <Check size={16} className="text-gold-400" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
