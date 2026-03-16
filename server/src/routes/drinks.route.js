const express = require("express")
const router = express.Router()

const Drink = require("../models/drinks.model")

const { createDrinks, fetchDrinks, updateDrinks, deleteDrinks } = require("../controllers/drink.controller")

router.post("/", createDrinks)

router.get("/", fetchDrinks)

router.delete("/:id", deleteDrinks)

router.patch("/:id", updateDrinks)

router.get("/search", search)

router.get("/:id", async (req, res) => {
  try {

    const drink = await Drink.findById(req.params.id)

    if (!drink) {
      return res.status(404).json({ message: "Drink not found" })
    }

    res.json(drink)

  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})


module.exports = router