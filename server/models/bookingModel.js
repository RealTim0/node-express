const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    appointmentDate:{
        type:String,
        required:true
    },

    user_id:{
        required:true,
        type:String
    }
}
,{timestamps : true})

module.exports  = mongoose.model('Booking', bookingSchema)