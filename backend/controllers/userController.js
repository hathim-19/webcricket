const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { userName, nickName, email, phoneNumber, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10); // A salt is a random string added to a password before
    // hashing it. 10 is the number of salt rounds (higher values mean stronger security but slower
    // processing).
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      userName,
      nickName,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {});
    console.log("User data on login:", user);
    res.json({ message: "Login successful", token, username: user.userName });
  } catch (err) {
    console.error(err.message);
  }
  res.status(500).json({ message: "Server error" });
};

module.exports = { registerUser, loginUser };
