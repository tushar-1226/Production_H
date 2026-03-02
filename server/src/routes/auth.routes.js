const express = require("express");
const {registerUser, loginUser, getProfile} = require("../controllers/auth.controller")
const protect = require("../middleware/authMiddleware")
const User = require("../models/user.model")

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser)

router.get("/profile", protect, getProfile );


module.exports = router;