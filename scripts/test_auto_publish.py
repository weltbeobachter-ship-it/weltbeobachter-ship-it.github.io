import datetime as dt
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
import xml.etree.ElementTree as ET
import auto_publish as p

NOW = dt.datetime(2026, 11, 15, 12, tzinfo=p.TZ)

class PublisherTests(unittest.TestCase):
    def entry(self, name, host, title='Bundesliga Fußball Spieltag München Dortmund'):
        return dict(category='Sport', title=title, publisher=name, source_url='https://'+host, link='https://news.google.com/rss/x', published=NOW)

    def test_same_domain_not_independent(self):
        self.assertEqual(p.cluster_items([self.entry('A','example.org'),self.entry('B','www.example.org')]),[])

    def test_two_domains(self):
        groups=p.cluster_items([self.entry('A','example.org'),self.entry('B','example.net')])
        self.assertEqual(len(groups),1)
        self.assertEqual(len(groups[0]),2)

    def test_no_overlap(self):
        self.assertEqual(p.cluster_items([self.entry('A','example.org'),self.entry('B','example.net','Apple Smartphone Kamera Update')]),[])

    def test_urls(self):
        for value in ['javascript:alert(1)','https://user:pw@example.org','//example.org','']:
            self.assertFalse(p.valid_http_url(value))
        self.assertTrue(p.valid_http_url('https://example.org/news'))

    def test_trends_are_leads_not_facts(self):
        xml='<rss><channel><item><title>Black Friday</title></item><item><title>Krieg Fußball</title></item><item><title>Unrelated name</title></item></channel></rss>'
        with patch.object(p,'fetch',return_value=xml.encode()):
            self.assertEqual(p.trend_queries(),[('Shopping','Black Friday -Krieg -Wahl')])

    def test_sensitive_and_future_feed(self):
        xml='''<rss><channel><item><title>München Dortmund Fußballspieler getötet</title><source url="https://example.org">A</source><link>https://example.org/a</link><pubDate>Sun, 15 Nov 2026 09:00:00 GMT</pubDate></item><item><title>Bundesliga Fußball München Dortmund</title><source url="https://example.org">A</source><link>https://example.org/b</link><pubDate>Sun, 15 Nov 2026 14:00:00 GMT</pubDate></item><item><title>Bundesliga Fußball Spielplan München</title><source url="https://example.org">A</source><link>https://example.org/c</link><pubDate>Sun, 15 Nov 2026 09:00:00 GMT</pubDate></item></channel></rss>'''
        with patch.object(p,'fetch',return_value=xml.encode()):
            self.assertEqual(len(p.parse_feed('Sport','q',NOW)),1)

    def test_prune_and_reinsert_news_sitemap(self):
        with tempfile.TemporaryDirectory() as tmp:
            path=Path(tmp)/'news.xml'
            path.write_text('<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"><url><loc>https://example.org/old</loc><news:news><news:publication_date>2026-11-01T12:00:00+01:00</news:publication_date></news:news></url></urlset>',encoding='utf-8')
            with patch.object(p,'NEWSMAP',path):
                p.prune_newsmap(NOW)
                self.assertEqual(len(ET.parse(path).getroot()),0)
                p.update_newsmap('https://example.org/new','Neues Thema',NOW)
                self.assertEqual(len(ET.parse(path).getroot()),1)

if __name__=='__main__': unittest.main()
