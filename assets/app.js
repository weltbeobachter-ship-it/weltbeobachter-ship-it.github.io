const newsItems = [
  {
    id: "foxconn-rekordumsatz-august-2026-ki-server",
    url: "/technologie/foxconn-rekordumsatz-august-2026-ki-server",
    category: "Technologie",
    title: "Foxconn meldet August-Rekord – KI-Server treiben Umsatz",
    summary:
      "Der Elektronikfertiger erreicht 921,8 Milliarden Taiwan-Dollar und erwartet ein starkes drittes Quartal. Was die Monatszahl noch nicht zeigt.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/foxconn-rekordumsatz-august-2026-editorial.webp",
    imageAlt: "Illustration einer menschenleeren Elektronikfertigung mit KI-Servern, Kühlleitungen und abstrakten Datenlinien",
    featured: true,
    status: "Verifiziert",
    publishedAt: "05.09.2026",
    readTime: "6 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "sydney-fruehlingshitze-brandgefahr-2026",
    url: "/klima/sydney-fruehlingshitze-extreme-brandgefahr-2026",
    category: "Klima",
    title: "Sydney: Totales Feuerverbot bei extremer Brandgefahr",
    summary:
      "Ungewöhnliche Frühlingshitze, trockene Luft und böiger Wind treiben die Feuergefahr im Großraum Sydney auf die zweithöchste Warnstufe.",
    tone: "climate",
    glyph: "☀",
    image: "/assets/sydney-fruehlingshitze-brandgefahr-2026-editorial.webp",
    imageAlt: "Illustration des Sydney Harbour bei heißem, windigem Frühlingswetter mit trockenem Buschland und abstraktem Warnsymbol",
    featured: true,
    status: "Verifiziert",
    publishedAt: "05.09.2026",
    readTime: "6 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "volkswagen-zukunftsplan-2030-2026",
    url: "/wirtschaft/volkswagen-zukunftsplan-2030-50000-stellen-werke",
    category: "Wirtschaft",
    title: "Volkswagen beschließt Zukunftsplan 2030 – rund 50.000 weitere Stellen betroffen",
    summary:
      "Der Aufsichtsrat stimmt dem Konzernumbau zu. Wo Stellen entfallen und was mit vier deutschen Werken geschieht, ist noch nicht entschieden.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/volkswagen-zukunftsplan-2030-editorial.webp",
    imageAlt: "Illustration einer menschenleeren Autofabrik mit Karosserien auf schmaler werdenden Produktionslinien",
    featured: true,
    status: "Verifiziert",
    publishedAt: "05.09.2026",
    readTime: "7 Min.",
    verified: "4 Quellen geprüft"
  },
  {
    id: "eu-aluminiumschrott-exportregeln-2026",
    url: "/energie/eu-abfallexporte-aluminiumschrott-nicht-oecd-2026",
    category: "Energie",
    title: "EU plant breiteres Exportverbot für Abfälle – Aluminiumschrott im Fokus",
    summary:
      "Ein delegierter Rechtsakt soll Abfallexporte in Nicht-OECD-Länder weiter begrenzen. Der genaue Umfang und mögliche Ausnahmen sind noch offen.",
    tone: "energy",
    glyph: "↯",
    image: "/assets/eu-aluminiumschrott-exportregeln-2026-editorial.webp",
    imageAlt: "Illustration von sortiertem Aluminiumschrott, Recyclingpfeilen, Europakarte und einer geschlossenen Schranke",
    featured: true,
    status: "Verifiziert",
    publishedAt: "04.09.2026",
    readTime: "7 Min.",
    verified: "4 Quellen geprüft"
  },
  {
    id: "ifo-wachstumsprognose-herbst-2026",
    url: "/wirtschaft/ifo-wachstumsprognose-deutschland-1-4-prozent-2026",
    category: "Wirtschaft",
    title: "ifo hebt Wachstumsprognose für Deutschland auf 1,4 Prozent an",
    summary:
      "Exporte und Staatsausgaben stützen die Konjunktur. Warum Inflation, Energiepreise, Investitionsschwäche und Staatsdefizit dennoch Risiken bleiben.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/ifo-konjunkturprognose-herbst-2026-editorial.webp",
    imageAlt: "Illustration einer Industrieanlage, Gütergleisen und Windrädern mit abstrakten Konjunkturlinien",
    featured: true,
    status: "Verifiziert",
    publishedAt: "04.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "nvidia-hugging-face-2026",
    url: "/technologie/nvidia-hugging-face-kauf-12-93-milliarden-2026",
    category: "Technologie",
    title: "Nvidia vereinbart Kauf von Hugging Face für 12,93 Milliarden Dollar",
    summary:
      "Hugging Face soll offen und hardwareunabhängig bleiben. Was bestätigt ist – und welche Fragen zu Abschluss, Neutralität und Kontrolle noch offen sind.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/nvidia-hugging-face-2026-editorial.webp",
    imageAlt: "Abstrakte Illustration eines KI-Chips, der mit modularen Modell-Repositorien verbunden ist",
    featured: true,
    status: "Verifiziert",
    publishedAt: "04.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "wmo-el-nino-2026",
    url: "/klima/wmo-el-nino-sehr-stark-bis-2027",
    category: "Klima",
    title: "WMO: El Niño wird sehr stark – Folgen bis 2027",
    summary:
      "Nahezu sicher ist das Fortbestehen bis Februar 2027, nicht ein bestimmtes Wetter in Deutschland. Messwerte und Wahrscheinlichkeiten im Überblick.",
    tone: "climate",
    glyph: "≈",
    image: "/assets/el-nino-wmo-2026-editorial.webp",
    imageAlt: "Illustration eines warmen Bandes im tropischen Pazifik mit symbolischen Regen- und Dürreszenen",
    featured: false,
    status: "Verifiziert",
    publishedAt: "04.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "wayve-uber-robotaxi-london-2026",
    url: "/technologie/wayve-uber-robotaxi-london-mit-fahrer-2026",
    category: "Technologie",
    title: "London: Robotaxi-Fahrten starten – noch mit Fahrer",
    summary:
      "Uber und Wayve bieten erstmals überwachte autonome Fahrten an. Ein lizenzierter Fahrer bleibt an Bord; eine Genehmigung für fahrerlosen Betrieb fehlt noch.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/london-wayve-robotaxi-2026-editorial.webp",
    imageAlt: "Illustration eines autonomen Elektroautos mit Sensorfeldern auf einer Londoner Straße",
    featured: false,
    status: "Verifiziert",
    publishedAt: "03.09.2026",
    readTime: "7 Min.",
    verified: "6 Quellen geprüft"
  },
  {
    id: "china-solarkapazitaet-kohle-2026",
    url: "/energie/china-solarkapazitaet-ueberholt-kohle-juli-2026",
    category: "Energie",
    title: "China: Solarkapazität überholt Kohle – Stromerzeugung noch nicht",
    summary:
      "Ende Juli lag Chinas installierte Solarleistung erstmals knapp über der Kohleleistung. Beim tatsächlich erzeugten Strom bleibt Kohle jedoch klar vorn.",
    tone: "energy",
    glyph: "↯",
    image: "/assets/china-solarkapazitaet-kohle-2026-editorial.webp",
    imageAlt: "Illustration eines Solarfelds mit Stromleitungen und konventionellem Kraftwerk im Hintergrund",
    featured: false,
    status: "Verifiziert",
    publishedAt: "03.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "lux-zeplin-dunkle-materie-2026",
    url: "/wissenschaft/lux-zeplin-signal-dunkle-materie-2-6-sigma-2026",
    category: "Wissenschaft",
    title: "LUX-ZEPLIN misst ungewöhnliches Ereignis – noch kein Nachweis",
    summary:
      "Ein einzelner Kernrückstoß passt zu bestimmten WIMP-Modellen. Mit 2,6 Sigma ist das Signal jedoch weit von einem Nachweis Dunkler Materie entfernt.",
    tone: "science",
    glyph: "✦",
    image: "/assets/lux-zeplin-dunkle-materie-2026-editorial.webp",
    imageAlt: "Illustration eines unterirdischen Flüssig-Xenon-Detektors mit einem einzelnen Lichtblitz",
    featured: false,
    status: "Verifiziert",
    publishedAt: "03.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "unep-klima-overshoot-2026",
    url: "/klima/unep-1-5-grad-overshoot-1-8-2026",
    category: "Klima",
    title: "UNEP: 1,5-Grad-Marke wird wohl bald überschritten",
    summary:
      "Selbst das günstigste Szenario erreicht zunächst etwa 1,8 Grad. Der neue UN-Bericht erklärt, warum Höhe und Dauer der Überschreitung entscheidend sind.",
    tone: "climate",
    glyph: "≈",
    image: "/assets/unep-klima-overshoot-2026-editorial.webp",
    imageAlt: "Illustration der Erde mit Temperaturkurve über einem Schwellenband sowie Ozean, Eis, Wald und Küste",
    featured: false,
    status: "Verifiziert",
    publishedAt: "03.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "apple-ceo-john-ternus-2026",
    url: "/technologie/apple-ceo-john-ternus-september-2026",
    category: "Technologie",
    title: "John Ternus übernimmt Apple-Führung von Tim Cook",
    summary:
      "Der bisherige Hardwarechef ist seit 1. September CEO. Tim Cook bleibt Executive Chairman, während Apples künftiger Kurs bei KI und Produkten offen ist.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/apple-ceo-ternus-2026-editorial.webp",
    imageAlt: "Illustration eines leeren Technologiebüros mit Geräten, Lichtstäben und abstraktem KI-Netzwerk",
    featured: false,
    status: "Verifiziert",
    publishedAt: "02.09.2026",
    readTime: "6 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "eurozone-inflation-august-2026",
    url: "/wirtschaft/eurozone-inflation-3-3-prozent-august-2026",
    category: "Wirtschaft",
    title: "Eurozonen-Inflation steigt auf 3,3 Prozent",
    summary:
      "Energie verteuerte sich im August deutlich. Die Kerninflation sank dagegen leicht, während die nächste Zinsentscheidung der EZB noch offen ist.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/eurozone-inflation-august-2026-editorial.webp",
    imageAlt: "Illustration einer Europakarte mit Münzen, Heizkörper, Glühbirne und ansteigender Energiekostenlinie",
    featured: false,
    status: "Verifiziert",
    publishedAt: "02.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "uk-rekordsommer-2026",
    url: "/klima/uk-rekordsommer-16-5-grad-2026",
    category: "Klima",
    title: "UK meldet mit 16,5 Grad den heißesten Sommer seit 1884",
    summary:
      "Das vorläufige Saisonmittel übertraf den Rekord von 2025. Eine Met-Office-Analyse schätzt, wie stark die menschengemachte Erwärmung die Wahrscheinlichkeit verändert hat.",
    tone: "climate",
    glyph: "☀",
    image: "/assets/uk-rekordsommer-2026-editorial.webp",
    imageAlt: "Illustration einer trockenen britischen Landschaft mit niedrigem Stausee und abstrakter Wärmekarte",
    featured: false,
    status: "Verifiziert",
    publishedAt: "02.09.2026",
    readTime: "6 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "europa-windkraft-h1-2026",
    url: "/energie/europa-windkraft-8-8-gigawatt-h1-2026",
    category: "Energie",
    title: "Europa installiert 8,8 Gigawatt neue Windkraft",
    summary:
      "Deutschland führte den europäischen Ausbau im ersten Halbjahr 2026 an. WindEurope erwartet ein Rekordjahr, doch Netze und Genehmigungen bleiben entscheidend.",
    tone: "energy",
    glyph: "↯",
    image: "/assets/europa-windkraft-h1-2026-editorial.webp",
    imageAlt: "Illustration von Windrädern an Land und auf See mit Stromleitungen in einer menschenleeren Küstenlandschaft",
    featured: false,
    status: "Verifiziert",
    publishedAt: "02.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "china-industrie-pmi-august-2026",
    url: "/wirtschaft/china-industrie-pmi-49-8-august-2026",
    category: "Wirtschaft",
    title: "Chinas Industrie-PMI steigt auf 49,8",
    summary:
      "Produktion und neue Aufträge haben sich im August erholt. Der Gesamtindex blieb jedoch knapp unter der Wachstumsschwelle, während Dienstleistungen schwach waren.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/china-pmi-industrie-august-2026-editorial.webp",
    imageAlt: "Illustration eines leeren Containerhafens und einer Industrieanlage mit abstrakter Konjunkturanzeige",
    featured: false,
    status: "Verifiziert",
    publishedAt: "31.08.2026",
    readTime: "6 Min.",
    verified: "4 Quellen geprüft"
  },
  {
    id: "roman-space-telescope-launch",
    url: "/wissenschaft/roman-weltraumteleskop-start-30-august-2026",
    category: "Wissenschaft",
    title: "Roman-Weltraumteleskop erfolgreich gestartet",
    summary:
      "Roman hat sich von der Falcon Heavy getrennt, Kontakt zur Erde hergestellt und seine Solarpaneele entfaltet. Nun beginnt die Reise zum Lagrange-Punkt L2.",
    tone: "science",
    glyph: "✦",
    image: "/assets/roman-launch-editorial.webp",
    imageAlt: "Illustration einer Schwerlastrakete auf einer leeren Startrampe und des Roman-Weltraumteleskops im All",
    featured: true,
    status: "Aktualisiert",
    publishedAt: "31.08.2026",
    dateLabel: "Aktualisiert",
    readTime: "6 Min.",
    verified: "6 Quellen geprüft"
  },
  {
    id: "hagelsturm-bodensee-august-2026",
    url: "/welt/hagelsturm-bodensee-orkanboeen-august-2026",
    category: "Welt",
    title: "Hagelstürme am Bodensee: Orkanböen bis 143 km/h",
    summary:
      "Eine schwere Gewitterfront zog von der Schweiz über den Bodensee. Behörden bestätigen große Gebäudeschäden; das gesamte Ausmaß ist noch offen.",
    tone: "climate",
    glyph: "↯",
    image: "/assets/hagelsturm-bodensee-editorial.webp",
    imageAlt: "Illustration einer Superzelle mit Hagel über einer leeren Straße am Bodensee",
    featured: false,
    status: "Verifiziert",
    publishedAt: "30.08.2026",
    readTime: "5 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "anthropic-model-hardware-standard-2026",
    url: "/technologie/anthropic-model-hardware-standard-laborgeraete-2026",
    category: "Technologie",
    title: "Anthropic testet Standard für KI-Steuerung von Laborgeräten",
    summary:
      "Der Model Hardware Standard soll KI-Agenten mit Mikroskopen, Robotarmen und anderen Geräten verbinden. Noch läuft eine begrenzte Forschungsvorschau.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/mhs-laborgeraete-editorial.webp",
    imageAlt: "Illustration vernetzter Laborgeräte mit Mikroskop, Sensoren und Roboterarm",
    featured: false,
    status: "Verifiziert",
    publishedAt: "30.08.2026",
    readTime: "5 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "robusta-kaffee-klimarisiko-2026",
    url: "/klima/robusta-kaffee-hitze-duerre-klimawandel-studie-2026",
    category: "Klima",
    title: "Robusta-Kaffee ist hitzefester, aber nicht automatisch klimaresistent",
    summary:
      "Eine neue Übersichtsarbeit warnt vor einer einfachen Rechnung: Robusta verträgt Wärme, bleibt aber von Wasser und teils intensiver Bewässerung abhängig.",
    tone: "climate",
    glyph: "◌",
    image: "/assets/robusta-kaffee-klimarisiko-editorial.webp",
    imageAlt: "Illustration eines Robusta-Kaffeezweigs zwischen feuchter Vegetation und trockenem Boden",
    featured: false,
    status: "Verifiziert",
    publishedAt: "30.08.2026",
    readTime: "5 Min.",
    verified: "4 Quellen geprüft"
  },
  {
    id: "gasspeicher-deutschland-august-2026",
    url: "/wirtschaft/gasspeicher-deutschland-52-prozent-august-2026",
    category: "Wirtschaft",
    title: "Deutsche Gasspeicher erreichen 52,25 Prozent",
    summary:
      "Die Speicher werden wieder schneller befüllt. Die Bundesnetzagentur bewertet die Versorgung aktuell als stabil, der weitere Aufbau bleibt wichtig.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/gasspeicher-deutschland-editorial.webp",
    imageAlt: "Illustration einer Gasspeicher-Infrastruktur bei Abendlicht",
    featured: false,
    status: "Verifiziert",
    publishedAt: "30.08.2026",
    readTime: "5 Min.",
    verified: "4 Quellen geprüft"
  },
  {
    id: "apple-event-september-2026",
    url: "/technologie/apple-event-9-september-2026-iphone",
    category: "Technologie",
    title: "Apple Event am 9. September: Termin bestätigt, Geräte noch offen",
    summary:
      "Der Livestream beginnt um 19 Uhr deutscher Zeit. Neue iPhones und ein mögliches Faltmodell werden erwartet, sind von Apple aber noch nicht bestätigt.",
    tone: "technology",
    glyph: "◇",
    featured: false,
    status: "Verifiziert",
    publishedAt: "29.08.2026",
    readTime: "4 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "ecb-central-bank-money-on-chain",
    url: "/wirtschaft/ezb-blockchain-zentralbankgeld-pontes-appia-2026",
    category: "Wirtschaft",
    title: "EZB-Direktorin wirbt für Zentralbankgeld auf Blockchain-Plattformen",
    summary:
      "Isabel Schnabel will Zentralbankreserven in tokenisierte Finanzsysteme bringen. Die EZB arbeitet an Pontes und Appia, die endgültige Architektur ist aber noch offen.",
    tone: "technology",
    glyph: "◇",
    featured: false,
    status: "Verifiziert",
    publishedAt: "29.08.2026",
    readTime: "5 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "global-ocean-temperature-record-2026",
    url: "/klima/weltmeere-rekordtemperatur-21-1-grad-august-2026",
    category: "Klima",
    title: "Copernicus meldet Rekord: Weltmeere erreichen 21,1 Grad",
    summary:
      "Die globale Meeresoberfläche außerhalb der Polarregionen war am 22. August so warm wie nie seit 1979. Auffällig ist auch der ungewöhnliche Zeitpunkt des Rekords.",
    tone: "climate",
    glyph: "≈",
    featured: false,
    status: "Verifiziert",
    publishedAt: "29.08.2026",
    readTime: "4 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "mtg-i2-weather-satellite-launch",
    url: "/wissenschaft/mtg-i2-wettersatellit-erfolgreich-gestartet",
    category: "Wissenschaft",
    title: "Europas neuer Wettersatellit MTG-I2 erfolgreich gestartet",
    summary:
      "Eine Ariane 6 hat MTG-I2 in eine Transferbahn gebracht. Der Satellit soll Wetterdiensten künftig häufigere Bilder über Europa und Nordafrika liefern.",
    tone: "science",
    glyph: "◉",
    featured: false,
    status: "Verifiziert",
    publishedAt: "28.08.2026",
    readTime: "4 Min.",
    verified: "3 Quellen geprüft"
  }
];

const grid = document.querySelector("#news-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#news-search");
const clearSearch = document.querySelector("#clear-search");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const navFilters = [...document.querySelectorAll("[data-nav-filter]")];
const menuButton = document.querySelector("#menu-button");
const primaryNav = document.querySelector("#primary-nav");

let activeFilter = "Alle";

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .trim();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[character];
  });
}

function safeLocalPath(value) {
  return typeof value === "string" && /^\/[a-z0-9][a-z0-9._\-/]*$/i.test(value) ? value : "/";
}

function cardTemplate(item, index) {
  const featuredClass = item.featured && index === 0 ? " featured" : "";
  const id = escapeHtml(item.id);
  const url = escapeHtml(safeLocalPath(item.url));
  const visual = item.image
    ? `<div class="card-visual card-visual-image" data-tone="${escapeHtml(item.tone)}">
        <img src="${escapeHtml(safeLocalPath(item.image))}" alt="${escapeHtml(item.imageAlt || "")}" loading="lazy" width="768" height="432" />
        <span class="visual-label">${escapeHtml(item.status)}</span>
      </div>`
    : `<div class="card-visual" data-tone="${escapeHtml(item.tone)}" aria-hidden="true">
        <span class="visual-label">${escapeHtml(item.status)}</span>
        <span class="visual-glyph">${escapeHtml(item.glyph)}</span>
      </div>`;

  return `
    <article class="news-card${featuredClass}" data-id="${id}">
      ${visual}
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${escapeHtml(item.category)}</span>
          <i aria-hidden="true"></i>
          <span>${escapeHtml(item.readTime)}</span>
          <i aria-hidden="true"></i>
          <span>${escapeHtml(item.dateLabel || "Veröffentlicht")} ${escapeHtml(item.publishedAt)}</span>
        </div>
        <h3><a href="${url}">${escapeHtml(item.title)}</a></h3>
        <p class="card-summary">${escapeHtml(item.summary)}</p>
        <div class="card-footer">
          <span class="confidence">${escapeHtml(item.verified)}</span>
          <a class="read-button" href="${url}">Artikel lesen</a>
        </div>
      </div>
    </article>
  `;
}

function renderNews() {
  const query = normalizeText(searchInput.value);
  const filtered = newsItems.filter((item) => {
    const matchesFilter = activeFilter === "Alle" || item.category === activeFilter;
    const haystack = normalizeText(`${item.category} ${item.title} ${item.summary}`);
    return matchesFilter && (!query || haystack.includes(query));
  });

  grid.innerHTML = filtered.map(cardTemplate).join("");
  emptyState.hidden = filtered.length > 0;
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderNews();
}

function closeMenu() {
  primaryNav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function updateDate() {
  const now = new Date();
  const formatted = new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Berlin"
  }).format(now);

  document.querySelector("#current-date").textContent = `${formatted} · Deutschland`;
  document.querySelector("#current-year").textContent = now.getFullYear();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

navFilters.forEach((link) => {
  link.addEventListener("click", () => {
    setFilter(link.dataset.navFilter);
    closeMenu();
  });
});

searchInput.addEventListener("input", renderNews);

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  setFilter("Alle");
  searchInput.focus();
});

menuButton.addEventListener("click", () => {
  const open = !primaryNav.classList.contains("is-open");
  primaryNav.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMenu();
});

updateDate();
renderNews();
