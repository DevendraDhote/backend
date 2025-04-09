const userSchema = require("../models/user.model.js");

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.send({ message: "All fields are required" });
    }

    const user = new userSchema({
      username,
      email,
      password,
    });

    await user.save();
    res.send({ message: "User registered successfully" });
  } catch (error) {
    console.log("error dekho->", error);
    res.send({ message: "Error registering user" });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send({ message: "All fields are required" });
    }

    const user = await userSchema.findOne({ email });
    if (!user) {
      return res.send({ message: "User not found" });
    }

    res.send({ message: "User logged in successfully" });
  } catch (error) {
    console.log("error dekho->", error);
    res.send({ message: "Error logging in user" });
  }
};

module.exports = { registerController, loginController };
