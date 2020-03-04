const mongoose = require('mongoose')
const Schema = mongoose.Schema

const habitSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Habit = mongoose.model('habit', habitSchema)

module.exports = Habit