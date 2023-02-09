//current server.js is too bulky need to simply and compartmentalize

console.log("this will be the entry point of my node api")
const { response } = require('express')
const express = require('express')


//invocation of express application
const app = express()
const adminApp = express() //can have multiple express applications


//setup up middleware to handle static files needed  to serve client
//such as images can use this
app.use(`/static`,express.static('Public'))

//all these get considered as endpoints even considered to be APIs
app.get('/',function(req,res){
    res.send("Hello World")
})

app.get('/hello',function(req,res){
    res.send(`<h1>Welcome to the world of ExpressJS</h1>`)
})


//another method of defaulting not using *
app.get('/index',function(req,res){
   
    res.sendFile(__dirname+"/Public/index.html")
})
app.get('/name',function(req,res){
    const _name = req.query["name"]
    res.send(`<h1>Name is ${_name}</h1>`)
})



//api that adds parameters via query
app.get('/add',function(req,res){
    const _var1 = req.query["v1"]
    const _var2 = req.query["v2"]
    const _var3 = req.query["v3"]
    res.send(`<h1>Sum is:  ${parseInt(_var1)+parseInt(_var2)}</h1><h2>Third query is ${_var3}</h2>`)
})

//passing data through rout
app.get('/routeparams/:v1/:v2/:v3/add',function(req,res){
    const _var1 = req.params["v1"]
    const _var2 = req.params["v2"]
    const _var3 = req.params["v3"]
    
    res.send(`<h1>Sum is:  ${parseInt(_var1)+parseInt(_var2)}</h1><h2>Third query is ${_var3}</h2>`)
})

//passing name and last name with session and saving to a file

app.get(`/getUser/:v1/:v2/:v3/user`,(req,res)=>{
    const _name = req.params["v1"]
    const _last = req.params["v2"]
    const _session = req.params["v3"]
 


    
})

app.use("/admin",adminApp)

adminApp.get("/hello",(req,res)=>{

    res.json({"message: " : "hello from admin"})
})
//wild card operato to serve as default info fallback
// app.get('*',function(req,res){

//     res.sendFile(__dirname+"/Public/index.html")
// })

app.listen(3000)

console.log("express is listening on localhost port http://localhost:3000")