const express = require("express");
const router = express.Router();
const products = require("../MockData/Products");

router.get("/match", (req, res) => {
  const crop = req.query.crop;
  if (!crop) return res.status(400).json({ error: "Crop query param required" });

  const cropName = crop.split(" ")[0].toLowerCase();
  const match = products.find(p => p.name.toLowerCase() === cropName);

  if (!match) return res.status(404).json({ error: "No matching product found" });

  res.json({
    crop,
    matchedProduct: {
      title: match.title,
      price: match.price,
      image: match.image,
      buyLink: match.buyLink
    }
  });
});

module.exports = router;
