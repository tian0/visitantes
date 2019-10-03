let express = require("express")
let userCtr = require("../visitantes/controllers")

let visitorRouter = express.Router()

visitorRouter
    // .get('/', userCtr.getAllUsers)
    .get('/', userCtr.getAllUsers)
    .post('/create', userCtr.createUsers) //executes find middleware first to validate user can be created, next is createUsers

module.exports = visitorRouter