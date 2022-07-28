const {Router} = require('express')
const path = require('path')
const fs = require('fs')
const User = require('../model/user')

const router = Router()

router.get('/', async (req, res) => { // first task router
    try {
        const {name, surname, age} = req.query
        if (+age > 18) {
            res.end(`Hello ${name} ${surname}`)
        } else {
            res.end('You are 18 or less!')
        }
    } catch (err) {
        res.end(err.message)
    }
})

router.post('/', async (req, res) => { // second task router
    try {
        const {name, surname, age, email} = req.query
        if (+age > 18) {
            await User.create({name, surname, email})
            res.end('Done')
        } else {
            res.end('You are 18 or less!')
        }
    } catch (err) {
        res.end(err.message)
    }
})

router.get('/:email', async (req, res) => { // third task router
    try {
        const {email} = req.params
        const raws = await User.find({email}).lean()
        for (const raw of raws) {
            res.write(`${raw.name} ${raw.surname}\n`)
        }
        res.end()
    } catch (err) {
        res.end(err.message)
    }
})

module.exports = router