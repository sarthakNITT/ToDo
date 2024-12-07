const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./Database/DB')
const userRoutes = require('./routes/route')
require('dotenv').config()

const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(cors())

connectDB()

app.use('/', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})