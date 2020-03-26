const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const habits = require('./api/habits')
const completions = require('./api/completed')
const cookieParser = require('cookie-parser');
const auth = require('./api/auth')
const app = express()
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

mongoose.connect(process.env.DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to databse'))
    .catch(err => console.log(err))

app.use('/api/habits', habits)
app.use('/api/completed', completions) 
app.use('/api/user', auth) 

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))