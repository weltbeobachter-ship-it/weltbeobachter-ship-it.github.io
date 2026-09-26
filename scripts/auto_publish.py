#!/usr/bin/env python3
"""Legacy short-publisher safety interlock.

The former RSS-only flow cannot verify a specialist primary source or attach a
locally licensed editorial image. It must therefore never publish a standalone
card or article. Full releases are handled by the verified editorial pipeline.
"""
from __future__ import annotations
import datetime as dt, email.utils, hashlib, html, json, os, re, sys, unicodedata
import urllib.parse, urllib.request, xml.etree.ElementTree as ET
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT=Path(__file__).resolve().parents[1]
BASE='https://weltbeobachter-ship-it.github.io'
TZ=ZoneInfo('Europe/Berlin')
NOW=dt.datetime.now(TZ)
STATE=ROOT/'data'/'auto-publish-state.json'
APP=ROOT/'assets'/'app.js'
SITEMAP=ROOT/'sitemap.xml'
NEWSMAP=ROOT/'news-sitemap.xml'
MAX_DAY=6

QUERIES=[
 ('Wirtschaft','Wirtschaft Deutschland Unternehmen Konjunktur Energie -Wahl -Krieg'),
 ('Technologie','Technologie KI Raumfahrt Forschung Deutschland Europa -Wahl -Krieg'),
 ('Klima','Klima Energie Erneuerbare Forschung Europa Deutschland -Wahl -Krieg'),
]
SENSITIVE=('wahl','wähler','partei','regierung','minister','kanzler','präsident','krieg','angriff','rakete','militär','soldat','iran','ukraine','israel','gaza','tod','tot','gestorben','mord','polizei','gericht','strafe','gesundheit','krank','medizin','kind','minderjähr','vorwurf','betrug','skandal','terror')
STOP={'der','die','das','ein','eine','einer','eines','und','oder','mit','für','von','im','in','am','an','auf','zu','zur','zum','bei','nach','vor','aus','ist','sind','wird','werden','gegen','über','mehr','neue','neuer','neues'}

def fetch(url):
 req=urllib.request.Request(url,headers={'User-Agent':'WeltbeobachterBot/1.0 (+https://weltbeobachter-ship-it.github.io/)'})
 with urllib.request.urlopen(req,timeout=25) as r:return r.read()

def words(s):
 s=unicodedata.normalize('NFKD',s.lower())
 return {w for w in re.findall(r'[a-zäöüß0-9]{4,}',s) if w not in STOP}

def clean_title(t):
 return re.sub(r'\s+-\s+[^-]{2,60}$','',html.unescape(t)).strip()

def slugify(s):
 s=unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode().lower()
 s=re.sub(r'[^a-z0-9]+','-',s).strip('-')[:78]
 return s or hashlib.sha1(s.encode()).hexdigest()[:12]

def parse_feed(cat,q):
 url='https://news.google.com/rss/search?'+urllib.parse.urlencode({'q':q+' when:1d','hl':'de','gl':'DE','ceid':'DE:de'})
 root=ET.fromstring(fetch(url)); out=[]
 for it in root.findall('.//item')[:15]:
  title=(it.findtext('title') or '').strip(); link=(it.findtext('link') or '').strip(); pub=it.findtext('source') or ''
  raw=it.findtext('pubDate') or ''
  try: when=email.utils.parsedate_to_datetime(raw).astimezone(TZ)
  except Exception: when=NOW
  if not title or not link or (NOW-when)>dt.timedelta(hours=30): continue
  low=title.lower()
  if any(x in low for x in SENSITIVE): continue
  out.append({'category':cat,'title':clean_title(title),'full_title':title,'link':link,'publisher':pub.strip() or 'Nachrichtenquelle','when':when})
 return out

def clusters(items):
 groups=[]
 for x in items:
  wx=words(x['title']); best=None; score=0
  for g in groups:
   wy=words(g[0]['title']); s=len(wx&wy)/max(1,min(len(wx),len(wy)))
   if s>score: best,score=g,s
  if best is not None and score>=0.45: best.append(x)
  else: groups.append([x])
 valid=[]
 for g in groups:
  pubs={x['publisher'].lower() for x in g}
  if len(pubs)>=2:
   g.sort(key=lambda x:x['when'],reverse=True)
   valid.append((len(pubs)*10+len(g)+g[0]['when'].timestamp()/1e10,g))
 return [g for _,g in sorted(valid,key=lambda z:z[0],reverse=True)]

def load_state():
 try:return json.loads(STATE.read_text())
 except Exception:return {'published':[]}

def save_state(st):
 STATE.parent.mkdir(exist_ok=True); STATE.write_text(json.dumps(st,ensure_ascii=False,indent=2)+'\n')

def esc(s):return html.escape(s,quote=True)

def article_html(title,cat,summary,url,sources):
 iso=NOW.isoformat(timespec='seconds'); shown=NOW.strftime('%d.%m.%Y, %H:%M Uhr')
 src='\n'.join(f'<li><a href="{esc(x["link"])}" target="_blank" rel="noopener noreferrer external"><strong>{esc(x["publisher"])}</strong>: {esc(x["full_title"])}</a></li>' for x in sources[:4])
 data={"@context":"https://schema.org","@graph":[{"@type":"NewsArticle","mainEntityOfPage":{"@type":"WebPage","@id":url},"headline":title,"description":summary,"datePublished":iso,"dateModified":iso,"inLanguage":"de-DE","author":{"@type":"Organization","name":"Redaktion Weltbeobachter"},"publisher":{"@type":"Organization","name":"Weltbeobachter","url":BASE+"/","logo":{"@type":"ImageObject","url":BASE+"/assets/weltbeobachter-icon.png"}}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Weltbeobachter","item":BASE+"/"},{"@type":"ListItem","position":2,"name":title,"item":url}]}]}
 return f'''<!doctype html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="{esc(summary)}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="{esc(url)}"><meta property="og:type" content="article"><meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(summary)}"><meta property="og:url" content="{esc(url)}"><title>{esc(title)} | Weltbeobachter</title><link rel="stylesheet" href="/assets/styles.css"><script type="application/ld+json">{json.dumps(data,ensure_ascii=False)}</script></head><body><header class="legal-header"><div class="shell legal-nav"><a class="brand" href="/"><span class="brand-copy"><strong>Weltbeobachter</strong><small>NACHRICHTEN IM KONTEXT</small></span></a><a class="legal-back" href="/#latest">← Alle Nachrichten</a></div></header><main class="article-main shell"><article><header class="article-header"><p class="eyebrow dark"><span></span> {esc(cat.upper())}</p><div class="article-status-row"><strong>Automatisch geprüft</strong><span>{len({x['publisher'] for x in sources})} getrennte Quellen</span></div><h1>{esc(title)}</h1><p class="article-deck">{esc(summary)}</p><div class="article-byline"><span>Redaktion Weltbeobachter</span><span>Veröffentlicht: {shown}</span></div></header><div class="article-content"><p>Mehrere voneinander getrennte Nachrichtenquellen berichten aktuell über denselben Kernvorgang. Weltbeobachter veröffentlicht diese Kurzmeldung automatisiert, weil der Themenabgleich mindestens zwei unterschiedliche Herausgeber ergeben hat und keine definierte Risikosperre ausgelöst wurde.</p><h2>Was derzeit belegt ist</h2><p>{esc(summary)}</p><h2>Was noch offen ist</h2><p>Diese automatische Kurzmeldung übernimmt keine weitergehenden Schlussfolgerungen. Details, Ursachen und Folgen sollten anhand der verlinkten Originalberichte und möglicher Primärquellen weiter geprüft werden.</p><section class="article-sources"><h2>Quellen</h2><ol>{src}</ol></section><p><small>Automatische Veröffentlichung nach Zwei-Quellen- und Risikoregel. Bei neuen Informationen kann die Meldung aktualisiert oder korrigiert werden.</small></p></div></article></main></body></html>'''

def update_app(item):
 text=APP.read_text(); marker='const newsItems = ['
 js=json.dumps(item,ensure_ascii=False,indent=2)
 text=text.replace(marker,marker+'\n  '+js.replace('\n','\n  ')+',',1); APP.write_text(text)

def update_sitemap(url):
 text=SITEMAP.read_text(); entry=f'  <url><loc>{url}</loc><lastmod>{NOW.date()}</lastmod></url>\n'
 text=text.replace('</urlset>',entry+'</urlset>'); SITEMAP.write_text(text)

def update_newsmap(st):
 cutoff=NOW-dt.timedelta(hours=48); rows=[]
 for p in st['published']:
  try:t=dt.datetime.fromisoformat(p['time'])
  except Exception:continue
  if t>=cutoff: rows.append(p)
 body=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">']
 for p in rows:
  body.append(f'<url><loc>{esc(p["url"])}</loc><news:news><news:publication><news:name>Weltbeobachter</news:name><news:language>de</news:language></news:publication><news:publication_date>{p["time"]}</news:publication_date><news:title>{esc(p["title"])}</news:title></news:news></url>')
 body.append('</urlset>'); NEWSMAP.write_text('\n'.join(body)+'\n')

def main():
 # Safety gate: do not create thin, image-less or source-incomplete articles.
 # Keeping the workflow as a no-op preserves the existing schedule while
 # preventing it from reintroducing cards that fail the editorial standard.
 print('No automatic short publication: a full editorial article with a primary source and local image is required.')
 return
 st=load_state(); today=NOW.date().isoformat(); todays=[p for p in st['published'] if p.get('time','')[:10]==today]
 if len(todays)>=MAX_DAY: print('Daily cap reached'); return
 all_items=[]
 for cat,q in QUERIES:
  try: all_items.extend(parse_feed(cat,q))
  except Exception as e: print('feed error',cat,e,file=sys.stderr)
 cand=clusters(all_items)[:3]
 if not cand: print('No candidate passed two-source rule'); update_newsmap(st); return
 used={p.get('fingerprint') for p in st['published']}
 chosen=None
 for g in cand:
  fp=hashlib.sha1(' '.join(sorted(words(g[0]['title']))).encode()).hexdigest()[:16]
  if fp not in used: chosen=(g,fp); break
 if not chosen: print('Top candidates already published'); return
 g,fp=chosen; lead=g[0]; title=lead['title']; cat=lead['category']; slug=slugify(title)+'-'+NOW.strftime('%Y%m%d')
 path=f'{cat.lower()}/{slug}'; url=f'{BASE}/{path}'
 pubs=', '.join(dict.fromkeys(x['publisher'] for x in g) )
 summary=f'{title}. Bestätigt durch übereinstimmende aktuelle Berichte von mindestens zwei getrennten Herausgebern ({pubs}).'
 out=ROOT/path/'index.html'; out.parent.mkdir(parents=True,exist_ok=True); out.write_text(article_html(title,cat,summary,url,g))
 item={'id':slug,'url':'/'+path,'category':cat,'title':title,'summary':summary,'tone':{'Wirtschaft':'economy','Technologie':'technology','Klima':'climate'}.get(cat,'world'),'glyph':{'Wirtschaft':'◴','Technologie':'◇','Klima':'≈'}.get(cat,'◉'),'featured':True,'status':'Automatisch geprüft','publishedAt':NOW.strftime('%d.%m.%Y'),'readTime':'3 Min.','verified':f'{len({x["publisher"] for x in g})} Quellen geprüft'}
 update_app(item); update_sitemap(url)
 st['published'].append({'time':NOW.isoformat(timespec='seconds'),'url':url,'title':title,'fingerprint':fp}); st['published']=st['published'][-200:]; save_state(st); update_newsmap(st)
 print('Published',url)
if __name__=='__main__': main()
