"""Generate a strictly approved public magazine feed from an explicit export.

Never load supplier research, preview assortment, or credentials. Default dry-run.
The operator must supply an already approved public export with approved=true for
each record and explicitly opt in to writing a release feed.
"""
import argparse
import json
import re
from pathlib import Path

ID = re.compile(r"[a-z0-9][a-z0-9-]{0,159}\Z")
FIELDS = {"id", "name", "brand", "category", "approved"}


def make_feed(data):
    if not isinstance(data, dict) or set(data) not in ({"schema", "mode", "products"}, {"schema", "mode", "linksEnabled", "products"}) or data["schema"] != 1 or data["mode"] != "published" or ("linksEnabled" in data and type(data["linksEnabled"]) is not bool):
        raise ValueError("A published-only export is required")
    products = data["products"]
    if not isinstance(products, list) or len(products) > 10000:
        raise ValueError("Invalid product list")
    ids = set()
    for item in products:
        if not isinstance(item, dict) or not FIELDS.issubset(item) or set(item)-FIELDS not in (set(), {"image", "imageApproved"}) or item["approved"] is not True:
            raise ValueError("Unapproved item or unexpected fields")
        if any(not isinstance(item[k], str) or not ID.fullmatch(item[k]) for k in ("id", "category")) or item["id"] in ids:
            raise ValueError("Invalid or duplicate identity")
        if "image" in item and (item["image"] != f"assets/products/{item['id']}.webp" or item["imageApproved"] is not True):
            raise ValueError("Unapproved or mismatched product photo")
        for key, length in (("name", 240), ("brand", 100)):
            value = item[key]
            if not isinstance(value, str) or not value.strip() or len(value) > length or any(ord(c) < 32 for c in value):
                raise ValueError("Invalid display text")
        ids.add(item["id"])
    return {"schema": 1, "mode": "published", "linksEnabled": data.get("linksEnabled", False), "products": products}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("export", type=Path)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--release-approved", action="store_true")
    args = parser.parse_args()
    feed = make_feed(json.loads(args.export.read_text(encoding="utf-8")))
    if args.output and not args.release_approved:
        parser.error("--output requires --release-approved")
    if args.output:
        args.output.write_text(json.dumps(feed, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
    print(f"Validated {len(feed['products'])} approved products; {'written' if args.output else 'dry run only'}")
