# Es Vedra & Via Romagna — camerepse.it

Sito vetrina delle due strutture **Es Vedra** (Via Po 13) e **Via Romagna 41** — staff housing a Porto Sant'Elpidio (FM), Marche.

Ricostruzione moderna del sito camerepse.it in stile UNVRS Labs: hero immersivo, animazioni scroll-triggered, galleria camere a scroll orizzontale, form di prenotazione con invio su WhatsApp/email.

## Stack

- **Next.js 16** (App Router, `output: export` → sito statico in `out/`)
- **Tailwind CSS 4**
- **Framer Motion** (animazioni, reveal, count-up, text-reveal)
- **Lenis** (smooth scroll)
- Font **Fraunces** (display) + **Inter** (testo)
- Palette "Adriatico elegante": petrolio mare, sabbia, crema, oro

## Pagine

- `/` — home
- `/es-vedra` — struttura 01 (Via Po 13)
- `/via-romagna` — struttura 02 (Via Romagna 41)
- `/prenota` — richiesta di prenotazione (WhatsApp / email)
- `/privacy` — privacy & cookie policy

## Sviluppo

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build statico

```bash
npm run build      # genera ./out (sito statico, drop-in per hosting)
npx serve out      # anteprima del build statico
```

## Contatti struttura

- WhatsApp: +39 328 783 2803
- Email: camerepse@gmail.com

## Da completare

- Dati legali del titolare nella pagina `/privacy` (ragione sociale, P.IVA/C.F., sede).
- Deploy in produzione.
