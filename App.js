const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")


const app=(express.json())
const cors=(cors())


mongoose.connect("mongodb+srv://aravind336:aravind336@cluster0.hsvdpyv.mongodb.net/collegeDB?retryWrites=true&w=majority",
{
useNewUrlParser:true
})



app.listen(3000,()=>{
    console.log("Server Running..")
})