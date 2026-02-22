const express = require("express")
const router = express.Router()

const Drink = require('../models/drinks.model')

router.post("/", async (req, res) => {
    try {
        const drink = await Drink.create(req.body)

        res.status(201).json({
            message: "Drink created",
            drink
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Unable to Post",
            error: error.message
        })
    }
})

router.get("/", async (req, res) => {

    try {
        const drink = await Drink.find()

        res.status(200).json({
            message: "Drink Fetched",
            drink: drink
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Unable to Load drinks",
            error: error.message
        })
    }
})

router.delete("/:id", async (req, res) => {

    try {
        const id = req.params.id

        await Drink.findOneAndDelete({
            _id: id
        })

        res.status(200).json({
            message: "Notes Deleted Sucessfully"
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Deletion failed",
            error: error.message
        })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id

        const updatedDrink = await Drink.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        res.status(200).json({
            message: "Drink updated successfully",
            updatedDrink
        })

    } catch (error) {
        res.status(500).json({
            message: "Update failed",
            error: error.message
        })
    }
})

module.exports = router