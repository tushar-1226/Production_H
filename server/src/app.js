const express = require('express')
const drinkRoute = require('./routes/drinks.route')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/drink", drinkRoute )

module.exports = app