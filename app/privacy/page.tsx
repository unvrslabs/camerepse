import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { site } from "@/lib/content";
import { Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy",
  description:
    "Informativa sul trattamento dei dati personali e sull'uso dei cookie del sito Es Vedra & Via Romagna, Porto Sant'Elpidio.",
  robots: { index: true, follow: true },
};

const updated = "17 luglio 2026";

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="border-t border-sea-700/10 py-9">
        <div className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-8">
          <span className="font-display text-2xl text-gold-500">{n}</span>
          <div>
            <h2 className="font-display text-2xl text-sea-800 md:text-3xl">{title}</h2>
            <div className="mt-4 space-y-4 text-sea-700/80 leading-relaxed text-pretty">{children}</div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-sea-950 pb-16 pt-36 md:pt-44">
        <div className="grain absolute inset-0" />
        <div className="mesh-sea absolute inset-0 opacity-50" />
        <div className="container-x relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-1.5 text-sm text-cream/60">
            <Link href="/" className="transition hover:text-cream">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gold-400">Privacy & Cookie</span>
          </nav>
          <Eyebrow light>Informativa</Eyebrow>
          <h1 className="font-display mt-5 text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02] tracking-tight text-cream">
            <span className="title-grad">Privacy & Cookie Policy</span>
          </h1>
          <p className="mt-5 flex items-center gap-2 text-sm text-cream/60">
            <ShieldCheck size={16} className="text-gold-400" /> Ultimo aggiornamento: {updated}
          </p>
        </div>
      </section>

      {/* Contenuto */}
      <section className="relative bg-cream py-16 md:py-24">
        <div className="container-x mx-auto max-w-4xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-sea-700/85 text-pretty">
              Questa informativa descrive come vengono trattati i dati personali di chi visita il sito e
              contatta le strutture <strong className="text-sea-800">Es Vedra</strong> (Via Po 13) e{" "}
              <strong className="text-sea-800">Via Romagna 41</strong> a Porto Sant&apos;Elpidio (FM), ai sensi del
              Regolamento (UE) 2016/679 (GDPR).
            </p>
          </Reveal>

          <Block n="01" title="Titolare del trattamento">
            <p>
              Titolare del trattamento è la gestione delle strutture Es Vedra &amp; Via Romagna, con sede a
              Porto Sant&apos;Elpidio (FM), Via Po 13 e Via Romagna 41.
            </p>
            <p className="rounded-xl border border-gold-500/30 bg-gold-300/10 px-4 py-3 text-sm text-sea-700">
              Dati legali completi (ragione sociale, P.IVA/C.F., sede legale): da inserire a cura del titolare.
            </p>
            <ul className="space-y-1">
              <li>
                Email:{" "}
                <a href={site.emailHref} className="font-medium text-gold-600 hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a href={site.whatsappHref} className="font-medium text-gold-600 hover:underline">
                  {site.whatsapp}
                </a>
              </li>
            </ul>
          </Block>

          <Block n="02" title="Dati raccolti">
            <p>Il sito raccoglie dati personali solo quando li fornisci volontariamente:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong className="text-sea-800">Modulo di prenotazione</strong>: nome e cognome, telefono, email,
                struttura e date scelte, numero di ospiti ed eventuali note.
              </li>
              <li>
                <strong className="text-sea-800">Contatti diretti</strong>: i dati che scegli di comunicare
                scrivendoci su WhatsApp o via email.
              </li>
            </ul>
            <p>
              Il sito è statico e non dispone di un server proprio che memorizza i dati: le informazioni del modulo
              vengono usate solo per comporre il messaggio che invii tu stesso tramite WhatsApp o email.
            </p>
          </Block>

          <Block n="03" title="Finalità e base giuridica">
            <p>
              I dati sono trattati per rispondere alle richieste di informazioni e di prenotazione, gestire la
              disponibilità e fornire il servizio richiesto. La base giuridica è l&apos;esecuzione di misure
              precontrattuali e contrattuali su tua richiesta (art. 6.1.b GDPR) e, dove applicabile, il tuo consenso
              (art. 6.1.a GDPR).
            </p>
          </Block>

          <Block n="04" title="Servizi di terze parti">
            <p>
              I contatti avvengono tramite <strong className="text-sea-800">WhatsApp</strong> (Meta Platforms) e{" "}
              <strong className="text-sea-800">email</strong>. Inviando un messaggio tramite questi canali, i tuoi
              dati sono trattati anche secondo le rispettive informative privacy. Il sito è ospitato su un
              provider di hosting che può registrare log tecnici (es. indirizzo IP) per finalità di sicurezza e
              funzionamento.
            </p>
          </Block>

          <Block n="05" title="Conservazione">
            <p>
              I dati comunicati per una richiesta vengono conservati per il tempo necessario a gestirla e ad
              adempiere agli obblighi di legge, per poi essere cancellati o resi anonimi.
            </p>
          </Block>

          <Block n="06" title="Cookie e tecnologie simili">
            <p>Questo sito utilizza esclusivamente strumenti tecnici:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong className="text-sea-800">Cookie/localStorage tecnici</strong>: memorizzano la tua scelta sul
                banner cookie, così da non riproporlo ad ogni visita.
              </li>
              <li>
                <strong className="text-sea-800">Funzionamento del sito</strong>: preferenze tecniche necessarie a
                una corretta navigazione (es. smooth scroll).
              </li>
            </ul>
            <p>
              Non vengono utilizzati cookie di profilazione, pubblicitari o di analisi statistica di terze parti.
              Puoi in ogni momento cancellare i dati salvati dal sito dalle impostazioni del tuo browser.
            </p>
          </Block>

          <Block n="07" title="I tuoi diritti">
            <p>
              Puoi esercitare in qualsiasi momento i diritti previsti dagli artt. 15-22 del GDPR: accesso, rettifica,
              cancellazione, limitazione, opposizione e portabilità dei dati, oltre alla revoca del consenso.
            </p>
            <p>
              Per esercitarli scrivi a{" "}
              <a href={site.emailHref} className="font-medium text-gold-600 hover:underline">
                {site.email}
              </a>
              . Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali
              (www.garanteprivacy.it).
            </p>
          </Block>

          <Reveal>
            <div className="mt-12 rounded-3xl border border-sea-700/12 bg-sand-100 p-8 text-center">
              <p className="text-sea-700/80">Hai domande sul trattamento dei tuoi dati?</p>
              <a
                href={site.emailHref}
                className="mt-3 inline-block font-display text-xl text-sea-800 underline decoration-gold-500/40 underline-offset-4 hover:decoration-gold-500"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 text-center">
              <Link href="/" className="text-sm font-medium text-sea-600 transition hover:text-gold-600">
                ← Torna alla home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
