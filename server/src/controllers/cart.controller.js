const User = require("../models/user.model");

const addToCart = async (req, res) => {

  const { productId } = req.body;
  const userId = req.user.id;

  const existingItem = await Cart.findOne({
    user: userId,
    product: productId
  });

  if (existingItem) {
    existingItem.quantity += 1;
    await existingItem.save();
    return res.json(existingItem);
  }

  const newItem = new Cart({
    user: userId,
    product: productId,
    quantity: 1
  });

  await newItem.save();

  res.json(newItem);
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