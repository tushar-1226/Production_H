const User = require("../models/user.model");

const addToCart = async (req, res) => {
  try {

    const { productId } = req.body;
    const userId = req.user.userId;

    const user = await User.findById(userId);

    const itemIndex = user.cart.findIndex(
      item => item.productId.toString() === productId
    );

    // If product already in cart
    if (itemIndex > -1) {
      user.cart[itemIndex].quantity += 1;
    } 
    // If product not in cart
    else {
      user.cart.push({
        productId,
        quantity: 1
      });
    }

    await user.save();

    res.json({
      cart: user.cart
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId)
      .populate("cart.productId");

    res.json({
      cart: user.cart
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId, action } = req.body;

    const user = await User.findById(userId);

    const itemIndex = user.cart.findIndex(
      item => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (action === "increase") {
      user.cart[itemIndex].quantity += 1;
    }

    if (action === "decrease") {
      user.cart[itemIndex].quantity -= 1;

      // remove if quantity becomes 0
      if (user.cart[itemIndex].quantity <= 0) {
        user.cart.splice(itemIndex, 1);
      }
    }

    if (action === "remove") {
      user.cart.splice(itemIndex, 1);
    }

    await user.save();

    res.json({ cart: user.cart });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { addToCart, getCart, updateCart };