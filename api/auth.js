const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Validation
const joi = require('@hapi/joi')

const registerSchema = joi.object({
    name: joi.string()
        .min(2)
        .required(),
    username: joi.string()
        .min(4)
        .required(),
    email: joi.string()
        .min(6)
        .email()
        .required(),
    password: joi.string()
        .min(8)
        .required()
})

router.post('/register', async (req, res) => {
    const {error} = registerSchema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    //check if user is in database
    const emailExist = await User.findOne({ email: req.body.email})
    if(emailExist) return res.status(400).send('Email is already in use')

    const userExist = await User.findOne({ username: req.body.username})
    if(userExist) return res.status(400).send('Username is already taken')
    // Create new user
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try{
        const savedUser = await user.save()
        res.send(savedUser)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports = router