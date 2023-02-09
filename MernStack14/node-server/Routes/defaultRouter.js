const express = require("express")
const router = express.Router({});//case sensitive, restriction
const defaultModel = require("../DataModel/defaultDataModel")

//get put post delete


//learning purposes only for this method
router.get("/default",(req,res)=>{
    console.log(req.query)
    let mongodbObj = new defaultModel(req.query)
    mongodbObj.save((err,data)=>{
        if(err){
            console.log("err",err)
            console.log("error while saving")
        }else{
            // _id will be create if successful
            res.send(data)
        }
    })
})


//all these get considered as endpoints even considered to be APIs
router.get('/',function(req,res){
    res.send("Hello World")
})

router.get('/hello',function(req,res){
    res.send(`<h1>Welcome to the world of ExpressJS</h1>`)
})


//another method of defaulting not using *
router.get('/index',function(req,res){
   
    res.sendFile(__dirname+"/Public/index.html")
})

module.exports = router