"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { nav, site } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const light = !scrolled; // navbar sopra hero scuro finché non si scrolla

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div className="container-x mx-auto max-w-7xl">
          <div
            className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
              scrolled
                ? "border border-sea-900/10 bg-cream/85 shadow-[0_8px_30px_-16px_rgba(7,30,36,0.4)] backdrop-blur-xl"
                : "bg-transparent"
            }`}
          >
            <Link href="/" className="group flex items-center gap-2.5">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors ${
                  light ? "bg-gold-500 text-ink" : "bg-sea-700 text-cream"
                }`}
              >
                <span className="font-display text-sm leading-none">E</span>
              </span>
              <span className="flex flex-col leading-none">
                <span
                  className={`font-display text-sm tracking-tight transition-colors ${
                    light ? "text-cream" : "text-sea-800"
                  }`}
                >
                  Es Vedra &amp; Via Romagna
                </span>
                <span
                  className={`mt-0.5 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                    light ? "text-gold-400" : "text-sea-500"
                  }`}
                >
                  Porto Sant&apos;Elpidio · Marche
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive(n.href)
                      ? light
                        ? "text-cream"
                        : "text-sea-800"
                      : light
                        ? "text-cream/70 hover:text-cream"
                        : "text-sea-600 hover:text-sea-800"
                  }`}
                >
                  {isActive(n.href) && (
                    <span
                      className={`absolute inset-0 -z-10 rounded-full ${
                        light ? "bg-cream/15" : "bg-sand-300/70"
                      }`}
                    />
                  )}
                  {n.label}
                </Link>
              ))}
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
                  light
                    ? "bg-gold-500 text-ink hover:bg-gold-400"
                    : "bg-sea-700 text-cream hover:bg-sea-600"
                }`}
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </nav>

            <button
              onClick={() => setOpen((v) => !v)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
                light ? "text-cream" : "text-sea-800"
              }`}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-sea-950/40" onClick={() => setOpen(false)} />
        <nav className="absolute inset-x-3 top-20 rounded-3xl bg-cream p-4 shadow-2xl">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`block rounded-2xl px-4 py-3.5 text-lg ${
                isActive(n.href) ? "bg-sand-300/70 text-sea-800" : "text-sea-700"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-wa px-4 py-3.5 text-lg text-white"
          >
            <MessageCircle size={18} /> Scrivi su WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
