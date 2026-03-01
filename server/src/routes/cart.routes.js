const express = require("express");
const router = express.Router();

const { addToCart, getCart } = require("../controllers/cart.controller");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add-to-cart", authMiddleware, addToCart);
router.get("/get-cart", authMiddleware, getCart);

module.exports = router;