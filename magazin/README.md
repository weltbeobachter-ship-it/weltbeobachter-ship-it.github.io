# BEQVA Magazin — editorial and product lexicon

Static standalone editorial magazine in `magazin/`. Cloudflare Pages publish directory: `magazin`, no build command. Existing news site is unaffected. No third-party scripts, cookies, checkout, customer data or prices. The owner requested display of the complete catalog: the draft includes 631 product names/IDs, brands and categories (71 brands), no supplier data. Product photos are intentionally absent until exact original packshots and usage rights are available. No anonymous or simulated packaging and no imagery of women: current editorial assets are generated nature photographs, not product photos or ingredient claims.

The product lexicon is open by default, with filters, page increments, and an all-items option. Article recommendations, campaign filters and product detail dialogs work even before store launch. Every product has a `data-product-id` and canonical `data-product-url` on its action. The feed's Boolean `linksEnabled` flag defaults to false, independently of its published catalog mode. Only when both published mode and `linksEnabled:true` apply do buttons become real HTTPS links.

## Codex integration handoff

- The exact proposed destination is `https://beqva.de/app/product?product=<id>` with the original URL-encoded catalog ID (slug, maximum 160 characters).
- Implement web fallback on that route so visitors without the app reach the same product, not a generic home page; unavailable or missing products must get a clear fallback.
- Android App Links and iOS Universal Links must support this exact production host and path. Configure corresponding association files and production app signing identities, and test installed/not-installed, cold/warm app launches and all 631 URLs. Do not modify existing preview routing or BEQVA production in this magazine PR.
- Keep `linksEnabled:false` until successful verification; then enable in a separately reviewed release feed. Six existing IDs exceed the old 100-character app parser limit. Support the 160-character contract consistently.
- New products can be supplied by a public, approved-only export validated with `scripts/build_magazin_catalog.py`. Only exact matching `assets/products/<id>.webp` with `imageApproved:true` may be used when rights are confirmed. Missing photos show text, not fabricated product imagery. Do not import supplier costs, stock, customer data or credentials.

Before public deployment: verify Impressum/Datenschutz, editorial and advertising disclosures, use approved product assets only, verify redirects and destination availability, and set up the independent Cloudflare project `beqva-magazin` and sitemap. Keep the current BEQVA store/production, DNS and apps untouched until separately authorized. Reconfigure automation separately around a verified first-party export and reviewable editorial drafts, not the old RSS monitor.

Run `node --test magazin/test/catalog.test.cjs` and `python -m unittest discover -s scripts -p 'test_*.py'` from repository root. Preview with `python -m http.server 8000 --directory magazin`.
