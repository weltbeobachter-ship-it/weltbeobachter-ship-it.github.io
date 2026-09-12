const newsItems = [
  {
    id: "us-inflation-august-2026-fed-zinsentscheid",
    url: "/wirtschaft/us-inflation-august-2026-fed-zinsentscheid",
    category: "Wirtschaft",
    title: "US-Inflation bleibt bei 3,4 Prozent – Fed-Entscheidung noch offen",
    summary:
      "Die Verbraucherpreise stiegen im August um 0,4 Prozent. Benzin war der wichtigste Treiber; welchen Zinsschritt die Fed wählt, ist noch nicht entschieden.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/us-inflation-august-2026-gasoline-editorial.webp",
    imageAlt: "Unbeschriftete Zapfsäule mit Zapfpistole, Münzen und Kassenbon an einer leeren Tankstelle",
    featured: true,
    status: "Verifiziert",
    publishedAt: "12.09.2026",
    readTime: "7 Min.",
    verified: "4 Quellen geprüft"
  },
  {
    id: "rwe-masdar-adnoc-deutschland-2026",
    url: "/energie/rwe-masdar-adnoc-wind-lng-deutschland-2026",
    category: "Energie",
    title: "RWE und VAE-Partner planen Wind- und LNG-Geschäfte – Verträge noch offen",
    summary:
      "RWE und Masdar prüfen Gebote für deutsche Offshore-Windauktionen 2027. Mit ADNOC sollen bis zu zwei LNG-Verträge entstehen; alle Kerndetails sind noch offen.",
    tone: "energy",
    glyph: "↯",
    image: "/assets/prinzessin-elisabeth-energieinsel-nordsee.webp",
    imageAlt: "Sechs Offshore-Windräder stehen vor bewölktem Himmel in der belgischen Nordsee",
    featured: true,
    status: "Verifiziert",
    publishedAt: "12.09.2026",
    readTime: "8 Min.",
    verified: "4 Nachrichtenquellen geprüft"
  },
  {
    id: "openai-chatgpt-financial-services-2026",
    url: "/technologie/openai-chatgpt-financial-services-banken-2026",
    category: "Technologie",
    title: "ChatGPT für Finanzdienste startet – Zugang zunächst nur für Institute",
    summary:
      "OpenAI bündelt GPT-6 Astra, Finanzdaten und Kontrollfunktionen in einem Branchenprodukt. Preise, deutsche Kunden und unabhängige Praxisergebnisse bleiben offen.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/chatgpt-finanzdienstleistungen-ki-infrastruktur-2026.webp",
    imageAlt: "Leerer Arbeitsplatz mit geschlossenem Laptop, ausgeschaltetem Bildschirm und Serverracks im Hintergrund",
    featured: true,
    status: "Verifiziert",
    publishedAt: "11.09.2026",
    readTime: "8 Min.",
    verified: "4 Quellen geprüft"
  },
  {
    id: "august-2026-waermster-august-copernicus",
    url: "/klima/august-2026-waermster-august-weltweit-1-65-grad",
    category: "Klima",
    title: "Europas Rekordsommer: UN-Klimachef warnt vor Kosten- und Energierisiken",
    summary:
      "Copernicus belegt den Rekordsommer in Westeuropa. Simon Stiell warnt vor wirtschaftlichen Folgen; die Schätzung von 180 Milliarden Euro ist keine Schadensbilanz.",
    tone: "climate",
    glyph: "≈",
    image: "/assets/august-2026-rhein-niedrigwasser-oberwesel.webp",
    imageAlt: "Niedrigwasser am Rhein bei Oberwesel mit breiten freiliegenden Sandbänken und zwei Frachtschiffen",
    featured: true,
    status: "Aktualisiert",
    dateLabel: "Aktualisiert",
    publishedAt: "11.09.2026",
    readTime: "10 Min.",
    verified: "7 Quellen geprüft"
  },
  {
    id: "eurozone-inflation-august-2026",
    url: "/wirtschaft/eurozone-inflation-3-3-prozent-august-2026",
    category: "Wirtschaft",
    title: "EZB erhöht Leitzins: Einlagensatz steigt auf 2,5 Prozent",
    summary:
      "Der EZB-Rat hebt alle drei Leitzinsen um 25 Basispunkte an. Die neuen Sätze gelten ab 16. September; weitere Schritte sind nicht beschlossen.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/eurozone-inflation-august-2026-editorial.webp",
    imageAlt: "Illustration einer Europakarte mit Münzen, Heizkörper, Glühbirne und ansteigender Energiekostenlinie",
    featured: true,
    status: "Aktualisiert",
    dateLabel: "Aktualisiert",
    publishedAt: "11.09.2026",
    readTime: "8 Min.",
    verified: "6 Quellen geprüft"
  },
  {
    id: "nasa-ibm-lunar-foundation-model-2026",
    url: "/wissenschaft/nasa-ibm-offenes-ki-modell-mondkarten-2026",
    category: "Wissenschaft",
    title: "NASA und IBM veröffentlichen offenes KI-Modell für Mondkarten",
    summary:
      "Das Lunar Foundation Model bündelt elf Arten von Beobachtungsdaten für Krater, Eis-Hinweise und Vulkanstrukturen. Für operative Landeentscheidungen ist es nicht validiert.",
    tone: "science",
    glyph: "◎",
    image: "/assets/wissenschaft-nasa-ibm-mond-ki-modell-2026.webp",
    imageAlt: "Fotorealistische redaktionelle Illustration einer kraterreichen Mondlandschaft mit dezentem Datennetz",
    featured: true,
    status: "Verifiziert",
    publishedAt: "11.09.2026",
    readTime: "8 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "wasserstoff-investitionen-global-2026",
    url: "/wirtschaft/wasserstoff-investitionen-130-milliarden-dollar-2026",
    category: "Wirtschaft",
    title: "Sauberer Wasserstoff: Zugesagte Investitionen erreichen 130 Milliarden Dollar",
    summary:
      "Ein Branchenbericht zählt 579 fest zugesagte Projekte und 6,9 Millionen Tonnen Jahreskapazität. Hohe Kosten, fehlende Abnehmer und offene EU-Umsetzung bremsen den Markt weiter.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/globaler-wasserstoffmarkt-elektrolyseur-2026.webp",
    imageAlt: "Geöffnetes industrielles Zwei-Megawatt-Elektrolyseurmodul mit sichtbaren Zellstapeln in einer Werkhalle",
    featured: true,
    status: "Verifiziert",
    publishedAt: "10.09.2026",
    readTime: "8 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "google-finnland-ki-infrastruktur-atomstrom-2026",
    url: "/energie/google-finnland-13-milliarden-ki-rechenzentren-atomstrom-2026",
    category: "Energie",
    title: "Google plant 13 Milliarden Euro für Finnland – Atomstrom soll KI-Rechenzentren absichern",
    summary:
      "Google will 2027 und 2028 in Rechenzentren und Energieinfrastruktur investieren. Ein 22-Jahres-Vertrag bindet bis zu 50 Prozent der Leistung von Loviisa; neue Kapazitäten bleiben offen.",
    tone: "energy",
    glyph: "↯",
    image: "/assets/google-finnland-loviisa-kernkraftwerk.webp",
    imageAlt: "Das Kernkraftwerk Loviisa mit zwei Reaktorgebäuden am bewaldeten Ufer des Finnischen Meerbusens",
    featured: true,
    status: "Verifiziert",
    publishedAt: "10.09.2026",
    readTime: "8 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "apple-event-september-2026",
    url: "/technologie/apple-event-9-september-2026-iphone",
    category: "Technologie",
    title: "iPhone Duo vorgestellt: Falt-iPhone kostet in Deutschland ab 2.299 Euro",
    summary:
      "Apples erstes faltbares iPhone startet in Deutschland am 23. Oktober. Bestätigt sind Preis, Displays und A20 Pro; Alltagshaltbarkeit und deutsche Siri-AI bleiben offen.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/apple-iphone-duo-steve-jobs-theater.webp",
    imageAlt: "Das gläserne Steve Jobs Theater im Apple Park hinter einer trockenen Wiese",
    featured: true,
    status: "Aktualisiert",
    dateLabel: "Aktualisiert",
    publishedAt: "10.09.2026",
    readTime: "8 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "gasspeicher-deutschland-august-2026",
    url: "/wirtschaft/gasspeicher-deutschland-52-prozent-august-2026",
    category: "Energie",
    title: "Gasspeicher bei knapp 55 Prozent – Regierung sieht keinen Eingriffsbedarf",
    summary:
      "Die Reserven liegen auf einem historischen Tief für Anfang September. Für einen durchschnittlichen Winter hält die Regierung Speicher und Importe dennoch für ausreichend.",
    tone: "energy",
    glyph: "↯",
    image: "/assets/gasspeicher-deutschland-empelde.webp",
    imageAlt: "Oberirdische Rohrleitungen und Armaturen des Erdgasspeichers Empelde bei Hannover",
    featured: true,
    status: "Aktualisiert",
    dateLabel: "Aktualisiert",
    publishedAt: "09.09.2026",
    readTime: "8 Min.",
    verified: "6 Quellen geprüft"
  },
  {
    id: "meta-muse-ki-agent-2026",
    url: "/technologie/meta-muse-ki-agent-usa-whatsapp-2026",
    category: "Technologie",
    title: "Meta startet KI-Agenten Muse in den USA – Europa-Termin offen",
    summary:
      "Muse soll E-Mails senden, Reisen buchen und Einkäufe ausführen. Meta verspricht Schutzmechanismen; unabhängige Berichte zeigen zugleich offene Sicherheitsfragen.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/meta-muse-ki-agent-serverracks.webp",
    imageAlt: "Beleuchtete Serverracks in einem Computerraum des NOIRLab in Tucson",
    featured: true,
    status: "Verifiziert",
    publishedAt: "09.09.2026",
    readTime: "8 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "deutsche-exporte-juli-2026",
    url: "/wirtschaft/deutsche-exporte-juli-2026-usa-china",
    category: "Wirtschaft",
    title: "Deutsche Exporte sinken im Juli – starke Unterschiede bei USA und China",
    summary:
      "Die Ausfuhren gaben zum Vormonat um 0,8 Prozent nach. Das kräftige US-Plus traf auf deutliche Rückgänge im Geschäft mit China und Großbritannien.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/deutsche-exporte-hamburg-containerterminal.webp",
    imageAlt: "Containerbrücken und Frachtschiffe am Terminal Tollerort im Hamburger Hafen",
    featured: true,
    status: "Verifiziert",
    publishedAt: "09.09.2026",
    readTime: "7 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "eib-prinzessin-elisabeth-energieinsel-2026",
    url: "/energie/eib-1-milliarde-euro-prinzessin-elisabeth-energieinsel-2026",
    category: "Energie",
    title: "EIB stellt 1 Milliarde Euro für Belgiens Energieinsel bereit",
    summary:
      "Der Kredit finanziert Hochspannungstechnik und Netzanbindung. Die ersten neuen Windparks sind ab 2031 vorgesehen; mehrere Zeit- und Kostenfragen bleiben offen.",
    tone: "energy",
    glyph: "↯",
    image: "/assets/prinzessin-elisabeth-energieinsel-nordsee.webp",
    imageAlt: "Sechs Offshore-Windräder im belgischen Teil der Nordsee",
    featured: true,
    status: "Verifiziert",
    publishedAt: "09.09.2026",
    readTime: "7 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "mistral-series-d-2026",
    url: "/technologie/mistral-3-milliarden-euro-bewertung-21-milliarden-2026",
    category: "Technologie",
    title: "Mistral sammelt 3 Milliarden Euro ein – Bewertung steigt auf mehr als 21 Milliarden",
    summary:
      "Samsung führt Europas bislang größte private Tech-Finanzierungsrunde an. Das Geld soll vor allem in KI-Forschung, Rechenleistung und Expansion fließen.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/mistral-ki-rechenzentrum-server.webp",
    imageAlt: "Nahaufnahme beleuchteter Serverracks in einem Rechenzentrum",
    featured: true,
    status: "Verifiziert",
    publishedAt: "08.09.2026",
    readTime: "8 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "japan-bip-zweites-quartal-2026",
    url: "/wirtschaft/japan-bip-zweites-quartal-1-4-prozent-2026",
    category: "Wirtschaft",
    title: "Japans BIP wächst um 0,4 Prozent – Jahresrate auf 1,4 Prozent revidiert",
    summary:
      "Die zweite Schätzung fällt etwas stärker aus als die erste. Unternehmensinvestitionen wurden nach oben korrigiert, der private Konsum stagnierte.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/japan-wirtschaft-yokohama-hafen.webp",
    imageAlt: "Blick über Containeranlagen im Hafen von Yokohama auf die Yokohama Bay Bridge",
    featured: true,
    status: "Verifiziert",
    publishedAt: "08.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "cathay-google-ki-kondensstreifen-2026",
    url: "/klima/cathay-google-ki-kondensstreifen-vermeidung-2026",
    category: "Klima",
    title: "Cathay und Google testen KI gegen Kondensstreifen – Klimanutzen noch offen",
    summary:
      "Mehr als 80 Flüge folgten bisher Ausweichrouten. Die gemeldeten 40 Prozent weniger Kondensstreifen-Erwärmung sind eine Google-Schätzung, kein unabhängiger Endnachweis.",
    tone: "climate",
    glyph: "≈",
    image: "/assets/kondensstreifen-nordsee-envisat.webp",
    imageAlt: "Envisat-Satellitenaufnahme der Nordsee mit zahlreichen Kondensstreifen zwischen England, Belgien und den Niederlanden",
    featured: true,
    status: "Verifiziert",
    publishedAt: "08.09.2026",
    readTime: "8 Min.",
    verified: "6 Quellen geprüft"
  },
  {
    id: "terrapower-natrium-grossbritannien-2034",
    url: "/energie/terrapower-natrium-reaktor-grossbritannien-2034",
    category: "Energie",
    title: "TerraPower peilt Atomstrom in Großbritannien ab 2034 an – Standort offen",
    summary:
      "Der Natrium-Reaktor durchläuft die britische Designprüfung. Warum 2034 bislang ein Unternehmensziel und noch kein genehmigter Starttermin ist.",
    tone: "energy",
    glyph: "↯",
    image: "/assets/terrapower-natrium-grossbritannien-2034-editorial.webp",
    imageAlt: "Konzeptionelle Küstenlandschaft mit einem kompakten Energietechnik-Komplex, Stromleitungen und Windrädern",
    featured: true,
    status: "Verifiziert",
    publishedAt: "08.09.2026",
    readTime: "8 Min.",
    verified: "4 Quellen geprüft"
  },
  {
    id: "deutsche-industrieproduktion-juli-2026",
    url: "/wirtschaft/deutsche-industrieproduktion-juli-2026-auto-minus",
    category: "Wirtschaft",
    title: "Deutsche Industrieproduktion fällt im Juli um 1,1 Prozent",
    summary:
      "Deutschlands Produktion sank im Juli 2026 um 1,1 Prozent. Die Autoindustrie zog den Index nach unten, während Energie und Bau zulegten.",
    tone: "economy",
    glyph: "◴",
    image: "/assets/deutsche-industrieproduktion-juli-2026-editorial.webp",
    imageAlt: "Konzeptionelle Illustration einer leeren Autofabrik mit fallender Industrielinie sowie Windkraft- und Solaranlagen",
    featured: true,
    status: "Verifiziert",
    publishedAt: "07.09.2026",
    readTime: "7 Min.",
    verified: "3 Quellen geprüft"
  },
  {
    id: "europa-ernten-frueher-2026",
    url: "/klima/europa-ernten-reifen-frueher-klimawandel-2026",
    category: "Klima",
    title: "Europas Feldfrüchte reifen früher – was für Deutschland belegt ist",
    summary:
      "Weizen, Raps und Mais erreichten 2026 in Teilen Europas früher die Reife. Für Deutschland gibt es aktuelle Beobachtungen, aber noch keinen vollständigen nationalen Vergleich.",
    tone: "climate",
    glyph: "≈",
    image: "/assets/europa-ernten-frueher-2026-editorial.webp",
    imageAlt: "Illustration europäischer Felder mit früheren Entwicklungsstadien von Weizen, Raps und Mais",
    featured: true,
    status: "Verifiziert",
    publishedAt: "07.09.2026",
    readTime: "7 Min.",
    verified: "6 Quellen geprüft"
  },
  {
    id: "taiwan-eu-chip-dialog-2026",
    url: "/technologie/taiwan-eu-chip-dialog-semicon-investitionen-2026",
    category: "Technologie",
    title: "Taiwan und EU vertiefen Chip-Dialog – neue Investitionen bleiben offen",
    summary:
      "Europa und Taiwan sprechen enger über KI-Chips und Rechenzentren. Ein neuer Fabrikstandort oder eine konkrete Investitionssumme wurde noch nicht vereinbart.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/taiwan-eu-chip-dialog-2026-editorial.webp",
    imageAlt: "Illustration eines Siliziumwafers und vernetzter Halbleiterstandorte zwischen Taiwan und Europa",
    featured: true,
    status: "Verifiziert",
    publishedAt: "07.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "ifa-2026-berlin-ki-robotik-china",
    url: "/technologie/ifa-2026-berlin-ki-roboter-china",
    category: "Technologie",
    title: "IFA 2026 in Berlin: KI, Roboter und Chinas wachsende Präsenz",
    summary:
      "Die Berliner Technikmesse setzt auf KI und Robotik. Zugleich kommt fast jeder zweite Aussteller aus China – doch viele Vorführungen sind noch kein Beleg für Marktreife.",
    tone: "technology",
    glyph: "◇",
    image: "/assets/ifa-2026-berlin-ki-robotik-editorial.webp",
    imageAlt: "Illustration einer menschenleeren Berliner Technikmesse mit vernetzten Geräten und Robotik",
    featured: true,
    status: "Verifiziert",
    publishedAt: "05.09.2026",
    readTime: "7 Min.",
    verified: "5 Quellen geprüft"
  },
  {
    id: "un-equal-earth-weltkarte-2026",
    url: "/wissenschaft/un-equal-earth-weltkarte-afrika-mercator-2026",
    category: "Wissenschaft",
    title: "UN unterstützt Equal Earth: Was die Weltkarten-Resolution wirklich ändert",
    summary:
      "164 Staaten stimmen für flächentreuere Weltkarten. Die Resolution empfiehlt Equal Earth, verbietet Mercator aber nicht.",
    tone: "science",
    glyph: "○",
    image: "/assets/un-equal-earth-weltkarte-2026-editorial.webp",
    imageAlt: "Illustration zweier Weltkartenprojektionen mit unterschiedlich dargestellten Kontinentflächen",
    featured: true,
    status: "Verifiziert",
    publishedAt: "05.09.2026",
    readTime: "7 Min.",
    verified: "6 Quellen geprüft"
  },
  {
    id: "eu-klimaanpassungsfonds-spanien-2026",
    url: "/klima/eu-klimaanpassungsfonds-spanien-verbindliche-ziele-2026",
    category: "Klima",
    title: "Spanien fordert EU-Klimaanpassungsfonds und verbindliche Resilienzziele",
    summary:
      "Madrid schlägt einen EU-Fonds, regelmäßige Risikoanalysen und verbindliche Anpassungsziele vor. Beschlossen ist davon noch nichts.",
    tone: "climate",
    glyph: "≈",
    image: "/assets/eu-klimaanpassungsfonds-spanien-2026-editorial.webp",
    imageAlt: "Illustration einer Europakarte mit hervorgehobenem Spanien, Schutzbogen, Infrastruktur, Dürre und Starkregen",
    featured: true,
    status: "Verifiziert",
    publishedAt: "05.09.2026",
    readTime: "7 Min.",
    verified: "4 Quellen geprüft"
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
