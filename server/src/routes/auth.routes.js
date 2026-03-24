const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerUser, loginUser, getProfile, sendOtp, verifyOtp, google } = require("../controllers/auth.controller")
const protect = require("../middleware/authMiddleware")
const User = require("../models/user.model")



const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser)
router.get("/profile", protect, getProfile);
router.post("/send-otp", sendOtp );
router.post("/verify-otp", verifyOtp);
router.post("/google", google);

module.exports = router;