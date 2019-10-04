let mongoose = require("mongoose") //libreria para interactuar con MongoDB
let Visitor = require("../visitantes/models") //permite interaccion fon info de DB
let DB = require("../visitantes/database")


//export const getAllUsers = (req, res) => {
const getAllUsers = async (req, res) => {
    //Call DB to get all users
    // res.send("GET all users")

    console.log("getAllUsers()", DB.connection);
    DB.connect()

    await Visitor.find()
        .then((response) => {
            console.log(response);
            res.status(201).send({ "users": response, "status": 201 })
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ "error": error.message, "status": 500 })
        })

    DB.disconnect()
}

const createUsers = async (req, res) => {
    //DB is already open from first middleware find()
    DB.connect()
    let newVisitor = new Visitor(req.body)
    await newVisitor.save()
        .then((response) => {
            res.status(201).send(`<h1>El visitante fue creado con exito</h1>`) //printing json format

        })
        .catch((error) => {
            console.log("error", error.message);
            res.status(404).send(`<h1>Error: ` + error.message + `</h1>`)
        })

    DB.disconnect()
}

module.exports = {
    getAllUsers,
    createUsers
    // deleteUsers,
    // updateUsers,
    // find
}