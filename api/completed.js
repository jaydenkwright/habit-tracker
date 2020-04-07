const express = require('express')
const router = express.Router()
const verify = require('./verifyToken')
const Completed = require('../models/completions')
const moment = require('moment')

router.get('/:id/:date', async (req, res) => {
    try{
        const start = moment(new Date(req.params.date)).startOf("day")
        const end = moment(new Date(req.params.date)).endOf("day")
        const completions = await Completed.find({"habitId": req.params.id, "date": {
            $gte: start,
            $lt: end
        }})
            .then(completions => res.json(completions))
    }catch(err){
        res.json({message: 'There was an error'})
    }
})

router.get('/:id', async(req, res) => {
    try{
        const completions = await Completed.find({'habitId': req.params.id, completed: true})
            .sort({ date: -1 })
            .then(completions => res.json(completions))
    }catch(err){
        res.json({message: 'There was an error'})
    }
})


router.post('/', async (req, res) => {
    const newCompletion = new Completed({
        habitId: req.body.habitId,
        completed: req.body.completed
    })
    try{
        const saveCompletion = await newCompletion.save()
        res.json(saveCompletion)
    }catch(err){
        res.json( {message: 'There was an error'})
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const completion = await Completed.updateOne({ _id: req.params.id}, 
            {$set: {
                completed: req.body.completed,
            }})
            res.json(completion)
    }catch(err){
        res.json({message: 'There was an error'})
    }
})

module.exports = router