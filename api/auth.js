const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const joi = require('@hapi/joi')
const jwt = require('jsonwebtoken')
const passport = require('passport')

// REGISTRATION
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

    // Password hashing
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })
    try{
        const savedUser = await user.save()
        res.send(savedUser)
    }catch(err){
        res.status(400).send(err)
    }
})

// LOGIN

const loginSchema = joi.object({
    email: joi.string()
        .required(),
    password: joi.string()
        .required()
})

 router.post('/login', async (req, res) => {
     const {error} = loginSchema.validate(req.body);
     if(error) return res.status(400).send(error.details[0].message)

     // Make sure user exists
     const email = await User.findOne({ email: req.body.email})
     if(!email){
        return res.json({error: 'Username or Password is incorrect'})
     } 

     // Check if password is correct
     const validPassword = await bcrypt.compare(req.body.password, email.password)
     if(!validPassword){
        return res.send({error: 'Username or Password is incorrect'})
     } 

     // Login Token

     const token = jwt.sign({id: email._id}, process.env.TOKEN_SECRET)
      res.cookie('token', token, {
         httpOnly: true,
       })
    res.header('login-token', token).json({token: token})
 })

module.exports = router