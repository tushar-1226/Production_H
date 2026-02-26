const express = require('express')
const drinkRoute = require('./routes/drinks.route')
const cors = require("cors")
const authRoutes = require("./routes/auth.routes")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/drink", drinkRoute )
app.use("/api/auth", authRoutes)

module.exports = app