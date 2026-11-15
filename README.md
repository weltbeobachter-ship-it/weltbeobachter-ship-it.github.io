# weltbeobachter-ship-it.github.io
HeuteBlick – digitales Magazin für Trends, Alltag, Technik, Sport, Beauty und Shopping.

## Betrieb
- `python scripts/build_guides.py` regeneriert die fünf quellengestützten Start-Ratgeber.
- `python scripts/auto_publish.py --dry-run` prüft aktuelle RSS-Cluster ohne Dateiveränderungen.
- `python -m unittest discover -s scripts -p 'test_*.py'` testet Sicherheitsregeln und Sitemaps.
- GitHub Actions versucht dreimal täglich, maximal eine Quellenübersicht pro Berliner Kalendertag zu veröffentlichen. Keine Anzeigen oder Tracking-Skripte sind aktiviert.
- Historische URLs bleiben im Archiv erhalten; Impressum und Datenschutz verweisen weiterhin auf ihre bestehenden zentralen Rechtsseiten. Vor einem öffentlichen Markenwechsel müssen diese Angaben sachlich abgeglichen werden.
