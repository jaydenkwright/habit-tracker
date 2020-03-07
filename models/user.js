const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    username: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 8
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', Schema)