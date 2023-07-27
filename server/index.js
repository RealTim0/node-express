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
app.use(cors(
    {
        origin:"https://riri-car-repair-shop-frontend.vercel.app"
    }
))
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})
app.post('/api/contact', sendEmail)
app.use('/api/user', userroutes )
app.use('/api/booking', bookingroutes)

mongoose.connection.once('open',()=>{
    console.log("connected")
    app.listen(5000,()=>{
        console.log('am listening')
    })
} )





