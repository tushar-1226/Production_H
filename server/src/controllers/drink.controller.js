const Drink = require('../models/drinks.model')

const createDrinks = async (req, res) => {
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
}

const fetchDrinks = async (req, res) => {
    try {
        const drinks = await Drink.find()

        res.status(200).json({
            message: "Drink Fetched",
            drinks: drinks
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Unable to Load drinks",
            error: error.message
        })
    }
}

const deleteDrinks = async (req,res) => {
    try {
        const id = req.params.id

        await Drink.findByIdAndDelete(id)({
            _id: id
        })

        res.status(200).json({
            message: "Drink Deleted Sucessfully"
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Deletion failed",
            error: error.message
        })
    }
}

const updateDrinks = async (req, res) => {
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
}
module.exports = {createDrinks, fetchDrinks, updateDrinks, deleteDrinks  }