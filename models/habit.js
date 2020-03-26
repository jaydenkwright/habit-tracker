const mongoose = require('mongoose')
const Schema = mongoose.Schema

const habitSchema = new Schema({
    userid: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    completions: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Habit = mongoose.model('habit', habitSchema)

module.exports = Habit