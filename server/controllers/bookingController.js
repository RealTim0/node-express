const Booking = require('../models/bookingModel')
const mongoose = require('mongoose')

const findBookings = async (req, res) =>{
        const user_id = req.user._id
        const workout = await Booking.find({user_id}).sort({createdAt: -1})
        res.status(200).json(workout)
}


const findBooking = async (req, res) =>{
    const { id }= req.params
   
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:" ⛔ 🆔"})
    }
        const booking = await Booking.findById(id)

        if(!booking){
           return res.status(404).json({error: 'No such booking'})
        }
        res.status(200).json(booking)
    
}


const createBooking = async (req, res)=>{
    const {name, email, model, phone, service, appointmentDate} = req.body
    if(!name || !email || !model || !phone || !service || !appointmentDate){
        return res.status(400).json({error:'all fieldsare required'})
    }
    try{
        const user_id = req.user._id
        const booking = await Booking.create({name, email, model, phone, service, appointmentDate, user_id})
        res.status(200).json(booking)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const deleteBooking = async (req, res) =>{
    const { id }= req.params
   
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:" ⛔ 🆔"})
    }
        const booking = await Booking.findOneAndDelete({_id: id})

        if(!booking){
           return res.status(404).json({error: 'No such booking'})
        }
        res.status(200).json(booking)
    
}
const updateBooking = async (req, res) =>{
    const { id }= req.params
   
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:" ⛔ 🆔"})
    }
        const booking = await Booking.findOneAndUpdate({_id: id},{...req.body })

        if(!booking){
           return res.status(404).json({error: 'No such booking'})
        }
        res.status(200).json(booking)
    
}



module.exports = {
    createBooking,
    findBooking,
    findBookings,
    deleteBooking,
    updateBooking
}