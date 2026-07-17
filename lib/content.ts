// Contenuti Es Vedra & Via Romagna — testi originali del sito camerepse.it

export const site = {
  name: "Es Vedra & Via Romagna",
  tagline: "Staff Housing · Porto Sant'Elpidio",
  year: "2026",
  description:
    "Due alloggi indipendenti a pochi passi dal centro di Porto Sant'Elpidio e dall'Adriatico. Camere pronte all'uso, pensate per team, professionisti e aziende in cerca di una sistemazione di qualità.",
  whatsapp: "+39 328 783 2803",
  whatsappHref: "https://wa.me/393287832803",
  email: "camerepse@gmail.com",
  emailHref: "mailto:camerepse@gmail.com",
  contactName: "Giacomo",
  location: "Porto Sant'Elpidio (FM) · Marche",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Es Vedra", href: "/es-vedra" },
  { label: "Via Romagna", href: "/via-romagna" },
  { label: "Prenota", href: "/prenota" },
];

export const structures = {
  esvedra: {
    id: "esvedra",
    n: "01",
    name: "Es Vedra",
    addr: "Via Po 13",
    fullAddr: "Via Po 13 · 63821 Porto Sant'Elpidio (FM), Marche",
    maps: "https://www.google.com/maps/search/?api=1&query=Via+Po+13+Porto+Sant'Elpidio",
    kind: "Affittacamere raccolto e curato",
    hero: "/img/esvedra_facciata.jpg",
    cover: "/img/room4.jpg",
    href: "/es-vedra",
    tagline:
      "Un affittacamere ordinato e luminoso a un minuto dal centro di Porto Sant'Elpidio. Quattro camere, ciascuna con bagno privato, e una cucina condivisa che tiene insieme la casa. Affitto mensile per singola camera o per l'intera struttura.",
    stats: [
      { v: "4", l: "Camere matrimoniali" },
      { v: "4", l: "Bagni privati" },
      { v: "1", l: "Cucina condivisa" },
      { v: "500 m", l: "Dalla spiaggia" },
    ],
    highlights: [
      "Ogni camera con bagno privato, A/C e riscaldamento",
      "Cucina condivisa attrezzata di ~15 m² con zona pranzo",
      "A 500–600 m dalla spiaggia, in zona tranquilla",
    ],
  },
  viaromagna: {
    id: "viaromagna",
    n: "02",
    name: "Via Romagna",
    addr: "civ. 41",
    fullAddr: "Via Romagna 41 · 63821 Porto Sant'Elpidio (FM), Marche",
    maps: "https://www.google.com/maps/search/?api=1&query=Via+Romagna+41+Porto+Sant'Elpidio",
    kind: "Appartamento condiviso ristrutturato",
    hero: "/img/vr_camino.jpg",
    cover: "/img/vr_camino.jpg",
    href: "/via-romagna",
    tagline:
      "Un appartamento condiviso recentemente ristrutturato, con quattro camere doppie e ampi spazi comuni. Pronto all'uso, ideale per ospitare un intero team a due passi dal centro di Porto Sant'Elpidio.",
    stats: [
      { v: "~130 m²", l: "Superficie" },
      { v: "4", l: "Camere doppie" },
      { v: "3", l: "Bagni" },
      { v: "1", l: "Cucina condivisa" },
    ],
    highlights: [
      "Appartamento condiviso con 4 camere doppie da ~15 m²",
      "Due camere con bagno privato, docce walk-in",
      "Interamente ristrutturato, cucina e zona pranzo condivise",
    ],
  },
};

export const localita = {
  title: "Porto Sant'Elpidio",
  paras: [
    "Cittadina costiera in provincia di Fermo, nel cuore delle Marche, Porto Sant'Elpidio si affaccia sul Mar Adriatico con lunghe spiagge sabbiose e un lungomare alberato più volte premiato con la Bandiera Blu per la qualità delle acque e dei servizi.",
    "È uno dei centri del celebre distretto calzaturiero fermano: un territorio vivo, fatto di aziende della moda e della manifattura, dove ristoranti, hotel e imprese hanno spesso bisogno di alloggi curati per il proprio personale — ed è esattamente ciò che offrono le nostre due strutture.",
    "La posizione è comoda e ben collegata: stazione ferroviaria sulla linea adriatica, casello A14 nelle immediate vicinanze e a breve distanza da Fermo, Civitanova Marche e l'aeroporto di Ancona.",
  ],
  facts: [
    { t: "Adriatico", d: "Spiagge sabbiose e lungomare" },
    { t: "Bandiera Blu", d: "Qualità di acque e servizi" },
    { t: "Distretto calzaturiero", d: "Tessuto di aziende e attività" },
    { t: "A14 + Stazione FS", d: "Collegamenti comodi e rapidi" },
  ],
};

export const targets = [
  {
    k: "R",
    t: "Ristoranti & hotel",
    d: "Alloggio comodo per personale di sala, cucina e reception durante la stagione.",
  },
  {
    k: "S",
    t: "Scuole & formazione",
    d: "Sistemazione per docenti, tirocinanti e staff, a un passo dal centro.",
  },
  {
    k: "A",
    t: "Aziende & team",
    d: "Camere singole o interi immobili per ospitare squadre di lavoro in trasferta.",
  },
];

export const compare = {
  cols: ["Es Vedra · Via Po 13", "Via Romagna · civ. 41"],
  rows: [
    ["Tipologia", "Affittacamere, unità unica", "Appartamento condiviso ristrutturato"],
    ["Superficie", "4 camere + cucina condivisa", "~130 m²"],
    ["Camere", "4 matrimoniali (10–16 m²)", "4 doppie (~15 m²)"],
    ["Bagni", "4 privati (uno per camera)", "2 privati + 1 comune"],
    ["Cucina", "Condivisa ~15 m² con zona pranzo", "Condivisa con zona pranzo"],
    ["Ingresso autonomo", "Sì — Camera 1 indipendente", "Unico appartamento condiviso"],
    ["Spiaggia", "500–600 m", "Zona centrale, vicino alla costa"],
    ["Ideale per", "Singoli e piccoli team", "Team più numerosi, gruppi 3–4"],
    ["Affitto", "Mensile · camera o intera struttura", "Mensile · soggiorni brevi su accordo"],
  ],
};

export const availability = {
  eyebrow: "Disponibilità · 2026",
  title: "Pronte per il vostro team.",
  text: "Affitto mensile per entrambe le strutture; soggiorni più brevi possono essere valutati previo accordo con il proprietario. Per visite e informazioni, contattateci.",
};

// ---- Es Vedra — dettaglio camere ----
export const esvedraRooms = [
  {
    tag: "Camera 1 · ~10 m²",
    name: "Ingresso indipendente",
    d: "Camera con accesso autonomo, ideale per chi cerca riservatezza. Compatta e funzionale, con tutto l'essenziale a portata di mano.",
    img: "/img/room1.jpg",
    feats: ["Ingresso indipendente", "Letto matrimoniale", "Armadio", "Bagno privato", "A/C", "Riscaldamento"],
  },
  {
    tag: "Camera 2 · ~10 m²",
    name: "Doppia luminosa",
    d: "Buona luce naturale e una scrivania per chi lavora da casa. Bagno privato con doccia e TV in camera.",
    img: "/img/room2.jpg",
    feats: ["Letto matrimoniale", "Scrivania", "TV", "Bagno privato · doccia", "Ottima luce"],
  },
  {
    tag: "Camera 3 · ~14 m²",
    name: "Doppia spaziosa",
    d: "Più ampia e arieggiata, con soffitto alto e un armadio a specchio che amplifica la luce. Bagno privato con doccia.",
    img: "/img/room3.jpg",
    feats: ["Letto matrimoniale", "Armadio a specchio", "Soffitto alto", "Bagno privato · doccia"],
  },
  {
    tag: "Camera 4 · la più ampia · ~16 m²",
    name: "La camera dalla parete blu",
    d: "La più grande della casa, riconoscibile dalla caratteristica parete blu. Zona notte e angolo lavoro completo, con TV e bagno privato.",
    img: "/img/room4.jpg",
    feats: ["Parete blu caratteristica", "Letto matrimoniale", "Armadio", "Scrivania", "TV", "Bagno privato · doccia"],
  },
];

export const esvedraGallery = [
  { img: "/img/g1.jpg", cap: "Camera 4 · parete blu" },
  { img: "/img/g2.jpg", cap: "Camera 4 · dettagli" },
  { img: "/img/g3.jpg", cap: "Doppia · arredi" },
  { img: "/img/g4.jpg", cap: "Doppia luminosa" },
];

export const esvedraBaths = ["/img/bano1.jpg", "/img/bano2.jpg", "/img/bano3.jpg", "/img/bano4.jpg"];

// ---- Via Romagna — dettaglio camere ----
export const vrRooms = [
  {
    tag: "Stanza Camino · ~15 m²",
    name: "Doppia con camino",
    d: "Camera doppia caratterizzata dalla parete in mattoni e dal camino, per un carattere caldo e riconoscibile.",
    img: "/img/vr_camino.jpg",
    feats: ["Letto matrimoniale", "Parete in mattoni", "Camino"],
  },
  {
    tag: "Balcone Sin · ~15 m²",
    name: "Doppia con balcone",
    d: "Luminosa e affacciata sul balcone, con parquet e ampio armadio. Tra le camere con bagno privato.",
    img: "/img/vr_balconesin.jpg",
    feats: ["Letto matrimoniale", "Balcone", "Parquet", "Bagno privato"],
  },
  {
    tag: "Doppia Sin · ~15 m²",
    name: "Doppia con angolo studio",
    d: "Camera doppia con scrivania e buona ventilazione, pensata anche per chi lavora in stanza.",
    img: "/img/vr_doppiasin.jpg",
    feats: ["Letto matrimoniale", "Scrivania", "Bagno in comune"],
  },
  {
    tag: "Balcone Bagno · ~15 m²",
    name: "Doppia con balcone e bagno",
    d: "Camera con affaccio e accesso comodo ai servizi, arredata con armadio a specchio.",
    img: "/img/vr_balconebagno.jpg",
    feats: ["Letto matrimoniale", "Balcone", "Armadio a specchio"],
  },
];

// Galleria orizzontale in home — un tour tra le due strutture
export const homeGallery = [
  { img: "/img/room4.jpg", struct: "Es Vedra", cap: "Camera dalla parete blu", n: "01" },
  { img: "/img/vr_camino.jpg", struct: "Via Romagna", cap: "Doppia con camino", n: "02" },
  { img: "/img/room3.jpg", struct: "Es Vedra", cap: "Doppia spaziosa", n: "03" },
  { img: "/img/vr_balconesin.jpg", struct: "Via Romagna", cap: "Doppia con balcone", n: "04" },
  { img: "/img/room2.jpg", struct: "Es Vedra", cap: "Doppia luminosa", n: "05" },
  { img: "/img/vr_cucina.jpg", struct: "Via Romagna", cap: "Cucina condivisa", n: "06" },
  { img: "/img/bano1.jpg", struct: "Es Vedra", cap: "Bagno privato · walk-in", n: "07" },
  { img: "/img/vr_pranzo.jpg", struct: "Via Romagna", cap: "Zona pranzo", n: "08" },
  { img: "/img/room1.jpg", struct: "Es Vedra", cap: "Ingresso indipendente", n: "09" },
  { img: "/img/vr_bath1.jpg", struct: "Via Romagna", cap: "Bagno · doccia walk-in", n: "10" },
];

// Striscia foto continua (marquee)
export const marqueeShots = [
  "/img/room4.jpg", "/img/vr_camino.jpg", "/img/g1.jpg", "/img/vr_pranzo.jpg",
  "/img/room3.jpg", "/img/bano2.jpg", "/img/vr_balconesin.jpg", "/img/g3.jpg",
  "/img/vr_cucina.jpg", "/img/room2.jpg", "/img/vr_bath2.jpg", "/img/bano4.jpg",
];

// Numeri chiave (count-up)
export const homeStats = [
  { to: 2, suffix: "", l: "Strutture indipendenti" },
  { to: 8, suffix: "", l: "Camere totali" },
  { to: 500, suffix: " m", l: "Dalla spiaggia" },
  { to: 1, suffix: " min", l: "A piedi dal centro" },
];

export const vrGallery = [
  { img: "/img/vr_cucina.jpg", cap: "Cucina condivisa" },
  { img: "/img/vr_pranzo.jpg", cap: "Zona pranzo" },
  { img: "/img/vr_bath1.jpg", cap: "Bagno · doccia walk-in" },
  { img: "/img/vr_bath2.jpg", cap: "Bagno privato" },
  { img: "/img/vr_bath3.jpg", cap: "Bagno · finiture recenti" },
];
