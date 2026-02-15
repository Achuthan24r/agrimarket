const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Crop", CropSchema);
