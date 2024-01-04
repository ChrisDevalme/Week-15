const mongoose = require('mongoose')

const logsSchema = new mongoose.Schema({
    title : { type: String, require: true },
    entry: { type: String, require: true, timestamps: true },
    shipIsBroken: { type: Boolean, default: true },
    

})

const Log = mongoose.model('Log', logsSchema)

module.exports = Log