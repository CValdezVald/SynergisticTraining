console.log("this will be the entry point of my node api")
const express = require('express')
const bodyParser = require('body')
const app = express()



//all these get considered as endpoints even considered to be APIs
app.get('/',function(req,res){
    res.send("Hello World")
})

app.get('/hello',function(req,res){
    res.send(`<h1>Welcome to the world of ExpressJS</h1>`)
})

app.get('/name',function(req,res){
    const _name = req.query["name"]
    res.send(`<h1>Name is ${_name}</h1>`)
})


app.listen(3000)

console.log("express is listening on localhost port http://localhost:3000")