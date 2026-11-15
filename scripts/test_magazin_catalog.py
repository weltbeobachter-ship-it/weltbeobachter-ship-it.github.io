import unittest
from build_magazin_catalog import make_feed


class MagazineFeedTest(unittest.TestCase):
    def setUp(self):
        self.item = dict(id="example-duft", name="Demo Duft", brand="Demo", category="fragrance", approved=True)

    def feed(self, products, mode="published"):
        return make_feed(dict(schema=1, mode=mode, products=products))

    def test_release(self):
        self.assertEqual(self.feed([self.item])["products"], [self.item])
        self.assertFalse(self.feed([self.item])["linksEnabled"])
        self.assertTrue(make_feed(dict(schema=1, mode="published", linksEnabled=True, products=[self.item]))["linksEnabled"])
        with self.assertRaises(ValueError): make_feed(dict(schema=1, mode="published", linksEnabled="true", products=[self.item]))

    def test_block_preview_and_private_fields(self):
        with self.assertRaises(ValueError): self.feed([self.item], "preview")
        with self.assertRaises(ValueError): self.feed([dict(self.item, cost=5)])
        with self.assertRaises(ValueError): self.feed([dict(self.item, approved=False)])

    def test_duplicate_and_invalid_identity(self):
        with self.assertRaises(ValueError): self.feed([self.item, self.item])
        with self.assertRaises(ValueError): self.feed([dict(self.item, id="https://example.com")])

    def test_photos_need_exact_path_and_rights(self):
        image = "assets/products/example-duft.webp"
        self.assertEqual(self.feed([dict(self.item, image=image, imageApproved=True)])["products"][0]["image"], image)
        with self.assertRaises(ValueError): self.feed([dict(self.item, image=image, imageApproved=False)])
        with self.assertRaises(ValueError): self.feed([dict(self.item, image="https://example.com/a.webp", imageApproved=True)])
