const express = require('express')
const router = express.Router()
const verify = require('./verifyToken')
const Habit = require('../models/habit')

// GET ALL HABITS
router.get('/', async (req, res) => {
    try{
    const habits = await Habit.find()
        .sort({ date: -1 })
        .then(habits => res.json(habits))
    }catch(err){
        res.json({message: err})
    }
})



// GET SPECIFIC HABIT
router.get('/:id', async (req, res) => {
    try{
        const habit = await Habit.findById(req.params.id)
        res.json(habit)
    }catch(err){
        res.json({message: err})
    }
})

// ADD A HABIT
router.post('/', async (req, res) => {
    const newHabit = new Habit({
        title: req.body.title,
        description: req.body.description,
    })
    try{
        const savedHabit = await newHabit.save()
        res.json(savedHabit)
    }catch(err){
        res.json({ message: err})
    }
})

// DELETE A HABIT
router.delete('/:id', async (req, res) => {
    try{
        const habit = await Habit.findById(req.params.id)
            .then(habit => habit.remove())
                .then(() => res.json({ delted: true}))
            .catch(err => res.status(404).json({ deleted: false}))
        res.json(habit)
    }catch(err){
        res.json({message: err})
    }
})

// UPDATE A HABIT
router.patch('/:id', async (req, res) => {
    try{
        const habit = await Habit.updateOne({ _id: req.params.id}, 
            {$set: {
                title: req.body.title,
                description: req.body.description
            }})
            res.json(habit)
    }catch(err){
        res.json({message: err})
    }
})

router.patch('/increase/:id', async(req, res) => {
    try{
        const habit = await Habit.findOneAndUpdate({ _id: req.params.id }, { $inc: { completions: 1 }}, {useFindAndModify: false})
            res.json(habit)
    }catch(err){
        res.json({message: err})
    }
})

router.patch('/decrease/:id', async(req, res) => {
    try{
        const habit = await Habit.findOneAndUpdate({ _id: req.params.id }, { $inc: { completions: -1 }}, {useFindAndModify: false})
            res.json(habit)
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router