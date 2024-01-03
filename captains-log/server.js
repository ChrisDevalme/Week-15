require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
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

// Create

// Edit

// Show

app.listen(3000, () => {
    console.log("We're connected")
})
