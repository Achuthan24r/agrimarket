const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("AgriMarket Backend Running 🚀");
});

// Connect MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/agrimarket")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
