const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["farmer", "buyer", "admin"], default: "buyer" }
});

module.exports = mongoose.model("User", UserSchema);
