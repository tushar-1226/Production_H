const express = require("express")
const router = express.Router()

const Drink = require('../models/drinks.model')

const {createDrinks, fetchDrinks, updateDrinks, deleteDrinks} = require('../controllers/drink.controller')

router.post("/", createDrinks)
router.get("/", fetchDrinks)
router.delete("/:id", deleteDrinks)
router.patch("/:id", updateDrinks)


router.get("/milkbased", async (req, res) => {
  const data = await Drink.find({ category: "milkbased" });
  res.json(data);
});

router.get("/juice", async (req, res) => {
  try {
    const data = await Drink.find({ category: "juice" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.query;

    if (!searchTerm) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const regex = { $regex: searchTerm, $options: "i" };

    const drinks = await Drink.find({
      $or: [
        { name: regex },
        { category: regex }
      ]
    });

    res.json(drinks);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const drink = await Drink.findById(req.params.id);

    if (!drink) {
      return res.status(404).json({ message: "Drink not found" });
    }

    res.json(drink);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router