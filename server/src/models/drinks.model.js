const mongoose = require('mongoose')

const drinksSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    price: Number,
    category: String,
    rating: Number,
    isAvailable: Boolean,
    size: String,
})
const Drink = mongoose.model("Drink", drinksSchema)

module.exports = Drink