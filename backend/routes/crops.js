const router = require("express").Router();
const Crop = require("../models/Crop");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const crop = await Crop.create({
    ...req.body,
    farmer: req.user.id
  });
  res.json(crop);
});

router.get("/", async (req, res) => {
  const crops = await Crop.find().populate("farmer", "name");
  res.json(crops);
});

module.exports = router;
