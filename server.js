const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const habits = require('./api/habits')
const completions = require('./api/completed.js')
const db = require('./config/keys').mongoURI
const app = express()
app.use(express.json())

mongoose.connect(process.env.DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to databse'))
    .catch(err => console.log(err))

app.use('/api/habits', habits)
app.use('/api/completed', completions)  

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))