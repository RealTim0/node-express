require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const sendEmail = require("./controllers/sendEmail")
const userroutes = require('./routes/userRoutes')
const bookingroutes = require('./routes/bookingRoutes')
const mongoose  =require ('mongoose')

mongoose.connect(process.env.MONGO_URI)

app.use(express.json())
app.use(cors())
app.post('/contact', sendEmail)
app.use('/user', userroutes )
app.use('/booking', bookingroutes)

mongoose.connection.once('open',()=>{
    console.log("connected")
    app.listen(5000,()=>{
        console.log('am listening')
    })
} )





