//This file defines the model or Schema(Mongo) for the DB entry
let mongoose = require("mongoose")

let Schema = mongoose.Schema //Schema is a DB 

let Visitor = new Schema({
    _id: {
        type: Number,
        required: false,
        default: 100
    },
    date: {
        type: Date,
        default: Date.now,
        required: false
    },
    name: {
        type: String,
        default: "Anonimo",
        required: false
    },
})

module.exports = mongoose.model('Visitor', Visitor)