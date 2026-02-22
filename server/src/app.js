const express = require('express')
const drinkRoute = require('./routes/drinks.route')

const app = express()
app.use(express.json())

app.use("/api/drink", drinkRoute )

module.exports = app