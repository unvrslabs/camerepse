"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Mail, Minus, Plus, Info, Building2, BedDouble, CalendarDays, Users } from "lucide-react";
import { site } from "@/lib/content";
import { Select } from "@/components/ui/select";

const STRUCTURES = {
  esvedra: {
    label: "Es Vedra · Via Po 13",
    options: ["Una camera matrimoniale", "Intera struttura (4 camere)"],
  },
  viaromagna: {
    label: "Via Romagna 41",
    options: ["Una camera doppia", "Intero appartamento (4 doppie)"],
  },
} as const;

type StructKey = keyof typeof STRUCTURES;

function fmtDate(v: string) {
  if (!v) return "—";
  const [y, m, d] = v.split("-");
  return `${d}/${m}/${y}`;
}

function Stepper({ label, value, set, min = 0 }: { label: string; value: number; set: (n: number) => void; min?: number }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-sea-700/15 bg-cream px-4 py-3">
      <span className="text-sea-700">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => set(Math.max(min, value - 1))}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-sea-700/20 text-sea-700 transition hover:bg-sea-700 hover:text-cream"
          aria-label={`Meno ${label}`}
        >
          <Minus size={15} />
        </button>
        <span className="w-6 text-center font-display text-lg text-sea-800">{value}</span>
        <button
          type="button"
          onClick={() => set(value + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-sea-700/20 text-sea-700 transition hover:bg-sea-700 hover:text-cream"
          aria-label={`Più ${label}`}
        >
          <Plus size={15} />
        </button>
      </div>
    </div>
  );
}

function FieldGroup({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="space-y-4">
      <legend className="mb-1 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-sea-600">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sea-700/8 text-gold-600">{icon}</span>
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export function BookingForm() {
  const [struct, setStruct] = useState<StructKey | "">("");
  const [option, setOption] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const nights = useMemo(() => {
    if (!checkin || !checkout) return 0;
    const n = Math.round((new Date(checkout).getTime() - new Date(checkin).getTime()) / 86400000);
    return n > 0 ? n : 0;
  }, [checkin, checkout]);

  const structLabel = struct ? STRUCTURES[struct].label : "—";
  const guestsLabel = `${adults} ${adults === 1 ? "adulto" : "adulti"}${
    children ? ` · ${children} ${children === 1 ? "bambino" : "bambini"}` : ""
  }`;

  const message = useMemo(() => {
    return [
      "Richiesta di prenotazione — Es Vedra & Via Romagna",
      "",
      `Struttura: ${structLabel}`,
      `Sistemazione: ${option || "—"}`,
      `Check-in: ${fmtDate(checkin)}`,
      `Check-out: ${fmtDate(checkout)}`,
      `Notti: ${nights || "—"}`,
      `Ospiti: ${guestsLabel}`,
      "",
      `Nome: ${name || "—"}`,
      `Telefono: ${phone || "—"}`,
      `Email: ${email || "—"}`,
      notes ? `Note: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }, [structLabel, option, checkin, checkout, nights, guestsLabel, name, phone, email, notes]);

  const waHref = `${site.whatsappHref}?text=${encodeURIComponent(message)}`;
  const mailHref = `${site.emailHref}?subject=${encodeURIComponent(
    "Richiesta prenotazione — Es Vedra & Via Romagna"
  )}&body=${encodeURIComponent(message)}`;

  const inputCls =
    "w-full rounded-xl border border-sea-700/15 bg-cream px-4 py-3.5 text-sea-800 outline-none transition placeholder:text-sea-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20";
  const labelCls = "mb-2 block text-sm font-medium text-sea-700";

  const summary = [
    { l: "Struttura", v: structLabel },
    { l: "Sistemazione", v: option || "—" },
    { l: "Check-in", v: fmtDate(checkin) },
    { l: "Check-out", v: fmtDate(checkout) },
    { l: "Notti", v: nights ? String(nights) : "—" },
    { l: "Ospiti", v: guestsLabel },
  ];

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
      {/* Form */}
      <div className="space-y-9 rounded-[2rem] border border-sea-700/12 bg-sand-100 p-6 md:p-10">
        <FieldGroup icon={<Building2 size={15} />} title="Struttura e sistemazione">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls}>Struttura</label>
              <Select
                value={struct}
                onChange={(v) => {
                  setStruct(v as StructKey);
                  setOption("");
                }}
                placeholder="— Seleziona la struttura —"
                icon={<Building2 size={16} />}
                options={[
                  { value: "esvedra", label: "Es Vedra · Via Po 13" },
                  { value: "viaromagna", label: "Via Romagna 41" },
                ]}
              />
            </div>
            <div>
              <label className={labelCls}>Sistemazione</label>
              <Select
                value={option}
                onChange={setOption}
                disabled={!struct}
                placeholder={struct ? "— Seleziona —" : "— Prima scegli la struttura —"}
                icon={<BedDouble size={16} />}
                options={struct ? STRUCTURES[struct].options.map((o) => ({ value: o, label: o })) : []}
              />
            </div>
          </div>
        </FieldGroup>

        <div className="rule-gold opacity-30" />

        <FieldGroup icon={<CalendarDays size={15} />} title="Date e ospiti">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls}>Check-in</label>
              <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Check-out</label>
              <input
                type="date"
                value={checkout}
                min={checkin || undefined}
                onChange={(e) => setCheckout(e.target.value)}
                className={inputCls}
              />
            </div>
            <Stepper label="Adulti" value={adults} set={setAdults} min={1} />
            <Stepper label="Bambini" value={children} set={setChildren} min={0} />
          </div>
        </FieldGroup>

        <div className="rule-gold opacity-30" />

        <FieldGroup icon={<Users size={15} />} title="I tuoi contatti">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelCls}>Nome e cognome</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="Mario Rossi" />
            </div>
            <div>
              <label className={labelCls}>Telefono</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} placeholder="+39 ..." />
            </div>
            <div>
              <label className={labelCls}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputCls}
                placeholder="tu@email.it"
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls}>Note (facoltative)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className={`${inputCls} resize-none`}
                placeholder="Numero di persone del team, periodo, esigenze particolari..."
              />
            </div>
          </div>
        </FieldGroup>
      </div>

      {/* Riepilogo sticky */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-[2rem] bg-sea-800 text-cream shadow-[0_30px_80px_-40px_rgba(10,44,52,0.6)]">
          <div className="border-b border-cream/10 p-7">
            <h3 className="font-display text-2xl">Riepilogo</h3>
            <p className="mt-1 text-sm text-cream/60">La richiesta arriva a {site.contactName}.</p>
          </div>
          <dl className="divide-y divide-cream/10 px-7">
            {summary.map((it) => (
              <div key={it.l} className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-sm text-cream/55">{it.l}</dt>
                <dd className="text-right text-sm font-medium text-cream">{it.v}</dd>
              </div>
            ))}
          </dl>
          <div className="space-y-3 p-7">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-wa px-6 py-3.5 font-medium text-white transition hover:brightness-105"
            >
              <MessageCircle size={18} /> Invia richiesta su WhatsApp
            </a>
            <a
              href={mailHref}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 font-medium text-cream transition hover:bg-cream/10"
            >
              <Mail size={18} /> Invia per email
            </a>
          </div>
        </div>
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-sea-700/12 bg-sand-100 p-5 text-sm text-sea-700/80">
          <Info size={18} className="mt-0.5 shrink-0 text-gold-600" />
          <span>
            È una <strong className="font-semibold text-sea-800">richiesta di prenotazione</strong>: ti confermiamo
            noi disponibilità e prezzo. Nessun pagamento online richiesto.
          </span>
        </div>
      </div>
    </div>
  );
}
