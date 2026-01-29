const dotenv = require("dotenv")
const express = require('express')
const connectDB = require("./db")

dotenv.config()
const app = express()
connectDB()
const cors = require("cors")
const router = require("./routes/artRoutes")

app.use(cors())
app.use(express.json())
app.use("/api", router)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
