//create db connection, datamodel and schema for datmodel to connecet with mongodb server
let mongooseObj = require("mongoose"),//importing the mongoose module object
mongoSchema = mongooseObj.Schema //using the schema class from mongoose


//create db with name mernstack14 or opens a connection if it exists
mongooseObj.connect("mongodb://127.0.0.1/mernstack14")

let defaultSchema = new mongoSchema({
    UserName:{type: String, required: true},
    Session: String,
    Address: String
})

let defaultModel = mongooseObj.model("first",defaultSchema)

module.exports = defaultModel; //exoirts default model with all the functions of mongoose