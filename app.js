const express = require('express')
const app = express()  

app.get('/', (req,res) =>{
    res.send("hello timo")
})

app.listen(4500,() =>{
    console.log('am listening')
})
  