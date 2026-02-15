const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  crops: Array,
  totalAmount: Number,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Order", OrderSchema);
