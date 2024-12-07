const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    createdAT:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Task', userSchema)