import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { site, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sea-950 text-cream">
      <div className="grain absolute inset-0" />
      <div className="mesh-sea absolute inset-0 opacity-40" />
      <div className="container-x relative z-10 mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-ink">
                <span className="font-display">E</span>
              </span>
              <span className="font-display text-xl">Es Vedra &amp; Via Romagna</span>
            </div>
            <p className="mt-5 max-w-sm text-cream/60 text-pretty">
              Staff Housing {site.year}. Due strutture curate a Porto Sant&apos;Elpidio, a due passi dal centro e dall&apos;Adriatico.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm text-white transition hover:brightness-105"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-sm text-cream transition hover:bg-cream/10"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-gold-400">Naviga</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-cream/70 transition hover:text-cream">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-gold-400">Contatti</h4>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>
                  Es Vedra · Via Po 13<br />
                  Via Romagna 41<br />
                  63821 Porto Sant&apos;Elpidio (FM)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="shrink-0 text-gold-400" />
                <a href={site.whatsappHref} className="transition hover:text-cream">
                  {site.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold-400" />
                <a href={site.emailHref} className="transition hover:text-cream">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-gold mt-14 opacity-40" />
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-cream/45 md:flex-row">
          <span>© {site.year} Es Vedra &amp; Via Romagna — Staff Housing</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition hover:text-cream">
              Privacy &amp; Cookie
            </Link>
            <span className="hidden md:inline">Porto Sant&apos;Elpidio · Adriatico · Marche</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
