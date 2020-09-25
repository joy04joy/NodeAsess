const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async(req,res) => {
    try{
            const users = await User.find()
            res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
            const user = await User.findById(req.params.id)
            res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact
    })

    try{
        const a1 = await user.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


module.exports = router