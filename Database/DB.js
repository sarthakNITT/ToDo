const mongoose = require('mongoose')
require('dotenv').config()

const URL = process.env.MONGODB_URL

const connectDB = async ()=>{
    try {
        await mongoose.connect(URL)
        console.log('Connected to Database')
    } catch (err) {
        console.log(`Error while connecting to database: ${err}`)
    }
}

module.exports = connectDB;