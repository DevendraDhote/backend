const express = require("express");
const router = express.Router();
const userSchema = require("../../models/user.model.js");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
      return res.send("please fill all the details");

    const user = new userSchema({
      username,
      email,
      password,
    });

    await user.save();

    res.send("user registered");
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userSchema.findOne({email} );

    res.send("user loggedin");
  } catch (error) {
    console.log("error dekho->", error)
    res.send(error);
  }
});

module.exports = router;
