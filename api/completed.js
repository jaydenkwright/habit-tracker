const express = require('express')
const router = express.Router()
const Completed = require('../models/completions')

router.get('/:id/:date', async (req, res) => {
    try{
        const completions = await Completed.find({"_id": req.params.id, "date": req.params.date })
            .then(completions => res.json(completions))
    }catch(err){
        res.json({message: error})
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
        res.json( {message: "error" })
    }
})

module.exports = router