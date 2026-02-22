require('dotenv').config();
const app = require('./src/app')
const connectDB = require('./src/db/db')

connectDB()

app.listen(5000, () => {
  console.log("Server is running at localhost 5000")
})