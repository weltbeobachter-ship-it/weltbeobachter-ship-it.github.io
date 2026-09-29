#!/usr/bin/env python3
"""Publish one transparent German sources monitor per day.

The publisher does not invent facts or rewrite article bodies with a language
model. It groups current Google News RSS entries by topic, requires at least
two distinct publishers for every included topic, and publishes the source
comparison with publisher and RSS links. Sensitive and breaking-news
categories remain excluded from this unattended workflow.
"""
from __future__ import annotations

import argparse
import datetime as dt
import email.utils
import hashlib
import html
import json
import os
import re
import sys
import unicodedata
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parents[1]
BASE = "https://weltbeobachter-ship-it.github.io"
TZ = ZoneInfo("Europe/Berlin")
STATE = ROOT / "data" / "auto-publish-state.json"
APP = ROOT / "assets" / "app.js"
SITEMAP = ROOT / "sitemap.xml"
NEWSMAP = ROOT / "news-sitemap.xml"
IMAGE = "/assets/hero-world-observatory.webp"
IMAGE_ALT = "Redaktionelle Weltkarte mit Lichtpunkten als Symbol für den täglichen Quellenvergleich"

QUERIES = (
    ("Wirtschaft", "Wirtschaft Deutschland Unternehmen Konjunktur Energie -Sport -Promi -Krieg -Wahl"),
    ("Technologie", "Technologie KI Forschung Raumfahrt Deutschland Europa -Sport -Promi -Krieg -Wahl"),
    ("Klima", "Klima Energie Wetter Forschung Deutschland Europa -Sport -Promi -Krieg -Wahl"),
    ("Wissenschaft", "Wissenschaft Forschung Universität Deutschland Europa -Sport -Promi -Krieg -Wahl"),
)

# Topics that require human editorial review rather than unattended grouping.
SENSITIVE = (
    "wahl", "partei", "regierungskrise", "krieg", "angriff", "rakete", "militär",
    "terror", "tod", "tote", "getötet", "mord", "polizei", "gericht", "haft",
    "medizin", "krankheit", "impfung", "kind", "minderjähr", "missbrauch",
)

STOP = {
    "aber", "alle", "auch", "auf", "aus", "bei", "bis", "das", "dem", "den",
    "der", "des", "die", "durch", "ein", "eine", "einem", "einen", "einer",
    "eines", "für", "gegen", "hat", "im", "in", "ist", "mit", "nach", "neue",
    "neuen", "neuer", "neues", "nicht", "oder", "sich", "sind", "über", "und",
    "vom", "von", "vor", "was", "wegen", "werden", "wie", "wird", "zur", "zum",
}

MONTHS = (
    "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August",
    "September", "Oktober", "November", "Dezember",
)


def now_berlin() -> dt.datetime:
    override = os.environ.get("AUTO_PUBLISH_NOW")
    if override:
        parsed = dt.datetime.fromisoformat(override)
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=TZ)
        return parsed.astimezone(TZ)
    return dt.datetime.now(TZ)


def fetch(url: str) -> bytes:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "WeltbeobachterSourcesMonitor/2.0 (+https://weltbeobachter-ship-it.github.io/redaktionsgrundsaetze)"
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read()


def ascii_text(value: str) -> str:
    return unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode().lower()


def words(value: str) -> set[str]:
    return {
        word
        for word in re.findall(r"[a-z0-9]{4,}", ascii_text(value))
        if word not in STOP
    }


def clean_title(title: str, publisher: str) -> str:
    title = html.unescape(title).strip()
    suffix = f" - {publisher}" if publisher else ""
    if suffix and title.lower().endswith(suffix.lower()):
        title = title[: -len(suffix)]
    return re.sub(r"\s+", " ", title).strip(" -")


def fingerprint(title: str) -> str:
    return hashlib.sha1(" ".join(sorted(words(title))).encode()).hexdigest()[:16]


def parse_feed(category: str, query: str, now: dt.datetime) -> list[dict[str, object]]:
    params = urllib.parse.urlencode({"q": f"{query} when:1d", "hl": "de", "gl": "DE", "ceid": "DE:de"})
    root = ET.fromstring(fetch(f"https://news.google.com/rss/search?{params}"))
    results: list[dict[str, object]] = []

    for node in root.findall(".//item")[:30]:
        source_node = node.find("source")
        publisher = ((source_node.text if source_node is not None else "") or "").strip()
        source_url = ((source_node.attrib.get("url") if source_node is not None else "") or "").strip()
        raw_title = (node.findtext("title") or "").strip()
        link = (node.findtext("link") or "").strip()
        raw_date = (node.findtext("pubDate") or "").strip()
        if not publisher or not raw_title or not link:
            continue

        try:
            published = email.utils.parsedate_to_datetime(raw_date).astimezone(TZ)
        except (TypeError, ValueError):
            continue

        title = clean_title(raw_title, publisher)
        lowered = ascii_text(title)
        if now - published > dt.timedelta(hours=32):
            continue
        if any(term in lowered for term in SENSITIVE):
            continue
        if len(words(title)) < 3:
            continue

        results.append(
            {
                "category": category,
                "title": title,
                "publisher": publisher,
                "source_url": source_url,
                "link": link,
                "published": published,
            }
        )
    return results


def similarity(left: str, right: str) -> tuple[int, float]:
    a, b = words(left), words(right)
    shared = len(a & b)
    return shared, shared / max(1, min(len(a), len(b)))


def cluster_items(items: list[dict[str, object]]) -> list[list[dict[str, object]]]:
    groups: list[list[dict[str, object]]] = []
    for item in sorted(items, key=lambda row: row["published"], reverse=True):
        best_group = None
        best_score = 0.0
        for group in groups:
            if item["category"] != group[0]["category"]:
                continue
            shared, score = similarity(str(item["title"]), str(group[0]["title"]))
            if shared >= 2 and score >= 0.34 and score > best_score:
                best_group, best_score = group, score
        if best_group is None:
            groups.append([item])
        elif str(item["publisher"]).casefold() not in {
            str(existing["publisher"]).casefold() for existing in best_group
        }:
            best_group.append(item)

    valid = [group for group in groups if len({str(row["publisher"]).casefold() for row in group}) >= 2]
    valid.sort(
        key=lambda group: (
            len({str(row["publisher"]).casefold() for row in group}),
            max(row["published"] for row in group),
        ),
        reverse=True,
    )
    return valid


def escape(value: object) -> str:
    return html.escape(str(value), quote=True)


def format_date(value: dt.datetime) -> str:
    return f"{value.day}. {MONTHS[value.month - 1]} {value.year}"


def format_time(value: dt.datetime) -> str:
    return f"{format_date(value)}, {value:%H:%M} Uhr {value.tzname()}"


def load_state() -> dict[str, object]:
    try:
        data = json.loads(STATE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        data = {"published": []}
    if not isinstance(data.get("published"), list):
        data["published"] = []
    return data


def source_list(group: list[dict[str, object]]) -> str:
    names = list(dict.fromkeys(str(row["publisher"]) for row in group))
    if len(names) == 2:
        return f"{names[0]} und {names[1]}"
    return ", ".join(names[:-1]) + f" und {names[-1]}"


def build_topic(group: list[dict[str, object]], number: int) -> str:
    lead = group[0]
    sources = "\n".join(
        f'<li><a href="{escape(row["source_url"])}" target="_blank" rel="noopener noreferrer external"><strong>{escape(row["publisher"])}</strong> ↗</a>: {escape(row["title"])} '
        f'(<a href="{escape(row["link"])}" target="_blank" rel="noopener noreferrer external">Meldung im Google-News-RSS öffnen ↗</a>)</li>'
        for row in group[:4]
    )
    return f"""
        <section aria-labelledby="topic-{number}">
          <p class="eyebrow dark"><span></span> {escape(lead['category']).upper()}</p>
          <h2 id="topic-{number}">{escape(lead['title'])}</h2>
          <p>Zu diesem Kernvorgang liegen innerhalb des geprüften Zeitfensters übereinstimmende aktuelle Meldungen von {escape(source_list(group))} vor. Der Quellenmonitor bestätigt damit die Mehrfachberichterstattung; weitergehende Details werden nicht aus Überschriften abgeleitet.</p>
          <h3>Meldungslinks und Herausgeber</h3>
          <ol>{sources}</ol>
        </section>"""


def article_html(groups: list[list[dict[str, object]]], now: dt.datetime, url: str, title: str, summary: str) -> str:
    topic_html = "\n".join(build_topic(group, index) for index, group in enumerate(groups, 1))
    source_count = len({str(row["publisher"]).casefold() for group in groups for row in group})
    data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "NewsArticle",
                "@id": f"{url}#article",
                "mainEntityOfPage": {"@type": "WebPage", "@id": url},
                "headline": title,
                "description": summary,
                "datePublished": now.isoformat(timespec="seconds"),
                "dateModified": now.isoformat(timespec="seconds"),
                "inLanguage": "de-DE",
                "image": {"@type": "ImageObject", "url": BASE + IMAGE},
                "author": {"@type": "Organization", "name": "Redaktion Weltbeobachter", "url": BASE + "/"},
                "publisher": {
                    "@type": "Organization",
                    "name": "Weltbeobachter",
                    "url": BASE + "/",
                    "logo": {"@type": "ImageObject", "url": BASE + "/assets/weltbeobachter-icon.png"},
                },
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Weltbeobachter", "item": BASE + "/"},
                    {"@type": "ListItem", "position": 2, "name": title, "item": url},
                ],
            },
        ],
    }
    return f"""<!doctype html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="{escape(summary)}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta name="theme-color" content="#0a1923" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Weltbeobachter" />
    <meta property="og:title" content="{escape(title)}" />
    <meta property="og:description" content="{escape(summary)}" />
    <meta property="og:url" content="{escape(url)}" />
    <meta property="og:image" content="{escape(BASE + IMAGE)}" />
    <meta property="og:image:alt" content="{escape(IMAGE_ALT)}" />
    <meta property="article:published_time" content="{now.isoformat(timespec='seconds')}" />
    <link rel="canonical" href="{escape(url)}" />
    <title>{escape(title)} | Weltbeobachter</title>
    <link rel="stylesheet" href="/assets/styles.css" />
    <meta name="google-adsense-account" content="ca-pub-5363022928370906" />
    <script type="application/ld+json">{json.dumps(data, ensure_ascii=False)}</script>
  </head>
  <body>
    <a class="skip-link" href="#main-content">Zum Inhalt springen</a>
    <header class="legal-header"><div class="shell legal-nav"><a class="brand" href="/" aria-label="Weltbeobachter – Startseite"><span class="brand-mark" aria-hidden="true"><i></i></span><span class="brand-copy"><strong>Weltbeobachter</strong></span></a><a class="legal-back" href="/#latest">← Alle Nachrichten</a></div></header>
    <main class="article-main shell" id="main-content"><article>
      <header class="article-header">
        <p class="eyebrow dark"><span></span> QUELLENMONITOR</p>
        <div class="article-status-row"><strong>Mehrfach belegt</strong><span>{source_count} getrennte Herausgeber verglichen</span></div>
        <h1>{escape(title)}</h1>
        <p class="article-deck">{escape(summary)}</p>
        <div class="article-byline"><span>Redaktion Weltbeobachter</span><span>Veröffentlicht: {escape(format_time(now))}</span><span>Prüfzeitraum: letzte 32 Stunden</span></div>
      </header>
      <figure class="article-hero-figure"><img src="{IMAGE}" alt="{escape(IMAGE_ALT)}" width="1536" height="1024" /><figcaption><strong>Redaktionelle Symbolillustration:</strong> Die KI-generierte Weltkarte zeigt kein tatsächliches Ereignis. Quelle: Weltbeobachter/OpenAI; eigenes Werk des Betreibers.</figcaption></figure>
      <div class="article-content">
        <p><strong>Was dieser Überblick leistet:</strong> Der automatische Quellenmonitor bündelt ausschließlich Themen, über die mindestens zwei getrennte Nachrichtenherausgeber aktuell berichten. Er erstellt keine erfundenen Ergänzungen, übernimmt keine Meldung als alleinige Wahrheit und schließt sensible Themen aus der unbeaufsichtigten Veröffentlichung aus.</p>
        <p><strong>Was er nicht leistet:</strong> Eine Übereinstimmung mehrerer Überschriften ersetzt weder ein Primärdokument noch eine menschliche Vor-Ort-Recherche. Deshalb nennt jeder Abschnitt den Herausgeber und den im Google-News-RSS erfassten Meldungslink; weitergehende Details bleiben der Prüfung der Originalveröffentlichung vorbehalten.</p>
        {topic_html}
        <div class="article-fact-grid">
          <section><h2>Was bestätigt ist</h2><ul><li>Jedes aufgeführte Thema erscheint bei mindestens zwei getrennten Herausgebern.</li><li>Alle Meldungen stammen aus dem angegebenen 32-Stunden-Fenster.</li><li>Jeder Eintrag nennt den Herausgeber und den im RSS-Index erfassten Meldungslink.</li></ul></section>
          <section><h2>Was offen bleibt</h2><ul><li>Einzelheiten, die nur eine Quelle nennt.</li><li>Spätere Korrekturen oder Aktualisierungen der Herausgeber.</li><li>Primärdokumente, sofern sie in den Meldungen nicht direkt verlinkt sind.</li></ul></section>
        </div>
        <p>Mehr zum Verfahren: <a href="/redaktionsgrundsaetze">Redaktionsgrundsätze und Quellenregeln →</a></p>
        <aside class="article-correction-note"><strong>Korrektur oder neuer Hinweis?</strong><p>Schreiben Sie der Redaktion mit der betroffenen Aussage und einer überprüfbaren Quelle.</p><a href="/kontakt">Redaktion kontaktieren →</a></aside>
      </div>
    </article></main>
    <footer class="legal-footer"><div class="shell legal-footer-inner"><span>Weltbeobachter</span><nav aria-label="Rechtliche Navigation"><a href="/kontakt">Kontakt</a><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a><a href="/werbung">Werbung</a><a href="/redaktionsgrundsaetze">Redaktionsgrundsätze</a></nav></div></footer>
  </body>
</html>
"""


def update_app(item: dict[str, object]) -> None:
    text = APP.read_text(encoding="utf-8")
    marker = "const newsItems = ["
    if str(item["id"]) in text:
        raise RuntimeError("The daily item already exists in assets/app.js")
    payload = json.dumps(item, ensure_ascii=False, indent=2)
    APP.write_text(text.replace(marker, marker + "\n  " + payload.replace("\n", "\n  ") + ",", 1), encoding="utf-8")


def update_sitemap(url: str, day: dt.date) -> None:
    text = SITEMAP.read_text(encoding="utf-8")
    if url in text:
        return
    text = re.sub(
        rf"(<url><loc>{re.escape(BASE)}/</loc><lastmod>)[^<]+",
        rf"\g<1>{day.isoformat()}",
        text,
        count=1,
    )
    entry = f"  <url><loc>{escape(url)}</loc><lastmod>{day.isoformat()}</lastmod></url>\n"
    SITEMAP.write_text(text.replace("</urlset>", entry + "</urlset>"), encoding="utf-8")


def update_newsmap(url: str, title: str, now: dt.datetime) -> None:
    text = NEWSMAP.read_text(encoding="utf-8")
    if url in text:
        return
    entry = (
        f'<url><loc>{escape(url)}</loc><news:news><news:publication><news:name>Weltbeobachter</news:name>'
        f'<news:language>de</news:language></news:publication><news:publication_date>{now.isoformat(timespec="seconds")}'
        f'</news:publication_date><news:title>{escape(title)}</news:title></news:news></url>\n'
    )
    opening = re.search(r'(<urlset\b[^>]*>\n)', text)
    if not opening:
        raise RuntimeError("news-sitemap.xml has no urlset root element")
    NEWSMAP.write_text(
        text[: opening.end()] + entry + text[opening.end() :],
        encoding="utf-8",
    )


def validate_output(output: Path, url: str) -> None:
    document = output.read_text(encoding="utf-8")
    required = ("<h1>", "Meldungslinks", "Was bestätigt ist", "Was offen bleibt", "og:image", "application/ld+json")
    missing = [token for token in required if token not in document]
    if missing:
        raise RuntimeError(f"Incomplete article output: missing {', '.join(missing)}")
    if url not in SITEMAP.read_text(encoding="utf-8") or url not in NEWSMAP.read_text(encoding="utf-8"):
        raise RuntimeError("The article is missing from a sitemap")
    ET.parse(SITEMAP)
    ET.parse(NEWSMAP)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true", help="Select topics without modifying files")
    args = parser.parse_args()

    now = now_berlin()
    slug = f"quellenmonitor-{now:%Y-%m-%d}"
    output = ROOT / "welt" / slug / "index.html"
    if output.exists():
        print(f"Daily sources monitor already exists: {output.relative_to(ROOT)}")
        return 0

    items: list[dict[str, object]] = []
    for category, query in QUERIES:
        try:
            items.extend(parse_feed(category, query, now))
        except Exception as error:
            print(f"Feed error for {category}: {error}", file=sys.stderr)

    state = load_state()
    used = {str(row.get("fingerprint")) for row in state["published"] if isinstance(row, dict)}
    groups = [group for group in cluster_items(items) if fingerprint(str(group[0]["title"])) not in used][:3]
    if not groups:
        print("No topic passed the two-publisher and safety rules; nothing was published.")
        return 0

    if args.dry_run:
        print(json.dumps(groups, ensure_ascii=False, default=str, indent=2))
        return 0

    topic_label = "Thema" if len(groups) == 1 else "Themen"
    title = f"Quellenmonitor vom {format_date(now)}: {len(groups)} {topic_label} im Vergleich"
    source_count = len({str(row["publisher"]).casefold() for group in groups for row in group})
    summary = f"Aktuelle mehrfach berichtete Themen im transparenten Quellenvergleich – mit {source_count} getrennten Herausgebern, Meldungslinks und klaren Grenzen der automatischen Prüfung."
    url = f"{BASE}/welt/{slug}"

    output.parent.mkdir(parents=True, exist_ok=False)
    output.write_text(article_html(groups, now, url, title, summary), encoding="utf-8")
    update_app(
        {
            "id": slug,
            "url": f"/welt/{slug}",
            "category": "Welt",
            "title": title,
            "summary": summary,
            "tone": "world",
            "glyph": "◎",
            "image": IMAGE,
            "imageAlt": IMAGE_ALT,
            "featured": True,
            "status": "Quellenmonitor",
            "publishedAt": f"{now:%d.%m.%Y}",
            "readTime": f"{max(4, len(groups) * 2)} Min.",
            "verified": f"{source_count} Herausgeber verglichen",
        }
    )
    update_sitemap(url, now.date())
    update_newsmap(url, title, now)

    for group in groups:
        state["published"].append(
            {
                "time": now.isoformat(timespec="seconds"),
                "url": url,
                "title": str(group[0]["title"]),
                "fingerprint": fingerprint(str(group[0]["title"])),
                "kind": "daily-sources-monitor",
            }
        )
    state["published"] = state["published"][-300:]
    STATE.parent.mkdir(exist_ok=True)
    STATE.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    validate_output(output, url)
    print(f"Published {url} from {source_count} distinct publishers.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
