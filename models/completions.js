const mongoose = require('mongoose')
const Schema = mongoose.Schema

const completionSchema = new Schema({
    habitId: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

Completed = mongoose.model('completed', completionSchema)
module.exports = Completed