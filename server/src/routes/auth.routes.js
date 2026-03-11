const express = require("express");
const {registerUser, loginUser, getProfile} = require("../controllers/auth.controller")
const protect = require("../middleware/authMiddleware")
const User = require("../models/user.model")

const sendEmail = require("../utils/sendEmail");
const generateOtp = require("../utils/generateOtp");

const otpStorage = {};

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser)

router.get("/profile", protect, getProfile );

router.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;

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

    const { email, otp, password } = req.body;

    if (otpStorage[email] != otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP"
      });
    }

    delete otpStorage[email];

    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        success: true,
        message: "User already exists, login successful"
      });
    }

    // create new user
    const newUser = new User({
      email,
      password
    });

    await newUser.save();

    res.json({
      success: true,
      message: "User created successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});

module.exports = router;