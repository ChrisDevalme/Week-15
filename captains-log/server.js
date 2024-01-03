require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Log = require('./models/log')

const app = express()


app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('conncected to mogoDB')
})

// I.N.D.U.C.E.S 

//Index

// New
app.get('/logs/new', (req, res) => {
    res.render('logs/new')
})

// Delete

// Update

//Create
app.post('/logs', async (req, res) => {
    if (req.body.shipIsBroken === 'on' ) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        const createdLog = await Log.create(req.body)
        res.send(req.body)
    } catch (error) {
        res.status(400).send({ message: error.message})
    } 
})

// Edit

// Show





app.listen(3000, () => {
    console.log("We're connected")
})
