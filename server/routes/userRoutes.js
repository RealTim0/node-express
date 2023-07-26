const express = require("express")


const Router = express.Router()
const {
    loginUser,
    signupUser
} = require('../controllers/userController')

Router.post('/login', loginUser)
Router.post('/signup', signupUser)

module.exports = Router