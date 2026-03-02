const express = require("express");
const router = express.Router();

const { addToCart, getCart, updateCart } = require("../controllers/cart.controller");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add-to-cart", authMiddleware, addToCart);
router.get("/get-cart", authMiddleware, getCart);
router.put("/update-cart", authMiddleware , updateCart);


module.exports = router;