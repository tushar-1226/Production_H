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

    const category = req.query.category

    let drinks

    if (category) {
      drinks = await Drink.find({ category })
    } else {
      drinks = await Drink.find()
    }

    res.json(drinks)

  } catch (error) {
    res.status(500).json({ message: error.message })
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

const search =  async (req, res) => {
  try {

    const searchTerm = req.query.query

    if (!searchTerm) {
      return res.status(400).json({ message: "Search query is required" })
    }

    const regex = { $regex: searchTerm, $options: "i" }

    const drinks = await Drink.find({
      $or: [
        { name: regex },
        { category: regex }
      ]
    })

    res.json(drinks)

  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}
 const findDrink = async (req, res) => {
  try {

    const drink = await Drink.findById(req.params.id)

    if (!drink) {
      return res.status(404).json({ message: "Drink not found" })
    }

    res.json(drink)

  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

module.exports = {createDrinks, fetchDrinks, updateDrinks, deleteDrinks, search, findDrink }