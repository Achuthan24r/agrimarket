const router = require("express").Router();
const Order = require("../models/Order");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const order = await Order.create({
    buyer: req.user.id,
    crops: req.body.crops,
    totalAmount: req.body.totalAmount
  });
  res.json(order);
});

module.exports = router;
