const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Add user
router.post("/add", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("User Added");
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;