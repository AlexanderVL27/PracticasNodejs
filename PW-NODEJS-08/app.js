const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("hey que tal desde express")
})

app.listen(3000)
