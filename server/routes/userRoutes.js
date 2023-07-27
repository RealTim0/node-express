const express = require("express")


const Router = express.Router()
const {
    loginUser,
    signupUser,
    deleteUser,
    getUsers
} = require('../controllers/userController')
Router.get('/', getUsers)
Router.post('/login', loginUser)
Router.post('/signup', signupUser)
Router.delete('/delete/:id', deleteUser)

module.exports = Router