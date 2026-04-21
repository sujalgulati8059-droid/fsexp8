const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/mernexp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});