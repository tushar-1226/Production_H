const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerUser, loginUser, getProfile } = require("../controllers/auth.controller")
const protect = require("../middleware/authMiddleware")
const User = require("../models/user.model")

const sendEmail = require("../utils/sendEmail");
const generateOtp = require("../utils/generateOtp");

const otpStorage = {};

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser)

router.get("/profile", protect, getProfile);

router.post("/send-otp", async (req, res) => {
    try {
        const email = req.body.email.trim().toLowerCase();

        const otp = generateOtp();

        otpStorage[email] = otp;

        await sendEmail(
            email,
            "Your OTP for Liquid Website",
            `Your OTP is ${otp}. It will expire in 5 minutes.`
        );

        res.json({
            success: true,
            message: "OTP sent successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error sending OTP"
        });
    }
});

router.post("/verify-otp", async (req, res) => {

  try {

    let { email, otp, userName, password } = req.body;

    email = email.trim().toLowerCase();

    if (!otpStorage[email]) {
      return res.status(400).json({
        success: false,
        message: "OTP expired or not sent"
      });
    }

    if (Number(otpStorage[email]) !== Number(otp)) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP"
      });
    }

    delete otpStorage[email];

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword
    });

    await newUser.save();

    // 🔑 generate JWT
    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "4d" }
    );

    res.json({
      success: true,
      token
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});
router.post("/google", async (req, res) => {
  try {

    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {

      // create a random password for google users
      const randomPassword = await bcrypt.hash("google-login", 10);

      user = await User.create({
        userName: name,
        email,
        password: randomPassword
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "4d" }
    );

    res.json({
      success: true,
      token,
      user
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Google login failed"
    });

  }
});
module.exports = router;