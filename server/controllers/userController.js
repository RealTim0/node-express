const USER = require('../models/usermodel')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const validator = require('validator')
const jwt = require("jsonwebtoken")
const mongoose= require("mongoose")

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn :'3d'})
}
/////////////////////////////////////////////////////////////
const getUsers = asyncHandler(async(req, res)=>{
    const users = await USER.find()
    if(users){
        res.status(200).json(users)
    }else{
        return res.status(400).json({errror:"error"})
    }
})
////////////////////// ///////////////////////////////////
const loginUser = asyncHandler(async (req, res) =>{
    const {email ,  password} = req.body

    if(!email || !password){
        return res.status(400).json({error:"all fields are required"})
    }
    const user = await USER.findOne({email})
    if(!user){
        return res.status(400).json({error:"No such user"})
    }
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        return res.status(400).json({error:"wrong password"})
    }else{
        const token = createToken(user._id)
       const name = (user.username)
       const id = (user._id)
       
       res.status(200).json({email, name, id, token})
    }
})

////////////////////////////////////////////////////
const deleteUser = asyncHandler(async(req, res)=>{

    
        const { id }= req.params
       
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:" ⛔ 🆔"})
        }
            const user = await USER.findOneAndDelete({_id: id})
    
            if(!user){
               return res.status(404).json({error: 'No such user'})
            }
            res.status(200).json({mss:'sorry to see you leave'})
        
    console.log(req.params)
})
/////////////////////////////////////////////////////
const signupUser = asyncHandler(async (req, res) =>{
    const {email ,username,  password} = req.body

    if(!username || !email || !password){
        return res.status(400).json({error:"all fields are required"})
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({error:`${email} is an invalid email`})
    }
    if(!validator.isStrongPassword(password)){
        return res.status(400).json({error:`password must have:
         upper and lower cases, numbers, special characters and a min of 8 characters
        `})
    }
    const duplicate = await USER.findOne({email})
    if(duplicate){
        return res.status(400).json({error:"email  is already registered"})
    }
    const hashedPwd = await bcrypt.hash(password, 10)

    const user = await USER.create({email , username , 'password':hashedPwd})
    const token = createToken(user._id)

   
    if(user){
        const name = (user.username)
       const id = (user._id)
        res.status(200).json({email, name, id, token})
    }else{
      res.status(400).json({error:"failed to create a new user"})
        
    }

})

module.exports =  {
    loginUser,
    signupUser,
    deleteUser,
    getUsers
}