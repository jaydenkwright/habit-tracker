const express = require('express')
const router = express.Router()
const verify = require('./verifyToken')
const Habit = require('../models/habit')

// GET ALL HABITS
router.get('/', verify, async (req, res) => {
    try{
        const habits = await Habit.find({"userid": req.user.id})
            .sort({ date: -1 })
            .then(habits => res.json(habits))
    }catch(err){
        res.json({message: 'There was an error'})
    }
})


// GET SPECIFIC HABIT
router.get('/:id', async (req, res) => {
    try{
        const habit = await Habit.findById(req.params.id)
        res.json(habit)
    }catch(err){
        res.json({message: 'There was an error'})
    }
})

// ADD A HABIT
router.post('/', verify, async (req, res) => {
    const newHabit = new Habit({
        userid: req.user.id,
        title: req.body.title,
        description: req.body.description,
    })
    try{
        const savedHabit = await newHabit.save()
        res.json(savedHabit)
    }catch(err){
        res.json({ message: 'There was an error'})
    }
})

// DELETE A HABIT
router.delete('/:id', async (req, res) => {
    try{
        const habit = await Habit.findById(req.params.id)
            .then(habit => habit.remove())
                .then(() => res.json({ deleted: true}))
            .catch(err => res.status(404).json({ deleted: false}))
        res.json(habit)
    }catch(err){
        res.json({message: 'There was an error'})
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
        res.json({message: 'There was an error'})
    }
})

router.patch('/increase/:id', async(req, res) => {
    try{
        const habit = await Habit.findOneAndUpdate({ _id: req.params.id }, { $inc: { completions: 1 }}, {useFindAndModify: false})
            res.json(habit)
    }catch(err){
        res.json({message: 'There was an error'})
    }
})

router.patch('/decrease/:id', async(req, res) => {
    try{
        const habit = await Habit.findOneAndUpdate({ _id: req.params.id }, { $inc: { completions: -1 }}, {useFindAndModify: false})
            res.json(habit)
    }catch(err){
        res.json({message: 'There was an error'})
    }
})

module.exports = router