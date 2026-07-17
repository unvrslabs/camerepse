import { MessageCircle, Mail } from "lucide-react";
import { availability, site, structures } from "@/lib/content";
import { Eyebrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";

export function AvailabilityCta() {
  const info = [
    { l: "Struttura 01", v: "Es Vedra · Via Po 13" },
    { l: "Struttura 02", v: "Via Romagna 41" },
    { l: "Località", v: "Porto Sant'Elpidio (FM)" },
    { l: "Formula", v: "Affitto mensile" },
    { l: "WhatsApp", v: site.whatsapp },
    { l: "Email", v: site.email },
  ];

  return (
    <section id="disponibilita" className="relative overflow-hidden bg-sea-900 py-24 text-cream md:py-32">
      <div className="grain absolute inset-0" />
      <div className="mesh-sea absolute inset-0 opacity-60" />
      <div
        className="absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, rgba(199,154,75,0.5), transparent 65%)" }}
      />
      <div className="container-x relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Eyebrow light>{availability.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-6xl">
                <span className="title-grad">{availability.title}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70 text-pretty">
                {availability.text}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href={site.whatsappHref} external variant="wa">
                  <MessageCircle size={17} /> Scrivi su WhatsApp
                </Button>
                <Button href={site.emailHref} external variant="ghost-light">
                  <Mail size={17} /> Scrivi una email
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-2">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.35rem]">
                {info.map((it) => (
                  <div key={it.l} className="bg-sea-950/40 p-5">
                    <dt className="eyebrow text-gold-400/90">{it.l}</dt>
                    <dd className="mt-2 text-sm text-cream md:text-base">{it.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export { structures };
