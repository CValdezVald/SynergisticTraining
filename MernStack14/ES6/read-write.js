
let fs = require("fs");


console.log("File system start")

//blocking synchronous 
// let filedata = fs.readFileSync("./promise.js","utf-8")
// console.log(filedata);


//asynchronous file reading api call and waits until whole file is read then returns 
fs.readFile("./promise.js","utf-8",(err,data)=>{
console.log(data);
console.log(err);
})

console.log("File system ends")