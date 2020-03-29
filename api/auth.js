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
    if(error) return res.json({error: "There was an error with your information"})

    //check if user is in database
    const emailExist = await User.findOne({ email: req.body.email})
    if(emailExist) return res.json({error: 'Email is already in use'})
    // Create new user

    // Password hashing
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
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
     if(error) return res.json({error: 'There was an error with your email or password'})

     // Make sure user exists
     const email = await User.findOne({ email: req.body.email})
     if(!email){
        return res.json({error: 'Email or Password is incorrect'})
     } 

     // Check if password is correct
     const validPassword = await bcrypt.compare(req.body.password, email.password)
     if(!validPassword){
        return res.send({error: 'Email or Password is incorrect'})
     } 

     // Login Token

     const token = jwt.sign({id: email._id}, process.env.TOKEN_SECRET, {
        expiresIn: '1h'
     })
      res.cookie('token', token, {
         httpOnly: true,
       })
    res.header('login-token', token).json({token: token})
 })

router.post('/logout', async (req, res) => {
    try{
        res.clearCookie('token', { path: '/', httpOnly: true})
        res.json({message: "logged out"})
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router