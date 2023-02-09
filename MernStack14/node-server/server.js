const express = require('express') //importing express module with name - express
let port = process.env.PORT || 9000;//use port 9000 unless there exists a preconfigured port 

let app = express();//instantiating express application 
let defaultRouter = require("./routes/defaultRouter");


app.use("/static",express.static("public"))

//main app routes everything to default router
app.use("/",defaultRouter)
app.listen(port,()=>console.log(`server is listed on http://localhost:${port}`))