
const User = require("../models/user.model");

const addToCart = async (req, res) => {
  try {
    const userId = req.user.userId;   // comes from JWT middleware
    const { productId } = req.body;

    const user = await User.findById(userId);

    // check if product already exists in cart
    const itemIndex = user.cart.findIndex(
      item => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      // increase quantity
      user.cart[itemIndex].quantity += 1;
    } else {
      // add new product
      user.cart.push({
        productId,
        quantity: 1
      });
    }

    await user.save();

    res.json({
      message: "Product added to cart",
      cart: user.cart
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await User.findById(userId)
      .populate("cart.productId");

    res.json({
      cart: user.cart
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addToCart, getCart };