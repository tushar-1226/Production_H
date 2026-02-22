const express = require("express")
const router = express.Router()

const Drink = require('../models/drinks.model')

const {createDrinks, fetchDrinks, updateDrinks, deleteDrinks} = require('../controllers/drink.controller')

router.post("/", createDrinks)
router.get("/", fetchDrinks)
router.delete("/:id", deleteDrinks)
router.patch("/:id", updateDrinks)

module.exports = router